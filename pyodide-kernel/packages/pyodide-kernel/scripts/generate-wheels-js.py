import os
import json
import shutil
import subprocess
import sys

from pathlib import Path


def which(cmd):
    """find a command, maybe with a weird windows extension"""
    return str(
        Path(
            shutil.which(cmd)
            or shutil.which(f"{cmd}.exe")
            or shutil.which(f"{cmd}.cmd")
            or shutil.which(f"{cmd}.bat")
        ).resolve()
    )


ENC = "utf-8"
PYODIDE_KERNEL_PACKAGE = Path(__file__).parent.parent
PYODIDE_KERNEL_WHEELS = PYODIDE_KERNEL_PACKAGE / "pypi"
PYODIDE_KERNEL_WHEEL_TS = PYODIDE_KERNEL_PACKAGE / "src" / "_pypi.ts"
PYODIDE_KERNEL_PACKAGE_JSON = json.loads(
    (PYODIDE_KERNEL_PACKAGE / "package.json").read_text(ENC)
)
NOARCH_WHL = "-py3-none-any.whl"
HATCH = [sys.executable, "-m", "hatch"]
SOURCE_DATE_EPOCH = (
    subprocess.check_output([which("git"), "log", "-1", "--format=%ct"])
    .decode("utf-8")
    .strip()
)
PYODIDE_KERNEL_PACKAGES = {
    PYODIDE_KERNEL_PACKAGE / py_pkg: version
    for py_pkg, version in PYODIDE_KERNEL_PACKAGE_JSON.get("pyodide-kernel", {})
    .get("packages", {})
    .items()
}


def build_wheels():
    for py_pkg in PYODIDE_KERNEL_PACKAGES.keys():
        print(f"[{py_pkg.name}] trying in-tree build...", flush=True)
        args = [*HATCH, "build"]
        env = os.environ.update(SOURCE_DATE_EPOCH=SOURCE_DATE_EPOCH)
        subprocess.check_call(args, cwd=str(py_pkg), env=env)


def copy_wheels():
    PYODIDE_KERNEL_WHEELS.mkdir(exist_ok=True)
    for py_pkg, version in PYODIDE_KERNEL_PACKAGES.items():
        print(f"[{py_pkg.name}] trying in-tree copy...", flush=True)
        shutil.copy(
            str(
                py_pkg
                / "dist"
                / f"{py_pkg.name.replace('-', '_')}-{version}{NOARCH_WHL}"
            ),
            str(PYODIDE_KERNEL_WHEELS),
        )


def index_wheels():
    args = [
        sys.executable,
        "-m",
        "jupyterlite_pyodide_kernel.app",
        "index",
        str(PYODIDE_KERNEL_WHEELS),
    ]
    subprocess.check_call(args)


def generate_pypi_ts():
    lines = [
        "// this file is autogenerated from the wheels described in ../package.json",
        "export * as allJSONUrl from '../pypi/all.json';",
    ]

    vars_made = {}
    for wheel in sorted(PYODIDE_KERNEL_WHEELS.glob(f"*{NOARCH_WHL}")):
        # this might be brittle
        name = wheel.name.split("-")[0]
        path = f"../pypi/{wheel.name}"
        base_var_name = f"{name}WheelUrl"

        if base_var_name not in vars_made:
            var_suffix = ""
            vars_made[base_var_name] = 0
        else:
            vars_made[base_var_name] += 1
            var_suffix = vars_made[base_var_name]

        lines += [
            f"export * as {base_var_name}{var_suffix} from '{path}';",
        ]
    PYODIDE_KERNEL_WHEEL_TS.write_text("\n".join(sorted(lines) + [""]))


if __name__ == "__main__":
    build_wheels()
    copy_wheels()
    index_wheels()
    generate_pypi_ts()

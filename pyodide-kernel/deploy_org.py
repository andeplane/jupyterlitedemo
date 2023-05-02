import subprocess
import os

version = "0.0.12"

current_directory = os.getcwd()

# Deploy npm packages
subprocess.call("yarn dist:npm", shell=True)
os.chdir("dist")

def remove_prepublish_step():
    with open("package.json") as f:
        lines = f.readlines()
        with open("package.json", "w") as f:
            for line in lines:
                if "prepublishOnly" in line:
                    continue
                else:
                    f.write(line)

for file in os.listdir("."):
    if file.endswith(".tgz"):
        subprocess.call(f"tar -xvf {file}", shell=True)
        os.chdir("package")
        remove_prepublish_step()
        
        subprocess.call("npm publish --public", shell=True)
        os.chdir("..")
        subprocess.call(f"rm -rf package", shell=True)

# Deploy pypi packages
os.chdir("..")
subprocess.call("yarn dist:pypi", shell=True)
subprocess.call(f"twine upload -u andershaf -p {os.environ['PYPI_PASSWORD']} dist/andeplane_pyodide_kernel-{version}-py3-none-any.whl", shell=True)
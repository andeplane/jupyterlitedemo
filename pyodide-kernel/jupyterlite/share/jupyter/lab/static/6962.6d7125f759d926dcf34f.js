(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6962],
  {
    63102: (n, o, r) => {
      'use strict';
      r.d(o, { Z: () => s });
      var e = r(94015);
      var t = r.n(e);
      var a = r(23645);
      var i = r.n(a);
      var c = i()(t());
      c.push([
        n.id,
        "/*\n * abbott.css\n * A warm, dark theme for prose and code, with pastels and pretty greens.\n *\n * Ported from abbott.vim (https://github.com/bcat/abbott.vim) version 2.1.\n * Original design and CodeMirror port by Jonathan Rascher.\n *\n * This theme shares the following color palette with the Vim color scheme.\n *\n * Brown shades:\n *   bistre: #231c14\n *   chocolate: #3c3022\n *   cocoa: #745d42\n *   vanilla_cream: #fef3b4\n *\n * Red shades:\n *   crimson: #d80450\n *   cinnabar: #f63f05\n *\n * Green shades:\n *   dark_olive: #273900\n *   forest_green: #24a507\n *   chartreuse: #a0ea00\n *   pastel_chartreuse: #d8ff84\n *\n * Yellow shades:\n *   marigold: #fbb32f\n *   lemon_meringue: #fbec5d\n *\n * Blue shades:\n *   cornflower_blue: #3f91f1\n *   periwinkle_blue: #8ccdf0\n *\n * Magenta shades:\n *   french_pink: #ec6c99\n *   lavender: #e6a2f3\n *\n * Cyan shades:\n *   zomp: #39a78d\n *   seafoam_green: #00ff7f\n */\n\n/* Style the UI: */\n\n/* Equivalent to Vim's Normal group. */\n.cm-s-abbott.CodeMirror {\n  background: #231c14 /* bistre */;\n  color: #d8ff84 /* pastel_chartreuse */;\n}\n\n/* Roughly equivalent to Vim's LineNr group. */\n.cm-s-abbott .CodeMirror-gutters {\n  background: #231c14 /* bistre */;\n  border: none;\n}\n.cm-s-abbott .CodeMirror-linenumber { color: #fbec5d /* lemon_meringue */; }\n\n.cm-s-abbott .CodeMirror-guttermarker { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's FoldColumn group. */\n.cm-s-abbott .CodeMirror-guttermarker-subtle { color: #fbb32f /* marigold */; }\n\n/*\n * Roughly equivalent to Vim's CursorColumn group. (We use a brighter color\n * since Vim's cursorcolumn option highlights a whole column, whereas\n * CodeMirror's rule just highlights a thin line.)\n */\n.cm-s-abbott .CodeMirror-ruler { border-color: #745d42 /* cocoa */; }\n\n/* Equivalent to Vim's Cursor group in insert mode. */\n.cm-s-abbott .CodeMirror-cursor { border-color: #a0ea00 /* chartreuse */; }\n\n/* Equivalent to Vim's Cursor group in normal mode. */\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursor,\n.cm-s-abbott .cm-animate-fat-cursor {\n  /*\n   * CodeMirror doesn't allow changing the foreground color of the character\n   * under the cursor, so we can't use a reverse video effect for the cursor.\n   * Instead, make it semitransparent.\n   */\n  background: rgba(160, 234, 0, 0.5) /* chartreuse */;\n}\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursors {\n  /*\n   * Boost the z-index so the fat cursor shows up on top of text and\n   * matchingbracket/matchingtag highlights.\n   */\n  z-index: 3;\n}\n\n/* Equivalent to Vim's Cursor group in replace mode. */\n.cm-s-abbott .CodeMirror-overwrite .CodeMirror-cursor {\n  border-bottom: 1px solid #a0ea00 /* chartreuse */;\n  border-left: none;\n  width: auto;\n}\n\n/* Roughly equivalent to Vim's CursorIM group. */\n.cm-s-abbott .CodeMirror-secondarycursor {\n  border-color: #00ff7f /* seafoam_green */;\n}\n\n/* Roughly equivalent to Vim's Visual group. */\n.cm-s-abbott .CodeMirror-selected,\n.cm-s-abbott.CodeMirror-focused .CodeMirror-selected {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::selection,\n.cm-s-abbott .CodeMirror-line > span::selection,\n.cm-s-abbott .CodeMirror-line > span > span::selection {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span > span::-moz-selection {\n  background: #273900 /* dark_olive */;\n}\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott .cm-tab { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Search group. */\n.cm-s-abbott .cm-searching {\n  background: #fef3b4 /* vanilla_cream */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n/* Style syntax highlighting modes: */\n\n/* Equivalent to Vim's Comment group. */\n.cm-s-abbott span.cm-comment {\n  color: #fbb32f /* marigold */;\n  font-style: italic;\n}\n\n/* Equivalent to Vim's String group. */\n.cm-s-abbott span.cm-string,\n.cm-s-abbott span.cm-string-2 {\n  color: #e6a2f3 /* lavender */;\n}\n\n/* Equivalent to Vim's Constant group. */\n.cm-s-abbott span.cm-number,\n.cm-s-abbott span.cm-string.cm-url { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott span.cm-invalidchar { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Special group. */\n.cm-s-abbott span.cm-atom { color: #fef3b4 /* vanilla_cream */; }\n\n/* Equivalent to Vim's Delimiter group. */\n.cm-s-abbott span.cm-bracket,\n.cm-s-abbott span.cm-punctuation {\n  color: #fef3b4 /* vanilla_cream */;\n}\n\n/* Equivalent Vim's Operator group. */\n.cm-s-abbott span.cm-operator { font-weight: bold; }\n\n/* Roughly equivalent to Vim's Identifier group. */\n.cm-s-abbott span.cm-def,\n.cm-s-abbott span.cm-variable,\n.cm-s-abbott span.cm-variable-2,\n.cm-s-abbott span.cm-variable-3 {\n  color: #8ccdf0 /* periwinkle_blue */;\n}\n\n/* Roughly equivalent to Vim's Function group. */\n.cm-s-abbott span.cm-builtin,\n.cm-s-abbott span.cm-property,\n.cm-s-abbott span.cm-qualifier {\n  color: #3f91f1 /* cornflower_blue */;\n}\n\n/* Equivalent to Vim's Type group. */\n.cm-s-abbott span.cm-type { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's Keyword group. */\n.cm-s-abbott span.cm-keyword {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's PreProc group. */\n.cm-s-abbott span.cm-meta { color: #ec6c99 /* french_pink */; }\n\n/* Equivalent to Vim's htmlTagName group (linked to Statement). */\n.cm-s-abbott span.cm-tag {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's htmlArg group (linked to Type). */\n.cm-s-abbott span.cm-attribute { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's htmlH1, markdownH1, etc. groups (linked to Title). */\n.cm-s-abbott span.cm-header {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's markdownRule group (linked to PreProc). */\n.cm-s-abbott span.cm-hr { color: #ec6c99 /* french_pink */; }\n\n/* Roughly equivalent to Vim's Underlined group. */\n.cm-s-abbott span.cm-link { color: #e6a2f3 /* lavender */; }\n\n/* Equivalent to Vim's diffRemoved group. */\n.cm-s-abbott span.cm-negative {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Equivalent to Vim's diffAdded group. */\n.cm-s-abbott span.cm-positive {\n  background: #a0ea00 /* chartreuse */;\n  color: #231c14 /* bistre */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's Error group. */\n.cm-s-abbott span.cm-error {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Style addons: */\n\n/* Equivalent to Vim's MatchParen group. */\n.cm-s-abbott span.CodeMirror-matchingbracket {\n  background: #745d42 /* cocoa */ !important;\n  color: #231c14 /* bistre */ !important;\n  font-weight: bold;\n}\n\n/*\n * Roughly equivalent to Vim's Error group. (Vim doesn't seem to have a direct\n * equivalent in its own matchparen plugin, but many syntax highlighting plugins\n * mark mismatched brackets as Error.)\n */\n.cm-s-abbott span.CodeMirror-nonmatchingbracket {\n  background: #d80450 /* crimson */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n.cm-s-abbott .CodeMirror-matchingtag,\n.cm-s-abbott .cm-matchhighlight {\n  outline: 1px solid #39a78d /* zomp */;\n}\n\n/* Equivalent to Vim's CursorLine group. */\n.cm-s-abbott .CodeMirror-activeline-background,\n.cm-s-abbott .CodeMirror-activeline-gutter {\n  background: #3c3022 /* chocolate */;\n}\n\n/* Equivalent to Vim's CursorLineNr group. */\n.cm-s-abbott .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  color: #d8ff84 /* pastel_chartreuse */;\n  font-weight: bold;\n}\n\n/* Roughly equivalent to Vim's Folded group. */\n.cm-s-abbott .CodeMirror-foldmarker {\n  color: #f63f05 /* cinnabar */;\n  text-shadow: none;\n}\n",
        '',
        {
          version: 3,
          sources: ['webpack://./node_modules/codemirror/theme/abbott.css'],
          names: [],
          mappings:
            'AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAwCE;;AAEF,kBAAkB;;AAElB,sCAAsC;AACtC;EACE,gCAAgC;EAChC,sCAAsC;AACxC;;AAEA,8CAA8C;AAC9C;EACE,gCAAgC;EAChC,YAAY;AACd;AACA,sCAAsC,mCAAmC,EAAE;;AAE3E,wCAAwC,6BAA6B,EAAE;;AAEvE,kDAAkD;AAClD,+CAA+C,6BAA6B,EAAE;;AAE9E;;;;EAIE;AACF,iCAAiC,iCAAiC,EAAE;;AAEpE,qDAAqD;AACrD,kCAAkC,sCAAsC,EAAE;;AAE1E,qDAAqD;AACrD;;EAEE;;;;IAIE;EACF,mDAAmD;AACrD;AACA;EACE;;;IAGE;EACF,UAAU;AACZ;;AAEA,sDAAsD;AACtD;EACE,iDAAiD;EACjD,iBAAiB;EACjB,WAAW;AACb;;AAEA,gDAAgD;AAChD;EACE,yCAAyC;AAC3C;;AAEA,8CAA8C;AAC9C;;EAEE,oCAAoC;AACtC;AACA;;;EAGE,oCAAoC;AACtC;AACA;;;EAGE,oCAAoC;AACtC;;AAEA,kDAAkD;AAClD,uBAAuB,kCAAkC,EAAE;;AAE3D,sCAAsC;AACtC;EACE,kDAAkD;EAClD,sCAAsC;AACxC;;AAEA,qCAAqC;;AAErC,uCAAuC;AACvC;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA,sCAAsC;AACtC;;EAEE,6BAA6B;AAC/B;;AAEA,wCAAwC;AACxC;qCACqC,6BAA6B,EAAE;;AAEpE,kDAAkD;AAClD,mCAAmC,kCAAkC,EAAE;;AAEvE,uCAAuC;AACvC,4BAA4B,kCAAkC,EAAE;;AAEhE,yCAAyC;AACzC;;EAEE,kCAAkC;AACpC;;AAEA,qCAAqC;AACrC,gCAAgC,iBAAiB,EAAE;;AAEnD,kDAAkD;AAClD;;;;EAIE,oCAAoC;AACtC;;AAEA,gDAAgD;AAChD;;;EAGE,oCAAoC;AACtC;;AAEA,oCAAoC;AACpC,4BAA4B,iCAAiC,EAAE;;AAE/D,uCAAuC;AACvC;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA,uCAAuC;AACvC,4BAA4B,gCAAgC,EAAE;;AAE9D,iEAAiE;AACjE;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA,wDAAwD;AACxD,iCAAiC,iCAAiC,EAAE;;AAEpE,2EAA2E;AAC3E;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA,gEAAgE;AAChE,0BAA0B,gCAAgC,EAAE;;AAE5D,kDAAkD;AAClD,4BAA4B,6BAA6B,EAAE;;AAE3D,2CAA2C;AAC3C;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA,yCAAyC;AACzC;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA,qCAAqC;AACrC;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA,kBAAkB;;AAElB,0CAA0C;AAC1C;EACE,0CAA0C;EAC1C,sCAAsC;EACtC,iBAAiB;AACnB;;AAEA;;;;EAIE;AACF;EACE,4CAA4C;EAC5C,sCAAsC;AACxC;;AAEA;;EAEE,qCAAqC;AACvC;;AAEA,0CAA0C;AAC1C;;EAEE,mCAAmC;AACrC;;AAEA,4CAA4C;AAC5C;EACE,sCAAsC;EACtC,iBAAiB;AACnB;;AAEA,8CAA8C;AAC9C;EACE,6BAA6B;EAC7B,iBAAiB;AACnB',
          sourcesContent: [
            "/*\n * abbott.css\n * A warm, dark theme for prose and code, with pastels and pretty greens.\n *\n * Ported from abbott.vim (https://github.com/bcat/abbott.vim) version 2.1.\n * Original design and CodeMirror port by Jonathan Rascher.\n *\n * This theme shares the following color palette with the Vim color scheme.\n *\n * Brown shades:\n *   bistre: #231c14\n *   chocolate: #3c3022\n *   cocoa: #745d42\n *   vanilla_cream: #fef3b4\n *\n * Red shades:\n *   crimson: #d80450\n *   cinnabar: #f63f05\n *\n * Green shades:\n *   dark_olive: #273900\n *   forest_green: #24a507\n *   chartreuse: #a0ea00\n *   pastel_chartreuse: #d8ff84\n *\n * Yellow shades:\n *   marigold: #fbb32f\n *   lemon_meringue: #fbec5d\n *\n * Blue shades:\n *   cornflower_blue: #3f91f1\n *   periwinkle_blue: #8ccdf0\n *\n * Magenta shades:\n *   french_pink: #ec6c99\n *   lavender: #e6a2f3\n *\n * Cyan shades:\n *   zomp: #39a78d\n *   seafoam_green: #00ff7f\n */\n\n/* Style the UI: */\n\n/* Equivalent to Vim's Normal group. */\n.cm-s-abbott.CodeMirror {\n  background: #231c14 /* bistre */;\n  color: #d8ff84 /* pastel_chartreuse */;\n}\n\n/* Roughly equivalent to Vim's LineNr group. */\n.cm-s-abbott .CodeMirror-gutters {\n  background: #231c14 /* bistre */;\n  border: none;\n}\n.cm-s-abbott .CodeMirror-linenumber { color: #fbec5d /* lemon_meringue */; }\n\n.cm-s-abbott .CodeMirror-guttermarker { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's FoldColumn group. */\n.cm-s-abbott .CodeMirror-guttermarker-subtle { color: #fbb32f /* marigold */; }\n\n/*\n * Roughly equivalent to Vim's CursorColumn group. (We use a brighter color\n * since Vim's cursorcolumn option highlights a whole column, whereas\n * CodeMirror's rule just highlights a thin line.)\n */\n.cm-s-abbott .CodeMirror-ruler { border-color: #745d42 /* cocoa */; }\n\n/* Equivalent to Vim's Cursor group in insert mode. */\n.cm-s-abbott .CodeMirror-cursor { border-color: #a0ea00 /* chartreuse */; }\n\n/* Equivalent to Vim's Cursor group in normal mode. */\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursor,\n.cm-s-abbott .cm-animate-fat-cursor {\n  /*\n   * CodeMirror doesn't allow changing the foreground color of the character\n   * under the cursor, so we can't use a reverse video effect for the cursor.\n   * Instead, make it semitransparent.\n   */\n  background: rgba(160, 234, 0, 0.5) /* chartreuse */;\n}\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursors {\n  /*\n   * Boost the z-index so the fat cursor shows up on top of text and\n   * matchingbracket/matchingtag highlights.\n   */\n  z-index: 3;\n}\n\n/* Equivalent to Vim's Cursor group in replace mode. */\n.cm-s-abbott .CodeMirror-overwrite .CodeMirror-cursor {\n  border-bottom: 1px solid #a0ea00 /* chartreuse */;\n  border-left: none;\n  width: auto;\n}\n\n/* Roughly equivalent to Vim's CursorIM group. */\n.cm-s-abbott .CodeMirror-secondarycursor {\n  border-color: #00ff7f /* seafoam_green */;\n}\n\n/* Roughly equivalent to Vim's Visual group. */\n.cm-s-abbott .CodeMirror-selected,\n.cm-s-abbott.CodeMirror-focused .CodeMirror-selected {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::selection,\n.cm-s-abbott .CodeMirror-line > span::selection,\n.cm-s-abbott .CodeMirror-line > span > span::selection {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span > span::-moz-selection {\n  background: #273900 /* dark_olive */;\n}\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott .cm-tab { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Search group. */\n.cm-s-abbott .cm-searching {\n  background: #fef3b4 /* vanilla_cream */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n/* Style syntax highlighting modes: */\n\n/* Equivalent to Vim's Comment group. */\n.cm-s-abbott span.cm-comment {\n  color: #fbb32f /* marigold */;\n  font-style: italic;\n}\n\n/* Equivalent to Vim's String group. */\n.cm-s-abbott span.cm-string,\n.cm-s-abbott span.cm-string-2 {\n  color: #e6a2f3 /* lavender */;\n}\n\n/* Equivalent to Vim's Constant group. */\n.cm-s-abbott span.cm-number,\n.cm-s-abbott span.cm-string.cm-url { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott span.cm-invalidchar { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Special group. */\n.cm-s-abbott span.cm-atom { color: #fef3b4 /* vanilla_cream */; }\n\n/* Equivalent to Vim's Delimiter group. */\n.cm-s-abbott span.cm-bracket,\n.cm-s-abbott span.cm-punctuation {\n  color: #fef3b4 /* vanilla_cream */;\n}\n\n/* Equivalent Vim's Operator group. */\n.cm-s-abbott span.cm-operator { font-weight: bold; }\n\n/* Roughly equivalent to Vim's Identifier group. */\n.cm-s-abbott span.cm-def,\n.cm-s-abbott span.cm-variable,\n.cm-s-abbott span.cm-variable-2,\n.cm-s-abbott span.cm-variable-3 {\n  color: #8ccdf0 /* periwinkle_blue */;\n}\n\n/* Roughly equivalent to Vim's Function group. */\n.cm-s-abbott span.cm-builtin,\n.cm-s-abbott span.cm-property,\n.cm-s-abbott span.cm-qualifier {\n  color: #3f91f1 /* cornflower_blue */;\n}\n\n/* Equivalent to Vim's Type group. */\n.cm-s-abbott span.cm-type { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's Keyword group. */\n.cm-s-abbott span.cm-keyword {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's PreProc group. */\n.cm-s-abbott span.cm-meta { color: #ec6c99 /* french_pink */; }\n\n/* Equivalent to Vim's htmlTagName group (linked to Statement). */\n.cm-s-abbott span.cm-tag {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's htmlArg group (linked to Type). */\n.cm-s-abbott span.cm-attribute { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's htmlH1, markdownH1, etc. groups (linked to Title). */\n.cm-s-abbott span.cm-header {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's markdownRule group (linked to PreProc). */\n.cm-s-abbott span.cm-hr { color: #ec6c99 /* french_pink */; }\n\n/* Roughly equivalent to Vim's Underlined group. */\n.cm-s-abbott span.cm-link { color: #e6a2f3 /* lavender */; }\n\n/* Equivalent to Vim's diffRemoved group. */\n.cm-s-abbott span.cm-negative {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Equivalent to Vim's diffAdded group. */\n.cm-s-abbott span.cm-positive {\n  background: #a0ea00 /* chartreuse */;\n  color: #231c14 /* bistre */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's Error group. */\n.cm-s-abbott span.cm-error {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Style addons: */\n\n/* Equivalent to Vim's MatchParen group. */\n.cm-s-abbott span.CodeMirror-matchingbracket {\n  background: #745d42 /* cocoa */ !important;\n  color: #231c14 /* bistre */ !important;\n  font-weight: bold;\n}\n\n/*\n * Roughly equivalent to Vim's Error group. (Vim doesn't seem to have a direct\n * equivalent in its own matchparen plugin, but many syntax highlighting plugins\n * mark mismatched brackets as Error.)\n */\n.cm-s-abbott span.CodeMirror-nonmatchingbracket {\n  background: #d80450 /* crimson */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n.cm-s-abbott .CodeMirror-matchingtag,\n.cm-s-abbott .cm-matchhighlight {\n  outline: 1px solid #39a78d /* zomp */;\n}\n\n/* Equivalent to Vim's CursorLine group. */\n.cm-s-abbott .CodeMirror-activeline-background,\n.cm-s-abbott .CodeMirror-activeline-gutter {\n  background: #3c3022 /* chocolate */;\n}\n\n/* Equivalent to Vim's CursorLineNr group. */\n.cm-s-abbott .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  color: #d8ff84 /* pastel_chartreuse */;\n  font-weight: bold;\n}\n\n/* Roughly equivalent to Vim's Folded group. */\n.cm-s-abbott .CodeMirror-foldmarker {\n  color: #f63f05 /* cinnabar */;\n  text-shadow: none;\n}\n",
          ],
          sourceRoot: '',
        },
      ]);
      const s = c;
    },
    23645: (n) => {
      'use strict';
      n.exports = function (n) {
        var o = [];
        o.toString = function o() {
          return this.map(function (o) {
            var r = n(o);
            if (o[2]) {
              return '@media '.concat(o[2], ' {').concat(r, '}');
            }
            return r;
          }).join('');
        };
        o.i = function (n, r, e) {
          if (typeof n === 'string') {
            n = [[null, n, '']];
          }
          var t = {};
          if (e) {
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0];
              if (i != null) {
                t[i] = true;
              }
            }
          }
          for (var c = 0; c < n.length; c++) {
            var s = [].concat(n[c]);
            if (e && t[s[0]]) {
              continue;
            }
            if (r) {
              if (!s[2]) {
                s[2] = r;
              } else {
                s[2] = ''.concat(r, ' and ').concat(s[2]);
              }
            }
            o.push(s);
          }
        };
        return o;
      };
    },
    94015: (n) => {
      'use strict';
      function o(n, o) {
        return i(n) || a(n, o) || e(n, o) || r();
      }
      function r() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function e(n, o) {
        if (!n) return;
        if (typeof n === 'string') return t(n, o);
        var r = Object.prototype.toString.call(n).slice(8, -1);
        if (r === 'Object' && n.constructor) r = n.constructor.name;
        if (r === 'Map' || r === 'Set') return Array.from(n);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return t(n, o);
      }
      function t(n, o) {
        if (o == null || o > n.length) o = n.length;
        for (var r = 0, e = new Array(o); r < o; r++) {
          e[r] = n[r];
        }
        return e;
      }
      function a(n, o) {
        var r =
          n &&
          ((typeof Symbol !== 'undefined' && n[Symbol.iterator]) || n['@@iterator']);
        if (r == null) return;
        var e = [];
        var t = true;
        var a = false;
        var i, c;
        try {
          for (r = r.call(n); !(t = (i = r.next()).done); t = true) {
            e.push(i.value);
            if (o && e.length === o) break;
          }
        } catch (s) {
          a = true;
          c = s;
        } finally {
          try {
            if (!t && r['return'] != null) r['return']();
          } finally {
            if (a) throw c;
          }
        }
        return e;
      }
      function i(n) {
        if (Array.isArray(n)) return n;
      }
      n.exports = function n(r) {
        var e = o(r, 4),
          t = e[1],
          a = e[3];
        if (typeof btoa === 'function') {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(a))));
          var c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
            i
          );
          var s = '/*# '.concat(c, ' */');
          var A = a.sources.map(function (n) {
            return '/*# sourceURL='.concat(a.sourceRoot || '').concat(n, ' */');
          });
          return [t].concat(A).concat([s]).join('\n');
        }
        return [t].join('\n');
      };
    },
    66962: (n, o, r) => {
      'use strict';
      r.r(o);
      r.d(o, { default: () => s });
      var e = r(93379);
      var t = r.n(e);
      var a = r(63102);
      var i = {};
      i.insert = 'head';
      i.singleton = false;
      var c = t()(a.Z, i);
      const s = a.Z.locals || {};
    },
    93379: (n, o, r) => {
      'use strict';
      var e = (function n() {
        var o;
        return function n() {
          if (typeof o === 'undefined') {
            o = Boolean(window && document && document.all && !window.atob);
          }
          return o;
        };
      })();
      var t = (function n() {
        var o = {};
        return function n(r) {
          if (typeof o[r] === 'undefined') {
            var e = document.querySelector(r);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
              try {
                e = e.contentDocument.head;
              } catch (t) {
                e = null;
              }
            }
            o[r] = e;
          }
          return o[r];
        };
      })();
      var a = [];
      function i(n) {
        var o = -1;
        for (var r = 0; r < a.length; r++) {
          if (a[r].identifier === n) {
            o = r;
            break;
          }
        }
        return o;
      }
      function c(n, o) {
        var r = {};
        var e = [];
        for (var t = 0; t < n.length; t++) {
          var c = n[t];
          var s = o.base ? c[0] + o.base : c[0];
          var A = r[s] || 0;
          var l = ''.concat(s, ' ').concat(A);
          r[s] = A + 1;
          var m = i(l);
          var u = { css: c[1], media: c[2], sourceMap: c[3] };
          if (m !== -1) {
            a[m].references++;
            a[m].updater(u);
          } else {
            a.push({ identifier: l, updater: C(u, o), references: 1 });
          }
          e.push(l);
        }
        return e;
      }
      function s(n) {
        var o = document.createElement('style');
        var e = n.attributes || {};
        if (typeof e.nonce === 'undefined') {
          var a = true ? r.nc : 0;
          if (a) {
            e.nonce = a;
          }
        }
        Object.keys(e).forEach(function (n) {
          o.setAttribute(n, e[n]);
        });
        if (typeof n.insert === 'function') {
          n.insert(o);
        } else {
          var i = t(n.insert || 'head');
          if (!i) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          i.appendChild(o);
        }
        return o;
      }
      function A(n) {
        if (n.parentNode === null) {
          return false;
        }
        n.parentNode.removeChild(n);
      }
      var l = (function n() {
        var o = [];
        return function n(r, e) {
          o[r] = e;
          return o.filter(Boolean).join('\n');
        };
      })();
      function m(n, o, r, e) {
        var t = r
          ? ''
          : e.media
          ? '@media '.concat(e.media, ' {').concat(e.css, '}')
          : e.css;
        if (n.styleSheet) {
          n.styleSheet.cssText = l(o, t);
        } else {
          var a = document.createTextNode(t);
          var i = n.childNodes;
          if (i[o]) {
            n.removeChild(i[o]);
          }
          if (i.length) {
            n.insertBefore(a, i[o]);
          } else {
            n.appendChild(a);
          }
        }
      }
      function u(n, o, r) {
        var e = r.css;
        var t = r.media;
        var a = r.sourceMap;
        if (t) {
          n.setAttribute('media', t);
        } else {
          n.removeAttribute('media');
        }
        if (a && typeof btoa !== 'undefined') {
          e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */'
          );
        }
        if (n.styleSheet) {
          n.styleSheet.cssText = e;
        } else {
          while (n.firstChild) {
            n.removeChild(n.firstChild);
          }
          n.appendChild(document.createTextNode(e));
        }
      }
      var b = null;
      var d = 0;
      function C(n, o) {
        var r;
        var e;
        var t;
        if (o.singleton) {
          var a = d++;
          r = b || (b = s(o));
          e = m.bind(null, r, a, false);
          t = m.bind(null, r, a, true);
        } else {
          r = s(o);
          e = u.bind(null, r, o);
          t = function n() {
            A(r);
          };
        }
        e(n);
        return function o(r) {
          if (r) {
            if (r.css === n.css && r.media === n.media && r.sourceMap === n.sourceMap) {
              return;
            }
            e((n = r));
          } else {
            t();
          }
        };
      }
      n.exports = function (n, o) {
        o = o || {};
        if (!o.singleton && typeof o.singleton !== 'boolean') {
          o.singleton = e();
        }
        n = n || [];
        var r = c(n, o);
        return function n(e) {
          e = e || [];
          if (Object.prototype.toString.call(e) !== '[object Array]') {
            return;
          }
          for (var t = 0; t < r.length; t++) {
            var s = r[t];
            var A = i(s);
            a[A].references--;
          }
          var l = c(e, o);
          for (var m = 0; m < r.length; m++) {
            var u = r[m];
            var b = i(u);
            if (a[b].references === 0) {
              a[b].updater();
              a.splice(b, 1);
            }
          }
          r = l;
        };
      };
    },
  },
]);
//# sourceMappingURL=6962.6d7125f759d926dcf34f.js.map?v=6d7125f759d926dcf34f

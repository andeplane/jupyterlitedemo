(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [2585],
  {
    82585: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(32095), r(55292), r(4328));
        else {
        }
      })(function (e) {
        'use strict';
        var t = [
          { keys: '<Left>', type: 'keyToKey', toKeys: 'h' },
          { keys: '<Right>', type: 'keyToKey', toKeys: 'l' },
          { keys: '<Up>', type: 'keyToKey', toKeys: 'k' },
          { keys: '<Down>', type: 'keyToKey', toKeys: 'j' },
          { keys: '<Space>', type: 'keyToKey', toKeys: 'l' },
          { keys: '<BS>', type: 'keyToKey', toKeys: 'h', context: 'normal' },
          { keys: '<Del>', type: 'keyToKey', toKeys: 'x', context: 'normal' },
          { keys: '<C-Space>', type: 'keyToKey', toKeys: 'W' },
          { keys: '<C-BS>', type: 'keyToKey', toKeys: 'B', context: 'normal' },
          { keys: '<S-Space>', type: 'keyToKey', toKeys: 'w' },
          { keys: '<S-BS>', type: 'keyToKey', toKeys: 'b', context: 'normal' },
          { keys: '<C-n>', type: 'keyToKey', toKeys: 'j' },
          { keys: '<C-p>', type: 'keyToKey', toKeys: 'k' },
          { keys: '<C-[>', type: 'keyToKey', toKeys: '<Esc>' },
          { keys: '<C-c>', type: 'keyToKey', toKeys: '<Esc>' },
          { keys: '<C-[>', type: 'keyToKey', toKeys: '<Esc>', context: 'insert' },
          { keys: '<C-c>', type: 'keyToKey', toKeys: '<Esc>', context: 'insert' },
          { keys: 's', type: 'keyToKey', toKeys: 'cl', context: 'normal' },
          { keys: 's', type: 'keyToKey', toKeys: 'c', context: 'visual' },
          { keys: 'S', type: 'keyToKey', toKeys: 'cc', context: 'normal' },
          { keys: 'S', type: 'keyToKey', toKeys: 'VdO', context: 'visual' },
          { keys: '<Home>', type: 'keyToKey', toKeys: '0' },
          { keys: '<End>', type: 'keyToKey', toKeys: '$' },
          { keys: '<PageUp>', type: 'keyToKey', toKeys: '<C-b>' },
          { keys: '<PageDown>', type: 'keyToKey', toKeys: '<C-f>' },
          { keys: '<CR>', type: 'keyToKey', toKeys: 'j^', context: 'normal' },
          {
            keys: '<Ins>',
            type: 'action',
            action: 'toggleOverwrite',
            context: 'insert',
          },
          {
            keys: 'H',
            type: 'motion',
            motion: 'moveToTopLine',
            motionArgs: { linewise: true, toJumplist: true },
          },
          {
            keys: 'M',
            type: 'motion',
            motion: 'moveToMiddleLine',
            motionArgs: { linewise: true, toJumplist: true },
          },
          {
            keys: 'L',
            type: 'motion',
            motion: 'moveToBottomLine',
            motionArgs: { linewise: true, toJumplist: true },
          },
          {
            keys: 'h',
            type: 'motion',
            motion: 'moveByCharacters',
            motionArgs: { forward: false },
          },
          {
            keys: 'l',
            type: 'motion',
            motion: 'moveByCharacters',
            motionArgs: { forward: true },
          },
          {
            keys: 'j',
            type: 'motion',
            motion: 'moveByLines',
            motionArgs: { forward: true, linewise: true },
          },
          {
            keys: 'k',
            type: 'motion',
            motion: 'moveByLines',
            motionArgs: { forward: false, linewise: true },
          },
          {
            keys: 'gj',
            type: 'motion',
            motion: 'moveByDisplayLines',
            motionArgs: { forward: true },
          },
          {
            keys: 'gk',
            type: 'motion',
            motion: 'moveByDisplayLines',
            motionArgs: { forward: false },
          },
          {
            keys: 'w',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: { forward: true, wordEnd: false },
          },
          {
            keys: 'W',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: { forward: true, wordEnd: false, bigWord: true },
          },
          {
            keys: 'e',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: { forward: true, wordEnd: true, inclusive: true },
          },
          {
            keys: 'E',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: {
              forward: true,
              wordEnd: true,
              bigWord: true,
              inclusive: true,
            },
          },
          {
            keys: 'b',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: { forward: false, wordEnd: false },
          },
          {
            keys: 'B',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: { forward: false, wordEnd: false, bigWord: true },
          },
          {
            keys: 'ge',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: { forward: false, wordEnd: true, inclusive: true },
          },
          {
            keys: 'gE',
            type: 'motion',
            motion: 'moveByWords',
            motionArgs: {
              forward: false,
              wordEnd: true,
              bigWord: true,
              inclusive: true,
            },
          },
          {
            keys: '{',
            type: 'motion',
            motion: 'moveByParagraph',
            motionArgs: { forward: false, toJumplist: true },
          },
          {
            keys: '}',
            type: 'motion',
            motion: 'moveByParagraph',
            motionArgs: { forward: true, toJumplist: true },
          },
          {
            keys: '(',
            type: 'motion',
            motion: 'moveBySentence',
            motionArgs: { forward: false },
          },
          {
            keys: ')',
            type: 'motion',
            motion: 'moveBySentence',
            motionArgs: { forward: true },
          },
          {
            keys: '<C-f>',
            type: 'motion',
            motion: 'moveByPage',
            motionArgs: { forward: true },
          },
          {
            keys: '<C-b>',
            type: 'motion',
            motion: 'moveByPage',
            motionArgs: { forward: false },
          },
          {
            keys: '<C-d>',
            type: 'motion',
            motion: 'moveByScroll',
            motionArgs: { forward: true, explicitRepeat: true },
          },
          {
            keys: '<C-u>',
            type: 'motion',
            motion: 'moveByScroll',
            motionArgs: { forward: false, explicitRepeat: true },
          },
          {
            keys: 'gg',
            type: 'motion',
            motion: 'moveToLineOrEdgeOfDocument',
            motionArgs: {
              forward: false,
              explicitRepeat: true,
              linewise: true,
              toJumplist: true,
            },
          },
          {
            keys: 'G',
            type: 'motion',
            motion: 'moveToLineOrEdgeOfDocument',
            motionArgs: {
              forward: true,
              explicitRepeat: true,
              linewise: true,
              toJumplist: true,
            },
          },
          { keys: '0', type: 'motion', motion: 'moveToStartOfLine' },
          { keys: '^', type: 'motion', motion: 'moveToFirstNonWhiteSpaceCharacter' },
          {
            keys: '+',
            type: 'motion',
            motion: 'moveByLines',
            motionArgs: { forward: true, toFirstChar: true },
          },
          {
            keys: '-',
            type: 'motion',
            motion: 'moveByLines',
            motionArgs: { forward: false, toFirstChar: true },
          },
          {
            keys: '_',
            type: 'motion',
            motion: 'moveByLines',
            motionArgs: { forward: true, toFirstChar: true, repeatOffset: -1 },
          },
          {
            keys: '$',
            type: 'motion',
            motion: 'moveToEol',
            motionArgs: { inclusive: true },
          },
          {
            keys: '%',
            type: 'motion',
            motion: 'moveToMatchedSymbol',
            motionArgs: { inclusive: true, toJumplist: true },
          },
          {
            keys: 'f<character>',
            type: 'motion',
            motion: 'moveToCharacter',
            motionArgs: { forward: true, inclusive: true },
          },
          {
            keys: 'F<character>',
            type: 'motion',
            motion: 'moveToCharacter',
            motionArgs: { forward: false },
          },
          {
            keys: 't<character>',
            type: 'motion',
            motion: 'moveTillCharacter',
            motionArgs: { forward: true, inclusive: true },
          },
          {
            keys: 'T<character>',
            type: 'motion',
            motion: 'moveTillCharacter',
            motionArgs: { forward: false },
          },
          {
            keys: ';',
            type: 'motion',
            motion: 'repeatLastCharacterSearch',
            motionArgs: { forward: true },
          },
          {
            keys: ',',
            type: 'motion',
            motion: 'repeatLastCharacterSearch',
            motionArgs: { forward: false },
          },
          {
            keys: "'<character>",
            type: 'motion',
            motion: 'goToMark',
            motionArgs: { toJumplist: true, linewise: true },
          },
          {
            keys: '`<character>',
            type: 'motion',
            motion: 'goToMark',
            motionArgs: { toJumplist: true },
          },
          {
            keys: ']`',
            type: 'motion',
            motion: 'jumpToMark',
            motionArgs: { forward: true },
          },
          {
            keys: '[`',
            type: 'motion',
            motion: 'jumpToMark',
            motionArgs: { forward: false },
          },
          {
            keys: "]'",
            type: 'motion',
            motion: 'jumpToMark',
            motionArgs: { forward: true, linewise: true },
          },
          {
            keys: "['",
            type: 'motion',
            motion: 'jumpToMark',
            motionArgs: { forward: false, linewise: true },
          },
          {
            keys: ']p',
            type: 'action',
            action: 'paste',
            isEdit: true,
            actionArgs: { after: true, isEdit: true, matchIndent: true },
          },
          {
            keys: '[p',
            type: 'action',
            action: 'paste',
            isEdit: true,
            actionArgs: { after: false, isEdit: true, matchIndent: true },
          },
          {
            keys: ']<character>',
            type: 'motion',
            motion: 'moveToSymbol',
            motionArgs: { forward: true, toJumplist: true },
          },
          {
            keys: '[<character>',
            type: 'motion',
            motion: 'moveToSymbol',
            motionArgs: { forward: false, toJumplist: true },
          },
          { keys: '|', type: 'motion', motion: 'moveToColumn' },
          {
            keys: 'o',
            type: 'motion',
            motion: 'moveToOtherHighlightedEnd',
            context: 'visual',
          },
          {
            keys: 'O',
            type: 'motion',
            motion: 'moveToOtherHighlightedEnd',
            motionArgs: { sameLine: true },
            context: 'visual',
          },
          { keys: 'd', type: 'operator', operator: 'delete' },
          { keys: 'y', type: 'operator', operator: 'yank' },
          { keys: 'c', type: 'operator', operator: 'change' },
          { keys: '=', type: 'operator', operator: 'indentAuto' },
          {
            keys: '>',
            type: 'operator',
            operator: 'indent',
            operatorArgs: { indentRight: true },
          },
          {
            keys: '<',
            type: 'operator',
            operator: 'indent',
            operatorArgs: { indentRight: false },
          },
          { keys: 'g~', type: 'operator', operator: 'changeCase' },
          {
            keys: 'gu',
            type: 'operator',
            operator: 'changeCase',
            operatorArgs: { toLower: true },
            isEdit: true,
          },
          {
            keys: 'gU',
            type: 'operator',
            operator: 'changeCase',
            operatorArgs: { toLower: false },
            isEdit: true,
          },
          {
            keys: 'n',
            type: 'motion',
            motion: 'findNext',
            motionArgs: { forward: true, toJumplist: true },
          },
          {
            keys: 'N',
            type: 'motion',
            motion: 'findNext',
            motionArgs: { forward: false, toJumplist: true },
          },
          {
            keys: 'gn',
            type: 'motion',
            motion: 'findAndSelectNextInclusive',
            motionArgs: { forward: true },
          },
          {
            keys: 'gN',
            type: 'motion',
            motion: 'findAndSelectNextInclusive',
            motionArgs: { forward: false },
          },
          {
            keys: 'x',
            type: 'operatorMotion',
            operator: 'delete',
            motion: 'moveByCharacters',
            motionArgs: { forward: true },
            operatorMotionArgs: { visualLine: false },
          },
          {
            keys: 'X',
            type: 'operatorMotion',
            operator: 'delete',
            motion: 'moveByCharacters',
            motionArgs: { forward: false },
            operatorMotionArgs: { visualLine: true },
          },
          {
            keys: 'D',
            type: 'operatorMotion',
            operator: 'delete',
            motion: 'moveToEol',
            motionArgs: { inclusive: true },
            context: 'normal',
          },
          {
            keys: 'D',
            type: 'operator',
            operator: 'delete',
            operatorArgs: { linewise: true },
            context: 'visual',
          },
          {
            keys: 'Y',
            type: 'operatorMotion',
            operator: 'yank',
            motion: 'expandToLine',
            motionArgs: { linewise: true },
            context: 'normal',
          },
          {
            keys: 'Y',
            type: 'operator',
            operator: 'yank',
            operatorArgs: { linewise: true },
            context: 'visual',
          },
          {
            keys: 'C',
            type: 'operatorMotion',
            operator: 'change',
            motion: 'moveToEol',
            motionArgs: { inclusive: true },
            context: 'normal',
          },
          {
            keys: 'C',
            type: 'operator',
            operator: 'change',
            operatorArgs: { linewise: true },
            context: 'visual',
          },
          {
            keys: '~',
            type: 'operatorMotion',
            operator: 'changeCase',
            motion: 'moveByCharacters',
            motionArgs: { forward: true },
            operatorArgs: { shouldMoveCursor: true },
            context: 'normal',
          },
          { keys: '~', type: 'operator', operator: 'changeCase', context: 'visual' },
          {
            keys: '<C-w>',
            type: 'operatorMotion',
            operator: 'delete',
            motion: 'moveByWords',
            motionArgs: { forward: false, wordEnd: false },
            context: 'insert',
          },
          { keys: '<C-w>', type: 'idle', context: 'normal' },
          {
            keys: '<C-i>',
            type: 'action',
            action: 'jumpListWalk',
            actionArgs: { forward: true },
          },
          {
            keys: '<C-o>',
            type: 'action',
            action: 'jumpListWalk',
            actionArgs: { forward: false },
          },
          {
            keys: '<C-e>',
            type: 'action',
            action: 'scroll',
            actionArgs: { forward: true, linewise: true },
          },
          {
            keys: '<C-y>',
            type: 'action',
            action: 'scroll',
            actionArgs: { forward: false, linewise: true },
          },
          {
            keys: 'a',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'charAfter' },
            context: 'normal',
          },
          {
            keys: 'A',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'eol' },
            context: 'normal',
          },
          {
            keys: 'A',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'endOfSelectedArea' },
            context: 'visual',
          },
          {
            keys: 'i',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'inplace' },
            context: 'normal',
          },
          {
            keys: 'gi',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'lastEdit' },
            context: 'normal',
          },
          {
            keys: 'I',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'firstNonBlank' },
            context: 'normal',
          },
          {
            keys: 'gI',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'bol' },
            context: 'normal',
          },
          {
            keys: 'I',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { insertAt: 'startOfSelectedArea' },
            context: 'visual',
          },
          {
            keys: 'o',
            type: 'action',
            action: 'newLineAndEnterInsertMode',
            isEdit: true,
            interlaceInsertRepeat: true,
            actionArgs: { after: true },
            context: 'normal',
          },
          {
            keys: 'O',
            type: 'action',
            action: 'newLineAndEnterInsertMode',
            isEdit: true,
            interlaceInsertRepeat: true,
            actionArgs: { after: false },
            context: 'normal',
          },
          { keys: 'v', type: 'action', action: 'toggleVisualMode' },
          {
            keys: 'V',
            type: 'action',
            action: 'toggleVisualMode',
            actionArgs: { linewise: true },
          },
          {
            keys: '<C-v>',
            type: 'action',
            action: 'toggleVisualMode',
            actionArgs: { blockwise: true },
          },
          {
            keys: '<C-q>',
            type: 'action',
            action: 'toggleVisualMode',
            actionArgs: { blockwise: true },
          },
          { keys: 'gv', type: 'action', action: 'reselectLastSelection' },
          { keys: 'J', type: 'action', action: 'joinLines', isEdit: true },
          {
            keys: 'gJ',
            type: 'action',
            action: 'joinLines',
            actionArgs: { keepSpaces: true },
            isEdit: true,
          },
          {
            keys: 'p',
            type: 'action',
            action: 'paste',
            isEdit: true,
            actionArgs: { after: true, isEdit: true },
          },
          {
            keys: 'P',
            type: 'action',
            action: 'paste',
            isEdit: true,
            actionArgs: { after: false, isEdit: true },
          },
          { keys: 'r<character>', type: 'action', action: 'replace', isEdit: true },
          { keys: '@<character>', type: 'action', action: 'replayMacro' },
          { keys: 'q<character>', type: 'action', action: 'enterMacroRecordMode' },
          {
            keys: 'R',
            type: 'action',
            action: 'enterInsertMode',
            isEdit: true,
            actionArgs: { replace: true },
            context: 'normal',
          },
          {
            keys: 'R',
            type: 'operator',
            operator: 'change',
            operatorArgs: { linewise: true, fullLine: true },
            context: 'visual',
            exitVisualBlock: true,
          },
          { keys: 'u', type: 'action', action: 'undo', context: 'normal' },
          {
            keys: 'u',
            type: 'operator',
            operator: 'changeCase',
            operatorArgs: { toLower: true },
            context: 'visual',
            isEdit: true,
          },
          {
            keys: 'U',
            type: 'operator',
            operator: 'changeCase',
            operatorArgs: { toLower: false },
            context: 'visual',
            isEdit: true,
          },
          { keys: '<C-r>', type: 'action', action: 'redo' },
          { keys: 'm<character>', type: 'action', action: 'setMark' },
          { keys: '"<character>', type: 'action', action: 'setRegister' },
          {
            keys: 'zz',
            type: 'action',
            action: 'scrollToCursor',
            actionArgs: { position: 'center' },
          },
          {
            keys: 'z.',
            type: 'action',
            action: 'scrollToCursor',
            actionArgs: { position: 'center' },
            motion: 'moveToFirstNonWhiteSpaceCharacter',
          },
          {
            keys: 'zt',
            type: 'action',
            action: 'scrollToCursor',
            actionArgs: { position: 'top' },
          },
          {
            keys: 'z<CR>',
            type: 'action',
            action: 'scrollToCursor',
            actionArgs: { position: 'top' },
            motion: 'moveToFirstNonWhiteSpaceCharacter',
          },
          {
            keys: 'z-',
            type: 'action',
            action: 'scrollToCursor',
            actionArgs: { position: 'bottom' },
          },
          {
            keys: 'zb',
            type: 'action',
            action: 'scrollToCursor',
            actionArgs: { position: 'bottom' },
            motion: 'moveToFirstNonWhiteSpaceCharacter',
          },
          { keys: '.', type: 'action', action: 'repeatLastEdit' },
          {
            keys: '<C-a>',
            type: 'action',
            action: 'incrementNumberToken',
            isEdit: true,
            actionArgs: { increase: true, backtrack: false },
          },
          {
            keys: '<C-x>',
            type: 'action',
            action: 'incrementNumberToken',
            isEdit: true,
            actionArgs: { increase: false, backtrack: false },
          },
          {
            keys: '<C-t>',
            type: 'action',
            action: 'indent',
            actionArgs: { indentRight: true },
            context: 'insert',
          },
          {
            keys: '<C-d>',
            type: 'action',
            action: 'indent',
            actionArgs: { indentRight: false },
            context: 'insert',
          },
          { keys: 'a<character>', type: 'motion', motion: 'textObjectManipulation' },
          {
            keys: 'i<character>',
            type: 'motion',
            motion: 'textObjectManipulation',
            motionArgs: { textObjectInner: true },
          },
          {
            keys: '/',
            type: 'search',
            searchArgs: { forward: true, querySrc: 'prompt', toJumplist: true },
          },
          {
            keys: '?',
            type: 'search',
            searchArgs: { forward: false, querySrc: 'prompt', toJumplist: true },
          },
          {
            keys: '*',
            type: 'search',
            searchArgs: {
              forward: true,
              querySrc: 'wordUnderCursor',
              wholeWordOnly: true,
              toJumplist: true,
            },
          },
          {
            keys: '#',
            type: 'search',
            searchArgs: {
              forward: false,
              querySrc: 'wordUnderCursor',
              wholeWordOnly: true,
              toJumplist: true,
            },
          },
          {
            keys: 'g*',
            type: 'search',
            searchArgs: {
              forward: true,
              querySrc: 'wordUnderCursor',
              toJumplist: true,
            },
          },
          {
            keys: 'g#',
            type: 'search',
            searchArgs: {
              forward: false,
              querySrc: 'wordUnderCursor',
              toJumplist: true,
            },
          },
          { keys: ':', type: 'ex' },
        ];
        var r = t.length;
        var n = [
          { name: 'colorscheme', shortName: 'colo' },
          { name: 'map' },
          { name: 'imap', shortName: 'im' },
          { name: 'nmap', shortName: 'nm' },
          { name: 'vmap', shortName: 'vm' },
          { name: 'unmap' },
          { name: 'write', shortName: 'w' },
          { name: 'undo', shortName: 'u' },
          { name: 'redo', shortName: 'red' },
          { name: 'set', shortName: 'se' },
          { name: 'setlocal', shortName: 'setl' },
          { name: 'setglobal', shortName: 'setg' },
          { name: 'sort', shortName: 'sor' },
          { name: 'substitute', shortName: 's', possiblyAsync: true },
          { name: 'nohlsearch', shortName: 'noh' },
          { name: 'yank', shortName: 'y' },
          { name: 'delmarks', shortName: 'delm' },
          { name: 'registers', shortName: 'reg', excludeFromCommandHistory: true },
          { name: 'vglobal', shortName: 'v' },
          { name: 'global', shortName: 'g' },
        ];
        var i = e.Pos;
        var a = function () {
          function a(t) {
            t.setOption('disableInput', true);
            t.setOption('showCursorWhenSelecting', false);
            e.signal(t, 'vim-mode-change', { mode: 'normal' });
            t.on('cursorActivity', Wt);
            D(t);
            e.on(t.getInputField(), 'paste', g(t));
          }
          function o(t) {
            t.setOption('disableInput', false);
            t.off('cursorActivity', Wt);
            e.off(t.getInputField(), 'paste', g(t));
            t.state.vim = null;
          }
          function s(t, r) {
            if (this == e.keyMap.vim) {
              e.rmClass(t.getWrapperElement(), 'cm-fat-cursor');
              if (
                t.getOption('inputStyle') == 'contenteditable' &&
                document.body.style.caretColor != null
              ) {
                v(t);
                t.getInputField().style.caretColor = '';
              }
            }
            if (!r || r.attach != l) o(t);
          }
          function l(t, r) {
            if (this == e.keyMap.vim) {
              e.addClass(t.getWrapperElement(), 'cm-fat-cursor');
              if (
                t.getOption('inputStyle') == 'contenteditable' &&
                document.body.style.caretColor != null
              ) {
                f(t);
                t.getInputField().style.caretColor = 'transparent';
              }
            }
            if (!r || r.attach != l) a(t);
          }
          function c(e) {
            if (!e.state.fatCursorMarks) return;
            u(e);
            var t = e.listSelections(),
              r = [];
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              if (a.empty()) {
                var o = e.getLine(a.anchor.line).length;
                if (a.anchor.ch < o) {
                  r.push(
                    e.markText(a.anchor, i(a.anchor.line, a.anchor.ch + 1), {
                      className: 'cm-fat-cursor-mark',
                    })
                  );
                } else {
                  r.push(
                    e.markText(i(a.anchor.line, o - 1), i(a.anchor.line, o), {
                      className: 'cm-fat-cursor-mark',
                    })
                  );
                }
              }
            }
            e.state.fatCursorMarks = r;
          }
          function u(e) {
            var t = e.state.fatCursorMarks;
            if (t) for (var r = 0; r < t.length; r++) t[r].clear();
          }
          function f(e) {
            e.state.fatCursorMarks = [];
            c(e);
            e.on('cursorActivity', c);
          }
          function v(e) {
            u(e);
            e.off('cursorActivity', c);
            e.state.fatCursorMarks = null;
          }
          e.defineOption('vimMode', false, function (t, r, n) {
            if (r && t.getOption('keyMap') != 'vim') t.setOption('keyMap', 'vim');
            else if (!r && n != e.Init && /^vim/.test(t.getOption('keyMap')))
              t.setOption('keyMap', 'default');
          });
          function h(t, r) {
            if (!r) {
              return undefined;
            }
            if (this[t]) {
              return this[t];
            }
            var n = m(t);
            if (!n) {
              return false;
            }
            var i = e.Vim.findKey(r, n);
            if (typeof i == 'function') {
              e.signal(r, 'vim-keypress', n);
            }
            return i;
          }
          var p = { Shift: 'S', Ctrl: 'C', Alt: 'A', Cmd: 'D', Mod: 'A', CapsLock: '' };
          var d = { Enter: 'CR', Backspace: 'BS', Delete: 'Del', Insert: 'Ins' };
          function m(e) {
            if (e.charAt(0) == "'") {
              return e.charAt(1);
            }
            var t = e.split(/-(?!$)/);
            var r = t[t.length - 1];
            if (t.length == 1 && t[0].length == 1) {
              return false;
            } else if (t.length == 2 && t[0] == 'Shift' && r.length == 1) {
              return false;
            }
            var n = false;
            for (var i = 0; i < t.length; i++) {
              var a = t[i];
              if (a in p) {
                t[i] = p[a];
              } else {
                n = true;
              }
              if (a in d) {
                t[i] = d[a];
              }
            }
            if (!n) {
              return false;
            }
            if (I(r)) {
              t[t.length - 1] = r.toLowerCase();
            }
            return '<' + t.join('-') + '>';
          }
          function g(e) {
            var t = e.state.vim;
            if (!t.onPasteFn) {
              t.onPasteFn = function () {
                if (!t.insertMode) {
                  e.setCursor(ce(e.getCursor(), 0, 1));
                  ae.enterInsertMode(e, {}, t);
                }
              };
            }
            return t.onPasteFn;
          }
          var y = /[\d]/;
          var k = [
              e.isWordChar,
              function (t) {
                return t && !e.isWordChar(t) && !/\s/.test(t);
              },
            ],
            C = [
              function (e) {
                return /\S/.test(e);
              },
            ];
          function w(e, t) {
            var r = [];
            for (var n = e; n < e + t; n++) {
              r.push(String.fromCharCode(n));
            }
            return r;
          }
          var x = w(65, 26);
          var M = w(97, 26);
          var S = w(48, 10);
          var A = [].concat(x, M, S, ['<', '>']);
          var b = [].concat(x, M, S, ['-', '"', '.', ':', '_', '/']);
          function L(e, t) {
            return t >= e.firstLine() && t <= e.lastLine();
          }
          function T(e) {
            return /^[a-z]$/.test(e);
          }
          function R(e) {
            return '()[]{}'.indexOf(e) != -1;
          }
          function E(e) {
            return y.test(e);
          }
          function I(e) {
            return /^[A-Z]$/.test(e);
          }
          function O(e) {
            return /^\s*$/.test(e);
          }
          function B(e) {
            return '.?!'.indexOf(e) != -1;
          }
          function N(e, t) {
            for (var r = 0; r < t.length; r++) {
              if (t[r] == e) {
                return true;
              }
            }
            return false;
          }
          var K = {};
          function P(e, t, r, n, i) {
            if (t === undefined && !i) {
              throw Error('defaultValue is required unless callback is provided');
            }
            if (!r) {
              r = 'string';
            }
            K[e] = { type: r, defaultValue: t, callback: i };
            if (n) {
              for (var a = 0; a < n.length; a++) {
                K[n[a]] = K[e];
              }
            }
            if (t) {
              _(e, t);
            }
          }
          function _(e, t, r, n) {
            var i = K[e];
            n = n || {};
            var a = n.scope;
            if (!i) {
              return new Error('Unknown option: ' + e);
            }
            if (i.type == 'boolean') {
              if (t && t !== true) {
                return new Error('Invalid argument: ' + e + '=' + t);
              } else if (t !== false) {
                t = true;
              }
            }
            if (i.callback) {
              if (a !== 'local') {
                i.callback(t, undefined);
              }
              if (a !== 'global' && r) {
                i.callback(t, r);
              }
            } else {
              if (a !== 'local') {
                i.value = i.type == 'boolean' ? !!t : t;
              }
              if (a !== 'global' && r) {
                r.state.vim.options[e] = { value: t };
              }
            }
          }
          function j(e, t, r) {
            var n = K[e];
            r = r || {};
            var i = r.scope;
            if (!n) {
              return new Error('Unknown option: ' + e);
            }
            if (n.callback) {
              var a = t && n.callback(undefined, t);
              if (i !== 'global' && a !== undefined) {
                return a;
              }
              if (i !== 'local') {
                return n.callback();
              }
              return;
            } else {
              var a = i !== 'global' && t && t.state.vim.options[e];
              return (a || (i !== 'local' && n) || {}).value;
            }
          }
          P('filetype', undefined, 'string', ['ft'], function (e, t) {
            if (t === undefined) {
              return;
            }
            if (e === undefined) {
              var r = t.getOption('mode');
              return r == 'null' ? '' : r;
            } else {
              var r = e == '' ? 'null' : e;
              t.setOption('mode', r);
            }
          });
          var H = function () {
            var e = 100;
            var t = -1;
            var r = 0;
            var n = 0;
            var i = new Array(e);
            function a(a, o, s) {
              var l = t % e;
              var c = i[l];
              function u(r) {
                var n = ++t % e;
                var o = i[n];
                if (o) {
                  o.clear();
                }
                i[n] = a.setBookmark(r);
              }
              if (c) {
                var f = c.find();
                if (f && !de(f, o)) {
                  u(o);
                }
              } else {
                u(o);
              }
              u(s);
              r = t;
              n = t - e + 1;
              if (n < 0) {
                n = 0;
              }
            }
            function o(a, o) {
              t += o;
              if (t > r) {
                t = r;
              } else if (t < n) {
                t = n;
              }
              var s = i[(e + t) % e];
              if (s && !s.find()) {
                var l = o > 0 ? 1 : -1;
                var c;
                var u = a.getCursor();
                do {
                  t += l;
                  s = i[(e + t) % e];
                  if (s && (c = s.find()) && !de(u, c)) {
                    break;
                  }
                } while (t < r && t > n);
              }
              return s;
            }
            function s(e, r) {
              var n = t;
              var i = o(e, r);
              t = n;
              return i && i.find();
            }
            return { cachedCursor: undefined, add: a, find: s, move: o };
          };
          var F = function (e) {
            if (e) {
              return {
                changes: e.changes,
                expectCursorActivityForChange: e.expectCursorActivityForChange,
              };
            }
            return { changes: [], expectCursorActivityForChange: false };
          };
          function W() {
            this.latestRegister = undefined;
            this.isPlaying = false;
            this.isRecording = false;
            this.replaySearchQueries = [];
            this.onRecordingDone = undefined;
            this.lastInsertModeChanges = F();
          }
          W.prototype = {
            exitMacroRecordMode: function () {
              var e = V.macroModeState;
              if (e.onRecordingDone) {
                e.onRecordingDone();
              }
              e.onRecordingDone = undefined;
              e.isRecording = false;
            },
            enterMacroRecordMode: function (e, t) {
              var r = V.registerController.getRegister(t);
              if (r) {
                r.clear();
                this.latestRegister = t;
                if (e.openDialog) {
                  this.onRecordingDone = e.openDialog('(recording)[' + t + ']', null, {
                    bottom: true,
                  });
                }
                this.isRecording = true;
              }
            },
          };
          function D(e) {
            if (!e.state.vim) {
              e.state.vim = {
                inputState: new Q(),
                lastEditInputState: undefined,
                lastEditActionCommand: undefined,
                lastHPos: -1,
                lastHSPos: -1,
                lastMotion: null,
                marks: {},
                fakeCursor: null,
                insertMode: false,
                insertModeRepeat: undefined,
                visualMode: false,
                visualLine: false,
                visualBlock: false,
                lastSelection: null,
                lastPastedText: null,
                sel: {},
                options: {},
              };
            }
            return e.state.vim;
          }
          var V;
          function $() {
            V = {
              searchQuery: null,
              searchIsReversed: false,
              lastSubstituteReplacePart: undefined,
              jumpList: H(),
              macroModeState: new W(),
              lastCharacterSearch: {
                increment: 0,
                forward: true,
                selectedCharacter: '',
              },
              registerController: new Z({}),
              searchHistoryController: new G(),
              exCommandHistoryController: new G(),
            };
            for (var e in K) {
              var t = K[e];
              t.value = t.defaultValue;
            }
          }
          var U;
          var J = {
            buildKeyMap: function () {},
            getRegisterController: function () {
              return V.registerController;
            },
            resetVimGlobalState_: $,
            getVimGlobalState_: function () {
              return V;
            },
            maybeInitVimState_: D,
            suppressErrorLogging: false,
            InsertModeKey: Ut,
            map: function (e, t, r) {
              It.map(e, t, r);
            },
            unmap: function (e, t) {
              It.unmap(e, t);
            },
            noremap: function (e, n, i) {
              function a(e) {
                return e ? [e] : ['normal', 'insert', 'visual'];
              }
              var o = a(i);
              var s = t.length,
                l = r;
              for (var c = s - l; c < s && o.length; c++) {
                var u = t[c];
                if (
                  u.keys == n &&
                  (!i || !u.context || u.context === i) &&
                  u.type.substr(0, 2) !== 'ex' &&
                  u.type.substr(0, 3) !== 'key'
                ) {
                  var f = {};
                  for (var v in u) {
                    f[v] = u[v];
                  }
                  f.keys = e;
                  if (i && !f.context) {
                    f.context = i;
                  }
                  this._mapCommand(f);
                  var h = a(u.context);
                  o = o.filter(function (e) {
                    return h.indexOf(e) === -1;
                  });
                }
              }
            },
            mapclear: function (e) {
              var n = t.length,
                i = r;
              var a = t.slice(0, n - i);
              t = t.slice(n - i);
              if (e) {
                for (var o = a.length - 1; o >= 0; o--) {
                  var s = a[o];
                  if (e !== s.context) {
                    if (s.context) {
                      this._mapCommand(s);
                    } else {
                      var l = ['normal', 'insert', 'visual'];
                      for (var c in l) {
                        if (l[c] !== e) {
                          var u = {};
                          for (var f in s) {
                            u[f] = s[f];
                          }
                          u.context = l[c];
                          this._mapCommand(u);
                        }
                      }
                    }
                  }
                }
              }
            },
            setOption: _,
            getOption: j,
            defineOption: P,
            defineEx: function (e, t, r) {
              if (!t) {
                t = e;
              } else if (e.indexOf(t) !== 0) {
                throw new Error(
                  '(Vim.defineEx) "' +
                    t +
                    '" is not a prefix of "' +
                    e +
                    '", command not registered'
                );
              }
              Et[e] = r;
              It.commandMap_[t] = { name: e, shortName: t, type: 'api' };
            },
            handleKey: function (e, t, r) {
              var n = this.findKey(e, t, r);
              if (typeof n === 'function') {
                return n();
              }
            },
            findKey: function (r, n, i) {
              var a = D(r);
              function o() {
                var e = V.macroModeState;
                if (e.isRecording) {
                  if (n == 'q') {
                    e.exitMacroRecordMode();
                    q(r);
                    return true;
                  }
                  if (i != 'mapping') {
                    _t(e, n);
                  }
                }
              }
              function s() {
                if (n == '<Esc>') {
                  q(r);
                  if (a.visualMode) {
                    Be(r);
                  } else if (a.insertMode) {
                    Bt(r);
                  }
                  return true;
                }
              }
              function l(t) {
                var i;
                while (t) {
                  i = /<\w+-.+?>|<\w+>|./.exec(t);
                  n = i[0];
                  t = t.substring(i.index + n.length);
                  e.Vim.handleKey(r, n, 'mapping');
                }
              }
              function c() {
                if (s()) {
                  return true;
                }
                var e = (a.inputState.keyBuffer = a.inputState.keyBuffer + n);
                var i = n.length == 1;
                var o = Y.matchCommand(e, t, a.inputState, 'insert');
                while (e.length > 1 && o.type != 'full') {
                  var e = (a.inputState.keyBuffer = e.slice(1));
                  var l = Y.matchCommand(e, t, a.inputState, 'insert');
                  if (l.type != 'none') {
                    o = l;
                  }
                }
                if (o.type == 'none') {
                  q(r);
                  return false;
                } else if (o.type == 'partial') {
                  if (U) {
                    window.clearTimeout(U);
                  }
                  U = window.setTimeout(function () {
                    if (a.insertMode && a.inputState.keyBuffer) {
                      q(r);
                    }
                  }, j('insertModeEscKeysTimeout'));
                  return !i;
                }
                if (U) {
                  window.clearTimeout(U);
                }
                if (i) {
                  var c = r.listSelections();
                  for (var u = 0; u < c.length; u++) {
                    var f = c[u].head;
                    r.replaceRange('', ce(f, 0, -(e.length - 1)), f, '+input');
                  }
                  V.macroModeState.lastInsertModeChanges.changes.pop();
                }
                q(r);
                return o.command;
              }
              function u() {
                if (o() || s()) {
                  return true;
                }
                var e = (a.inputState.keyBuffer = a.inputState.keyBuffer + n);
                if (/^[1-9]\d*$/.test(e)) {
                  return true;
                }
                var i = /^(\d*)(.*)$/.exec(e);
                if (!i) {
                  q(r);
                  return false;
                }
                var l = a.visualMode ? 'visual' : 'normal';
                var c = Y.matchCommand(i[2] || i[1], t, a.inputState, l);
                if (c.type == 'none') {
                  q(r);
                  return false;
                } else if (c.type == 'partial') {
                  return true;
                }
                a.inputState.keyBuffer = '';
                var i = /^(\d*)(.*)$/.exec(e);
                if (i[1] && i[1] != '0') {
                  a.inputState.pushRepeatDigit(i[1]);
                }
                return c.command;
              }
              var f;
              if (a.insertMode) {
                f = c();
              } else {
                f = u();
              }
              if (f === false) {
                return !a.insertMode && n.length === 1
                  ? function () {
                      return true;
                    }
                  : undefined;
              } else if (f === true) {
                return function () {
                  return true;
                };
              } else {
                return function () {
                  return r.operation(function () {
                    r.curOp.isVimOp = true;
                    try {
                      if (f.type == 'keyToKey') {
                        l(f.toKeys);
                      } else {
                        Y.processCommand(r, a, f);
                      }
                    } catch (t) {
                      r.state.vim = undefined;
                      D(r);
                      if (!e.Vim.suppressErrorLogging) {
                        console['log'](t);
                      }
                      throw t;
                    }
                    return true;
                  });
                };
              }
            },
            handleEx: function (e, t) {
              It.processCommand(e, t);
            },
            defineMotion: te,
            defineAction: oe,
            defineOperator: ie,
            mapCommand: Kt,
            _mapCommand: Nt,
            defineRegister: X,
            exitVisualMode: Be,
            exitInsertMode: Bt,
          };
          function Q() {
            this.prefixRepeat = [];
            this.motionRepeat = [];
            this.operator = null;
            this.operatorArgs = null;
            this.motion = null;
            this.motionArgs = null;
            this.keyBuffer = [];
            this.registerName = null;
          }
          Q.prototype.pushRepeatDigit = function (e) {
            if (!this.operator) {
              this.prefixRepeat = this.prefixRepeat.concat(e);
            } else {
              this.motionRepeat = this.motionRepeat.concat(e);
            }
          };
          Q.prototype.getRepeat = function () {
            var e = 0;
            if (this.prefixRepeat.length > 0 || this.motionRepeat.length > 0) {
              e = 1;
              if (this.prefixRepeat.length > 0) {
                e *= parseInt(this.prefixRepeat.join(''), 10);
              }
              if (this.motionRepeat.length > 0) {
                e *= parseInt(this.motionRepeat.join(''), 10);
              }
            }
            return e;
          };
          function q(t, r) {
            t.state.vim.inputState = new Q();
            e.signal(t, 'vim-command-done', r);
          }
          function z(e, t, r) {
            this.clear();
            this.keyBuffer = [e || ''];
            this.insertModeChanges = [];
            this.searchQueries = [];
            this.linewise = !!t;
            this.blockwise = !!r;
          }
          z.prototype = {
            setText: function (e, t, r) {
              this.keyBuffer = [e || ''];
              this.linewise = !!t;
              this.blockwise = !!r;
            },
            pushText: function (e, t) {
              if (t) {
                if (!this.linewise) {
                  this.keyBuffer.push('\n');
                }
                this.linewise = true;
              }
              this.keyBuffer.push(e);
            },
            pushInsertModeChanges: function (e) {
              this.insertModeChanges.push(F(e));
            },
            pushSearchQuery: function (e) {
              this.searchQueries.push(e);
            },
            clear: function () {
              this.keyBuffer = [];
              this.insertModeChanges = [];
              this.searchQueries = [];
              this.linewise = false;
            },
            toString: function () {
              return this.keyBuffer.join('');
            },
          };
          function X(e, t) {
            var r = V.registerController.registers;
            if (!e || e.length != 1) {
              throw Error('Register name must be 1 character');
            }
            if (r[e]) {
              throw Error('Register already defined ' + e);
            }
            r[e] = t;
            b.push(e);
          }
          function Z(e) {
            this.registers = e;
            this.unnamedRegister = e['"'] = new z();
            e['.'] = new z();
            e[':'] = new z();
            e['/'] = new z();
          }
          Z.prototype = {
            pushText: function (e, t, r, n, i) {
              if (e === '_') return;
              if (n && r.charAt(r.length - 1) !== '\n') {
                r += '\n';
              }
              var a = this.isValidRegister(e) ? this.getRegister(e) : null;
              if (!a) {
                switch (t) {
                  case 'yank':
                    this.registers['0'] = new z(r, n, i);
                    break;
                  case 'delete':
                  case 'change':
                    if (r.indexOf('\n') == -1) {
                      this.registers['-'] = new z(r, n);
                    } else {
                      this.shiftNumericRegisters_();
                      this.registers['1'] = new z(r, n);
                    }
                    break;
                }
                this.unnamedRegister.setText(r, n, i);
                return;
              }
              var o = I(e);
              if (o) {
                a.pushText(r, n);
              } else {
                a.setText(r, n, i);
              }
              this.unnamedRegister.setText(a.toString(), n);
            },
            getRegister: function (e) {
              if (!this.isValidRegister(e)) {
                return this.unnamedRegister;
              }
              e = e.toLowerCase();
              if (!this.registers[e]) {
                this.registers[e] = new z();
              }
              return this.registers[e];
            },
            isValidRegister: function (e) {
              return e && N(e, b);
            },
            shiftNumericRegisters_: function () {
              for (var e = 9; e >= 2; e--) {
                this.registers[e] = this.getRegister('' + (e - 1));
              }
            },
          };
          function G() {
            this.historyBuffer = [];
            this.iterator = 0;
            this.initialPrefix = null;
          }
          G.prototype = {
            nextMatch: function (e, t) {
              var r = this.historyBuffer;
              var n = t ? -1 : 1;
              if (this.initialPrefix === null) this.initialPrefix = e;
              for (var i = this.iterator + n; t ? i >= 0 : i < r.length; i += n) {
                var a = r[i];
                for (var o = 0; o <= a.length; o++) {
                  if (this.initialPrefix == a.substring(0, o)) {
                    this.iterator = i;
                    return a;
                  }
                }
              }
              if (i >= r.length) {
                this.iterator = r.length;
                return this.initialPrefix;
              }
              if (i < 0) return e;
            },
            pushInput: function (e) {
              var t = this.historyBuffer.indexOf(e);
              if (t > -1) this.historyBuffer.splice(t, 1);
              if (e.length) this.historyBuffer.push(e);
            },
            reset: function () {
              this.initialPrefix = null;
              this.iterator = this.historyBuffer.length;
            },
          };
          var Y = {
            matchCommand: function (e, t, r, n) {
              var i = ue(e, t, n, r);
              if (!i.full && !i.partial) {
                return { type: 'none' };
              } else if (!i.full && i.partial) {
                return { type: 'partial' };
              }
              var a;
              for (var o = 0; o < i.full.length; o++) {
                var s = i.full[o];
                if (!a) {
                  a = s;
                }
              }
              if (a.keys.slice(-11) == '<character>') {
                var l = ve(e);
                if (!l) return { type: 'none' };
                r.selectedCharacter = l;
              }
              return { type: 'full', command: a };
            },
            processCommand: function (e, t, r) {
              t.inputState.repeatOverride = r.repeatOverride;
              switch (r.type) {
                case 'motion':
                  this.processMotion(e, t, r);
                  break;
                case 'operator':
                  this.processOperator(e, t, r);
                  break;
                case 'operatorMotion':
                  this.processOperatorMotion(e, t, r);
                  break;
                case 'action':
                  this.processAction(e, t, r);
                  break;
                case 'search':
                  this.processSearch(e, t, r);
                  break;
                case 'ex':
                case 'keyToEx':
                  this.processEx(e, t, r);
                  break;
                default:
                  break;
              }
            },
            processMotion: function (e, t, r) {
              t.inputState.motion = r.motion;
              t.inputState.motionArgs = le(r.motionArgs);
              this.evalInput(e, t);
            },
            processOperator: function (e, t, r) {
              var n = t.inputState;
              if (n.operator) {
                if (n.operator == r.operator) {
                  n.motion = 'expandToLine';
                  n.motionArgs = { linewise: true };
                  this.evalInput(e, t);
                  return;
                } else {
                  q(e);
                }
              }
              n.operator = r.operator;
              n.operatorArgs = le(r.operatorArgs);
              if (r.exitVisualBlock) {
                t.visualBlock = false;
                Ee(e);
              }
              if (t.visualMode) {
                this.evalInput(e, t);
              }
            },
            processOperatorMotion: function (e, t, r) {
              var n = t.visualMode;
              var i = le(r.operatorMotionArgs);
              if (i) {
                if (n && i.visualLine) {
                  t.visualLine = true;
                }
              }
              this.processOperator(e, t, r);
              if (!n) {
                this.processMotion(e, t, r);
              }
            },
            processAction: function (e, t, r) {
              var n = t.inputState;
              var i = n.getRepeat();
              var a = !!i;
              var o = le(r.actionArgs) || {};
              if (n.selectedCharacter) {
                o.selectedCharacter = n.selectedCharacter;
              }
              if (r.operator) {
                this.processOperator(e, t, r);
              }
              if (r.motion) {
                this.processMotion(e, t, r);
              }
              if (r.motion || r.operator) {
                this.evalInput(e, t);
              }
              o.repeat = i || 1;
              o.repeatIsExplicit = a;
              o.registerName = n.registerName;
              q(e);
              t.lastMotion = null;
              if (r.isEdit) {
                this.recordLastEdit(t, n, r);
              }
              ae[r.action](e, o, t);
            },
            processSearch: function (t, r, n) {
              if (!t.getSearchCursor) {
                return;
              }
              var i = n.searchArgs.forward;
              var a = n.searchArgs.wholeWordOnly;
              rt(t).setReversed(!i);
              var o = i ? '/' : '?';
              var s = rt(t).getQuery();
              var l = t.getScrollInfo();
              function c(e, i, a) {
                V.searchHistoryController.pushInput(e);
                V.searchHistoryController.reset();
                try {
                  yt(t, e, i, a);
                } catch (o) {
                  pt(t, 'Invalid regex: ' + e);
                  q(t);
                  return;
                }
                Y.processMotion(t, r, {
                  type: 'motion',
                  motion: 'findNext',
                  motionArgs: { forward: true, toJumplist: n.searchArgs.toJumplist },
                });
              }
              function u(e) {
                t.scrollTo(l.left, l.top);
                c(e, true, true);
                var r = V.macroModeState;
                if (r.isRecording) {
                  Ht(r, e);
                }
              }
              function f(r, n, a) {
                var o = e.keyName(r),
                  s,
                  c;
                if (o == 'Up' || o == 'Down') {
                  s = o == 'Up' ? true : false;
                  c = r.target ? r.target.selectionEnd : 0;
                  n = V.searchHistoryController.nextMatch(n, s) || '';
                  a(n);
                  if (c && r.target)
                    r.target.selectionEnd = r.target.selectionStart = Math.min(
                      c,
                      r.target.value.length
                    );
                } else {
                  if (
                    o != 'Left' &&
                    o != 'Right' &&
                    o != 'Ctrl' &&
                    o != 'Alt' &&
                    o != 'Shift'
                  )
                    V.searchHistoryController.reset();
                }
                var u;
                try {
                  u = yt(t, n, true, true);
                } catch (r) {}
                if (u) {
                  t.scrollIntoView(xt(t, !i, u), 30);
                } else {
                  St(t);
                  t.scrollTo(l.left, l.top);
                }
              }
              function v(r, n, i) {
                var a = e.keyName(r);
                if (
                  a == 'Esc' ||
                  a == 'Ctrl-C' ||
                  a == 'Ctrl-[' ||
                  (a == 'Backspace' && n == '')
                ) {
                  V.searchHistoryController.pushInput(n);
                  V.searchHistoryController.reset();
                  yt(t, s);
                  St(t);
                  t.scrollTo(l.left, l.top);
                  e.e_stop(r);
                  q(t);
                  i();
                  t.focus();
                } else if (a == 'Up' || a == 'Down') {
                  e.e_stop(r);
                } else if (a == 'Ctrl-U') {
                  e.e_stop(r);
                  i('');
                }
              }
              switch (n.searchArgs.querySrc) {
                case 'prompt':
                  var h = V.macroModeState;
                  if (h.isPlaying) {
                    var p = h.replaySearchQueries.shift();
                    c(p, true, false);
                  } else {
                    mt(t, {
                      onClose: u,
                      prefix: o,
                      desc: '(JavaScript regexp)',
                      onKeyUp: f,
                      onKeyDown: v,
                    });
                  }
                  break;
                case 'wordUnderCursor':
                  var d = _e(t, false, true, false, true);
                  var m = true;
                  if (!d) {
                    d = _e(t, false, true, false, false);
                    m = false;
                  }
                  if (!d) {
                    return;
                  }
                  var p = t.getLine(d.start.line).substring(d.start.ch, d.end.ch);
                  if (m && a) {
                    p = '\\b' + p + '\\b';
                  } else {
                    p = xe(p);
                  }
                  V.jumpList.cachedCursor = t.getCursor();
                  t.setCursor(d.start);
                  c(p, true, false);
                  break;
              }
            },
            processEx: function (t, r, n) {
              function i(e) {
                V.exCommandHistoryController.pushInput(e);
                V.exCommandHistoryController.reset();
                It.processCommand(t, e);
              }
              function a(r, n, i) {
                var a = e.keyName(r),
                  o,
                  s;
                if (
                  a == 'Esc' ||
                  a == 'Ctrl-C' ||
                  a == 'Ctrl-[' ||
                  (a == 'Backspace' && n == '')
                ) {
                  V.exCommandHistoryController.pushInput(n);
                  V.exCommandHistoryController.reset();
                  e.e_stop(r);
                  q(t);
                  i();
                  t.focus();
                }
                if (a == 'Up' || a == 'Down') {
                  e.e_stop(r);
                  o = a == 'Up' ? true : false;
                  s = r.target ? r.target.selectionEnd : 0;
                  n = V.exCommandHistoryController.nextMatch(n, o) || '';
                  i(n);
                  if (s && r.target)
                    r.target.selectionEnd = r.target.selectionStart = Math.min(
                      s,
                      r.target.value.length
                    );
                } else if (a == 'Ctrl-U') {
                  e.e_stop(r);
                  i('');
                } else {
                  if (
                    a != 'Left' &&
                    a != 'Right' &&
                    a != 'Ctrl' &&
                    a != 'Alt' &&
                    a != 'Shift'
                  )
                    V.exCommandHistoryController.reset();
                }
              }
              if (n.type == 'keyToEx') {
                It.processCommand(t, n.exArgs.input);
              } else {
                if (r.visualMode) {
                  mt(t, {
                    onClose: i,
                    prefix: ':',
                    value: "'<,'>",
                    onKeyDown: a,
                    selectValueOnOpen: false,
                  });
                } else {
                  mt(t, { onClose: i, prefix: ':', onKeyDown: a });
                }
              }
            },
            evalInput: function (e, t) {
              var r = t.inputState;
              var n = r.motion;
              var a = r.motionArgs || {};
              var o = r.operator;
              var s = r.operatorArgs || {};
              var l = r.registerName;
              var c = t.sel;
              var u = pe(t.visualMode ? se(e, c.head) : e.getCursor('head'));
              var f = pe(t.visualMode ? se(e, c.anchor) : e.getCursor('anchor'));
              var v = pe(u);
              var h = pe(f);
              var p, d;
              var m;
              if (o) {
                this.recordLastEdit(t, r);
              }
              if (r.repeatOverride !== undefined) {
                m = r.repeatOverride;
              } else {
                m = r.getRepeat();
              }
              if (m > 0 && a.explicitRepeat) {
                a.repeatIsExplicit = true;
              } else if (a.noRepeat || (!a.explicitRepeat && m === 0)) {
                m = 1;
                a.repeatIsExplicit = false;
              }
              if (r.selectedCharacter) {
                a.selectedCharacter = s.selectedCharacter = r.selectedCharacter;
              }
              a.repeat = m;
              q(e);
              if (n) {
                var g = ee[n](e, u, a, t, r);
                t.lastMotion = ee[n];
                if (!g) {
                  return;
                }
                if (a.toJumplist) {
                  var y = V.jumpList;
                  var k = y.cachedCursor;
                  if (k) {
                    He(e, k, g);
                    delete y.cachedCursor;
                  } else {
                    He(e, u, g);
                  }
                }
                if (g instanceof Array) {
                  d = g[0];
                  p = g[1];
                } else {
                  p = g;
                }
                if (!p) {
                  p = pe(u);
                }
                if (t.visualMode) {
                  if (!(t.visualBlock && p.ch === Infinity)) {
                    p = se(e, p);
                  }
                  if (d) {
                    d = se(e, d);
                  }
                  d = d || h;
                  c.anchor = d;
                  c.head = p;
                  Ee(e);
                  ze(e, t, '<', me(d, p) ? d : p);
                  ze(e, t, '>', me(d, p) ? p : d);
                } else if (!o) {
                  p = se(e, p);
                  e.setCursor(p.line, p.ch);
                }
              }
              if (o) {
                if (s.lastSel) {
                  d = h;
                  var C = s.lastSel;
                  var w = Math.abs(C.head.line - C.anchor.line);
                  var x = Math.abs(C.head.ch - C.anchor.ch);
                  if (C.visualLine) {
                    p = i(h.line + w, h.ch);
                  } else if (C.visualBlock) {
                    p = i(h.line + w, h.ch + x);
                  } else if (C.head.line == C.anchor.line) {
                    p = i(h.line, h.ch + x);
                  } else {
                    p = i(h.line + w, h.ch);
                  }
                  t.visualMode = true;
                  t.visualLine = C.visualLine;
                  t.visualBlock = C.visualBlock;
                  c = t.sel = { anchor: d, head: p };
                  Ee(e);
                } else if (t.visualMode) {
                  s.lastSel = {
                    anchor: pe(c.anchor),
                    head: pe(c.head),
                    visualBlock: t.visualBlock,
                    visualLine: t.visualLine,
                  };
                }
                var M, S, A, b;
                var L;
                if (t.visualMode) {
                  M = ge(c.head, c.anchor);
                  S = ye(c.head, c.anchor);
                  A = t.visualLine || s.linewise;
                  b = t.visualBlock ? 'block' : A ? 'line' : 'char';
                  L = Ie(e, { anchor: M, head: S }, b);
                  if (A) {
                    var T = L.ranges;
                    if (b == 'block') {
                      for (var R = 0; R < T.length; R++) {
                        T[R].head.ch = Ce(e, T[R].head.line);
                      }
                    } else if (b == 'line') {
                      T[0].head = i(T[0].head.line + 1, 0);
                    }
                  }
                } else {
                  M = pe(d || h);
                  S = pe(p || v);
                  if (me(S, M)) {
                    var E = M;
                    M = S;
                    S = E;
                  }
                  A = a.linewise || s.linewise;
                  if (A) {
                    Ke(e, M, S);
                  } else if (a.forward) {
                    Ne(e, M, S);
                  }
                  b = 'char';
                  var I = !a.inclusive || A;
                  L = Ie(e, { anchor: M, head: S }, b, I);
                }
                e.setSelections(L.ranges, L.primary);
                t.lastMotion = null;
                s.repeat = m;
                s.registerName = l;
                s.linewise = A;
                var O = ne[o](e, s, L.ranges, h, p);
                if (t.visualMode) {
                  Be(e, O != null);
                }
                if (O) {
                  e.setCursor(O);
                }
              }
            },
            recordLastEdit: function (e, t, r) {
              var n = V.macroModeState;
              if (n.isPlaying) {
                return;
              }
              e.lastEditInputState = t;
              e.lastEditActionCommand = r;
              n.lastInsertModeChanges.changes = [];
              n.lastInsertModeChanges.expectCursorActivityForChange = false;
              n.lastInsertModeChanges.visualBlock = e.visualBlock
                ? e.sel.head.line - e.sel.anchor.line
                : 0;
            },
          };
          var ee = {
            moveToTopLine: function (e, t, r) {
              var n = bt(e).top + r.repeat - 1;
              return i(n, Pe(e.getLine(n)));
            },
            moveToMiddleLine: function (e) {
              var t = bt(e);
              var r = Math.floor((t.top + t.bottom) * 0.5);
              return i(r, Pe(e.getLine(r)));
            },
            moveToBottomLine: function (e, t, r) {
              var n = bt(e).bottom - r.repeat + 1;
              return i(n, Pe(e.getLine(n)));
            },
            expandToLine: function (e, t, r) {
              var n = t;
              return i(n.line + r.repeat - 1, Infinity);
            },
            findNext: function (e, t, r) {
              var n = rt(e);
              var i = n.getQuery();
              if (!i) {
                return;
              }
              var a = !r.forward;
              a = n.isReversed() ? !a : a;
              wt(e, i);
              return xt(e, a, i, r.repeat);
            },
            findAndSelectNextInclusive: function (t, r, n, a, o) {
              var s = rt(t);
              var l = s.getQuery();
              if (!l) {
                return;
              }
              var c = !n.forward;
              c = s.isReversed() ? !c : c;
              var u = Mt(t, c, l, n.repeat, a);
              if (!u) {
                return;
              }
              if (o.operator) {
                return u;
              }
              var f = u[0];
              var v = i(u[1].line, u[1].ch - 1);
              if (a.visualMode) {
                if (a.visualLine || a.visualBlock) {
                  a.visualLine = false;
                  a.visualBlock = false;
                  e.signal(t, 'vim-mode-change', { mode: 'visual', subMode: '' });
                }
                var h = a.sel.anchor;
                if (h) {
                  if (s.isReversed()) {
                    if (n.forward) {
                      return [h, f];
                    }
                    return [h, v];
                  } else {
                    if (n.forward) {
                      return [h, v];
                    }
                    return [h, f];
                  }
                }
              } else {
                a.visualMode = true;
                a.visualLine = false;
                a.visualBlock = false;
                e.signal(t, 'vim-mode-change', { mode: 'visual', subMode: '' });
              }
              return c ? [v, f] : [f, v];
            },
            goToMark: function (e, t, r, n) {
              var i = Lt(e, n, r.selectedCharacter);
              if (i) {
                return r.linewise ? { line: i.line, ch: Pe(e.getLine(i.line)) } : i;
              }
              return null;
            },
            moveToOtherHighlightedEnd: function (e, t, r, n) {
              if (n.visualBlock && r.sameLine) {
                var a = n.sel;
                return [
                  se(e, i(a.anchor.line, a.head.ch)),
                  se(e, i(a.head.line, a.anchor.ch)),
                ];
              } else {
                return [n.sel.head, n.sel.anchor];
              }
            },
            jumpToMark: function (e, t, r, n) {
              var a = t;
              for (var o = 0; o < r.repeat; o++) {
                var s = a;
                for (var l in n.marks) {
                  if (!T(l)) {
                    continue;
                  }
                  var c = n.marks[l].find();
                  var u = r.forward ? me(c, s) : me(s, c);
                  if (u) {
                    continue;
                  }
                  if (r.linewise && c.line == s.line) {
                    continue;
                  }
                  var f = de(s, a);
                  var v = r.forward ? ke(s, c, a) : ke(a, c, s);
                  if (f || v) {
                    a = c;
                  }
                }
              }
              if (r.linewise) {
                a = i(a.line, Pe(e.getLine(a.line)));
              }
              return a;
            },
            moveByCharacters: function (e, t, r) {
              var n = t;
              var a = r.repeat;
              var o = r.forward ? n.ch + a : n.ch - a;
              return i(n.line, o);
            },
            moveByLines: function (e, t, r, n) {
              var a = t;
              var o = a.ch;
              switch (n.lastMotion) {
                case this.moveByLines:
                case this.moveByDisplayLines:
                case this.moveByScroll:
                case this.moveToColumn:
                case this.moveToEol:
                  o = n.lastHPos;
                  break;
                default:
                  n.lastHPos = o;
              }
              var s = r.repeat + (r.repeatOffset || 0);
              var l = r.forward ? a.line + s : a.line - s;
              var c = e.firstLine();
              var u = e.lastLine();
              var f = e.findPosV(a, r.forward ? s : -s, 'line', n.lastHSPos);
              var v = r.forward ? f.line > l : f.line < l;
              if (v) {
                l = f.line;
                o = f.ch;
              }
              if (l < c && a.line == c) {
                return this.moveToStartOfLine(e, t, r, n);
              } else if (l > u && a.line == u) {
                return Je(e, t, r, n, true);
              }
              if (r.toFirstChar) {
                o = Pe(e.getLine(l));
                n.lastHPos = o;
              }
              n.lastHSPos = e.charCoords(i(l, o), 'div').left;
              return i(l, o);
            },
            moveByDisplayLines: function (e, t, r, n) {
              var a = t;
              switch (n.lastMotion) {
                case this.moveByDisplayLines:
                case this.moveByScroll:
                case this.moveByLines:
                case this.moveToColumn:
                case this.moveToEol:
                  break;
                default:
                  n.lastHSPos = e.charCoords(a, 'div').left;
              }
              var o = r.repeat;
              var s = e.findPosV(a, r.forward ? o : -o, 'line', n.lastHSPos);
              if (s.hitSide) {
                if (r.forward) {
                  var l = e.charCoords(s, 'div');
                  var c = { top: l.top + 8, left: n.lastHSPos };
                  var s = e.coordsChar(c, 'div');
                } else {
                  var u = e.charCoords(i(e.firstLine(), 0), 'div');
                  u.left = n.lastHSPos;
                  s = e.coordsChar(u, 'div');
                }
              }
              n.lastHPos = s.ch;
              return s;
            },
            moveByPage: function (e, t, r) {
              var n = t;
              var i = r.repeat;
              return e.findPosV(n, r.forward ? i : -i, 'page');
            },
            moveByParagraph: function (e, t, r) {
              var n = r.forward ? 1 : -1;
              return Ze(e, t, r.repeat, n);
            },
            moveBySentence: function (e, t, r) {
              var n = r.forward ? 1 : -1;
              return Ge(e, t, r.repeat, n);
            },
            moveByScroll: function (e, t, r, n) {
              var i = e.getScrollInfo();
              var a = null;
              var o = r.repeat;
              if (!o) {
                o = i.clientHeight / (2 * e.defaultTextHeight());
              }
              var s = e.charCoords(t, 'local');
              r.repeat = o;
              var a = ee.moveByDisplayLines(e, t, r, n);
              if (!a) {
                return null;
              }
              var l = e.charCoords(a, 'local');
              e.scrollTo(null, i.top + l.top - s.top);
              return a;
            },
            moveByWords: function (e, t, r) {
              return Ue(e, t, r.repeat, !!r.forward, !!r.wordEnd, !!r.bigWord);
            },
            moveTillCharacter: function (e, t, r) {
              var n = r.repeat;
              var i = Qe(e, n, r.forward, r.selectedCharacter);
              var a = r.forward ? -1 : 1;
              Fe(a, r);
              if (!i) return null;
              i.ch += a;
              return i;
            },
            moveToCharacter: function (e, t, r) {
              var n = r.repeat;
              Fe(0, r);
              return Qe(e, n, r.forward, r.selectedCharacter) || t;
            },
            moveToSymbol: function (e, t, r) {
              var n = r.repeat;
              return Ve(e, n, r.forward, r.selectedCharacter) || t;
            },
            moveToColumn: function (e, t, r, n) {
              var i = r.repeat;
              n.lastHPos = i - 1;
              n.lastHSPos = e.charCoords(t, 'div').left;
              return qe(e, i);
            },
            moveToEol: function (e, t, r, n) {
              return Je(e, t, r, n, false);
            },
            moveToFirstNonWhiteSpaceCharacter: function (e, t) {
              var r = t;
              return i(r.line, Pe(e.getLine(r.line)));
            },
            moveToMatchedSymbol: function (e, t) {
              var r = t;
              var n = r.line;
              var a = r.ch;
              var o = e.getLine(n);
              var s;
              for (; a < o.length; a++) {
                s = o.charAt(a);
                if (s && R(s)) {
                  var l = e.getTokenTypeAt(i(n, a + 1));
                  if (l !== 'string' && l !== 'comment') {
                    break;
                  }
                }
              }
              if (a < o.length) {
                var c = a === '<' || a === '>' ? /[(){}[\]<>]/ : /[(){}[\]]/;
                var u = e.findMatchingBracket(i(n, a), { bracketRegex: c });
                return u.to;
              } else {
                return r;
              }
            },
            moveToStartOfLine: function (e, t) {
              return i(t.line, 0);
            },
            moveToLineOrEdgeOfDocument: function (e, t, r) {
              var n = r.forward ? e.lastLine() : e.firstLine();
              if (r.repeatIsExplicit) {
                n = r.repeat - e.getOption('firstLineNumber');
              }
              return i(n, Pe(e.getLine(n)));
            },
            textObjectManipulation: function (e, t, r, n) {
              var i = {
                '(': ')',
                ')': '(',
                '{': '}',
                '}': '{',
                '[': ']',
                ']': '[',
                '<': '>',
                '>': '<',
              };
              var a = { "'": true, '"': true, '`': true };
              var o = r.selectedCharacter;
              if (o == 'b') {
                o = '(';
              } else if (o == 'B') {
                o = '{';
              }
              var s = !r.textObjectInner;
              var l;
              if (i[o]) {
                l = Ye(e, t, o, s);
              } else if (a[o]) {
                l = et(e, t, o, s);
              } else if (o === 'W') {
                l = _e(e, s, true, true);
              } else if (o === 'w') {
                l = _e(e, s, true, false);
              } else if (o === 'p') {
                l = Ze(e, t, r.repeat, 0, s);
                r.linewise = true;
                if (n.visualMode) {
                  if (!n.visualLine) {
                    n.visualLine = true;
                  }
                } else {
                  var c = n.inputState.operatorArgs;
                  if (c) {
                    c.linewise = true;
                  }
                  l.end.line--;
                }
              } else if (o === 't') {
                l = je(e, t, s);
              } else {
                return null;
              }
              if (!e.state.vim.visualMode) {
                return [l.start, l.end];
              } else {
                return Re(e, l.start, l.end);
              }
            },
            repeatLastCharacterSearch: function (e, t, r) {
              var n = V.lastCharacterSearch;
              var i = r.repeat;
              var a = r.forward === n.forward;
              var o = (n.increment ? 1 : 0) * (a ? -1 : 1);
              e.moveH(-o, 'char');
              r.inclusive = a ? true : false;
              var s = Qe(e, i, a, n.selectedCharacter);
              if (!s) {
                e.moveH(o, 'char');
                return t;
              }
              s.ch += o;
              return s;
            },
          };
          function te(e, t) {
            ee[e] = t;
          }
          function re(e, t) {
            var r = [];
            for (var n = 0; n < t; n++) {
              r.push(e);
            }
            return r;
          }
          var ne = {
            change: function (t, r, n) {
              var a, o;
              var s = t.state.vim;
              var l = n[0].anchor,
                c = n[0].head;
              if (!s.visualMode) {
                o = t.getRange(l, c);
                var u = s.lastEditInputState || {};
                if (u.motion == 'moveByWords' && !O(o)) {
                  var f = /\s+$/.exec(o);
                  if (f && u.motionArgs && u.motionArgs.forward) {
                    c = ce(c, 0, -f[0].length);
                    o = o.slice(0, -f[0].length);
                  }
                }
                var v = new i(l.line - 1, Number.MAX_VALUE);
                var h = t.firstLine() == t.lastLine();
                if (c.line > t.lastLine() && r.linewise && !h) {
                  t.replaceRange('', v, c);
                } else {
                  t.replaceRange('', l, c);
                }
                if (r.linewise) {
                  if (!h) {
                    t.setCursor(v);
                    e.commands.newlineAndIndent(t);
                  }
                  l.ch = Number.MAX_VALUE;
                }
                a = l;
              } else if (r.fullLine) {
                c.ch = Number.MAX_VALUE;
                c.line--;
                t.setSelection(l, c);
                o = t.getSelection();
                t.replaceSelection('');
                a = l;
              } else {
                o = t.getSelection();
                var p = re('', n.length);
                t.replaceSelections(p);
                a = ge(n[0].head, n[0].anchor);
              }
              V.registerController.pushText(
                r.registerName,
                'change',
                o,
                r.linewise,
                n.length > 1
              );
              ae.enterInsertMode(t, { head: a }, t.state.vim);
            },
            delete: function (e, t, r) {
              var n, a;
              var o = e.state.vim;
              if (!o.visualBlock) {
                var s = r[0].anchor,
                  l = r[0].head;
                if (
                  t.linewise &&
                  l.line != e.firstLine() &&
                  s.line == e.lastLine() &&
                  s.line == l.line - 1
                ) {
                  if (s.line == e.firstLine()) {
                    s.ch = 0;
                  } else {
                    s = i(s.line - 1, Ce(e, s.line - 1));
                  }
                }
                a = e.getRange(s, l);
                e.replaceRange('', s, l);
                n = s;
                if (t.linewise) {
                  n = ee.moveToFirstNonWhiteSpaceCharacter(e, s);
                }
              } else {
                a = e.getSelection();
                var c = re('', r.length);
                e.replaceSelections(c);
                n = r[0].anchor;
              }
              V.registerController.pushText(
                t.registerName,
                'delete',
                a,
                t.linewise,
                o.visualBlock
              );
              return se(e, n);
            },
            indent: function (e, t, r) {
              var n = e.state.vim;
              var i = r[0].anchor.line;
              var a = n.visualBlock ? r[r.length - 1].anchor.line : r[0].head.line;
              var o = n.visualMode ? t.repeat : 1;
              if (t.linewise) {
                a--;
              }
              for (var s = i; s <= a; s++) {
                for (var l = 0; l < o; l++) {
                  e.indentLine(s, t.indentRight);
                }
              }
              return ee.moveToFirstNonWhiteSpaceCharacter(e, r[0].anchor);
            },
            indentAuto: function (e, t, r) {
              e.execCommand('indentAuto');
              return ee.moveToFirstNonWhiteSpaceCharacter(e, r[0].anchor);
            },
            changeCase: function (e, t, r, n, i) {
              var a = e.getSelections();
              var o = [];
              var s = t.toLower;
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                var u = '';
                if (s === true) {
                  u = c.toLowerCase();
                } else if (s === false) {
                  u = c.toUpperCase();
                } else {
                  for (var f = 0; f < c.length; f++) {
                    var v = c.charAt(f);
                    u += I(v) ? v.toLowerCase() : v.toUpperCase();
                  }
                }
                o.push(u);
              }
              e.replaceSelections(o);
              if (t.shouldMoveCursor) {
                return i;
              } else if (
                !e.state.vim.visualMode &&
                t.linewise &&
                r[0].anchor.line + 1 == r[0].head.line
              ) {
                return ee.moveToFirstNonWhiteSpaceCharacter(e, n);
              } else if (t.linewise) {
                return n;
              } else {
                return ge(r[0].anchor, r[0].head);
              }
            },
            yank: function (e, t, r, n) {
              var i = e.state.vim;
              var a = e.getSelection();
              var o = i.visualMode
                ? ge(i.sel.anchor, i.sel.head, r[0].head, r[0].anchor)
                : n;
              V.registerController.pushText(
                t.registerName,
                'yank',
                a,
                t.linewise,
                i.visualBlock
              );
              return o;
            },
          };
          function ie(e, t) {
            ne[e] = t;
          }
          var ae = {
            jumpListWalk: function (e, t, r) {
              if (r.visualMode) {
                return;
              }
              var n = t.repeat;
              var i = t.forward;
              var a = V.jumpList;
              var o = a.move(e, i ? n : -n);
              var s = o ? o.find() : undefined;
              s = s ? s : e.getCursor();
              e.setCursor(s);
            },
            scroll: function (e, t, r) {
              if (r.visualMode) {
                return;
              }
              var n = t.repeat || 1;
              var i = e.defaultTextHeight();
              var a = e.getScrollInfo().top;
              var o = i * n;
              var s = t.forward ? a + o : a - o;
              var l = pe(e.getCursor());
              var c = e.charCoords(l, 'local');
              if (t.forward) {
                if (s > c.top) {
                  l.line += (s - c.top) / i;
                  l.line = Math.ceil(l.line);
                  e.setCursor(l);
                  c = e.charCoords(l, 'local');
                  e.scrollTo(null, c.top);
                } else {
                  e.scrollTo(null, s);
                }
              } else {
                var u = s + e.getScrollInfo().clientHeight;
                if (u < c.bottom) {
                  l.line -= (c.bottom - u) / i;
                  l.line = Math.floor(l.line);
                  e.setCursor(l);
                  c = e.charCoords(l, 'local');
                  e.scrollTo(null, c.bottom - e.getScrollInfo().clientHeight);
                } else {
                  e.scrollTo(null, s);
                }
              }
            },
            scrollToCursor: function (e, t) {
              var r = e.getCursor().line;
              var n = e.charCoords(i(r, 0), 'local');
              var a = e.getScrollInfo().clientHeight;
              var o = n.top;
              var s = n.bottom - o;
              switch (t.position) {
                case 'center':
                  o = o - a / 2 + s;
                  break;
                case 'bottom':
                  o = o - a + s;
                  break;
              }
              e.scrollTo(null, o);
            },
            replayMacro: function (e, t, r) {
              var n = t.selectedCharacter;
              var i = t.repeat;
              var a = V.macroModeState;
              if (n == '@') {
                n = a.latestRegister;
              } else {
                a.latestRegister = n;
              }
              while (i--) {
                Pt(e, r, a, n);
              }
            },
            enterMacroRecordMode: function (e, t) {
              var r = V.macroModeState;
              var n = t.selectedCharacter;
              if (V.registerController.isValidRegister(n)) {
                r.enterMacroRecordMode(e, n);
              }
            },
            toggleOverwrite: function (t) {
              if (!t.state.overwrite) {
                t.toggleOverwrite(true);
                t.setOption('keyMap', 'vim-replace');
                e.signal(t, 'vim-mode-change', { mode: 'replace' });
              } else {
                t.toggleOverwrite(false);
                t.setOption('keyMap', 'vim-insert');
                e.signal(t, 'vim-mode-change', { mode: 'insert' });
              }
            },
            enterInsertMode: function (t, r, n) {
              if (t.getOption('readOnly')) {
                return;
              }
              n.insertMode = true;
              n.insertModeRepeat = (r && r.repeat) || 1;
              var a = r ? r.insertAt : null;
              var o = n.sel;
              var s = r.head || t.getCursor('head');
              var l = t.listSelections().length;
              if (a == 'eol') {
                s = i(s.line, Ce(t, s.line));
              } else if (a == 'bol') {
                s = i(s.line, 0);
              } else if (a == 'charAfter') {
                s = ce(s, 0, 1);
              } else if (a == 'firstNonBlank') {
                s = ee.moveToFirstNonWhiteSpaceCharacter(t, s);
              } else if (a == 'startOfSelectedArea') {
                if (!n.visualMode) return;
                if (!n.visualBlock) {
                  if (o.head.line < o.anchor.line) {
                    s = o.head;
                  } else {
                    s = i(o.anchor.line, 0);
                  }
                } else {
                  s = i(
                    Math.min(o.head.line, o.anchor.line),
                    Math.min(o.head.ch, o.anchor.ch)
                  );
                  l = Math.abs(o.head.line - o.anchor.line) + 1;
                }
              } else if (a == 'endOfSelectedArea') {
                if (!n.visualMode) return;
                if (!n.visualBlock) {
                  if (o.head.line >= o.anchor.line) {
                    s = ce(o.head, 0, 1);
                  } else {
                    s = i(o.anchor.line, 0);
                  }
                } else {
                  s = i(
                    Math.min(o.head.line, o.anchor.line),
                    Math.max(o.head.ch + 1, o.anchor.ch)
                  );
                  l = Math.abs(o.head.line - o.anchor.line) + 1;
                }
              } else if (a == 'inplace') {
                if (n.visualMode) {
                  return;
                }
              } else if (a == 'lastEdit') {
                s = Tt(t) || s;
              }
              t.setOption('disableInput', false);
              if (r && r.replace) {
                t.toggleOverwrite(true);
                t.setOption('keyMap', 'vim-replace');
                e.signal(t, 'vim-mode-change', { mode: 'replace' });
              } else {
                t.toggleOverwrite(false);
                t.setOption('keyMap', 'vim-insert');
                e.signal(t, 'vim-mode-change', { mode: 'insert' });
              }
              if (!V.macroModeState.isPlaying) {
                t.on('change', Ft);
                e.on(t.getInputField(), 'keydown', Jt);
              }
              if (n.visualMode) {
                Be(t);
              }
              Ae(t, s, l);
            },
            toggleVisualMode: function (t, r, n) {
              var a = r.repeat;
              var o = t.getCursor();
              var s;
              if (!n.visualMode) {
                n.visualMode = true;
                n.visualLine = !!r.linewise;
                n.visualBlock = !!r.blockwise;
                s = se(t, i(o.line, o.ch + a - 1));
                n.sel = { anchor: o, head: s };
                e.signal(t, 'vim-mode-change', {
                  mode: 'visual',
                  subMode: n.visualLine ? 'linewise' : n.visualBlock ? 'blockwise' : '',
                });
                Ee(t);
                ze(t, n, '<', ge(o, s));
                ze(t, n, '>', ye(o, s));
              } else if (n.visualLine ^ r.linewise || n.visualBlock ^ r.blockwise) {
                n.visualLine = !!r.linewise;
                n.visualBlock = !!r.blockwise;
                e.signal(t, 'vim-mode-change', {
                  mode: 'visual',
                  subMode: n.visualLine ? 'linewise' : n.visualBlock ? 'blockwise' : '',
                });
                Ee(t);
              } else {
                Be(t);
              }
            },
            reselectLastSelection: function (t, r, n) {
              var i = n.lastSelection;
              if (n.visualMode) {
                Te(t, n);
              }
              if (i) {
                var a = i.anchorMark.find();
                var o = i.headMark.find();
                if (!a || !o) {
                  return;
                }
                n.sel = { anchor: a, head: o };
                n.visualMode = true;
                n.visualLine = i.visualLine;
                n.visualBlock = i.visualBlock;
                Ee(t);
                ze(t, n, '<', ge(a, o));
                ze(t, n, '>', ye(a, o));
                e.signal(t, 'vim-mode-change', {
                  mode: 'visual',
                  subMode: n.visualLine ? 'linewise' : n.visualBlock ? 'blockwise' : '',
                });
              }
            },
            joinLines: function (e, t, r) {
              var n, a;
              if (r.visualMode) {
                n = e.getCursor('anchor');
                a = e.getCursor('head');
                if (me(a, n)) {
                  var o = a;
                  a = n;
                  n = o;
                }
                a.ch = Ce(e, a.line) - 1;
              } else {
                var s = Math.max(t.repeat, 2);
                n = e.getCursor();
                a = se(e, i(n.line + s - 1, Infinity));
              }
              var l = 0;
              for (var c = n.line; c < a.line; c++) {
                l = Ce(e, n.line);
                var o = i(n.line + 1, Ce(e, n.line + 1));
                var u = e.getRange(n, o);
                u = t.keepSpaces ? u.replace(/\n\r?/g, '') : u.replace(/\n\s*/g, ' ');
                e.replaceRange(u, n, o);
              }
              var f = i(n.line, l);
              if (r.visualMode) {
                Be(e, false);
              }
              e.setCursor(f);
            },
            newLineAndEnterInsertMode: function (t, r, n) {
              n.insertMode = true;
              var a = pe(t.getCursor());
              if (a.line === t.firstLine() && !r.after) {
                t.replaceRange('\n', i(t.firstLine(), 0));
                t.setCursor(t.firstLine(), 0);
              } else {
                a.line = r.after ? a.line : a.line - 1;
                a.ch = Ce(t, a.line);
                t.setCursor(a);
                var o =
                  e.commands.newlineAndIndentContinueComment ||
                  e.commands.newlineAndIndent;
                o(t);
              }
              this.enterInsertMode(t, { repeat: r.repeat }, n);
            },
            paste: function (e, t, r) {
              var n = pe(e.getCursor());
              var a = V.registerController.getRegister(t.registerName);
              var o = a.toString();
              if (!o) {
                return;
              }
              if (t.matchIndent) {
                var s = e.getOption('tabSize');
                var l = function (e) {
                  var t = e.split('\t').length - 1;
                  var r = e.split(' ').length - 1;
                  return t * s + r * 1;
                };
                var c = e.getLine(e.getCursor().line);
                var u = l(c.match(/^\s*/)[0]);
                var f = o.replace(/\n$/, '');
                var v = o !== f;
                var h = l(o.match(/^\s*/)[0]);
                var o = f.replace(/^\s*/gm, function (t) {
                  var r = u + (l(t) - h);
                  if (r < 0) {
                    return '';
                  } else if (e.getOption('indentWithTabs')) {
                    var n = Math.floor(r / s);
                    return Array(n + 1).join('\t');
                  } else {
                    return Array(r + 1).join(' ');
                  }
                });
                o += v ? '\n' : '';
              }
              if (t.repeat > 1) {
                var o = Array(t.repeat + 1).join(o);
              }
              var p = a.linewise;
              var d = a.blockwise;
              if (d) {
                o = o.split('\n');
                if (p) {
                  o.pop();
                }
                for (var m = 0; m < o.length; m++) {
                  o[m] = o[m] == '' ? ' ' : o[m];
                }
                n.ch += t.after ? 1 : 0;
                n.ch = Math.min(Ce(e, n.line), n.ch);
              } else if (p) {
                if (r.visualMode) {
                  o = r.visualLine
                    ? o.slice(0, -1)
                    : '\n' + o.slice(0, o.length - 1) + '\n';
                } else if (t.after) {
                  o = '\n' + o.slice(0, o.length - 1);
                  n.ch = Ce(e, n.line);
                } else {
                  n.ch = 0;
                }
              } else {
                n.ch += t.after ? 1 : 0;
              }
              var g;
              var y;
              if (r.visualMode) {
                r.lastPastedText = o;
                var k;
                var C = Le(e, r);
                var w = C[0];
                var x = C[1];
                var M = e.getSelection();
                var S = e.listSelections();
                var A = new Array(S.length).join('1').split('1');
                if (r.lastSelection) {
                  k = r.lastSelection.headMark.find();
                }
                V.registerController.unnamedRegister.setText(M);
                if (d) {
                  e.replaceSelections(A);
                  x = i(w.line + o.length - 1, w.ch);
                  e.setCursor(w);
                  Se(e, x);
                  e.replaceSelections(o);
                  g = w;
                } else if (r.visualBlock) {
                  e.replaceSelections(A);
                  e.setCursor(w);
                  e.replaceRange(o, w, w);
                  g = w;
                } else {
                  e.replaceRange(o, w, x);
                  g = e.posFromIndex(e.indexFromPos(w) + o.length - 1);
                }
                if (k) {
                  r.lastSelection.headMark = e.setBookmark(k);
                }
                if (p) {
                  g.ch = 0;
                }
              } else {
                if (d) {
                  e.setCursor(n);
                  for (var m = 0; m < o.length; m++) {
                    var b = n.line + m;
                    if (b > e.lastLine()) {
                      e.replaceRange('\n', i(b, 0));
                    }
                    var L = Ce(e, b);
                    if (L < n.ch) {
                      Me(e, b, n.ch);
                    }
                  }
                  e.setCursor(n);
                  Se(e, i(n.line + o.length - 1, n.ch));
                  e.replaceSelections(o);
                  g = n;
                } else {
                  e.replaceRange(o, n);
                  if (p && t.after) {
                    g = i(n.line + 1, Pe(e.getLine(n.line + 1)));
                  } else if (p && !t.after) {
                    g = i(n.line, Pe(e.getLine(n.line)));
                  } else if (!p && t.after) {
                    y = e.indexFromPos(n);
                    g = e.posFromIndex(y + o.length - 1);
                  } else {
                    y = e.indexFromPos(n);
                    g = e.posFromIndex(y + o.length);
                  }
                }
              }
              if (r.visualMode) {
                Be(e, false);
              }
              e.setCursor(g);
            },
            undo: function (t, r) {
              t.operation(function () {
                he(t, e.commands.undo, r.repeat)();
                t.setCursor(t.getCursor('anchor'));
              });
            },
            redo: function (t, r) {
              he(t, e.commands.redo, r.repeat)();
            },
            setRegister: function (e, t, r) {
              r.inputState.registerName = t.selectedCharacter;
            },
            setMark: function (e, t, r) {
              var n = t.selectedCharacter;
              ze(e, r, n, e.getCursor());
            },
            replace: function (t, r, n) {
              var a = r.selectedCharacter;
              var o = t.getCursor();
              var s;
              var l;
              var c = t.listSelections();
              if (n.visualMode) {
                o = t.getCursor('start');
                l = t.getCursor('end');
              } else {
                var u = t.getLine(o.line);
                s = o.ch + r.repeat;
                if (s > u.length) {
                  s = u.length;
                }
                l = i(o.line, s);
              }
              if (a == '\n') {
                if (!n.visualMode) t.replaceRange('', o, l);
                (
                  e.commands.newlineAndIndentContinueComment ||
                  e.commands.newlineAndIndent
                )(t);
              } else {
                var f = t.getRange(o, l);
                f = f.replace(/[^\n]/g, a);
                if (n.visualBlock) {
                  var v = new Array(t.getOption('tabSize') + 1).join(' ');
                  f = t.getSelection();
                  f = f.replace(/\t/g, v).replace(/[^\n]/g, a).split('\n');
                  t.replaceSelections(f);
                } else {
                  t.replaceRange(f, o, l);
                }
                if (n.visualMode) {
                  o = me(c[0].anchor, c[0].head) ? c[0].anchor : c[0].head;
                  t.setCursor(o);
                  Be(t, false);
                } else {
                  t.setCursor(ce(l, 0, -1));
                }
              }
            },
            incrementNumberToken: function (e, t) {
              var r = e.getCursor();
              var n = e.getLine(r.line);
              var a = /(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi;
              var o;
              var s;
              var l;
              var c;
              while ((o = a.exec(n)) !== null) {
                s = o.index;
                l = s + o[0].length;
                if (r.ch < l) break;
              }
              if (!t.backtrack && l <= r.ch) return;
              if (o) {
                var u = o[2] || o[4];
                var f = o[3] || o[5];
                var v = t.increase ? 1 : -1;
                var h = { '0b': 2, 0: 8, '': 10, '0x': 16 }[u.toLowerCase()];
                var p = parseInt(o[1] + f, h) + v * t.repeat;
                c = p.toString(h);
                var d = u
                  ? new Array(f.length - c.length + 1 + o[1].length).join('0')
                  : '';
                if (c.charAt(0) === '-') {
                  c = '-' + u + d + c.substr(1);
                } else {
                  c = u + d + c;
                }
                var m = i(r.line, s);
                var g = i(r.line, l);
                e.replaceRange(c, m, g);
              } else {
                return;
              }
              e.setCursor(i(r.line, s + c.length - 1));
            },
            repeatLastEdit: function (e, t, r) {
              var n = r.lastEditInputState;
              if (!n) {
                return;
              }
              var i = t.repeat;
              if (i && t.repeatIsExplicit) {
                r.lastEditInputState.repeatOverride = i;
              } else {
                i = r.lastEditInputState.repeatOverride || i;
              }
              Qt(e, r, i, false);
            },
            indent: function (e, t) {
              e.indentLine(e.getCursor().line, t.indentRight);
            },
            exitInsertMode: Bt,
          };
          function oe(e, t) {
            ae[e] = t;
          }
          function se(e, t) {
            var r = e.state.vim;
            var n = r.insertMode || r.visualMode;
            var a = Math.min(Math.max(e.firstLine(), t.line), e.lastLine());
            var o = Ce(e, a) - 1 + !!n;
            var s = Math.min(Math.max(0, t.ch), o);
            return i(a, s);
          }
          function le(e) {
            var t = {};
            for (var r in e) {
              if (e.hasOwnProperty(r)) {
                t[r] = e[r];
              }
            }
            return t;
          }
          function ce(e, t, r) {
            if (typeof t === 'object') {
              r = t.ch;
              t = t.line;
            }
            return i(e.line + t, e.ch + r);
          }
          function ue(e, t, r, n) {
            var i,
              a = [],
              o = [];
            for (var s = 0; s < t.length; s++) {
              var l = t[s];
              if (
                (r == 'insert' && l.context != 'insert') ||
                (l.context && l.context != r) ||
                (n.operator && l.type == 'action') ||
                !(i = fe(e, l.keys))
              ) {
                continue;
              }
              if (i == 'partial') {
                a.push(l);
              }
              if (i == 'full') {
                o.push(l);
              }
            }
            return { partial: a.length && a, full: o.length && o };
          }
          function fe(e, t) {
            if (t.slice(-11) == '<character>') {
              var r = t.length - 11;
              var n = e.slice(0, r);
              var i = t.slice(0, r);
              return n == i && e.length > r
                ? 'full'
                : i.indexOf(n) == 0
                ? 'partial'
                : false;
            } else {
              return e == t ? 'full' : t.indexOf(e) == 0 ? 'partial' : false;
            }
          }
          function ve(e) {
            var t = /^.*(<[^>]+>)$/.exec(e);
            var r = t ? t[1] : e.slice(-1);
            if (r.length > 1) {
              switch (r) {
                case '<CR>':
                  r = '\n';
                  break;
                case '<Space>':
                  r = ' ';
                  break;
                default:
                  r = '';
                  break;
              }
            }
            return r;
          }
          function he(e, t, r) {
            return function () {
              for (var n = 0; n < r; n++) {
                t(e);
              }
            };
          }
          function pe(e) {
            return i(e.line, e.ch);
          }
          function de(e, t) {
            return e.ch == t.ch && e.line == t.line;
          }
          function me(e, t) {
            if (e.line < t.line) {
              return true;
            }
            if (e.line == t.line && e.ch < t.ch) {
              return true;
            }
            return false;
          }
          function ge(e, t) {
            if (arguments.length > 2) {
              t = ge.apply(undefined, Array.prototype.slice.call(arguments, 1));
            }
            return me(e, t) ? e : t;
          }
          function ye(e, t) {
            if (arguments.length > 2) {
              t = ye.apply(undefined, Array.prototype.slice.call(arguments, 1));
            }
            return me(e, t) ? t : e;
          }
          function ke(e, t, r) {
            var n = me(e, t);
            var i = me(t, r);
            return n && i;
          }
          function Ce(e, t) {
            return e.getLine(t).length;
          }
          function we(e) {
            if (e.trim) {
              return e.trim();
            }
            return e.replace(/^\s+|\s+$/g, '');
          }
          function xe(e) {
            return e.replace(/([.?*+$\[\]\/\\(){}|\-])/g, '\\$1');
          }
          function Me(e, t, r) {
            var n = Ce(e, t);
            var a = new Array(r - n + 1).join(' ');
            e.setCursor(i(t, n));
            e.replaceRange(a, e.getCursor());
          }
          function Se(e, t) {
            var r = [],
              n = e.listSelections();
            var a = pe(e.clipPos(t));
            var o = !de(t, a);
            var s = e.getCursor('head');
            var l = be(n, s);
            var c = de(n[l].head, n[l].anchor);
            var u = n.length - 1;
            var f = u - l > l ? u : 0;
            var v = n[f].anchor;
            var h = Math.min(v.line, a.line);
            var p = Math.max(v.line, a.line);
            var d = v.ch,
              m = a.ch;
            var g = n[f].head.ch - d;
            var y = m - d;
            if (g > 0 && y <= 0) {
              d++;
              if (!o) {
                m--;
              }
            } else if (g < 0 && y >= 0) {
              d--;
              if (!c) {
                m++;
              }
            } else if (g < 0 && y == -1) {
              d--;
              m++;
            }
            for (var k = h; k <= p; k++) {
              var C = { anchor: new i(k, d), head: new i(k, m) };
              r.push(C);
            }
            e.setSelections(r);
            t.ch = m;
            v.ch = d;
            return v;
          }
          function Ae(e, t, r) {
            var n = [];
            for (var i = 0; i < r; i++) {
              var a = ce(t, i, 0);
              n.push({ anchor: a, head: a });
            }
            e.setSelections(n, 0);
          }
          function be(e, t, r) {
            for (var n = 0; n < e.length; n++) {
              var i = r != 'head' && de(e[n].anchor, t);
              var a = r != 'anchor' && de(e[n].head, t);
              if (i || a) {
                return n;
              }
            }
            return -1;
          }
          function Le(e, t) {
            var r = t.lastSelection;
            var n = function () {
              var t = e.listSelections();
              var r = t[0];
              var n = t[t.length - 1];
              var i = me(r.anchor, r.head) ? r.anchor : r.head;
              var a = me(n.anchor, n.head) ? n.head : n.anchor;
              return [i, a];
            };
            var a = function () {
              var t = e.getCursor();
              var n = e.getCursor();
              var a = r.visualBlock;
              if (a) {
                var o = a.width;
                var s = a.height;
                n = i(t.line + s, t.ch + o);
                var l = [];
                for (var c = t.line; c < n.line; c++) {
                  var u = i(c, t.ch);
                  var f = i(c, n.ch);
                  var v = { anchor: u, head: f };
                  l.push(v);
                }
                e.setSelections(l);
              } else {
                var h = r.anchorMark.find();
                var p = r.headMark.find();
                var d = p.line - h.line;
                var m = p.ch - h.ch;
                n = { line: n.line + d, ch: d ? n.ch : m + n.ch };
                if (r.visualLine) {
                  t = i(t.line, 0);
                  n = i(n.line, Ce(e, n.line));
                }
                e.setSelection(t, n);
              }
              return [t, n];
            };
            if (!t.visualMode) {
              return a();
            } else {
              return n();
            }
          }
          function Te(e, t) {
            var r = t.sel.anchor;
            var n = t.sel.head;
            if (t.lastPastedText) {
              n = e.posFromIndex(e.indexFromPos(r) + t.lastPastedText.length);
              t.lastPastedText = null;
            }
            t.lastSelection = {
              anchorMark: e.setBookmark(r),
              headMark: e.setBookmark(n),
              anchor: pe(r),
              head: pe(n),
              visualMode: t.visualMode,
              visualLine: t.visualLine,
              visualBlock: t.visualBlock,
            };
          }
          function Re(e, t, r) {
            var n = e.state.vim.sel;
            var a = n.head;
            var o = n.anchor;
            var s;
            if (me(r, t)) {
              s = r;
              r = t;
              t = s;
            }
            if (me(a, o)) {
              a = ge(t, a);
              o = ye(o, r);
            } else {
              o = ge(t, o);
              a = ye(a, r);
              a = ce(a, 0, -1);
              if (a.ch == -1 && a.line != e.firstLine()) {
                a = i(a.line - 1, Ce(e, a.line - 1));
              }
            }
            return [o, a];
          }
          function Ee(e, t, r) {
            var n = e.state.vim;
            t = t || n.sel;
            var r = r || n.visualLine ? 'line' : n.visualBlock ? 'block' : 'char';
            var i = Ie(e, t, r);
            e.setSelections(i.ranges, i.primary);
            Dt(e);
          }
          function Ie(e, t, r, n) {
            var a = pe(t.head);
            var o = pe(t.anchor);
            if (r == 'char') {
              var s = !n && !me(t.head, t.anchor) ? 1 : 0;
              var l = me(t.head, t.anchor) ? 1 : 0;
              a = ce(t.head, 0, s);
              o = ce(t.anchor, 0, l);
              return { ranges: [{ anchor: o, head: a }], primary: 0 };
            } else if (r == 'line') {
              if (!me(t.head, t.anchor)) {
                o.ch = 0;
                var c = e.lastLine();
                if (a.line > c) {
                  a.line = c;
                }
                a.ch = Ce(e, a.line);
              } else {
                a.ch = 0;
                o.ch = Ce(e, o.line);
              }
              return { ranges: [{ anchor: o, head: a }], primary: 0 };
            } else if (r == 'block') {
              var u = Math.min(o.line, a.line),
                f = Math.min(o.ch, a.ch),
                v = Math.max(o.line, a.line),
                h = Math.max(o.ch, a.ch) + 1;
              var p = v - u + 1;
              var d = a.line == u ? 0 : p - 1;
              var m = [];
              for (var g = 0; g < p; g++) {
                m.push({ anchor: i(u + g, f), head: i(u + g, h) });
              }
              return { ranges: m, primary: d };
            }
          }
          function Oe(e) {
            var t = e.getCursor('head');
            if (e.getSelection().length == 1) {
              t = ge(t, e.getCursor('anchor'));
            }
            return t;
          }
          function Be(t, r) {
            var n = t.state.vim;
            if (r !== false) {
              t.setCursor(se(t, n.sel.head));
            }
            Te(t, n);
            n.visualMode = false;
            n.visualLine = false;
            n.visualBlock = false;
            if (!n.insertMode) e.signal(t, 'vim-mode-change', { mode: 'normal' });
            Vt(n);
          }
          function Ne(e, t, r) {
            var n = e.getRange(t, r);
            if (/\n\s*$/.test(n)) {
              var i = n.split('\n');
              i.pop();
              var a;
              for (var a = i.pop(); i.length > 0 && a && O(a); a = i.pop()) {
                r.line--;
                r.ch = 0;
              }
              if (a) {
                r.line--;
                r.ch = Ce(e, r.line);
              } else {
                r.ch = 0;
              }
            }
          }
          function Ke(e, t, r) {
            t.ch = 0;
            r.ch = 0;
            r.line++;
          }
          function Pe(e) {
            if (!e) {
              return 0;
            }
            var t = e.search(/\S/);
            return t == -1 ? e.length : t;
          }
          function _e(e, t, r, n, a) {
            var o = Oe(e);
            var s = e.getLine(o.line);
            var l = o.ch;
            var c = a ? k[0] : C[0];
            while (!c(s.charAt(l))) {
              l++;
              if (l >= s.length) {
                return null;
              }
            }
            if (n) {
              c = C[0];
            } else {
              c = k[0];
              if (!c(s.charAt(l))) {
                c = k[1];
              }
            }
            var u = l,
              f = l;
            while (c(s.charAt(u)) && u < s.length) {
              u++;
            }
            while (c(s.charAt(f)) && f >= 0) {
              f--;
            }
            f++;
            if (t) {
              var v = u;
              while (/\s/.test(s.charAt(u)) && u < s.length) {
                u++;
              }
              if (v == u) {
                var h = f;
                while (/\s/.test(s.charAt(f - 1)) && f > 0) {
                  f--;
                }
                if (!f) {
                  f = h;
                }
              }
            }
            return { start: i(o.line, f), end: i(o.line, u) };
          }
          function je(t, r, n) {
            var i = r;
            if (!e.findMatchingTag || !e.findEnclosingTag) {
              return { start: i, end: i };
            }
            var a = e.findMatchingTag(t, r) || e.findEnclosingTag(t, r);
            if (!a || !a.open || !a.close) {
              return { start: i, end: i };
            }
            if (n) {
              return { start: a.open.from, end: a.close.to };
            }
            return { start: a.open.to, end: a.close.from };
          }
          function He(e, t, r) {
            if (!de(t, r)) {
              V.jumpList.add(e, t, r);
            }
          }
          function Fe(e, t) {
            V.lastCharacterSearch.increment = e;
            V.lastCharacterSearch.forward = t.forward;
            V.lastCharacterSearch.selectedCharacter = t.selectedCharacter;
          }
          var We = {
            '(': 'bracket',
            ')': 'bracket',
            '{': 'bracket',
            '}': 'bracket',
            '[': 'section',
            ']': 'section',
            '*': 'comment',
            '/': 'comment',
            m: 'method',
            M: 'method',
            '#': 'preprocess',
          };
          var De = {
            bracket: {
              isComplete: function (e) {
                if (e.nextCh === e.symb) {
                  e.depth++;
                  if (e.depth >= 1) return true;
                } else if (e.nextCh === e.reverseSymb) {
                  e.depth--;
                }
                return false;
              },
            },
            section: {
              init: function (e) {
                e.curMoveThrough = true;
                e.symb = (e.forward ? ']' : '[') === e.symb ? '{' : '}';
              },
              isComplete: function (e) {
                return e.index === 0 && e.nextCh === e.symb;
              },
            },
            comment: {
              isComplete: function (e) {
                var t = e.lastCh === '*' && e.nextCh === '/';
                e.lastCh = e.nextCh;
                return t;
              },
            },
            method: {
              init: function (e) {
                e.symb = e.symb === 'm' ? '{' : '}';
                e.reverseSymb = e.symb === '{' ? '}' : '{';
              },
              isComplete: function (e) {
                if (e.nextCh === e.symb) return true;
                return false;
              },
            },
            preprocess: {
              init: function (e) {
                e.index = 0;
              },
              isComplete: function (e) {
                if (e.nextCh === '#') {
                  var t = e.lineText.match(/^#(\w+)/)[1];
                  if (t === 'endif') {
                    if (e.forward && e.depth === 0) {
                      return true;
                    }
                    e.depth++;
                  } else if (t === 'if') {
                    if (!e.forward && e.depth === 0) {
                      return true;
                    }
                    e.depth--;
                  }
                  if (t === 'else' && e.depth === 0) return true;
                }
                return false;
              },
            },
          };
          function Ve(e, t, r, n) {
            var a = pe(e.getCursor());
            var o = r ? 1 : -1;
            var s = r ? e.lineCount() : -1;
            var l = a.ch;
            var c = a.line;
            var u = e.getLine(c);
            var f = {
              lineText: u,
              nextCh: u.charAt(l),
              lastCh: null,
              index: l,
              symb: n,
              reverseSymb: (r ? { ')': '(', '}': '{' } : { '(': ')', '{': '}' })[n],
              forward: r,
              depth: 0,
              curMoveThrough: false,
            };
            var v = We[n];
            if (!v) return a;
            var h = De[v].init;
            var p = De[v].isComplete;
            if (h) {
              h(f);
            }
            while (c !== s && t) {
              f.index += o;
              f.nextCh = f.lineText.charAt(f.index);
              if (!f.nextCh) {
                c += o;
                f.lineText = e.getLine(c) || '';
                if (o > 0) {
                  f.index = 0;
                } else {
                  var d = f.lineText.length;
                  f.index = d > 0 ? d - 1 : 0;
                }
                f.nextCh = f.lineText.charAt(f.index);
              }
              if (p(f)) {
                a.line = c;
                a.ch = f.index;
                t--;
              }
            }
            if (f.nextCh || f.curMoveThrough) {
              return i(c, f.index);
            }
            return a;
          }
          function $e(e, t, r, n, i) {
            var a = t.line;
            var o = t.ch;
            var s = e.getLine(a);
            var l = r ? 1 : -1;
            var c = n ? C : k;
            if (i && s == '') {
              a += l;
              s = e.getLine(a);
              if (!L(e, a)) {
                return null;
              }
              o = r ? 0 : s.length;
            }
            while (true) {
              if (i && s == '') {
                return { from: 0, to: 0, line: a };
              }
              var u = l > 0 ? s.length : -1;
              var f = u,
                v = u;
              while (o != u) {
                var h = false;
                for (var p = 0; p < c.length && !h; ++p) {
                  if (c[p](s.charAt(o))) {
                    f = o;
                    while (o != u && c[p](s.charAt(o))) {
                      o += l;
                    }
                    v = o;
                    h = f != v;
                    if (f == t.ch && a == t.line && v == f + l) {
                      continue;
                    } else {
                      return { from: Math.min(f, v + 1), to: Math.max(f, v), line: a };
                    }
                  }
                }
                if (!h) {
                  o += l;
                }
              }
              a += l;
              if (!L(e, a)) {
                return null;
              }
              s = e.getLine(a);
              o = l > 0 ? 0 : s.length;
            }
          }
          function Ue(e, t, r, n, a, o) {
            var s = pe(t);
            var l = [];
            if ((n && !a) || (!n && a)) {
              r++;
            }
            var c = !(n && a);
            for (var u = 0; u < r; u++) {
              var f = $e(e, t, n, o, c);
              if (!f) {
                var v = Ce(e, e.lastLine());
                l.push(
                  n
                    ? { line: e.lastLine(), from: v, to: v }
                    : { line: 0, from: 0, to: 0 }
                );
                break;
              }
              l.push(f);
              t = i(f.line, n ? f.to - 1 : f.from);
            }
            var h = l.length != r;
            var p = l[0];
            var d = l.pop();
            if (n && !a) {
              if (!h && (p.from != s.ch || p.line != s.line)) {
                d = l.pop();
              }
              return i(d.line, d.from);
            } else if (n && a) {
              return i(d.line, d.to - 1);
            } else if (!n && a) {
              if (!h && (p.to != s.ch || p.line != s.line)) {
                d = l.pop();
              }
              return i(d.line, d.to);
            } else {
              return i(d.line, d.from);
            }
          }
          function Je(e, t, r, n, a) {
            var o = t;
            var s = i(o.line + r.repeat - 1, Infinity);
            var l = e.clipPos(s);
            l.ch--;
            if (!a) {
              n.lastHPos = Infinity;
              n.lastHSPos = e.charCoords(l, 'div').left;
            }
            return s;
          }
          function Qe(e, t, r, n) {
            var a = e.getCursor();
            var o = a.ch;
            var s;
            for (var l = 0; l < t; l++) {
              var c = e.getLine(a.line);
              s = Xe(o, c, n, r, true);
              if (s == -1) {
                return null;
              }
              o = s;
            }
            return i(e.getCursor().line, s);
          }
          function qe(e, t) {
            var r = e.getCursor().line;
            return se(e, i(r, t - 1));
          }
          function ze(e, t, r, n) {
            if (!N(r, A)) {
              return;
            }
            if (t.marks[r]) {
              t.marks[r].clear();
            }
            t.marks[r] = e.setBookmark(n);
          }
          function Xe(e, t, r, n, i) {
            var a;
            if (n) {
              a = t.indexOf(r, e + 1);
              if (a != -1 && !i) {
                a -= 1;
              }
            } else {
              a = t.lastIndexOf(r, e - 1);
              if (a != -1 && !i) {
                a += 1;
              }
            }
            return a;
          }
          function Ze(e, t, r, n, a) {
            var o = t.line;
            var s = e.firstLine();
            var l = e.lastLine();
            var c,
              u,
              f = o;
            function v(t) {
              return !e.getLine(t);
            }
            function h(e, t, r) {
              if (r) {
                return v(e) != v(e + t);
              }
              return !v(e) && v(e + t);
            }
            if (n) {
              while (s <= f && f <= l && r > 0) {
                if (h(f, n)) {
                  r--;
                }
                f += n;
              }
              return new i(f, 0);
            }
            var p = e.state.vim;
            if (p.visualLine && h(o, 1, true)) {
              var d = p.sel.anchor;
              if (h(d.line, -1, true)) {
                if (!a || d.line != o) {
                  o += 1;
                }
              }
            }
            var m = v(o);
            for (f = o; f <= l && r; f++) {
              if (h(f, 1, true)) {
                if (!a || v(f) != m) {
                  r--;
                }
              }
            }
            u = new i(f, 0);
            if (f > l && !m) {
              m = true;
            } else {
              a = false;
            }
            for (f = o; f > s; f--) {
              if (!a || v(f) == m || f == o) {
                if (h(f, -1, true)) {
                  break;
                }
              }
            }
            c = new i(f, 0);
            return { start: c, end: u };
          }
          function Ge(e, t, r, n) {
            function a(e, t) {
              if (t.pos + t.dir < 0 || t.pos + t.dir >= t.line.length) {
                t.ln += t.dir;
                if (!L(e, t.ln)) {
                  t.line = null;
                  t.ln = null;
                  t.pos = null;
                  return;
                }
                t.line = e.getLine(t.ln);
                t.pos = t.dir > 0 ? 0 : t.line.length - 1;
              } else {
                t.pos += t.dir;
              }
            }
            function o(e, t, r, n) {
              var i = e.getLine(t);
              var o = i === '';
              var s = { line: i, ln: t, pos: r, dir: n };
              var l = { ln: s.ln, pos: s.pos };
              var c = s.line === '';
              a(e, s);
              while (s.line !== null) {
                l.ln = s.ln;
                l.pos = s.pos;
                if (s.line === '' && !c) {
                  return { ln: s.ln, pos: s.pos };
                } else if (o && s.line !== '' && !O(s.line[s.pos])) {
                  return { ln: s.ln, pos: s.pos };
                } else if (
                  B(s.line[s.pos]) &&
                  !o &&
                  (s.pos === s.line.length - 1 || O(s.line[s.pos + 1]))
                ) {
                  o = true;
                }
                a(e, s);
              }
              var i = e.getLine(l.ln);
              l.pos = 0;
              for (var u = i.length - 1; u >= 0; --u) {
                if (!O(i[u])) {
                  l.pos = u;
                  break;
                }
              }
              return l;
            }
            function s(e, t, r, n) {
              var i = e.getLine(t);
              var o = { line: i, ln: t, pos: r, dir: n };
              var s = { ln: o.ln, pos: null };
              var l = o.line === '';
              a(e, o);
              while (o.line !== null) {
                if (o.line === '' && !l) {
                  if (s.pos !== null) {
                    return s;
                  } else {
                    return { ln: o.ln, pos: o.pos };
                  }
                } else if (
                  B(o.line[o.pos]) &&
                  s.pos !== null &&
                  !(o.ln === s.ln && o.pos + 1 === s.pos)
                ) {
                  return s;
                } else if (o.line !== '' && !O(o.line[o.pos])) {
                  l = false;
                  s = { ln: o.ln, pos: o.pos };
                }
                a(e, o);
              }
              var i = e.getLine(s.ln);
              s.pos = 0;
              for (var c = 0; c < i.length; ++c) {
                if (!O(i[c])) {
                  s.pos = c;
                  break;
                }
              }
              return s;
            }
            var l = { ln: t.line, pos: t.ch };
            while (r > 0) {
              if (n < 0) {
                l = s(e, l.ln, l.pos, n);
              } else {
                l = o(e, l.ln, l.pos, n);
              }
              r--;
            }
            return i(l.ln, l.pos);
          }
          function Ye(e, t, r, n) {
            var a = t,
              o,
              s;
            var l = {
              '(': /[()]/,
              ')': /[()]/,
              '[': /[[\]]/,
              ']': /[[\]]/,
              '{': /[{}]/,
              '}': /[{}]/,
              '<': /[<>]/,
              '>': /[<>]/,
            }[r];
            var c = {
              '(': '(',
              ')': '(',
              '[': '[',
              ']': '[',
              '{': '{',
              '}': '{',
              '<': '<',
              '>': '<',
            }[r];
            var u = e.getLine(a.line).charAt(a.ch);
            var f = u === c ? 1 : 0;
            o = e.scanForBracket(i(a.line, a.ch + f), -1, undefined, {
              bracketRegex: l,
            });
            s = e.scanForBracket(i(a.line, a.ch + f), 1, undefined, {
              bracketRegex: l,
            });
            if (!o || !s) {
              return { start: a, end: a };
            }
            o = o.pos;
            s = s.pos;
            if ((o.line == s.line && o.ch > s.ch) || o.line > s.line) {
              var v = o;
              o = s;
              s = v;
            }
            if (n) {
              s.ch += 1;
            } else {
              o.ch += 1;
            }
            return { start: o, end: s };
          }
          function et(e, t, r, n) {
            var a = pe(t);
            var o = e.getLine(a.line);
            var s = o.split('');
            var l, c, u, f;
            var v = s.indexOf(r);
            if (a.ch < v) {
              a.ch = v;
            } else if (v < a.ch && s[a.ch] == r) {
              c = a.ch;
              --a.ch;
            }
            if (s[a.ch] == r && !c) {
              l = a.ch + 1;
            } else {
              for (u = a.ch; u > -1 && !l; u--) {
                if (s[u] == r) {
                  l = u + 1;
                }
              }
            }
            if (l && !c) {
              for (u = l, f = s.length; u < f && !c; u++) {
                if (s[u] == r) {
                  c = u;
                }
              }
            }
            if (!l || !c) {
              return { start: a, end: a };
            }
            if (n) {
              --l;
              ++c;
            }
            return { start: i(a.line, l), end: i(a.line, c) };
          }
          P('pcre', true, 'boolean');
          function tt() {}
          tt.prototype = {
            getQuery: function () {
              return V.query;
            },
            setQuery: function (e) {
              V.query = e;
            },
            getOverlay: function () {
              return this.searchOverlay;
            },
            setOverlay: function (e) {
              this.searchOverlay = e;
            },
            isReversed: function () {
              return V.isReversed;
            },
            setReversed: function (e) {
              V.isReversed = e;
            },
            getScrollbarAnnotate: function () {
              return this.annotate;
            },
            setScrollbarAnnotate: function (e) {
              this.annotate = e;
            },
          };
          function rt(e) {
            var t = e.state.vim;
            return t.searchState_ || (t.searchState_ = new tt());
          }
          function nt(e) {
            return at(e, '/');
          }
          function it(e) {
            return ot(e, '/');
          }
          function at(e, t) {
            var r = ot(e, t) || [];
            if (!r.length) return [];
            var n = [];
            if (r[0] !== 0) return;
            for (var i = 0; i < r.length; i++) {
              if (typeof r[i] == 'number') n.push(e.substring(r[i] + 1, r[i + 1]));
            }
            return n;
          }
          function ot(e, t) {
            if (!t) t = '/';
            var r = false;
            var n = [];
            for (var i = 0; i < e.length; i++) {
              var a = e.charAt(i);
              if (!r && a == t) {
                n.push(i);
              }
              r = !r && a == '\\';
            }
            return n;
          }
          function st(e) {
            var t = '|(){';
            var r = '}';
            var n = false;
            var i = [];
            for (var a = -1; a < e.length; a++) {
              var o = e.charAt(a) || '';
              var s = e.charAt(a + 1) || '';
              var l = s && t.indexOf(s) != -1;
              if (n) {
                if (o !== '\\' || !l) {
                  i.push(o);
                }
                n = false;
              } else {
                if (o === '\\') {
                  n = true;
                  if (s && r.indexOf(s) != -1) {
                    l = true;
                  }
                  if (!l || s === '\\') {
                    i.push(o);
                  }
                } else {
                  i.push(o);
                  if (l && s !== '\\') {
                    i.push('\\');
                  }
                }
              }
            }
            return i.join('');
          }
          var lt = { '\\n': '\n', '\\r': '\r', '\\t': '\t' };
          function ct(e) {
            var t = false;
            var r = [];
            for (var n = -1; n < e.length; n++) {
              var i = e.charAt(n) || '';
              var a = e.charAt(n + 1) || '';
              if (lt[i + a]) {
                r.push(lt[i + a]);
                n++;
              } else if (t) {
                r.push(i);
                t = false;
              } else {
                if (i === '\\') {
                  t = true;
                  if (E(a) || a === '$') {
                    r.push('$');
                  } else if (a !== '/' && a !== '\\') {
                    r.push('\\');
                  }
                } else {
                  if (i === '$') {
                    r.push('$');
                  }
                  r.push(i);
                  if (a === '/') {
                    r.push('\\');
                  }
                }
              }
            }
            return r.join('');
          }
          var ut = {
            '\\/': '/',
            '\\\\': '\\',
            '\\n': '\n',
            '\\r': '\r',
            '\\t': '\t',
            '\\&': '&',
          };
          function ft(t) {
            var r = new e.StringStream(t);
            var n = [];
            while (!r.eol()) {
              while (r.peek() && r.peek() != '\\') {
                n.push(r.next());
              }
              var i = false;
              for (var a in ut) {
                if (r.match(a, true)) {
                  i = true;
                  n.push(ut[a]);
                  break;
                }
              }
              if (!i) {
                n.push(r.next());
              }
            }
            return n.join('');
          }
          function vt(e, t, r) {
            var n = V.registerController.getRegister('/');
            n.setText(e);
            if (e instanceof RegExp) {
              return e;
            }
            var i = it(e);
            var a;
            var o;
            if (!i.length) {
              a = e;
            } else {
              a = e.substring(0, i[0]);
              var s = e.substring(i[0]);
              o = s.indexOf('i') != -1;
            }
            if (!a) {
              return null;
            }
            if (!j('pcre')) {
              a = st(a);
            }
            if (r) {
              t = /^[^A-Z]*$/.test(a);
            }
            var l = new RegExp(a, t || o ? 'i' : undefined);
            return l;
          }
          function ht(e) {
            if (typeof e === 'string') e = document.createElement(e);
            for (var t, r = 1; r < arguments.length; r++) {
              if (!(t = arguments[r])) continue;
              if (typeof t !== 'object') t = document.createTextNode(t);
              if (t.nodeType) e.appendChild(t);
              else
                for (var n in t) {
                  if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
                  if (n[0] === '$') e.style[n.slice(1)] = t[n];
                  else e.setAttribute(n, t[n]);
                }
            }
            return e;
          }
          function pt(e, t) {
            var r = ht('pre', { $color: 'red' }, t);
            if (e.openNotification) {
              e.openNotification(r, { bottom: true, duration: 5e3 });
            } else {
              alert(r.innerText);
            }
          }
          function dt(e, t) {
            return ht(
              document.createDocumentFragment(),
              ht(
                'span',
                { $fontFamily: 'monospace', $whiteSpace: 'pre' },
                e,
                ht('input', {
                  type: 'text',
                  autocorrect: 'off',
                  autocapitalize: 'off',
                  spellcheck: 'false',
                })
              ),
              t && ht('span', { $color: '#888' }, t)
            );
          }
          function mt(e, t) {
            var r = (t.prefix || '') + ' ' + (t.desc || '');
            var n = dt(t.prefix, t.desc);
            if (e.openDialog) {
              e.openDialog(n, t.onClose, {
                onKeyDown: t.onKeyDown,
                onKeyUp: t.onKeyUp,
                bottom: true,
                selectValueOnOpen: false,
                value: t.value,
              });
            } else {
              t.onClose(prompt(r, ''));
            }
          }
          function gt(e, t) {
            if (e instanceof RegExp && t instanceof RegExp) {
              var r = ['global', 'multiline', 'ignoreCase', 'source'];
              for (var n = 0; n < r.length; n++) {
                var i = r[n];
                if (e[i] !== t[i]) {
                  return false;
                }
              }
              return true;
            }
            return false;
          }
          function yt(e, t, r, n) {
            if (!t) {
              return;
            }
            var i = rt(e);
            var a = vt(t, !!r, !!n);
            if (!a) {
              return;
            }
            wt(e, a);
            if (gt(a, i.getQuery())) {
              return a;
            }
            i.setQuery(a);
            return a;
          }
          function kt(e) {
            if (e.source.charAt(0) == '^') {
              var t = true;
            }
            return {
              token: function (r) {
                if (t && !r.sol()) {
                  r.skipToEnd();
                  return;
                }
                var n = r.match(e, false);
                if (n) {
                  if (n[0].length == 0) {
                    r.next();
                    return 'searching';
                  }
                  if (!r.sol()) {
                    r.backUp(1);
                    if (!e.exec(r.next() + n[0])) {
                      r.next();
                      return null;
                    }
                  }
                  r.match(e);
                  return 'searching';
                }
                while (!r.eol()) {
                  r.next();
                  if (r.match(e, false)) break;
                }
              },
              query: e,
            };
          }
          var Ct = 0;
          function wt(e, t) {
            clearTimeout(Ct);
            Ct = setTimeout(function () {
              var r = rt(e);
              var n = r.getOverlay();
              if (!n || t != n.query) {
                if (n) {
                  e.removeOverlay(n);
                }
                n = kt(t);
                e.addOverlay(n);
                if (e.showMatchesOnScrollbar) {
                  if (r.getScrollbarAnnotate()) {
                    r.getScrollbarAnnotate().clear();
                  }
                  r.setScrollbarAnnotate(e.showMatchesOnScrollbar(t));
                }
                r.setOverlay(n);
              }
            }, 50);
          }
          function xt(e, t, r, n) {
            if (n === undefined) {
              n = 1;
            }
            return e.operation(function () {
              var a = e.getCursor();
              var o = e.getSearchCursor(r, a);
              for (var s = 0; s < n; s++) {
                var l = o.find(t);
                if (s == 0 && l && de(o.from(), a)) {
                  l = o.find(t);
                }
                if (!l) {
                  o = e.getSearchCursor(r, t ? i(e.lastLine()) : i(e.firstLine(), 0));
                  if (!o.find(t)) {
                    return;
                  }
                }
              }
              return o.from();
            });
          }
          function Mt(e, t, r, n, a) {
            if (n === undefined) {
              n = 1;
            }
            return e.operation(function () {
              var o = e.getCursor();
              var s = e.getSearchCursor(r, o);
              var l = s.find(!t);
              if (!a.visualMode && l && de(s.from(), o)) {
                s.find(!t);
              }
              for (var c = 0; c < n; c++) {
                l = s.find(t);
                if (!l) {
                  s = e.getSearchCursor(r, t ? i(e.lastLine()) : i(e.firstLine(), 0));
                  if (!s.find(t)) {
                    return;
                  }
                }
              }
              return [s.from(), s.to()];
            });
          }
          function St(e) {
            var t = rt(e);
            e.removeOverlay(rt(e).getOverlay());
            t.setOverlay(null);
            if (t.getScrollbarAnnotate()) {
              t.getScrollbarAnnotate().clear();
              t.setScrollbarAnnotate(null);
            }
          }
          function At(e, t, r) {
            if (typeof e != 'number') {
              e = e.line;
            }
            if (t instanceof Array) {
              return N(e, t);
            } else {
              if (typeof r == 'number') {
                return e >= t && e <= r;
              } else {
                return e == t;
              }
            }
          }
          function bt(e) {
            var t = e.getScrollInfo();
            var r = 6;
            var n = 10;
            var i = e.coordsChar({ left: 0, top: r + t.top }, 'local');
            var a = t.clientHeight - n + t.top;
            var o = e.coordsChar({ left: 0, top: a }, 'local');
            return { top: i.line, bottom: o.line };
          }
          function Lt(e, t, r) {
            if (r == "'" || r == '`') {
              return V.jumpList.find(e, -1) || i(0, 0);
            } else if (r == '.') {
              return Tt(e);
            }
            var n = t.marks[r];
            return n && n.find();
          }
          function Tt(e) {
            var t = e.doc.history.done;
            for (var r = t.length; r--; ) {
              if (t[r].changes) {
                return pe(t[r].changes[0].to);
              }
            }
          }
          var Rt = function () {
            this.buildCommandMap_();
          };
          Rt.prototype = {
            processCommand: function (e, t, r) {
              var n = this;
              e.operation(function () {
                e.curOp.isVimOp = true;
                n._processCommand(e, t, r);
              });
            },
            _processCommand: function (t, r, n) {
              var i = t.state.vim;
              var a = V.registerController.getRegister(':');
              var o = a.toString();
              if (i.visualMode) {
                Be(t);
              }
              var s = new e.StringStream(r);
              a.setText(r);
              var l = n || {};
              l.input = r;
              try {
                this.parseInput_(t, s, l);
              } catch (v) {
                pt(t, v.toString());
                throw v;
              }
              var c;
              var u;
              if (!l.commandName) {
                if (l.line !== undefined) {
                  u = 'move';
                }
              } else {
                c = this.matchCommand_(l.commandName);
                if (c) {
                  u = c.name;
                  if (c.excludeFromCommandHistory) {
                    a.setText(o);
                  }
                  this.parseCommandArgs_(s, l, c);
                  if (c.type == 'exToKey') {
                    for (var f = 0; f < c.toKeys.length; f++) {
                      e.Vim.handleKey(t, c.toKeys[f], 'mapping');
                    }
                    return;
                  } else if (c.type == 'exToEx') {
                    this.processCommand(t, c.toInput);
                    return;
                  }
                }
              }
              if (!u) {
                pt(t, 'Not an editor command ":' + r + '"');
                return;
              }
              try {
                Et[u](t, l);
                if ((!c || !c.possiblyAsync) && l.callback) {
                  l.callback();
                }
              } catch (v) {
                pt(t, v.toString());
                throw v;
              }
            },
            parseInput_: function (e, t, r) {
              t.eatWhile(':');
              if (t.eat('%')) {
                r.line = e.firstLine();
                r.lineEnd = e.lastLine();
              } else {
                r.line = this.parseLineSpec_(e, t);
                if (r.line !== undefined && t.eat(',')) {
                  r.lineEnd = this.parseLineSpec_(e, t);
                }
              }
              var n = t.match(/^(\w+|!!|@@|[!#&*<=>@~])/);
              if (n) {
                r.commandName = n[1];
              } else {
                r.commandName = t.match(/.*/)[0];
              }
              return r;
            },
            parseLineSpec_: function (e, t) {
              var r = t.match(/^(\d+)/);
              if (r) {
                return parseInt(r[1], 10) - 1;
              }
              switch (t.next()) {
                case '.':
                  return this.parseLineSpecOffset_(t, e.getCursor().line);
                case '$':
                  return this.parseLineSpecOffset_(t, e.lastLine());
                case "'":
                  var n = t.next();
                  var i = Lt(e, e.state.vim, n);
                  if (!i) throw new Error('Mark not set');
                  return this.parseLineSpecOffset_(t, i.line);
                case '-':
                case '+':
                  t.backUp(1);
                  return this.parseLineSpecOffset_(t, e.getCursor().line);
                default:
                  t.backUp(1);
                  return undefined;
              }
            },
            parseLineSpecOffset_: function (e, t) {
              var r = e.match(/^([+-])?(\d+)/);
              if (r) {
                var n = parseInt(r[2], 10);
                if (r[1] == '-') {
                  t -= n;
                } else {
                  t += n;
                }
              }
              return t;
            },
            parseCommandArgs_: function (e, t, r) {
              if (e.eol()) {
                return;
              }
              t.argString = e.match(/.*/)[0];
              var n = r.argDelimiter || /\s+/;
              var i = we(t.argString).split(n);
              if (i.length && i[0]) {
                t.args = i;
              }
            },
            matchCommand_: function (e) {
              for (var t = e.length; t > 0; t--) {
                var r = e.substring(0, t);
                if (this.commandMap_[r]) {
                  var n = this.commandMap_[r];
                  if (n.name.indexOf(e) === 0) {
                    return n;
                  }
                }
              }
              return null;
            },
            buildCommandMap_: function () {
              this.commandMap_ = {};
              for (var e = 0; e < n.length; e++) {
                var t = n[e];
                var r = t.shortName || t.name;
                this.commandMap_[r] = t;
              }
            },
            map: function (e, r, n) {
              if (e != ':' && e.charAt(0) == ':') {
                if (n) {
                  throw Error('Mode not supported for ex mappings');
                }
                var i = e.substring(1);
                if (r != ':' && r.charAt(0) == ':') {
                  this.commandMap_[i] = {
                    name: i,
                    type: 'exToEx',
                    toInput: r.substring(1),
                    user: true,
                  };
                } else {
                  this.commandMap_[i] = {
                    name: i,
                    type: 'exToKey',
                    toKeys: r,
                    user: true,
                  };
                }
              } else {
                if (r != ':' && r.charAt(0) == ':') {
                  var a = {
                    keys: e,
                    type: 'keyToEx',
                    exArgs: { input: r.substring(1) },
                  };
                  if (n) {
                    a.context = n;
                  }
                  t.unshift(a);
                } else {
                  var a = { keys: e, type: 'keyToKey', toKeys: r };
                  if (n) {
                    a.context = n;
                  }
                  t.unshift(a);
                }
              }
            },
            unmap: function (e, r) {
              if (e != ':' && e.charAt(0) == ':') {
                if (r) {
                  throw Error('Mode not supported for ex mappings');
                }
                var n = e.substring(1);
                if (this.commandMap_[n] && this.commandMap_[n].user) {
                  delete this.commandMap_[n];
                  return;
                }
              } else {
                var i = e;
                for (var a = 0; a < t.length; a++) {
                  if (i == t[a].keys && t[a].context === r) {
                    t.splice(a, 1);
                    return;
                  }
                }
              }
              throw Error('No such mapping.');
            },
          };
          var Et = {
            colorscheme: function (e, t) {
              if (!t.args || t.args.length < 1) {
                pt(e, e.getOption('theme'));
                return;
              }
              e.setOption('theme', t.args[0]);
            },
            map: function (e, t, r) {
              var n = t.args;
              if (!n || n.length < 2) {
                if (e) {
                  pt(e, 'Invalid mapping: ' + t.input);
                }
                return;
              }
              It.map(n[0], n[1], r);
            },
            imap: function (e, t) {
              this.map(e, t, 'insert');
            },
            nmap: function (e, t) {
              this.map(e, t, 'normal');
            },
            vmap: function (e, t) {
              this.map(e, t, 'visual');
            },
            unmap: function (e, t, r) {
              var n = t.args;
              if (!n || n.length < 1) {
                if (e) {
                  pt(e, 'No such mapping: ' + t.input);
                }
                return;
              }
              It.unmap(n[0], r);
            },
            move: function (e, t) {
              Y.processCommand(e, e.state.vim, {
                type: 'motion',
                motion: 'moveToLineOrEdgeOfDocument',
                motionArgs: { forward: false, explicitRepeat: true, linewise: true },
                repeatOverride: t.line + 1,
              });
            },
            set: function (e, t) {
              var r = t.args;
              var n = t.setCfg || {};
              if (!r || r.length < 1) {
                if (e) {
                  pt(e, 'Invalid mapping: ' + t.input);
                }
                return;
              }
              var i = r[0].split('=');
              var a = i[0];
              var o = i[1];
              var s = false;
              if (a.charAt(a.length - 1) == '?') {
                if (o) {
                  throw Error('Trailing characters: ' + t.argString);
                }
                a = a.substring(0, a.length - 1);
                s = true;
              }
              if (o === undefined && a.substring(0, 2) == 'no') {
                a = a.substring(2);
                o = false;
              }
              var l = K[a] && K[a].type == 'boolean';
              if (l && o == undefined) {
                o = true;
              }
              if ((!l && o === undefined) || s) {
                var c = j(a, e, n);
                if (c instanceof Error) {
                  pt(e, c.message);
                } else if (c === true || c === false) {
                  pt(e, ' ' + (c ? '' : 'no') + a);
                } else {
                  pt(e, '  ' + a + '=' + c);
                }
              } else {
                var u = _(a, o, e, n);
                if (u instanceof Error) {
                  pt(e, u.message);
                }
              }
            },
            setlocal: function (e, t) {
              t.setCfg = { scope: 'local' };
              this.set(e, t);
            },
            setglobal: function (e, t) {
              t.setCfg = { scope: 'global' };
              this.set(e, t);
            },
            registers: function (e, t) {
              var r = t.args;
              var n = V.registerController.registers;
              var i = '----------Registers----------\n\n';
              if (!r) {
                for (var a in n) {
                  var o = n[a].toString();
                  if (o.length) {
                    i += '"' + a + '    ' + o + '\n';
                  }
                }
              } else {
                var a;
                r = r.join('');
                for (var s = 0; s < r.length; s++) {
                  a = r.charAt(s);
                  if (!V.registerController.isValidRegister(a)) {
                    continue;
                  }
                  var l = n[a] || new z();
                  i += '"' + a + '    ' + l.toString() + '\n';
                }
              }
              pt(e, i);
            },
            sort: function (t, r) {
              var n, a, o, s, l;
              function c() {
                if (r.argString) {
                  var t = new e.StringStream(r.argString);
                  if (t.eat('!')) {
                    n = true;
                  }
                  if (t.eol()) {
                    return;
                  }
                  if (!t.eatSpace()) {
                    return 'Invalid arguments';
                  }
                  var i = t.match(/([dinuox]+)?\s*(\/.+\/)?\s*/);
                  if (!i && !t.eol()) {
                    return 'Invalid arguments';
                  }
                  if (i[1]) {
                    a = i[1].indexOf('i') != -1;
                    o = i[1].indexOf('u') != -1;
                    var c = i[1].indexOf('d') != -1 || (i[1].indexOf('n') != -1 && 1);
                    var u = i[1].indexOf('x') != -1 && 1;
                    var f = i[1].indexOf('o') != -1 && 1;
                    if (c + u + f > 1) {
                      return 'Invalid arguments';
                    }
                    s = (c && 'decimal') || (u && 'hex') || (f && 'octal');
                  }
                  if (i[2]) {
                    l = new RegExp(i[2].substr(1, i[2].length - 2), a ? 'i' : '');
                  }
                }
              }
              var u = c();
              if (u) {
                pt(t, u + ': ' + r.argString);
                return;
              }
              var f = r.line || t.firstLine();
              var v = r.lineEnd || r.line || t.lastLine();
              if (f == v) {
                return;
              }
              var h = i(f, 0);
              var p = i(v, Ce(t, v));
              var d = t.getRange(h, p).split('\n');
              var m = l
                ? l
                : s == 'decimal'
                ? /(-?)([\d]+)/
                : s == 'hex'
                ? /(-?)(?:0x)?([0-9a-f]+)/i
                : s == 'octal'
                ? /([0-7]+)/
                : null;
              var g = s == 'decimal' ? 10 : s == 'hex' ? 16 : s == 'octal' ? 8 : null;
              var y = [],
                k = [];
              if (s || l) {
                for (var C = 0; C < d.length; C++) {
                  var w = l ? d[C].match(l) : null;
                  if (w && w[0] != '') {
                    y.push(w);
                  } else if (!l && m.exec(d[C])) {
                    y.push(d[C]);
                  } else {
                    k.push(d[C]);
                  }
                }
              } else {
                k = d;
              }
              function x(e, t) {
                if (n) {
                  var r;
                  r = e;
                  e = t;
                  t = r;
                }
                if (a) {
                  e = e.toLowerCase();
                  t = t.toLowerCase();
                }
                var i = s && m.exec(e);
                var o = s && m.exec(t);
                if (!i) {
                  return e < t ? -1 : 1;
                }
                i = parseInt((i[1] + i[2]).toLowerCase(), g);
                o = parseInt((o[1] + o[2]).toLowerCase(), g);
                return i - o;
              }
              function M(e, t) {
                if (n) {
                  var r;
                  r = e;
                  e = t;
                  t = r;
                }
                if (a) {
                  e[0] = e[0].toLowerCase();
                  t[0] = t[0].toLowerCase();
                }
                return e[0] < t[0] ? -1 : 1;
              }
              y.sort(l ? M : x);
              if (l) {
                for (var C = 0; C < y.length; C++) {
                  y[C] = y[C].input;
                }
              } else if (!s) {
                k.sort(x);
              }
              d = !n ? k.concat(y) : y.concat(k);
              if (o) {
                var S = d;
                var A;
                d = [];
                for (var C = 0; C < S.length; C++) {
                  if (S[C] != A) {
                    d.push(S[C]);
                  }
                  A = S[C];
                }
              }
              t.replaceRange(d.join('\n'), h, p);
            },
            vglobal: function (e, t) {
              this.global(e, t);
            },
            global: function (e, t) {
              var r = t.argString;
              if (!r) {
                pt(e, 'Regular Expression missing from global');
                return;
              }
              var n = t.commandName[0] === 'v';
              var i = t.line !== undefined ? t.line : e.firstLine();
              var a = t.lineEnd || t.line || e.lastLine();
              var o = nt(r);
              var s = r,
                l;
              if (o.length) {
                s = o[0];
                l = o.slice(1, o.length).join('/');
              }
              if (s) {
                try {
                  yt(e, s, true, true);
                } catch (m) {
                  pt(e, 'Invalid regex: ' + s);
                  return;
                }
              }
              var c = rt(e).getQuery();
              var u = [];
              for (var f = i; f <= a; f++) {
                var v = e.getLineHandle(f);
                var h = c.test(v.text);
                if (h !== n) {
                  u.push(l ? v : v.text);
                }
              }
              if (!l) {
                pt(e, u.join('\n'));
                return;
              }
              var p = 0;
              var d = function () {
                if (p < u.length) {
                  var t = u[p++];
                  var r = e.getLineNumber(t);
                  if (r == null) {
                    d();
                    return;
                  }
                  var n = r + 1 + l;
                  It.processCommand(e, n, { callback: d });
                }
              };
              d();
            },
            substitute: function (e, t) {
              if (!e.getSearchCursor) {
                throw new Error(
                  'Search feature not available. Requires searchcursor.js or ' +
                    'any other getSearchCursor implementation.'
                );
              }
              var r = t.argString;
              var n = r ? at(r, r[0]) : [];
              var a,
                o = '',
                s,
                l,
                c;
              var u = false;
              var f = false;
              if (n.length) {
                a = n[0];
                if (j('pcre') && a !== '') {
                  a = new RegExp(a).source;
                }
                o = n[1];
                if (/(^|[^\\])(\\\\)*\$$/.test(a)) {
                  a = a.slice(0, -1) + '\\n';
                  o = (o || '') + '\n';
                }
                if (o !== undefined) {
                  if (j('pcre')) {
                    o = ft(o.replace(/([^\\])&/g, '$1$$&'));
                  } else {
                    o = ct(o);
                  }
                  V.lastSubstituteReplacePart = o;
                }
                s = n[2] ? n[2].split(' ') : [];
              } else {
                if (r && r.length) {
                  pt(e, 'Substitutions should be of the form ' + ':s/pattern/replace/');
                  return;
                }
              }
              if (s) {
                l = s[0];
                c = parseInt(s[1]);
                if (l) {
                  if (l.indexOf('c') != -1) {
                    u = true;
                  }
                  if (l.indexOf('g') != -1) {
                    f = true;
                  }
                  if (j('pcre')) {
                    a = a + '/' + l;
                  } else {
                    a = a.replace(/\//g, '\\/') + '/' + l;
                  }
                }
              }
              if (a) {
                try {
                  yt(e, a, true, true);
                } catch (y) {
                  pt(e, 'Invalid regex: ' + a);
                  return;
                }
              }
              o = o || V.lastSubstituteReplacePart;
              if (o === undefined) {
                pt(e, 'No previous substitute regular expression');
                return;
              }
              var v = rt(e);
              var h = v.getQuery();
              var p = t.line !== undefined ? t.line : e.getCursor().line;
              var d = t.lineEnd || p;
              if (p == e.firstLine() && d == e.lastLine()) {
                d = Infinity;
              }
              if (c) {
                p = d;
                d = p + c - 1;
              }
              var m = se(e, i(p, 0));
              var g = e.getSearchCursor(h, m);
              Ot(e, u, f, p, d, g, h, o, t.callback);
            },
            redo: e.commands.redo,
            undo: e.commands.undo,
            write: function (t) {
              if (e.commands.save) {
                e.commands.save(t);
              } else if (t.save) {
                t.save();
              }
            },
            nohlsearch: function (e) {
              St(e);
            },
            yank: function (e) {
              var t = pe(e.getCursor());
              var r = t.line;
              var n = e.getLine(r);
              V.registerController.pushText('0', 'yank', n, true, true);
            },
            delmarks: function (t, r) {
              if (!r.argString || !we(r.argString)) {
                pt(t, 'Argument required');
                return;
              }
              var n = t.state.vim;
              var i = new e.StringStream(we(r.argString));
              while (!i.eol()) {
                i.eatSpace();
                var a = i.pos;
                if (!i.match(/[a-zA-Z]/, false)) {
                  pt(t, 'Invalid argument: ' + r.argString.substring(a));
                  return;
                }
                var o = i.next();
                if (i.match('-', true)) {
                  if (!i.match(/[a-zA-Z]/, false)) {
                    pt(t, 'Invalid argument: ' + r.argString.substring(a));
                    return;
                  }
                  var s = o;
                  var l = i.next();
                  if ((T(s) && T(l)) || (I(s) && I(l))) {
                    var c = s.charCodeAt(0);
                    var u = l.charCodeAt(0);
                    if (c >= u) {
                      pt(t, 'Invalid argument: ' + r.argString.substring(a));
                      return;
                    }
                    for (var f = 0; f <= u - c; f++) {
                      var v = String.fromCharCode(c + f);
                      delete n.marks[v];
                    }
                  } else {
                    pt(t, 'Invalid argument: ' + s + '-');
                    return;
                  }
                } else {
                  delete n.marks[o];
                }
              }
            },
          };
          var It = new Rt();
          function Ot(t, r, n, i, a, o, s, l, c) {
            t.state.vim.exMode = true;
            var u = false;
            var f, v, h;
            function p() {
              t.operation(function () {
                while (!u) {
                  d();
                  m();
                }
                g();
              });
            }
            function d() {
              var e = t.getRange(o.from(), o.to());
              var r = e.replace(s, l);
              var n = o.to().line;
              o.replace(r);
              v = o.to().line;
              a += v - n;
              h = v < n;
            }
            function m() {
              while (o.findNext() && At(o.from(), i, a)) {
                if (!n && o.from().line == v && !h) {
                  continue;
                }
                t.scrollIntoView(o.from(), 30);
                t.setSelection(o.from(), o.to());
                f = o.from();
                u = false;
                return;
              }
              u = true;
            }
            function g(e) {
              if (e) {
                e();
              }
              t.focus();
              if (f) {
                t.setCursor(f);
                var r = t.state.vim;
                r.exMode = false;
                r.lastHPos = r.lastHSPos = f.ch;
              }
              if (c) {
                c();
              }
            }
            function y(r, n, i) {
              e.e_stop(r);
              var a = e.keyName(r);
              switch (a) {
                case 'Y':
                  d();
                  m();
                  break;
                case 'N':
                  m();
                  break;
                case 'A':
                  var o = c;
                  c = undefined;
                  t.operation(p);
                  c = o;
                  break;
                case 'L':
                  d();
                case 'Q':
                case 'Esc':
                case 'Ctrl-C':
                case 'Ctrl-[':
                  g(i);
                  break;
              }
              if (u) {
                g(i);
              }
              return true;
            }
            m();
            if (u) {
              pt(t, 'No matches for ' + s.source);
              return;
            }
            if (!r) {
              p();
              if (c) {
                c();
              }
              return;
            }
            mt(t, {
              prefix: ht('span', 'replace with ', ht('strong', l), ' (y/n/a/q/l)'),
              onKeyDown: y,
            });
          }
          e.keyMap.vim = { attach: l, detach: s, call: h };
          function Bt(t) {
            var r = t.state.vim;
            var n = V.macroModeState;
            var i = V.registerController.getRegister('.');
            var a = n.isPlaying;
            var o = n.lastInsertModeChanges;
            if (!a) {
              t.off('change', Ft);
              e.off(t.getInputField(), 'keydown', Jt);
            }
            if (!a && r.insertModeRepeat > 1) {
              Qt(t, r, r.insertModeRepeat - 1, true);
              r.lastEditInputState.repeatOverride = r.insertModeRepeat;
            }
            delete r.insertModeRepeat;
            r.insertMode = false;
            t.setCursor(t.getCursor().line, t.getCursor().ch - 1);
            t.setOption('keyMap', 'vim');
            t.setOption('disableInput', true);
            t.toggleOverwrite(false);
            i.setText(o.changes.join(''));
            e.signal(t, 'vim-mode-change', { mode: 'normal' });
            if (n.isRecording) {
              jt(n);
            }
          }
          function Nt(e) {
            t.unshift(e);
          }
          function Kt(e, t, r, n, i) {
            var a = { keys: e, type: t };
            a[t] = r;
            a[t + 'Args'] = n;
            for (var o in i) a[o] = i[o];
            Nt(a);
          }
          P('insertModeEscKeysTimeout', 200, 'number');
          e.keyMap['vim-insert'] = {
            fallthrough: ['default'],
            attach: l,
            detach: s,
            call: h,
          };
          e.keyMap['vim-replace'] = {
            Backspace: 'goCharLeft',
            fallthrough: ['vim-insert'],
            attach: l,
            detach: s,
            call: h,
          };
          function Pt(t, r, n, i) {
            var a = V.registerController.getRegister(i);
            if (i == ':') {
              if (a.keyBuffer[0]) {
                It.processCommand(t, a.keyBuffer[0]);
              }
              n.isPlaying = false;
              return;
            }
            var o = a.keyBuffer;
            var s = 0;
            n.isPlaying = true;
            n.replaySearchQueries = a.searchQueries.slice(0);
            for (var l = 0; l < o.length; l++) {
              var c = o[l];
              var u, f;
              while (c) {
                u = /<\w+-.+?>|<\w+>|./.exec(c);
                f = u[0];
                c = c.substring(u.index + f.length);
                e.Vim.handleKey(t, f, 'macro');
                if (r.insertMode) {
                  var v = a.insertModeChanges[s++].changes;
                  V.macroModeState.lastInsertModeChanges.changes = v;
                  qt(t, v, 1);
                  Bt(t);
                }
              }
            }
            n.isPlaying = false;
          }
          function _t(e, t) {
            if (e.isPlaying) {
              return;
            }
            var r = e.latestRegister;
            var n = V.registerController.getRegister(r);
            if (n) {
              n.pushText(t);
            }
          }
          function jt(e) {
            if (e.isPlaying) {
              return;
            }
            var t = e.latestRegister;
            var r = V.registerController.getRegister(t);
            if (r && r.pushInsertModeChanges) {
              r.pushInsertModeChanges(e.lastInsertModeChanges);
            }
          }
          function Ht(e, t) {
            if (e.isPlaying) {
              return;
            }
            var r = e.latestRegister;
            var n = V.registerController.getRegister(r);
            if (n && n.pushSearchQuery) {
              n.pushSearchQuery(t);
            }
          }
          function Ft(e, t) {
            var r = V.macroModeState;
            var n = r.lastInsertModeChanges;
            if (!r.isPlaying) {
              while (t) {
                n.expectCursorActivityForChange = true;
                if (n.ignoreCount > 1) {
                  n.ignoreCount--;
                } else if (
                  t.origin == '+input' ||
                  t.origin == 'paste' ||
                  t.origin === undefined
                ) {
                  var i = e.listSelections().length;
                  if (i > 1) n.ignoreCount = i;
                  var a = t.text.join('\n');
                  if (n.maybeReset) {
                    n.changes = [];
                    n.maybeReset = false;
                  }
                  if (a) {
                    if (e.state.overwrite && !/\n/.test(a)) {
                      n.changes.push([a]);
                    } else {
                      n.changes.push(a);
                    }
                  }
                }
                t = t.next;
              }
            }
          }
          function Wt(e) {
            var t = e.state.vim;
            if (t.insertMode) {
              var r = V.macroModeState;
              if (r.isPlaying) {
                return;
              }
              var n = r.lastInsertModeChanges;
              if (n.expectCursorActivityForChange) {
                n.expectCursorActivityForChange = false;
              } else {
                n.maybeReset = true;
              }
            } else if (!e.curOp.isVimOp) {
              $t(e, t);
            }
            if (t.visualMode) {
              Dt(e);
            }
          }
          function Dt(e) {
            var t = 'cm-animate-fat-cursor';
            var r = e.state.vim;
            var n = se(e, pe(r.sel.head));
            var i = ce(n, 0, 1);
            Vt(r);
            if (n.ch == e.getLine(n.line).length) {
              var a = ht('span', { class: t }, ' ');
              r.fakeCursorBookmark = e.setBookmark(n, { widget: a });
            } else {
              r.fakeCursor = e.markText(n, i, { className: t });
            }
          }
          function Vt(e) {
            if (e.fakeCursor) {
              e.fakeCursor.clear();
              e.fakeCursor = null;
            }
            if (e.fakeCursorBookmark) {
              e.fakeCursorBookmark.clear();
              e.fakeCursorBookmark = null;
            }
          }
          function $t(t, r) {
            var n = t.getCursor('anchor');
            var i = t.getCursor('head');
            if (r.visualMode && !t.somethingSelected()) {
              Be(t, false);
            } else if (!r.visualMode && !r.insertMode && t.somethingSelected()) {
              r.visualMode = true;
              r.visualLine = false;
              e.signal(t, 'vim-mode-change', { mode: 'visual' });
            }
            if (r.visualMode) {
              var a = !me(i, n) ? -1 : 0;
              var o = me(i, n) ? -1 : 0;
              i = ce(i, 0, a);
              n = ce(n, 0, o);
              r.sel = { anchor: n, head: i };
              ze(t, r, '<', ge(i, n));
              ze(t, r, '>', ye(i, n));
            } else if (!r.insertMode) {
              r.lastHPos = t.getCursor().ch;
            }
          }
          function Ut(e) {
            this.keyName = e;
          }
          function Jt(t) {
            var r = V.macroModeState;
            var n = r.lastInsertModeChanges;
            var i = e.keyName(t);
            if (!i) {
              return;
            }
            function a() {
              if (n.maybeReset) {
                n.changes = [];
                n.maybeReset = false;
              }
              n.changes.push(new Ut(i));
              return true;
            }
            if (i.indexOf('Delete') != -1 || i.indexOf('Backspace') != -1) {
              e.lookupKey(i, 'vim-insert', a);
            }
          }
          function Qt(e, t, r, n) {
            var i = V.macroModeState;
            i.isPlaying = true;
            var a = !!t.lastEditActionCommand;
            var o = t.inputState;
            function s() {
              if (a) {
                Y.processAction(e, t, t.lastEditActionCommand);
              } else {
                Y.evalInput(e, t);
              }
            }
            function l(r) {
              if (i.lastInsertModeChanges.changes.length > 0) {
                r = !t.lastEditActionCommand ? 1 : r;
                var n = i.lastInsertModeChanges;
                qt(e, n.changes, r);
              }
            }
            t.inputState = t.lastEditInputState;
            if (a && t.lastEditActionCommand.interlaceInsertRepeat) {
              for (var c = 0; c < r; c++) {
                s();
                l(1);
              }
            } else {
              if (!n) {
                s();
              }
              l(r);
            }
            t.inputState = o;
            if (t.insertMode && !n) {
              Bt(e);
            }
            i.isPlaying = false;
          }
          function qt(t, r, n) {
            function i(r) {
              if (typeof r == 'string') {
                e.commands[r](t);
              } else {
                r(t);
              }
              return true;
            }
            var a = t.getCursor('head');
            var o = V.macroModeState.lastInsertModeChanges.visualBlock;
            if (o) {
              Ae(t, a, o + 1);
              n = t.listSelections().length;
              t.setCursor(a);
            }
            for (var s = 0; s < n; s++) {
              if (o) {
                t.setCursor(ce(a, s, 0));
              }
              for (var l = 0; l < r.length; l++) {
                var c = r[l];
                if (c instanceof Ut) {
                  e.lookupKey(c.keyName, 'vim-insert', i);
                } else if (typeof c == 'string') {
                  var u = t.getCursor();
                  t.replaceRange(c, u, u);
                } else {
                  var f = t.getCursor();
                  var v = ce(f, 0, c[0].length);
                  t.replaceRange(c[0], f, v);
                }
              }
            }
            if (o) {
              t.setCursor(ce(a, 0, 1));
            }
          }
          $();
          return J;
        };
        e.Vim = a();
      });
    },
  },
]);
//# sourceMappingURL=2585.4d374708a4df1d35065d.js.map?v=4d374708a4df1d35065d

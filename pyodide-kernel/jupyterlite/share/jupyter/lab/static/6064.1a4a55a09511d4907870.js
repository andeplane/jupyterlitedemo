/*! For license information please see 6064.1a4a55a09511d4907870.js.LICENSE.txt */
(self['webpackChunk_jupyterlab_application_top'] =
  self['webpackChunk_jupyterlab_application_top'] || []).push([
  [6064],
  {
    29483: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('apl', function () {
          var e = {
            '.': 'innerProduct',
            '\\': 'scan',
            '/': 'reduce',
            '⌿': 'reduce1Axis',
            '⍀': 'scan1Axis',
            '¨': 'each',
            '⍣': 'power',
          };
          var t = {
            '+': ['conjugate', 'add'],
            '−': ['negate', 'subtract'],
            '×': ['signOf', 'multiply'],
            '÷': ['reciprocal', 'divide'],
            '⌈': ['ceiling', 'greaterOf'],
            '⌊': ['floor', 'lesserOf'],
            '∣': ['absolute', 'residue'],
            '⍳': ['indexGenerate', 'indexOf'],
            '?': ['roll', 'deal'],
            '⋆': ['exponentiate', 'toThePowerOf'],
            '⍟': ['naturalLog', 'logToTheBase'],
            '○': ['piTimes', 'circularFuncs'],
            '!': ['factorial', 'binomial'],
            '⌹': ['matrixInverse', 'matrixDivide'],
            '<': [null, 'lessThan'],
            '≤': [null, 'lessThanOrEqual'],
            '=': [null, 'equals'],
            '>': [null, 'greaterThan'],
            '≥': [null, 'greaterThanOrEqual'],
            '≠': [null, 'notEqual'],
            '≡': ['depth', 'match'],
            '≢': [null, 'notMatch'],
            '∈': ['enlist', 'membership'],
            '⍷': [null, 'find'],
            '∪': ['unique', 'union'],
            '∩': [null, 'intersection'],
            '∼': ['not', 'without'],
            '∨': [null, 'or'],
            '∧': [null, 'and'],
            '⍱': [null, 'nor'],
            '⍲': [null, 'nand'],
            '⍴': ['shapeOf', 'reshape'],
            ',': ['ravel', 'catenate'],
            '⍪': [null, 'firstAxisCatenate'],
            '⌽': ['reverse', 'rotate'],
            '⊖': ['axis1Reverse', 'axis1Rotate'],
            '⍉': ['transpose', null],
            '↑': ['first', 'take'],
            '↓': [null, 'drop'],
            '⊂': ['enclose', 'partitionWithAxis'],
            '⊃': ['diclose', 'pick'],
            '⌷': [null, 'index'],
            '⍋': ['gradeUp', null],
            '⍒': ['gradeDown', null],
            '⊤': ['encode', null],
            '⊥': ['decode', null],
            '⍕': ['format', 'formatByExample'],
            '⍎': ['execute', null],
            '⊣': ['stop', 'left'],
            '⊢': ['pass', 'right'],
          };
          var r = /[\.\/⌿⍀¨⍣]/;
          var n = /⍬/;
          var i = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/;
          var a = /←/;
          var o = /[⍝#].*$/;
          var s = function (e) {
            var t;
            t = false;
            return function (r) {
              t = r;
              if (r === e) {
                return t === '\\';
              }
              return true;
            };
          };
          return {
            startState: function () {
              return {
                prev: false,
                func: false,
                op: false,
                string: false,
                escape: false,
              };
            },
            token: function (l, u) {
              var c, f;
              if (l.eatSpace()) {
                return null;
              }
              c = l.next();
              if (c === '"' || c === "'") {
                l.eatWhile(s(c));
                l.next();
                u.prev = true;
                return 'string';
              }
              if (/[\[{\(]/.test(c)) {
                u.prev = false;
                return null;
              }
              if (/[\]}\)]/.test(c)) {
                u.prev = true;
                return null;
              }
              if (n.test(c)) {
                u.prev = false;
                return 'niladic';
              }
              if (/[¯\d]/.test(c)) {
                if (u.func) {
                  u.func = false;
                  u.prev = false;
                } else {
                  u.prev = true;
                }
                l.eatWhile(/[\w\.]/);
                return 'number';
              }
              if (r.test(c)) {
                return 'operator apl-' + e[c];
              }
              if (a.test(c)) {
                return 'apl-arrow';
              }
              if (i.test(c)) {
                f = 'apl-';
                if (t[c] != null) {
                  if (u.prev) {
                    f += t[c][1];
                  } else {
                    f += t[c][0];
                  }
                }
                u.func = true;
                u.prev = false;
                return 'function ' + f;
              }
              if (o.test(c)) {
                l.skipToEnd();
                return 'comment';
              }
              if (c === '∘' && l.peek() === '.') {
                l.next();
                return 'function jot-dot';
              }
              l.eatWhile(/[\w\$_]/);
              u.prev = true;
              return 'keyword';
            },
          };
        });
        e.defineMIME('text/apl', 'apl');
      });
    },
    95637: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          var t = e.match(/^\s*\S/);
          e.skipToEnd();
          return t ? 'error' : null;
        }
        e.defineMode('asciiarmor', function () {
          return {
            token: function (e, r) {
              var n;
              if (r.state == 'top') {
                if (e.sol() && (n = e.match(/^-----BEGIN (.*)?-----\s*$/))) {
                  r.state = 'headers';
                  r.type = n[1];
                  return 'tag';
                }
                return t(e);
              } else if (r.state == 'headers') {
                if (e.sol() && e.match(/^\w+:/)) {
                  r.state = 'header';
                  return 'atom';
                } else {
                  var i = t(e);
                  if (i) r.state = 'body';
                  return i;
                }
              } else if (r.state == 'header') {
                e.skipToEnd();
                r.state = 'headers';
                return 'string';
              } else if (r.state == 'body') {
                if (e.sol() && (n = e.match(/^-----END (.*)?-----\s*$/))) {
                  if (n[1] != r.type) return 'error';
                  r.state = 'end';
                  return 'tag';
                } else {
                  if (e.eatWhile(/[A-Za-z0-9+\/=]/)) {
                    return null;
                  } else {
                    e.next();
                    return 'error';
                  }
                }
              } else if (r.state == 'end') {
                return t(e);
              }
            },
            blankLine: function (e) {
              if (e.state == 'headers') e.state = 'body';
            },
            startState: function () {
              return { state: 'top', type: null };
            },
          };
        });
        e.defineMIME('application/pgp', 'asciiarmor');
        e.defineMIME('application/pgp-encrypted', 'asciiarmor');
        e.defineMIME('application/pgp-keys', 'asciiarmor');
        e.defineMIME('application/pgp-signature', 'asciiarmor');
      });
    },
    97922: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('asn.1', function (e, t) {
          var r = e.indentUnit,
            n = t.keywords || {},
            i = t.cmipVerbs || {},
            a = t.compareTypes || {},
            o = t.status || {},
            s = t.tags || {},
            l = t.storage || {},
            u = t.modifier || {},
            c = t.accessTypes || {},
            f = t.multiLineStrings,
            d = t.indentStatements !== false;
          var m = /[\|\^]/;
          var p;
          function h(e, t) {
            var r = e.next();
            if (r == '"' || r == "'") {
              t.tokenize = g(r);
              return t.tokenize(e, t);
            }
            if (/[\[\]\(\){}:=,;]/.test(r)) {
              p = r;
              return 'punctuation';
            }
            if (r == '-') {
              if (e.eat('-')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (/\d/.test(r)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            }
            if (m.test(r)) {
              e.eatWhile(m);
              return 'operator';
            }
            e.eatWhile(/[\w\-]/);
            var f = e.current();
            if (n.propertyIsEnumerable(f)) return 'keyword';
            if (i.propertyIsEnumerable(f)) return 'variable cmipVerbs';
            if (a.propertyIsEnumerable(f)) return 'atom compareTypes';
            if (o.propertyIsEnumerable(f)) return 'comment status';
            if (s.propertyIsEnumerable(f)) return 'variable-3 tags';
            if (l.propertyIsEnumerable(f)) return 'builtin storage';
            if (u.propertyIsEnumerable(f)) return 'string-2 modifier';
            if (c.propertyIsEnumerable(f)) return 'atom accessTypes';
            return 'variable';
          }
          function g(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  var o = t.peek();
                  if (o) {
                    o = o.toLowerCase();
                    if (o == 'b' || o == 'h' || o == 'o') t.next();
                  }
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !(n || f)) r.tokenize = null;
              return 'string';
            };
          }
          function b(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function v(e, t, r) {
            var n = e.indented;
            if (e.context && e.context.type == 'statement') n = e.context.indented;
            return (e.context = new b(n, t, r, null, e.context));
          }
          function k(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new b((e || 0) - r, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) return null;
              p = null;
              var n = (t.tokenize || h)(e, t);
              if (n == 'comment') return n;
              if (r.align == null) r.align = true;
              if ((p == ';' || p == ':' || p == ',') && r.type == 'statement') {
                k(t);
              } else if (p == '{') v(t, e.column(), '}');
              else if (p == '[') v(t, e.column(), ']');
              else if (p == '(') v(t, e.column(), ')');
              else if (p == '}') {
                while (r.type == 'statement') r = k(t);
                if (r.type == '}') r = k(t);
                while (r.type == 'statement') r = k(t);
              } else if (p == r.type) k(t);
              else if (
                d &&
                (((r.type == '}' || r.type == 'top') && p != ';') ||
                  (r.type == 'statement' && p == 'newstatement'))
              )
                v(t, e.column(), 'statement');
              t.startOfLine = false;
              return n;
            },
            electricChars: '{}',
            lineComment: '--',
            fold: 'brace',
          };
        });
        function t(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        e.defineMIME('text/x-ttcn-asn', {
          name: 'asn.1',
          keywords: t(
            'DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION' +
              ' REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED' +
              ' WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN' +
              ' IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS' +
              ' MINACCESS MAXACCESS REVISION STATUS DESCRIPTION' +
              ' SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName' +
              ' ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY' +
              ' IMPLIED EXPORTS'
          ),
          cmipVerbs: t('ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE'),
          compareTypes: t(
            'OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY' +
              ' MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY' +
              ' OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL' +
              ' SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL' +
              ' TEXTUAL-CONVENTION'
          ),
          status: t('current deprecated mandatory obsolete'),
          tags: t(
            'APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS' + ' UNIVERSAL'
          ),
          storage: t(
            'BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING' +
              ' UTCTime InterfaceIndex IANAifType CMIP-Attribute' +
              ' REAL PACKAGE PACKAGES IpAddress PhysAddress' +
              ' NetworkAddress BITS BMPString TimeStamp TimeTicks' +
              ' TruthValue RowStatus DisplayString GeneralString' +
              ' GraphicString IA5String NumericString' +
              ' PrintableString SnmpAdminString TeletexString' +
              ' UTF8String VideotexString VisibleString StringStore' +
              ' ISO646String T61String UniversalString Unsigned32' +
              ' Integer32 Gauge Gauge32 Counter Counter32 Counter64'
          ),
          modifier: t(
            'ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS' +
              ' GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS' +
              ' DEFINED'
          ),
          accessTypes: t(
            'not-accessible accessible-for-notify read-only' + ' read-create read-write'
          ),
          multiLineStrings: true,
        });
      });
    },
    31881: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('asterisk', function () {
          var e = ['exten', 'same', 'include', 'ignorepat', 'switch'],
            t = ['#include', '#exec'],
            r = [
              'addqueuemember',
              'adsiprog',
              'aelsub',
              'agentlogin',
              'agentmonitoroutgoing',
              'agi',
              'alarmreceiver',
              'amd',
              'answer',
              'authenticate',
              'background',
              'backgrounddetect',
              'bridge',
              'busy',
              'callcompletioncancel',
              'callcompletionrequest',
              'celgenuserevent',
              'changemonitor',
              'chanisavail',
              'channelredirect',
              'chanspy',
              'clearhash',
              'confbridge',
              'congestion',
              'continuewhile',
              'controlplayback',
              'dahdiacceptr2call',
              'dahdibarge',
              'dahdiras',
              'dahdiscan',
              'dahdisendcallreroutingfacility',
              'dahdisendkeypadfacility',
              'datetime',
              'dbdel',
              'dbdeltree',
              'deadagi',
              'dial',
              'dictate',
              'directory',
              'disa',
              'dumpchan',
              'eagi',
              'echo',
              'endwhile',
              'exec',
              'execif',
              'execiftime',
              'exitwhile',
              'extenspy',
              'externalivr',
              'festival',
              'flash',
              'followme',
              'forkcdr',
              'getcpeid',
              'gosub',
              'gosubif',
              'goto',
              'gotoif',
              'gotoiftime',
              'hangup',
              'iax2provision',
              'ices',
              'importvar',
              'incomplete',
              'ivrdemo',
              'jabberjoin',
              'jabberleave',
              'jabbersend',
              'jabbersendgroup',
              'jabberstatus',
              'jack',
              'log',
              'macro',
              'macroexclusive',
              'macroexit',
              'macroif',
              'mailboxexists',
              'meetme',
              'meetmeadmin',
              'meetmechanneladmin',
              'meetmecount',
              'milliwatt',
              'minivmaccmess',
              'minivmdelete',
              'minivmgreet',
              'minivmmwi',
              'minivmnotify',
              'minivmrecord',
              'mixmonitor',
              'monitor',
              'morsecode',
              'mp3player',
              'mset',
              'musiconhold',
              'nbscat',
              'nocdr',
              'noop',
              'odbc',
              'odbc',
              'odbcfinish',
              'originate',
              'ospauth',
              'ospfinish',
              'osplookup',
              'ospnext',
              'page',
              'park',
              'parkandannounce',
              'parkedcall',
              'pausemonitor',
              'pausequeuemember',
              'pickup',
              'pickupchan',
              'playback',
              'playtones',
              'privacymanager',
              'proceeding',
              'progress',
              'queue',
              'queuelog',
              'raiseexception',
              'read',
              'readexten',
              'readfile',
              'receivefax',
              'receivefax',
              'receivefax',
              'record',
              'removequeuemember',
              'resetcdr',
              'retrydial',
              'return',
              'ringing',
              'sayalpha',
              'saycountedadj',
              'saycountednoun',
              'saycountpl',
              'saydigits',
              'saynumber',
              'sayphonetic',
              'sayunixtime',
              'senddtmf',
              'sendfax',
              'sendfax',
              'sendfax',
              'sendimage',
              'sendtext',
              'sendurl',
              'set',
              'setamaflags',
              'setcallerpres',
              'setmusiconhold',
              'sipaddheader',
              'sipdtmfmode',
              'sipremoveheader',
              'skel',
              'slastation',
              'slatrunk',
              'sms',
              'softhangup',
              'speechactivategrammar',
              'speechbackground',
              'speechcreate',
              'speechdeactivategrammar',
              'speechdestroy',
              'speechloadgrammar',
              'speechprocessingsound',
              'speechstart',
              'speechunloadgrammar',
              'stackpop',
              'startmusiconhold',
              'stopmixmonitor',
              'stopmonitor',
              'stopmusiconhold',
              'stopplaytones',
              'system',
              'testclient',
              'testserver',
              'transfer',
              'tryexec',
              'trysystem',
              'unpausemonitor',
              'unpausequeuemember',
              'userevent',
              'verbose',
              'vmauthenticate',
              'vmsayname',
              'voicemail',
              'voicemailmain',
              'wait',
              'waitexten',
              'waitfornoise',
              'waitforring',
              'waitforsilence',
              'waitmusiconhold',
              'waituntil',
              'while',
              'zapateller',
            ];
          function n(r, n) {
            var i = '';
            var a = r.next();
            if (n.blockComment) {
              if (a == '-' && r.match('-;', true)) {
                n.blockComment = false;
              } else if (r.skipTo('--;')) {
                r.next();
                r.next();
                r.next();
                n.blockComment = false;
              } else {
                r.skipToEnd();
              }
              return 'comment';
            }
            if (a == ';') {
              if (r.match('--', true)) {
                if (!r.match('-', false)) {
                  n.blockComment = true;
                  return 'comment';
                }
              }
              r.skipToEnd();
              return 'comment';
            }
            if (a == '[') {
              r.skipTo(']');
              r.eat(']');
              return 'header';
            }
            if (a == '"') {
              r.skipTo('"');
              return 'string';
            }
            if (a == "'") {
              r.skipTo("'");
              return 'string-2';
            }
            if (a == '#') {
              r.eatWhile(/\w/);
              i = r.current();
              if (t.indexOf(i) !== -1) {
                r.skipToEnd();
                return 'strong';
              }
            }
            if (a == '$') {
              var o = r.peek();
              if (o == '{') {
                r.skipTo('}');
                r.eat('}');
                return 'variable-3';
              }
            }
            r.eatWhile(/\w/);
            i = r.current();
            if (e.indexOf(i) !== -1) {
              n.extenStart = true;
              switch (i) {
                case 'same':
                  n.extenSame = true;
                  break;
                case 'include':
                case 'switch':
                case 'ignorepat':
                  n.extenInclude = true;
                  break;
                default:
                  break;
              }
              return 'atom';
            }
          }
          return {
            startState: function () {
              return {
                blockComment: false,
                extenStart: false,
                extenSame: false,
                extenInclude: false,
                extenExten: false,
                extenPriority: false,
                extenApplication: false,
              };
            },
            token: function (e, t) {
              var i = '';
              if (e.eatSpace()) return null;
              if (t.extenStart) {
                e.eatWhile(/[^\s]/);
                i = e.current();
                if (/^=>?$/.test(i)) {
                  t.extenExten = true;
                  t.extenStart = false;
                  return 'strong';
                } else {
                  t.extenStart = false;
                  e.skipToEnd();
                  return 'error';
                }
              } else if (t.extenExten) {
                t.extenExten = false;
                t.extenPriority = true;
                e.eatWhile(/[^,]/);
                if (t.extenInclude) {
                  e.skipToEnd();
                  t.extenPriority = false;
                  t.extenInclude = false;
                }
                if (t.extenSame) {
                  t.extenPriority = false;
                  t.extenSame = false;
                  t.extenApplication = true;
                }
                return 'tag';
              } else if (t.extenPriority) {
                t.extenPriority = false;
                t.extenApplication = true;
                e.next();
                if (t.extenSame) return null;
                e.eatWhile(/[^,]/);
                return 'number';
              } else if (t.extenApplication) {
                e.eatWhile(/,/);
                i = e.current();
                if (i === ',') return null;
                e.eatWhile(/\w/);
                i = e.current().toLowerCase();
                t.extenApplication = false;
                if (r.indexOf(i) !== -1) {
                  return 'def strong';
                }
              } else {
                return n(e, t);
              }
              return null;
            },
            blockCommentStart: ';--',
            blockCommentEnd: '--;',
            lineComment: ';',
          };
        });
        e.defineMIME('text/x-asterisk', 'asterisk');
      });
    },
    9460: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = '><+-.,[]'.split('');
        e.defineMode('brainfuck', function () {
          return {
            startState: function () {
              return { commentLine: false, left: 0, right: 0, commentLoop: false };
            },
            token: function (e, r) {
              if (e.eatSpace()) return null;
              if (e.sol()) {
                r.commentLine = false;
              }
              var n = e.next().toString();
              if (t.indexOf(n) !== -1) {
                if (r.commentLine === true) {
                  if (e.eol()) {
                    r.commentLine = false;
                  }
                  return 'comment';
                }
                if (n === ']' || n === '[') {
                  if (n === '[') {
                    r.left++;
                  } else {
                    r.right++;
                  }
                  return 'bracket';
                } else if (n === '+' || n === '-') {
                  return 'keyword';
                } else if (n === '<' || n === '>') {
                  return 'atom';
                } else if (n === '.' || n === ',') {
                  return 'def';
                }
              } else {
                r.commentLine = true;
                if (e.eol()) {
                  r.commentLine = false;
                }
                return 'comment';
              }
              if (e.eol()) {
                r.commentLine = false;
              }
            },
          };
        });
        e.defineMIME('text/x-brainfuck', 'brainfuck');
      });
    },
    63693: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('clojure', function (t) {
          var r = ['false', 'nil', 'true'];
          var n = [
            '.',
            'catch',
            'def',
            'do',
            'if',
            'monitor-enter',
            'monitor-exit',
            'new',
            'quote',
            'recur',
            'set!',
            'throw',
            'try',
            'var',
          ];
          var i = [
            '*',
            "*'",
            '*1',
            '*2',
            '*3',
            '*agent*',
            '*allow-unresolved-vars*',
            '*assert*',
            '*clojure-version*',
            '*command-line-args*',
            '*compile-files*',
            '*compile-path*',
            '*compiler-options*',
            '*data-readers*',
            '*default-data-reader-fn*',
            '*e',
            '*err*',
            '*file*',
            '*flush-on-newline*',
            '*fn-loader*',
            '*in*',
            '*math-context*',
            '*ns*',
            '*out*',
            '*print-dup*',
            '*print-length*',
            '*print-level*',
            '*print-meta*',
            '*print-namespace-maps*',
            '*print-readably*',
            '*read-eval*',
            '*reader-resolver*',
            '*source-path*',
            '*suppress-read*',
            '*unchecked-math*',
            '*use-context-classloader*',
            '*verbose-defrecords*',
            '*warn-on-reflection*',
            '+',
            "+'",
            '-',
            "-'",
            '->',
            '->>',
            '->ArrayChunk',
            '->Eduction',
            '->Vec',
            '->VecNode',
            '->VecSeq',
            '-cache-protocol-fn',
            '-reset-methods',
            '..',
            '/',
            '<',
            '<=',
            '=',
            '==',
            '>',
            '>=',
            'EMPTY-NODE',
            'Inst',
            'StackTraceElement->vec',
            'Throwable->map',
            'accessor',
            'aclone',
            'add-classpath',
            'add-watch',
            'agent',
            'agent-error',
            'agent-errors',
            'aget',
            'alength',
            'alias',
            'all-ns',
            'alter',
            'alter-meta!',
            'alter-var-root',
            'amap',
            'ancestors',
            'and',
            'any?',
            'apply',
            'areduce',
            'array-map',
            'as->',
            'aset',
            'aset-boolean',
            'aset-byte',
            'aset-char',
            'aset-double',
            'aset-float',
            'aset-int',
            'aset-long',
            'aset-short',
            'assert',
            'assoc',
            'assoc!',
            'assoc-in',
            'associative?',
            'atom',
            'await',
            'await-for',
            'await1',
            'bases',
            'bean',
            'bigdec',
            'bigint',
            'biginteger',
            'binding',
            'bit-and',
            'bit-and-not',
            'bit-clear',
            'bit-flip',
            'bit-not',
            'bit-or',
            'bit-set',
            'bit-shift-left',
            'bit-shift-right',
            'bit-test',
            'bit-xor',
            'boolean',
            'boolean-array',
            'boolean?',
            'booleans',
            'bound-fn',
            'bound-fn*',
            'bound?',
            'bounded-count',
            'butlast',
            'byte',
            'byte-array',
            'bytes',
            'bytes?',
            'case',
            'cast',
            'cat',
            'char',
            'char-array',
            'char-escape-string',
            'char-name-string',
            'char?',
            'chars',
            'chunk',
            'chunk-append',
            'chunk-buffer',
            'chunk-cons',
            'chunk-first',
            'chunk-next',
            'chunk-rest',
            'chunked-seq?',
            'class',
            'class?',
            'clear-agent-errors',
            'clojure-version',
            'coll?',
            'comment',
            'commute',
            'comp',
            'comparator',
            'compare',
            'compare-and-set!',
            'compile',
            'complement',
            'completing',
            'concat',
            'cond',
            'cond->',
            'cond->>',
            'condp',
            'conj',
            'conj!',
            'cons',
            'constantly',
            'construct-proxy',
            'contains?',
            'count',
            'counted?',
            'create-ns',
            'create-struct',
            'cycle',
            'dec',
            "dec'",
            'decimal?',
            'declare',
            'dedupe',
            'default-data-readers',
            'definline',
            'definterface',
            'defmacro',
            'defmethod',
            'defmulti',
            'defn',
            'defn-',
            'defonce',
            'defprotocol',
            'defrecord',
            'defstruct',
            'deftype',
            'delay',
            'delay?',
            'deliver',
            'denominator',
            'deref',
            'derive',
            'descendants',
            'destructure',
            'disj',
            'disj!',
            'dissoc',
            'dissoc!',
            'distinct',
            'distinct?',
            'doall',
            'dorun',
            'doseq',
            'dosync',
            'dotimes',
            'doto',
            'double',
            'double-array',
            'double?',
            'doubles',
            'drop',
            'drop-last',
            'drop-while',
            'eduction',
            'empty',
            'empty?',
            'ensure',
            'ensure-reduced',
            'enumeration-seq',
            'error-handler',
            'error-mode',
            'eval',
            'even?',
            'every-pred',
            'every?',
            'ex-data',
            'ex-info',
            'extend',
            'extend-protocol',
            'extend-type',
            'extenders',
            'extends?',
            'false?',
            'ffirst',
            'file-seq',
            'filter',
            'filterv',
            'find',
            'find-keyword',
            'find-ns',
            'find-protocol-impl',
            'find-protocol-method',
            'find-var',
            'first',
            'flatten',
            'float',
            'float-array',
            'float?',
            'floats',
            'flush',
            'fn',
            'fn?',
            'fnext',
            'fnil',
            'for',
            'force',
            'format',
            'frequencies',
            'future',
            'future-call',
            'future-cancel',
            'future-cancelled?',
            'future-done?',
            'future?',
            'gen-class',
            'gen-interface',
            'gensym',
            'get',
            'get-in',
            'get-method',
            'get-proxy-class',
            'get-thread-bindings',
            'get-validator',
            'group-by',
            'halt-when',
            'hash',
            'hash-combine',
            'hash-map',
            'hash-ordered-coll',
            'hash-set',
            'hash-unordered-coll',
            'ident?',
            'identical?',
            'identity',
            'if-let',
            'if-not',
            'if-some',
            'ifn?',
            'import',
            'in-ns',
            'inc',
            "inc'",
            'indexed?',
            'init-proxy',
            'inst-ms',
            'inst-ms*',
            'inst?',
            'instance?',
            'int',
            'int-array',
            'int?',
            'integer?',
            'interleave',
            'intern',
            'interpose',
            'into',
            'into-array',
            'ints',
            'io!',
            'isa?',
            'iterate',
            'iterator-seq',
            'juxt',
            'keep',
            'keep-indexed',
            'key',
            'keys',
            'keyword',
            'keyword?',
            'last',
            'lazy-cat',
            'lazy-seq',
            'let',
            'letfn',
            'line-seq',
            'list',
            'list*',
            'list?',
            'load',
            'load-file',
            'load-reader',
            'load-string',
            'loaded-libs',
            'locking',
            'long',
            'long-array',
            'longs',
            'loop',
            'macroexpand',
            'macroexpand-1',
            'make-array',
            'make-hierarchy',
            'map',
            'map-entry?',
            'map-indexed',
            'map?',
            'mapcat',
            'mapv',
            'max',
            'max-key',
            'memfn',
            'memoize',
            'merge',
            'merge-with',
            'meta',
            'method-sig',
            'methods',
            'min',
            'min-key',
            'mix-collection-hash',
            'mod',
            'munge',
            'name',
            'namespace',
            'namespace-munge',
            'nat-int?',
            'neg-int?',
            'neg?',
            'newline',
            'next',
            'nfirst',
            'nil?',
            'nnext',
            'not',
            'not-any?',
            'not-empty',
            'not-every?',
            'not=',
            'ns',
            'ns-aliases',
            'ns-imports',
            'ns-interns',
            'ns-map',
            'ns-name',
            'ns-publics',
            'ns-refers',
            'ns-resolve',
            'ns-unalias',
            'ns-unmap',
            'nth',
            'nthnext',
            'nthrest',
            'num',
            'number?',
            'numerator',
            'object-array',
            'odd?',
            'or',
            'parents',
            'partial',
            'partition',
            'partition-all',
            'partition-by',
            'pcalls',
            'peek',
            'persistent!',
            'pmap',
            'pop',
            'pop!',
            'pop-thread-bindings',
            'pos-int?',
            'pos?',
            'pr',
            'pr-str',
            'prefer-method',
            'prefers',
            'primitives-classnames',
            'print',
            'print-ctor',
            'print-dup',
            'print-method',
            'print-simple',
            'print-str',
            'printf',
            'println',
            'println-str',
            'prn',
            'prn-str',
            'promise',
            'proxy',
            'proxy-call-with-super',
            'proxy-mappings',
            'proxy-name',
            'proxy-super',
            'push-thread-bindings',
            'pvalues',
            'qualified-ident?',
            'qualified-keyword?',
            'qualified-symbol?',
            'quot',
            'rand',
            'rand-int',
            'rand-nth',
            'random-sample',
            'range',
            'ratio?',
            'rational?',
            'rationalize',
            're-find',
            're-groups',
            're-matcher',
            're-matches',
            're-pattern',
            're-seq',
            'read',
            'read-line',
            'read-string',
            'reader-conditional',
            'reader-conditional?',
            'realized?',
            'record?',
            'reduce',
            'reduce-kv',
            'reduced',
            'reduced?',
            'reductions',
            'ref',
            'ref-history-count',
            'ref-max-history',
            'ref-min-history',
            'ref-set',
            'refer',
            'refer-clojure',
            'reify',
            'release-pending-sends',
            'rem',
            'remove',
            'remove-all-methods',
            'remove-method',
            'remove-ns',
            'remove-watch',
            'repeat',
            'repeatedly',
            'replace',
            'replicate',
            'require',
            'reset!',
            'reset-meta!',
            'reset-vals!',
            'resolve',
            'rest',
            'restart-agent',
            'resultset-seq',
            'reverse',
            'reversible?',
            'rseq',
            'rsubseq',
            'run!',
            'satisfies?',
            'second',
            'select-keys',
            'send',
            'send-off',
            'send-via',
            'seq',
            'seq?',
            'seqable?',
            'seque',
            'sequence',
            'sequential?',
            'set',
            'set-agent-send-executor!',
            'set-agent-send-off-executor!',
            'set-error-handler!',
            'set-error-mode!',
            'set-validator!',
            'set?',
            'short',
            'short-array',
            'shorts',
            'shuffle',
            'shutdown-agents',
            'simple-ident?',
            'simple-keyword?',
            'simple-symbol?',
            'slurp',
            'some',
            'some->',
            'some->>',
            'some-fn',
            'some?',
            'sort',
            'sort-by',
            'sorted-map',
            'sorted-map-by',
            'sorted-set',
            'sorted-set-by',
            'sorted?',
            'special-symbol?',
            'spit',
            'split-at',
            'split-with',
            'str',
            'string?',
            'struct',
            'struct-map',
            'subs',
            'subseq',
            'subvec',
            'supers',
            'swap!',
            'swap-vals!',
            'symbol',
            'symbol?',
            'sync',
            'tagged-literal',
            'tagged-literal?',
            'take',
            'take-last',
            'take-nth',
            'take-while',
            'test',
            'the-ns',
            'thread-bound?',
            'time',
            'to-array',
            'to-array-2d',
            'trampoline',
            'transduce',
            'transient',
            'tree-seq',
            'true?',
            'type',
            'unchecked-add',
            'unchecked-add-int',
            'unchecked-byte',
            'unchecked-char',
            'unchecked-dec',
            'unchecked-dec-int',
            'unchecked-divide-int',
            'unchecked-double',
            'unchecked-float',
            'unchecked-inc',
            'unchecked-inc-int',
            'unchecked-int',
            'unchecked-long',
            'unchecked-multiply',
            'unchecked-multiply-int',
            'unchecked-negate',
            'unchecked-negate-int',
            'unchecked-remainder-int',
            'unchecked-short',
            'unchecked-subtract',
            'unchecked-subtract-int',
            'underive',
            'unquote',
            'unquote-splicing',
            'unreduced',
            'unsigned-bit-shift-right',
            'update',
            'update-in',
            'update-proxy',
            'uri?',
            'use',
            'uuid?',
            'val',
            'vals',
            'var-get',
            'var-set',
            'var?',
            'vary-meta',
            'vec',
            'vector',
            'vector-of',
            'vector?',
            'volatile!',
            'volatile?',
            'vreset!',
            'vswap!',
            'when',
            'when-first',
            'when-let',
            'when-not',
            'when-some',
            'while',
            'with-bindings',
            'with-bindings*',
            'with-in-str',
            'with-loading-context',
            'with-local-vars',
            'with-meta',
            'with-open',
            'with-out-str',
            'with-precision',
            'with-redefs',
            'with-redefs-fn',
            'xml-seq',
            'zero?',
            'zipmap',
          ];
          var a = [
            '->',
            '->>',
            'as->',
            'binding',
            'bound-fn',
            'case',
            'catch',
            'comment',
            'cond',
            'cond->',
            'cond->>',
            'condp',
            'def',
            'definterface',
            'defmethod',
            'defn',
            'defmacro',
            'defprotocol',
            'defrecord',
            'defstruct',
            'deftype',
            'do',
            'doseq',
            'dotimes',
            'doto',
            'extend',
            'extend-protocol',
            'extend-type',
            'fn',
            'for',
            'future',
            'if',
            'if-let',
            'if-not',
            'if-some',
            'let',
            'letfn',
            'locking',
            'loop',
            'ns',
            'proxy',
            'reify',
            'struct-map',
            'some->',
            'some->>',
            'try',
            'when',
            'when-first',
            'when-let',
            'when-not',
            'when-some',
            'while',
            'with-bindings',
            'with-bindings*',
            'with-in-str',
            'with-loading-context',
            'with-local-vars',
            'with-meta',
            'with-open',
            'with-out-str',
            'with-precision',
            'with-redefs',
            'with-redefs-fn',
          ];
          e.registerHelper('hintWords', 'clojure', [].concat(r, n, i));
          var o = b(r);
          var s = b(n);
          var l = b(i);
          var u = b(a);
          var c = /^(?:[\\\[\]\s"(),;@^`{}~]|$)/;
          var f =
            /^(?:[+\-]?\d+(?:(?:N|(?:[eE][+\-]?\d+))|(?:\.?\d*(?:M|(?:[eE][+\-]?\d+))?)|\/\d+|[xX][0-9a-fA-F]+|r[0-9a-zA-Z]+)?(?=[\\\[\]\s"#'(),;@^`{}~]|$))/;
          var d =
            /^(?:\\(?:backspace|formfeed|newline|return|space|tab|o[0-7]{3}|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{4}|.)?(?=[\\\[\]\s"(),;@^`{}~]|$))/;
          var m =
            /^(?:(?:[^\\\/\[\]\d\s"#'(),;@^`{}~.][^\\\[\]\s"(),;@^`{}~.\/]*(?:\.[^\\\/\[\]\d\s"#'(),;@^`{}~.][^\\\[\]\s"(),;@^`{}~.\/]*)*\/)?(?:\/|[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*)*(?=[\\\[\]\s"(),;@^`{}~]|$))/;
          function p(e, t) {
            if (e.eatSpace() || e.eat(',')) return ['space', null];
            if (e.match(f)) return [null, 'number'];
            if (e.match(d)) return [null, 'string-2'];
            if (e.eat(/^"/)) return (t.tokenize = h)(e, t);
            if (e.eat(/^[(\[{]/)) return ['open', 'bracket'];
            if (e.eat(/^[)\]}]/)) return ['close', 'bracket'];
            if (e.eat(/^;/)) {
              e.skipToEnd();
              return ['space', 'comment'];
            }
            if (e.eat(/^[#'@^`~]/)) return [null, 'meta'];
            var r = e.match(m);
            var n = r && r[0];
            if (!n) {
              e.next();
              e.eatWhile(function (e) {
                return !v(e, c);
              });
              return [null, 'error'];
            }
            if (n === 'comment' && t.lastToken === '(') return (t.tokenize = g)(e, t);
            if (v(n, o) || n.charAt(0) === ':') return ['symbol', 'atom'];
            if (v(n, s) || v(n, l)) return ['symbol', 'keyword'];
            if (t.lastToken === '(') return ['symbol', 'builtin'];
            return ['symbol', 'variable'];
          }
          function h(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n === '"' && !r) {
                t.tokenize = p;
                break;
              }
              r = !r && n === '\\';
            }
            return [null, 'string'];
          }
          function g(e, t) {
            var r = 1;
            var n;
            while ((n = e.next())) {
              if (n === ')') r--;
              if (n === '(') r++;
              if (r === 0) {
                e.backUp(1);
                t.tokenize = p;
                break;
              }
            }
            return ['space', 'comment'];
          }
          function b(e) {
            var t = {};
            for (var r = 0; r < e.length; ++r) t[e[r]] = true;
            return t;
          }
          function v(e, t) {
            if (t instanceof RegExp) return t.test(e);
            if (t instanceof Object) return t.propertyIsEnumerable(e);
          }
          return {
            startState: function () {
              return {
                ctx: { prev: null, start: 0, indentTo: 0 },
                lastToken: null,
                tokenize: p,
              };
            },
            token: function (e, r) {
              if (e.sol() && typeof r.ctx.indentTo !== 'number')
                r.ctx.indentTo = r.ctx.start + 1;
              var n = r.tokenize(e, r);
              var i = n[0];
              var a = n[1];
              var o = e.current();
              if (i !== 'space') {
                if (r.lastToken === '(' && r.ctx.indentTo === null) {
                  if (i === 'symbol' && v(o, u))
                    r.ctx.indentTo = r.ctx.start + t.indentUnit;
                  else r.ctx.indentTo = 'next';
                } else if (r.ctx.indentTo === 'next') {
                  r.ctx.indentTo = e.column();
                }
                r.lastToken = o;
              }
              if (i === 'open')
                r.ctx = { prev: r.ctx, start: e.column(), indentTo: null };
              else if (i === 'close') r.ctx = r.ctx.prev || r.ctx;
              return a;
            },
            indent: function (e) {
              var t = e.ctx.indentTo;
              return typeof t === 'number' ? t : e.ctx.start + 1;
            },
            closeBrackets: { pairs: '()[]{}""' },
            lineComment: ';;',
          };
        });
        e.defineMIME('text/x-clojure', 'clojure');
        e.defineMIME('text/x-clojurescript', 'clojure');
        e.defineMIME('application/edn', 'clojure');
      });
    },
    33160: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('cmake', function () {
          var e = /({)?[a-zA-Z0-9_]+(})?/;
          function t(e, t) {
            var r,
              n,
              i = false;
            while (!e.eol() && (r = e.next()) != t.pending) {
              if (r === '$' && n != '\\' && t.pending == '"') {
                i = true;
                break;
              }
              n = r;
            }
            if (i) {
              e.backUp(1);
            }
            if (r == t.pending) {
              t.continueString = false;
            } else {
              t.continueString = true;
            }
            return 'string';
          }
          function r(r, n) {
            var i = r.next();
            if (i === '$') {
              if (r.match(e)) {
                return 'variable-2';
              }
              return 'variable';
            }
            if (n.continueString) {
              r.backUp(1);
              return t(r, n);
            }
            if (r.match(/(\s+)?\w+\(/) || r.match(/(\s+)?\w+\ \(/)) {
              r.backUp(1);
              return 'def';
            }
            if (i == '#') {
              r.skipToEnd();
              return 'comment';
            }
            if (i == "'" || i == '"') {
              n.pending = i;
              return t(r, n);
            }
            if (i == '(' || i == ')') {
              return 'bracket';
            }
            if (i.match(/[0-9]/)) {
              return 'number';
            }
            r.eatWhile(/[\w-]/);
            return null;
          }
          return {
            startState: function () {
              var e = {};
              e.inDefinition = false;
              e.inInclude = false;
              e.continueString = false;
              e.pending = false;
              return e;
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return r(e, t);
            },
          };
        });
        e.defineMIME('text/x-cmake', 'cmake');
      });
    },
    65542: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('cobol', function () {
          var e = 'builtin',
            t = 'comment',
            r = 'string',
            n = 'atom',
            i = 'number',
            a = 'keyword',
            o = 'header',
            s = 'def',
            l = 'link';
          function u(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var c = u('TRUE FALSE ZEROES ZEROS ZERO SPACES SPACE LOW-VALUE LOW-VALUES ');
          var f = u(
            'ACCEPT ACCESS ACQUIRE ADD ADDRESS ' +
              'ADVANCING AFTER ALIAS ALL ALPHABET ' +
              'ALPHABETIC ALPHABETIC-LOWER ALPHABETIC-UPPER ALPHANUMERIC ALPHANUMERIC-EDITED ' +
              'ALSO ALTER ALTERNATE AND ANY ' +
              'ARE AREA AREAS ARITHMETIC ASCENDING ' +
              'ASSIGN AT ATTRIBUTE AUTHOR AUTO ' +
              'AUTO-SKIP AUTOMATIC B-AND B-EXOR B-LESS ' +
              'B-NOT B-OR BACKGROUND-COLOR BACKGROUND-COLOUR BEEP ' +
              'BEFORE BELL BINARY BIT BITS ' +
              'BLANK BLINK BLOCK BOOLEAN BOTTOM ' +
              'BY CALL CANCEL CD CF ' +
              'CH CHARACTER CHARACTERS CLASS CLOCK-UNITS ' +
              'CLOSE COBOL CODE CODE-SET COL ' +
              'COLLATING COLUMN COMMA COMMIT COMMITMENT ' +
              'COMMON COMMUNICATION COMP COMP-0 COMP-1 ' +
              'COMP-2 COMP-3 COMP-4 COMP-5 COMP-6 ' +
              'COMP-7 COMP-8 COMP-9 COMPUTATIONAL COMPUTATIONAL-0 ' +
              'COMPUTATIONAL-1 COMPUTATIONAL-2 COMPUTATIONAL-3 COMPUTATIONAL-4 COMPUTATIONAL-5 ' +
              'COMPUTATIONAL-6 COMPUTATIONAL-7 COMPUTATIONAL-8 COMPUTATIONAL-9 COMPUTE ' +
              'CONFIGURATION CONNECT CONSOLE CONTAINED CONTAINS ' +
              'CONTENT CONTINUE CONTROL CONTROL-AREA CONTROLS ' +
              'CONVERTING COPY CORR CORRESPONDING COUNT ' +
              'CRT CRT-UNDER CURRENCY CURRENT CURSOR ' +
              'DATA DATE DATE-COMPILED DATE-WRITTEN DAY ' +
              'DAY-OF-WEEK DB DB-ACCESS-CONTROL-KEY DB-DATA-NAME DB-EXCEPTION ' +
              'DB-FORMAT-NAME DB-RECORD-NAME DB-SET-NAME DB-STATUS DBCS ' +
              'DBCS-EDITED DE DEBUG-CONTENTS DEBUG-ITEM DEBUG-LINE ' +
              'DEBUG-NAME DEBUG-SUB-1 DEBUG-SUB-2 DEBUG-SUB-3 DEBUGGING ' +
              'DECIMAL-POINT DECLARATIVES DEFAULT DELETE DELIMITED ' +
              'DELIMITER DEPENDING DESCENDING DESCRIBED DESTINATION ' +
              'DETAIL DISABLE DISCONNECT DISPLAY DISPLAY-1 ' +
              'DISPLAY-2 DISPLAY-3 DISPLAY-4 DISPLAY-5 DISPLAY-6 ' +
              'DISPLAY-7 DISPLAY-8 DISPLAY-9 DIVIDE DIVISION ' +
              'DOWN DROP DUPLICATE DUPLICATES DYNAMIC ' +
              'EBCDIC EGI EJECT ELSE EMI ' +
              'EMPTY EMPTY-CHECK ENABLE END END. END-ACCEPT END-ACCEPT. ' +
              'END-ADD END-CALL END-COMPUTE END-DELETE END-DISPLAY ' +
              'END-DIVIDE END-EVALUATE END-IF END-INVOKE END-MULTIPLY ' +
              'END-OF-PAGE END-PERFORM END-READ END-RECEIVE END-RETURN ' +
              'END-REWRITE END-SEARCH END-START END-STRING END-SUBTRACT ' +
              'END-UNSTRING END-WRITE END-XML ENTER ENTRY ' +
              'ENVIRONMENT EOP EQUAL EQUALS ERASE ' +
              'ERROR ESI EVALUATE EVERY EXCEEDS ' +
              'EXCEPTION EXCLUSIVE EXIT EXTEND EXTERNAL ' +
              'EXTERNALLY-DESCRIBED-KEY FD FETCH FILE FILE-CONTROL ' +
              'FILE-STREAM FILES FILLER FINAL FIND ' +
              'FINISH FIRST FOOTING FOR FOREGROUND-COLOR ' +
              'FOREGROUND-COLOUR FORMAT FREE FROM FULL ' +
              'FUNCTION GENERATE GET GIVING GLOBAL ' +
              'GO GOBACK GREATER GROUP HEADING ' +
              'HIGH-VALUE HIGH-VALUES HIGHLIGHT I-O I-O-CONTROL ' +
              'ID IDENTIFICATION IF IN INDEX ' +
              'INDEX-1 INDEX-2 INDEX-3 INDEX-4 INDEX-5 ' +
              'INDEX-6 INDEX-7 INDEX-8 INDEX-9 INDEXED ' +
              'INDIC INDICATE INDICATOR INDICATORS INITIAL ' +
              'INITIALIZE INITIATE INPUT INPUT-OUTPUT INSPECT ' +
              'INSTALLATION INTO INVALID INVOKE IS ' +
              'JUST JUSTIFIED KANJI KEEP KEY ' +
              'LABEL LAST LD LEADING LEFT ' +
              'LEFT-JUSTIFY LENGTH LENGTH-CHECK LESS LIBRARY ' +
              'LIKE LIMIT LIMITS LINAGE LINAGE-COUNTER ' +
              'LINE LINE-COUNTER LINES LINKAGE LOCAL-STORAGE ' +
              'LOCALE LOCALLY LOCK ' +
              'MEMBER MEMORY MERGE MESSAGE METACLASS ' +
              'MODE MODIFIED MODIFY MODULES MOVE ' +
              'MULTIPLE MULTIPLY NATIONAL NATIVE NEGATIVE ' +
              'NEXT NO NO-ECHO NONE NOT ' +
              'NULL NULL-KEY-MAP NULL-MAP NULLS NUMBER ' +
              'NUMERIC NUMERIC-EDITED OBJECT OBJECT-COMPUTER OCCURS ' +
              'OF OFF OMITTED ON ONLY ' +
              'OPEN OPTIONAL OR ORDER ORGANIZATION ' +
              'OTHER OUTPUT OVERFLOW OWNER PACKED-DECIMAL ' +
              'PADDING PAGE PAGE-COUNTER PARSE PERFORM ' +
              'PF PH PIC PICTURE PLUS ' +
              'POINTER POSITION POSITIVE PREFIX PRESENT ' +
              'PRINTING PRIOR PROCEDURE PROCEDURE-POINTER PROCEDURES ' +
              'PROCEED PROCESS PROCESSING PROGRAM PROGRAM-ID ' +
              'PROMPT PROTECTED PURGE QUEUE QUOTE ' +
              'QUOTES RANDOM RD READ READY ' +
              'REALM RECEIVE RECONNECT RECORD RECORD-NAME ' +
              'RECORDS RECURSIVE REDEFINES REEL REFERENCE ' +
              'REFERENCE-MONITOR REFERENCES RELATION RELATIVE RELEASE ' +
              'REMAINDER REMOVAL RENAMES REPEATED REPLACE ' +
              'REPLACING REPORT REPORTING REPORTS REPOSITORY ' +
              'REQUIRED RERUN RESERVE RESET RETAINING ' +
              'RETRIEVAL RETURN RETURN-CODE RETURNING REVERSE-VIDEO ' +
              'REVERSED REWIND REWRITE RF RH ' +
              'RIGHT RIGHT-JUSTIFY ROLLBACK ROLLING ROUNDED ' +
              'RUN SAME SCREEN SD SEARCH ' +
              'SECTION SECURE SECURITY SEGMENT SEGMENT-LIMIT ' +
              'SELECT SEND SENTENCE SEPARATE SEQUENCE ' +
              'SEQUENTIAL SET SHARED SIGN SIZE ' +
              'SKIP1 SKIP2 SKIP3 SORT SORT-MERGE ' +
              'SORT-RETURN SOURCE SOURCE-COMPUTER SPACE-FILL ' +
              'SPECIAL-NAMES STANDARD STANDARD-1 STANDARD-2 ' +
              'START STARTING STATUS STOP STORE ' +
              'STRING SUB-QUEUE-1 SUB-QUEUE-2 SUB-QUEUE-3 SUB-SCHEMA ' +
              'SUBFILE SUBSTITUTE SUBTRACT SUM SUPPRESS ' +
              'SYMBOLIC SYNC SYNCHRONIZED SYSIN SYSOUT ' +
              'TABLE TALLYING TAPE TENANT TERMINAL ' +
              'TERMINATE TEST TEXT THAN THEN ' +
              'THROUGH THRU TIME TIMES TITLE ' +
              'TO TOP TRAILING TRAILING-SIGN TRANSACTION ' +
              'TYPE TYPEDEF UNDERLINE UNEQUAL UNIT ' +
              'UNSTRING UNTIL UP UPDATE UPON ' +
              'USAGE USAGE-MODE USE USING VALID ' +
              'VALIDATE VALUE VALUES VARYING VLR ' +
              'WAIT WHEN WHEN-COMPILED WITH WITHIN ' +
              'WORDS WORKING-STORAGE WRITE XML XML-CODE ' +
              'XML-EVENT XML-NTEXT XML-TEXT ZERO ZERO-FILL '
          );
          var d = u('- * ** / + < <= = > >= ');
          var m = {
            digit: /\d/,
            digit_or_colon: /[\d:]/,
            hex: /[0-9a-f]/i,
            sign: /[+-]/,
            exponent: /e/i,
            keyword_char: /[^\s\(\[\;\)\]]/,
            symbol: /[\w*+\-]/,
          };
          function p(e, t) {
            if (e === '0' && t.eat(/x/i)) {
              t.eatWhile(m.hex);
              return true;
            }
            if ((e == '+' || e == '-') && m.digit.test(t.peek())) {
              t.eat(m.sign);
              e = t.next();
            }
            if (m.digit.test(e)) {
              t.eat(e);
              t.eatWhile(m.digit);
              if ('.' == t.peek()) {
                t.eat('.');
                t.eatWhile(m.digit);
              }
              if (t.eat(m.exponent)) {
                t.eat(m.sign);
                t.eatWhile(m.digit);
              }
              return true;
            }
            return false;
          }
          return {
            startState: function () {
              return { indentStack: null, indentation: 0, mode: false };
            },
            token: function (u, h) {
              if (h.indentStack == null && u.sol()) {
                h.indentation = 6;
              }
              if (u.eatSpace()) {
                return null;
              }
              var g = null;
              switch (h.mode) {
                case 'string':
                  var b = false;
                  while ((b = u.next()) != null) {
                    if (b == '"' || b == "'") {
                      h.mode = false;
                      break;
                    }
                  }
                  g = r;
                  break;
                default:
                  var v = u.next();
                  var k = u.column();
                  if (k >= 0 && k <= 5) {
                    g = s;
                  } else if (k >= 72 && k <= 79) {
                    u.skipToEnd();
                    g = o;
                  } else if (v == '*' && k == 6) {
                    u.skipToEnd();
                    g = t;
                  } else if (v == '"' || v == "'") {
                    h.mode = 'string';
                    g = r;
                  } else if (v == "'" && !m.digit_or_colon.test(u.peek())) {
                    g = n;
                  } else if (v == '.') {
                    g = l;
                  } else if (p(v, u)) {
                    g = i;
                  } else {
                    if (u.current().match(m.symbol)) {
                      while (k < 71) {
                        if (u.eat(m.symbol) === undefined) {
                          break;
                        } else {
                          k++;
                        }
                      }
                    }
                    if (f && f.propertyIsEnumerable(u.current().toUpperCase())) {
                      g = a;
                    } else if (d && d.propertyIsEnumerable(u.current().toUpperCase())) {
                      g = e;
                    } else if (c && c.propertyIsEnumerable(u.current().toUpperCase())) {
                      g = n;
                    } else g = null;
                  }
              }
              return g;
            },
            indent: function (e) {
              if (e.indentStack == null) return e.indentation;
              return e.indentStack.indent;
            },
          };
        });
        e.defineMIME('text/x-cobol', 'cobol');
      });
    },
    90044: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('coffeescript', function (e, t) {
          var r = 'error';
          function n(e) {
            return new RegExp('^((' + e.join(')|(') + '))\\b');
          }
          var i =
            /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/;
          var a = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/;
          var o = /^[_A-Za-z$][_A-Za-z$0-9]*/;
          var s = /^@[_A-Za-z$][_A-Za-z$0-9]*/;
          var l = n(['and', 'or', 'not', 'is', 'isnt', 'in', 'instanceof', 'typeof']);
          var u = [
            'for',
            'while',
            'loop',
            'if',
            'unless',
            'else',
            'switch',
            'try',
            'catch',
            'finally',
            'class',
          ];
          var c = [
            'break',
            'by',
            'continue',
            'debugger',
            'delete',
            'do',
            'in',
            'of',
            'new',
            'return',
            'then',
            'this',
            '@',
            'throw',
            'when',
            'until',
            'extends',
          ];
          var f = n(u.concat(c));
          u = n(u);
          var d = /^('{3}|\"{3}|['\"])/;
          var m = /^(\/{3}|\/)/;
          var p = [
            'Infinity',
            'NaN',
            'undefined',
            'null',
            'true',
            'false',
            'on',
            'off',
            'yes',
            'no',
          ];
          var h = n(p);
          function g(e, t) {
            if (e.sol()) {
              if (t.scope.align === null) t.scope.align = false;
              var n = t.scope.offset;
              if (e.eatSpace()) {
                var u = e.indentation();
                if (u > n && t.scope.type == 'coffee') {
                  return 'indent';
                } else if (u < n) {
                  return 'dedent';
                }
                return null;
              } else {
                if (n > 0) {
                  _(e, t);
                }
              }
            }
            if (e.eatSpace()) {
              return null;
            }
            var c = e.peek();
            if (e.match('####')) {
              e.skipToEnd();
              return 'comment';
            }
            if (e.match('###')) {
              t.tokenize = v;
              return t.tokenize(e, t);
            }
            if (c === '#') {
              e.skipToEnd();
              return 'comment';
            }
            if (e.match(/^-?[0-9\.]/, false)) {
              var p = false;
              if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)) {
                p = true;
              }
              if (e.match(/^-?\d+\.\d*/)) {
                p = true;
              }
              if (e.match(/^-?\.\d+/)) {
                p = true;
              }
              if (p) {
                if (e.peek() == '.') {
                  e.backUp(1);
                }
                return 'number';
              }
              var g = false;
              if (e.match(/^-?0x[0-9a-f]+/i)) {
                g = true;
              }
              if (e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)) {
                g = true;
              }
              if (e.match(/^-?0(?![\dx])/i)) {
                g = true;
              }
              if (g) {
                return 'number';
              }
            }
            if (e.match(d)) {
              t.tokenize = b(e.current(), false, 'string');
              return t.tokenize(e, t);
            }
            if (e.match(m)) {
              if (e.current() != '/' || e.match(/^.*\//, false)) {
                t.tokenize = b(e.current(), true, 'string-2');
                return t.tokenize(e, t);
              } else {
                e.backUp(1);
              }
            }
            if (e.match(i) || e.match(l)) {
              return 'operator';
            }
            if (e.match(a)) {
              return 'punctuation';
            }
            if (e.match(h)) {
              return 'atom';
            }
            if (e.match(s) || (t.prop && e.match(o))) {
              return 'property';
            }
            if (e.match(f)) {
              return 'keyword';
            }
            if (e.match(o)) {
              return 'variable';
            }
            e.next();
            return r;
          }
          function b(e, n, i) {
            return function (a, o) {
              while (!a.eol()) {
                a.eatWhile(/[^'"\/\\]/);
                if (a.eat('\\')) {
                  a.next();
                  if (n && a.eol()) {
                    return i;
                  }
                } else if (a.match(e)) {
                  o.tokenize = g;
                  return i;
                } else {
                  a.eat(/['"\/]/);
                }
              }
              if (n) {
                if (t.singleLineStringErrors) {
                  i = r;
                } else {
                  o.tokenize = g;
                }
              }
              return i;
            };
          }
          function v(e, t) {
            while (!e.eol()) {
              e.eatWhile(/[^#]/);
              if (e.match('###')) {
                t.tokenize = g;
                break;
              }
              e.eatWhile('#');
            }
            return 'comment';
          }
          function k(t, r, n) {
            n = n || 'coffee';
            var i = 0,
              a = false,
              o = null;
            for (var s = r.scope; s; s = s.prev) {
              if (s.type === 'coffee' || s.type == '}') {
                i = s.offset + e.indentUnit;
                break;
              }
            }
            if (n !== 'coffee') {
              a = null;
              o = t.column() + t.current().length;
            } else if (r.scope.align) {
              r.scope.align = false;
            }
            r.scope = { offset: i, type: n, prev: r.scope, align: a, alignOffset: o };
          }
          function _(e, t) {
            if (!t.scope.prev) return;
            if (t.scope.type === 'coffee') {
              var r = e.indentation();
              var n = false;
              for (var i = t.scope; i; i = i.prev) {
                if (r === i.offset) {
                  n = true;
                  break;
                }
              }
              if (!n) {
                return true;
              }
              while (t.scope.prev && t.scope.offset !== r) {
                t.scope = t.scope.prev;
              }
              return false;
            } else {
              t.scope = t.scope.prev;
              return false;
            }
          }
          function x(e, t) {
            var n = t.tokenize(e, t);
            var i = e.current();
            if (i === 'return') {
              t.dedent = true;
            }
            if (((i === '->' || i === '=>') && e.eol()) || n === 'indent') {
              k(e, t);
            }
            var a = '[({'.indexOf(i);
            if (a !== -1) {
              k(e, t, '])}'.slice(a, a + 1));
            }
            if (u.exec(i)) {
              k(e, t);
            }
            if (i == 'then') {
              _(e, t);
            }
            if (n === 'dedent') {
              if (_(e, t)) {
                return r;
              }
            }
            a = '])}'.indexOf(i);
            if (a !== -1) {
              while (t.scope.type == 'coffee' && t.scope.prev) t.scope = t.scope.prev;
              if (t.scope.type == i) t.scope = t.scope.prev;
            }
            if (t.dedent && e.eol()) {
              if (t.scope.type == 'coffee' && t.scope.prev) t.scope = t.scope.prev;
              t.dedent = false;
            }
            return n;
          }
          var y = {
            startState: function (e) {
              return {
                tokenize: g,
                scope: { offset: e || 0, type: 'coffee', prev: null, align: false },
                prop: false,
                dedent: 0,
              };
            },
            token: function (e, t) {
              var r = t.scope.align === null && t.scope;
              if (r && e.sol()) r.align = false;
              var n = x(e, t);
              if (n && n != 'comment') {
                if (r) r.align = true;
                t.prop = n == 'punctuation' && e.current() == '.';
              }
              return n;
            },
            indent: function (e, t) {
              if (e.tokenize != g) return 0;
              var r = e.scope;
              var n = t && '])}'.indexOf(t.charAt(0)) > -1;
              if (n) while (r.type == 'coffee' && r.prev) r = r.prev;
              var i = n && r.type === t.charAt(0);
              if (r.align) return r.alignOffset - (i ? 1 : 0);
              else return (i ? r.prev : r).offset;
            },
            lineComment: '#',
            fold: 'indent',
          };
          return y;
        });
        e.defineMIME('application/vnd.coffeescript', 'coffeescript');
        e.defineMIME('text/x-coffeescript', 'coffeescript');
        e.defineMIME('text/coffeescript', 'coffeescript');
      });
    },
    29073: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('commonlisp', function (e) {
          var t =
            /^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/;
          var r = /^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/;
          var n =
            /^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/;
          var i = /[^\s'`,@()\[\]";]/;
          var a;
          function o(e) {
            var t;
            while ((t = e.next())) {
              if (t == '\\') e.next();
              else if (!i.test(t)) {
                e.backUp(1);
                break;
              }
            }
            return e.current();
          }
          function s(e, i) {
            if (e.eatSpace()) {
              a = 'ws';
              return null;
            }
            if (e.match(n)) return 'number';
            var s = e.next();
            if (s == '\\') s = e.next();
            if (s == '"') return (i.tokenize = l)(e, i);
            else if (s == '(') {
              a = 'open';
              return 'bracket';
            } else if (s == ')' || s == ']') {
              a = 'close';
              return 'bracket';
            } else if (s == ';') {
              e.skipToEnd();
              a = 'ws';
              return 'comment';
            } else if (/['`,@]/.test(s)) return null;
            else if (s == '|') {
              if (e.skipTo('|')) {
                e.next();
                return 'symbol';
              } else {
                e.skipToEnd();
                return 'error';
              }
            } else if (s == '#') {
              var s = e.next();
              if (s == '(') {
                a = 'open';
                return 'bracket';
              } else if (/[+\-=\.']/.test(s)) return null;
              else if (/\d/.test(s) && e.match(/^\d*#/)) return null;
              else if (s == '|') return (i.tokenize = u)(e, i);
              else if (s == ':') {
                o(e);
                return 'meta';
              } else if (s == '\\') {
                e.next();
                o(e);
                return 'string-2';
              } else return 'error';
            } else {
              var c = o(e);
              if (c == '.') return null;
              a = 'symbol';
              if (c == 'nil' || c == 't' || c.charAt(0) == ':') return 'atom';
              if (i.lastType == 'open' && (t.test(c) || r.test(c))) return 'keyword';
              if (c.charAt(0) == '&') return 'variable-2';
              return 'variable';
            }
          }
          function l(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '"' && !r) {
                t.tokenize = s;
                break;
              }
              r = !r && n == '\\';
            }
            return 'string';
          }
          function u(e, t) {
            var r, n;
            while ((r = e.next())) {
              if (r == '#' && n == '|') {
                t.tokenize = s;
                break;
              }
              n = r;
            }
            a = 'ws';
            return 'comment';
          }
          return {
            startState: function () {
              return {
                ctx: { prev: null, start: 0, indentTo: 0 },
                lastType: null,
                tokenize: s,
              };
            },
            token: function (t, n) {
              if (t.sol() && typeof n.ctx.indentTo != 'number')
                n.ctx.indentTo = n.ctx.start + 1;
              a = null;
              var i = n.tokenize(t, n);
              if (a != 'ws') {
                if (n.ctx.indentTo == null) {
                  if (a == 'symbol' && r.test(t.current()))
                    n.ctx.indentTo = n.ctx.start + e.indentUnit;
                  else n.ctx.indentTo = 'next';
                } else if (n.ctx.indentTo == 'next') {
                  n.ctx.indentTo = t.column();
                }
                n.lastType = a;
              }
              if (a == 'open')
                n.ctx = { prev: n.ctx, start: t.column(), indentTo: null };
              else if (a == 'close') n.ctx = n.ctx.prev || n.ctx;
              return i;
            },
            indent: function (e, t) {
              var r = e.ctx.indentTo;
              return typeof r == 'number' ? r : e.ctx.start + 1;
            },
            closeBrackets: { pairs: '()[]{}""' },
            lineComment: ';;',
            blockCommentStart: '#|',
            blockCommentEnd: '|#',
          };
        });
        e.defineMIME('text/x-common-lisp', 'commonlisp');
      });
    },
    76149: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('crystal', function (e) {
          function t(e, t) {
            return new RegExp(
              (t ? '' : '^') + '(?:' + e.join('|') + ')' + (t ? '$' : '\\b')
            );
          }
          function r(e, t, r) {
            r.tokenize.push(e);
            return e(t, r);
          }
          var n = /^(?:[-+/%|&^]|\*\*?|[<>]{2})/;
          var i = /^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/;
          var a = /^(?:\[\][?=]?)/;
          var o = /^(?:\.(?:\.{2})?|->|[?:])/;
          var s = /^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;
          var l = /^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;
          var u = t([
            'abstract',
            'alias',
            'as',
            'asm',
            'begin',
            'break',
            'case',
            'class',
            'def',
            'do',
            'else',
            'elsif',
            'end',
            'ensure',
            'enum',
            'extend',
            'for',
            'fun',
            'if',
            'include',
            'instance_sizeof',
            'lib',
            'macro',
            'module',
            'next',
            'of',
            'out',
            'pointerof',
            'private',
            'protected',
            'rescue',
            'return',
            'require',
            'select',
            'sizeof',
            'struct',
            'super',
            'then',
            'type',
            'typeof',
            'uninitialized',
            'union',
            'unless',
            'until',
            'when',
            'while',
            'with',
            'yield',
            '__DIR__',
            '__END_LINE__',
            '__FILE__',
            '__LINE__',
          ]);
          var c = t(['true', 'false', 'nil', 'self']);
          var f = [
            'def',
            'fun',
            'macro',
            'class',
            'module',
            'struct',
            'lib',
            'enum',
            'union',
            'do',
            'for',
          ];
          var d = t(f);
          var m = ['if', 'unless', 'case', 'while', 'until', 'begin', 'then'];
          var p = t(m);
          var h = ['end', 'else', 'elsif', 'rescue', 'ensure'];
          var g = t(h);
          var b = ['\\)', '\\}', '\\]'];
          var v = new RegExp('^(?:' + b.join('|') + ')$');
          var k = {
            def: S,
            fun: S,
            macro: E,
            class: T,
            module: T,
            struct: T,
            lib: T,
            enum: T,
            union: T,
          };
          var _ = { '[': ']', '{': '}', '(': ')', '<': '>' };
          function x(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            if (t.lastToken != '\\' && e.match('{%', false)) {
              return r(w('%', '%'), e, t);
            }
            if (t.lastToken != '\\' && e.match('{{', false)) {
              return r(w('{', '}'), e, t);
            }
            if (e.peek() == '#') {
              e.skipToEnd();
              return 'comment';
            }
            var f;
            if (e.match(s)) {
              e.eat(/[?!]/);
              f = e.current();
              if (e.eat(':')) {
                return 'atom';
              } else if (t.lastToken == '.') {
                return 'property';
              } else if (u.test(f)) {
                if (d.test(f)) {
                  if (
                    !(f == 'fun' && t.blocks.indexOf('lib') >= 0) &&
                    !(f == 'def' && t.lastToken == 'abstract')
                  ) {
                    t.blocks.push(f);
                    t.currentIndent += 1;
                  }
                } else if ((t.lastStyle == 'operator' || !t.lastStyle) && p.test(f)) {
                  t.blocks.push(f);
                  t.currentIndent += 1;
                } else if (f == 'end') {
                  t.blocks.pop();
                  t.currentIndent -= 1;
                }
                if (k.hasOwnProperty(f)) {
                  t.tokenize.push(k[f]);
                }
                return 'keyword';
              } else if (c.test(f)) {
                return 'atom';
              }
              return 'variable';
            }
            if (e.eat('@')) {
              if (e.peek() == '[') {
                return r(y('[', ']', 'meta'), e, t);
              }
              e.eat('@');
              e.match(s) || e.match(l);
              return 'variable-2';
            }
            if (e.match(l)) {
              return 'tag';
            }
            if (e.eat(':')) {
              if (e.eat('"')) {
                return r(I('"', 'atom', false), e, t);
              } else if (
                e.match(s) ||
                e.match(l) ||
                e.match(n) ||
                e.match(i) ||
                e.match(a)
              ) {
                return 'atom';
              }
              e.eat(':');
              return 'operator';
            }
            if (e.eat('"')) {
              return r(I('"', 'string', true), e, t);
            }
            if (e.peek() == '%') {
              var m = 'string';
              var h = true;
              var g;
              if (e.match('%r')) {
                m = 'string-2';
                g = e.next();
              } else if (e.match('%w')) {
                h = false;
                g = e.next();
              } else if (e.match('%q')) {
                h = false;
                g = e.next();
              } else {
                if ((g = e.match(/^%([^\w\s=])/))) {
                  g = g[1];
                } else if (e.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/)) {
                  return 'meta';
                } else if (e.eat('%')) {
                  return 'operator';
                }
              }
              if (_.hasOwnProperty(g)) {
                g = _[g];
              }
              return r(I(g, m, h), e, t);
            }
            if ((f = e.match(/^<<-('?)([A-Z]\w*)\1/))) {
              return r(A(f[2], !f[1]), e, t);
            }
            if (e.eat("'")) {
              e.match(
                /^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/
              );
              e.eat("'");
              return 'atom';
            }
            if (e.eat('0')) {
              if (e.eat('x')) {
                e.match(/^[0-9a-fA-F_]+/);
              } else if (e.eat('o')) {
                e.match(/^[0-7_]+/);
              } else if (e.eat('b')) {
                e.match(/^[01_]+/);
              }
              return 'number';
            }
            if (e.eat(/^\d/)) {
              e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/);
              return 'number';
            }
            if (e.match(n)) {
              e.eat('=');
              return 'operator';
            }
            if (e.match(i) || e.match(o)) {
              return 'operator';
            }
            if ((f = e.match(/[({[]/, false))) {
              f = f[0];
              return r(y(f, _[f], null), e, t);
            }
            if (e.eat('\\')) {
              e.next();
              return 'meta';
            }
            e.next();
            return null;
          }
          function y(e, t, r, n) {
            return function (i, a) {
              if (!n && i.match(e)) {
                a.tokenize[a.tokenize.length - 1] = y(e, t, r, true);
                a.currentIndent += 1;
                return r;
              }
              var o = x(i, a);
              if (i.current() === t) {
                a.tokenize.pop();
                a.currentIndent -= 1;
                o = r;
              }
              return o;
            };
          }
          function w(e, t, r) {
            return function (n, i) {
              if (!r && n.match('{' + e)) {
                i.currentIndent += 1;
                i.tokenize[i.tokenize.length - 1] = w(e, t, true);
                return 'meta';
              }
              if (n.match(t + '}')) {
                i.currentIndent -= 1;
                i.tokenize.pop();
                return 'meta';
              }
              return x(n, i);
            };
          }
          function E(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            var r;
            if ((r = e.match(s))) {
              if (r == 'def') {
                return 'keyword';
              }
              e.eat(/[?!]/);
            }
            t.tokenize.pop();
            return 'def';
          }
          function S(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            if (e.match(s)) {
              e.eat(/[!?]/);
            } else {
              e.match(n) || e.match(i) || e.match(a);
            }
            t.tokenize.pop();
            return 'def';
          }
          function T(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            e.match(l);
            t.tokenize.pop();
            return 'def';
          }
          function I(e, t, r) {
            return function (n, i) {
              var a = false;
              while (n.peek()) {
                if (!a) {
                  if (n.match('{%', false)) {
                    i.tokenize.push(w('%', '%'));
                    return t;
                  }
                  if (n.match('{{', false)) {
                    i.tokenize.push(w('{', '}'));
                    return t;
                  }
                  if (r && n.match('#{', false)) {
                    i.tokenize.push(y('#{', '}', 'meta'));
                    return t;
                  }
                  var o = n.next();
                  if (o == e) {
                    i.tokenize.pop();
                    return t;
                  }
                  a = r && o == '\\';
                } else {
                  n.next();
                  a = false;
                }
              }
              return t;
            };
          }
          function A(e, t) {
            return function (r, n) {
              if (r.sol()) {
                r.eatSpace();
                if (r.match(e)) {
                  n.tokenize.pop();
                  return 'string';
                }
              }
              var i = false;
              while (r.peek()) {
                if (!i) {
                  if (r.match('{%', false)) {
                    n.tokenize.push(w('%', '%'));
                    return 'string';
                  }
                  if (r.match('{{', false)) {
                    n.tokenize.push(w('{', '}'));
                    return 'string';
                  }
                  if (t && r.match('#{', false)) {
                    n.tokenize.push(y('#{', '}', 'meta'));
                    return 'string';
                  }
                  i = t && r.next() == '\\';
                } else {
                  r.next();
                  i = false;
                }
              }
              return 'string';
            };
          }
          return {
            startState: function () {
              return {
                tokenize: [x],
                currentIndent: 0,
                lastToken: null,
                lastStyle: null,
                blocks: [],
              };
            },
            token: function (e, t) {
              var r = t.tokenize[t.tokenize.length - 1](e, t);
              var n = e.current();
              if (r && r != 'comment') {
                t.lastToken = n;
                t.lastStyle = r;
              }
              return r;
            },
            indent: function (t, r) {
              r = r.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g, '');
              if (g.test(r) || v.test(r)) {
                return e.indentUnit * (t.currentIndent - 1);
              }
              return e.indentUnit * t.currentIndent;
            },
            fold: 'indent',
            electricInput: t(b.concat(h), true),
            lineComment: '#',
          };
        });
        e.defineMIME('text/x-crystal', 'crystal');
      });
    },
    88441: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = function (e) {
          return new RegExp('^(?:' + e.join('|') + ')$', 'i');
        };
        e.defineMode('cypher', function (r) {
          var n = function (e) {
            var t = e.next();
            if (t === '"') {
              e.match(/^[^"]*"/);
              return 'string';
            }
            if (t === "'") {
              e.match(/^[^']*'/);
              return 'string';
            }
            if (/[{}\(\),\.;\[\]]/.test(t)) {
              s = t;
              return 'node';
            } else if (t === '/' && e.eat('/')) {
              e.skipToEnd();
              return 'comment';
            } else if (d.test(t)) {
              e.eatWhile(d);
              return null;
            } else {
              e.eatWhile(/[_\w\d]/);
              if (e.eat(':')) {
                e.eatWhile(/[\w\d_\-]/);
                return 'atom';
              }
              var r = e.current();
              if (l.test(r)) return 'builtin';
              if (u.test(r)) return 'def';
              if (c.test(r) || f.test(r)) return 'keyword';
              return 'variable';
            }
          };
          var i = function (e, t, r) {
            return (e.context = { prev: e.context, indent: e.indent, col: r, type: t });
          };
          var a = function (e) {
            e.indent = e.context.indent;
            return (e.context = e.context.prev);
          };
          var o = r.indentUnit;
          var s;
          var l = t([
            'abs',
            'acos',
            'allShortestPaths',
            'asin',
            'atan',
            'atan2',
            'avg',
            'ceil',
            'coalesce',
            'collect',
            'cos',
            'cot',
            'count',
            'degrees',
            'e',
            'endnode',
            'exp',
            'extract',
            'filter',
            'floor',
            'haversin',
            'head',
            'id',
            'keys',
            'labels',
            'last',
            'left',
            'length',
            'log',
            'log10',
            'lower',
            'ltrim',
            'max',
            'min',
            'node',
            'nodes',
            'percentileCont',
            'percentileDisc',
            'pi',
            'radians',
            'rand',
            'range',
            'reduce',
            'rel',
            'relationship',
            'relationships',
            'replace',
            'reverse',
            'right',
            'round',
            'rtrim',
            'shortestPath',
            'sign',
            'sin',
            'size',
            'split',
            'sqrt',
            'startnode',
            'stdev',
            'stdevp',
            'str',
            'substring',
            'sum',
            'tail',
            'tan',
            'timestamp',
            'toFloat',
            'toInt',
            'toString',
            'trim',
            'type',
            'upper',
          ]);
          var u = t([
            'all',
            'and',
            'any',
            'contains',
            'exists',
            'has',
            'in',
            'none',
            'not',
            'or',
            'single',
            'xor',
          ]);
          var c = t([
            'as',
            'asc',
            'ascending',
            'assert',
            'by',
            'case',
            'commit',
            'constraint',
            'create',
            'csv',
            'cypher',
            'delete',
            'desc',
            'descending',
            'detach',
            'distinct',
            'drop',
            'else',
            'end',
            'ends',
            'explain',
            'false',
            'fieldterminator',
            'foreach',
            'from',
            'headers',
            'in',
            'index',
            'is',
            'join',
            'limit',
            'load',
            'match',
            'merge',
            'null',
            'on',
            'optional',
            'order',
            'periodic',
            'profile',
            'remove',
            'return',
            'scan',
            'set',
            'skip',
            'start',
            'starts',
            'then',
            'true',
            'union',
            'unique',
            'unwind',
            'using',
            'when',
            'where',
            'with',
            'call',
            'yield',
          ]);
          var f = t([
            'access',
            'active',
            'assign',
            'all',
            'alter',
            'as',
            'catalog',
            'change',
            'copy',
            'create',
            'constraint',
            'constraints',
            'current',
            'database',
            'databases',
            'dbms',
            'default',
            'deny',
            'drop',
            'element',
            'elements',
            'exists',
            'from',
            'grant',
            'graph',
            'graphs',
            'if',
            'index',
            'indexes',
            'label',
            'labels',
            'management',
            'match',
            'name',
            'names',
            'new',
            'node',
            'nodes',
            'not',
            'of',
            'on',
            'or',
            'password',
            'populated',
            'privileges',
            'property',
            'read',
            'relationship',
            'relationships',
            'remove',
            'replace',
            'required',
            'revoke',
            'role',
            'roles',
            'set',
            'show',
            'start',
            'status',
            'stop',
            'suspended',
            'to',
            'traverse',
            'type',
            'types',
            'user',
            'users',
            'with',
            'write',
          ]);
          var d = /[*+\-<>=&|~%^]/;
          return {
            startState: function () {
              return { tokenize: n, context: null, indent: 0, col: 0 };
            },
            token: function (e, t) {
              if (e.sol()) {
                if (t.context && t.context.align == null) {
                  t.context.align = false;
                }
                t.indent = e.indentation();
              }
              if (e.eatSpace()) {
                return null;
              }
              var r = t.tokenize(e, t);
              if (
                r !== 'comment' &&
                t.context &&
                t.context.align == null &&
                t.context.type !== 'pattern'
              ) {
                t.context.align = true;
              }
              if (s === '(') {
                i(t, ')', e.column());
              } else if (s === '[') {
                i(t, ']', e.column());
              } else if (s === '{') {
                i(t, '}', e.column());
              } else if (/[\]\}\)]/.test(s)) {
                while (t.context && t.context.type === 'pattern') {
                  a(t);
                }
                if (t.context && s === t.context.type) {
                  a(t);
                }
              } else if (s === '.' && t.context && t.context.type === 'pattern') {
                a(t);
              } else if (/atom|string|variable/.test(r) && t.context) {
                if (/[\}\]]/.test(t.context.type)) {
                  i(t, 'pattern', e.column());
                } else if (t.context.type === 'pattern' && !t.context.align) {
                  t.context.align = true;
                  t.context.col = e.column();
                }
              }
              return r;
            },
            indent: function (t, r) {
              var n = r && r.charAt(0);
              var i = t.context;
              if (/[\]\}]/.test(n)) {
                while (i && i.type === 'pattern') {
                  i = i.prev;
                }
              }
              var a = i && n === i.type;
              if (!i) return 0;
              if (i.type === 'keywords') return e.commands.newlineAndIndent;
              if (i.align) return i.col + (a ? 0 : 1);
              return i.indent + (a ? 0 : o);
            },
          };
        });
        e.modeExtensions['cypher'] = {
          autoFormatLineBreaks: function (e) {
            var t, r, n;
            var r = e.split('\n');
            var n =
              /\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g;
            for (var t = 0; t < r.length; t++) r[t] = r[t].replace(n, ' \n$1 ').trim();
            return r.join('\n');
          },
        };
        e.defineMIME('application/x-cypher-query', 'cypher');
      });
    },
    49570: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('d', function (t, r) {
          var n = t.indentUnit,
            i = r.statementIndentUnit || n,
            a = r.keywords || {},
            o = r.builtin || {},
            s = r.blockKeywords || {},
            l = r.atoms || {},
            u = r.hooks || {},
            c = r.multiLineStrings;
          var f = /[+\-*&%=<>!?|\/]/;
          var d;
          function m(e, t) {
            var r = e.next();
            if (u[r]) {
              var n = u[r](e, t);
              if (n !== false) return n;
            }
            if (r == '"' || r == "'" || r == '`') {
              t.tokenize = p(r);
              return t.tokenize(e, t);
            }
            if (/[\[\]{}\(\),;\:\.]/.test(r)) {
              d = r;
              return null;
            }
            if (/\d/.test(r)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            }
            if (r == '/') {
              if (e.eat('+')) {
                t.tokenize = g;
                return g(e, t);
              }
              if (e.eat('*')) {
                t.tokenize = h;
                return h(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (f.test(r)) {
              e.eatWhile(f);
              return 'operator';
            }
            e.eatWhile(/[\w\$_\xa1-\uffff]/);
            var i = e.current();
            if (a.propertyIsEnumerable(i)) {
              if (s.propertyIsEnumerable(i)) d = 'newstatement';
              return 'keyword';
            }
            if (o.propertyIsEnumerable(i)) {
              if (s.propertyIsEnumerable(i)) d = 'newstatement';
              return 'builtin';
            }
            if (l.propertyIsEnumerable(i)) return 'atom';
            return 'variable';
          }
          function p(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !(n || c)) r.tokenize = null;
              return 'string';
            };
          }
          function h(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = null;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function g(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = null;
                break;
              }
              r = n == '+';
            }
            return 'comment';
          }
          function b(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function v(e, t, r) {
            var n = e.indented;
            if (e.context && e.context.type == 'statement') n = e.context.indented;
            return (e.context = new b(n, t, r, null, e.context));
          }
          function k(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new b((e || 0) - n, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) return null;
              d = null;
              var n = (t.tokenize || m)(e, t);
              if (n == 'comment' || n == 'meta') return n;
              if (r.align == null) r.align = true;
              if ((d == ';' || d == ':' || d == ',') && r.type == 'statement') k(t);
              else if (d == '{') v(t, e.column(), '}');
              else if (d == '[') v(t, e.column(), ']');
              else if (d == '(') v(t, e.column(), ')');
              else if (d == '}') {
                while (r.type == 'statement') r = k(t);
                if (r.type == '}') r = k(t);
                while (r.type == 'statement') r = k(t);
              } else if (d == r.type) k(t);
              else if (
                ((r.type == '}' || r.type == 'top') && d != ';') ||
                (r.type == 'statement' && d == 'newstatement')
              )
                v(t, e.column(), 'statement');
              t.startOfLine = false;
              return n;
            },
            indent: function (t, r) {
              if (t.tokenize != m && t.tokenize != null) return e.Pass;
              var a = t.context,
                o = r && r.charAt(0);
              if (a.type == 'statement' && o == '}') a = a.prev;
              var s = o == a.type;
              if (a.type == 'statement') return a.indented + (o == '{' ? 0 : i);
              else if (a.align) return a.column + (s ? 0 : 1);
              else return a.indented + (s ? 0 : n);
            },
            electricChars: '{}',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            blockCommentContinue: ' * ',
            lineComment: '//',
            fold: 'brace',
          };
        });
        function t(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        var r =
          'body catch class do else enum for foreach foreach_reverse if in interface mixin ' +
          'out scope struct switch try union unittest version while with';
        e.defineMIME('text/x-d', {
          name: 'd',
          keywords: t(
            'abstract alias align asm assert auto break case cast cdouble cent cfloat const continue ' +
              'debug default delegate delete deprecated export extern final finally function goto immutable ' +
              'import inout invariant is lazy macro module new nothrow override package pragma private ' +
              'protected public pure ref return shared short static super synchronized template this ' +
              'throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters ' +
              r
          ),
          blockKeywords: t(r),
          builtin: t(
            'bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ' +
              'ucent uint ulong ushort wchar wstring void size_t sizediff_t'
          ),
          atoms: t('exit failure success true false null'),
          hooks: {
            '@': function (e, t) {
              e.eatWhile(/[\w\$_]/);
              return 'meta';
            },
          },
        });
      });
    },
    20842: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(99762));
        else {
        }
      })(function (e) {
        'use strict';
        var t = (
          'this super static final const abstract class extends external factory ' +
          'implements mixin get native set typedef with enum throw rethrow ' +
          'assert break case continue default in return new deferred async await covariant ' +
          'try catch finally do else for if switch while import library export ' +
          'part of show hide is as extension on yield late required'
        ).split(' ');
        var r = 'try catch finally do else for if switch while'.split(' ');
        var n = 'true false null'.split(' ');
        var i = 'void bool num int double dynamic var String Null Never'.split(' ');
        function a(e) {
          var t = {};
          for (var r = 0; r < e.length; ++r) t[e[r]] = true;
          return t;
        }
        function o(e) {
          (e.interpolationStack || (e.interpolationStack = [])).push(e.tokenize);
        }
        function s(e) {
          return (e.interpolationStack || (e.interpolationStack = [])).pop();
        }
        function l(e) {
          return e.interpolationStack ? e.interpolationStack.length : 0;
        }
        e.defineMIME('application/dart', {
          name: 'clike',
          keywords: a(t),
          blockKeywords: a(r),
          builtin: a(i),
          atoms: a(n),
          hooks: {
            '@': function (e) {
              e.eatWhile(/[\w\$_\.]/);
              return 'meta';
            },
            "'": function (e, t) {
              return u("'", e, t, false);
            },
            '"': function (e, t) {
              return u('"', e, t, false);
            },
            r: function (e, t) {
              var r = e.peek();
              if (r == "'" || r == '"') {
                return u(e.next(), e, t, true);
              }
              return false;
            },
            '}': function (e, t) {
              if (l(t) > 0) {
                t.tokenize = s(t);
                return null;
              }
              return false;
            },
            '/': function (e, t) {
              if (!e.eat('*')) return false;
              t.tokenize = d(1);
              return t.tokenize(e, t);
            },
            token: function (e, t, r) {
              if (r == 'variable') {
                var n = RegExp('^[_$]*[A-Z][a-zA-Z0-9_$]*$', 'g');
                if (n.test(e.current())) {
                  return 'variable-2';
                }
              }
            },
          },
        });
        function u(e, t, r, n) {
          var i = false;
          if (t.eat(e)) {
            if (t.eat(e)) i = true;
            else return 'string';
          }
          function a(t, r) {
            var a = false;
            while (!t.eol()) {
              if (!n && !a && t.peek() == '$') {
                o(r);
                r.tokenize = c;
                return 'string';
              }
              var s = t.next();
              if (s == e && !a && (!i || t.match(e + e))) {
                r.tokenize = null;
                break;
              }
              a = !n && !a && s == '\\';
            }
            return 'string';
          }
          r.tokenize = a;
          return a(t, r);
        }
        function c(e, t) {
          e.eat('$');
          if (e.eat('{')) {
            t.tokenize = null;
          } else {
            t.tokenize = f;
          }
          return null;
        }
        function f(e, t) {
          e.eatWhile(/[\w_]/);
          t.tokenize = s(t);
          return 'variable';
        }
        function d(e) {
          return function (t, r) {
            var n;
            while ((n = t.next())) {
              if (n == '*' && t.eat('/')) {
                if (e == 1) {
                  r.tokenize = null;
                  break;
                } else {
                  r.tokenize = d(e - 1);
                  return r.tokenize(t, r);
                }
              } else if (n == '/' && t.eat('*')) {
                r.tokenize = d(e + 1);
                return r.tokenize(t, r);
              }
            }
            return 'comment';
          };
        }
        e.registerHelper('hintWords', 'application/dart', t.concat(n).concat(i));
        e.defineMode(
          'dart',
          function (t) {
            return e.getMode(t, 'application/dart');
          },
          'clike'
        );
      });
    },
    1715: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('diff', function () {
          var e = { '+': 'positive', '-': 'negative', '@': 'meta' };
          return {
            token: function (t) {
              var r = t.string.search(/[\t ]+?$/);
              if (!t.sol() || r === 0) {
                t.skipToEnd();
                return ('error ' + (e[t.string.charAt(0)] || '')).replace(/ $/, '');
              }
              var n = e[t.peek()] || t.skipToEnd();
              if (r === -1) {
                t.skipToEnd();
              } else {
                t.pos = r;
              }
              return n;
            },
          };
        });
        e.defineMIME('text/x-diff', 'diff');
      });
    },
    75288: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(16531), r(14146));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('django:inner', function () {
          var e = [
              'block',
              'endblock',
              'for',
              'endfor',
              'true',
              'false',
              'filter',
              'endfilter',
              'loop',
              'none',
              'self',
              'super',
              'if',
              'elif',
              'endif',
              'as',
              'else',
              'import',
              'with',
              'endwith',
              'without',
              'context',
              'ifequal',
              'endifequal',
              'ifnotequal',
              'endifnotequal',
              'extends',
              'include',
              'load',
              'comment',
              'endcomment',
              'empty',
              'url',
              'static',
              'trans',
              'blocktrans',
              'endblocktrans',
              'now',
              'regroup',
              'lorem',
              'ifchanged',
              'endifchanged',
              'firstof',
              'debug',
              'cycle',
              'csrf_token',
              'autoescape',
              'endautoescape',
              'spaceless',
              'endspaceless',
              'ssi',
              'templatetag',
              'verbatim',
              'endverbatim',
              'widthratio',
            ],
            t = [
              'add',
              'addslashes',
              'capfirst',
              'center',
              'cut',
              'date',
              'default',
              'default_if_none',
              'dictsort',
              'dictsortreversed',
              'divisibleby',
              'escape',
              'escapejs',
              'filesizeformat',
              'first',
              'floatformat',
              'force_escape',
              'get_digit',
              'iriencode',
              'join',
              'last',
              'length',
              'length_is',
              'linebreaks',
              'linebreaksbr',
              'linenumbers',
              'ljust',
              'lower',
              'make_list',
              'phone2numeric',
              'pluralize',
              'pprint',
              'random',
              'removetags',
              'rjust',
              'safe',
              'safeseq',
              'slice',
              'slugify',
              'stringformat',
              'striptags',
              'time',
              'timesince',
              'timeuntil',
              'title',
              'truncatechars',
              'truncatechars_html',
              'truncatewords',
              'truncatewords_html',
              'unordered_list',
              'upper',
              'urlencode',
              'urlize',
              'urlizetrunc',
              'wordcount',
              'wordwrap',
              'yesno',
            ],
            r = ['==', '!=', '<', '>', '<=', '>='],
            n = ['in', 'not', 'or', 'and'];
          e = new RegExp('^\\b(' + e.join('|') + ')\\b');
          t = new RegExp('^\\b(' + t.join('|') + ')\\b');
          r = new RegExp('^\\b(' + r.join('|') + ')\\b');
          n = new RegExp('^\\b(' + n.join('|') + ')\\b');
          function i(e, t) {
            if (e.match('{{')) {
              t.tokenize = o;
              return 'tag';
            } else if (e.match('{%')) {
              t.tokenize = s;
              return 'tag';
            } else if (e.match('{#')) {
              t.tokenize = l;
              return 'comment';
            }
            while (e.next() != null && !e.match(/\{[{%#]/, false)) {}
            return null;
          }
          function a(e, t) {
            return function (r, n) {
              if (!n.escapeNext && r.eat(e)) {
                n.tokenize = t;
              } else {
                if (n.escapeNext) {
                  n.escapeNext = false;
                }
                var i = r.next();
                if (i == '\\') {
                  n.escapeNext = true;
                }
              }
              return 'string';
            };
          }
          function o(e, r) {
            if (r.waitDot) {
              r.waitDot = false;
              if (e.peek() != '.') {
                return 'null';
              }
              if (e.match(/\.\W+/)) {
                return 'error';
              } else if (e.eat('.')) {
                r.waitProperty = true;
                return 'null';
              } else {
                throw Error('Unexpected error while waiting for property.');
              }
            }
            if (r.waitPipe) {
              r.waitPipe = false;
              if (e.peek() != '|') {
                return 'null';
              }
              if (e.match(/\.\W+/)) {
                return 'error';
              } else if (e.eat('|')) {
                r.waitFilter = true;
                return 'null';
              } else {
                throw Error('Unexpected error while waiting for filter.');
              }
            }
            if (r.waitProperty) {
              r.waitProperty = false;
              if (e.match(/\b(\w+)\b/)) {
                r.waitDot = true;
                r.waitPipe = true;
                return 'property';
              }
            }
            if (r.waitFilter) {
              r.waitFilter = false;
              if (e.match(t)) {
                return 'variable-2';
              }
            }
            if (e.eatSpace()) {
              r.waitProperty = false;
              return 'null';
            }
            if (e.match(/\b\d+(\.\d+)?\b/)) {
              return 'number';
            }
            if (e.match("'")) {
              r.tokenize = a("'", r.tokenize);
              return 'string';
            } else if (e.match('"')) {
              r.tokenize = a('"', r.tokenize);
              return 'string';
            }
            if (e.match(/\b(\w+)\b/) && !r.foundVariable) {
              r.waitDot = true;
              r.waitPipe = true;
              return 'variable';
            }
            if (e.match('}}')) {
              r.waitProperty = null;
              r.waitFilter = null;
              r.waitDot = null;
              r.waitPipe = null;
              r.tokenize = i;
              return 'tag';
            }
            e.next();
            return 'null';
          }
          function s(o, s) {
            if (s.waitDot) {
              s.waitDot = false;
              if (o.peek() != '.') {
                return 'null';
              }
              if (o.match(/\.\W+/)) {
                return 'error';
              } else if (o.eat('.')) {
                s.waitProperty = true;
                return 'null';
              } else {
                throw Error('Unexpected error while waiting for property.');
              }
            }
            if (s.waitPipe) {
              s.waitPipe = false;
              if (o.peek() != '|') {
                return 'null';
              }
              if (o.match(/\.\W+/)) {
                return 'error';
              } else if (o.eat('|')) {
                s.waitFilter = true;
                return 'null';
              } else {
                throw Error('Unexpected error while waiting for filter.');
              }
            }
            if (s.waitProperty) {
              s.waitProperty = false;
              if (o.match(/\b(\w+)\b/)) {
                s.waitDot = true;
                s.waitPipe = true;
                return 'property';
              }
            }
            if (s.waitFilter) {
              s.waitFilter = false;
              if (o.match(t)) {
                return 'variable-2';
              }
            }
            if (o.eatSpace()) {
              s.waitProperty = false;
              return 'null';
            }
            if (o.match(/\b\d+(\.\d+)?\b/)) {
              return 'number';
            }
            if (o.match("'")) {
              s.tokenize = a("'", s.tokenize);
              return 'string';
            } else if (o.match('"')) {
              s.tokenize = a('"', s.tokenize);
              return 'string';
            }
            if (o.match(r)) {
              return 'operator';
            }
            if (o.match(n)) {
              return 'keyword';
            }
            var l = o.match(e);
            if (l) {
              if (l[0] == 'comment') {
                s.blockCommentTag = true;
              }
              return 'keyword';
            }
            if (o.match(/\b(\w+)\b/)) {
              s.waitDot = true;
              s.waitPipe = true;
              return 'variable';
            }
            if (o.match('%}')) {
              s.waitProperty = null;
              s.waitFilter = null;
              s.waitDot = null;
              s.waitPipe = null;
              if (s.blockCommentTag) {
                s.blockCommentTag = false;
                s.tokenize = u;
              } else {
                s.tokenize = i;
              }
              return 'tag';
            }
            o.next();
            return 'null';
          }
          function l(e, t) {
            if (e.match(/^.*?#\}/)) t.tokenize = i;
            else e.skipToEnd();
            return 'comment';
          }
          function u(e, t) {
            if (e.match(/\{%\s*endcomment\s*%\}/, false)) {
              t.tokenize = s;
              e.match('{%');
              return 'tag';
            } else {
              e.next();
              return 'comment';
            }
          }
          return {
            startState: function () {
              return { tokenize: i };
            },
            token: function (e, t) {
              return t.tokenize(e, t);
            },
            blockCommentStart: '{% comment %}',
            blockCommentEnd: '{% endcomment %}',
          };
        });
        e.defineMode('django', function (t) {
          var r = e.getMode(t, 'text/html');
          var n = e.getMode(t, 'django:inner');
          return e.overlayMode(r, n);
        });
        e.defineMIME('text/x-django', 'django');
      });
    },
    75258: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(40790));
        else {
        }
      })(function (e) {
        'use strict';
        var t = 'from';
        var r = new RegExp('^(\\s*)\\b(' + t + ')\\b', 'i');
        var n = ['run', 'cmd', 'entrypoint', 'shell'];
        var i = new RegExp('^(\\s*)(' + n.join('|') + ')(\\s+\\[)', 'i');
        var a = 'expose';
        var o = new RegExp('^(\\s*)(' + a + ')(\\s+)', 'i');
        var s = [
          'arg',
          'from',
          'maintainer',
          'label',
          'env',
          'add',
          'copy',
          'volume',
          'user',
          'workdir',
          'onbuild',
          'stopsignal',
          'healthcheck',
          'shell',
        ];
        var l = [t, a].concat(n).concat(s),
          u = '(' + l.join('|') + ')',
          c = new RegExp('^(\\s*)' + u + '(\\s*)(#.*)?$', 'i'),
          f = new RegExp('^(\\s*)' + u + '(\\s+)', 'i');
        e.defineSimpleMode('dockerfile', {
          start: [
            { regex: /^\s*#.*$/, sol: true, token: 'comment' },
            { regex: r, token: [null, 'keyword'], sol: true, next: 'from' },
            { regex: c, token: [null, 'keyword', null, 'error'], sol: true },
            { regex: i, token: [null, 'keyword', null], sol: true, next: 'array' },
            { regex: o, token: [null, 'keyword', null], sol: true, next: 'expose' },
            { regex: f, token: [null, 'keyword', null], sol: true, next: 'arguments' },
            { regex: /./, token: null },
          ],
          from: [
            { regex: /\s*$/, token: null, next: 'start' },
            { regex: /(\s*)(#.*)$/, token: [null, 'error'], next: 'start' },
            { regex: /(\s*\S+\s+)(as)/i, token: [null, 'keyword'], next: 'start' },
            { token: null, next: 'start' },
          ],
          single: [
            { regex: /(?:[^\\']|\\.)/, token: 'string' },
            { regex: /'/, token: 'string', pop: true },
          ],
          double: [
            { regex: /(?:[^\\"]|\\.)/, token: 'string' },
            { regex: /"/, token: 'string', pop: true },
          ],
          array: [
            { regex: /\]/, token: null, next: 'start' },
            { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
          ],
          expose: [
            { regex: /\d+$/, token: 'number', next: 'start' },
            { regex: /[^\d]+$/, token: null, next: 'start' },
            { regex: /\d+/, token: 'number' },
            { regex: /[^\d]+/, token: null },
            { token: null, next: 'start' },
          ],
          arguments: [
            { regex: /^\s*#.*$/, sol: true, token: 'comment' },
            { regex: /"(?:[^\\"]|\\.)*"?$/, token: 'string', next: 'start' },
            { regex: /"/, token: 'string', push: 'double' },
            { regex: /'(?:[^\\']|\\.)*'?$/, token: 'string', next: 'start' },
            { regex: /'/, token: 'string', push: 'single' },
            { regex: /[^#"']+[\\`]$/, token: null },
            { regex: /[^#"']+$/, token: null, next: 'start' },
            { regex: /[^#"']+/, token: null },
            { token: null, next: 'start' },
          ],
          meta: { lineComment: '#' },
        });
        e.defineMIME('text/x-dockerfile', 'dockerfile');
      });
    },
    70655: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('dtd', function (e) {
          var t = e.indentUnit,
            r;
          function n(e, t) {
            r = t;
            return e;
          }
          function i(e, t) {
            var r = e.next();
            if (r == '<' && e.eat('!')) {
              if (e.eatWhile(/[\-]/)) {
                t.tokenize = a;
                return a(e, t);
              } else if (e.eatWhile(/[\w]/)) return n('keyword', 'doindent');
            } else if (r == '<' && e.eat('?')) {
              t.tokenize = s('meta', '?>');
              return n('meta', r);
            } else if (r == '#' && e.eatWhile(/[\w]/)) return n('atom', 'tag');
            else if (r == '|') return n('keyword', 'separator');
            else if (r.match(/[\(\)\[\]\-\.,\+\?>]/)) return n(null, r);
            else if (r.match(/[\[\]]/)) return n('rule', r);
            else if (r == '"' || r == "'") {
              t.tokenize = o(r);
              return t.tokenize(e, t);
            } else if (e.eatWhile(/[a-zA-Z\?\+\d]/)) {
              var i = e.current();
              if (i.substr(i.length - 1, i.length).match(/\?|\+/) !== null) e.backUp(1);
              return n('tag', 'tag');
            } else if (r == '%' || r == '*') return n('number', 'number');
            else {
              e.eatWhile(/[\w\\\-_%.{,]/);
              return n(null, null);
            }
          }
          function a(e, t) {
            var r = 0,
              a;
            while ((a = e.next()) != null) {
              if (r >= 2 && a == '>') {
                t.tokenize = i;
                break;
              }
              r = a == '-' ? r + 1 : 0;
            }
            return n('comment', 'comment');
          }
          function o(e) {
            return function (t, r) {
              var a = false,
                o;
              while ((o = t.next()) != null) {
                if (o == e && !a) {
                  r.tokenize = i;
                  break;
                }
                a = !a && o == '\\';
              }
              return n('string', 'tag');
            };
          }
          function s(e, t) {
            return function (r, n) {
              while (!r.eol()) {
                if (r.match(t)) {
                  n.tokenize = i;
                  break;
                }
                r.next();
              }
              return e;
            };
          }
          return {
            startState: function (e) {
              return { tokenize: i, baseIndent: e || 0, stack: [] };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var n = t.tokenize(e, t);
              var i = t.stack[t.stack.length - 1];
              if (e.current() == '[' || r === 'doindent' || r == '[')
                t.stack.push('rule');
              else if (r === 'endtag') t.stack[t.stack.length - 1] = 'endtag';
              else if (e.current() == ']' || r == ']' || (r == '>' && i == 'rule'))
                t.stack.pop();
              else if (r == '[') t.stack.push('[');
              return n;
            },
            indent: function (e, n) {
              var i = e.stack.length;
              if (n.charAt(0) === ']') i--;
              else if (n.substr(n.length - 1, n.length) === '>') {
                if (n.substr(0, 1) === '<') {
                } else if (r == 'doindent' && n.length > 1) {
                } else if (r == 'doindent') i--;
                else if (r == '>' && n.length > 1) {
                } else if (r == 'tag' && n !== '>') {
                } else if (r == 'tag' && e.stack[e.stack.length - 1] == 'rule') i--;
                else if (r == 'tag') i++;
                else if (
                  n === '>' &&
                  e.stack[e.stack.length - 1] == 'rule' &&
                  r === '>'
                )
                  i--;
                else if (n === '>' && e.stack[e.stack.length - 1] == 'rule') {
                } else if (n.substr(0, 1) !== '<' && n.substr(0, 1) === '>') i = i - 1;
                else if (n === '>') {
                } else i = i - 1;
                if (r == null || r == ']') i--;
              }
              return e.baseIndent + i * t;
            },
            electricChars: ']>',
          };
        });
        e.defineMIME('application/xml-dtd', 'dtd');
      });
    },
    25184: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e, t) {
          for (var r = 0; r < e.length; r++) t(e[r], r);
        }
        function r(e, t) {
          for (var r = 0; r < e.length; r++) if (t(e[r], r)) return true;
          return false;
        }
        e.defineMode('dylan', function (e) {
          var n = {
            unnamedDefinition: ['interface'],
            namedDefinition: [
              'module',
              'library',
              'macro',
              'C-struct',
              'C-union',
              'C-function',
              'C-callable-wrapper',
            ],
            typeParameterizedDefinition: ['class', 'C-subtype', 'C-mapped-subtype'],
            otherParameterizedDefinition: [
              'method',
              'function',
              'C-variable',
              'C-address',
            ],
            constantSimpleDefinition: ['constant'],
            variableSimpleDefinition: ['variable'],
            otherSimpleDefinition: ['generic', 'domain', 'C-pointer-type', 'table'],
            statement: [
              'if',
              'block',
              'begin',
              'method',
              'case',
              'for',
              'select',
              'when',
              'unless',
              'until',
              'while',
              'iterate',
              'profiling',
              'dynamic-bind',
            ],
            separator: [
              'finally',
              'exception',
              'cleanup',
              'else',
              'elseif',
              'afterwards',
            ],
            other: [
              'above',
              'below',
              'by',
              'from',
              'handler',
              'in',
              'instance',
              'let',
              'local',
              'otherwise',
              'slot',
              'subclass',
              'then',
              'to',
              'keyed-by',
              'virtual',
            ],
            signalingCalls: [
              'signal',
              'error',
              'cerror',
              'break',
              'check-type',
              'abort',
            ],
          };
          n['otherDefinition'] = n['unnamedDefinition']
            .concat(n['namedDefinition'])
            .concat(n['otherParameterizedDefinition']);
          n['definition'] = n['typeParameterizedDefinition'].concat(
            n['otherDefinition']
          );
          n['parameterizedDefinition'] = n['typeParameterizedDefinition'].concat(
            n['otherParameterizedDefinition']
          );
          n['simpleDefinition'] = n['constantSimpleDefinition']
            .concat(n['variableSimpleDefinition'])
            .concat(n['otherSimpleDefinition']);
          n['keyword'] = n['statement'].concat(n['separator']).concat(n['other']);
          var i = '[-_a-zA-Z?!*@<>$%]+';
          var a = new RegExp('^' + i);
          var o = {
            symbolKeyword: i + ':',
            symbolClass: '<' + i + '>',
            symbolGlobal: '\\*' + i + '\\*',
            symbolConstant: '\\$' + i,
          };
          var s = {
            symbolKeyword: 'atom',
            symbolClass: 'tag',
            symbolGlobal: 'variable-2',
            symbolConstant: 'variable-3',
          };
          for (var l in o) if (o.hasOwnProperty(l)) o[l] = new RegExp('^' + o[l]);
          o['keyword'] = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
          var u = {};
          u['keyword'] = 'keyword';
          u['definition'] = 'def';
          u['simpleDefinition'] = 'def';
          u['signalingCalls'] = 'builtin';
          var c = {};
          var f = {};
          t(
            ['keyword', 'definition', 'simpleDefinition', 'signalingCalls'],
            function (e) {
              t(n[e], function (t) {
                c[t] = e;
                f[t] = u[e];
              });
            }
          );
          function d(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function m(e, t) {
            var n = e.peek();
            if (n == "'" || n == '"') {
              e.next();
              return d(e, t, h(n, 'string'));
            } else if (n == '/') {
              e.next();
              if (e.eat('*')) {
                return d(e, t, p);
              } else if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
              e.backUp(1);
            } else if (/[+\-\d\.]/.test(n)) {
              if (
                e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) ||
                e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) ||
                e.match(/^[+-]?\d+/)
              ) {
                return 'number';
              }
            } else if (n == '#') {
              e.next();
              n = e.peek();
              if (n == '"') {
                e.next();
                return d(e, t, h('"', 'string'));
              } else if (n == 'b') {
                e.next();
                e.eatWhile(/[01]/);
                return 'number';
              } else if (n == 'x') {
                e.next();
                e.eatWhile(/[\da-f]/i);
                return 'number';
              } else if (n == 'o') {
                e.next();
                e.eatWhile(/[0-7]/);
                return 'number';
              } else if (n == '#') {
                e.next();
                return 'punctuation';
              } else if (n == '[' || n == '(') {
                e.next();
                return 'bracket';
              } else if (e.match(/f|t|all-keys|include|key|next|rest/i)) {
                return 'atom';
              } else {
                e.eatWhile(/[-a-zA-Z]/);
                return 'error';
              }
            } else if (n == '~') {
              e.next();
              n = e.peek();
              if (n == '=') {
                e.next();
                n = e.peek();
                if (n == '=') {
                  e.next();
                  return 'operator';
                }
                return 'operator';
              }
              return 'operator';
            } else if (n == ':') {
              e.next();
              n = e.peek();
              if (n == '=') {
                e.next();
                return 'operator';
              } else if (n == ':') {
                e.next();
                return 'punctuation';
              }
            } else if ('[](){}'.indexOf(n) != -1) {
              e.next();
              return 'bracket';
            } else if ('.,'.indexOf(n) != -1) {
              e.next();
              return 'punctuation';
            } else if (e.match('end')) {
              return 'keyword';
            }
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                var l = o[i];
                if (
                  (l instanceof Array &&
                    r(l, function (t) {
                      return e.match(t);
                    })) ||
                  e.match(l)
                )
                  return s[i];
              }
            }
            if (/[+\-*\/^=<>&|]/.test(n)) {
              e.next();
              return 'operator';
            }
            if (e.match('define')) {
              return 'def';
            } else {
              e.eatWhile(/[\w\-]/);
              if (c.hasOwnProperty(e.current())) {
                return f[e.current()];
              } else if (e.current().match(a)) {
                return 'variable';
              } else {
                e.next();
                return 'variable-2';
              }
            }
          }
          function p(e, t) {
            var r = false,
              n = false,
              i = 0,
              a;
            while ((a = e.next())) {
              if (a == '/' && r) {
                if (i > 0) {
                  i--;
                } else {
                  t.tokenize = m;
                  break;
                }
              } else if (a == '*' && n) {
                i++;
              }
              r = a == '*';
              n = a == '/';
            }
            return 'comment';
          }
          function h(e, t) {
            return function (r, n) {
              var i = false,
                a,
                o = false;
              while ((a = r.next()) != null) {
                if (a == e && !i) {
                  o = true;
                  break;
                }
                i = !i && a == '\\';
              }
              if (o || !i) {
                n.tokenize = m;
              }
              return t;
            };
          }
          return {
            startState: function () {
              return { tokenize: m, currentIndent: 0 };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              return r;
            },
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
          };
        });
        e.defineMIME('text/x-dylan', 'dylan');
      });
    },
    84134: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('ebnf', function (t) {
          var r = { slash: 0, parenthesis: 1 };
          var n = { comment: 0, _string: 1, characterClass: 2 };
          var i = null;
          if (t.bracesMode) i = e.getMode(t, t.bracesMode);
          return {
            startState: function () {
              return {
                stringType: null,
                commentType: null,
                braced: 0,
                lhs: true,
                localState: null,
                stack: [],
                inDefinition: false,
              };
            },
            token: function (t, a) {
              if (!t) return;
              if (a.stack.length === 0) {
                if (t.peek() == '"' || t.peek() == "'") {
                  a.stringType = t.peek();
                  t.next();
                  a.stack.unshift(n._string);
                } else if (t.match('/*')) {
                  a.stack.unshift(n.comment);
                  a.commentType = r.slash;
                } else if (t.match('(*')) {
                  a.stack.unshift(n.comment);
                  a.commentType = r.parenthesis;
                }
              }
              switch (a.stack[0]) {
                case n._string:
                  while (a.stack[0] === n._string && !t.eol()) {
                    if (t.peek() === a.stringType) {
                      t.next();
                      a.stack.shift();
                    } else if (t.peek() === '\\') {
                      t.next();
                      t.next();
                    } else {
                      t.match(/^.[^\\\"\']*/);
                    }
                  }
                  return a.lhs ? 'property string' : 'string';
                case n.comment:
                  while (a.stack[0] === n.comment && !t.eol()) {
                    if (a.commentType === r.slash && t.match('*/')) {
                      a.stack.shift();
                      a.commentType = null;
                    } else if (a.commentType === r.parenthesis && t.match('*)')) {
                      a.stack.shift();
                      a.commentType = null;
                    } else {
                      t.match(/^.[^\*]*/);
                    }
                  }
                  return 'comment';
                case n.characterClass:
                  while (a.stack[0] === n.characterClass && !t.eol()) {
                    if (!(t.match(/^[^\]\\]+/) || t.match('.'))) {
                      a.stack.shift();
                    }
                  }
                  return 'operator';
              }
              var o = t.peek();
              if (i !== null && (a.braced || o === '{')) {
                if (a.localState === null) a.localState = e.startState(i);
                var s = i.token(t, a.localState),
                  l = t.current();
                if (!s) {
                  for (var u = 0; u < l.length; u++) {
                    if (l[u] === '{') {
                      if (a.braced === 0) {
                        s = 'matchingbracket';
                      }
                      a.braced++;
                    } else if (l[u] === '}') {
                      a.braced--;
                      if (a.braced === 0) {
                        s = 'matchingbracket';
                      }
                    }
                  }
                }
                return s;
              }
              switch (o) {
                case '[':
                  t.next();
                  a.stack.unshift(n.characterClass);
                  return 'bracket';
                case ':':
                case '|':
                case ';':
                  t.next();
                  return 'operator';
                case '%':
                  if (t.match('%%')) {
                    return 'header';
                  } else if (t.match(/[%][A-Za-z]+/)) {
                    return 'keyword';
                  } else if (t.match(/[%][}]/)) {
                    return 'matchingbracket';
                  }
                  break;
                case '/':
                  if (t.match(/[\/][A-Za-z]+/)) {
                    return 'keyword';
                  }
                case '\\':
                  if (t.match(/[\][a-z]+/)) {
                    return 'string-2';
                  }
                case '.':
                  if (t.match('.')) {
                    return 'atom';
                  }
                case '*':
                case '-':
                case '+':
                case '^':
                  if (t.match(o)) {
                    return 'atom';
                  }
                case '$':
                  if (t.match('$$')) {
                    return 'builtin';
                  } else if (t.match(/[$][0-9]+/)) {
                    return 'variable-3';
                  }
                case '<':
                  if (t.match(/<<[a-zA-Z_]+>>/)) {
                    return 'builtin';
                  }
              }
              if (t.match('//')) {
                t.skipToEnd();
                return 'comment';
              } else if (t.match('return')) {
                return 'operator';
              } else if (t.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)) {
                if (t.match(/(?=[\(.])/)) {
                  return 'variable';
                } else if (t.match(/(?=[\s\n]*[:=])/)) {
                  return 'def';
                }
                return 'variable-2';
              } else if (['[', ']', '(', ')'].indexOf(t.peek()) != -1) {
                t.next();
                return 'bracket';
              } else if (!t.eatSpace()) {
                t.next();
              }
              return null;
            },
          };
        });
        e.defineMIME('text/x-ebnf', 'ebnf');
      });
    },
    60427: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('ecl', function (e) {
          function t(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          function r(e, t) {
            if (!t.startOfLine) return false;
            e.skipToEnd();
            return 'meta';
          }
          var n = e.indentUnit;
          var i = t(
            'abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode'
          );
          var a = t(
            'apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait'
          );
          var o = t(
            '__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath'
          );
          var s = t(
            'ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode'
          );
          var l = t(
            'checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when'
          );
          var u = t('catch class do else finally for if switch try while');
          var c = t('true false null');
          var f = { '#': r };
          var d = /[+\-*&%=<>!?|\/]/;
          var m;
          function p(e, t) {
            var r = e.next();
            if (f[r]) {
              var n = f[r](e, t);
              if (n !== false) return n;
            }
            if (r == '"' || r == "'") {
              t.tokenize = h(r);
              return t.tokenize(e, t);
            }
            if (/[\[\]{}\(\),;\:\.]/.test(r)) {
              m = r;
              return null;
            }
            if (/\d/.test(r)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            }
            if (r == '/') {
              if (e.eat('*')) {
                t.tokenize = g;
                return g(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (d.test(r)) {
              e.eatWhile(d);
              return 'operator';
            }
            e.eatWhile(/[\w\$_]/);
            var p = e.current().toLowerCase();
            if (i.propertyIsEnumerable(p)) {
              if (u.propertyIsEnumerable(p)) m = 'newstatement';
              return 'keyword';
            } else if (a.propertyIsEnumerable(p)) {
              if (u.propertyIsEnumerable(p)) m = 'newstatement';
              return 'variable';
            } else if (o.propertyIsEnumerable(p)) {
              if (u.propertyIsEnumerable(p)) m = 'newstatement';
              return 'variable-2';
            } else if (s.propertyIsEnumerable(p)) {
              if (u.propertyIsEnumerable(p)) m = 'newstatement';
              return 'variable-3';
            } else if (l.propertyIsEnumerable(p)) {
              if (u.propertyIsEnumerable(p)) m = 'newstatement';
              return 'builtin';
            } else {
              var b = p.length - 1;
              while (b >= 0 && (!isNaN(p[b]) || p[b] == '_')) --b;
              if (b > 0) {
                var v = p.substr(0, b + 1);
                if (s.propertyIsEnumerable(v)) {
                  if (u.propertyIsEnumerable(v)) m = 'newstatement';
                  return 'variable-3';
                }
              }
            }
            if (c.propertyIsEnumerable(p)) return 'atom';
            return null;
          }
          function h(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !n) r.tokenize = p;
              return 'string';
            };
          }
          function g(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = p;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function b(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function v(e, t, r) {
            return (e.context = new b(e.indented, t, r, null, e.context));
          }
          function k(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new b((e || 0) - n, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) return null;
              m = null;
              var n = (t.tokenize || p)(e, t);
              if (n == 'comment' || n == 'meta') return n;
              if (r.align == null) r.align = true;
              if ((m == ';' || m == ':') && r.type == 'statement') k(t);
              else if (m == '{') v(t, e.column(), '}');
              else if (m == '[') v(t, e.column(), ']');
              else if (m == '(') v(t, e.column(), ')');
              else if (m == '}') {
                while (r.type == 'statement') r = k(t);
                if (r.type == '}') r = k(t);
                while (r.type == 'statement') r = k(t);
              } else if (m == r.type) k(t);
              else if (
                r.type == '}' ||
                r.type == 'top' ||
                (r.type == 'statement' && m == 'newstatement')
              )
                v(t, e.column(), 'statement');
              t.startOfLine = false;
              return n;
            },
            indent: function (e, t) {
              if (e.tokenize != p && e.tokenize != null) return 0;
              var r = e.context,
                i = t && t.charAt(0);
              if (r.type == 'statement' && i == '}') r = r.prev;
              var a = i == r.type;
              if (r.type == 'statement') return r.indented + (i == '{' ? 0 : n);
              else if (r.align) return r.column + (a ? 0 : 1);
              else return r.indented + (a ? 0 : n);
            },
            electricChars: '{}',
          };
        });
        e.defineMIME('text/x-ecl', 'ecl');
      });
    },
    20370: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('eiffel', function () {
          function e(e) {
            var t = {};
            for (var r = 0, n = e.length; r < n; ++r) t[e[r]] = true;
            return t;
          }
          var t = e([
            'note',
            'across',
            'when',
            'variant',
            'until',
            'unique',
            'undefine',
            'then',
            'strip',
            'select',
            'retry',
            'rescue',
            'require',
            'rename',
            'reference',
            'redefine',
            'prefix',
            'once',
            'old',
            'obsolete',
            'loop',
            'local',
            'like',
            'is',
            'inspect',
            'infix',
            'include',
            'if',
            'frozen',
            'from',
            'external',
            'export',
            'ensure',
            'end',
            'elseif',
            'else',
            'do',
            'creation',
            'create',
            'check',
            'alias',
            'agent',
            'separate',
            'invariant',
            'inherit',
            'indexing',
            'feature',
            'expanded',
            'deferred',
            'class',
            'Void',
            'True',
            'Result',
            'Precursor',
            'False',
            'Current',
            'create',
            'attached',
            'detachable',
            'as',
            'and',
            'implies',
            'not',
            'or',
          ]);
          var r = e([':=', 'and then', 'and', 'or', '<<', '>>']);
          function n(e, t, r) {
            r.tokenize.push(e);
            return e(t, r);
          }
          function i(e, t) {
            if (e.eatSpace()) return null;
            var r = e.next();
            if (r == '"' || r == "'") {
              return n(a(r, 'string'), e, t);
            } else if (r == '-' && e.eat('-')) {
              e.skipToEnd();
              return 'comment';
            } else if (r == ':' && e.eat('=')) {
              return 'operator';
            } else if (/[0-9]/.test(r)) {
              e.eatWhile(/[xXbBCc0-9\.]/);
              e.eat(/[\?\!]/);
              return 'ident';
            } else if (/[a-zA-Z_0-9]/.test(r)) {
              e.eatWhile(/[a-zA-Z_0-9]/);
              e.eat(/[\?\!]/);
              return 'ident';
            } else if (/[=+\-\/*^%<>~]/.test(r)) {
              e.eatWhile(/[=+\-\/*^%<>~]/);
              return 'operator';
            } else {
              return null;
            }
          }
          function a(e, t, r) {
            return function (n, i) {
              var a = false,
                o;
              while ((o = n.next()) != null) {
                if (o == e && (r || !a)) {
                  i.tokenize.pop();
                  break;
                }
                a = !a && o == '%';
              }
              return t;
            };
          }
          return {
            startState: function () {
              return { tokenize: [i] };
            },
            token: function (e, n) {
              var i = n.tokenize[n.tokenize.length - 1](e, n);
              if (i == 'ident') {
                var a = e.current();
                i = t.propertyIsEnumerable(e.current())
                  ? 'keyword'
                  : r.propertyIsEnumerable(e.current())
                  ? 'operator'
                  : /^[A-Z][A-Z_0-9]*$/g.test(a)
                  ? 'tag'
                  : /^0[bB][0-1]+$/g.test(a)
                  ? 'number'
                  : /^0[cC][0-7]+$/g.test(a)
                  ? 'number'
                  : /^0[xX][a-fA-F0-9]+$/g.test(a)
                  ? 'number'
                  : /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(a)
                  ? 'number'
                  : /^[0-9]+$/g.test(a)
                  ? 'number'
                  : 'variable';
              }
              return i;
            },
            lineComment: '--',
          };
        });
        e.defineMIME('text/x-eiffel', 'eiffel');
      });
    },
    78919: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('elm', function () {
          function e(e, t, r) {
            t(r);
            return r(e, t);
          }
          var t = /[a-z]/;
          var r = /[A-Z]/;
          var n = /[a-zA-Z0-9_]/;
          var i = /[0-9]/;
          var a = /[0-9A-Fa-f]/;
          var o = /[-&*+.\\/<>=?^|:]/;
          var s = /[(),[\]{}]/;
          var l = /[ \v\f]/;
          function u() {
            return function (u, h) {
              if (u.eatWhile(l)) {
                return null;
              }
              var g = u.next();
              if (s.test(g)) {
                return g === '{' && u.eat('-')
                  ? e(u, h, c(1))
                  : g === '[' && u.match('glsl|')
                  ? e(u, h, p)
                  : 'builtin';
              }
              if (g === "'") {
                return e(u, h, m);
              }
              if (g === '"') {
                return u.eat('"') ? (u.eat('"') ? e(u, h, f) : 'string') : e(u, h, d);
              }
              if (r.test(g)) {
                u.eatWhile(n);
                return 'variable-2';
              }
              if (t.test(g)) {
                var b = u.pos === 1;
                u.eatWhile(n);
                return b ? 'def' : 'variable';
              }
              if (i.test(g)) {
                if (g === '0') {
                  if (u.eat(/[xX]/)) {
                    u.eatWhile(a);
                    return 'number';
                  }
                } else {
                  u.eatWhile(i);
                }
                if (u.eat('.')) {
                  u.eatWhile(i);
                }
                if (u.eat(/[eE]/)) {
                  u.eat(/[-+]/);
                  u.eatWhile(i);
                }
                return 'number';
              }
              if (o.test(g)) {
                if (g === '-' && u.eat('-')) {
                  u.skipToEnd();
                  return 'comment';
                }
                u.eatWhile(o);
                return 'keyword';
              }
              if (g === '_') {
                return 'keyword';
              }
              return 'error';
            };
          }
          function c(e) {
            if (e == 0) {
              return u();
            }
            return function (t, r) {
              while (!t.eol()) {
                var n = t.next();
                if (n == '{' && t.eat('-')) {
                  ++e;
                } else if (n == '-' && t.eat('}')) {
                  --e;
                  if (e === 0) {
                    r(u());
                    return 'comment';
                  }
                }
              }
              r(c(e));
              return 'comment';
            };
          }
          function f(e, t) {
            while (!e.eol()) {
              var r = e.next();
              if (r === '"' && e.eat('"') && e.eat('"')) {
                t(u());
                return 'string';
              }
            }
            return 'string';
          }
          function d(e, t) {
            while (e.skipTo('\\"')) {
              e.next();
              e.next();
            }
            if (e.skipTo('"')) {
              e.next();
              t(u());
              return 'string';
            }
            e.skipToEnd();
            t(u());
            return 'error';
          }
          function m(e, t) {
            while (e.skipTo("\\'")) {
              e.next();
              e.next();
            }
            if (e.skipTo("'")) {
              e.next();
              t(u());
              return 'string';
            }
            e.skipToEnd();
            t(u());
            return 'error';
          }
          function p(e, t) {
            while (!e.eol()) {
              var r = e.next();
              if (r === '|' && e.eat(']')) {
                t(u());
                return 'string';
              }
            }
            return 'string';
          }
          var h = {
            case: 1,
            of: 1,
            as: 1,
            if: 1,
            then: 1,
            else: 1,
            let: 1,
            in: 1,
            type: 1,
            alias: 1,
            module: 1,
            where: 1,
            import: 1,
            exposing: 1,
            port: 1,
          };
          return {
            startState: function () {
              return { f: u() };
            },
            copyState: function (e) {
              return { f: e.f };
            },
            token: function (e, t) {
              var r = t.f(e, function (e) {
                t.f = e;
              });
              var n = e.current();
              return h.hasOwnProperty(n) ? 'keyword' : r;
            },
          };
        });
        e.defineMIME('text/x-elm', 'elm');
      });
    },
    76392: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMIME('text/x-erlang', 'erlang');
        e.defineMode('erlang', function (t) {
          'use strict';
          var r = ['-type', '-spec', '-export_type', '-opaque'];
          var n = [
            'after',
            'begin',
            'catch',
            'case',
            'cond',
            'end',
            'fun',
            'if',
            'let',
            'of',
            'query',
            'receive',
            'try',
            'when',
          ];
          var i = /[\->,;]/;
          var a = ['->', ';', ','];
          var o = [
            'and',
            'andalso',
            'band',
            'bnot',
            'bor',
            'bsl',
            'bsr',
            'bxor',
            'div',
            'not',
            'or',
            'orelse',
            'rem',
            'xor',
          ];
          var s = /[\+\-\*\/<>=\|:!]/;
          var l = [
            '=',
            '+',
            '-',
            '*',
            '/',
            '>',
            '>=',
            '<',
            '=<',
            '=:=',
            '==',
            '=/=',
            '/=',
            '||',
            '<-',
            '!',
          ];
          var u = /[<\(\[\{]/;
          var c = ['<<', '(', '[', '{'];
          var f = /[>\)\]\}]/;
          var d = ['}', ']', ')', '>>'];
          var m = [
            'is_atom',
            'is_binary',
            'is_bitstring',
            'is_boolean',
            'is_float',
            'is_function',
            'is_integer',
            'is_list',
            'is_number',
            'is_pid',
            'is_port',
            'is_record',
            'is_reference',
            'is_tuple',
            'atom',
            'binary',
            'bitstring',
            'boolean',
            'function',
            'integer',
            'list',
            'number',
            'pid',
            'port',
            'record',
            'reference',
            'tuple',
          ];
          var p = [
            'abs',
            'adler32',
            'adler32_combine',
            'alive',
            'apply',
            'atom_to_binary',
            'atom_to_list',
            'binary_to_atom',
            'binary_to_existing_atom',
            'binary_to_list',
            'binary_to_term',
            'bit_size',
            'bitstring_to_list',
            'byte_size',
            'check_process_code',
            'contact_binary',
            'crc32',
            'crc32_combine',
            'date',
            'decode_packet',
            'delete_module',
            'disconnect_node',
            'element',
            'erase',
            'exit',
            'float',
            'float_to_list',
            'garbage_collect',
            'get',
            'get_keys',
            'group_leader',
            'halt',
            'hd',
            'integer_to_list',
            'internal_bif',
            'iolist_size',
            'iolist_to_binary',
            'is_alive',
            'is_atom',
            'is_binary',
            'is_bitstring',
            'is_boolean',
            'is_float',
            'is_function',
            'is_integer',
            'is_list',
            'is_number',
            'is_pid',
            'is_port',
            'is_process_alive',
            'is_record',
            'is_reference',
            'is_tuple',
            'length',
            'link',
            'list_to_atom',
            'list_to_binary',
            'list_to_bitstring',
            'list_to_existing_atom',
            'list_to_float',
            'list_to_integer',
            'list_to_pid',
            'list_to_tuple',
            'load_module',
            'make_ref',
            'module_loaded',
            'monitor_node',
            'node',
            'node_link',
            'node_unlink',
            'nodes',
            'notalive',
            'now',
            'open_port',
            'pid_to_list',
            'port_close',
            'port_command',
            'port_connect',
            'port_control',
            'pre_loaded',
            'process_flag',
            'process_info',
            'processes',
            'purge_module',
            'put',
            'register',
            'registered',
            'round',
            'self',
            'setelement',
            'size',
            'spawn',
            'spawn_link',
            'spawn_monitor',
            'spawn_opt',
            'split_binary',
            'statistics',
            'term_to_binary',
            'time',
            'throw',
            'tl',
            'trunc',
            'tuple_size',
            'tuple_to_list',
            'unlink',
            'unregister',
            'whereis',
          ];
          var h = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/;
          var g =
            /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
          function b(e, t) {
            if (t.in_string) {
              t.in_string = !_(e);
              return S(t, e, 'string');
            }
            if (t.in_atom) {
              t.in_atom = !x(e);
              return S(t, e, 'atom');
            }
            if (e.eatSpace()) {
              return S(t, e, 'whitespace');
            }
            if (!C(t) && e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) {
              if (E(e.current(), r)) {
                return S(t, e, 'type');
              } else {
                return S(t, e, 'attribute');
              }
            }
            var b = e.next();
            if (b == '%') {
              e.skipToEnd();
              return S(t, e, 'comment');
            }
            if (b == ':') {
              return S(t, e, 'colon');
            }
            if (b == '?') {
              e.eatSpace();
              e.eatWhile(h);
              return S(t, e, 'macro');
            }
            if (b == '#') {
              e.eatSpace();
              e.eatWhile(h);
              return S(t, e, 'record');
            }
            if (b == '$') {
              if (e.next() == '\\' && !e.match(g)) {
                return S(t, e, 'error');
              }
              return S(t, e, 'number');
            }
            if (b == '.') {
              return S(t, e, 'dot');
            }
            if (b == "'") {
              if (!(t.in_atom = !x(e))) {
                if (e.match(/\s*\/\s*[0-9]/, false)) {
                  e.match(/\s*\/\s*[0-9]/, true);
                  return S(t, e, 'fun');
                }
                if (e.match(/\s*\(/, false) || e.match(/\s*:/, false)) {
                  return S(t, e, 'function');
                }
              }
              return S(t, e, 'atom');
            }
            if (b == '"') {
              t.in_string = !_(e);
              return S(t, e, 'string');
            }
            if (/[A-Z_Ø-ÞÀ-Ö]/.test(b)) {
              e.eatWhile(h);
              return S(t, e, 'variable');
            }
            if (/[a-z_ß-öø-ÿ]/.test(b)) {
              e.eatWhile(h);
              if (e.match(/\s*\/\s*[0-9]/, false)) {
                e.match(/\s*\/\s*[0-9]/, true);
                return S(t, e, 'fun');
              }
              var y = e.current();
              if (E(y, n)) {
                return S(t, e, 'keyword');
              } else if (E(y, o)) {
                return S(t, e, 'operator');
              } else if (e.match(/\s*\(/, false)) {
                if (E(y, p) && (C(t).token != ':' || C(t, 2).token == 'erlang')) {
                  return S(t, e, 'builtin');
                } else if (E(y, m)) {
                  return S(t, e, 'guard');
                } else {
                  return S(t, e, 'function');
                }
              } else if (w(e) == ':') {
                if (y == 'erlang') {
                  return S(t, e, 'builtin');
                } else {
                  return S(t, e, 'function');
                }
              } else if (E(y, ['true', 'false'])) {
                return S(t, e, 'boolean');
              } else {
                return S(t, e, 'atom');
              }
            }
            var T = /[0-9]/;
            var I = /[0-9a-zA-Z]/;
            if (T.test(b)) {
              e.eatWhile(T);
              if (e.eat('#')) {
                if (!e.eatWhile(I)) {
                  e.backUp(1);
                }
              } else if (e.eat('.')) {
                if (!e.eatWhile(T)) {
                  e.backUp(1);
                } else {
                  if (e.eat(/[eE]/)) {
                    if (e.eat(/[-+]/)) {
                      if (!e.eatWhile(T)) {
                        e.backUp(2);
                      }
                    } else {
                      if (!e.eatWhile(T)) {
                        e.backUp(1);
                      }
                    }
                  }
                }
              }
              return S(t, e, 'number');
            }
            if (v(e, u, c)) {
              return S(t, e, 'open_paren');
            }
            if (v(e, f, d)) {
              return S(t, e, 'close_paren');
            }
            if (k(e, i, a)) {
              return S(t, e, 'separator');
            }
            if (k(e, s, l)) {
              return S(t, e, 'operator');
            }
            return S(t, e, null);
          }
          function v(e, t, r) {
            if (e.current().length == 1 && t.test(e.current())) {
              e.backUp(1);
              while (t.test(e.peek())) {
                e.next();
                if (E(e.current(), r)) {
                  return true;
                }
              }
              e.backUp(e.current().length - 1);
            }
            return false;
          }
          function k(e, t, r) {
            if (e.current().length == 1 && t.test(e.current())) {
              while (t.test(e.peek())) {
                e.next();
              }
              while (0 < e.current().length) {
                if (E(e.current(), r)) {
                  return true;
                } else {
                  e.backUp(1);
                }
              }
              e.next();
            }
            return false;
          }
          function _(e) {
            return y(e, '"', '\\');
          }
          function x(e) {
            return y(e, "'", '\\');
          }
          function y(e, t, r) {
            while (!e.eol()) {
              var n = e.next();
              if (n == t) {
                return true;
              } else if (n == r) {
                e.next();
              }
            }
            return false;
          }
          function w(e) {
            var t = e.match(/^\s*([^\s%])/, false);
            return t ? t[1] : '';
          }
          function E(e, t) {
            return -1 < t.indexOf(e);
          }
          function S(e, t, r) {
            z(e, I(r, t));
            switch (r) {
              case 'atom':
                return 'atom';
              case 'attribute':
                return 'attribute';
              case 'boolean':
                return 'atom';
              case 'builtin':
                return 'builtin';
              case 'close_paren':
                return null;
              case 'colon':
                return null;
              case 'comment':
                return 'comment';
              case 'dot':
                return null;
              case 'error':
                return 'error';
              case 'fun':
                return 'meta';
              case 'function':
                return 'tag';
              case 'guard':
                return 'property';
              case 'keyword':
                return 'keyword';
              case 'macro':
                return 'variable-2';
              case 'number':
                return 'number';
              case 'open_paren':
                return null;
              case 'operator':
                return 'operator';
              case 'record':
                return 'bracket';
              case 'separator':
                return null;
              case 'string':
                return 'string';
              case 'type':
                return 'def';
              case 'variable':
                return 'variable';
              default:
                return null;
            }
          }
          function T(e, t, r, n) {
            return { token: e, column: t, indent: r, type: n };
          }
          function I(e, t) {
            return T(t.current(), t.column(), t.indentation(), e);
          }
          function A(e) {
            return T(e, 0, 0, e);
          }
          function C(e, t) {
            var r = e.tokenStack.length;
            var n = t ? t : 1;
            if (r < n) {
              return false;
            } else {
              return e.tokenStack[r - n];
            }
          }
          function z(e, t) {
            if (!(t.type == 'comment' || t.type == 'whitespace')) {
              e.tokenStack = R(e.tokenStack, t);
              e.tokenStack = M(e.tokenStack);
            }
          }
          function R(e, t) {
            var r = e.length - 1;
            if (0 < r && e[r].type === 'record' && t.type === 'dot') {
              e.pop();
            } else if (0 < r && e[r].type === 'group') {
              e.pop();
              e.push(t);
            } else {
              e.push(t);
            }
            return e;
          }
          function M(e) {
            if (!e.length) return e;
            var t = e.length - 1;
            if (e[t].type === 'dot') {
              return [];
            }
            if (t > 1 && e[t].type === 'fun' && e[t - 1].token === 'fun') {
              return e.slice(0, t - 1);
            }
            switch (e[t].token) {
              case '}':
                return O(e, { g: ['{'] });
              case ']':
                return O(e, { i: ['['] });
              case ')':
                return O(e, { i: ['('] });
              case '>>':
                return O(e, { i: ['<<'] });
              case 'end':
                return O(e, { i: ['begin', 'case', 'fun', 'if', 'receive', 'try'] });
              case ',':
                return O(e, {
                  e: ['begin', 'try', 'when', '->', ',', '(', '[', '{', '<<'],
                });
              case '->':
                return O(e, { r: ['when'], m: ['try', 'if', 'case', 'receive'] });
              case ';':
                return O(e, { E: ['case', 'fun', 'if', 'receive', 'try', 'when'] });
              case 'catch':
                return O(e, { e: ['try'] });
              case 'of':
                return O(e, { e: ['case'] });
              case 'after':
                return O(e, { e: ['receive', 'try'] });
              default:
                return e;
            }
          }
          function O(e, t) {
            for (var r in t) {
              var n = e.length - 1;
              var i = t[r];
              for (var a = n - 1; -1 < a; a--) {
                if (E(e[a].token, i)) {
                  var o = e.slice(0, a);
                  switch (r) {
                    case 'm':
                      return o.concat(e[a]).concat(e[n]);
                    case 'r':
                      return o.concat(e[n]);
                    case 'i':
                      return o;
                    case 'g':
                      return o.concat(A('group'));
                    case 'E':
                      return o.concat(e[a]);
                    case 'e':
                      return o.concat(e[a]);
                  }
                }
              }
            }
            return r == 'E' ? [] : e;
          }
          function N(r, n) {
            var i;
            var a = t.indentUnit;
            var o = $(n);
            var s = C(r, 1);
            var l = C(r, 2);
            if (r.in_string || r.in_atom) {
              return e.Pass;
            } else if (!l) {
              return 0;
            } else if (s.token == 'when') {
              return s.column + a;
            } else if (o === 'when' && l.type === 'function') {
              return l.indent + a;
            } else if (o === '(' && s.token === 'fun') {
              return s.column + 3;
            } else if (o === 'catch' && (i = P(r, ['try']))) {
              return i.column;
            } else if (E(o, ['end', 'after', 'of'])) {
              i = P(r, ['begin', 'case', 'fun', 'if', 'receive', 'try']);
              return i ? i.column : e.Pass;
            } else if (E(o, d)) {
              i = P(r, c);
              return i ? i.column : e.Pass;
            } else if (E(s.token, [',', '|', '||']) || E(o, [',', '|', '||'])) {
              i = L(r);
              return i ? i.column + i.token.length : a;
            } else if (s.token == '->') {
              if (E(l.token, ['receive', 'case', 'if', 'try'])) {
                return l.column + a + a;
              } else {
                return l.column + a;
              }
            } else if (E(s.token, c)) {
              return s.column + s.token.length;
            } else {
              i = D(r);
              return F(i) ? i.column + a : 0;
            }
          }
          function $(e) {
            var t = e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
            return F(t) && t.index === 0 ? t[0] : '';
          }
          function L(e) {
            var t = e.tokenStack.slice(0, -1);
            var r = U(t, 'type', ['open_paren']);
            return F(t[r]) ? t[r] : false;
          }
          function D(e) {
            var t = e.tokenStack;
            var r = U(t, 'type', ['open_paren', 'separator', 'keyword']);
            var n = U(t, 'type', ['operator']);
            if (F(r) && F(n) && r < n) {
              return t[r + 1];
            } else if (F(r)) {
              return t[r];
            } else {
              return false;
            }
          }
          function P(e, t) {
            var r = e.tokenStack;
            var n = U(r, 'token', t);
            return F(r[n]) ? r[n] : false;
          }
          function U(e, t, r) {
            for (var n = e.length - 1; -1 < n; n--) {
              if (E(e[n][t], r)) {
                return n;
              }
            }
            return false;
          }
          function F(e) {
            return e !== false && e != null;
          }
          return {
            startState: function () {
              return { tokenStack: [], in_string: false, in_atom: false };
            },
            token: function (e, t) {
              return b(e, t);
            },
            indent: function (e, t) {
              return N(e, t);
            },
            lineComment: '%',
          };
        });
      });
    },
    27566: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(40790));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineSimpleMode('factor', {
          start: [
            { regex: /#?!.*/, token: 'comment' },
            { regex: /"""/, token: 'string', next: 'string3' },
            { regex: /(STRING:)(\s)/, token: ['keyword', null], next: 'string2' },
            { regex: /\S*?"/, token: 'string', next: 'string' },
            {
              regex: /(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\-?\d+.?\d*)(?=\s)/,
              token: 'number',
            },
            {
              regex: /((?:GENERIC)|\:?\:)(\s+)(\S+)(\s+)(\()/,
              token: ['keyword', null, 'def', null, 'bracket'],
              next: 'stack',
            },
            {
              regex: /(M\:)(\s+)(\S+)(\s+)(\S+)/,
              token: ['keyword', null, 'def', null, 'tag'],
            },
            { regex: /USING\:/, token: 'keyword', next: 'vocabulary' },
            {
              regex: /(USE\:|IN\:)(\s+)(\S+)(?=\s|$)/,
              token: ['keyword', null, 'tag'],
            },
            { regex: /(\S+\:)(\s+)(\S+)(?=\s|$)/, token: ['keyword', null, 'def'] },
            {
              regex:
                /(?:;|\\|t|f|if|loop|while|until|do|PRIVATE>|<PRIVATE|\.|\S*\[|\]|\S*\{|\})(?=\s|$)/,
              token: 'keyword',
            },
            { regex: /\S+[\)>\.\*\?]+(?=\s|$)/, token: 'builtin' },
            { regex: /[\)><]+\S+(?=\s|$)/, token: 'builtin' },
            { regex: /(?:[\+\-\=\/\*<>])(?=\s|$)/, token: 'keyword' },
            { regex: /\S+/, token: 'variable' },
            { regex: /\s+|./, token: null },
          ],
          vocabulary: [
            { regex: /;/, token: 'keyword', next: 'start' },
            { regex: /\S+/, token: 'tag' },
            { regex: /\s+|./, token: null },
          ],
          string: [
            { regex: /(?:[^\\]|\\.)*?"/, token: 'string', next: 'start' },
            { regex: /.*/, token: 'string' },
          ],
          string2: [
            { regex: /^;/, token: 'keyword', next: 'start' },
            { regex: /.*/, token: 'string' },
          ],
          string3: [
            { regex: /(?:[^\\]|\\.)*?"""/, token: 'string', next: 'start' },
            { regex: /.*/, token: 'string' },
          ],
          stack: [
            { regex: /\)/, token: 'bracket', next: 'start' },
            { regex: /--/, token: 'bracket' },
            { regex: /\S+/, token: 'meta' },
            { regex: /\s+|./, token: null },
          ],
          meta: {
            dontIndentStates: ['start', 'vocabulary', 'string', 'string3', 'stack'],
            lineComment: ['!', '#!'],
          },
        });
        e.defineMIME('text/x-factor', 'factor');
      });
    },
    15300: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('fcl', function (e) {
          var t = e.indentUnit;
          var r = {
            term: true,
            method: true,
            accu: true,
            rule: true,
            then: true,
            is: true,
            and: true,
            or: true,
            if: true,
            default: true,
          };
          var n = {
            var_input: true,
            var_output: true,
            fuzzify: true,
            defuzzify: true,
            function_block: true,
            ruleblock: true,
          };
          var i = {
            end_ruleblock: true,
            end_defuzzify: true,
            end_function_block: true,
            end_fuzzify: true,
            end_var: true,
          };
          var a = {
            true: true,
            false: true,
            nan: true,
            real: true,
            min: true,
            max: true,
            cog: true,
            cogs: true,
          };
          var o = /[+\-*&^%:=<>!|\/]/;
          function s(e, t) {
            var s = e.next();
            if (/[\d\.]/.test(s)) {
              if (s == '.') {
                e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
              } else if (s == '0') {
                e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/);
              } else {
                e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
              }
              return 'number';
            }
            if (s == '/' || s == '(') {
              if (e.eat('*')) {
                t.tokenize = l;
                return l(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (o.test(s)) {
              e.eatWhile(o);
              return 'operator';
            }
            e.eatWhile(/[\w\$_\xa1-\uffff]/);
            var u = e.current().toLowerCase();
            if (
              r.propertyIsEnumerable(u) ||
              n.propertyIsEnumerable(u) ||
              i.propertyIsEnumerable(u)
            ) {
              return 'keyword';
            }
            if (a.propertyIsEnumerable(u)) return 'atom';
            return 'variable';
          }
          function l(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if ((n == '/' || n == ')') && r) {
                t.tokenize = s;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function u(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function c(e, t, r) {
            return (e.context = new u(e.indented, t, r, null, e.context));
          }
          function f(e) {
            if (!e.context.prev) return;
            var t = e.context.type;
            if (t == 'end_block') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new u((e || 0) - t, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) return null;
              var a = (t.tokenize || s)(e, t);
              if (a == 'comment') return a;
              if (r.align == null) r.align = true;
              var o = e.current().toLowerCase();
              if (n.propertyIsEnumerable(o)) c(t, e.column(), 'end_block');
              else if (i.propertyIsEnumerable(o)) f(t);
              t.startOfLine = false;
              return a;
            },
            indent: function (e, r) {
              if (e.tokenize != s && e.tokenize != null) return 0;
              var n = e.context;
              var a = i.propertyIsEnumerable(r);
              if (n.align) return n.column + (a ? 0 : 1);
              else return n.indented + (a ? 0 : t);
            },
            electricChars: 'ryk',
            fold: 'brace',
            blockCommentStart: '(*',
            blockCommentEnd: '*)',
            lineComment: '//',
          };
        });
        e.defineMIME('text/x-fcl', 'fcl');
      });
    },
    88859: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          var t = [];
          e.split(' ').forEach(function (e) {
            t.push({ name: e });
          });
          return t;
        }
        var r = t(
          'INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL'
        );
        var n = t(
          'IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE'
        );
        e.defineMode('forth', function () {
          function e(e, t) {
            var r;
            for (r = e.length - 1; r >= 0; r--) {
              if (e[r].name === t.toUpperCase()) {
                return e[r];
              }
            }
            return undefined;
          }
          return {
            startState: function () {
              return {
                state: '',
                base: 10,
                coreWordList: r,
                immediateWordList: n,
                wordList: [],
              };
            },
            token: function (t, r) {
              var n;
              if (t.eatSpace()) {
                return null;
              }
              if (r.state === '') {
                if (t.match(/^(\]|:NONAME)(\s|$)/i)) {
                  r.state = ' compilation';
                  return 'builtin compilation';
                }
                n = t.match(/^(\:)\s+(\S+)(\s|$)+/);
                if (n) {
                  r.wordList.push({ name: n[2].toUpperCase() });
                  r.state = ' compilation';
                  return 'def' + r.state;
                }
                n = t.match(
                  /^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i
                );
                if (n) {
                  r.wordList.push({ name: n[2].toUpperCase() });
                  return 'def' + r.state;
                }
                n = t.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/);
                if (n) {
                  return 'builtin' + r.state;
                }
              } else {
                if (t.match(/^(\;|\[)(\s)/)) {
                  r.state = '';
                  t.backUp(1);
                  return 'builtin compilation';
                }
                if (t.match(/^(\;|\[)($)/)) {
                  r.state = '';
                  return 'builtin compilation';
                }
                if (t.match(/^(POSTPONE)\s+\S+(\s|$)+/)) {
                  return 'builtin';
                }
              }
              n = t.match(/^(\S+)(\s+|$)/);
              if (n) {
                if (e(r.wordList, n[1]) !== undefined) {
                  return 'variable' + r.state;
                }
                if (n[1] === '\\') {
                  t.skipToEnd();
                  return 'comment' + r.state;
                }
                if (e(r.coreWordList, n[1]) !== undefined) {
                  return 'builtin' + r.state;
                }
                if (e(r.immediateWordList, n[1]) !== undefined) {
                  return 'keyword' + r.state;
                }
                if (n[1] === '(') {
                  t.eatWhile(function (e) {
                    return e !== ')';
                  });
                  t.eat(')');
                  return 'comment' + r.state;
                }
                if (n[1] === '.(') {
                  t.eatWhile(function (e) {
                    return e !== ')';
                  });
                  t.eat(')');
                  return 'string' + r.state;
                }
                if (n[1] === 'S"' || n[1] === '."' || n[1] === 'C"') {
                  t.eatWhile(function (e) {
                    return e !== '"';
                  });
                  t.eat('"');
                  return 'string' + r.state;
                }
                if (n[1] - 68719476735) {
                  return 'number' + r.state;
                }
                return 'atom' + r.state;
              }
            },
          };
        });
        e.defineMIME('text/x-forth', 'forth');
      });
    },
    44874: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('fortran', function () {
          function e(e) {
            var t = {};
            for (var r = 0; r < e.length; ++r) {
              t[e[r]] = true;
            }
            return t;
          }
          var t = e([
            'abstract',
            'accept',
            'allocatable',
            'allocate',
            'array',
            'assign',
            'asynchronous',
            'backspace',
            'bind',
            'block',
            'byte',
            'call',
            'case',
            'class',
            'close',
            'common',
            'contains',
            'continue',
            'cycle',
            'data',
            'deallocate',
            'decode',
            'deferred',
            'dimension',
            'do',
            'elemental',
            'else',
            'encode',
            'end',
            'endif',
            'entry',
            'enumerator',
            'equivalence',
            'exit',
            'external',
            'extrinsic',
            'final',
            'forall',
            'format',
            'function',
            'generic',
            'go',
            'goto',
            'if',
            'implicit',
            'import',
            'include',
            'inquire',
            'intent',
            'interface',
            'intrinsic',
            'module',
            'namelist',
            'non_intrinsic',
            'non_overridable',
            'none',
            'nopass',
            'nullify',
            'open',
            'optional',
            'options',
            'parameter',
            'pass',
            'pause',
            'pointer',
            'print',
            'private',
            'program',
            'protected',
            'public',
            'pure',
            'read',
            'recursive',
            'result',
            'return',
            'rewind',
            'save',
            'select',
            'sequence',
            'stop',
            'subroutine',
            'target',
            'then',
            'to',
            'type',
            'use',
            'value',
            'volatile',
            'where',
            'while',
            'write',
          ]);
          var r = e([
            'abort',
            'abs',
            'access',
            'achar',
            'acos',
            'adjustl',
            'adjustr',
            'aimag',
            'aint',
            'alarm',
            'all',
            'allocated',
            'alog',
            'amax',
            'amin',
            'amod',
            'and',
            'anint',
            'any',
            'asin',
            'associated',
            'atan',
            'besj',
            'besjn',
            'besy',
            'besyn',
            'bit_size',
            'btest',
            'cabs',
            'ccos',
            'ceiling',
            'cexp',
            'char',
            'chdir',
            'chmod',
            'clog',
            'cmplx',
            'command_argument_count',
            'complex',
            'conjg',
            'cos',
            'cosh',
            'count',
            'cpu_time',
            'cshift',
            'csin',
            'csqrt',
            'ctime',
            'c_funloc',
            'c_loc',
            'c_associated',
            'c_null_ptr',
            'c_null_funptr',
            'c_f_pointer',
            'c_null_char',
            'c_alert',
            'c_backspace',
            'c_form_feed',
            'c_new_line',
            'c_carriage_return',
            'c_horizontal_tab',
            'c_vertical_tab',
            'dabs',
            'dacos',
            'dasin',
            'datan',
            'date_and_time',
            'dbesj',
            'dbesj',
            'dbesjn',
            'dbesy',
            'dbesy',
            'dbesyn',
            'dble',
            'dcos',
            'dcosh',
            'ddim',
            'derf',
            'derfc',
            'dexp',
            'digits',
            'dim',
            'dint',
            'dlog',
            'dlog',
            'dmax',
            'dmin',
            'dmod',
            'dnint',
            'dot_product',
            'dprod',
            'dsign',
            'dsinh',
            'dsin',
            'dsqrt',
            'dtanh',
            'dtan',
            'dtime',
            'eoshift',
            'epsilon',
            'erf',
            'erfc',
            'etime',
            'exit',
            'exp',
            'exponent',
            'extends_type_of',
            'fdate',
            'fget',
            'fgetc',
            'float',
            'floor',
            'flush',
            'fnum',
            'fputc',
            'fput',
            'fraction',
            'fseek',
            'fstat',
            'ftell',
            'gerror',
            'getarg',
            'get_command',
            'get_command_argument',
            'get_environment_variable',
            'getcwd',
            'getenv',
            'getgid',
            'getlog',
            'getpid',
            'getuid',
            'gmtime',
            'hostnm',
            'huge',
            'iabs',
            'iachar',
            'iand',
            'iargc',
            'ibclr',
            'ibits',
            'ibset',
            'ichar',
            'idate',
            'idim',
            'idint',
            'idnint',
            'ieor',
            'ierrno',
            'ifix',
            'imag',
            'imagpart',
            'index',
            'int',
            'ior',
            'irand',
            'isatty',
            'ishft',
            'ishftc',
            'isign',
            'iso_c_binding',
            'is_iostat_end',
            'is_iostat_eor',
            'itime',
            'kill',
            'kind',
            'lbound',
            'len',
            'len_trim',
            'lge',
            'lgt',
            'link',
            'lle',
            'llt',
            'lnblnk',
            'loc',
            'log',
            'logical',
            'long',
            'lshift',
            'lstat',
            'ltime',
            'matmul',
            'max',
            'maxexponent',
            'maxloc',
            'maxval',
            'mclock',
            'merge',
            'move_alloc',
            'min',
            'minexponent',
            'minloc',
            'minval',
            'mod',
            'modulo',
            'mvbits',
            'nearest',
            'new_line',
            'nint',
            'not',
            'or',
            'pack',
            'perror',
            'precision',
            'present',
            'product',
            'radix',
            'rand',
            'random_number',
            'random_seed',
            'range',
            'real',
            'realpart',
            'rename',
            'repeat',
            'reshape',
            'rrspacing',
            'rshift',
            'same_type_as',
            'scale',
            'scan',
            'second',
            'selected_int_kind',
            'selected_real_kind',
            'set_exponent',
            'shape',
            'short',
            'sign',
            'signal',
            'sinh',
            'sin',
            'sleep',
            'sngl',
            'spacing',
            'spread',
            'sqrt',
            'srand',
            'stat',
            'sum',
            'symlnk',
            'system',
            'system_clock',
            'tan',
            'tanh',
            'time',
            'tiny',
            'transfer',
            'transpose',
            'trim',
            'ttynam',
            'ubound',
            'umask',
            'unlink',
            'unpack',
            'verify',
            'xor',
            'zabs',
            'zcos',
            'zexp',
            'zlog',
            'zsin',
            'zsqrt',
          ]);
          var n = e([
            'c_bool',
            'c_char',
            'c_double',
            'c_double_complex',
            'c_float',
            'c_float_complex',
            'c_funptr',
            'c_int',
            'c_int16_t',
            'c_int32_t',
            'c_int64_t',
            'c_int8_t',
            'c_int_fast16_t',
            'c_int_fast32_t',
            'c_int_fast64_t',
            'c_int_fast8_t',
            'c_int_least16_t',
            'c_int_least32_t',
            'c_int_least64_t',
            'c_int_least8_t',
            'c_intmax_t',
            'c_intptr_t',
            'c_long',
            'c_long_double',
            'c_long_double_complex',
            'c_long_long',
            'c_ptr',
            'c_short',
            'c_signed_char',
            'c_size_t',
            'character',
            'complex',
            'double',
            'integer',
            'logical',
            'real',
          ]);
          var i = /[+\-*&=<>\/\:]/;
          var a = new RegExp(
            '(.and.|.or.|.eq.|.lt.|.le.|.gt.|.ge.|.ne.|.not.|.eqv.|.neqv.)',
            'i'
          );
          function o(e, o) {
            if (e.match(a)) {
              return 'operator';
            }
            var l = e.next();
            if (l == '!') {
              e.skipToEnd();
              return 'comment';
            }
            if (l == '"' || l == "'") {
              o.tokenize = s(l);
              return o.tokenize(e, o);
            }
            if (/[\[\]\(\),]/.test(l)) {
              return null;
            }
            if (/\d/.test(l)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            }
            if (i.test(l)) {
              e.eatWhile(i);
              return 'operator';
            }
            e.eatWhile(/[\w\$_]/);
            var u = e.current().toLowerCase();
            if (t.hasOwnProperty(u)) {
              return 'keyword';
            }
            if (r.hasOwnProperty(u) || n.hasOwnProperty(u)) {
              return 'builtin';
            }
            return 'variable';
          }
          function s(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !n) r.tokenize = null;
              return 'string';
            };
          }
          return {
            startState: function () {
              return { tokenize: null };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var r = (t.tokenize || o)(e, t);
              if (r == 'comment' || r == 'meta') return r;
              return r;
            },
          };
        });
        e.defineMIME('text/x-fortran', 'fortran');
      });
    },
    28902: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('gas', function (e, t) {
          'use strict';
          var r = [];
          var n = '';
          var i = {
            '.abort': 'builtin',
            '.align': 'builtin',
            '.altmacro': 'builtin',
            '.ascii': 'builtin',
            '.asciz': 'builtin',
            '.balign': 'builtin',
            '.balignw': 'builtin',
            '.balignl': 'builtin',
            '.bundle_align_mode': 'builtin',
            '.bundle_lock': 'builtin',
            '.bundle_unlock': 'builtin',
            '.byte': 'builtin',
            '.cfi_startproc': 'builtin',
            '.comm': 'builtin',
            '.data': 'builtin',
            '.def': 'builtin',
            '.desc': 'builtin',
            '.dim': 'builtin',
            '.double': 'builtin',
            '.eject': 'builtin',
            '.else': 'builtin',
            '.elseif': 'builtin',
            '.end': 'builtin',
            '.endef': 'builtin',
            '.endfunc': 'builtin',
            '.endif': 'builtin',
            '.equ': 'builtin',
            '.equiv': 'builtin',
            '.eqv': 'builtin',
            '.err': 'builtin',
            '.error': 'builtin',
            '.exitm': 'builtin',
            '.extern': 'builtin',
            '.fail': 'builtin',
            '.file': 'builtin',
            '.fill': 'builtin',
            '.float': 'builtin',
            '.func': 'builtin',
            '.global': 'builtin',
            '.gnu_attribute': 'builtin',
            '.hidden': 'builtin',
            '.hword': 'builtin',
            '.ident': 'builtin',
            '.if': 'builtin',
            '.incbin': 'builtin',
            '.include': 'builtin',
            '.int': 'builtin',
            '.internal': 'builtin',
            '.irp': 'builtin',
            '.irpc': 'builtin',
            '.lcomm': 'builtin',
            '.lflags': 'builtin',
            '.line': 'builtin',
            '.linkonce': 'builtin',
            '.list': 'builtin',
            '.ln': 'builtin',
            '.loc': 'builtin',
            '.loc_mark_labels': 'builtin',
            '.local': 'builtin',
            '.long': 'builtin',
            '.macro': 'builtin',
            '.mri': 'builtin',
            '.noaltmacro': 'builtin',
            '.nolist': 'builtin',
            '.octa': 'builtin',
            '.offset': 'builtin',
            '.org': 'builtin',
            '.p2align': 'builtin',
            '.popsection': 'builtin',
            '.previous': 'builtin',
            '.print': 'builtin',
            '.protected': 'builtin',
            '.psize': 'builtin',
            '.purgem': 'builtin',
            '.pushsection': 'builtin',
            '.quad': 'builtin',
            '.reloc': 'builtin',
            '.rept': 'builtin',
            '.sbttl': 'builtin',
            '.scl': 'builtin',
            '.section': 'builtin',
            '.set': 'builtin',
            '.short': 'builtin',
            '.single': 'builtin',
            '.size': 'builtin',
            '.skip': 'builtin',
            '.sleb128': 'builtin',
            '.space': 'builtin',
            '.stab': 'builtin',
            '.string': 'builtin',
            '.struct': 'builtin',
            '.subsection': 'builtin',
            '.symver': 'builtin',
            '.tag': 'builtin',
            '.text': 'builtin',
            '.title': 'builtin',
            '.type': 'builtin',
            '.uleb128': 'builtin',
            '.val': 'builtin',
            '.version': 'builtin',
            '.vtable_entry': 'builtin',
            '.vtable_inherit': 'builtin',
            '.warning': 'builtin',
            '.weak': 'builtin',
            '.weakref': 'builtin',
            '.word': 'builtin',
          };
          var a = {};
          function o(e) {
            n = '#';
            a.ax = 'variable';
            a.eax = 'variable-2';
            a.rax = 'variable-3';
            a.bx = 'variable';
            a.ebx = 'variable-2';
            a.rbx = 'variable-3';
            a.cx = 'variable';
            a.ecx = 'variable-2';
            a.rcx = 'variable-3';
            a.dx = 'variable';
            a.edx = 'variable-2';
            a.rdx = 'variable-3';
            a.si = 'variable';
            a.esi = 'variable-2';
            a.rsi = 'variable-3';
            a.di = 'variable';
            a.edi = 'variable-2';
            a.rdi = 'variable-3';
            a.sp = 'variable';
            a.esp = 'variable-2';
            a.rsp = 'variable-3';
            a.bp = 'variable';
            a.ebp = 'variable-2';
            a.rbp = 'variable-3';
            a.ip = 'variable';
            a.eip = 'variable-2';
            a.rip = 'variable-3';
            a.cs = 'keyword';
            a.ds = 'keyword';
            a.ss = 'keyword';
            a.es = 'keyword';
            a.fs = 'keyword';
            a.gs = 'keyword';
          }
          function s(e) {
            n = '@';
            i.syntax = 'builtin';
            a.r0 = 'variable';
            a.r1 = 'variable';
            a.r2 = 'variable';
            a.r3 = 'variable';
            a.r4 = 'variable';
            a.r5 = 'variable';
            a.r6 = 'variable';
            a.r7 = 'variable';
            a.r8 = 'variable';
            a.r9 = 'variable';
            a.r10 = 'variable';
            a.r11 = 'variable';
            a.r12 = 'variable';
            a.sp = 'variable-2';
            a.lr = 'variable-2';
            a.pc = 'variable-2';
            a.r13 = a.sp;
            a.r14 = a.lr;
            a.r15 = a.pc;
            r.push(function (e, t) {
              if (e === '#') {
                t.eatWhile(/\w/);
                return 'number';
              }
            });
          }
          var l = (t.architecture || 'x86').toLowerCase();
          if (l === 'x86') {
            o(t);
          } else if (l === 'arm' || l === 'armv6') {
            s(t);
          }
          function u(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (n === t && !r) {
                return false;
              }
              r = !r && n === '\\';
            }
            return r;
          }
          function c(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (n === '/' && r) {
                t.tokenize = null;
                break;
              }
              r = n === '*';
            }
            return 'comment';
          }
          return {
            startState: function () {
              return { tokenize: null };
            },
            token: function (e, t) {
              if (t.tokenize) {
                return t.tokenize(e, t);
              }
              if (e.eatSpace()) {
                return null;
              }
              var o,
                s,
                l = e.next();
              if (l === '/') {
                if (e.eat('*')) {
                  t.tokenize = c;
                  return c(e, t);
                }
              }
              if (l === n) {
                e.skipToEnd();
                return 'comment';
              }
              if (l === '"') {
                u(e, '"');
                return 'string';
              }
              if (l === '.') {
                e.eatWhile(/\w/);
                s = e.current().toLowerCase();
                o = i[s];
                return o || null;
              }
              if (l === '=') {
                e.eatWhile(/\w/);
                return 'tag';
              }
              if (l === '{') {
                return 'bracket';
              }
              if (l === '}') {
                return 'bracket';
              }
              if (/\d/.test(l)) {
                if (l === '0' && e.eat('x')) {
                  e.eatWhile(/[0-9a-fA-F]/);
                  return 'number';
                }
                e.eatWhile(/\d/);
                return 'number';
              }
              if (/\w/.test(l)) {
                e.eatWhile(/\w/);
                if (e.eat(':')) {
                  return 'tag';
                }
                s = e.current().toLowerCase();
                o = a[s];
                return o || null;
              }
              for (var f = 0; f < r.length; f++) {
                o = r[f](l, e, t);
                if (o) {
                  return o;
                }
              }
            },
            lineComment: n,
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
          };
        });
      });
    },
    85546: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('gherkin', function () {
          return {
            startState: function () {
              return {
                lineNumber: 0,
                tableHeaderLine: false,
                allowFeature: true,
                allowBackground: false,
                allowScenario: false,
                allowSteps: false,
                allowPlaceholders: false,
                allowMultilineArgument: false,
                inMultilineString: false,
                inMultilineTable: false,
                inKeywordLine: false,
              };
            },
            token: function (e, t) {
              if (e.sol()) {
                t.lineNumber++;
                t.inKeywordLine = false;
                if (t.inMultilineTable) {
                  t.tableHeaderLine = false;
                  if (!e.match(/\s*\|/, false)) {
                    t.allowMultilineArgument = false;
                    t.inMultilineTable = false;
                  }
                }
              }
              e.eatSpace();
              if (t.allowMultilineArgument) {
                if (t.inMultilineString) {
                  if (e.match('"""')) {
                    t.inMultilineString = false;
                    t.allowMultilineArgument = false;
                  } else {
                    e.match(/.*/);
                  }
                  return 'string';
                }
                if (t.inMultilineTable) {
                  if (e.match(/\|\s*/)) {
                    return 'bracket';
                  } else {
                    e.match(/[^\|]*/);
                    return t.tableHeaderLine ? 'header' : 'string';
                  }
                }
                if (e.match('"""')) {
                  t.inMultilineString = true;
                  return 'string';
                } else if (e.match('|')) {
                  t.inMultilineTable = true;
                  t.tableHeaderLine = true;
                  return 'bracket';
                }
              }
              if (e.match(/#.*/)) {
                return 'comment';
              } else if (!t.inKeywordLine && e.match(/@\S+/)) {
                return 'tag';
              } else if (
                !t.inKeywordLine &&
                t.allowFeature &&
                e.match(
                  /(機能|功能|フィーチャ|기능|โครงหลัก|ความสามารถ|ความต้องการทางธุรกิจ|ಹೆಚ್ಚಳ|గుణము|ਮੁਹਾਂਦਰਾ|ਨਕਸ਼ ਨੁਹਾਰ|ਖਾਸੀਅਤ|रूप लेख|وِیژگی|خاصية|תכונה|Функціонал|Функция|Функционалност|Функционал|Үзенчәлеклелек|Свойство|Особина|Мөмкинлек|Могућност|Λειτουργία|Δυνατότητα|Właściwość|Vlastnosť|Trajto|Tính năng|Savybė|Pretty much|Požiadavka|Požadavek|Potrzeba biznesowa|Özellik|Osobina|Ominaisuus|Omadus|OH HAI|Mogućnost|Mogucnost|Jellemző|Hwæt|Hwaet|Funzionalità|Funktionalitéit|Funktionalität|Funkcja|Funkcionalnost|Funkcionalitāte|Funkcia|Fungsi|Functionaliteit|Funcționalitate|Funcţionalitate|Functionalitate|Funcionalitat|Funcionalidade|Fonctionnalité|Fitur|Fīča|Feature|Eiginleiki|Egenskap|Egenskab|Característica|Caracteristica|Business Need|Aspekt|Arwedd|Ahoy matey!|Ability):/
                )
              ) {
                t.allowScenario = true;
                t.allowBackground = true;
                t.allowPlaceholders = false;
                t.allowSteps = false;
                t.allowMultilineArgument = false;
                t.inKeywordLine = true;
                return 'keyword';
              } else if (
                !t.inKeywordLine &&
                t.allowBackground &&
                e.match(
                  /(背景|배경|แนวคิด|ಹಿನ್ನೆಲೆ|నేపథ్యం|ਪਿਛੋਕੜ|पृष्ठभूमि|زمینه|الخلفية|רקע|Тарих|Предыстория|Предистория|Позадина|Передумова|Основа|Контекст|Кереш|Υπόβαθρο|Założenia|Yo\-ho\-ho|Tausta|Taust|Situācija|Rerefons|Pozadina|Pozadie|Pozadí|Osnova|Latar Belakang|Kontext|Konteksts|Kontekstas|Kontekst|Háttér|Hannergrond|Grundlage|Geçmiş|Fundo|Fono|First off|Dis is what went down|Dasar|Contexto|Contexte|Context|Contesto|Cenário de Fundo|Cenario de Fundo|Cefndir|Bối cảnh|Bakgrunnur|Bakgrunn|Bakgrund|Baggrund|Background|B4|Antecedents|Antecedentes|Ær|Aer|Achtergrond):/
                )
              ) {
                t.allowPlaceholders = false;
                t.allowSteps = true;
                t.allowBackground = false;
                t.allowMultilineArgument = false;
                t.inKeywordLine = true;
                return 'keyword';
              } else if (
                !t.inKeywordLine &&
                t.allowScenario &&
                e.match(
                  /(場景大綱|场景大纲|劇本大綱|剧本大纲|テンプレ|シナリオテンプレート|シナリオテンプレ|シナリオアウトライン|시나리오 개요|สรุปเหตุการณ์|โครงสร้างของเหตุการณ์|ವಿವರಣೆ|కథనం|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਟਕਥਾ ਢਾਂਚਾ|परिदृश्य रूपरेखा|سيناريو مخطط|الگوی سناریو|תבנית תרחיש|Сценарийның төзелеше|Сценарий структураси|Структура сценарію|Структура сценария|Структура сценарија|Скица|Рамка на сценарий|Концепт|Περιγραφή Σεναρίου|Wharrimean is|Template Situai|Template Senario|Template Keadaan|Tapausaihio|Szenariogrundriss|Szablon scenariusza|Swa hwær swa|Swa hwaer swa|Struktura scenarija|Structură scenariu|Structura scenariu|Skica|Skenario konsep|Shiver me timbers|Senaryo taslağı|Schema dello scenario|Scenariomall|Scenariomal|Scenario Template|Scenario Outline|Scenario Amlinellol|Scenārijs pēc parauga|Scenarijaus šablonas|Reckon it's like|Raamstsenaarium|Plang vum Szenario|Plan du Scénario|Plan du scénario|Osnova scénáře|Osnova Scenára|Náčrt Scenáru|Náčrt Scénáře|Náčrt Scenára|MISHUN SRSLY|Menggariskan Senario|Lýsing Dæma|Lýsing Atburðarásar|Konturo de la scenaro|Koncept|Khung tình huống|Khung kịch bản|Forgatókönyv vázlat|Esquema do Cenário|Esquema do Cenario|Esquema del escenario|Esquema de l'escenari|Esbozo do escenario|Delineação do Cenário|Delineacao do Cenario|All y'all|Abstrakt Scenario|Abstract Scenario):/
                )
              ) {
                t.allowPlaceholders = true;
                t.allowSteps = true;
                t.allowMultilineArgument = false;
                t.inKeywordLine = true;
                return 'keyword';
              } else if (
                t.allowScenario &&
                e.match(
                  /(例子|例|サンプル|예|ชุดของเหตุการณ์|ชุดของตัวอย่าง|ಉದಾಹರಣೆಗಳು|ఉదాహరణలు|ਉਦਾਹਰਨਾਂ|उदाहरण|نمونه ها|امثلة|דוגמאות|Үрнәкләр|Сценарији|Примеры|Примери|Приклади|Мисоллар|Мисаллар|Σενάρια|Παραδείγματα|You'll wanna|Voorbeelden|Variantai|Tapaukset|Se þe|Se the|Se ðe|Scenarios|Scenariji|Scenarijai|Przykłady|Primjeri|Primeri|Příklady|Príklady|Piemēri|Példák|Pavyzdžiai|Paraugs|Örnekler|Juhtumid|Exemplos|Exemples|Exemple|Exempel|EXAMPLZ|Examples|Esempi|Enghreifftiau|Ekzemploj|Eksempler|Ejemplos|Dữ liệu|Dead men tell no tales|Dæmi|Contoh|Cenários|Cenarios|Beispiller|Beispiele|Atburðarásir):/
                )
              ) {
                t.allowPlaceholders = false;
                t.allowSteps = true;
                t.allowBackground = false;
                t.allowMultilineArgument = true;
                return 'keyword';
              } else if (
                !t.inKeywordLine &&
                t.allowScenario &&
                e.match(
                  /(場景|场景|劇本|剧本|シナリオ|시나리오|เหตุการณ์|ಕಥಾಸಾರಾಂಶ|సన్నివేశం|ਪਟਕਥਾ|परिदृश्य|سيناريو|سناریو|תרחיש|Сценарій|Сценарио|Сценарий|Пример|Σενάριο|Tình huống|The thing of it is|Tapaus|Szenario|Swa|Stsenaarium|Skenario|Situai|Senaryo|Senario|Scenaro|Scenariusz|Scenariu|Scénario|Scenario|Scenarijus|Scenārijs|Scenarij|Scenarie|Scénář|Scenár|Primer|MISHUN|Kịch bản|Keadaan|Heave to|Forgatókönyv|Escenario|Escenari|Cenário|Cenario|Awww, look mate|Atburðarás):/
                )
              ) {
                t.allowPlaceholders = false;
                t.allowSteps = true;
                t.allowBackground = false;
                t.allowMultilineArgument = false;
                t.inKeywordLine = true;
                return 'keyword';
              } else if (
                !t.inKeywordLine &&
                t.allowSteps &&
                e.match(
                  /(那麼|那么|而且|當|当|并且|同時|同时|前提|假设|假設|假定|假如|但是|但し|並且|もし|ならば|ただし|しかし|かつ|하지만|조건|먼저|만일|만약|단|그리고|그러면|และ |เมื่อ |แต่ |ดังนั้น |กำหนดให้ |ಸ್ಥಿತಿಯನ್ನು |ಮತ್ತು |ನೀಡಿದ |ನಂತರ |ಆದರೆ |మరియు |చెప్పబడినది |కాని |ఈ పరిస్థితిలో |అప్పుడు |ਪਰ |ਤਦ |ਜੇਕਰ |ਜਿਵੇਂ ਕਿ |ਜਦੋਂ |ਅਤੇ |यदि |परन्तु |पर |तब |तदा |तथा |जब |चूंकि |किन्तु |कदा |और |अगर |و |هنگامی |متى |لكن |عندما |ثم |بفرض |با فرض |اما |اذاً |آنگاه |כאשר |וגם |בהינתן |אזי |אז |אבל |Якщо |Һәм |Унда |Тоді |Тогда |То |Также |Та |Пусть |Припустимо, що |Припустимо |Онда |Но |Нехай |Нәтиҗәдә |Лекин |Ләкин |Коли |Когда |Когато |Када |Кад |К тому же |І |И |Задато |Задати |Задате |Если |Допустим |Дано |Дадено |Вә |Ва |Бирок |Әмма |Әйтик |Әгәр |Аммо |Али |Але |Агар |А також |А |Τότε |Όταν |Και |Δεδομένου |Αλλά |Þurh |Þegar |Þa þe |Þá |Þa |Zatati |Zakładając |Zadato |Zadate |Zadano |Zadani |Zadan |Za předpokladu |Za predpokladu |Youse know when youse got |Youse know like when |Yna |Yeah nah |Y'know |Y |Wun |Wtedy |When y'all |When |Wenn |WEN |wann |Ve |Và |Und |Un |ugeholl |Too right |Thurh |Thì |Then y'all |Then |Tha the |Tha |Tetapi |Tapi |Tak |Tada |Tad |Stel |Soit |Siis |Și |Şi |Si |Sed |Se |Så |Quando |Quand |Quan |Pryd |Potom |Pokud |Pokiaľ |Però |Pero |Pak |Oraz |Onda |Ond |Oletetaan |Og |Och |O zaman |Niin |Nhưng |När |Når |Mutta |Men |Mas |Maka |Majd |Mając |Mais |Maar |mä |Ma |Lorsque |Lorsqu'|Logo |Let go and haul |Kun |Kuid |Kui |Kiedy |Khi |Ketika |Kemudian |Keď |Když |Kaj |Kai |Kada |Kad |Jeżeli |Jeśli |Ja |It's just unbelievable |Ir |I CAN HAZ |I |Ha |Givun |Givet |Given y'all |Given |Gitt |Gegeven |Gegeben seien |Gegeben sei |Gdy |Gangway! |Fakat |Étant donnés |Etant donnés |Étant données |Etant données |Étant donnée |Etant donnée |Étant donné |Etant donné |Et |És |Entonces |Entón |Então |Entao |En |Eğer ki |Ef |Eeldades |E |Ðurh |Duota |Dun |Donitaĵo |Donat |Donada |Do |Diyelim ki |Diberi |Dengan |Den youse gotta |DEN |De |Dato |Dați fiind |Daţi fiind |Dati fiind |Dati |Date fiind |Date |Data |Dat fiind |Dar |Dann |dann |Dan |Dados |Dado |Dadas |Dada |Ða ðe |Ða |Cuando |Cho |Cando |Când |Cand |Cal |But y'all |But at the end of the day I reckon |BUT |But |Buh |Blimey! |Biết |Bet |Bagi |Aye |awer |Avast! |Atunci |Atesa |Atès |Apabila |Anrhegedig a |Angenommen |And y'all |And |AN |An |an |Amikor |Amennyiben |Ama |Als |Alors |Allora |Ali |Aleshores |Ale |Akkor |Ak |Adott |Ac |Aber |A zároveň |A tiež |A taktiež |A také |A |a |7 |\* )/
                )
              ) {
                t.inStep = true;
                t.allowPlaceholders = true;
                t.allowMultilineArgument = true;
                t.inKeywordLine = true;
                return 'keyword';
              } else if (e.match(/"[^"]*"?/)) {
                return 'string';
              } else if (t.allowPlaceholders && e.match(/<[^>]*>?/)) {
                return 'variable';
              } else {
                e.next();
                e.eatWhile(/[^@"<#]/);
                return null;
              }
            },
          };
        });
        e.defineMIME('text/x-feature', 'gherkin');
      });
    },
    94750: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('go', function (t) {
          var r = t.indentUnit;
          var n = {
            break: true,
            case: true,
            chan: true,
            const: true,
            continue: true,
            default: true,
            defer: true,
            else: true,
            fallthrough: true,
            for: true,
            func: true,
            go: true,
            goto: true,
            if: true,
            import: true,
            interface: true,
            map: true,
            package: true,
            range: true,
            return: true,
            select: true,
            struct: true,
            switch: true,
            type: true,
            var: true,
            bool: true,
            byte: true,
            complex64: true,
            complex128: true,
            float32: true,
            float64: true,
            int8: true,
            int16: true,
            int32: true,
            int64: true,
            string: true,
            uint8: true,
            uint16: true,
            uint32: true,
            uint64: true,
            int: true,
            uint: true,
            uintptr: true,
            error: true,
            rune: true,
          };
          var i = {
            true: true,
            false: true,
            iota: true,
            nil: true,
            append: true,
            cap: true,
            close: true,
            complex: true,
            copy: true,
            delete: true,
            imag: true,
            len: true,
            make: true,
            new: true,
            panic: true,
            print: true,
            println: true,
            real: true,
            recover: true,
          };
          var a = /[+\-*&^%:=<>!|\/]/;
          var o;
          function s(e, t) {
            var r = e.next();
            if (r == '"' || r == "'" || r == '`') {
              t.tokenize = l(r);
              return t.tokenize(e, t);
            }
            if (/[\d\.]/.test(r)) {
              if (r == '.') {
                e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
              } else if (r == '0') {
                e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/);
              } else {
                e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
              }
              return 'number';
            }
            if (/[\[\]{}\(\),;\:\.]/.test(r)) {
              o = r;
              return null;
            }
            if (r == '/') {
              if (e.eat('*')) {
                t.tokenize = u;
                return u(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (a.test(r)) {
              e.eatWhile(a);
              return 'operator';
            }
            e.eatWhile(/[\w\$_\xa1-\uffff]/);
            var s = e.current();
            if (n.propertyIsEnumerable(s)) {
              if (s == 'case' || s == 'default') o = 'case';
              return 'keyword';
            }
            if (i.propertyIsEnumerable(s)) return 'atom';
            return 'variable';
          }
          function l(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && e != '`' && i == '\\';
              }
              if (a || !(n || e == '`')) r.tokenize = s;
              return 'string';
            };
          }
          function u(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = s;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function c(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function f(e, t, r) {
            return (e.context = new c(e.indented, t, r, null, e.context));
          }
          function d(e) {
            if (!e.context.prev) return;
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new c((e || 0) - r, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
                if (r.type == 'case') r.type = '}';
              }
              if (e.eatSpace()) return null;
              o = null;
              var n = (t.tokenize || s)(e, t);
              if (n == 'comment') return n;
              if (r.align == null) r.align = true;
              if (o == '{') f(t, e.column(), '}');
              else if (o == '[') f(t, e.column(), ']');
              else if (o == '(') f(t, e.column(), ')');
              else if (o == 'case') r.type = 'case';
              else if (o == '}' && r.type == '}') d(t);
              else if (o == r.type) d(t);
              t.startOfLine = false;
              return n;
            },
            indent: function (t, n) {
              if (t.tokenize != s && t.tokenize != null) return e.Pass;
              var i = t.context,
                a = n && n.charAt(0);
              if (i.type == 'case' && /^(?:case|default)\b/.test(n)) {
                t.context.type = '}';
                return i.indented;
              }
              var o = a == i.type;
              if (i.align) return i.column + (o ? 0 : 1);
              else return i.indented + (o ? 0 : r);
            },
            electricChars: '{}):',
            closeBrackets: '()[]{}\'\'""``',
            fold: 'brace',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
          };
        });
        e.defineMIME('text/x-go', 'go');
      });
    },
    53123: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('groovy', function (t) {
          function r(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var n = r(
            'abstract as assert boolean break byte case catch char class const continue def default ' +
              'do double else enum extends final finally float for goto if implements import in ' +
              'instanceof int interface long native new package private protected public return ' +
              'short static strictfp super switch synchronized threadsafe throw throws trait transient ' +
              'try void volatile while'
          );
          var i = r(
            'catch class def do else enum finally for if interface switch trait try while'
          );
          var a = r('return break continue');
          var o = r('null true false this');
          var s;
          function l(e, t) {
            var r = e.next();
            if (r == '"' || r == "'") {
              return u(r, e, t);
            }
            if (/[\[\]{}\(\),;\:\.]/.test(r)) {
              s = r;
              return null;
            }
            if (/\d/.test(r)) {
              e.eatWhile(/[\w\.]/);
              if (e.eat(/eE/)) {
                e.eat(/\+\-/);
                e.eatWhile(/\d/);
              }
              return 'number';
            }
            if (r == '/') {
              if (e.eat('*')) {
                t.tokenize.push(f);
                return f(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
              if (d(t.lastToken, false)) {
                return u(r, e, t);
              }
            }
            if (r == '-' && e.eat('>')) {
              s = '->';
              return null;
            }
            if (/[+\-*&%=<>!?|\/~]/.test(r)) {
              e.eatWhile(/[+\-*&%=<>|~]/);
              return 'operator';
            }
            e.eatWhile(/[\w\$_]/);
            if (r == '@') {
              e.eatWhile(/[\w\$_\.]/);
              return 'meta';
            }
            if (t.lastToken == '.') return 'property';
            if (e.eat(':')) {
              s = 'proplabel';
              return 'property';
            }
            var l = e.current();
            if (o.propertyIsEnumerable(l)) {
              return 'atom';
            }
            if (n.propertyIsEnumerable(l)) {
              if (i.propertyIsEnumerable(l)) s = 'newstatement';
              else if (a.propertyIsEnumerable(l)) s = 'standalone';
              return 'keyword';
            }
            return 'variable';
          }
          l.isBase = true;
          function u(e, t, r) {
            var n = false;
            if (e != '/' && t.eat(e)) {
              if (t.eat(e)) n = true;
              else return 'string';
            }
            function i(t, r) {
              var i = false,
                a,
                o = !n;
              while ((a = t.next()) != null) {
                if (a == e && !i) {
                  if (!n) {
                    break;
                  }
                  if (t.match(e + e)) {
                    o = true;
                    break;
                  }
                }
                if (e == '"' && a == '$' && !i && t.eat('{')) {
                  r.tokenize.push(c());
                  return 'string';
                }
                i = !i && a == '\\';
              }
              if (o) r.tokenize.pop();
              return 'string';
            }
            r.tokenize.push(i);
            return i(t, r);
          }
          function c() {
            var e = 1;
            function t(t, r) {
              if (t.peek() == '}') {
                e--;
                if (e == 0) {
                  r.tokenize.pop();
                  return r.tokenize[r.tokenize.length - 1](t, r);
                }
              } else if (t.peek() == '{') {
                e++;
              }
              return l(t, r);
            }
            t.isBase = true;
            return t;
          }
          function f(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize.pop();
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function d(e, t) {
            return (
              !e ||
              e == 'operator' ||
              e == '->' ||
              /[\.\[\{\(,;:]/.test(e) ||
              e == 'newstatement' ||
              e == 'keyword' ||
              e == 'proplabel' ||
              (e == 'standalone' && !t)
            );
          }
          function m(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function p(e, t, r) {
            return (e.context = new m(e.indented, t, r, null, e.context));
          }
          function h(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: [l],
                context: new m((e || 0) - t.indentUnit, 0, 'top', false),
                indented: 0,
                startOfLine: true,
                lastToken: null,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
                if (r.type == 'statement' && !d(t.lastToken, true)) {
                  h(t);
                  r = t.context;
                }
              }
              if (e.eatSpace()) return null;
              s = null;
              var n = t.tokenize[t.tokenize.length - 1](e, t);
              if (n == 'comment') return n;
              if (r.align == null) r.align = true;
              if ((s == ';' || s == ':') && r.type == 'statement') h(t);
              else if (s == '->' && r.type == 'statement' && r.prev.type == '}') {
                h(t);
                t.context.align = false;
              } else if (s == '{') p(t, e.column(), '}');
              else if (s == '[') p(t, e.column(), ']');
              else if (s == '(') p(t, e.column(), ')');
              else if (s == '}') {
                while (r.type == 'statement') r = h(t);
                if (r.type == '}') r = h(t);
                while (r.type == 'statement') r = h(t);
              } else if (s == r.type) h(t);
              else if (
                r.type == '}' ||
                r.type == 'top' ||
                (r.type == 'statement' && s == 'newstatement')
              )
                p(t, e.column(), 'statement');
              t.startOfLine = false;
              t.lastToken = s || n;
              return n;
            },
            indent: function (r, n) {
              if (!r.tokenize[r.tokenize.length - 1].isBase) return e.Pass;
              var i = n && n.charAt(0),
                a = r.context;
              if (a.type == 'statement' && !d(r.lastToken, true)) a = a.prev;
              var o = i == a.type;
              if (a.type == 'statement')
                return a.indented + (i == '{' ? 0 : t.indentUnit);
              else if (a.align) return a.column + (o ? 0 : 1);
              else return a.indented + (o ? 0 : t.indentUnit);
            },
            electricChars: '{}',
            closeBrackets: { triples: '\'"' },
            fold: 'brace',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
          };
        });
        e.defineMIME('text/x-groovy', 'groovy');
      });
    },
    20147: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(16531), r(80853));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'haml',
          function (t) {
            var r = e.getMode(t, { name: 'htmlmixed' });
            var n = e.getMode(t, 'ruby');
            function i(e) {
              return function (t, r) {
                var n = t.peek();
                if (n == e && r.rubyState.tokenize.length == 1) {
                  t.next();
                  r.tokenize = o;
                  return 'closeAttributeTag';
                } else {
                  return a(t, r);
                }
              };
            }
            function a(e, t) {
              if (e.match('-#')) {
                e.skipToEnd();
                return 'comment';
              }
              return n.token(e, t.rubyState);
            }
            function o(e, t) {
              var n = e.peek();
              if (t.previousToken.style == 'comment') {
                if (t.indented > t.previousToken.indented) {
                  e.skipToEnd();
                  return 'commentLine';
                }
              }
              if (t.startOfLine) {
                if (n == '!' && e.match('!!')) {
                  e.skipToEnd();
                  return 'tag';
                } else if (e.match(/^%[\w:#\.]+=/)) {
                  t.tokenize = a;
                  return 'hamlTag';
                } else if (e.match(/^%[\w:]+/)) {
                  return 'hamlTag';
                } else if (n == '/') {
                  e.skipToEnd();
                  return 'comment';
                }
              }
              if (t.startOfLine || t.previousToken.style == 'hamlTag') {
                if (n == '#' || n == '.') {
                  e.match(/[\w-#\.]*/);
                  return 'hamlAttribute';
                }
              }
              if (
                t.startOfLine &&
                !e.match('--\x3e', false) &&
                (n == '=' || n == '-')
              ) {
                t.tokenize = a;
                return t.tokenize(e, t);
              }
              if (
                t.previousToken.style == 'hamlTag' ||
                t.previousToken.style == 'closeAttributeTag' ||
                t.previousToken.style == 'hamlAttribute'
              ) {
                if (n == '(') {
                  t.tokenize = i(')');
                  return t.tokenize(e, t);
                } else if (n == '{') {
                  if (!e.match(/^\{%.*/)) {
                    t.tokenize = i('}');
                    return t.tokenize(e, t);
                  }
                }
              }
              return r.token(e, t.htmlState);
            }
            return {
              startState: function () {
                var t = e.startState(r);
                var i = e.startState(n);
                return {
                  htmlState: t,
                  rubyState: i,
                  indented: 0,
                  previousToken: { style: null, indented: 0 },
                  tokenize: o,
                };
              },
              copyState: function (t) {
                return {
                  htmlState: e.copyState(r, t.htmlState),
                  rubyState: e.copyState(n, t.rubyState),
                  indented: t.indented,
                  previousToken: t.previousToken,
                  tokenize: t.tokenize,
                };
              },
              token: function (e, t) {
                if (e.sol()) {
                  t.indented = e.indentation();
                  t.startOfLine = true;
                }
                if (e.eatSpace()) return null;
                var r = t.tokenize(e, t);
                t.startOfLine = false;
                if (r && r != 'commentLine') {
                  t.previousToken = { style: r, indented: t.indented };
                }
                if (e.eol() && t.tokenize == a) {
                  e.backUp(1);
                  var n = e.peek();
                  e.next();
                  if (n && n != ',') {
                    t.tokenize = o;
                  }
                }
                if (r == 'hamlTag') {
                  r = 'tag';
                } else if (r == 'commentLine') {
                  r = 'comment';
                } else if (r == 'hamlAttribute') {
                  r = 'attribute';
                } else if (r == 'closeAttributeTag') {
                  r = null;
                }
                return r;
              },
            };
          },
          'htmlmixed',
          'ruby'
        );
        e.defineMIME('text/x-haml', 'haml');
      });
    },
    62101: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(40790), r(87093));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineSimpleMode('handlebars-tags', {
          start: [
            { regex: /\{\{\{/, push: 'handlebars_raw', token: 'tag' },
            { regex: /\{\{!--/, push: 'dash_comment', token: 'comment' },
            { regex: /\{\{!/, push: 'comment', token: 'comment' },
            { regex: /\{\{/, push: 'handlebars', token: 'tag' },
          ],
          handlebars_raw: [{ regex: /\}\}\}/, pop: true, token: 'tag' }],
          handlebars: [
            { regex: /\}\}/, pop: true, token: 'tag' },
            { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
            { regex: /'(?:[^\\']|\\.)*'?/, token: 'string' },
            { regex: />|[#\/]([A-Za-z_]\w*)/, token: 'keyword' },
            { regex: /(?:else|this)\b/, token: 'keyword' },
            { regex: /\d+/i, token: 'number' },
            { regex: /=|~|@|true|false/, token: 'atom' },
            { regex: /(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/, token: 'variable-2' },
          ],
          dash_comment: [
            { regex: /--\}\}/, pop: true, token: 'comment' },
            { regex: /./, token: 'comment' },
          ],
          comment: [
            { regex: /\}\}/, pop: true, token: 'comment' },
            { regex: /./, token: 'comment' },
          ],
          meta: { blockCommentStart: '{{--', blockCommentEnd: '--}}' },
        });
        e.defineMode('handlebars', function (t, r) {
          var n = e.getMode(t, 'handlebars-tags');
          if (!r || !r.base) return n;
          return e.multiplexingMode(e.getMode(t, r.base), {
            open: '{{',
            close: /\}\}\}?/,
            mode: n,
            parseDelimiters: true,
          });
        });
        e.defineMIME('text/x-handlebars-template', 'handlebars');
      });
    },
    28510: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(18176));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'haskell-literate',
          function (t, r) {
            var n = e.getMode(t, (r && r.base) || 'haskell');
            return {
              startState: function () {
                return { inCode: false, baseState: e.startState(n) };
              },
              token: function (e, t) {
                if (e.sol()) {
                  if ((t.inCode = e.eat('>'))) return 'meta';
                }
                if (t.inCode) {
                  return n.token(e, t.baseState);
                } else {
                  e.skipToEnd();
                  return 'comment';
                }
              },
              innerMode: function (e) {
                return e.inCode ? { state: e.baseState, mode: n } : null;
              },
            };
          },
          'haskell'
        );
        e.defineMIME('text/x-literate-haskell', 'haskell-literate');
      });
    },
    18176: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('haskell', function (e, t) {
          function r(e, t, r) {
            t(r);
            return r(e, t);
          }
          var n = /[a-z_]/;
          var i = /[A-Z]/;
          var a = /\d/;
          var o = /[0-9A-Fa-f]/;
          var s = /[0-7]/;
          var l = /[a-z_A-Z0-9'\xa1-\uffff]/;
          var u = /[-!#$%&*+.\/<=>?@\\^|~:]/;
          var c = /[(),;[\]`{}]/;
          var f = /[ \t\v\f]/;
          function d(e, t) {
            if (e.eatWhile(f)) {
              return null;
            }
            var d = e.next();
            if (c.test(d)) {
              if (d == '{' && e.eat('-')) {
                var h = 'comment';
                if (e.eat('#')) {
                  h = 'meta';
                }
                return r(e, t, m(h, 1));
              }
              return null;
            }
            if (d == "'") {
              if (e.eat('\\')) {
                e.next();
              } else {
                e.next();
              }
              if (e.eat("'")) {
                return 'string';
              }
              return 'string error';
            }
            if (d == '"') {
              return r(e, t, p);
            }
            if (i.test(d)) {
              e.eatWhile(l);
              if (e.eat('.')) {
                return 'qualifier';
              }
              return 'variable-2';
            }
            if (n.test(d)) {
              e.eatWhile(l);
              return 'variable';
            }
            if (a.test(d)) {
              if (d == '0') {
                if (e.eat(/[xX]/)) {
                  e.eatWhile(o);
                  return 'integer';
                }
                if (e.eat(/[oO]/)) {
                  e.eatWhile(s);
                  return 'number';
                }
              }
              e.eatWhile(a);
              var h = 'number';
              if (e.match(/^\.\d+/)) {
                h = 'number';
              }
              if (e.eat(/[eE]/)) {
                h = 'number';
                e.eat(/[-+]/);
                e.eatWhile(a);
              }
              return h;
            }
            if (d == '.' && e.eat('.')) return 'keyword';
            if (u.test(d)) {
              if (d == '-' && e.eat(/-/)) {
                e.eatWhile(/-/);
                if (!e.eat(u)) {
                  e.skipToEnd();
                  return 'comment';
                }
              }
              var h = 'variable';
              if (d == ':') {
                h = 'variable-2';
              }
              e.eatWhile(u);
              return h;
            }
            return 'error';
          }
          function m(e, t) {
            if (t == 0) {
              return d;
            }
            return function (r, n) {
              var i = t;
              while (!r.eol()) {
                var a = r.next();
                if (a == '{' && r.eat('-')) {
                  ++i;
                } else if (a == '-' && r.eat('}')) {
                  --i;
                  if (i == 0) {
                    n(d);
                    return e;
                  }
                }
              }
              n(m(e, i));
              return e;
            };
          }
          function p(e, t) {
            while (!e.eol()) {
              var r = e.next();
              if (r == '"') {
                t(d);
                return 'string';
              }
              if (r == '\\') {
                if (e.eol() || e.eat(f)) {
                  t(h);
                  return 'string';
                }
                if (e.eat('&')) {
                } else {
                  e.next();
                }
              }
            }
            t(d);
            return 'string error';
          }
          function h(e, t) {
            if (e.eat('\\')) {
              return r(e, t, p);
            }
            e.next();
            t(d);
            return 'error';
          }
          var g = (function () {
            var e = {};
            function r(t) {
              return function () {
                for (var r = 0; r < arguments.length; r++) e[arguments[r]] = t;
              };
            }
            r('keyword')(
              'case',
              'class',
              'data',
              'default',
              'deriving',
              'do',
              'else',
              'foreign',
              'if',
              'import',
              'in',
              'infix',
              'infixl',
              'infixr',
              'instance',
              'let',
              'module',
              'newtype',
              'of',
              'then',
              'type',
              'where',
              '_'
            );
            r('keyword')('..', ':', '::', '=', '\\', '<-', '->', '@', '~', '=>');
            r('builtin')(
              '!!',
              '$!',
              '$',
              '&&',
              '+',
              '++',
              '-',
              '.',
              '/',
              '/=',
              '<',
              '<*',
              '<=',
              '<$>',
              '<*>',
              '=<<',
              '==',
              '>',
              '>=',
              '>>',
              '>>=',
              '^',
              '^^',
              '||',
              '*',
              '*>',
              '**'
            );
            r('builtin')(
              'Applicative',
              'Bool',
              'Bounded',
              'Char',
              'Double',
              'EQ',
              'Either',
              'Enum',
              'Eq',
              'False',
              'FilePath',
              'Float',
              'Floating',
              'Fractional',
              'Functor',
              'GT',
              'IO',
              'IOError',
              'Int',
              'Integer',
              'Integral',
              'Just',
              'LT',
              'Left',
              'Maybe',
              'Monad',
              'Nothing',
              'Num',
              'Ord',
              'Ordering',
              'Rational',
              'Read',
              'ReadS',
              'Real',
              'RealFloat',
              'RealFrac',
              'Right',
              'Show',
              'ShowS',
              'String',
              'True'
            );
            r('builtin')(
              'abs',
              'acos',
              'acosh',
              'all',
              'and',
              'any',
              'appendFile',
              'asTypeOf',
              'asin',
              'asinh',
              'atan',
              'atan2',
              'atanh',
              'break',
              'catch',
              'ceiling',
              'compare',
              'concat',
              'concatMap',
              'const',
              'cos',
              'cosh',
              'curry',
              'cycle',
              'decodeFloat',
              'div',
              'divMod',
              'drop',
              'dropWhile',
              'either',
              'elem',
              'encodeFloat',
              'enumFrom',
              'enumFromThen',
              'enumFromThenTo',
              'enumFromTo',
              'error',
              'even',
              'exp',
              'exponent',
              'fail',
              'filter',
              'flip',
              'floatDigits',
              'floatRadix',
              'floatRange',
              'floor',
              'fmap',
              'foldl',
              'foldl1',
              'foldr',
              'foldr1',
              'fromEnum',
              'fromInteger',
              'fromIntegral',
              'fromRational',
              'fst',
              'gcd',
              'getChar',
              'getContents',
              'getLine',
              'head',
              'id',
              'init',
              'interact',
              'ioError',
              'isDenormalized',
              'isIEEE',
              'isInfinite',
              'isNaN',
              'isNegativeZero',
              'iterate',
              'last',
              'lcm',
              'length',
              'lex',
              'lines',
              'log',
              'logBase',
              'lookup',
              'map',
              'mapM',
              'mapM_',
              'max',
              'maxBound',
              'maximum',
              'maybe',
              'min',
              'minBound',
              'minimum',
              'mod',
              'negate',
              'not',
              'notElem',
              'null',
              'odd',
              'or',
              'otherwise',
              'pi',
              'pred',
              'print',
              'product',
              'properFraction',
              'pure',
              'putChar',
              'putStr',
              'putStrLn',
              'quot',
              'quotRem',
              'read',
              'readFile',
              'readIO',
              'readList',
              'readLn',
              'readParen',
              'reads',
              'readsPrec',
              'realToFrac',
              'recip',
              'rem',
              'repeat',
              'replicate',
              'return',
              'reverse',
              'round',
              'scaleFloat',
              'scanl',
              'scanl1',
              'scanr',
              'scanr1',
              'seq',
              'sequence',
              'sequence_',
              'show',
              'showChar',
              'showList',
              'showParen',
              'showString',
              'shows',
              'showsPrec',
              'significand',
              'signum',
              'sin',
              'sinh',
              'snd',
              'span',
              'splitAt',
              'sqrt',
              'subtract',
              'succ',
              'sum',
              'tail',
              'take',
              'takeWhile',
              'tan',
              'tanh',
              'toEnum',
              'toInteger',
              'toRational',
              'truncate',
              'uncurry',
              'undefined',
              'unlines',
              'until',
              'unwords',
              'unzip',
              'unzip3',
              'userError',
              'words',
              'writeFile',
              'zip',
              'zip3',
              'zipWith',
              'zipWith3'
            );
            var n = t.overrideKeywords;
            if (n) for (var i in n) if (n.hasOwnProperty(i)) e[i] = n[i];
            return e;
          })();
          return {
            startState: function () {
              return { f: d };
            },
            copyState: function (e) {
              return { f: e.f };
            },
            token: function (e, t) {
              var r = t.f(e, function (e) {
                t.f = e;
              });
              var n = e.current();
              return g.hasOwnProperty(n) ? g[n] : r;
            },
            blockCommentStart: '{-',
            blockCommentEnd: '-}',
            lineComment: '--',
          };
        });
        e.defineMIME('text/x-haskell', 'haskell');
      });
    },
    19889: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('haxe', function (e, t) {
          var r = e.indentUnit;
          function n(e) {
            return { type: e, style: 'keyword' };
          }
          var i = n('keyword a'),
            a = n('keyword b'),
            o = n('keyword c');
          var s = n('operator'),
            l = { type: 'atom', style: 'atom' },
            u = { type: 'attribute', style: 'attribute' };
          var c = n('typedef');
          var f = {
            if: i,
            while: i,
            else: a,
            do: a,
            try: a,
            return: o,
            break: o,
            continue: o,
            new: o,
            throw: o,
            var: n('var'),
            inline: u,
            static: u,
            using: n('import'),
            public: u,
            private: u,
            cast: n('cast'),
            import: n('import'),
            macro: n('macro'),
            function: n('function'),
            catch: n('catch'),
            untyped: n('untyped'),
            callback: n('cb'),
            for: n('for'),
            switch: n('switch'),
            case: n('case'),
            default: n('default'),
            in: s,
            never: n('property_access'),
            trace: n('trace'),
            class: c,
            abstract: c,
            enum: c,
            interface: c,
            typedef: c,
            extends: c,
            implements: c,
            dynamic: c,
            true: l,
            false: l,
            null: l,
          };
          var d = /[+\-*&%=<>!?|]/;
          function m(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function p(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (n == t && !r) return true;
              r = !r && n == '\\';
            }
          }
          var c, h;
          function g(e, t, r) {
            c = e;
            h = r;
            return t;
          }
          function b(e, t) {
            var r = e.next();
            if (r == '"' || r == "'") {
              return m(e, t, v(r));
            } else if (/[\[\]{}\(\),;\:\.]/.test(r)) {
              return g(r);
            } else if (r == '0' && e.eat(/x/i)) {
              e.eatWhile(/[\da-f]/i);
              return g('number', 'number');
            } else if (/\d/.test(r) || (r == '-' && e.eat(/\d/))) {
              e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/);
              return g('number', 'number');
            } else if (t.reAllowed && r == '~' && e.eat(/\//)) {
              p(e, '/');
              e.eatWhile(/[gimsu]/);
              return g('regexp', 'string-2');
            } else if (r == '/') {
              if (e.eat('*')) {
                return m(e, t, k);
              } else if (e.eat('/')) {
                e.skipToEnd();
                return g('comment', 'comment');
              } else {
                e.eatWhile(d);
                return g('operator', null, e.current());
              }
            } else if (r == '#') {
              e.skipToEnd();
              return g('conditional', 'meta');
            } else if (r == '@') {
              e.eat(/:/);
              e.eatWhile(/[\w_]/);
              return g('metadata', 'meta');
            } else if (d.test(r)) {
              e.eatWhile(d);
              return g('operator', null, e.current());
            } else {
              var n;
              if (/[A-Z]/.test(r)) {
                e.eatWhile(/[\w_<>]/);
                n = e.current();
                return g('type', 'variable-3', n);
              } else {
                e.eatWhile(/[\w_]/);
                var n = e.current(),
                  i = f.propertyIsEnumerable(n) && f[n];
                return i && t.kwAllowed
                  ? g(i.type, i.style, n)
                  : g('variable', 'variable', n);
              }
            }
          }
          function v(e) {
            return function (t, r) {
              if (p(t, e)) r.tokenize = b;
              return g('string', 'string');
            };
          }
          function k(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = b;
                break;
              }
              r = n == '*';
            }
            return g('comment', 'comment');
          }
          var _ = {
            atom: true,
            number: true,
            variable: true,
            string: true,
            regexp: true,
          };
          function x(e, t, r, n, i, a) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.prev = i;
            this.info = a;
            if (n != null) this.align = n;
          }
          function y(e, t) {
            for (var r = e.localVars; r; r = r.next) if (r.name == t) return true;
          }
          function w(e, t, r, n, i) {
            var a = e.cc;
            T.state = e;
            T.stream = i;
            (T.marked = null), (T.cc = a);
            if (!e.lexical.hasOwnProperty('align')) e.lexical.align = true;
            while (true) {
              var o = a.length ? a.pop() : D;
              if (o(r, n)) {
                while (a.length && a[a.length - 1].lex) a.pop()();
                if (T.marked) return T.marked;
                if (r == 'variable' && y(e, n)) return 'variable-2';
                if (r == 'variable' && E(e, n)) return 'variable-3';
                return t;
              }
            }
          }
          function E(e, t) {
            if (/[a-z]/.test(t.charAt(0))) return false;
            var r = e.importedtypes.length;
            for (var n = 0; n < r; n++) if (e.importedtypes[n] == t) return true;
          }
          function S(e) {
            var t = T.state;
            for (var r = t.importedtypes; r; r = r.next) if (r.name == e) return;
            t.importedtypes = { name: e, next: t.importedtypes };
          }
          var T = { state: null, column: null, marked: null, cc: null };
          function I() {
            for (var e = arguments.length - 1; e >= 0; e--) T.cc.push(arguments[e]);
          }
          function A() {
            I.apply(null, arguments);
            return true;
          }
          function C(e, t) {
            for (var r = t; r; r = r.next) if (r.name == e) return true;
            return false;
          }
          function z(e) {
            var t = T.state;
            if (t.context) {
              T.marked = 'def';
              if (C(e, t.localVars)) return;
              t.localVars = { name: e, next: t.localVars };
            } else if (t.globalVars) {
              if (C(e, t.globalVars)) return;
              t.globalVars = { name: e, next: t.globalVars };
            }
          }
          var R = { name: 'this', next: null };
          function M() {
            if (!T.state.context) T.state.localVars = R;
            T.state.context = { prev: T.state.context, vars: T.state.localVars };
          }
          function O() {
            T.state.localVars = T.state.context.vars;
            T.state.context = T.state.context.prev;
          }
          O.lex = true;
          function N(e, t) {
            var r = function () {
              var r = T.state;
              r.lexical = new x(r.indented, T.stream.column(), e, null, r.lexical, t);
            };
            r.lex = true;
            return r;
          }
          function $() {
            var e = T.state;
            if (e.lexical.prev) {
              if (e.lexical.type == ')') e.indented = e.lexical.indented;
              e.lexical = e.lexical.prev;
            }
          }
          $.lex = true;
          function L(e) {
            function t(r) {
              if (r == e) return A();
              else if (e == ';') return I();
              else return A(t);
            }
            return t;
          }
          function D(e) {
            if (e == '@') return A(W);
            if (e == 'var') return A(N('vardef'), X, L(';'), $);
            if (e == 'keyword a') return A(N('form'), P, D, $);
            if (e == 'keyword b') return A(N('form'), D, $);
            if (e == '{') return A(N('}'), M, Y, $, O);
            if (e == ';') return A();
            if (e == 'attribute') return A(q);
            if (e == 'function') return A(te);
            if (e == 'for') return A(N('form'), L('('), N(')'), Q, L(')'), $, D, $);
            if (e == 'variable') return A(N('stat'), H);
            if (e == 'switch')
              return A(N('form'), P, N('}', 'switch'), L('{'), Y, $, $);
            if (e == 'case') return A(P, L(':'));
            if (e == 'default') return A(L(':'));
            if (e == 'catch') return A(N('form'), M, L('('), ae, L(')'), D, $, O);
            if (e == 'import') return A(B, L(';'));
            if (e == 'typedef') return A(G);
            return I(N('stat'), P, L(';'), $);
          }
          function P(e) {
            if (_.hasOwnProperty(e)) return A(F);
            if (e == 'type') return A(F);
            if (e == 'function') return A(te);
            if (e == 'keyword c') return A(U);
            if (e == '(') return A(N(')'), U, L(')'), $, F);
            if (e == 'operator') return A(P);
            if (e == '[') return A(N(']'), K(U, ']'), $, F);
            if (e == '{') return A(N('}'), K(Z, '}'), $, F);
            return A();
          }
          function U(e) {
            if (e.match(/[;\}\)\],]/)) return I();
            return I(P);
          }
          function F(e, t) {
            if (e == 'operator' && /\+\+|--/.test(t)) return A(F);
            if (e == 'operator' || e == ':') return A(P);
            if (e == ';') return;
            if (e == '(') return A(N(')'), K(P, ')'), $, F);
            if (e == '.') return A(V, F);
            if (e == '[') return A(N(']'), P, L(']'), $, F);
          }
          function q(e) {
            if (e == 'attribute') return A(q);
            if (e == 'function') return A(te);
            if (e == 'var') return A(X);
          }
          function W(e) {
            if (e == ':') return A(W);
            if (e == 'variable') return A(W);
            if (e == '(') return A(N(')'), K(j, ')'), $, D);
          }
          function j(e) {
            if (e == 'variable') return A();
          }
          function B(e, t) {
            if (e == 'variable' && /[A-Z]/.test(t.charAt(0))) {
              S(t);
              return A();
            } else if (e == 'variable' || e == 'property' || e == '.' || t == '*') return A(B);
          }
          function G(e, t) {
            if (e == 'variable' && /[A-Z]/.test(t.charAt(0))) {
              S(t);
              return A();
            } else if (e == 'type' && /[A-Z]/.test(t.charAt(0))) {
              return A();
            }
          }
          function H(e) {
            if (e == ':') return A($, D);
            return I(F, L(';'), $);
          }
          function V(e) {
            if (e == 'variable') {
              T.marked = 'property';
              return A();
            }
          }
          function Z(e) {
            if (e == 'variable') T.marked = 'property';
            if (_.hasOwnProperty(e)) return A(L(':'), P);
          }
          function K(e, t) {
            function r(n) {
              if (n == ',') return A(e, r);
              if (n == t) return A();
              return A(L(t));
            }
            return function (n) {
              if (n == t) return A();
              else return I(e, r);
            };
          }
          function Y(e) {
            if (e == '}') return A();
            return I(D, Y);
          }
          function X(e, t) {
            if (e == 'variable') {
              z(t);
              return A(re, J);
            }
            return A();
          }
          function J(e, t) {
            if (t == '=') return A(P, J);
            if (e == ',') return A(X);
          }
          function Q(e, t) {
            if (e == 'variable') {
              z(t);
              return A(ee, P);
            } else {
              return I();
            }
          }
          function ee(e, t) {
            if (t == 'in') return A();
          }
          function te(e, t) {
            if (e == 'variable' || e == 'type') {
              z(t);
              return A(te);
            }
            if (t == 'new') return A(te);
            if (e == '(') return A(N(')'), M, K(ae, ')'), $, re, D, O);
          }
          function re(e) {
            if (e == ':') return A(ne);
          }
          function ne(e) {
            if (e == 'type') return A();
            if (e == 'variable') return A();
            if (e == '{') return A(N('}'), K(ie, '}'), $);
          }
          function ie(e) {
            if (e == 'variable') return A(re);
          }
          function ae(e, t) {
            if (e == 'variable') {
              z(t);
              return A(re);
            }
          }
          return {
            startState: function (e) {
              var n = [
                'Int',
                'Float',
                'String',
                'Void',
                'Std',
                'Bool',
                'Dynamic',
                'Array',
              ];
              var i = {
                tokenize: b,
                reAllowed: true,
                kwAllowed: true,
                cc: [],
                lexical: new x((e || 0) - r, 0, 'block', false),
                localVars: t.localVars,
                importedtypes: n,
                context: t.localVars && { vars: t.localVars },
                indented: 0,
              };
              if (t.globalVars && typeof t.globalVars == 'object')
                i.globalVars = t.globalVars;
              return i;
            },
            token: function (e, t) {
              if (e.sol()) {
                if (!t.lexical.hasOwnProperty('align')) t.lexical.align = false;
                t.indented = e.indentation();
              }
              if (e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              if (c == 'comment') return r;
              t.reAllowed = !!(
                c == 'operator' ||
                c == 'keyword c' ||
                c.match(/^[\[{}\(,;:]$/)
              );
              t.kwAllowed = c != '.';
              return w(t, r, c, h, e);
            },
            indent: function (e, t) {
              if (e.tokenize != b) return 0;
              var n = t && t.charAt(0),
                i = e.lexical;
              if (i.type == 'stat' && n == '}') i = i.prev;
              var a = i.type,
                o = n == a;
              if (a == 'vardef') return i.indented + 4;
              else if (a == 'form' && n == '{') return i.indented;
              else if (a == 'stat' || a == 'form') return i.indented + r;
              else if (i.info == 'switch' && !o)
                return i.indented + (/^(?:case|default)\b/.test(t) ? r : 2 * r);
              else if (i.align) return i.column + (o ? 0 : 1);
              else return i.indented + (o ? 0 : r);
            },
            electricChars: '{}',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
          };
        });
        e.defineMIME('text/x-haxe', 'haxe');
        e.defineMode('hxml', function () {
          return {
            startState: function () {
              return { define: false, inString: false };
            },
            token: function (e, t) {
              var r = e.peek();
              var n = e.sol();
              if (r == '#') {
                e.skipToEnd();
                return 'comment';
              }
              if (n && r == '-') {
                var i = 'variable-2';
                e.eat(/-/);
                if (e.peek() == '-') {
                  e.eat(/-/);
                  i = 'keyword a';
                }
                if (e.peek() == 'D') {
                  e.eat(/[D]/);
                  i = 'keyword c';
                  t.define = true;
                }
                e.eatWhile(/[A-Z]/i);
                return i;
              }
              var r = e.peek();
              if (t.inString == false && r == "'") {
                t.inString = true;
                e.next();
              }
              if (t.inString == true) {
                if (e.skipTo("'")) {
                } else {
                  e.skipToEnd();
                }
                if (e.peek() == "'") {
                  e.next();
                  t.inString = false;
                }
                return 'string';
              }
              e.next();
              return null;
            },
            lineComment: '#',
          };
        });
        e.defineMIME('text/x-hxml', 'hxml');
      });
    },
    79820: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(16531), r(87093));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'htmlembedded',
          function (t, r) {
            var n = r.closeComment || '--%>';
            return e.multiplexingMode(
              e.getMode(t, 'htmlmixed'),
              {
                open: r.openComment || '<%--',
                close: n,
                delimStyle: 'comment',
                mode: {
                  token: function (e) {
                    e.skipTo(n) || e.skipToEnd();
                    return 'comment';
                  },
                },
              },
              {
                open: r.open || r.scriptStartRegex || '<%',
                close: r.close || r.scriptEndRegex || '%>',
                mode: e.getMode(t, r.scriptingModeSpec),
              }
            );
          },
          'htmlmixed'
        );
        e.defineMIME('application/x-ejs', {
          name: 'htmlembedded',
          scriptingModeSpec: 'javascript',
        });
        e.defineMIME('application/x-aspx', {
          name: 'htmlembedded',
          scriptingModeSpec: 'text/x-csharp',
        });
        e.defineMIME('application/x-jsp', {
          name: 'htmlembedded',
          scriptingModeSpec: 'text/x-java',
        });
        e.defineMIME('application/x-erb', {
          name: 'htmlembedded',
          scriptingModeSpec: 'ruby',
        });
      });
    },
    16531: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(29589), r(96876), r(36629));
        else {
        }
      })(function (e) {
        'use strict';
        var t = {
          script: [
            ['lang', /(javascript|babel)/i, 'javascript'],
            [
              'type',
              /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
              'javascript',
            ],
            ['type', /./, 'text/plain'],
            [null, null, 'javascript'],
          ],
          style: [
            ['lang', /^css$/i, 'css'],
            ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
            ['type', /./, 'text/plain'],
            [null, null, 'css'],
          ],
        };
        function r(e, t, r) {
          var n = e.current(),
            i = n.search(t);
          if (i > -1) {
            e.backUp(n.length - i);
          } else if (n.match(/<\/?$/)) {
            e.backUp(n.length);
            if (!e.match(t, false)) e.match(n);
          }
          return r;
        }
        var n = {};
        function i(e) {
          var t = n[e];
          if (t) return t;
          return (n[e] = new RegExp(
            '\\s+' + e + '\\s*=\\s*(\'|")?([^\'"]+)(\'|")?\\s*'
          ));
        }
        function a(e, t) {
          var r = e.match(i(t));
          return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : '';
        }
        function o(e, t) {
          return new RegExp((t ? '^' : '') + '</s*' + e + 's*>', 'i');
        }
        function s(e, t) {
          for (var r in e) {
            var n = t[r] || (t[r] = []);
            var i = e[r];
            for (var a = i.length - 1; a >= 0; a--) n.unshift(i[a]);
          }
        }
        function l(e, t) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            if (!n[0] || n[1].test(a(t, n[0]))) return n[2];
          }
        }
        e.defineMode(
          'htmlmixed',
          function (n, i) {
            var a = e.getMode(n, {
              name: 'xml',
              htmlMode: true,
              multilineTagIndentFactor: i.multilineTagIndentFactor,
              multilineTagIndentPastTag: i.multilineTagIndentPastTag,
              allowMissingTagName: i.allowMissingTagName,
            });
            var u = {};
            var c = i && i.tags,
              f = i && i.scriptTypes;
            s(t, u);
            if (c) s(c, u);
            if (f)
              for (var d = f.length - 1; d >= 0; d--)
                u.script.unshift(['type', f[d].matches, f[d].mode]);
            function m(t, i) {
              var s = a.token(t, i.htmlState),
                c = /\btag\b/.test(s),
                f;
              if (
                c &&
                !/[<>\s\/]/.test(t.current()) &&
                (f = i.htmlState.tagName && i.htmlState.tagName.toLowerCase()) &&
                u.hasOwnProperty(f)
              ) {
                i.inTag = f + ' ';
              } else if (i.inTag && c && />$/.test(t.current())) {
                var d = /^([\S]+) (.*)/.exec(i.inTag);
                i.inTag = null;
                var p = t.current() == '>' && l(u[d[1]], d[2]);
                var h = e.getMode(n, p);
                var g = o(d[1], true),
                  b = o(d[1], false);
                i.token = function (e, t) {
                  if (e.match(g, false)) {
                    t.token = m;
                    t.localState = t.localMode = null;
                    return null;
                  }
                  return r(e, b, t.localMode.token(e, t.localState));
                };
                i.localMode = h;
                i.localState = e.startState(h, a.indent(i.htmlState, '', ''));
              } else if (i.inTag) {
                i.inTag += t.current();
                if (t.eol()) i.inTag += ' ';
              }
              return s;
            }
            return {
              startState: function () {
                var t = e.startState(a);
                return {
                  token: m,
                  inTag: null,
                  localMode: null,
                  localState: null,
                  htmlState: t,
                };
              },
              copyState: function (t) {
                var r;
                if (t.localState) {
                  r = e.copyState(t.localMode, t.localState);
                }
                return {
                  token: t.token,
                  inTag: t.inTag,
                  localMode: t.localMode,
                  localState: r,
                  htmlState: e.copyState(a, t.htmlState),
                };
              },
              token: function (e, t) {
                return t.token(e, t);
              },
              indent: function (t, r, n) {
                if (!t.localMode || /^\s*<\//.test(r))
                  return a.indent(t.htmlState, r, n);
                else if (t.localMode.indent)
                  return t.localMode.indent(t.localState, r, n);
                else return e.Pass;
              },
              innerMode: function (e) {
                return { state: e.localState || e.htmlState, mode: e.localMode || a };
              },
            };
          },
          'xml',
          'javascript',
          'css'
        );
        e.defineMIME('text/html', 'htmlmixed');
      });
    },
    98411: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('http', function () {
          function e(e, t) {
            e.skipToEnd();
            t.cur = o;
            return 'error';
          }
          function t(t, n) {
            if (t.match(/^HTTP\/\d\.\d/)) {
              n.cur = r;
              return 'keyword';
            } else if (t.match(/^[A-Z]+/) && /[ \t]/.test(t.peek())) {
              n.cur = i;
              return 'keyword';
            } else {
              return e(t, n);
            }
          }
          function r(t, r) {
            var i = t.match(/^\d+/);
            if (!i) return e(t, r);
            r.cur = n;
            var a = Number(i[0]);
            if (a >= 100 && a < 200) {
              return 'positive informational';
            } else if (a >= 200 && a < 300) {
              return 'positive success';
            } else if (a >= 300 && a < 400) {
              return 'positive redirect';
            } else if (a >= 400 && a < 500) {
              return 'negative client-error';
            } else if (a >= 500 && a < 600) {
              return 'negative server-error';
            } else {
              return 'error';
            }
          }
          function n(e, t) {
            e.skipToEnd();
            t.cur = o;
            return null;
          }
          function i(e, t) {
            e.eatWhile(/\S/);
            t.cur = a;
            return 'string-2';
          }
          function a(t, r) {
            if (t.match(/^HTTP\/\d\.\d$/)) {
              r.cur = o;
              return 'keyword';
            } else {
              return e(t, r);
            }
          }
          function o(e) {
            if (e.sol() && !e.eat(/[ \t]/)) {
              if (e.match(/^.*?:/)) {
                return 'atom';
              } else {
                e.skipToEnd();
                return 'error';
              }
            } else {
              e.skipToEnd();
              return 'string';
            }
          }
          function s(e) {
            e.skipToEnd();
            return null;
          }
          return {
            token: function (e, t) {
              var r = t.cur;
              if (r != o && r != s && e.eatSpace()) return null;
              return r(e, t);
            },
            blankLine: function (e) {
              e.cur = s;
            },
            startState: function () {
              return { cur: t };
            },
          };
        });
        e.defineMIME('message/http', 'http');
      });
    },
    41797: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          return new RegExp('^((' + e.join(')|(') + '))\\b', 'i');
        }
        var r = [
          'a_correlate',
          'abs',
          'acos',
          'adapt_hist_equal',
          'alog',
          'alog2',
          'alog10',
          'amoeba',
          'annotate',
          'app_user_dir',
          'app_user_dir_query',
          'arg_present',
          'array_equal',
          'array_indices',
          'arrow',
          'ascii_template',
          'asin',
          'assoc',
          'atan',
          'axis',
          'axis',
          'bandpass_filter',
          'bandreject_filter',
          'barplot',
          'bar_plot',
          'beseli',
          'beselj',
          'beselk',
          'besely',
          'beta',
          'biginteger',
          'bilinear',
          'bin_date',
          'binary_template',
          'bindgen',
          'binomial',
          'bit_ffs',
          'bit_population',
          'blas_axpy',
          'blk_con',
          'boolarr',
          'boolean',
          'boxplot',
          'box_cursor',
          'breakpoint',
          'broyden',
          'bubbleplot',
          'butterworth',
          'bytarr',
          'byte',
          'byteorder',
          'bytscl',
          'c_correlate',
          'calendar',
          'caldat',
          'call_external',
          'call_function',
          'call_method',
          'call_procedure',
          'canny',
          'catch',
          'cd',
          'cdf',
          'ceil',
          'chebyshev',
          'check_math',
          'chisqr_cvf',
          'chisqr_pdf',
          'choldc',
          'cholsol',
          'cindgen',
          'cir_3pnt',
          'clipboard',
          'close',
          'clust_wts',
          'cluster',
          'cluster_tree',
          'cmyk_convert',
          'code_coverage',
          'color_convert',
          'color_exchange',
          'color_quan',
          'color_range_map',
          'colorbar',
          'colorize_sample',
          'colormap_applicable',
          'colormap_gradient',
          'colormap_rotation',
          'colortable',
          'comfit',
          'command_line_args',
          'common',
          'compile_opt',
          'complex',
          'complexarr',
          'complexround',
          'compute_mesh_normals',
          'cond',
          'congrid',
          'conj',
          'constrained_min',
          'contour',
          'contour',
          'convert_coord',
          'convol',
          'convol_fft',
          'coord2to3',
          'copy_lun',
          'correlate',
          'cos',
          'cosh',
          'cpu',
          'cramer',
          'createboxplotdata',
          'create_cursor',
          'create_struct',
          'create_view',
          'crossp',
          'crvlength',
          'ct_luminance',
          'cti_test',
          'cursor',
          'curvefit',
          'cv_coord',
          'cvttobm',
          'cw_animate',
          'cw_animate_getp',
          'cw_animate_load',
          'cw_animate_run',
          'cw_arcball',
          'cw_bgroup',
          'cw_clr_index',
          'cw_colorsel',
          'cw_defroi',
          'cw_field',
          'cw_filesel',
          'cw_form',
          'cw_fslider',
          'cw_light_editor',
          'cw_light_editor_get',
          'cw_light_editor_set',
          'cw_orient',
          'cw_palette_editor',
          'cw_palette_editor_get',
          'cw_palette_editor_set',
          'cw_pdmenu',
          'cw_rgbslider',
          'cw_tmpl',
          'cw_zoom',
          'db_exists',
          'dblarr',
          'dcindgen',
          'dcomplex',
          'dcomplexarr',
          'define_key',
          'define_msgblk',
          'define_msgblk_from_file',
          'defroi',
          'defsysv',
          'delvar',
          'dendro_plot',
          'dendrogram',
          'deriv',
          'derivsig',
          'determ',
          'device',
          'dfpmin',
          'diag_matrix',
          'dialog_dbconnect',
          'dialog_message',
          'dialog_pickfile',
          'dialog_printersetup',
          'dialog_printjob',
          'dialog_read_image',
          'dialog_write_image',
          'dictionary',
          'digital_filter',
          'dilate',
          'dindgen',
          'dissolve',
          'dist',
          'distance_measure',
          'dlm_load',
          'dlm_register',
          'doc_library',
          'double',
          'draw_roi',
          'edge_dog',
          'efont',
          'eigenql',
          'eigenvec',
          'ellipse',
          'elmhes',
          'emboss',
          'empty',
          'enable_sysrtn',
          'eof',
          'eos',
          'erase',
          'erf',
          'erfc',
          'erfcx',
          'erode',
          'errorplot',
          'errplot',
          'estimator_filter',
          'execute',
          'exit',
          'exp',
          'expand',
          'expand_path',
          'expint',
          'extract',
          'extract_slice',
          'f_cvf',
          'f_pdf',
          'factorial',
          'fft',
          'file_basename',
          'file_chmod',
          'file_copy',
          'file_delete',
          'file_dirname',
          'file_expand_path',
          'file_gunzip',
          'file_gzip',
          'file_info',
          'file_lines',
          'file_link',
          'file_mkdir',
          'file_move',
          'file_poll_input',
          'file_readlink',
          'file_same',
          'file_search',
          'file_tar',
          'file_test',
          'file_untar',
          'file_unzip',
          'file_which',
          'file_zip',
          'filepath',
          'findgen',
          'finite',
          'fix',
          'flick',
          'float',
          'floor',
          'flow3',
          'fltarr',
          'flush',
          'format_axis_values',
          'forward_function',
          'free_lun',
          'fstat',
          'fulstr',
          'funct',
          'function',
          'fv_test',
          'fx_root',
          'fz_roots',
          'gamma',
          'gamma_ct',
          'gauss_cvf',
          'gauss_pdf',
          'gauss_smooth',
          'gauss2dfit',
          'gaussfit',
          'gaussian_function',
          'gaussint',
          'get_drive_list',
          'get_dxf_objects',
          'get_kbrd',
          'get_login_info',
          'get_lun',
          'get_screen_size',
          'getenv',
          'getwindows',
          'greg2jul',
          'grib',
          'grid_input',
          'grid_tps',
          'grid3',
          'griddata',
          'gs_iter',
          'h_eq_ct',
          'h_eq_int',
          'hanning',
          'hash',
          'hdf',
          'hdf5',
          'heap_free',
          'heap_gc',
          'heap_nosave',
          'heap_refcount',
          'heap_save',
          'help',
          'hilbert',
          'hist_2d',
          'hist_equal',
          'histogram',
          'hls',
          'hough',
          'hqr',
          'hsv',
          'i18n_multibytetoutf8',
          'i18n_multibytetowidechar',
          'i18n_utf8tomultibyte',
          'i18n_widechartomultibyte',
          'ibeta',
          'icontour',
          'iconvertcoord',
          'idelete',
          'identity',
          'idl_base64',
          'idl_container',
          'idl_validname',
          'idlexbr_assistant',
          'idlitsys_createtool',
          'idlunit',
          'iellipse',
          'igamma',
          'igetcurrent',
          'igetdata',
          'igetid',
          'igetproperty',
          'iimage',
          'image',
          'image_cont',
          'image_statistics',
          'image_threshold',
          'imaginary',
          'imap',
          'indgen',
          'int_2d',
          'int_3d',
          'int_tabulated',
          'intarr',
          'interpol',
          'interpolate',
          'interval_volume',
          'invert',
          'ioctl',
          'iopen',
          'ir_filter',
          'iplot',
          'ipolygon',
          'ipolyline',
          'iputdata',
          'iregister',
          'ireset',
          'iresolve',
          'irotate',
          'isa',
          'isave',
          'iscale',
          'isetcurrent',
          'isetproperty',
          'ishft',
          'isocontour',
          'isosurface',
          'isurface',
          'itext',
          'itranslate',
          'ivector',
          'ivolume',
          'izoom',
          'journal',
          'json_parse',
          'json_serialize',
          'jul2greg',
          'julday',
          'keyword_set',
          'krig2d',
          'kurtosis',
          'kw_test',
          'l64indgen',
          'la_choldc',
          'la_cholmprove',
          'la_cholsol',
          'la_determ',
          'la_eigenproblem',
          'la_eigenql',
          'la_eigenvec',
          'la_elmhes',
          'la_gm_linear_model',
          'la_hqr',
          'la_invert',
          'la_least_square_equality',
          'la_least_squares',
          'la_linear_equation',
          'la_ludc',
          'la_lumprove',
          'la_lusol',
          'la_svd',
          'la_tridc',
          'la_trimprove',
          'la_triql',
          'la_trired',
          'la_trisol',
          'label_date',
          'label_region',
          'ladfit',
          'laguerre',
          'lambda',
          'lambdap',
          'lambertw',
          'laplacian',
          'least_squares_filter',
          'leefilt',
          'legend',
          'legendre',
          'linbcg',
          'lindgen',
          'linfit',
          'linkimage',
          'list',
          'll_arc_distance',
          'lmfit',
          'lmgr',
          'lngamma',
          'lnp_test',
          'loadct',
          'locale_get',
          'logical_and',
          'logical_or',
          'logical_true',
          'lon64arr',
          'lonarr',
          'long',
          'long64',
          'lsode',
          'lu_complex',
          'ludc',
          'lumprove',
          'lusol',
          'm_correlate',
          'machar',
          'make_array',
          'make_dll',
          'make_rt',
          'map',
          'mapcontinents',
          'mapgrid',
          'map_2points',
          'map_continents',
          'map_grid',
          'map_image',
          'map_patch',
          'map_proj_forward',
          'map_proj_image',
          'map_proj_info',
          'map_proj_init',
          'map_proj_inverse',
          'map_set',
          'matrix_multiply',
          'matrix_power',
          'max',
          'md_test',
          'mean',
          'meanabsdev',
          'mean_filter',
          'median',
          'memory',
          'mesh_clip',
          'mesh_decimate',
          'mesh_issolid',
          'mesh_merge',
          'mesh_numtriangles',
          'mesh_obj',
          'mesh_smooth',
          'mesh_surfacearea',
          'mesh_validate',
          'mesh_volume',
          'message',
          'min',
          'min_curve_surf',
          'mk_html_help',
          'modifyct',
          'moment',
          'morph_close',
          'morph_distance',
          'morph_gradient',
          'morph_hitormiss',
          'morph_open',
          'morph_thin',
          'morph_tophat',
          'multi',
          'n_elements',
          'n_params',
          'n_tags',
          'ncdf',
          'newton',
          'noise_hurl',
          'noise_pick',
          'noise_scatter',
          'noise_slur',
          'norm',
          'obj_class',
          'obj_destroy',
          'obj_hasmethod',
          'obj_isa',
          'obj_new',
          'obj_valid',
          'objarr',
          'on_error',
          'on_ioerror',
          'online_help',
          'openr',
          'openu',
          'openw',
          'oplot',
          'oploterr',
          'orderedhash',
          'p_correlate',
          'parse_url',
          'particle_trace',
          'path_cache',
          'path_sep',
          'pcomp',
          'plot',
          'plot3d',
          'plot',
          'plot_3dbox',
          'plot_field',
          'ploterr',
          'plots',
          'polar_contour',
          'polar_surface',
          'polyfill',
          'polyshade',
          'pnt_line',
          'point_lun',
          'polarplot',
          'poly',
          'poly_2d',
          'poly_area',
          'poly_fit',
          'polyfillv',
          'polygon',
          'polyline',
          'polywarp',
          'popd',
          'powell',
          'pref_commit',
          'pref_get',
          'pref_set',
          'prewitt',
          'primes',
          'print',
          'printf',
          'printd',
          'pro',
          'product',
          'profile',
          'profiler',
          'profiles',
          'project_vol',
          'ps_show_fonts',
          'psafm',
          'pseudo',
          'ptr_free',
          'ptr_new',
          'ptr_valid',
          'ptrarr',
          'pushd',
          'qgrid3',
          'qhull',
          'qromb',
          'qromo',
          'qsimp',
          'query_*',
          'query_ascii',
          'query_bmp',
          'query_csv',
          'query_dicom',
          'query_gif',
          'query_image',
          'query_jpeg',
          'query_jpeg2000',
          'query_mrsid',
          'query_pict',
          'query_png',
          'query_ppm',
          'query_srf',
          'query_tiff',
          'query_video',
          'query_wav',
          'r_correlate',
          'r_test',
          'radon',
          'randomn',
          'randomu',
          'ranks',
          'rdpix',
          'read',
          'readf',
          'read_ascii',
          'read_binary',
          'read_bmp',
          'read_csv',
          'read_dicom',
          'read_gif',
          'read_image',
          'read_interfile',
          'read_jpeg',
          'read_jpeg2000',
          'read_mrsid',
          'read_pict',
          'read_png',
          'read_ppm',
          'read_spr',
          'read_srf',
          'read_sylk',
          'read_tiff',
          'read_video',
          'read_wav',
          'read_wave',
          'read_x11_bitmap',
          'read_xwd',
          'reads',
          'readu',
          'real_part',
          'rebin',
          'recall_commands',
          'recon3',
          'reduce_colors',
          'reform',
          'region_grow',
          'register_cursor',
          'regress',
          'replicate',
          'replicate_inplace',
          'resolve_all',
          'resolve_routine',
          'restore',
          'retall',
          'return',
          'reverse',
          'rk4',
          'roberts',
          'rot',
          'rotate',
          'round',
          'routine_filepath',
          'routine_info',
          'rs_test',
          's_test',
          'save',
          'savgol',
          'scale3',
          'scale3d',
          'scatterplot',
          'scatterplot3d',
          'scope_level',
          'scope_traceback',
          'scope_varfetch',
          'scope_varname',
          'search2d',
          'search3d',
          'sem_create',
          'sem_delete',
          'sem_lock',
          'sem_release',
          'set_plot',
          'set_shading',
          'setenv',
          'sfit',
          'shade_surf',
          'shade_surf_irr',
          'shade_volume',
          'shift',
          'shift_diff',
          'shmdebug',
          'shmmap',
          'shmunmap',
          'shmvar',
          'show3',
          'showfont',
          'signum',
          'simplex',
          'sin',
          'sindgen',
          'sinh',
          'size',
          'skewness',
          'skip_lun',
          'slicer3',
          'slide_image',
          'smooth',
          'sobel',
          'socket',
          'sort',
          'spawn',
          'sph_4pnt',
          'sph_scat',
          'spher_harm',
          'spl_init',
          'spl_interp',
          'spline',
          'spline_p',
          'sprsab',
          'sprsax',
          'sprsin',
          'sprstp',
          'sqrt',
          'standardize',
          'stddev',
          'stop',
          'strarr',
          'strcmp',
          'strcompress',
          'streamline',
          'streamline',
          'stregex',
          'stretch',
          'string',
          'strjoin',
          'strlen',
          'strlowcase',
          'strmatch',
          'strmessage',
          'strmid',
          'strpos',
          'strput',
          'strsplit',
          'strtrim',
          'struct_assign',
          'struct_hide',
          'strupcase',
          'surface',
          'surface',
          'surfr',
          'svdc',
          'svdfit',
          'svsol',
          'swap_endian',
          'swap_endian_inplace',
          'symbol',
          'systime',
          't_cvf',
          't_pdf',
          't3d',
          'tag_names',
          'tan',
          'tanh',
          'tek_color',
          'temporary',
          'terminal_size',
          'tetra_clip',
          'tetra_surface',
          'tetra_volume',
          'text',
          'thin',
          'thread',
          'threed',
          'tic',
          'time_test2',
          'timegen',
          'timer',
          'timestamp',
          'timestamptovalues',
          'tm_test',
          'toc',
          'total',
          'trace',
          'transpose',
          'tri_surf',
          'triangulate',
          'trigrid',
          'triql',
          'trired',
          'trisol',
          'truncate_lun',
          'ts_coef',
          'ts_diff',
          'ts_fcast',
          'ts_smooth',
          'tv',
          'tvcrs',
          'tvlct',
          'tvrd',
          'tvscl',
          'typename',
          'uindgen',
          'uint',
          'uintarr',
          'ul64indgen',
          'ulindgen',
          'ulon64arr',
          'ulonarr',
          'ulong',
          'ulong64',
          'uniq',
          'unsharp_mask',
          'usersym',
          'value_locate',
          'variance',
          'vector',
          'vector_field',
          'vel',
          'velovect',
          'vert_t3d',
          'voigt',
          'volume',
          'voronoi',
          'voxel_proj',
          'wait',
          'warp_tri',
          'watershed',
          'wdelete',
          'wf_draw',
          'where',
          'widget_base',
          'widget_button',
          'widget_combobox',
          'widget_control',
          'widget_displaycontextmenu',
          'widget_draw',
          'widget_droplist',
          'widget_event',
          'widget_info',
          'widget_label',
          'widget_list',
          'widget_propertysheet',
          'widget_slider',
          'widget_tab',
          'widget_table',
          'widget_text',
          'widget_tree',
          'widget_tree_move',
          'widget_window',
          'wiener_filter',
          'window',
          'window',
          'write_bmp',
          'write_csv',
          'write_gif',
          'write_image',
          'write_jpeg',
          'write_jpeg2000',
          'write_nrif',
          'write_pict',
          'write_png',
          'write_ppm',
          'write_spr',
          'write_srf',
          'write_sylk',
          'write_tiff',
          'write_video',
          'write_wav',
          'write_wave',
          'writeu',
          'wset',
          'wshow',
          'wtn',
          'wv_applet',
          'wv_cwt',
          'wv_cw_wavelet',
          'wv_denoise',
          'wv_dwt',
          'wv_fn_coiflet',
          'wv_fn_daubechies',
          'wv_fn_gaussian',
          'wv_fn_haar',
          'wv_fn_morlet',
          'wv_fn_paul',
          'wv_fn_symlet',
          'wv_import_data',
          'wv_import_wavelet',
          'wv_plot3d_wps',
          'wv_plot_multires',
          'wv_pwt',
          'wv_tool_denoise',
          'xbm_edit',
          'xdisplayfile',
          'xdxf',
          'xfont',
          'xinteranimate',
          'xloadct',
          'xmanager',
          'xmng_tmpl',
          'xmtool',
          'xobjview',
          'xobjview_rotate',
          'xobjview_write_image',
          'xpalette',
          'xpcolor',
          'xplot3d',
          'xregistered',
          'xroi',
          'xsq_test',
          'xsurface',
          'xvaredit',
          'xvolume',
          'xvolume_rotate',
          'xvolume_write_image',
          'xyouts',
          'zlib_compress',
          'zlib_uncompress',
          'zoom',
          'zoom_24',
        ];
        var n = t(r);
        var i = [
          'begin',
          'end',
          'endcase',
          'endfor',
          'endwhile',
          'endif',
          'endrep',
          'endforeach',
          'break',
          'case',
          'continue',
          'for',
          'foreach',
          'goto',
          'if',
          'then',
          'else',
          'repeat',
          'until',
          'switch',
          'while',
          'do',
          'pro',
          'function',
        ];
        var a = t(i);
        e.registerHelper('hintWords', 'idl', r.concat(i));
        var o = new RegExp('^[_a-z¡-￿][_a-z0-9¡-￿]*', 'i');
        var s = /[+\-*&=<>\/@#~$]/;
        var l = new RegExp('(and|or|eq|lt|le|gt|ge|ne|not)', 'i');
        function u(e) {
          if (e.eatSpace()) return null;
          if (e.match(';')) {
            e.skipToEnd();
            return 'comment';
          }
          if (e.match(/^[0-9\.+-]/, false)) {
            if (e.match(/^[+-]?0x[0-9a-fA-F]+/)) return 'number';
            if (e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)) return 'number';
            if (e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) return 'number';
          }
          if (e.match(/^"([^"]|(""))*"/)) {
            return 'string';
          }
          if (e.match(/^'([^']|(''))*'/)) {
            return 'string';
          }
          if (e.match(a)) {
            return 'keyword';
          }
          if (e.match(n)) {
            return 'builtin';
          }
          if (e.match(o)) {
            return 'variable';
          }
          if (e.match(s) || e.match(l)) {
            return 'operator';
          }
          e.next();
          return null;
        }
        e.defineMode('idl', function () {
          return {
            token: function (e) {
              return u(e);
            },
          };
        });
        e.defineMIME('text/x-idl', 'idl');
      });
    },
    74670: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('jinja2', function () {
          var e = [
              'and',
              'as',
              'block',
              'endblock',
              'by',
              'cycle',
              'debug',
              'else',
              'elif',
              'extends',
              'filter',
              'endfilter',
              'firstof',
              'for',
              'endfor',
              'if',
              'endif',
              'ifchanged',
              'endifchanged',
              'ifequal',
              'endifequal',
              'ifnotequal',
              'endifnotequal',
              'in',
              'include',
              'load',
              'not',
              'now',
              'or',
              'parsed',
              'regroup',
              'reversed',
              'spaceless',
              'endspaceless',
              'ssi',
              'templatetag',
              'openblock',
              'closeblock',
              'openvariable',
              'closevariable',
              'openbrace',
              'closebrace',
              'opencomment',
              'closecomment',
              'widthratio',
              'url',
              'with',
              'endwith',
              'get_current_language',
              'trans',
              'endtrans',
              'noop',
              'blocktrans',
              'endblocktrans',
              'get_available_languages',
              'get_current_language_bidi',
              'plural',
            ],
            t = /^[+\-*&%=<>!?|~^]/,
            r = /^[:\[\(\{]/,
            n = ['true', 'false'],
            i = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
          e = new RegExp('((' + e.join(')|(') + '))\\b');
          n = new RegExp('((' + n.join(')|(') + '))\\b');
          function a(a, o) {
            var s = a.peek();
            if (o.incomment) {
              if (!a.skipTo('#}')) {
                a.skipToEnd();
              } else {
                a.eatWhile(/\#|}/);
                o.incomment = false;
              }
              return 'comment';
            } else if (o.intag) {
              if (o.operator) {
                o.operator = false;
                if (a.match(n)) {
                  return 'atom';
                }
                if (a.match(i)) {
                  return 'number';
                }
              }
              if (o.sign) {
                o.sign = false;
                if (a.match(n)) {
                  return 'atom';
                }
                if (a.match(i)) {
                  return 'number';
                }
              }
              if (o.instring) {
                if (s == o.instring) {
                  o.instring = false;
                }
                a.next();
                return 'string';
              } else if (s == "'" || s == '"') {
                o.instring = s;
                a.next();
                return 'string';
              } else if (
                a.match(o.intag + '}') ||
                (a.eat('-') && a.match(o.intag + '}'))
              ) {
                o.intag = false;
                return 'tag';
              } else if (a.match(t)) {
                o.operator = true;
                return 'operator';
              } else if (a.match(r)) {
                o.sign = true;
              } else {
                if (a.eat(' ') || a.sol()) {
                  if (a.match(e)) {
                    return 'keyword';
                  }
                  if (a.match(n)) {
                    return 'atom';
                  }
                  if (a.match(i)) {
                    return 'number';
                  }
                  if (a.sol()) {
                    a.next();
                  }
                } else {
                  a.next();
                }
              }
              return 'variable';
            } else if (a.eat('{')) {
              if (a.eat('#')) {
                o.incomment = true;
                if (!a.skipTo('#}')) {
                  a.skipToEnd();
                } else {
                  a.eatWhile(/\#|}/);
                  o.incomment = false;
                }
                return 'comment';
              } else if ((s = a.eat(/\{|%/))) {
                o.intag = s;
                if (s == '{') {
                  o.intag = '}';
                }
                a.eat('-');
                return 'tag';
              }
            }
            a.next();
          }
          return {
            startState: function () {
              return { tokenize: a };
            },
            token: function (e, t) {
              return t.tokenize(e, t);
            },
            blockCommentStart: '{#',
            blockCommentEnd: '#}',
          };
        });
        e.defineMIME('text/jinja2', 'jinja2');
      });
    },
    14373: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('livescript', function () {
          var e = function (e, t) {
            var r = t.next || 'start';
            if (r) {
              t.next = t.next;
              var n = a[r];
              if (n.splice) {
                for (var i = 0; i < n.length; ++i) {
                  var o = n[i];
                  if (o.regex && e.match(o.regex)) {
                    t.next = o.next || t.next;
                    return o.token;
                  }
                }
                e.next();
                return 'error';
              }
              if (e.match((o = a[r]))) {
                if (o.regex && e.match(o.regex)) {
                  t.next = o.next;
                  return o.token;
                } else {
                  e.next();
                  return 'error';
                }
              }
            }
            e.next();
            return 'error';
          };
          var t = {
            startState: function () {
              return {
                next: 'start',
                lastToken: { style: null, indent: 0, content: '' },
              };
            },
            token: function (t, r) {
              while (t.pos == t.start) var n = e(t, r);
              r.lastToken = { style: n, indent: t.indentation(), content: t.current() };
              return n.replace(/\./g, ' ');
            },
            indent: function (e) {
              var t = e.lastToken.indent;
              if (e.lastToken.content.match(r)) {
                t += 2;
              }
              return t;
            },
          };
          return t;
        });
        var t =
          '(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*';
        var r = RegExp(
          '(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*' +
            t +
            ')?))\\s*$'
        );
        var n = '(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))';
        var i = { token: 'string', regex: '.+' };
        var a = {
          start: [
            { token: 'comment.doc', regex: '/\\*', next: 'comment' },
            { token: 'comment', regex: '#.*' },
            {
              token: 'keyword',
              regex:
                '(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)' +
                n,
            },
            {
              token: 'constant.language',
              regex: '(?:true|false|yes|no|on|off|null|void|undefined)' + n,
            },
            {
              token: 'invalid.illegal',
              regex:
                '(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)' +
                n,
            },
            {
              token: 'language.support.class',
              regex:
                '(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)' +
                n,
            },
            {
              token: 'language.support.function',
              regex:
                '(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)' +
                n,
            },
            {
              token: 'variable.language',
              regex: '(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)' + n,
            },
            { token: 'identifier', regex: t + '\\s*:(?![:=])' },
            { token: 'variable', regex: t },
            { token: 'keyword.operator', regex: '(?:\\.{3}|\\s+\\?)' },
            { token: 'keyword.variable', regex: '(?:@+|::|\\.\\.)', next: 'key' },
            { token: 'keyword.operator', regex: '\\.\\s*', next: 'key' },
            { token: 'string', regex: '\\\\\\S[^\\s,;)}\\]]*' },
            { token: 'string.doc', regex: "'''", next: 'qdoc' },
            { token: 'string.doc', regex: '"""', next: 'qqdoc' },
            { token: 'string', regex: "'", next: 'qstring' },
            { token: 'string', regex: '"', next: 'qqstring' },
            { token: 'string', regex: '`', next: 'js' },
            { token: 'string', regex: '<\\[', next: 'words' },
            { token: 'string.regex', regex: '//', next: 'heregex' },
            {
              token: 'string.regex',
              regex:
                '\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}',
              next: 'key',
            },
            {
              token: 'constant.numeric',
              regex:
                '(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)',
            },
            { token: 'lparen', regex: '[({[]' },
            { token: 'rparen', regex: '[)}\\]]', next: 'key' },
            { token: 'keyword.operator', regex: '\\S+' },
            { token: 'text', regex: '\\s+' },
          ],
          heregex: [
            { token: 'string.regex', regex: '.*?//[gimy$?]{0,4}', next: 'start' },
            { token: 'string.regex', regex: '\\s*#{' },
            { token: 'comment.regex', regex: '\\s+(?:#.*)?' },
            { token: 'string.regex', regex: '\\S+' },
          ],
          key: [
            { token: 'keyword.operator', regex: '[.?@!]+' },
            { token: 'identifier', regex: t, next: 'start' },
            { token: 'text', regex: '', next: 'start' },
          ],
          comment: [
            { token: 'comment.doc', regex: '.*?\\*/', next: 'start' },
            { token: 'comment.doc', regex: '.+' },
          ],
          qdoc: [{ token: 'string', regex: ".*?'''", next: 'key' }, i],
          qqdoc: [{ token: 'string', regex: '.*?"""', next: 'key' }, i],
          qstring: [
            { token: 'string', regex: "[^\\\\']*(?:\\\\.[^\\\\']*)*'", next: 'key' },
            i,
          ],
          qqstring: [
            { token: 'string', regex: '[^\\\\"]*(?:\\\\.[^\\\\"]*)*"', next: 'key' },
            i,
          ],
          js: [
            { token: 'string', regex: '[^\\\\`]*(?:\\\\.[^\\\\`]*)*`', next: 'key' },
            i,
          ],
          words: [{ token: 'string', regex: '.*?\\]>', next: 'key' }, i],
        };
        for (var o in a) {
          var s = a[o];
          if (s.splice) {
            for (var l = 0, u = s.length; l < u; ++l) {
              var c = s[l];
              if (typeof c.regex === 'string') {
                a[o][l].regex = new RegExp('^' + c.regex);
              }
            }
          } else if (typeof c.regex === 'string') {
            a[o].regex = new RegExp('^' + s.regex);
          }
        }
        e.defineMIME('text/x-livescript', 'livescript');
      });
    },
    57745: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('lua', function (e, t) {
          var r = e.indentUnit;
          function n(e) {
            return new RegExp('^(?:' + e.join('|') + ')', 'i');
          }
          function i(e) {
            return new RegExp('^(?:' + e.join('|') + ')$', 'i');
          }
          var a = i(t.specials || []);
          var o = i([
            '_G',
            '_VERSION',
            'assert',
            'collectgarbage',
            'dofile',
            'error',
            'getfenv',
            'getmetatable',
            'ipairs',
            'load',
            'loadfile',
            'loadstring',
            'module',
            'next',
            'pairs',
            'pcall',
            'print',
            'rawequal',
            'rawget',
            'rawset',
            'require',
            'select',
            'setfenv',
            'setmetatable',
            'tonumber',
            'tostring',
            'type',
            'unpack',
            'xpcall',
            'coroutine.create',
            'coroutine.resume',
            'coroutine.running',
            'coroutine.status',
            'coroutine.wrap',
            'coroutine.yield',
            'debug.debug',
            'debug.getfenv',
            'debug.gethook',
            'debug.getinfo',
            'debug.getlocal',
            'debug.getmetatable',
            'debug.getregistry',
            'debug.getupvalue',
            'debug.setfenv',
            'debug.sethook',
            'debug.setlocal',
            'debug.setmetatable',
            'debug.setupvalue',
            'debug.traceback',
            'close',
            'flush',
            'lines',
            'read',
            'seek',
            'setvbuf',
            'write',
            'io.close',
            'io.flush',
            'io.input',
            'io.lines',
            'io.open',
            'io.output',
            'io.popen',
            'io.read',
            'io.stderr',
            'io.stdin',
            'io.stdout',
            'io.tmpfile',
            'io.type',
            'io.write',
            'math.abs',
            'math.acos',
            'math.asin',
            'math.atan',
            'math.atan2',
            'math.ceil',
            'math.cos',
            'math.cosh',
            'math.deg',
            'math.exp',
            'math.floor',
            'math.fmod',
            'math.frexp',
            'math.huge',
            'math.ldexp',
            'math.log',
            'math.log10',
            'math.max',
            'math.min',
            'math.modf',
            'math.pi',
            'math.pow',
            'math.rad',
            'math.random',
            'math.randomseed',
            'math.sin',
            'math.sinh',
            'math.sqrt',
            'math.tan',
            'math.tanh',
            'os.clock',
            'os.date',
            'os.difftime',
            'os.execute',
            'os.exit',
            'os.getenv',
            'os.remove',
            'os.rename',
            'os.setlocale',
            'os.time',
            'os.tmpname',
            'package.cpath',
            'package.loaded',
            'package.loaders',
            'package.loadlib',
            'package.path',
            'package.preload',
            'package.seeall',
            'string.byte',
            'string.char',
            'string.dump',
            'string.find',
            'string.format',
            'string.gmatch',
            'string.gsub',
            'string.len',
            'string.lower',
            'string.match',
            'string.rep',
            'string.reverse',
            'string.sub',
            'string.upper',
            'table.concat',
            'table.insert',
            'table.maxn',
            'table.remove',
            'table.sort',
          ]);
          var s = i([
            'and',
            'break',
            'elseif',
            'false',
            'nil',
            'not',
            'or',
            'return',
            'true',
            'function',
            'end',
            'if',
            'then',
            'else',
            'do',
            'while',
            'repeat',
            'until',
            'for',
            'in',
            'local',
          ]);
          var l = i(['function', 'if', 'repeat', 'do', '\\(', '{']);
          var u = i(['end', 'until', '\\)', '}']);
          var c = n(['end', 'until', '\\)', '}', 'else', 'elseif']);
          function f(e) {
            var t = 0;
            while (e.eat('=')) ++t;
            e.eat('[');
            return t;
          }
          function d(e, t) {
            var r = e.next();
            if (r == '-' && e.eat('-')) {
              if (e.eat('[') && e.eat('[')) return (t.cur = m(f(e), 'comment'))(e, t);
              e.skipToEnd();
              return 'comment';
            }
            if (r == '"' || r == "'") return (t.cur = p(r))(e, t);
            if (r == '[' && /[\[=]/.test(e.peek()))
              return (t.cur = m(f(e), 'string'))(e, t);
            if (/\d/.test(r)) {
              e.eatWhile(/[\w.%]/);
              return 'number';
            }
            if (/[\w_]/.test(r)) {
              e.eatWhile(/[\w\\\-_.]/);
              return 'variable';
            }
            return null;
          }
          function m(e, t) {
            return function (r, n) {
              var i = null,
                a;
              while ((a = r.next()) != null) {
                if (i == null) {
                  if (a == ']') i = 0;
                } else if (a == '=') ++i;
                else if (a == ']' && i == e) {
                  n.cur = d;
                  break;
                } else i = null;
              }
              return t;
            };
          }
          function p(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) break;
                n = !n && i == '\\';
              }
              if (!n) r.cur = d;
              return 'string';
            };
          }
          return {
            startState: function (e) {
              return { basecol: e || 0, indentDepth: 0, cur: d };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var r = t.cur(e, t);
              var n = e.current();
              if (r == 'variable') {
                if (s.test(n)) r = 'keyword';
                else if (o.test(n)) r = 'builtin';
                else if (a.test(n)) r = 'variable-2';
              }
              if (r != 'comment' && r != 'string') {
                if (l.test(n)) ++t.indentDepth;
                else if (u.test(n)) --t.indentDepth;
              }
              return r;
            },
            indent: function (e, t) {
              var n = c.test(t);
              return e.basecol + r * (e.indentDepth - (n ? 1 : 0));
            },
            electricInput: /^\s*(?:end|until|else|\)|\})$/,
            lineComment: '--',
            blockCommentStart: '--[[',
            blockCommentEnd: ']]',
          };
        });
        e.defineMIME('text/x-lua', 'lua');
      });
    },
    93672: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('mathematica', function (e, t) {
          var r = '[a-zA-Z\\$][a-zA-Z0-9\\$]*';
          var n = '(?:\\d+)';
          var i = '(?:\\.\\d+|\\d+\\.\\d*|\\d+)';
          var a = '(?:\\.\\w+|\\w+\\.\\w*|\\w+)';
          var o = '(?:`(?:`?' + i + ')?)';
          var s = new RegExp(
            '(?:' + n + '(?:\\^\\^' + a + o + '?(?:\\*\\^[+-]?\\d+)?))'
          );
          var l = new RegExp('(?:' + i + o + '?(?:\\*\\^[+-]?\\d+)?)');
          var u = new RegExp('(?:`?)(?:' + r + ')(?:`(?:' + r + '))*(?:`?)');
          function c(e, t) {
            var r;
            r = e.next();
            if (r === '"') {
              t.tokenize = f;
              return t.tokenize(e, t);
            }
            if (r === '(') {
              if (e.eat('*')) {
                t.commentLevel++;
                t.tokenize = d;
                return t.tokenize(e, t);
              }
            }
            e.backUp(1);
            if (e.match(s, true, false)) {
              return 'number';
            }
            if (e.match(l, true, false)) {
              return 'number';
            }
            if (e.match(/(?:In|Out)\[[0-9]*\]/, true, false)) {
              return 'atom';
            }
            if (
              e.match(
                /([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,
                true,
                false
              )
            ) {
              return 'meta';
            }
            if (
              e.match(
                /([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,
                true,
                false
              )
            ) {
              return 'string-2';
            }
            if (
              e.match(
                /([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,
                true,
                false
              )
            ) {
              return 'variable-2';
            }
            if (
              e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)
            ) {
              return 'variable-2';
            }
            if (e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, true, false)) {
              return 'variable-2';
            }
            if (e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, true, false)) {
              return 'variable-2';
            }
            if (e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, true, false)) {
              return 'variable-3';
            }
            if (e.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
              return 'bracket';
            }
            if (e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, true, false)) {
              return 'variable-2';
            }
            if (e.match(u, true, false)) {
              return 'keyword';
            }
            if (
              e.match(
                /(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,
                true,
                false
              )
            ) {
              return 'operator';
            }
            e.next();
            return 'error';
          }
          function f(e, t) {
            var r,
              n = false,
              i = false;
            while ((r = e.next()) != null) {
              if (r === '"' && !i) {
                n = true;
                break;
              }
              i = !i && r === '\\';
            }
            if (n && !i) {
              t.tokenize = c;
            }
            return 'string';
          }
          function d(e, t) {
            var r, n;
            while (t.commentLevel > 0 && (n = e.next()) != null) {
              if (r === '(' && n === '*') t.commentLevel++;
              if (r === '*' && n === ')') t.commentLevel--;
              r = n;
            }
            if (t.commentLevel <= 0) {
              t.tokenize = c;
            }
            return 'comment';
          }
          return {
            startState: function () {
              return { tokenize: c, commentLevel: 0 };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return t.tokenize(e, t);
            },
            blockCommentStart: '(*',
            blockCommentEnd: '*)',
          };
        });
        e.defineMIME('text/x-mathematica', { name: 'mathematica' });
      });
    },
    94377: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = [
          'From',
          'Sender',
          'Reply-To',
          'To',
          'Cc',
          'Bcc',
          'Message-ID',
          'In-Reply-To',
          'References',
          'Resent-From',
          'Resent-Sender',
          'Resent-To',
          'Resent-Cc',
          'Resent-Bcc',
          'Resent-Message-ID',
          'Return-Path',
          'Received',
        ];
        var r = ['Date', 'Subject', 'Comments', 'Keywords', 'Resent-Date'];
        e.registerHelper('hintWords', 'mbox', t.concat(r));
        var n = /^[ \t]/;
        var i = /^From /;
        var a = new RegExp('^(' + t.join('|') + '): ');
        var o = new RegExp('^(' + r.join('|') + '): ');
        var s = /^[^:]+:/;
        var l = /^[^ ]+@[^ ]+/;
        var u = /^.*?(?=[^ ]+?@[^ ]+)/;
        var c = /^<.*?>/;
        var f = /^.*?(?=<.*>)/;
        function d(e) {
          if (e === 'Subject') return 'header';
          return 'string';
        }
        function m(e, t) {
          if (e.sol()) {
            t.inSeparator = false;
            if (t.inHeader && e.match(n)) {
              return null;
            } else {
              t.inHeader = false;
              t.header = null;
            }
            if (e.match(i)) {
              t.inHeaders = true;
              t.inSeparator = true;
              return 'atom';
            }
            var r;
            var m = false;
            if ((r = e.match(o)) || ((m = true) && (r = e.match(a)))) {
              t.inHeaders = true;
              t.inHeader = true;
              t.emailPermitted = m;
              t.header = r[1];
              return 'atom';
            }
            if (t.inHeaders && (r = e.match(s))) {
              t.inHeader = true;
              t.emailPermitted = true;
              t.header = r[1];
              return 'atom';
            }
            t.inHeaders = false;
            e.skipToEnd();
            return null;
          }
          if (t.inSeparator) {
            if (e.match(l)) return 'link';
            if (e.match(u)) return 'atom';
            e.skipToEnd();
            return 'atom';
          }
          if (t.inHeader) {
            var p = d(t.header);
            if (t.emailPermitted) {
              if (e.match(c)) return p + ' link';
              if (e.match(f)) return p;
            }
            e.skipToEnd();
            return p;
          }
          e.skipToEnd();
          return null;
        }
        e.defineMode('mbox', function () {
          return {
            startState: function () {
              return {
                inSeparator: false,
                inHeader: false,
                emailPermitted: false,
                header: null,
                inHeaders: false,
              };
            },
            token: m,
            blankLine: function (e) {
              e.inHeaders = e.inSeparator = e.inHeader = false;
            },
          };
        });
        e.defineMIME('application/mbox', 'mbox');
      });
    },
    94268: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMIME('text/mirc', 'mirc');
        e.defineMode('mirc', function () {
          function e(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var t = e(
            '$! $$ $& $? $+ $abook $abs $active $activecid ' +
              '$activewid $address $addtok $agent $agentname $agentstat $agentver ' +
              '$alias $and $anick $ansi2mirc $aop $appactive $appstate $asc $asctime ' +
              '$asin $atan $avoice $away $awaymsg $awaytime $banmask $base $bfind ' +
              '$binoff $biton $bnick $bvar $bytes $calc $cb $cd $ceil $chan $chanmodes ' +
              '$chantypes $chat $chr $cid $clevel $click $cmdbox $cmdline $cnick $color ' +
              '$com $comcall $comchan $comerr $compact $compress $comval $cos $count ' +
              '$cr $crc $creq $crlf $ctime $ctimer $ctrlenter $date $day $daylight ' +
              '$dbuh $dbuw $dccignore $dccport $dde $ddename $debug $decode $decompress ' +
              '$deltok $devent $dialog $did $didreg $didtok $didwm $disk $dlevel $dll ' +
              '$dllcall $dname $dns $duration $ebeeps $editbox $emailaddr $encode $error ' +
              '$eval $event $exist $feof $ferr $fgetc $file $filename $filtered $finddir ' +
              '$finddirn $findfile $findfilen $findtok $fline $floor $fopen $fread $fserve ' +
              '$fulladdress $fulldate $fullname $fullscreen $get $getdir $getdot $gettok $gmt ' +
              '$group $halted $hash $height $hfind $hget $highlight $hnick $hotline ' +
              '$hotlinepos $ial $ialchan $ibl $idle $iel $ifmatch $ignore $iif $iil ' +
              '$inelipse $ini $inmidi $inpaste $inpoly $input $inrect $inroundrect ' +
              '$insong $instok $int $inwave $ip $isalias $isbit $isdde $isdir $isfile ' +
              '$isid $islower $istok $isupper $keychar $keyrpt $keyval $knick $lactive ' +
              '$lactivecid $lactivewid $left $len $level $lf $line $lines $link $lock ' +
              '$lock $locked $log $logstamp $logstampfmt $longfn $longip $lower $ltimer ' +
              '$maddress $mask $matchkey $matchtok $md5 $me $menu $menubar $menucontext ' +
              '$menutype $mid $middir $mircdir $mircexe $mircini $mklogfn $mnick $mode ' +
              '$modefirst $modelast $modespl $mouse $msfile $network $newnick $nick $nofile ' +
              '$nopath $noqt $not $notags $notify $null $numeric $numok $oline $onpoly ' +
              '$opnick $or $ord $os $passivedcc $pic $play $pnick $port $portable $portfree ' +
              '$pos $prefix $prop $protect $puttok $qt $query $rand $r $rawmsg $read $readomo ' +
              '$readn $regex $regml $regsub $regsubex $remove $remtok $replace $replacex ' +
              '$reptok $result $rgb $right $round $scid $scon $script $scriptdir $scriptline ' +
              '$sdir $send $server $serverip $sfile $sha1 $shortfn $show $signal $sin ' +
              '$site $sline $snick $snicks $snotify $sock $sockbr $sockerr $sockname ' +
              '$sorttok $sound $sqrt $ssl $sreq $sslready $status $strip $str $stripped ' +
              '$syle $submenu $switchbar $tan $target $ticks $time $timer $timestamp ' +
              '$timestampfmt $timezone $tip $titlebar $toolbar $treebar $trust $ulevel ' +
              '$ulist $upper $uptime $url $usermode $v1 $v2 $var $vcmd $vcmdstat $vcmdver ' +
              '$version $vnick $vol $wid $width $wildsite $wildtok $window $wrap $xor'
          );
          var r = e(
            'abook ajinvite alias aline ame amsg anick aop auser autojoin avoice ' +
              'away background ban bcopy beep bread break breplace bset btrunc bunset bwrite ' +
              'channel clear clearall cline clipboard close cnick color comclose comopen ' +
              'comreg continue copy creq ctcpreply ctcps dcc dccserver dde ddeserver ' +
              'debug dec describe dialog did didtok disable disconnect dlevel dline dll ' +
              'dns dqwindow drawcopy drawdot drawfill drawline drawpic drawrect drawreplace ' +
              'drawrot drawsave drawscroll drawtext ebeeps echo editbox emailaddr enable ' +
              'events exit fclose filter findtext finger firewall flash flist flood flush ' +
              'flushini font fopen fseek fsend fserve fullname fwrite ghide gload gmove ' +
              'gopts goto gplay gpoint gqreq groups gshow gsize gstop gtalk gunload hadd ' +
              'halt haltdef hdec hdel help hfree hinc hload hmake hop hsave ial ialclear ' +
              'ialmark identd if ignore iline inc invite iuser join kick linesep links list ' +
              'load loadbuf localinfo log mdi me menubar mkdir mnick mode msg nick noop notice ' +
              'notify omsg onotice part partall pdcc perform play playctrl pop protect pvoice ' +
              'qme qmsg query queryn quit raw reload remini remote remove rename renwin ' +
              'reseterror resetidle return rlevel rline rmdir run ruser save savebuf saveini ' +
              'say scid scon server set showmirc signam sline sockaccept sockclose socklist ' +
              'socklisten sockmark sockopen sockpause sockread sockrename sockudp sockwrite ' +
              'sound speak splay sreq strip switchbar timer timestamp titlebar tnick tokenize ' +
              'toolbar topic tray treebar ulist unload unset unsetall updatenl url uwho ' +
              'var vcadd vcmd vcrem vol while whois window winhelp write writeint if isalnum ' +
              'isalpha isaop isavoice isban ischan ishop isignore isin isincs isletter islower ' +
              'isnotify isnum ison isop isprotect isreg isupper isvoice iswm iswmcs ' +
              'elseif else goto menu nicklist status title icon size option text edit ' +
              'button check radio box scroll list combo link tab item'
          );
          var n = e('if elseif else and not or eq ne in ni for foreach while switch');
          var i = /[+\-*&%=<>!?^\/\|]/;
          function a(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function o(e, o) {
            var u = o.beforeParams;
            o.beforeParams = false;
            var c = e.next();
            if (/[\[\]{}\(\),\.]/.test(c)) {
              if (c == '(' && u) o.inParams = true;
              else if (c == ')') o.inParams = false;
              return null;
            } else if (/\d/.test(c)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            } else if (c == '\\') {
              e.eat('\\');
              e.eat(/./);
              return 'number';
            } else if (c == '/' && e.eat('*')) {
              return a(e, o, s);
            } else if (c == ';' && e.match(/ *\( *\(/)) {
              return a(e, o, l);
            } else if (c == ';' && !o.inParams) {
              e.skipToEnd();
              return 'comment';
            } else if (c == '"') {
              e.eat(/"/);
              return 'keyword';
            } else if (c == '$') {
              e.eatWhile(/[$_a-z0-9A-Z\.:]/);
              if (t && t.propertyIsEnumerable(e.current().toLowerCase())) {
                return 'keyword';
              } else {
                o.beforeParams = true;
                return 'builtin';
              }
            } else if (c == '%') {
              e.eatWhile(/[^,\s()]/);
              o.beforeParams = true;
              return 'string';
            } else if (i.test(c)) {
              e.eatWhile(i);
              return 'operator';
            } else {
              e.eatWhile(/[\w\$_{}]/);
              var f = e.current().toLowerCase();
              if (r && r.propertyIsEnumerable(f)) return 'keyword';
              if (n && n.propertyIsEnumerable(f)) {
                o.beforeParams = true;
                return 'keyword';
              }
              return null;
            }
          }
          function s(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = o;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function l(e, t) {
            var r = 0,
              n;
            while ((n = e.next())) {
              if (n == ';' && r == 2) {
                t.tokenize = o;
                break;
              }
              if (n == ')') r++;
              else if (n != ' ') r = 0;
            }
            return 'meta';
          }
          return {
            startState: function () {
              return { tokenize: o, beforeParams: false, inParams: false };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return t.tokenize(e, t);
            },
          };
        });
      });
    },
    52587: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('mllike', function (t, r) {
          var n = {
            as: 'keyword',
            do: 'keyword',
            else: 'keyword',
            end: 'keyword',
            exception: 'keyword',
            fun: 'keyword',
            functor: 'keyword',
            if: 'keyword',
            in: 'keyword',
            include: 'keyword',
            let: 'keyword',
            of: 'keyword',
            open: 'keyword',
            rec: 'keyword',
            struct: 'keyword',
            then: 'keyword',
            type: 'keyword',
            val: 'keyword',
            while: 'keyword',
            with: 'keyword',
          };
          var i = r.extraWords || {};
          for (var a in i) {
            if (i.hasOwnProperty(a)) {
              n[a] = r.extraWords[a];
            }
          }
          var o = [];
          for (var s in n) {
            o.push(s);
          }
          e.registerHelper('hintWords', 'mllike', o);
          function l(e, t) {
            var i = e.next();
            if (i === '"') {
              t.tokenize = u;
              return t.tokenize(e, t);
            }
            if (i === '{') {
              if (e.eat('|')) {
                t.longString = true;
                t.tokenize = f;
                return t.tokenize(e, t);
              }
            }
            if (i === '(') {
              if (e.eat('*')) {
                t.commentLevel++;
                t.tokenize = c;
                return t.tokenize(e, t);
              }
            }
            if (i === '~' || i === '?') {
              e.eatWhile(/\w/);
              return 'variable-2';
            }
            if (i === '`') {
              e.eatWhile(/\w/);
              return 'quote';
            }
            if (i === '/' && r.slashComments && e.eat('/')) {
              e.skipToEnd();
              return 'comment';
            }
            if (/\d/.test(i)) {
              if (i === '0' && e.eat(/[bB]/)) {
                e.eatWhile(/[01]/);
              }
              if (i === '0' && e.eat(/[xX]/)) {
                e.eatWhile(/[0-9a-fA-F]/);
              }
              if (i === '0' && e.eat(/[oO]/)) {
                e.eatWhile(/[0-7]/);
              } else {
                e.eatWhile(/[\d_]/);
                if (e.eat('.')) {
                  e.eatWhile(/[\d]/);
                }
                if (e.eat(/[eE]/)) {
                  e.eatWhile(/[\d\-+]/);
                }
              }
              return 'number';
            }
            if (/[+\-*&%=<>!?|@\.~:]/.test(i)) {
              return 'operator';
            }
            if (/[\w\xa1-\uffff]/.test(i)) {
              e.eatWhile(/[\w\xa1-\uffff]/);
              var a = e.current();
              return n.hasOwnProperty(a) ? n[a] : 'variable';
            }
            return null;
          }
          function u(e, t) {
            var r,
              n = false,
              i = false;
            while ((r = e.next()) != null) {
              if (r === '"' && !i) {
                n = true;
                break;
              }
              i = !i && r === '\\';
            }
            if (n && !i) {
              t.tokenize = l;
            }
            return 'string';
          }
          function c(e, t) {
            var r, n;
            while (t.commentLevel > 0 && (n = e.next()) != null) {
              if (r === '(' && n === '*') t.commentLevel++;
              if (r === '*' && n === ')') t.commentLevel--;
              r = n;
            }
            if (t.commentLevel <= 0) {
              t.tokenize = l;
            }
            return 'comment';
          }
          function f(e, t) {
            var r, n;
            while (t.longString && (n = e.next()) != null) {
              if (r === '|' && n === '}') t.longString = false;
              r = n;
            }
            if (!t.longString) {
              t.tokenize = l;
            }
            return 'string';
          }
          return {
            startState: function () {
              return { tokenize: l, commentLevel: 0, longString: false };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return t.tokenize(e, t);
            },
            blockCommentStart: '(*',
            blockCommentEnd: '*)',
            lineComment: r.slashComments ? '//' : null,
          };
        });
        e.defineMIME('text/x-ocaml', {
          name: 'mllike',
          extraWords: {
            and: 'keyword',
            assert: 'keyword',
            begin: 'keyword',
            class: 'keyword',
            constraint: 'keyword',
            done: 'keyword',
            downto: 'keyword',
            external: 'keyword',
            function: 'keyword',
            initializer: 'keyword',
            lazy: 'keyword',
            match: 'keyword',
            method: 'keyword',
            module: 'keyword',
            mutable: 'keyword',
            new: 'keyword',
            nonrec: 'keyword',
            object: 'keyword',
            private: 'keyword',
            sig: 'keyword',
            to: 'keyword',
            try: 'keyword',
            value: 'keyword',
            virtual: 'keyword',
            when: 'keyword',
            raise: 'builtin',
            failwith: 'builtin',
            true: 'builtin',
            false: 'builtin',
            asr: 'builtin',
            land: 'builtin',
            lor: 'builtin',
            lsl: 'builtin',
            lsr: 'builtin',
            lxor: 'builtin',
            mod: 'builtin',
            or: 'builtin',
            raise_notrace: 'builtin',
            trace: 'builtin',
            exit: 'builtin',
            print_string: 'builtin',
            print_endline: 'builtin',
            int: 'type',
            float: 'type',
            bool: 'type',
            char: 'type',
            string: 'type',
            unit: 'type',
            List: 'builtin',
          },
        });
        e.defineMIME('text/x-fsharp', {
          name: 'mllike',
          extraWords: {
            abstract: 'keyword',
            assert: 'keyword',
            base: 'keyword',
            begin: 'keyword',
            class: 'keyword',
            default: 'keyword',
            delegate: 'keyword',
            'do!': 'keyword',
            done: 'keyword',
            downcast: 'keyword',
            downto: 'keyword',
            elif: 'keyword',
            extern: 'keyword',
            finally: 'keyword',
            for: 'keyword',
            function: 'keyword',
            global: 'keyword',
            inherit: 'keyword',
            inline: 'keyword',
            interface: 'keyword',
            internal: 'keyword',
            lazy: 'keyword',
            'let!': 'keyword',
            match: 'keyword',
            member: 'keyword',
            module: 'keyword',
            mutable: 'keyword',
            namespace: 'keyword',
            new: 'keyword',
            null: 'keyword',
            override: 'keyword',
            private: 'keyword',
            public: 'keyword',
            'return!': 'keyword',
            return: 'keyword',
            select: 'keyword',
            static: 'keyword',
            to: 'keyword',
            try: 'keyword',
            upcast: 'keyword',
            'use!': 'keyword',
            use: 'keyword',
            void: 'keyword',
            when: 'keyword',
            'yield!': 'keyword',
            yield: 'keyword',
            atomic: 'keyword',
            break: 'keyword',
            checked: 'keyword',
            component: 'keyword',
            const: 'keyword',
            constraint: 'keyword',
            constructor: 'keyword',
            continue: 'keyword',
            eager: 'keyword',
            event: 'keyword',
            external: 'keyword',
            fixed: 'keyword',
            method: 'keyword',
            mixin: 'keyword',
            object: 'keyword',
            parallel: 'keyword',
            process: 'keyword',
            protected: 'keyword',
            pure: 'keyword',
            sealed: 'keyword',
            tailcall: 'keyword',
            trait: 'keyword',
            virtual: 'keyword',
            volatile: 'keyword',
            List: 'builtin',
            Seq: 'builtin',
            Map: 'builtin',
            Set: 'builtin',
            Option: 'builtin',
            int: 'builtin',
            string: 'builtin',
            not: 'builtin',
            true: 'builtin',
            false: 'builtin',
            raise: 'builtin',
            failwith: 'builtin',
          },
          slashComments: true,
        });
        e.defineMIME('text/x-sml', {
          name: 'mllike',
          extraWords: {
            abstype: 'keyword',
            and: 'keyword',
            andalso: 'keyword',
            case: 'keyword',
            datatype: 'keyword',
            fn: 'keyword',
            handle: 'keyword',
            infix: 'keyword',
            infixr: 'keyword',
            local: 'keyword',
            nonfix: 'keyword',
            op: 'keyword',
            orelse: 'keyword',
            raise: 'keyword',
            withtype: 'keyword',
            eqtype: 'keyword',
            sharing: 'keyword',
            sig: 'keyword',
            signature: 'keyword',
            structure: 'keyword',
            where: 'keyword',
            true: 'keyword',
            false: 'keyword',
            int: 'builtin',
            real: 'builtin',
            string: 'builtin',
            char: 'builtin',
            bool: 'builtin',
          },
          slashComments: true,
        });
      });
    },
    24333: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('modelica', function (t, r) {
          var n = t.indentUnit;
          var i = r.keywords || {};
          var a = r.builtin || {};
          var o = r.atoms || {};
          var s = /[;=\(:\),{}.*<>+\-\/^\[\]]/;
          var l = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/;
          var u = /[0-9]/;
          var c = /[_a-zA-Z]/;
          function f(e, t) {
            e.skipToEnd();
            t.tokenize = null;
            return 'comment';
          }
          function d(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (r && n == '/') {
                t.tokenize = null;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function m(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (n == '"' && !r) {
                t.tokenize = null;
                t.sol = false;
                break;
              }
              r = !r && n == '\\';
            }
            return 'string';
          }
          function p(e, t) {
            e.eatWhile(u);
            while (e.eat(u) || e.eat(c)) {}
            var r = e.current();
            if (
              t.sol &&
              (r == 'package' || r == 'model' || r == 'when' || r == 'connector')
            )
              t.level++;
            else if (t.sol && r == 'end' && t.level > 0) t.level--;
            t.tokenize = null;
            t.sol = false;
            if (i.propertyIsEnumerable(r)) return 'keyword';
            else if (a.propertyIsEnumerable(r)) return 'builtin';
            else if (o.propertyIsEnumerable(r)) return 'atom';
            else return 'variable';
          }
          function h(e, t) {
            while (e.eat(/[^']/)) {}
            t.tokenize = null;
            t.sol = false;
            if (e.eat("'")) return 'variable';
            else return 'error';
          }
          function g(e, t) {
            e.eatWhile(u);
            if (e.eat('.')) {
              e.eatWhile(u);
            }
            if (e.eat('e') || e.eat('E')) {
              if (!e.eat('-')) e.eat('+');
              e.eatWhile(u);
            }
            t.tokenize = null;
            t.sol = false;
            return 'number';
          }
          return {
            startState: function () {
              return { tokenize: null, level: 0, sol: true };
            },
            token: function (e, t) {
              if (t.tokenize != null) {
                return t.tokenize(e, t);
              }
              if (e.sol()) {
                t.sol = true;
              }
              if (e.eatSpace()) {
                t.tokenize = null;
                return null;
              }
              var r = e.next();
              if (r == '/' && e.eat('/')) {
                t.tokenize = f;
              } else if (r == '/' && e.eat('*')) {
                t.tokenize = d;
              } else if (l.test(r + e.peek())) {
                e.next();
                t.tokenize = null;
                return 'operator';
              } else if (s.test(r)) {
                t.tokenize = null;
                return 'operator';
              } else if (c.test(r)) {
                t.tokenize = p;
              } else if (r == "'" && e.peek() && e.peek() != "'") {
                t.tokenize = h;
              } else if (r == '"') {
                t.tokenize = m;
              } else if (u.test(r)) {
                t.tokenize = g;
              } else {
                t.tokenize = null;
                return 'error';
              }
              return t.tokenize(e, t);
            },
            indent: function (t, r) {
              if (t.tokenize != null) return e.Pass;
              var i = t.level;
              if (/(algorithm)/.test(r)) i--;
              if (/(equation)/.test(r)) i--;
              if (/(initial algorithm)/.test(r)) i--;
              if (/(initial equation)/.test(r)) i--;
              if (/(end)/.test(r)) i--;
              if (i > 0) return n * i;
              else return 0;
            },
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
          };
        });
        function t(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        var r =
          'algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within';
        var n =
          'abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh';
        var i = 'Real Boolean Integer String';
        function a(t, r) {
          if (typeof t == 'string') t = [t];
          var n = [];
          function i(e) {
            if (e) for (var t in e) if (e.hasOwnProperty(t)) n.push(t);
          }
          i(r.keywords);
          i(r.builtin);
          i(r.atoms);
          if (n.length) {
            r.helperType = t[0];
            e.registerHelper('hintWords', t[0], n);
          }
          for (var a = 0; a < t.length; ++a) e.defineMIME(t[a], r);
        }
        a(['text/x-modelica'], {
          name: 'modelica',
          keywords: t(r),
          builtin: t(n),
          atoms: t(i),
        });
      });
    },
    68810: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        var t = {
          mscgen: {
            keywords: ['msc'],
            options: ['hscale', 'width', 'arcgradient', 'wordwraparcs'],
            constants: ['true', 'false', 'on', 'off'],
            attributes: [
              'label',
              'idurl',
              'id',
              'url',
              'linecolor',
              'linecolour',
              'textcolor',
              'textcolour',
              'textbgcolor',
              'textbgcolour',
              'arclinecolor',
              'arclinecolour',
              'arctextcolor',
              'arctextcolour',
              'arctextbgcolor',
              'arctextbgcolour',
              'arcskip',
            ],
            brackets: ['\\{', '\\}'],
            arcsWords: ['note', 'abox', 'rbox', 'box'],
            arcsOthers: [
              '\\|\\|\\|',
              '\\.\\.\\.',
              '---',
              '--',
              '<->',
              '==',
              '<<=>>',
              '<=>',
              '\\.\\.',
              '<<>>',
              '::',
              '<:>',
              '->',
              '=>>',
              '=>',
              '>>',
              ':>',
              '<-',
              '<<=',
              '<=',
              '<<',
              '<:',
              'x-',
              '-x',
            ],
            singlecomment: ['//', '#'],
            operators: ['='],
          },
          xu: {
            keywords: ['msc', 'xu'],
            options: [
              'hscale',
              'width',
              'arcgradient',
              'wordwraparcs',
              'wordwrapentities',
              'watermark',
            ],
            constants: ['true', 'false', 'on', 'off', 'auto'],
            attributes: [
              'label',
              'idurl',
              'id',
              'url',
              'linecolor',
              'linecolour',
              'textcolor',
              'textcolour',
              'textbgcolor',
              'textbgcolour',
              'arclinecolor',
              'arclinecolour',
              'arctextcolor',
              'arctextcolour',
              'arctextbgcolor',
              'arctextbgcolour',
              'arcskip',
              'title',
              'deactivate',
              'activate',
              'activation',
            ],
            brackets: ['\\{', '\\}'],
            arcsWords: [
              'note',
              'abox',
              'rbox',
              'box',
              'alt',
              'else',
              'opt',
              'break',
              'par',
              'seq',
              'strict',
              'neg',
              'critical',
              'ignore',
              'consider',
              'assert',
              'loop',
              'ref',
              'exc',
            ],
            arcsOthers: [
              '\\|\\|\\|',
              '\\.\\.\\.',
              '---',
              '--',
              '<->',
              '==',
              '<<=>>',
              '<=>',
              '\\.\\.',
              '<<>>',
              '::',
              '<:>',
              '->',
              '=>>',
              '=>',
              '>>',
              ':>',
              '<-',
              '<<=',
              '<=',
              '<<',
              '<:',
              'x-',
              '-x',
            ],
            singlecomment: ['//', '#'],
            operators: ['='],
          },
          msgenny: {
            keywords: null,
            options: [
              'hscale',
              'width',
              'arcgradient',
              'wordwraparcs',
              'wordwrapentities',
              'watermark',
            ],
            constants: ['true', 'false', 'on', 'off', 'auto'],
            attributes: null,
            brackets: ['\\{', '\\}'],
            arcsWords: [
              'note',
              'abox',
              'rbox',
              'box',
              'alt',
              'else',
              'opt',
              'break',
              'par',
              'seq',
              'strict',
              'neg',
              'critical',
              'ignore',
              'consider',
              'assert',
              'loop',
              'ref',
              'exc',
            ],
            arcsOthers: [
              '\\|\\|\\|',
              '\\.\\.\\.',
              '---',
              '--',
              '<->',
              '==',
              '<<=>>',
              '<=>',
              '\\.\\.',
              '<<>>',
              '::',
              '<:>',
              '->',
              '=>>',
              '=>',
              '>>',
              ':>',
              '<-',
              '<<=',
              '<=',
              '<<',
              '<:',
              'x-',
              '-x',
            ],
            singlecomment: ['//', '#'],
            operators: ['='],
          },
        };
        e.defineMode('mscgen', function (e, r) {
          var n = t[(r && r.language) || 'mscgen'];
          return {
            startState: i,
            copyState: a,
            token: o(n),
            lineComment: '#',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
          };
        });
        e.defineMIME('text/x-mscgen', 'mscgen');
        e.defineMIME('text/x-xu', { name: 'mscgen', language: 'xu' });
        e.defineMIME('text/x-msgenny', { name: 'mscgen', language: 'msgenny' });
        function r(e) {
          return new RegExp('^\\b(?:' + e.join('|') + ')\\b', 'i');
        }
        function n(e) {
          return new RegExp('^(?:' + e.join('|') + ')', 'i');
        }
        function i() {
          return {
            inComment: false,
            inString: false,
            inAttributeList: false,
            inScript: false,
          };
        }
        function a(e) {
          return {
            inComment: e.inComment,
            inString: e.inString,
            inAttributeList: e.inAttributeList,
            inScript: e.inScript,
          };
        }
        function o(e) {
          return function (t, i) {
            if (t.match(n(e.brackets), true, true)) {
              return 'bracket';
            }
            if (!i.inComment) {
              if (t.match(/\/\*[^\*\/]*/, true, true)) {
                i.inComment = true;
                return 'comment';
              }
              if (t.match(n(e.singlecomment), true, true)) {
                t.skipToEnd();
                return 'comment';
              }
            }
            if (i.inComment) {
              if (t.match(/[^\*\/]*\*\//, true, true)) i.inComment = false;
              else t.skipToEnd();
              return 'comment';
            }
            if (!i.inString && t.match(/\"(\\\"|[^\"])*/, true, true)) {
              i.inString = true;
              return 'string';
            }
            if (i.inString) {
              if (t.match(/[^\"]*\"/, true, true)) i.inString = false;
              else t.skipToEnd();
              return 'string';
            }
            if (!!e.keywords && t.match(r(e.keywords), true, true)) return 'keyword';
            if (t.match(r(e.options), true, true)) return 'keyword';
            if (t.match(r(e.arcsWords), true, true)) return 'keyword';
            if (t.match(n(e.arcsOthers), true, true)) return 'keyword';
            if (!!e.operators && t.match(n(e.operators), true, true)) return 'operator';
            if (!!e.constants && t.match(n(e.constants), true, true)) return 'variable';
            if (!e.inAttributeList && !!e.attributes && t.match('[', true, true)) {
              e.inAttributeList = true;
              return 'bracket';
            }
            if (e.inAttributeList) {
              if (e.attributes !== null && t.match(r(e.attributes), true, true)) {
                return 'attribute';
              }
              if (t.match(']', true, true)) {
                e.inAttributeList = false;
                return 'bracket';
              }
            }
            t.next();
            return 'base';
          };
        }
      });
    },
    12875: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('mumps', function () {
          function e(e) {
            return new RegExp('^((' + e.join(')|(') + '))\\b', 'i');
          }
          var t = new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]");
          var r = new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))");
          var n = new RegExp('^[\\.,:]');
          var i = new RegExp('[()]');
          var a = new RegExp('^[%A-Za-z][A-Za-z0-9]*');
          var o = [
            'break',
            'close',
            'do',
            'else',
            'for',
            'goto',
            'halt',
            'hang',
            'if',
            'job',
            'kill',
            'lock',
            'merge',
            'new',
            'open',
            'quit',
            'read',
            'set',
            'tcommit',
            'trollback',
            'tstart',
            'use',
            'view',
            'write',
            'xecute',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'q',
            'r',
            's',
            'tc',
            'tro',
            'ts',
            'u',
            'v',
            'w',
            'x',
          ];
          var s = [
            '\\$ascii',
            '\\$char',
            '\\$data',
            '\\$ecode',
            '\\$estack',
            '\\$etrap',
            '\\$extract',
            '\\$find',
            '\\$fnumber',
            '\\$get',
            '\\$horolog',
            '\\$io',
            '\\$increment',
            '\\$job',
            '\\$justify',
            '\\$length',
            '\\$name',
            '\\$next',
            '\\$order',
            '\\$piece',
            '\\$qlength',
            '\\$qsubscript',
            '\\$query',
            '\\$quit',
            '\\$random',
            '\\$reverse',
            '\\$select',
            '\\$stack',
            '\\$test',
            '\\$text',
            '\\$translate',
            '\\$view',
            '\\$x',
            '\\$y',
            '\\$a',
            '\\$c',
            '\\$d',
            '\\$e',
            '\\$ec',
            '\\$es',
            '\\$et',
            '\\$f',
            '\\$fn',
            '\\$g',
            '\\$h',
            '\\$i',
            '\\$j',
            '\\$l',
            '\\$n',
            '\\$na',
            '\\$o',
            '\\$p',
            '\\$q',
            '\\$ql',
            '\\$qs',
            '\\$r',
            '\\$re',
            '\\$s',
            '\\$st',
            '\\$t',
            '\\$tr',
            '\\$v',
            '\\$z',
          ];
          var l = e(s);
          var u = e(o);
          function c(e, o) {
            if (e.sol()) {
              o.label = true;
              o.commandMode = 0;
            }
            var s = e.peek();
            if (s == ' ' || s == '\t') {
              o.label = false;
              if (o.commandMode == 0) o.commandMode = 1;
              else if (o.commandMode < 0 || o.commandMode == 2) o.commandMode = 0;
            } else if (s != '.' && o.commandMode > 0) {
              if (s == ':') o.commandMode = -1;
              else o.commandMode = 2;
            }
            if (s === '(' || s === '\t') o.label = false;
            if (s === ';') {
              e.skipToEnd();
              return 'comment';
            }
            if (e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)) return 'number';
            if (s == '"') {
              if (e.skipTo('"')) {
                e.next();
                return 'string';
              } else {
                e.skipToEnd();
                return 'error';
              }
            }
            if (e.match(r) || e.match(t)) return 'operator';
            if (e.match(n)) return null;
            if (i.test(s)) {
              e.next();
              return 'bracket';
            }
            if (o.commandMode > 0 && e.match(u)) return 'variable-2';
            if (e.match(l)) return 'builtin';
            if (e.match(a)) return 'variable';
            if (s === '$' || s === '^') {
              e.next();
              return 'builtin';
            }
            if (s === '@') {
              e.next();
              return 'string-2';
            }
            if (/[\w%]/.test(s)) {
              e.eatWhile(/[\w%]/);
              return 'variable';
            }
            e.next();
            return 'error';
          }
          return {
            startState: function () {
              return { label: false, commandMode: 0 };
            },
            token: function (e, t) {
              var r = c(e, t);
              if (t.label) return 'tag';
              return r;
            },
          };
        });
        e.defineMIME('text/x-mumps', 'mumps');
      });
    },
    10131: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('nginx', function (e) {
          function t(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var r = t(
            'break return rewrite set' +
              ' accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23'
          );
          var n = t(
            'http mail events server types location upstream charset_map limit_except if geo map'
          );
          var i = t(
            'include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files'
          );
          var a = e.indentUnit,
            o;
          function s(e, t) {
            o = t;
            return e;
          }
          function l(e, t) {
            e.eatWhile(/[\w\$_]/);
            var a = e.current();
            if (r.propertyIsEnumerable(a)) {
              return 'keyword';
            } else if (n.propertyIsEnumerable(a)) {
              return 'variable-2';
            } else if (i.propertyIsEnumerable(a)) {
              return 'string-2';
            }
            var o = e.next();
            if (o == '@') {
              e.eatWhile(/[\w\\\-]/);
              return s('meta', e.current());
            } else if (o == '/' && e.eat('*')) {
              t.tokenize = u;
              return u(e, t);
            } else if (o == '<' && e.eat('!')) {
              t.tokenize = c;
              return c(e, t);
            } else if (o == '=') s(null, 'compare');
            else if ((o == '~' || o == '|') && e.eat('=')) return s(null, 'compare');
            else if (o == '"' || o == "'") {
              t.tokenize = f(o);
              return t.tokenize(e, t);
            } else if (o == '#') {
              e.skipToEnd();
              return s('comment', 'comment');
            } else if (o == '!') {
              e.match(/^\s*\w*/);
              return s('keyword', 'important');
            } else if (/\d/.test(o)) {
              e.eatWhile(/[\w.%]/);
              return s('number', 'unit');
            } else if (/[,.+>*\/]/.test(o)) {
              return s(null, 'select-op');
            } else if (/[;{}:\[\]]/.test(o)) {
              return s(null, o);
            } else {
              e.eatWhile(/[\w\\\-]/);
              return s('variable', 'variable');
            }
          }
          function u(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (r && n == '/') {
                t.tokenize = l;
                break;
              }
              r = n == '*';
            }
            return s('comment', 'comment');
          }
          function c(e, t) {
            var r = 0,
              n;
            while ((n = e.next()) != null) {
              if (r >= 2 && n == '>') {
                t.tokenize = l;
                break;
              }
              r = n == '-' ? r + 1 : 0;
            }
            return s('comment', 'comment');
          }
          function f(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) break;
                n = !n && i == '\\';
              }
              if (!n) r.tokenize = l;
              return s('string', 'string');
            };
          }
          return {
            startState: function (e) {
              return { tokenize: l, baseIndent: e || 0, stack: [] };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              o = null;
              var r = t.tokenize(e, t);
              var n = t.stack[t.stack.length - 1];
              if (o == 'hash' && n == 'rule') r = 'atom';
              else if (r == 'variable') {
                if (n == 'rule') r = 'number';
                else if (!n || n == '@media{') r = 'tag';
              }
              if (n == 'rule' && /^[\{\};]$/.test(o)) t.stack.pop();
              if (o == '{') {
                if (n == '@media') t.stack[t.stack.length - 1] = '@media{';
                else t.stack.push('{');
              } else if (o == '}') t.stack.pop();
              else if (o == '@media') t.stack.push('@media');
              else if (n == '{' && o != 'comment') t.stack.push('rule');
              return r;
            },
            indent: function (e, t) {
              var r = e.stack.length;
              if (/^\}/.test(t)) r -= e.stack[e.stack.length - 1] == 'rule' ? 2 : 1;
              return e.baseIndent + r * a;
            },
            electricChars: '}',
          };
        });
        e.defineMIME('text/x-nginx-conf', 'nginx');
      });
    },
    42313: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(40790));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineSimpleMode('nsis', {
          start: [
            {
              regex: /(?:[+-]?)(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\d+.?\d*)/,
              token: 'number',
            },
            { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
            { regex: /'(?:[^\\']|\\.)*'?/, token: 'string' },
            { regex: /`(?:[^\\`]|\\.)*`?/, token: 'string' },
            {
              regex:
                /^\s*(?:\!(include|addincludedir|addplugindir|appendfile|cd|delfile|echo|error|execute|packhdr|pragma|finalize|getdllversion|gettlbversion|system|tempfile|warning|verbose|define|undef|insertmacro|macro|macroend|makensis|searchparse|searchreplace))\b/,
              token: 'keyword',
            },
            {
              regex: /^\s*(?:\!(if(?:n?def)?|ifmacron?def|macro))\b/,
              token: 'keyword',
              indent: true,
            },
            {
              regex: /^\s*(?:\!(else|endif|macroend))\b/,
              token: 'keyword',
              dedent: true,
            },
            {
              regex:
                /^\s*(?:Abort|AddBrandingImage|AddSize|AllowRootDirInstall|AllowSkipFiles|AutoCloseWindow|BGFont|BGGradient|BrandingText|BringToFront|Call|CallInstDLL|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|CreateDirectory|CreateFont|CreateShortCut|Delete|DeleteINISec|DeleteINIStr|DeleteRegKey|DeleteRegValue|DetailPrint|DetailsButtonText|DirText|DirVar|DirVerify|EnableWindow|EnumRegKey|EnumRegValue|Exch|Exec|ExecShell|ExecShellWait|ExecWait|ExpandEnvStrings|File|FileBufSize|FileClose|FileErrorText|FileOpen|FileRead|FileReadByte|FileReadUTF16LE|FileReadWord|FileWriteUTF16LE|FileSeek|FileWrite|FileWriteByte|FileWriteWord|FindClose|FindFirst|FindNext|FindWindow|FlushINI|GetCurInstType|GetCurrentAddress|GetDlgItem|GetDLLVersion|GetDLLVersionLocal|GetErrorLevel|GetFileTime|GetFileTimeLocal|GetFullPathName|GetFunctionAddress|GetInstDirError|GetKnownFolderPath|GetLabelAddress|GetTempFileName|Goto|HideWindow|Icon|IfAbort|IfErrors|IfFileExists|IfRebootFlag|IfRtlLanguage|IfShellVarContextAll|IfSilent|InitPluginsDir|InstallButtonText|InstallColors|InstallDir|InstallDirRegKey|InstProgressFlags|InstType|InstTypeGetText|InstTypeSetText|Int64Cmp|Int64CmpU|Int64Fmt|IntCmp|IntCmpU|IntFmt|IntOp|IntPtrCmp|IntPtrCmpU|IntPtrOp|IsWindow|LangString|LicenseBkColor|LicenseData|LicenseForceSelection|LicenseLangString|LicenseText|LoadAndSetImage|LoadLanguageFile|LockWindow|LogSet|LogText|ManifestDPIAware|ManifestLongPathAware|ManifestMaxVersionTested|ManifestSupportedOS|MessageBox|MiscButtonText|Name|Nop|OutFile|Page|PageCallbacks|PEAddResource|PEDllCharacteristics|PERemoveResource|PESubsysVer|Pop|Push|Quit|ReadEnvStr|ReadINIStr|ReadRegDWORD|ReadRegStr|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|SectionGetFlags|SectionGetInstTypes|SectionGetSize|SectionGetText|SectionIn|SectionSetFlags|SectionSetInstTypes|SectionSetSize|SectionSetText|SendMessage|SetAutoClose|SetBrandingImage|SetCompress|SetCompressor|SetCompressorDictSize|SetCtlColors|SetCurInstType|SetDatablockOptimize|SetDateSave|SetDetailsPrint|SetDetailsView|SetErrorLevel|SetErrors|SetFileAttributes|SetFont|SetOutPath|SetOverwrite|SetRebootFlag|SetRegView|SetShellVarContext|SetSilent|ShowInstDetails|ShowUninstDetails|ShowWindow|SilentInstall|SilentUnInstall|Sleep|SpaceTexts|StrCmp|StrCmpS|StrCpy|StrLen|SubCaption|Unicode|UninstallButtonText|UninstallCaption|UninstallIcon|UninstallSubCaption|UninstallText|UninstPage|UnRegDLL|Var|VIAddVersionKey|VIFileVersion|VIProductVersion|WindowIcon|WriteINIStr|WriteRegBin|WriteRegDWORD|WriteRegExpandStr|WriteRegMultiStr|WriteRegNone|WriteRegStr|WriteUninstaller|XPStyle)\b/,
              token: 'keyword',
            },
            {
              regex: /^\s*(?:Function|PageEx|Section(?:Group)?)\b/,
              token: 'keyword',
              indent: true,
            },
            {
              regex: /^\s*(?:(Function|PageEx|Section(?:Group)?)End)\b/,
              token: 'keyword',
              dedent: true,
            },
            {
              regex:
                /\b(?:ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_HIDDEN|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HIDDEN|HKCC|HKCR(32|64)?|HKCU(32|64)?|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM(32|64)?|HKPD|HKU|IDABORT|IDCANCEL|IDD_DIR|IDD_INST|IDD_INSTFILES|IDD_LICENSE|IDD_SELCOM|IDD_UNINST|IDD_VERIFY|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|MB_YESNOCANCEL|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SW_HIDE|SW_SHOWDEFAULT|SW_SHOWMAXIMIZED|SW_SHOWMINIMIZED|SW_SHOWNORMAL|SYSTEM|TEMPORARY)\b/,
              token: 'atom',
            },
            {
              regex:
                /\b(?:admin|all|auto|both|bottom|bzip2|components|current|custom|directory|false|force|hide|highest|ifdiff|ifnewer|instfiles|lastused|leave|left|license|listonly|lzma|nevershow|none|normal|notset|off|on|right|show|silent|silentlog|textonly|top|true|try|un\.components|un\.custom|un\.directory|un\.instfiles|un\.license|uninstConfirm|user|Win10|Win7|Win8|WinVista|zlib)\b/,
              token: 'builtin',
            },
            {
              regex:
                /\$\{(?:And(?:If(?:Not)?|Unless)|Break|Case(?:Else)?|Continue|Default|Do(?:Until|While)?|Else(?:If(?:Not)?|Unless)?|End(?:If|Select|Switch)|Exit(?:Do|For|While)|For(?:Each)?|If(?:Cmd|Not(?:Then)?|Then)?|Loop(?:Until|While)?|Or(?:If(?:Not)?|Unless)|Select|Switch|Unless|While)\}/,
              token: 'variable-2',
              indent: true,
            },
            {
              regex:
                /\$\{(?:BannerTrimPath|DirState|DriveSpace|Get(BaseName|Drives|ExeName|ExePath|FileAttributes|FileExt|FileName|FileVersion|Options|OptionsS|Parameters|Parent|Root|Size|Time)|Locate|RefreshShellIcons)\}/,
              token: 'variable-2',
              dedent: true,
            },
            {
              regex:
                /\$\{(?:Memento(?:Section(?:Done|End|Restore|Save)?|UnselectedSection))\}/,
              token: 'variable-2',
              dedent: true,
            },
            {
              regex:
                /\$\{(?:Config(?:Read|ReadS|Write|WriteS)|File(?:Join|ReadFromEnd|Recode)|Line(?:Find|Read|Sum)|Text(?:Compare|CompareS)|TrimNewLines)\}/,
              token: 'variable-2',
              dedent: true,
            },
            {
              regex:
                /\$\{(?:(?:At(?:Least|Most)|Is)(?:ServicePack|Win(?:7|8|10|95|98|200(?:0|3|8(?:R2)?)|ME|NT4|Vista|XP))|Is(?:NT|Server))\}/,
              token: 'variable',
              dedent: true,
            },
            {
              regex:
                /\$\{(?:StrFilterS?|Version(?:Compare|Convert)|Word(?:AddS?|Find(?:(?:2|3)X)?S?|InsertS?|ReplaceS?))\}/,
              token: 'variable-2',
              dedent: true,
            },
            { regex: /\$\{(?:RunningX64)\}/, token: 'variable', dedent: true },
            {
              regex: /\$\{(?:Disable|Enable)X64FSRedirection\}/,
              token: 'variable-2',
              dedent: true,
            },
            { regex: /(#|;).*/, token: 'comment' },
            { regex: /\/\*/, token: 'comment', next: 'comment' },
            { regex: /[-+\/*=<>!]+/, token: 'operator' },
            { regex: /\$\w+/, token: 'variable' },
            { regex: /\${[\w\.:-]+}/, token: 'variable-2' },
            { regex: /\$\([\w\.:-]+\)/, token: 'variable-3' },
          ],
          comment: [
            { regex: /.*?\*\//, token: 'comment', next: 'start' },
            { regex: /.*/, token: 'comment' },
          ],
          meta: {
            electricInput:
              /^\s*((Function|PageEx|Section|Section(Group)?)End|(\!(endif|macroend))|\$\{(End(If|Unless|While)|Loop(Until)|Next)\})$/,
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: ['#', ';'],
          },
        });
        e.defineMIME('text/x-nsis', 'nsis');
      });
    },
    82954: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('ntriples', function () {
          var e = {
            PRE_SUBJECT: 0,
            WRITING_SUB_URI: 1,
            WRITING_BNODE_URI: 2,
            PRE_PRED: 3,
            WRITING_PRED_URI: 4,
            PRE_OBJ: 5,
            WRITING_OBJ_URI: 6,
            WRITING_OBJ_BNODE: 7,
            WRITING_OBJ_LITERAL: 8,
            WRITING_LIT_LANG: 9,
            WRITING_LIT_TYPE: 10,
            POST_OBJ: 11,
            ERROR: 12,
          };
          function t(t, r) {
            var n = t.location;
            var i;
            if (n == e.PRE_SUBJECT && r == '<') i = e.WRITING_SUB_URI;
            else if (n == e.PRE_SUBJECT && r == '_') i = e.WRITING_BNODE_URI;
            else if (n == e.PRE_PRED && r == '<') i = e.WRITING_PRED_URI;
            else if (n == e.PRE_OBJ && r == '<') i = e.WRITING_OBJ_URI;
            else if (n == e.PRE_OBJ && r == '_') i = e.WRITING_OBJ_BNODE;
            else if (n == e.PRE_OBJ && r == '"') i = e.WRITING_OBJ_LITERAL;
            else if (n == e.WRITING_SUB_URI && r == '>') i = e.PRE_PRED;
            else if (n == e.WRITING_BNODE_URI && r == ' ') i = e.PRE_PRED;
            else if (n == e.WRITING_PRED_URI && r == '>') i = e.PRE_OBJ;
            else if (n == e.WRITING_OBJ_URI && r == '>') i = e.POST_OBJ;
            else if (n == e.WRITING_OBJ_BNODE && r == ' ') i = e.POST_OBJ;
            else if (n == e.WRITING_OBJ_LITERAL && r == '"') i = e.POST_OBJ;
            else if (n == e.WRITING_LIT_LANG && r == ' ') i = e.POST_OBJ;
            else if (n == e.WRITING_LIT_TYPE && r == '>') i = e.POST_OBJ;
            else if (n == e.WRITING_OBJ_LITERAL && r == '@') i = e.WRITING_LIT_LANG;
            else if (n == e.WRITING_OBJ_LITERAL && r == '^') i = e.WRITING_LIT_TYPE;
            else if (
              r == ' ' &&
              (n == e.PRE_SUBJECT ||
                n == e.PRE_PRED ||
                n == e.PRE_OBJ ||
                n == e.POST_OBJ)
            )
              i = n;
            else if (n == e.POST_OBJ && r == '.') i = e.PRE_SUBJECT;
            else i = e.ERROR;
            t.location = i;
          }
          return {
            startState: function () {
              return {
                location: e.PRE_SUBJECT,
                uris: [],
                anchors: [],
                bnodes: [],
                langs: [],
                types: [],
              };
            },
            token: function (e, r) {
              var n = e.next();
              if (n == '<') {
                t(r, n);
                var i = '';
                e.eatWhile(function (e) {
                  if (e != '#' && e != '>') {
                    i += e;
                    return true;
                  }
                  return false;
                });
                r.uris.push(i);
                if (e.match('#', false)) return 'variable';
                e.next();
                t(r, '>');
                return 'variable';
              }
              if (n == '#') {
                var a = '';
                e.eatWhile(function (e) {
                  if (e != '>' && e != ' ') {
                    a += e;
                    return true;
                  }
                  return false;
                });
                r.anchors.push(a);
                return 'variable-2';
              }
              if (n == '>') {
                t(r, '>');
                return 'variable';
              }
              if (n == '_') {
                t(r, n);
                var o = '';
                e.eatWhile(function (e) {
                  if (e != ' ') {
                    o += e;
                    return true;
                  }
                  return false;
                });
                r.bnodes.push(o);
                e.next();
                t(r, ' ');
                return 'builtin';
              }
              if (n == '"') {
                t(r, n);
                e.eatWhile(function (e) {
                  return e != '"';
                });
                e.next();
                if (e.peek() != '@' && e.peek() != '^') {
                  t(r, '"');
                }
                return 'string';
              }
              if (n == '@') {
                t(r, '@');
                var s = '';
                e.eatWhile(function (e) {
                  if (e != ' ') {
                    s += e;
                    return true;
                  }
                  return false;
                });
                r.langs.push(s);
                e.next();
                t(r, ' ');
                return 'string-2';
              }
              if (n == '^') {
                e.next();
                t(r, '^');
                var l = '';
                e.eatWhile(function (e) {
                  if (e != '>') {
                    l += e;
                    return true;
                  }
                  return false;
                });
                r.types.push(l);
                e.next();
                t(r, '>');
                return 'variable';
              }
              if (n == ' ') {
                t(r, n);
              }
              if (n == '.') {
                t(r, n);
              }
            },
          };
        });
        e.defineMIME('application/n-triples', 'ntriples');
        e.defineMIME('application/n-quads', 'ntriples');
        e.defineMIME('text/n-triples', 'ntriples');
      });
    },
    15734: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('octave', function () {
          function e(e) {
            return new RegExp('^((' + e.join(')|(') + '))\\b');
          }
          var t = new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]");
          var r = new RegExp('^[\\(\\[\\{\\},:=;\\.]');
          var n = new RegExp(
            '^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))'
          );
          var i = new RegExp('^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))');
          var a = new RegExp('^((>>=)|(<<=))');
          var o = new RegExp('^[\\]\\)]');
          var s = new RegExp('^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*');
          var l = e([
            'error',
            'eval',
            'function',
            'abs',
            'acos',
            'atan',
            'asin',
            'cos',
            'cosh',
            'exp',
            'log',
            'prod',
            'sum',
            'log10',
            'max',
            'min',
            'sign',
            'sin',
            'sinh',
            'sqrt',
            'tan',
            'reshape',
            'break',
            'zeros',
            'default',
            'margin',
            'round',
            'ones',
            'rand',
            'syn',
            'ceil',
            'floor',
            'size',
            'clear',
            'zeros',
            'eye',
            'mean',
            'std',
            'cov',
            'det',
            'eig',
            'inv',
            'norm',
            'rank',
            'trace',
            'expm',
            'logm',
            'sqrtm',
            'linspace',
            'plot',
            'title',
            'xlabel',
            'ylabel',
            'legend',
            'text',
            'grid',
            'meshgrid',
            'mesh',
            'num2str',
            'fft',
            'ifft',
            'arrayfun',
            'cellfun',
            'input',
            'fliplr',
            'flipud',
            'ismember',
          ]);
          var u = e([
            'return',
            'case',
            'switch',
            'else',
            'elseif',
            'end',
            'endif',
            'endfunction',
            'if',
            'otherwise',
            'do',
            'for',
            'while',
            'try',
            'catch',
            'classdef',
            'properties',
            'events',
            'methods',
            'global',
            'persistent',
            'endfor',
            'endwhile',
            'printf',
            'sprintf',
            'disp',
            'until',
            'continue',
            'pkg',
          ]);
          function c(e, t) {
            if (!e.sol() && e.peek() === "'") {
              e.next();
              t.tokenize = d;
              return 'operator';
            }
            t.tokenize = d;
            return d(e, t);
          }
          function f(e, t) {
            if (e.match(/^.*%}/)) {
              t.tokenize = d;
              return 'comment';
            }
            e.skipToEnd();
            return 'comment';
          }
          function d(m, p) {
            if (m.eatSpace()) return null;
            if (m.match('%{')) {
              p.tokenize = f;
              m.skipToEnd();
              return 'comment';
            }
            if (m.match(/^[%#]/)) {
              m.skipToEnd();
              return 'comment';
            }
            if (m.match(/^[0-9\.+-]/, false)) {
              if (m.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/)) {
                m.tokenize = d;
                return 'number';
              }
              if (m.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/)) {
                return 'number';
              }
              if (m.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/)) {
                return 'number';
              }
            }
            if (m.match(e(['nan', 'NaN', 'inf', 'Inf']))) {
              return 'number';
            }
            var h = m.match(/^"(?:[^"]|"")*("|$)/) || m.match(/^'(?:[^']|'')*('|$)/);
            if (h) {
              return h[1] ? 'string' : 'string error';
            }
            if (m.match(u)) {
              return 'keyword';
            }
            if (m.match(l)) {
              return 'builtin';
            }
            if (m.match(s)) {
              return 'variable';
            }
            if (m.match(t) || m.match(n)) {
              return 'operator';
            }
            if (m.match(r) || m.match(i) || m.match(a)) {
              return null;
            }
            if (m.match(o)) {
              p.tokenize = c;
              return null;
            }
            m.next();
            return 'error';
          }
          return {
            startState: function () {
              return { tokenize: d };
            },
            token: function (e, t) {
              var r = t.tokenize(e, t);
              if (r === 'number' || r === 'variable') {
                t.tokenize = c;
              }
              return r;
            },
            lineComment: '%',
            fold: 'indent',
          };
        });
        e.defineMIME('text/x-octave', 'octave');
      });
    },
    44323: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('oz', function (e) {
          function t(e) {
            return new RegExp('^((' + e.join(')|(') + '))\\b');
          }
          var r = /[\^@!\|<>#~\.\*\-\+\\/,=]/;
          var n = /(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/;
          var i = /(:::)|(\.\.\.)|(=<:)|(>=:)/;
          var a = [
            'in',
            'then',
            'else',
            'of',
            'elseof',
            'elsecase',
            'elseif',
            'catch',
            'finally',
            'with',
            'require',
            'prepare',
            'import',
            'export',
            'define',
            'do',
          ];
          var o = ['end'];
          var s = t(['true', 'false', 'nil', 'unit']);
          var l = t([
            'andthen',
            'at',
            'attr',
            'declare',
            'feat',
            'from',
            'lex',
            'mod',
            'div',
            'mode',
            'orelse',
            'parser',
            'prod',
            'prop',
            'scanner',
            'self',
            'syn',
            'token',
          ]);
          var u = t([
            'local',
            'proc',
            'fun',
            'case',
            'class',
            'if',
            'cond',
            'or',
            'dis',
            'choice',
            'not',
            'thread',
            'try',
            'raise',
            'lock',
            'for',
            'suchthat',
            'meth',
            'functor',
          ]);
          var c = t(a);
          var f = t(o);
          function d(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            if (e.match(/[{}]/)) {
              return 'bracket';
            }
            if (e.match('[]')) {
              return 'keyword';
            }
            if (e.match(i) || e.match(n)) {
              return 'operator';
            }
            if (e.match(s)) {
              return 'atom';
            }
            var a = e.match(u);
            if (a) {
              if (!t.doInCurrentLine) t.currentIndent++;
              else t.doInCurrentLine = false;
              if (a[0] == 'proc' || a[0] == 'fun') t.tokenize = h;
              else if (a[0] == 'class') t.tokenize = m;
              else if (a[0] == 'meth') t.tokenize = p;
              return 'keyword';
            }
            if (e.match(c) || e.match(l)) {
              return 'keyword';
            }
            if (e.match(f)) {
              t.currentIndent--;
              return 'keyword';
            }
            var o = e.next();
            if (o == '"' || o == "'") {
              t.tokenize = b(o);
              return t.tokenize(e, t);
            }
            if (/[~\d]/.test(o)) {
              if (o == '~') {
                if (!/^[0-9]/.test(e.peek())) return null;
                else if (
                  (e.next() == '0' && e.match(/^[xX][0-9a-fA-F]+/)) ||
                  e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)
                )
                  return 'number';
              }
              if (
                (o == '0' && e.match(/^[xX][0-9a-fA-F]+/)) ||
                e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)
              )
                return 'number';
              return null;
            }
            if (o == '%') {
              e.skipToEnd();
              return 'comment';
            } else if (o == '/') {
              if (e.eat('*')) {
                t.tokenize = g;
                return g(e, t);
              }
            }
            if (r.test(o)) {
              return 'operator';
            }
            e.eatWhile(/\w/);
            return 'variable';
          }
          function m(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/);
            t.tokenize = d;
            return 'variable-3';
          }
          function p(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/);
            t.tokenize = d;
            return 'def';
          }
          function h(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            if (!t.hasPassedFirstStage && e.eat('{')) {
              t.hasPassedFirstStage = true;
              return 'bracket';
            } else if (t.hasPassedFirstStage) {
              e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/);
              t.hasPassedFirstStage = false;
              t.tokenize = d;
              return 'def';
            } else {
              t.tokenize = d;
              return null;
            }
          }
          function g(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = d;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function b(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !n) r.tokenize = d;
              return 'string';
            };
          }
          function v() {
            var e = a.concat(o);
            return new RegExp('[\\[\\]]|(' + e.join('|') + ')$');
          }
          return {
            startState: function () {
              return {
                tokenize: d,
                currentIndent: 0,
                doInCurrentLine: false,
                hasPassedFirstStage: false,
              };
            },
            token: function (e, t) {
              if (e.sol()) t.doInCurrentLine = 0;
              return t.tokenize(e, t);
            },
            indent: function (t, r) {
              var n = r.replace(/^\s+|\s+$/g, '');
              if (n.match(f) || n.match(c) || n.match(/(\[])/))
                return e.indentUnit * (t.currentIndent - 1);
              if (t.currentIndent < 0) return 0;
              return t.currentIndent * e.indentUnit;
            },
            fold: 'indent',
            electricInput: v(),
            lineComment: '%',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
          };
        });
        e.defineMIME('text/x-oz', 'oz');
      });
    },
    23057: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('pascal', function () {
          function e(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var t = e(
            'absolute and array asm begin case const constructor destructor div do ' +
              'downto else end file for function goto if implementation in inherited ' +
              'inline interface label mod nil not object of operator or packed procedure ' +
              'program record reintroduce repeat self set shl shr string then to type ' +
              'unit until uses var while with xor as class dispinterface except exports ' +
              'finalization finally initialization inline is library on out packed ' +
              'property raise resourcestring threadvar try absolute abstract alias ' +
              'assembler bitpacked break cdecl continue cppdecl cvar default deprecated ' +
              'dynamic enumerator experimental export external far far16 forward generic ' +
              'helper implements index interrupt iocheck local message name near ' +
              'nodefault noreturn nostackframe oldfpccall otherwise overload override ' +
              'pascal platform private protected public published read register ' +
              'reintroduce result safecall saveregisters softfloat specialize static ' +
              'stdcall stored strict unaligned unimplemented varargs virtual write'
          );
          var r = { null: true };
          var n = /[+\-*&%=<>!?|\/]/;
          function i(e, i) {
            var l = e.next();
            if (l == '#' && i.startOfLine) {
              e.skipToEnd();
              return 'meta';
            }
            if (l == '"' || l == "'") {
              i.tokenize = a(l);
              return i.tokenize(e, i);
            }
            if (l == '(' && e.eat('*')) {
              i.tokenize = o;
              return o(e, i);
            }
            if (l == '{') {
              i.tokenize = s;
              return s(e, i);
            }
            if (/[\[\]\(\),;\:\.]/.test(l)) {
              return null;
            }
            if (/\d/.test(l)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            }
            if (l == '/') {
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (n.test(l)) {
              e.eatWhile(n);
              return 'operator';
            }
            e.eatWhile(/[\w\$_]/);
            var u = e.current();
            if (t.propertyIsEnumerable(u)) return 'keyword';
            if (r.propertyIsEnumerable(u)) return 'atom';
            return 'variable';
          }
          function a(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !n) r.tokenize = null;
              return 'string';
            };
          }
          function o(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == ')' && r) {
                t.tokenize = null;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function s(e, t) {
            var r;
            while ((r = e.next())) {
              if (r == '}') {
                t.tokenize = null;
                break;
              }
            }
            return 'comment';
          }
          return {
            startState: function () {
              return { tokenize: null };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var r = (t.tokenize || i)(e, t);
              if (r == 'comment' || r == 'meta') return r;
              return r;
            },
            electricChars: '{}',
          };
        });
        e.defineMIME('text/x-pascal', 'pascal');
      });
    },
    31472: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(96876));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'pegjs',
          function (t) {
            var r = e.getMode(t, 'javascript');
            function n(e) {
              return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
            }
            return {
              startState: function () {
                return {
                  inString: false,
                  stringType: null,
                  inComment: false,
                  inCharacterClass: false,
                  braced: 0,
                  lhs: true,
                  localState: null,
                };
              },
              token: function (t, i) {
                if (t)
                  if (
                    !i.inString &&
                    !i.inComment &&
                    (t.peek() == '"' || t.peek() == "'")
                  ) {
                    i.stringType = t.peek();
                    t.next();
                    i.inString = true;
                  }
                if (!i.inString && !i.inComment && t.match('/*')) {
                  i.inComment = true;
                }
                if (i.inString) {
                  while (i.inString && !t.eol()) {
                    if (t.peek() === i.stringType) {
                      t.next();
                      i.inString = false;
                    } else if (t.peek() === '\\') {
                      t.next();
                      t.next();
                    } else {
                      t.match(/^.[^\\\"\']*/);
                    }
                  }
                  return i.lhs ? 'property string' : 'string';
                } else if (i.inComment) {
                  while (i.inComment && !t.eol()) {
                    if (t.match('*/')) {
                      i.inComment = false;
                    } else {
                      t.match(/^.[^\*]*/);
                    }
                  }
                  return 'comment';
                } else if (i.inCharacterClass) {
                  while (i.inCharacterClass && !t.eol()) {
                    if (!(t.match(/^[^\]\\]+/) || t.match(/^\\./))) {
                      i.inCharacterClass = false;
                    }
                  }
                } else if (t.peek() === '[') {
                  t.next();
                  i.inCharacterClass = true;
                  return 'bracket';
                } else if (t.match('//')) {
                  t.skipToEnd();
                  return 'comment';
                } else if (i.braced || t.peek() === '{') {
                  if (i.localState === null) {
                    i.localState = e.startState(r);
                  }
                  var a = r.token(t, i.localState);
                  var o = t.current();
                  if (!a) {
                    for (var s = 0; s < o.length; s++) {
                      if (o[s] === '{') {
                        i.braced++;
                      } else if (o[s] === '}') {
                        i.braced--;
                      }
                    }
                  }
                  return a;
                } else if (n(t)) {
                  if (t.peek() === ':') {
                    return 'variable';
                  }
                  return 'variable-2';
                } else if (['[', ']', '(', ')'].indexOf(t.peek()) != -1) {
                  t.next();
                  return 'bracket';
                } else if (!t.eatSpace()) {
                  t.next();
                }
                return null;
              },
            };
          },
          'javascript'
        );
      });
    },
    10024: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('perl', function () {
          var e = {
            '->': 4,
            '++': 4,
            '--': 4,
            '**': 4,
            '=~': 4,
            '!~': 4,
            '*': 4,
            '/': 4,
            '%': 4,
            x: 4,
            '+': 4,
            '-': 4,
            '.': 4,
            '<<': 4,
            '>>': 4,
            '<': 4,
            '>': 4,
            '<=': 4,
            '>=': 4,
            lt: 4,
            gt: 4,
            le: 4,
            ge: 4,
            '==': 4,
            '!=': 4,
            '<=>': 4,
            eq: 4,
            ne: 4,
            cmp: 4,
            '~~': 4,
            '&': 4,
            '|': 4,
            '^': 4,
            '&&': 4,
            '||': 4,
            '//': 4,
            '..': 4,
            '...': 4,
            '?': 4,
            ':': 4,
            '=': 4,
            '+=': 4,
            '-=': 4,
            '*=': 4,
            ',': 4,
            '=>': 4,
            '::': 4,
            not: 4,
            and: 4,
            or: 4,
            xor: 4,
            BEGIN: [5, 1],
            END: [5, 1],
            PRINT: [5, 1],
            PRINTF: [5, 1],
            GETC: [5, 1],
            READ: [5, 1],
            READLINE: [5, 1],
            DESTROY: [5, 1],
            TIE: [5, 1],
            TIEHANDLE: [5, 1],
            UNTIE: [5, 1],
            STDIN: 5,
            STDIN_TOP: 5,
            STDOUT: 5,
            STDOUT_TOP: 5,
            STDERR: 5,
            STDERR_TOP: 5,
            $ARG: 5,
            $_: 5,
            '@ARG': 5,
            '@_': 5,
            $LIST_SEPARATOR: 5,
            '$"': 5,
            $PROCESS_ID: 5,
            $PID: 5,
            $$: 5,
            $REAL_GROUP_ID: 5,
            $GID: 5,
            '$(': 5,
            $EFFECTIVE_GROUP_ID: 5,
            $EGID: 5,
            '$)': 5,
            $PROGRAM_NAME: 5,
            $0: 5,
            $SUBSCRIPT_SEPARATOR: 5,
            $SUBSEP: 5,
            '$;': 5,
            $REAL_USER_ID: 5,
            $UID: 5,
            '$<': 5,
            $EFFECTIVE_USER_ID: 5,
            $EUID: 5,
            '$>': 5,
            $a: 5,
            $b: 5,
            $COMPILING: 5,
            '$^C': 5,
            $DEBUGGING: 5,
            '$^D': 5,
            '${^ENCODING}': 5,
            $ENV: 5,
            '%ENV': 5,
            $SYSTEM_FD_MAX: 5,
            '$^F': 5,
            '@F': 5,
            '${^GLOBAL_PHASE}': 5,
            '$^H': 5,
            '%^H': 5,
            '@INC': 5,
            '%INC': 5,
            $INPLACE_EDIT: 5,
            '$^I': 5,
            '$^M': 5,
            $OSNAME: 5,
            '$^O': 5,
            '${^OPEN}': 5,
            $PERLDB: 5,
            '$^P': 5,
            $SIG: 5,
            '%SIG': 5,
            $BASETIME: 5,
            '$^T': 5,
            '${^TAINT}': 5,
            '${^UNICODE}': 5,
            '${^UTF8CACHE}': 5,
            '${^UTF8LOCALE}': 5,
            $PERL_VERSION: 5,
            '$^V': 5,
            '${^WIN32_SLOPPY_STAT}': 5,
            $EXECUTABLE_NAME: 5,
            '$^X': 5,
            $1: 5,
            $MATCH: 5,
            '$&': 5,
            '${^MATCH}': 5,
            $PREMATCH: 5,
            '$`': 5,
            '${^PREMATCH}': 5,
            $POSTMATCH: 5,
            "$'": 5,
            '${^POSTMATCH}': 5,
            $LAST_PAREN_MATCH: 5,
            '$+': 5,
            $LAST_SUBMATCH_RESULT: 5,
            '$^N': 5,
            '@LAST_MATCH_END': 5,
            '@+': 5,
            '%LAST_PAREN_MATCH': 5,
            '%+': 5,
            '@LAST_MATCH_START': 5,
            '@-': 5,
            '%LAST_MATCH_START': 5,
            '%-': 5,
            $LAST_REGEXP_CODE_RESULT: 5,
            '$^R': 5,
            '${^RE_DEBUG_FLAGS}': 5,
            '${^RE_TRIE_MAXBUF}': 5,
            $ARGV: 5,
            '@ARGV': 5,
            ARGV: 5,
            ARGVOUT: 5,
            $OUTPUT_FIELD_SEPARATOR: 5,
            $OFS: 5,
            '$,': 5,
            $INPUT_LINE_NUMBER: 5,
            $NR: 5,
            '$.': 5,
            $INPUT_RECORD_SEPARATOR: 5,
            $RS: 5,
            '$/': 5,
            $OUTPUT_RECORD_SEPARATOR: 5,
            $ORS: 5,
            '$\\': 5,
            $OUTPUT_AUTOFLUSH: 5,
            '$|': 5,
            $ACCUMULATOR: 5,
            '$^A': 5,
            $FORMAT_FORMFEED: 5,
            '$^L': 5,
            $FORMAT_PAGE_NUMBER: 5,
            '$%': 5,
            $FORMAT_LINES_LEFT: 5,
            '$-': 5,
            $FORMAT_LINE_BREAK_CHARACTERS: 5,
            '$:': 5,
            $FORMAT_LINES_PER_PAGE: 5,
            '$=': 5,
            $FORMAT_TOP_NAME: 5,
            '$^': 5,
            $FORMAT_NAME: 5,
            '$~': 5,
            '${^CHILD_ERROR_NATIVE}': 5,
            $EXTENDED_OS_ERROR: 5,
            '$^E': 5,
            $EXCEPTIONS_BEING_CAUGHT: 5,
            '$^S': 5,
            $WARNING: 5,
            '$^W': 5,
            '${^WARNING_BITS}': 5,
            $OS_ERROR: 5,
            $ERRNO: 5,
            '$!': 5,
            '%OS_ERROR': 5,
            '%ERRNO': 5,
            '%!': 5,
            $CHILD_ERROR: 5,
            '$?': 5,
            $EVAL_ERROR: 5,
            '$@': 5,
            $OFMT: 5,
            '$#': 5,
            '$*': 5,
            $ARRAY_BASE: 5,
            '$[': 5,
            $OLD_PERL_VERSION: 5,
            '$]': 5,
            if: [1, 1],
            elsif: [1, 1],
            else: [1, 1],
            while: [1, 1],
            unless: [1, 1],
            for: [1, 1],
            foreach: [1, 1],
            abs: 1,
            accept: 1,
            alarm: 1,
            atan2: 1,
            bind: 1,
            binmode: 1,
            bless: 1,
            bootstrap: 1,
            break: 1,
            caller: 1,
            chdir: 1,
            chmod: 1,
            chomp: 1,
            chop: 1,
            chown: 1,
            chr: 1,
            chroot: 1,
            close: 1,
            closedir: 1,
            connect: 1,
            continue: [1, 1],
            cos: 1,
            crypt: 1,
            dbmclose: 1,
            dbmopen: 1,
            default: 1,
            defined: 1,
            delete: 1,
            die: 1,
            do: 1,
            dump: 1,
            each: 1,
            endgrent: 1,
            endhostent: 1,
            endnetent: 1,
            endprotoent: 1,
            endpwent: 1,
            endservent: 1,
            eof: 1,
            eval: 1,
            exec: 1,
            exists: 1,
            exit: 1,
            exp: 1,
            fcntl: 1,
            fileno: 1,
            flock: 1,
            fork: 1,
            format: 1,
            formline: 1,
            getc: 1,
            getgrent: 1,
            getgrgid: 1,
            getgrnam: 1,
            gethostbyaddr: 1,
            gethostbyname: 1,
            gethostent: 1,
            getlogin: 1,
            getnetbyaddr: 1,
            getnetbyname: 1,
            getnetent: 1,
            getpeername: 1,
            getpgrp: 1,
            getppid: 1,
            getpriority: 1,
            getprotobyname: 1,
            getprotobynumber: 1,
            getprotoent: 1,
            getpwent: 1,
            getpwnam: 1,
            getpwuid: 1,
            getservbyname: 1,
            getservbyport: 1,
            getservent: 1,
            getsockname: 1,
            getsockopt: 1,
            given: 1,
            glob: 1,
            gmtime: 1,
            goto: 1,
            grep: 1,
            hex: 1,
            import: 1,
            index: 1,
            int: 1,
            ioctl: 1,
            join: 1,
            keys: 1,
            kill: 1,
            last: 1,
            lc: 1,
            lcfirst: 1,
            length: 1,
            link: 1,
            listen: 1,
            local: 2,
            localtime: 1,
            lock: 1,
            log: 1,
            lstat: 1,
            m: null,
            map: 1,
            mkdir: 1,
            msgctl: 1,
            msgget: 1,
            msgrcv: 1,
            msgsnd: 1,
            my: 2,
            new: 1,
            next: 1,
            no: 1,
            oct: 1,
            open: 1,
            opendir: 1,
            ord: 1,
            our: 2,
            pack: 1,
            package: 1,
            pipe: 1,
            pop: 1,
            pos: 1,
            print: 1,
            printf: 1,
            prototype: 1,
            push: 1,
            q: null,
            qq: null,
            qr: null,
            quotemeta: null,
            qw: null,
            qx: null,
            rand: 1,
            read: 1,
            readdir: 1,
            readline: 1,
            readlink: 1,
            readpipe: 1,
            recv: 1,
            redo: 1,
            ref: 1,
            rename: 1,
            require: 1,
            reset: 1,
            return: 1,
            reverse: 1,
            rewinddir: 1,
            rindex: 1,
            rmdir: 1,
            s: null,
            say: 1,
            scalar: 1,
            seek: 1,
            seekdir: 1,
            select: 1,
            semctl: 1,
            semget: 1,
            semop: 1,
            send: 1,
            setgrent: 1,
            sethostent: 1,
            setnetent: 1,
            setpgrp: 1,
            setpriority: 1,
            setprotoent: 1,
            setpwent: 1,
            setservent: 1,
            setsockopt: 1,
            shift: 1,
            shmctl: 1,
            shmget: 1,
            shmread: 1,
            shmwrite: 1,
            shutdown: 1,
            sin: 1,
            sleep: 1,
            socket: 1,
            socketpair: 1,
            sort: 1,
            splice: 1,
            split: 1,
            sprintf: 1,
            sqrt: 1,
            srand: 1,
            stat: 1,
            state: 1,
            study: 1,
            sub: 1,
            substr: 1,
            symlink: 1,
            syscall: 1,
            sysopen: 1,
            sysread: 1,
            sysseek: 1,
            system: 1,
            syswrite: 1,
            tell: 1,
            telldir: 1,
            tie: 1,
            tied: 1,
            time: 1,
            times: 1,
            tr: null,
            truncate: 1,
            uc: 1,
            ucfirst: 1,
            umask: 1,
            undef: 1,
            unlink: 1,
            unpack: 1,
            unshift: 1,
            untie: 1,
            use: 1,
            utime: 1,
            values: 1,
            vec: 1,
            wait: 1,
            waitpid: 1,
            wantarray: 1,
            warn: 1,
            when: 1,
            write: 1,
            y: null,
          };
          var a = 'string-2';
          var o = /[goseximacplud]/;
          function s(e, t, r, n, i) {
            t.chain = null;
            t.style = null;
            t.tail = null;
            t.tokenize = function (e, t) {
              var a = false,
                o,
                s = 0;
              while ((o = e.next())) {
                if (o === r[s] && !a) {
                  if (r[++s] !== undefined) {
                    t.chain = r[s];
                    t.style = n;
                    t.tail = i;
                  } else if (i) e.eatWhile(i);
                  t.tokenize = u;
                  return n;
                }
                a = !a && o == '\\';
              }
              return n;
            };
            return t.tokenize(e, t);
          }
          function l(e, t, r) {
            t.tokenize = function (e, t) {
              if (e.string == r) t.tokenize = u;
              e.skipToEnd();
              return 'string';
            };
            return t.tokenize(e, t);
          }
          function u(u, c) {
            if (u.eatSpace()) return null;
            if (c.chain) return s(u, c, c.chain, c.style, c.tail);
            if (u.match(/^\-?[\d\.]/, false))
              if (
                u.match(
                  /^(\-?(\d*\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F]+|0b[01]+|\d+(e[+-]?\d+)?)/
                )
              )
                return 'number';
            if (u.match(/^<<(?=[_a-zA-Z])/)) {
              u.eatWhile(/\w/);
              return l(u, c, u.current().substr(2));
            }
            if (u.sol() && u.match(/^\=item(?!\w)/)) {
              return l(u, c, '=cut');
            }
            var f = u.next();
            if (f == '"' || f == "'") {
              if (r(u, 3) == '<<' + f) {
                var d = u.pos;
                u.eatWhile(/\w/);
                var m = u.current().substr(1);
                if (m && u.eat(f)) return l(u, c, m);
                u.pos = d;
              }
              return s(u, c, [f], 'string');
            }
            if (f == 'q') {
              var p = t(u, -2);
              if (!(p && /\w/.test(p))) {
                p = t(u, 0);
                if (p == 'x') {
                  p = t(u, 1);
                  if (p == '(') {
                    i(u, 2);
                    return s(u, c, [')'], a, o);
                  }
                  if (p == '[') {
                    i(u, 2);
                    return s(u, c, [']'], a, o);
                  }
                  if (p == '{') {
                    i(u, 2);
                    return s(u, c, ['}'], a, o);
                  }
                  if (p == '<') {
                    i(u, 2);
                    return s(u, c, ['>'], a, o);
                  }
                  if (/[\^'"!~\/]/.test(p)) {
                    i(u, 1);
                    return s(u, c, [u.eat(p)], a, o);
                  }
                } else if (p == 'q') {
                  p = t(u, 1);
                  if (p == '(') {
                    i(u, 2);
                    return s(u, c, [')'], 'string');
                  }
                  if (p == '[') {
                    i(u, 2);
                    return s(u, c, [']'], 'string');
                  }
                  if (p == '{') {
                    i(u, 2);
                    return s(u, c, ['}'], 'string');
                  }
                  if (p == '<') {
                    i(u, 2);
                    return s(u, c, ['>'], 'string');
                  }
                  if (/[\^'"!~\/]/.test(p)) {
                    i(u, 1);
                    return s(u, c, [u.eat(p)], 'string');
                  }
                } else if (p == 'w') {
                  p = t(u, 1);
                  if (p == '(') {
                    i(u, 2);
                    return s(u, c, [')'], 'bracket');
                  }
                  if (p == '[') {
                    i(u, 2);
                    return s(u, c, [']'], 'bracket');
                  }
                  if (p == '{') {
                    i(u, 2);
                    return s(u, c, ['}'], 'bracket');
                  }
                  if (p == '<') {
                    i(u, 2);
                    return s(u, c, ['>'], 'bracket');
                  }
                  if (/[\^'"!~\/]/.test(p)) {
                    i(u, 1);
                    return s(u, c, [u.eat(p)], 'bracket');
                  }
                } else if (p == 'r') {
                  p = t(u, 1);
                  if (p == '(') {
                    i(u, 2);
                    return s(u, c, [')'], a, o);
                  }
                  if (p == '[') {
                    i(u, 2);
                    return s(u, c, [']'], a, o);
                  }
                  if (p == '{') {
                    i(u, 2);
                    return s(u, c, ['}'], a, o);
                  }
                  if (p == '<') {
                    i(u, 2);
                    return s(u, c, ['>'], a, o);
                  }
                  if (/[\^'"!~\/]/.test(p)) {
                    i(u, 1);
                    return s(u, c, [u.eat(p)], a, o);
                  }
                } else if (/[\^'"!~\/(\[{<]/.test(p)) {
                  if (p == '(') {
                    i(u, 1);
                    return s(u, c, [')'], 'string');
                  }
                  if (p == '[') {
                    i(u, 1);
                    return s(u, c, [']'], 'string');
                  }
                  if (p == '{') {
                    i(u, 1);
                    return s(u, c, ['}'], 'string');
                  }
                  if (p == '<') {
                    i(u, 1);
                    return s(u, c, ['>'], 'string');
                  }
                  if (/[\^'"!~\/]/.test(p)) {
                    return s(u, c, [u.eat(p)], 'string');
                  }
                }
              }
            }
            if (f == 'm') {
              var p = t(u, -2);
              if (!(p && /\w/.test(p))) {
                p = u.eat(/[(\[{<\^'"!~\/]/);
                if (p) {
                  if (/[\^'"!~\/]/.test(p)) {
                    return s(u, c, [p], a, o);
                  }
                  if (p == '(') {
                    return s(u, c, [')'], a, o);
                  }
                  if (p == '[') {
                    return s(u, c, [']'], a, o);
                  }
                  if (p == '{') {
                    return s(u, c, ['}'], a, o);
                  }
                  if (p == '<') {
                    return s(u, c, ['>'], a, o);
                  }
                }
              }
            }
            if (f == 's') {
              var p = /[\/>\]})\w]/.test(t(u, -2));
              if (!p) {
                p = u.eat(/[(\[{<\^'"!~\/]/);
                if (p) {
                  if (p == '[') return s(u, c, [']', ']'], a, o);
                  if (p == '{') return s(u, c, ['}', '}'], a, o);
                  if (p == '<') return s(u, c, ['>', '>'], a, o);
                  if (p == '(') return s(u, c, [')', ')'], a, o);
                  return s(u, c, [p, p], a, o);
                }
              }
            }
            if (f == 'y') {
              var p = /[\/>\]})\w]/.test(t(u, -2));
              if (!p) {
                p = u.eat(/[(\[{<\^'"!~\/]/);
                if (p) {
                  if (p == '[') return s(u, c, [']', ']'], a, o);
                  if (p == '{') return s(u, c, ['}', '}'], a, o);
                  if (p == '<') return s(u, c, ['>', '>'], a, o);
                  if (p == '(') return s(u, c, [')', ')'], a, o);
                  return s(u, c, [p, p], a, o);
                }
              }
            }
            if (f == 't') {
              var p = /[\/>\]})\w]/.test(t(u, -2));
              if (!p) {
                p = u.eat('r');
                if (p) {
                  p = u.eat(/[(\[{<\^'"!~\/]/);
                  if (p) {
                    if (p == '[') return s(u, c, [']', ']'], a, o);
                    if (p == '{') return s(u, c, ['}', '}'], a, o);
                    if (p == '<') return s(u, c, ['>', '>'], a, o);
                    if (p == '(') return s(u, c, [')', ')'], a, o);
                    return s(u, c, [p, p], a, o);
                  }
                }
              }
            }
            if (f == '`') {
              return s(u, c, [f], 'variable-2');
            }
            if (f == '/') {
              if (!/~\s*$/.test(r(u))) return 'operator';
              else return s(u, c, [f], a, o);
            }
            if (f == '$') {
              var d = u.pos;
              if (u.eatWhile(/\d/) || (u.eat('{') && u.eatWhile(/\d/) && u.eat('}')))
                return 'variable-2';
              else u.pos = d;
            }
            if (/[$@%]/.test(f)) {
              var d = u.pos;
              if (
                (u.eat('^') && u.eat(/[A-Z]/)) ||
                (!/[@$%&]/.test(t(u, -2)) &&
                  u.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/))
              ) {
                var p = u.current();
                if (e[p]) return 'variable-2';
              }
              u.pos = d;
            }
            if (/[$@%&]/.test(f)) {
              if (
                u.eatWhile(/[\w$]/) ||
                (u.eat('{') && u.eatWhile(/[\w$]/) && u.eat('}'))
              ) {
                var p = u.current();
                if (e[p]) return 'variable-2';
                else return 'variable';
              }
            }
            if (f == '#') {
              if (t(u, -2) != '$') {
                u.skipToEnd();
                return 'comment';
              }
            }
            if (/[:+\-\^*$&%@=<>!?|\/~\.]/.test(f)) {
              var d = u.pos;
              u.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/);
              if (e[u.current()]) return 'operator';
              else u.pos = d;
            }
            if (f == '_') {
              if (u.pos == 1) {
                if (n(u, 6) == '_END__') {
                  return s(u, c, ['\0'], 'comment');
                } else if (n(u, 7) == '_DATA__') {
                  return s(u, c, ['\0'], 'variable-2');
                } else if (n(u, 7) == '_C__') {
                  return s(u, c, ['\0'], 'string');
                }
              }
            }
            if (/\w/.test(f)) {
              var d = u.pos;
              if (
                t(u, -2) == '{' &&
                (t(u, 0) == '}' || (u.eatWhile(/\w/) && t(u, 0) == '}'))
              )
                return 'string';
              else u.pos = d;
            }
            if (/[A-Z]/.test(f)) {
              var h = t(u, -2);
              var d = u.pos;
              u.eatWhile(/[A-Z_]/);
              if (/[\da-z]/.test(t(u, 0))) {
                u.pos = d;
              } else {
                var p = e[u.current()];
                if (!p) return 'meta';
                if (p[1]) p = p[0];
                if (h != ':') {
                  if (p == 1) return 'keyword';
                  else if (p == 2) return 'def';
                  else if (p == 3) return 'atom';
                  else if (p == 4) return 'operator';
                  else if (p == 5) return 'variable-2';
                  else return 'meta';
                } else return 'meta';
              }
            }
            if (/[a-zA-Z_]/.test(f)) {
              var h = t(u, -2);
              u.eatWhile(/\w/);
              var p = e[u.current()];
              if (!p) return 'meta';
              if (p[1]) p = p[0];
              if (h != ':') {
                if (p == 1) return 'keyword';
                else if (p == 2) return 'def';
                else if (p == 3) return 'atom';
                else if (p == 4) return 'operator';
                else if (p == 5) return 'variable-2';
                else return 'meta';
              } else return 'meta';
            }
            return null;
          }
          return {
            startState: function () {
              return { tokenize: u, chain: null, style: null, tail: null };
            },
            token: function (e, t) {
              return (t.tokenize || u)(e, t);
            },
            lineComment: '#',
          };
        });
        e.registerHelper('wordChars', 'perl', /[\w$]/);
        e.defineMIME('text/x-perl', 'perl');
        function t(e, t) {
          return e.string.charAt(e.pos + (t || 0));
        }
        function r(e, t) {
          if (t) {
            var r = e.pos - t;
            return e.string.substr(r >= 0 ? r : 0, t);
          } else {
            return e.string.substr(0, e.pos - 1);
          }
        }
        function n(e, t) {
          var r = e.string.length;
          var n = r - e.pos + 1;
          return e.string.substr(e.pos, t && t < r ? t : n);
        }
        function i(e, t) {
          var r = e.pos + t;
          var n;
          if (r <= 0) e.pos = 0;
          else if (r >= (n = e.string.length - 1)) e.pos = n;
          else e.pos = r;
        }
      });
    },
    36702: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(16531), r(99762));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        function r(e, t, i) {
          if (e.length == 0) return n(t);
          return function (a, o) {
            var s = e[0];
            for (var l = 0; l < s.length; l++)
              if (a.match(s[l][0])) {
                o.tokenize = r(e.slice(1), t);
                return s[l][1];
              }
            o.tokenize = n(t, i);
            return 'string';
          };
        }
        function n(e, t) {
          return function (r, n) {
            return i(r, n, e, t);
          };
        }
        function i(e, t, n, i) {
          if ((i !== false && e.match('${', false)) || e.match('{$', false)) {
            t.tokenize = null;
            return 'string';
          }
          if (i !== false && e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/)) {
            if (e.match('[', false)) {
              t.tokenize = r(
                [
                  [['[', null]],
                  [
                    [/\d[\w\.]*/, 'number'],
                    [/\$[a-zA-Z_][a-zA-Z0-9_]*/, 'variable-2'],
                    [/[\w\$]+/, 'variable'],
                  ],
                  [[']', null]],
                ],
                n,
                i
              );
            }
            if (e.match(/^->\w/, false)) {
              t.tokenize = r([[['->', null]], [[/[\w]+/, 'variable']]], n, i);
            }
            return 'variable-2';
          }
          var a = false;
          while (
            !e.eol() &&
            (a ||
              i === false ||
              (!e.match('{$', false) &&
                !e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, false)))
          ) {
            if (!a && e.match(n)) {
              t.tokenize = null;
              t.tokStack.pop();
              t.tokStack.pop();
              break;
            }
            a = e.next() == '\\' && !a;
          }
          return 'string';
        }
        var a =
          'abstract and array as break case catch class clone const continue declare default ' +
          'do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final ' +
          'for foreach function global goto if implements interface instanceof namespace ' +
          'new or private protected public static switch throw trait try use var while xor ' +
          'die echo empty exit eval include include_once isset list require require_once return ' +
          'print unset __halt_compiler self static parent yield insteadof finally';
        var o =
          'true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__';
        var s =
          'func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage memory_get_peak_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count';
        e.registerHelper('hintWords', 'php', [a, o, s].join(' ').split(' '));
        e.registerHelper('wordChars', 'php', /[\w$]/);
        var l = {
          name: 'clike',
          helperType: 'php',
          keywords: t(a),
          blockKeywords: t(
            'catch do else elseif for foreach if switch try while finally'
          ),
          defKeywords: t('class function interface namespace trait'),
          atoms: t(o),
          builtin: t(s),
          multiLineStrings: true,
          hooks: {
            $: function (e) {
              e.eatWhile(/[\w\$_]/);
              return 'variable-2';
            },
            '<': function (e, t) {
              var r;
              if ((r = e.match(/^<<\s*/))) {
                var i = e.eat(/['"]/);
                e.eatWhile(/[\w\.]/);
                var a = e.current().slice(r[0].length + (i ? 2 : 1));
                if (i) e.eat(i);
                if (a) {
                  (t.tokStack || (t.tokStack = [])).push(a, 0);
                  t.tokenize = n(a, i != "'");
                  return 'string';
                }
              }
              return false;
            },
            '#': function (e) {
              while (!e.eol() && !e.match('?>', false)) e.next();
              return 'comment';
            },
            '/': function (e) {
              if (e.eat('/')) {
                while (!e.eol() && !e.match('?>', false)) e.next();
                return 'comment';
              }
              return false;
            },
            '"': function (e, t) {
              (t.tokStack || (t.tokStack = [])).push('"', 0);
              t.tokenize = n('"');
              return 'string';
            },
            '{': function (e, t) {
              if (t.tokStack && t.tokStack.length) t.tokStack[t.tokStack.length - 1]++;
              return false;
            },
            '}': function (e, t) {
              if (
                t.tokStack &&
                t.tokStack.length > 0 &&
                !--t.tokStack[t.tokStack.length - 1]
              ) {
                t.tokenize = n(t.tokStack[t.tokStack.length - 2]);
              }
              return false;
            },
          },
        };
        e.defineMode(
          'php',
          function (t, r) {
            var n = e.getMode(t, (r && r.htmlMode) || 'text/html');
            var i = e.getMode(t, l);
            function a(t, r) {
              var a = r.curMode == i;
              if (t.sol() && r.pending && r.pending != '"' && r.pending != "'")
                r.pending = null;
              if (!a) {
                if (t.match(/^<\?\w*/)) {
                  r.curMode = i;
                  if (!r.php) r.php = e.startState(i, n.indent(r.html, '', ''));
                  r.curState = r.php;
                  return 'meta';
                }
                if (r.pending == '"' || r.pending == "'") {
                  while (!t.eol() && t.next() != r.pending) {}
                  var o = 'string';
                } else if (r.pending && t.pos < r.pending.end) {
                  t.pos = r.pending.end;
                  var o = r.pending.style;
                } else {
                  var o = n.token(t, r.curState);
                }
                if (r.pending) r.pending = null;
                var s = t.current(),
                  l = s.search(/<\?/),
                  u;
                if (l != -1) {
                  if (o == 'string' && (u = s.match(/[\'\"]$/)) && !/\?>/.test(s))
                    r.pending = u[0];
                  else r.pending = { end: t.pos, style: o };
                  t.backUp(s.length - l);
                }
                return o;
              } else if (a && r.php.tokenize == null && t.match('?>')) {
                r.curMode = n;
                r.curState = r.html;
                if (!r.php.context.prev) r.php = null;
                return 'meta';
              } else {
                return i.token(t, r.curState);
              }
            }
            return {
              startState: function () {
                var t = e.startState(n);
                var a = r.startOpen ? e.startState(i) : null;
                return {
                  html: t,
                  php: a,
                  curMode: r.startOpen ? i : n,
                  curState: r.startOpen ? a : t,
                  pending: null,
                };
              },
              copyState: function (t) {
                var r = t.html,
                  a = e.copyState(n, r),
                  o = t.php,
                  s = o && e.copyState(i, o),
                  l;
                if (t.curMode == n) l = a;
                else l = s;
                return {
                  html: a,
                  php: s,
                  curMode: t.curMode,
                  curState: l,
                  pending: t.pending,
                };
              },
              token: a,
              indent: function (e, t, r) {
                if (
                  (e.curMode != i && /^\s*<\//.test(t)) ||
                  (e.curMode == i && /^\?>/.test(t))
                )
                  return n.indent(e.html, t, r);
                return e.curMode.indent(e.curState, t, r);
              },
              blockCommentStart: '/*',
              blockCommentEnd: '*/',
              lineComment: '//',
              innerMode: function (e) {
                return { state: e.curState, mode: e.curMode };
              },
            };
          },
          'htmlmixed',
          'clike'
        );
        e.defineMIME('application/x-httpd-php', 'php');
        e.defineMIME('application/x-httpd-php-open', { name: 'php', startOpen: true });
        e.defineMIME('text/x-php', l);
      });
    },
    54763: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('pig', function (e, t) {
          var r = t.keywords,
            n = t.builtins,
            i = t.types,
            a = t.multiLineStrings;
          var o = /[*+\-%<>=&?:\/!|]/;
          function s(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function l(e, t) {
            var r = false;
            var n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = c;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function u(e) {
            return function (t, r) {
              var n = false,
                i,
                o = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  o = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (o || !(n || a)) r.tokenize = c;
              return 'error';
            };
          }
          function c(e, t) {
            var a = e.next();
            if (a == '"' || a == "'") return s(e, t, u(a));
            else if (/[\[\]{}\(\),;\.]/.test(a)) return null;
            else if (/\d/.test(a)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            } else if (a == '/') {
              if (e.eat('*')) {
                return s(e, t, l);
              } else {
                e.eatWhile(o);
                return 'operator';
              }
            } else if (a == '-') {
              if (e.eat('-')) {
                e.skipToEnd();
                return 'comment';
              } else {
                e.eatWhile(o);
                return 'operator';
              }
            } else if (o.test(a)) {
              e.eatWhile(o);
              return 'operator';
            } else {
              e.eatWhile(/[\w\$_]/);
              if (r && r.propertyIsEnumerable(e.current().toUpperCase())) {
                if (!e.eat(')') && !e.eat('.')) return 'keyword';
              }
              if (n && n.propertyIsEnumerable(e.current().toUpperCase()))
                return 'variable-2';
              if (i && i.propertyIsEnumerable(e.current().toUpperCase()))
                return 'variable-3';
              return 'variable';
            }
          }
          return {
            startState: function () {
              return { tokenize: c, startOfLine: true };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              return r;
            },
          };
        });
        (function () {
          function t(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var r =
            'ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL ' +
            'CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS ' +
            'DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG ' +
            'FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN ' +
            'INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ' +
            'ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS ' +
            'LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  ' +
            'PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE ' +
            'SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG ' +
            'TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ';
          var n =
            'VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP ' +
            'JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL ' +
            'PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE ' +
            'SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE ' +
            'NEQ MATCHES TRUE FALSE DUMP';
          var i = 'BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ';
          e.defineMIME('text/x-pig', {
            name: 'pig',
            builtins: t(r),
            keywords: t(n),
            types: t(i),
          });
          e.registerHelper('hintWords', 'pig', (r + i + n).split(' '));
        })();
      });
    },
    97196: (e, t, r) => {
      (function (e) {
        'use strict';
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('powershell', function () {
          function e(e, t) {
            t = t || {};
            var r = t.prefix !== undefined ? t.prefix : '^';
            var n = t.suffix !== undefined ? t.suffix : '\\b';
            for (var i = 0; i < e.length; i++) {
              if (e[i] instanceof RegExp) {
                e[i] = e[i].source;
              } else {
                e[i] = e[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
              }
            }
            return new RegExp(r + '(' + e.join('|') + ')' + n, 'i');
          }
          var t = '(?=[^A-Za-z\\d\\-_]|$)';
          var r = /[\w\-:]/;
          var n = e(
            [
              /begin|break|catch|continue|data|default|do|dynamicparam/,
              /else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,
              /param|process|return|switch|throw|trap|try|until|where|while/,
            ],
            { suffix: t }
          );
          var i = /[\[\]{},;`\\\.]|@[({]/;
          var a = e(
            [
              'f',
              /b?not/,
              /[ic]?split/,
              'join',
              /is(not)?/,
              'as',
              /[ic]?(eq|ne|[gl][te])/,
              /[ic]?(not)?(like|match|contains)/,
              /[ic]?replace/,
              /b?(and|or|xor)/,
            ],
            { prefix: '-' }
          );
          var o = /[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/;
          var s = e([a, o], { suffix: '' });
          var l =
            /^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i;
          var u = /^[A-Za-z\_][A-Za-z\-\_\d]*\b/;
          var c = /[A-Z]:|%|\?/i;
          var f = e(
            [
              /Add-(Computer|Content|History|Member|PSSnapin|Type)/,
              /Checkpoint-Computer/,
              /Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,
              /Compare-Object/,
              /Complete-Transaction/,
              /Connect-PSSession/,
              /ConvertFrom-(Csv|Json|SecureString|StringData)/,
              /Convert-Path/,
              /ConvertTo-(Csv|Html|Json|SecureString|Xml)/,
              /Copy-Item(Property)?/,
              /Debug-Process/,
              /Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
              /Disconnect-PSSession/,
              /Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
              /(Enter|Exit)-PSSession/,
              /Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,
              /ForEach-Object/,
              /Format-(Custom|List|Table|Wide)/,
              new RegExp(
                'Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential' +
                  '|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job' +
                  '|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration' +
                  '|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)'
              ),
              /Group-Object/,
              /Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,
              /ImportSystemModules/,
              /Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,
              /Join-Path/,
              /Limit-EventLog/,
              /Measure-(Command|Object)/,
              /Move-Item(Property)?/,
              new RegExp(
                'New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile' +
                  '|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)'
              ),
              /Out-(Default|File|GridView|Host|Null|Printer|String)/,
              /Pause/,
              /(Pop|Push)-Location/,
              /Read-Host/,
              /Receive-(Job|PSSession)/,
              /Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,
              /Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,
              /Rename-(Computer|Item(Property)?)/,
              /Reset-ComputerMachinePassword/,
              /Resolve-Path/,
              /Restart-(Computer|Service)/,
              /Restore-Computer/,
              /Resume-(Job|Service)/,
              /Save-Help/,
              /Select-(Object|String|Xml)/,
              /Send-MailMessage/,
              new RegExp(
                'Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug' +
                  '|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)'
              ),
              /Show-(Command|ControlPanelItem|EventLog)/,
              /Sort-Object/,
              /Split-Path/,
              /Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,
              /Stop-(Computer|Job|Process|Service|Transcript)/,
              /Suspend-(Job|Service)/,
              /TabExpansion2/,
              /Tee-Object/,
              /Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,
              /Trace-Command/,
              /Unblock-File/,
              /Undo-Transaction/,
              /Unregister-(Event|PSSessionConfiguration)/,
              /Update-(FormatData|Help|List|TypeData)/,
              /Use-Transaction/,
              /Wait-(Event|Job|Process)/,
              /Where-Object/,
              /Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,
              /cd|help|mkdir|more|oss|prompt/,
              /ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,
              /echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,
              /group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,
              /measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,
              /rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,
              /sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/,
            ],
            { prefix: '', suffix: '' }
          );
          var d = e(
            [
              /[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,
              /FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,
              /MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,
              /PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,
              /PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,
              /WarningPreference|WhatIfPreference/,
              /Event|EventArgs|EventSubscriber|Sender/,
              /Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,
              /true|false|null/,
            ],
            { prefix: '\\$', suffix: '' }
          );
          var m = e([c, f, d], { suffix: t });
          var p = {
            keyword: n,
            number: l,
            operator: s,
            builtin: m,
            punctuation: i,
            identifier: u,
          };
          function h(e, t) {
            var n = t.returnStack[t.returnStack.length - 1];
            if (n && n.shouldReturnFrom(t)) {
              t.tokenize = n.tokenize;
              t.returnStack.pop();
              return t.tokenize(e, t);
            }
            if (e.eatSpace()) {
              return null;
            }
            if (e.eat('(')) {
              t.bracketNesting += 1;
              return 'punctuation';
            }
            if (e.eat(')')) {
              t.bracketNesting -= 1;
              return 'punctuation';
            }
            for (var i in p) {
              if (e.match(p[i])) {
                return i;
              }
            }
            var a = e.next();
            if (a === "'") {
              return g(e, t);
            }
            if (a === '$') {
              return w(e, t);
            }
            if (a === '"') {
              return b(e, t);
            }
            if (a === '<' && e.eat('#')) {
              t.tokenize = y;
              return y(e, t);
            }
            if (a === '#') {
              e.skipToEnd();
              return 'comment';
            }
            if (a === '@') {
              var o = e.eat(/["']/);
              if (o && e.eol()) {
                t.tokenize = S;
                t.startQuote = o[0];
                return S(e, t);
              } else if (e.eol()) {
                return 'error';
              } else if (e.peek().match(/[({]/)) {
                return 'punctuation';
              } else if (e.peek().match(r)) {
                return w(e, t);
              }
            }
            return 'error';
          }
          function g(e, t) {
            var r;
            while ((r = e.peek()) != null) {
              e.next();
              if (r === "'" && !e.eat("'")) {
                t.tokenize = h;
                return 'string';
              }
            }
            return 'error';
          }
          function b(e, t) {
            var r;
            while ((r = e.peek()) != null) {
              if (r === '$') {
                t.tokenize = v;
                return 'string';
              }
              e.next();
              if (r === '`') {
                e.next();
                continue;
              }
              if (r === '"' && !e.eat('"')) {
                t.tokenize = h;
                return 'string';
              }
            }
            return 'error';
          }
          function v(e, t) {
            return x(e, t, b);
          }
          function k(e, t) {
            t.tokenize = S;
            t.startQuote = '"';
            return S(e, t);
          }
          function _(e, t) {
            return x(e, t, k);
          }
          function x(e, t, r) {
            if (e.match('$(')) {
              var n = t.bracketNesting;
              t.returnStack.push({
                shouldReturnFrom: function (e) {
                  return e.bracketNesting === n;
                },
                tokenize: r,
              });
              t.tokenize = h;
              t.bracketNesting += 1;
              return 'punctuation';
            } else {
              e.next();
              t.returnStack.push({
                shouldReturnFrom: function () {
                  return true;
                },
                tokenize: r,
              });
              t.tokenize = w;
              return t.tokenize(e, t);
            }
          }
          function y(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (r && n == '>') {
                t.tokenize = h;
                break;
              }
              r = n === '#';
            }
            return 'comment';
          }
          function w(e, t) {
            var n = e.peek();
            if (e.eat('{')) {
              t.tokenize = E;
              return E(e, t);
            } else if (n != undefined && n.match(r)) {
              e.eatWhile(r);
              t.tokenize = h;
              return 'variable-2';
            } else {
              t.tokenize = h;
              return 'error';
            }
          }
          function E(e, t) {
            var r;
            while ((r = e.next()) != null) {
              if (r === '}') {
                t.tokenize = h;
                break;
              }
            }
            return 'variable-2';
          }
          function S(e, t) {
            var r = t.startQuote;
            if (e.sol() && e.match(new RegExp(r + '@'))) {
              t.tokenize = h;
            } else if (r === '"') {
              while (!e.eol()) {
                var n = e.peek();
                if (n === '$') {
                  t.tokenize = _;
                  return 'string';
                }
                e.next();
                if (n === '`') {
                  e.next();
                }
              }
            } else {
              e.skipToEnd();
            }
            return 'string';
          }
          var T = {
            startState: function () {
              return { returnStack: [], bracketNesting: 0, tokenize: h };
            },
            token: function (e, t) {
              return t.tokenize(e, t);
            },
            blockCommentStart: '<#',
            blockCommentEnd: '#>',
            lineComment: '#',
            fold: 'brace',
          };
          return T;
        });
        e.defineMIME('application/x-powershell', 'powershell');
      });
    },
    7999: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('properties', function () {
          return {
            token: function (e, t) {
              var r = e.sol() || t.afterSection;
              var n = e.eol();
              t.afterSection = false;
              if (r) {
                if (t.nextMultiline) {
                  t.inMultiline = true;
                  t.nextMultiline = false;
                } else {
                  t.position = 'def';
                }
              }
              if (n && !t.nextMultiline) {
                t.inMultiline = false;
                t.position = 'def';
              }
              if (r) {
                while (e.eatSpace()) {}
              }
              var i = e.next();
              if (r && (i === '#' || i === '!' || i === ';')) {
                t.position = 'comment';
                e.skipToEnd();
                return 'comment';
              } else if (r && i === '[') {
                t.afterSection = true;
                e.skipTo(']');
                e.eat(']');
                return 'header';
              } else if (i === '=' || i === ':') {
                t.position = 'quote';
                return null;
              } else if (i === '\\' && t.position === 'quote') {
                if (e.eol()) {
                  t.nextMultiline = true;
                }
              }
              return t.position;
            },
            startState: function () {
              return {
                position: 'def',
                nextMultiline: false,
                inMultiline: false,
                afterSection: false,
              };
            },
          };
        });
        e.defineMIME('text/x-properties', 'properties');
        e.defineMIME('text/x-ini', 'properties');
      });
    },
    72360: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          return new RegExp('^((' + e.join(')|(') + '))\\b', 'i');
        }
        var r = [
          'package',
          'message',
          'import',
          'syntax',
          'required',
          'optional',
          'repeated',
          'reserved',
          'default',
          'extensions',
          'packed',
          'bool',
          'bytes',
          'double',
          'enum',
          'float',
          'string',
          'int32',
          'int64',
          'uint32',
          'uint64',
          'sint32',
          'sint64',
          'fixed32',
          'fixed64',
          'sfixed32',
          'sfixed64',
          'option',
          'service',
          'rpc',
          'returns',
        ];
        var n = t(r);
        e.registerHelper('hintWords', 'protobuf', r);
        var i = new RegExp('^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*');
        function a(e) {
          if (e.eatSpace()) return null;
          if (e.match('//')) {
            e.skipToEnd();
            return 'comment';
          }
          if (e.match(/^[0-9\.+-]/, false)) {
            if (e.match(/^[+-]?0x[0-9a-fA-F]+/)) return 'number';
            if (e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)) return 'number';
            if (e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) return 'number';
          }
          if (e.match(/^"([^"]|(""))*"/)) {
            return 'string';
          }
          if (e.match(/^'([^']|(''))*'/)) {
            return 'string';
          }
          if (e.match(n)) {
            return 'keyword';
          }
          if (e.match(i)) {
            return 'variable';
          }
          e.next();
          return null;
        }
        e.defineMode('protobuf', function () {
          return { token: a, fold: 'brace' };
        });
        e.defineMIME('text/x-protobuf', 'protobuf');
      });
    },
    75354: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(96876), r(36629), r(16531));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'pug',
          function (t) {
            var r = 'keyword';
            var n = 'meta';
            var i = 'builtin';
            var a = 'qualifier';
            var o = { '{': '}', '(': ')', '[': ']' };
            var s = e.getMode(t, 'javascript');
            function l() {
              this.javaScriptLine = false;
              this.javaScriptLineExcludesColon = false;
              this.javaScriptArguments = false;
              this.javaScriptArgumentsDepth = 0;
              this.isInterpolating = false;
              this.interpolationNesting = 0;
              this.jsState = e.startState(s);
              this.restOfLine = '';
              this.isIncludeFiltered = false;
              this.isEach = false;
              this.lastTag = '';
              this.scriptType = '';
              this.isAttrs = false;
              this.attrsNest = [];
              this.inAttributeName = true;
              this.attributeIsType = false;
              this.attrValue = '';
              this.indentOf = Infinity;
              this.indentToken = '';
              this.innerMode = null;
              this.innerState = null;
              this.innerModeForLine = false;
            }
            l.prototype.copy = function () {
              var t = new l();
              t.javaScriptLine = this.javaScriptLine;
              t.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon;
              t.javaScriptArguments = this.javaScriptArguments;
              t.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth;
              t.isInterpolating = this.isInterpolating;
              t.interpolationNesting = this.interpolationNesting;
              t.jsState = e.copyState(s, this.jsState);
              t.innerMode = this.innerMode;
              if (this.innerMode && this.innerState) {
                t.innerState = e.copyState(this.innerMode, this.innerState);
              }
              t.restOfLine = this.restOfLine;
              t.isIncludeFiltered = this.isIncludeFiltered;
              t.isEach = this.isEach;
              t.lastTag = this.lastTag;
              t.scriptType = this.scriptType;
              t.isAttrs = this.isAttrs;
              t.attrsNest = this.attrsNest.slice();
              t.inAttributeName = this.inAttributeName;
              t.attributeIsType = this.attributeIsType;
              t.attrValue = this.attrValue;
              t.indentOf = this.indentOf;
              t.indentToken = this.indentToken;
              t.innerModeForLine = this.innerModeForLine;
              return t;
            };
            function u(e, t) {
              if (e.sol()) {
                t.javaScriptLine = false;
                t.javaScriptLineExcludesColon = false;
              }
              if (t.javaScriptLine) {
                if (t.javaScriptLineExcludesColon && e.peek() === ':') {
                  t.javaScriptLine = false;
                  t.javaScriptLineExcludesColon = false;
                  return;
                }
                var r = s.token(e, t.jsState);
                if (e.eol()) t.javaScriptLine = false;
                return r || true;
              }
            }
            function c(e, t) {
              if (t.javaScriptArguments) {
                if (t.javaScriptArgumentsDepth === 0 && e.peek() !== '(') {
                  t.javaScriptArguments = false;
                  return;
                }
                if (e.peek() === '(') {
                  t.javaScriptArgumentsDepth++;
                } else if (e.peek() === ')') {
                  t.javaScriptArgumentsDepth--;
                }
                if (t.javaScriptArgumentsDepth === 0) {
                  t.javaScriptArguments = false;
                  return;
                }
                var r = s.token(e, t.jsState);
                return r || true;
              }
            }
            function f(e) {
              if (e.match(/^yield\b/)) {
                return 'keyword';
              }
            }
            function d(e) {
              if (e.match(/^(?:doctype) *([^\n]+)?/)) {
                return n;
              }
            }
            function m(e, t) {
              if (e.match('#{')) {
                t.isInterpolating = true;
                t.interpolationNesting = 0;
                return 'punctuation';
              }
            }
            function p(e, t) {
              if (t.isInterpolating) {
                if (e.peek() === '}') {
                  t.interpolationNesting--;
                  if (t.interpolationNesting < 0) {
                    e.next();
                    t.isInterpolating = false;
                    return 'punctuation';
                  }
                } else if (e.peek() === '{') {
                  t.interpolationNesting++;
                }
                return s.token(e, t.jsState) || true;
              }
            }
            function h(e, t) {
              if (e.match(/^case\b/)) {
                t.javaScriptLine = true;
                return r;
              }
            }
            function g(e, t) {
              if (e.match(/^when\b/)) {
                t.javaScriptLine = true;
                t.javaScriptLineExcludesColon = true;
                return r;
              }
            }
            function b(e) {
              if (e.match(/^default\b/)) {
                return r;
              }
            }
            function v(e, t) {
              if (e.match(/^extends?\b/)) {
                t.restOfLine = 'string';
                return r;
              }
            }
            function k(e, t) {
              if (e.match(/^append\b/)) {
                t.restOfLine = 'variable';
                return r;
              }
            }
            function _(e, t) {
              if (e.match(/^prepend\b/)) {
                t.restOfLine = 'variable';
                return r;
              }
            }
            function x(e, t) {
              if (e.match(/^block\b *(?:(prepend|append)\b)?/)) {
                t.restOfLine = 'variable';
                return r;
              }
            }
            function y(e, t) {
              if (e.match(/^include\b/)) {
                t.restOfLine = 'string';
                return r;
              }
            }
            function w(e, t) {
              if (e.match(/^include:([a-zA-Z0-9\-]+)/, false) && e.match('include')) {
                t.isIncludeFiltered = true;
                return r;
              }
            }
            function E(e, t) {
              if (t.isIncludeFiltered) {
                var r = O(e, t);
                t.isIncludeFiltered = false;
                t.restOfLine = 'string';
                return r;
              }
            }
            function S(e, t) {
              if (e.match(/^mixin\b/)) {
                t.javaScriptLine = true;
                return r;
              }
            }
            function T(e, t) {
              if (e.match(/^\+([-\w]+)/)) {
                if (!e.match(/^\( *[-\w]+ *=/, false)) {
                  t.javaScriptArguments = true;
                  t.javaScriptArgumentsDepth = 0;
                }
                return 'variable';
              }
              if (e.match('+#{', false)) {
                e.next();
                t.mixinCallAfter = true;
                return m(e, t);
              }
            }
            function I(e, t) {
              if (t.mixinCallAfter) {
                t.mixinCallAfter = false;
                if (!e.match(/^\( *[-\w]+ *=/, false)) {
                  t.javaScriptArguments = true;
                  t.javaScriptArgumentsDepth = 0;
                }
                return true;
              }
            }
            function A(e, t) {
              if (e.match(/^(if|unless|else if|else)\b/)) {
                t.javaScriptLine = true;
                return r;
              }
            }
            function C(e, t) {
              if (e.match(/^(- *)?(each|for)\b/)) {
                t.isEach = true;
                return r;
              }
            }
            function z(e, t) {
              if (t.isEach) {
                if (e.match(/^ in\b/)) {
                  t.javaScriptLine = true;
                  t.isEach = false;
                  return r;
                } else if (e.sol() || e.eol()) {
                  t.isEach = false;
                } else if (e.next()) {
                  while (!e.match(/^ in\b/, false) && e.next());
                  return 'variable';
                }
              }
            }
            function R(e, t) {
              if (e.match(/^while\b/)) {
                t.javaScriptLine = true;
                return r;
              }
            }
            function M(e, t) {
              var r;
              if ((r = e.match(/^(\w(?:[-:\w]*\w)?)\/?/))) {
                t.lastTag = r[1].toLowerCase();
                if (t.lastTag === 'script') {
                  t.scriptType = 'application/javascript';
                }
                return 'tag';
              }
            }
            function O(r, n) {
              if (r.match(/^:([\w\-]+)/)) {
                var i;
                if (t && t.innerModes) {
                  i = t.innerModes(r.current().substring(1));
                }
                if (!i) {
                  i = r.current().substring(1);
                }
                if (typeof i === 'string') {
                  i = e.getMode(t, i);
                }
                H(r, n, i);
                return 'atom';
              }
            }
            function N(e, t) {
              if (e.match(/^(!?=|-)/)) {
                t.javaScriptLine = true;
                return 'punctuation';
              }
            }
            function $(e) {
              if (e.match(/^#([\w-]+)/)) {
                return i;
              }
            }
            function L(e) {
              if (e.match(/^\.([\w-]+)/)) {
                return a;
              }
            }
            function D(e, t) {
              if (e.peek() == '(') {
                e.next();
                t.isAttrs = true;
                t.attrsNest = [];
                t.inAttributeName = true;
                t.attrValue = '';
                t.attributeIsType = false;
                return 'punctuation';
              }
            }
            function P(t, r) {
              if (r.isAttrs) {
                if (o[t.peek()]) {
                  r.attrsNest.push(o[t.peek()]);
                }
                if (r.attrsNest[r.attrsNest.length - 1] === t.peek()) {
                  r.attrsNest.pop();
                } else if (t.eat(')')) {
                  r.isAttrs = false;
                  return 'punctuation';
                }
                if (r.inAttributeName && t.match(/^[^=,\)!]+/)) {
                  if (t.peek() === '=' || t.peek() === '!') {
                    r.inAttributeName = false;
                    r.jsState = e.startState(s);
                    if (
                      r.lastTag === 'script' &&
                      t.current().trim().toLowerCase() === 'type'
                    ) {
                      r.attributeIsType = true;
                    } else {
                      r.attributeIsType = false;
                    }
                  }
                  return 'attribute';
                }
                var n = s.token(t, r.jsState);
                if (r.attributeIsType && n === 'string') {
                  r.scriptType = t.current().toString();
                }
                if (
                  r.attrsNest.length === 0 &&
                  (n === 'string' || n === 'variable' || n === 'keyword')
                ) {
                  try {
                    Function(
                      '',
                      'var x ' + r.attrValue.replace(/,\s*$/, '').replace(/^!/, '')
                    );
                    r.inAttributeName = true;
                    r.attrValue = '';
                    t.backUp(t.current().length);
                    return P(t, r);
                  } catch (i) {}
                }
                r.attrValue += t.current();
                return n || true;
              }
            }
            function U(e, t) {
              if (e.match(/^&attributes\b/)) {
                t.javaScriptArguments = true;
                t.javaScriptArgumentsDepth = 0;
                return 'keyword';
              }
            }
            function F(e) {
              if (e.sol() && e.eatSpace()) {
                return 'indent';
              }
            }
            function q(e, t) {
              if (e.match(/^ *\/\/(-)?([^\n]*)/)) {
                t.indentOf = e.indentation();
                t.indentToken = 'comment';
                return 'comment';
              }
            }
            function W(e) {
              if (e.match(/^: */)) {
                return 'colon';
              }
            }
            function j(e, t) {
              if (e.match(/^(?:\| ?| )([^\n]+)/)) {
                return 'string';
              }
              if (e.match(/^(<[^\n]*)/, false)) {
                H(e, t, 'htmlmixed');
                t.innerModeForLine = true;
                return V(e, t, true);
              }
            }
            function B(e, t) {
              if (e.eat('.')) {
                var r = null;
                if (
                  t.lastTag === 'script' &&
                  t.scriptType.toLowerCase().indexOf('javascript') != -1
                ) {
                  r = t.scriptType.toLowerCase().replace(/"|'/g, '');
                } else if (t.lastTag === 'style') {
                  r = 'css';
                }
                H(e, t, r);
                return 'dot';
              }
            }
            function G(e) {
              e.next();
              return null;
            }
            function H(r, n, i) {
              i = e.mimeModes[i] || i;
              i = t.innerModes ? t.innerModes(i) || i : i;
              i = e.mimeModes[i] || i;
              i = e.getMode(t, i);
              n.indentOf = r.indentation();
              if (i && i.name !== 'null') {
                n.innerMode = i;
              } else {
                n.indentToken = 'string';
              }
            }
            function V(t, r, n) {
              if (
                t.indentation() > r.indentOf ||
                (r.innerModeForLine && !t.sol()) ||
                n
              ) {
                if (r.innerMode) {
                  if (!r.innerState) {
                    r.innerState = r.innerMode.startState
                      ? e.startState(r.innerMode, t.indentation())
                      : {};
                  }
                  return t.hideFirstChars(r.indentOf + 2, function () {
                    return r.innerMode.token(t, r.innerState) || true;
                  });
                } else {
                  t.skipToEnd();
                  return r.indentToken;
                }
              } else if (t.sol()) {
                r.indentOf = Infinity;
                r.indentToken = null;
                r.innerMode = null;
                r.innerState = null;
              }
            }
            function Z(e, t) {
              if (e.sol()) {
                t.restOfLine = '';
              }
              if (t.restOfLine) {
                e.skipToEnd();
                var r = t.restOfLine;
                t.restOfLine = '';
                return r;
              }
            }
            function K() {
              return new l();
            }
            function Y(e) {
              return e.copy();
            }
            function X(e, t) {
              var r =
                V(e, t) ||
                Z(e, t) ||
                p(e, t) ||
                E(e, t) ||
                z(e, t) ||
                P(e, t) ||
                u(e, t) ||
                c(e, t) ||
                I(e, t) ||
                f(e) ||
                d(e) ||
                m(e, t) ||
                h(e, t) ||
                g(e, t) ||
                b(e) ||
                v(e, t) ||
                k(e, t) ||
                _(e, t) ||
                x(e, t) ||
                y(e, t) ||
                w(e, t) ||
                S(e, t) ||
                T(e, t) ||
                A(e, t) ||
                C(e, t) ||
                R(e, t) ||
                M(e, t) ||
                O(e, t) ||
                N(e, t) ||
                $(e) ||
                L(e) ||
                D(e, t) ||
                U(e, t) ||
                F(e) ||
                j(e, t) ||
                q(e, t) ||
                W(e) ||
                B(e, t) ||
                G(e);
              return r === true ? null : r;
            }
            return { startState: K, copyState: Y, token: X };
          },
          'javascript',
          'css',
          'htmlmixed'
        );
        e.defineMIME('text/x-pug', 'pug');
        e.defineMIME('text/x-jade', 'pug');
      });
    },
    20673: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('puppet', function () {
          var e = {};
          var t = /({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;
          function r(t, r) {
            var n = r.split(' ');
            for (var i = 0; i < n.length; i++) {
              e[n[i]] = t;
            }
          }
          r('keyword', 'class define site node include import inherits');
          r('keyword', 'case if else in and elsif default or');
          r('atom', 'false true running present absent file directory undef');
          r(
            'builtin',
            'action augeas burst chain computer cron destination dport exec ' +
              'file filebucket group host icmp iniface interface jump k5login limit log_level ' +
              'log_prefix macauthorization mailalias maillist mcx mount nagios_command ' +
              'nagios_contact nagios_contactgroup nagios_host nagios_hostdependency ' +
              'nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service ' +
              'nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo ' +
              'nagios_servicegroup nagios_timeperiod name notify outiface package proto reject ' +
              'resources router schedule scheduled_task selboolean selmodule service source ' +
              'sport ssh_authorized_key sshkey stage state table tidy todest toports tosource ' +
              'user vlan yumrepo zfs zone zpool'
          );
          function n(e, t) {
            var r,
              n,
              i = false;
            while (!e.eol() && (r = e.next()) != t.pending) {
              if (r === '$' && n != '\\' && t.pending == '"') {
                i = true;
                break;
              }
              n = r;
            }
            if (i) {
              e.backUp(1);
            }
            if (r == t.pending) {
              t.continueString = false;
            } else {
              t.continueString = true;
            }
            return 'string';
          }
          function i(r, i) {
            var a = r.match(/[\w]+/, false);
            var o = r.match(/(\s+)?\w+\s+=>.*/, false);
            var s = r.match(/(\s+)?[\w:_]+(\s+)?{/, false);
            var l = r.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/, false);
            var u = r.next();
            if (u === '$') {
              if (r.match(t)) {
                return i.continueString ? 'variable-2' : 'variable';
              }
              return 'error';
            }
            if (i.continueString) {
              r.backUp(1);
              return n(r, i);
            }
            if (i.inDefinition) {
              if (r.match(/(\s+)?[\w:_]+(\s+)?/)) {
                return 'def';
              }
              r.match(/\s+{/);
              i.inDefinition = false;
            }
            if (i.inInclude) {
              r.match(/(\s+)?\S+(\s+)?/);
              i.inInclude = false;
              return 'def';
            }
            if (r.match(/(\s+)?\w+\(/)) {
              r.backUp(1);
              return 'def';
            }
            if (o) {
              r.match(/(\s+)?\w+/);
              return 'tag';
            }
            if (a && e.hasOwnProperty(a)) {
              r.backUp(1);
              r.match(/[\w]+/);
              if (r.match(/\s+\S+\s+{/, false)) {
                i.inDefinition = true;
              }
              if (a == 'include') {
                i.inInclude = true;
              }
              return e[a];
            }
            if (/(^|\s+)[A-Z][\w:_]+/.test(a)) {
              r.backUp(1);
              r.match(/(^|\s+)[A-Z][\w:_]+/);
              return 'def';
            }
            if (s) {
              r.match(/(\s+)?[\w:_]+/);
              return 'def';
            }
            if (l) {
              r.match(/(\s+)?[@]{1,2}/);
              return 'special';
            }
            if (u == '#') {
              r.skipToEnd();
              return 'comment';
            }
            if (u == "'" || u == '"') {
              i.pending = u;
              return n(r, i);
            }
            if (u == '{' || u == '}') {
              return 'bracket';
            }
            if (u == '/') {
              r.match(/^[^\/]*\//);
              return 'variable-3';
            }
            if (u.match(/[0-9]/)) {
              r.eatWhile(/[0-9]+/);
              return 'number';
            }
            if (u == '=') {
              if (r.peek() == '>') {
                r.next();
              }
              return 'operator';
            }
            r.eatWhile(/[\w-]/);
            return null;
          }
          return {
            startState: function () {
              var e = {};
              e.inDefinition = false;
              e.inInclude = false;
              e.continueString = false;
              e.pending = false;
              return e;
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return i(e, t);
            },
          };
        });
        e.defineMIME('text/x-puppet', 'puppet');
      });
    },
    97713: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('q', function (e) {
          var t = e.indentUnit,
            r,
            n = a([
              'abs',
              'acos',
              'aj',
              'aj0',
              'all',
              'and',
              'any',
              'asc',
              'asin',
              'asof',
              'atan',
              'attr',
              'avg',
              'avgs',
              'bin',
              'by',
              'ceiling',
              'cols',
              'cor',
              'cos',
              'count',
              'cov',
              'cross',
              'csv',
              'cut',
              'delete',
              'deltas',
              'desc',
              'dev',
              'differ',
              'distinct',
              'div',
              'do',
              'each',
              'ej',
              'enlist',
              'eval',
              'except',
              'exec',
              'exit',
              'exp',
              'fby',
              'fills',
              'first',
              'fkeys',
              'flip',
              'floor',
              'from',
              'get',
              'getenv',
              'group',
              'gtime',
              'hclose',
              'hcount',
              'hdel',
              'hopen',
              'hsym',
              'iasc',
              'idesc',
              'if',
              'ij',
              'in',
              'insert',
              'inter',
              'inv',
              'key',
              'keys',
              'last',
              'like',
              'list',
              'lj',
              'load',
              'log',
              'lower',
              'lsq',
              'ltime',
              'ltrim',
              'mavg',
              'max',
              'maxs',
              'mcount',
              'md5',
              'mdev',
              'med',
              'meta',
              'min',
              'mins',
              'mmax',
              'mmin',
              'mmu',
              'mod',
              'msum',
              'neg',
              'next',
              'not',
              'null',
              'or',
              'over',
              'parse',
              'peach',
              'pj',
              'plist',
              'prd',
              'prds',
              'prev',
              'prior',
              'rand',
              'rank',
              'ratios',
              'raze',
              'read0',
              'read1',
              'reciprocal',
              'reverse',
              'rload',
              'rotate',
              'rsave',
              'rtrim',
              'save',
              'scan',
              'select',
              'set',
              'setenv',
              'show',
              'signum',
              'sin',
              'sqrt',
              'ss',
              'ssr',
              'string',
              'sublist',
              'sum',
              'sums',
              'sv',
              'system',
              'tables',
              'tan',
              'til',
              'trim',
              'txf',
              'type',
              'uj',
              'ungroup',
              'union',
              'update',
              'upper',
              'upsert',
              'value',
              'var',
              'view',
              'views',
              'vs',
              'wavg',
              'where',
              'where',
              'while',
              'within',
              'wj',
              'wj1',
              'wsum',
              'xasc',
              'xbar',
              'xcol',
              'xcols',
              'xdesc',
              'xexp',
              'xgroup',
              'xkey',
              'xlog',
              'xprev',
              'xrank',
            ]),
            i = /[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;
          function a(e) {
            return new RegExp('^(' + e.join('|') + ')$');
          }
          function o(e, t) {
            var a = e.sol(),
              l = e.next();
            r = null;
            if (a)
              if (l == '/') return (t.tokenize = s)(e, t);
              else if (l == '\\') {
                if (e.eol() || /\s/.test(e.peek()))
                  return (
                    e.skipToEnd(),
                    /^\\\s*$/.test(e.current())
                      ? (t.tokenize = u)(e)
                      : (t.tokenize = o),
                    'comment'
                  );
                else return (t.tokenize = o), 'builtin';
              }
            if (/\s/.test(l))
              return e.peek() == '/' ? (e.skipToEnd(), 'comment') : 'whitespace';
            if (l == '"') return (t.tokenize = c)(e, t);
            if (l == '`') return e.eatWhile(/[A-Za-z\d_:\/.]/), 'symbol';
            if (('.' == l && /\d/.test(e.peek())) || /\d/.test(l)) {
              var f = null;
              e.backUp(1);
              if (
                e.match(
                  /^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/
                ) ||
                e.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/) ||
                e.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/) ||
                e.match(/^\d+[ptuv]{1}/)
              )
                f = 'temporal';
              else if (
                e.match(/^0[NwW]{1}/) ||
                e.match(/^0x[\da-fA-F]*/) ||
                e.match(/^[01]+[b]{1}/) ||
                e.match(/^\d+[chijn]{1}/) ||
                e.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/)
              )
                f = 'number';
              return f && (!(l = e.peek()) || i.test(l)) ? f : (e.next(), 'error');
            }
            if (/[A-Za-z]|\./.test(l))
              return (
                e.eatWhile(/[A-Za-z._\d]/), n.test(e.current()) ? 'keyword' : 'variable'
              );
            if (/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(l)) return null;
            if (/[{}\(\[\]\)]/.test(l)) return null;
            return 'error';
          }
          function s(e, t) {
            return (
              e.skipToEnd(),
              /\/\s*$/.test(e.current()) ? (t.tokenize = l)(e, t) : (t.tokenize = o),
              'comment'
            );
          }
          function l(e, t) {
            var r = e.sol() && e.peek() == '\\';
            e.skipToEnd();
            if (r && /^\\\s*$/.test(e.current())) t.tokenize = o;
            return 'comment';
          }
          function u(e) {
            return e.skipToEnd(), 'comment';
          }
          function c(e, t) {
            var r = false,
              n,
              i = false;
            while ((n = e.next())) {
              if (n == '"' && !r) {
                i = true;
                break;
              }
              r = !r && n == '\\';
            }
            if (i) t.tokenize = o;
            return 'string';
          }
          function f(e, t, r) {
            e.context = { prev: e.context, indent: e.indent, col: r, type: t };
          }
          function d(e) {
            e.indent = e.context.indent;
            e.context = e.context.prev;
          }
          return {
            startState: function () {
              return { tokenize: o, context: null, indent: 0, col: 0 };
            },
            token: function (e, t) {
              if (e.sol()) {
                if (t.context && t.context.align == null) t.context.align = false;
                t.indent = e.indentation();
              }
              var n = t.tokenize(e, t);
              if (
                n != 'comment' &&
                t.context &&
                t.context.align == null &&
                t.context.type != 'pattern'
              ) {
                t.context.align = true;
              }
              if (r == '(') f(t, ')', e.column());
              else if (r == '[') f(t, ']', e.column());
              else if (r == '{') f(t, '}', e.column());
              else if (/[\]\}\)]/.test(r)) {
                while (t.context && t.context.type == 'pattern') d(t);
                if (t.context && r == t.context.type) d(t);
              } else if (r == '.' && t.context && t.context.type == 'pattern') d(t);
              else if (/atom|string|variable/.test(n) && t.context) {
                if (/[\}\]]/.test(t.context.type)) f(t, 'pattern', e.column());
                else if (t.context.type == 'pattern' && !t.context.align) {
                  t.context.align = true;
                  t.context.col = e.column();
                }
              }
              return n;
            },
            indent: function (e, r) {
              var n = r && r.charAt(0);
              var i = e.context;
              if (/[\]\}]/.test(n)) while (i && i.type == 'pattern') i = i.prev;
              var a = i && n == i.type;
              if (!i) return 0;
              else if (i.type == 'pattern') return i.col;
              else if (i.align) return i.col + (a ? 0 : 1);
              else return i.indent + (a ? 0 : t);
            },
          };
        });
        e.defineMIME('text/x-q', 'q');
      });
    },
    4344: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('rpm-changes', function () {
          var e = /^-+$/;
          var t =
            /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /;
          var r = /^[\w+.-]+@[\w.-]+/;
          return {
            token: function (n) {
              if (n.sol()) {
                if (n.match(e)) {
                  return 'tag';
                }
                if (n.match(t)) {
                  return 'tag';
                }
              }
              if (n.match(r)) {
                return 'string';
              }
              n.next();
              return null;
            },
          };
        });
        e.defineMIME('text/x-rpm-changes', 'rpm-changes');
        e.defineMode('rpm-spec', function () {
          var e =
            /^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/;
          var t = /^[a-zA-Z0-9()]+:/;
          var r =
            /^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/;
          var n = /^%(ifnarch|ifarch|if)/;
          var i = /^%(else|endif)/;
          var a = /^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;
          return {
            startState: function () {
              return { controlFlow: false, macroParameters: false, section: false };
            },
            token: function (o, s) {
              var l = o.peek();
              if (l == '#') {
                o.skipToEnd();
                return 'comment';
              }
              if (o.sol()) {
                if (o.match(t)) {
                  return 'header';
                }
                if (o.match(r)) {
                  return 'atom';
                }
              }
              if (o.match(/^\$\w+/)) {
                return 'def';
              }
              if (o.match(/^\$\{\w+\}/)) {
                return 'def';
              }
              if (o.match(i)) {
                return 'keyword';
              }
              if (o.match(n)) {
                s.controlFlow = true;
                return 'keyword';
              }
              if (s.controlFlow) {
                if (o.match(a)) {
                  return 'operator';
                }
                if (o.match(/^(\d+)/)) {
                  return 'number';
                }
                if (o.eol()) {
                  s.controlFlow = false;
                }
              }
              if (o.match(e)) {
                if (o.eol()) {
                  s.controlFlow = false;
                }
                return 'number';
              }
              if (o.match(/^%[\w]+/)) {
                if (o.match('(')) {
                  s.macroParameters = true;
                }
                return 'keyword';
              }
              if (s.macroParameters) {
                if (o.match(/^\d+/)) {
                  return 'number';
                }
                if (o.match(')')) {
                  s.macroParameters = false;
                  return 'keyword';
                }
              }
              if (o.match(/^%\{\??[\w \-\:\!]+\}/)) {
                if (o.eol()) {
                  s.controlFlow = false;
                }
                return 'def';
              }
              o.next();
              return null;
            },
          };
        });
        e.defineMIME('text/x-rpm-spec', 'rpm-spec');
      });
    },
    22968: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(5321), r(80785), r(14146));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'rst',
          function (t, r) {
            var n = /^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/;
            var i = /^\*[^\*\s](?:[^\*]*[^\*\s])?\*/;
            var a = /^``[^`\s](?:[^`]*[^`\s])``/;
            var o = /^(?:[\d]+(?:[\.,]\d+)*)/;
            var s = /^(?:\s\+[\d]+(?:[\.,]\d+)*)/;
            var l = /^(?:\s\-[\d]+(?:[\.,]\d+)*)/;
            var u = '[Hh][Tt][Tt][Pp][Ss]?://';
            var c = '(?:[\\d\\w.-]+)\\.(?:\\w{2,6})';
            var f = '(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*';
            var d = new RegExp('^' + u + c + f);
            var m = {
              token: function (e) {
                if (e.match(n) && e.match(/\W+|$/, false)) return 'strong';
                if (e.match(i) && e.match(/\W+|$/, false)) return 'em';
                if (e.match(a) && e.match(/\W+|$/, false)) return 'string-2';
                if (e.match(o)) return 'number';
                if (e.match(s)) return 'positive';
                if (e.match(l)) return 'negative';
                if (e.match(d)) return 'link';
                while (e.next() != null) {
                  if (e.match(n, false)) break;
                  if (e.match(i, false)) break;
                  if (e.match(a, false)) break;
                  if (e.match(o, false)) break;
                  if (e.match(s, false)) break;
                  if (e.match(l, false)) break;
                  if (e.match(d, false)) break;
                }
                return null;
              },
            };
            var p = e.getMode(t, r.backdrop || 'rst-base');
            return e.overlayMode(p, m, true);
          },
          'python',
          'stex'
        );
        e.defineMode(
          'rst-base',
          function (t) {
            function r(e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return e.replace(/{(\d+)}/g, function (e, r) {
                return typeof t[r] != 'undefined' ? t[r] : e;
              });
            }
            var n = e.getMode(t, 'python');
            var i = e.getMode(t, 'stex');
            var a = '\\s+';
            var o = '(?:\\s*|\\W|$)',
              s = new RegExp(r('^{0}', o));
            var l = '(?:[^\\W\\d_](?:[\\w!"#$%&\'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)',
              u = new RegExp(r('^{0}', l));
            var c =
              '(?:[^\\W\\d_](?:[\\w\\s!"#$%&\'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)';
            var f = r('(?:{0}|`{1}`)', l, c);
            var d = '(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)';
            var m = '(?:[^\\`]+)',
              p = new RegExp(r('^{0}', m));
            var h = new RegExp(
              '^([!\'#$%&"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$'
            );
            var g = new RegExp(r('^\\.\\.{0}', a));
            var b = new RegExp(r('^_{0}:{1}|^__:{1}', f, o));
            var v = new RegExp(r('^{0}::{1}', f, o));
            var k = new RegExp(r('^\\|{0}\\|{1}{2}::{3}', d, a, f, o));
            var _ = new RegExp(r('^\\[(?:\\d+|#{0}?|\\*)]{1}', f, o));
            var x = new RegExp(r('^\\[{0}\\]{1}', f, o));
            var y = new RegExp(r('^\\|{0}\\|', d));
            var w = new RegExp(r('^\\[(?:\\d+|#{0}?|\\*)]_', f));
            var E = new RegExp(r('^\\[{0}\\]_', f));
            var S = new RegExp(r('^{0}__?', f));
            var T = new RegExp(r('^`{0}`_', m));
            var I = new RegExp(r('^:{0}:`{1}`{2}', l, m, o));
            var A = new RegExp(r('^`{1}`:{0}:{2}', l, m, o));
            var C = new RegExp(r('^:{0}:{1}', l, o));
            var z = new RegExp(r('^{0}', f));
            var R = new RegExp(r('^::{0}', o));
            var M = new RegExp(r('^\\|{0}\\|', d));
            var O = new RegExp(r('^{0}', a));
            var N = new RegExp(r('^{0}', f));
            var $ = new RegExp(r('^::{0}', o));
            var L = new RegExp('^_');
            var D = new RegExp(r('^{0}|_', f));
            var P = new RegExp(r('^:{0}', o));
            var U = new RegExp('^::\\s*$');
            var F = new RegExp('^\\s+(?:>>>|In \\[\\d+\\]:)\\s');
            function q(t, r) {
              var a = null;
              if (t.sol() && t.match(F, false)) {
                Z(r, H, { mode: n, local: e.startState(n) });
              } else if (t.sol() && t.match(g)) {
                Z(r, W);
                a = 'meta';
              } else if (t.sol() && t.match(h)) {
                Z(r, q);
                a = 'header';
              } else if (Y(r) == I || t.match(I, false)) {
                switch (K(r)) {
                  case 0:
                    Z(r, q, V(I, 1));
                    t.match(/^:/);
                    a = 'meta';
                    break;
                  case 1:
                    Z(r, q, V(I, 2));
                    t.match(u);
                    a = 'keyword';
                    if (t.current().match(/^(?:math|latex)/)) {
                      r.tmp_stex = true;
                    }
                    break;
                  case 2:
                    Z(r, q, V(I, 3));
                    t.match(/^:`/);
                    a = 'meta';
                    break;
                  case 3:
                    if (r.tmp_stex) {
                      r.tmp_stex = undefined;
                      r.tmp = { mode: i, local: e.startState(i) };
                    }
                    if (r.tmp) {
                      if (t.peek() == '`') {
                        Z(r, q, V(I, 4));
                        r.tmp = undefined;
                        break;
                      }
                      a = r.tmp.mode.token(t, r.tmp.local);
                      break;
                    }
                    Z(r, q, V(I, 4));
                    t.match(p);
                    a = 'string';
                    break;
                  case 4:
                    Z(r, q, V(I, 5));
                    t.match(/^`/);
                    a = 'meta';
                    break;
                  case 5:
                    Z(r, q, V(I, 6));
                    t.match(s);
                    break;
                  default:
                    Z(r, q);
                }
              } else if (Y(r) == A || t.match(A, false)) {
                switch (K(r)) {
                  case 0:
                    Z(r, q, V(A, 1));
                    t.match(/^`/);
                    a = 'meta';
                    break;
                  case 1:
                    Z(r, q, V(A, 2));
                    t.match(p);
                    a = 'string';
                    break;
                  case 2:
                    Z(r, q, V(A, 3));
                    t.match(/^`:/);
                    a = 'meta';
                    break;
                  case 3:
                    Z(r, q, V(A, 4));
                    t.match(u);
                    a = 'keyword';
                    break;
                  case 4:
                    Z(r, q, V(A, 5));
                    t.match(/^:/);
                    a = 'meta';
                    break;
                  case 5:
                    Z(r, q, V(A, 6));
                    t.match(s);
                    break;
                  default:
                    Z(r, q);
                }
              } else if (Y(r) == C || t.match(C, false)) {
                switch (K(r)) {
                  case 0:
                    Z(r, q, V(C, 1));
                    t.match(/^:/);
                    a = 'meta';
                    break;
                  case 1:
                    Z(r, q, V(C, 2));
                    t.match(u);
                    a = 'keyword';
                    break;
                  case 2:
                    Z(r, q, V(C, 3));
                    t.match(/^:/);
                    a = 'meta';
                    break;
                  case 3:
                    Z(r, q, V(C, 4));
                    t.match(s);
                    break;
                  default:
                    Z(r, q);
                }
              } else if (Y(r) == y || t.match(y, false)) {
                switch (K(r)) {
                  case 0:
                    Z(r, q, V(y, 1));
                    t.match(M);
                    a = 'variable-2';
                    break;
                  case 1:
                    Z(r, q, V(y, 2));
                    if (t.match(/^_?_?/)) a = 'link';
                    break;
                  default:
                    Z(r, q);
                }
              } else if (t.match(w)) {
                Z(r, q);
                a = 'quote';
              } else if (t.match(E)) {
                Z(r, q);
                a = 'quote';
              } else if (t.match(S)) {
                Z(r, q);
                if (!t.peek() || t.peek().match(/^\W$/)) {
                  a = 'link';
                }
              } else if (Y(r) == T || t.match(T, false)) {
                switch (K(r)) {
                  case 0:
                    if (!t.peek() || t.peek().match(/^\W$/)) {
                      Z(r, q, V(T, 1));
                    } else {
                      t.match(T);
                    }
                    break;
                  case 1:
                    Z(r, q, V(T, 2));
                    t.match(/^`/);
                    a = 'link';
                    break;
                  case 2:
                    Z(r, q, V(T, 3));
                    t.match(p);
                    break;
                  case 3:
                    Z(r, q, V(T, 4));
                    t.match(/^`_/);
                    a = 'link';
                    break;
                  default:
                    Z(r, q);
                }
              } else if (t.match(U)) {
                Z(r, B);
              } else {
                if (t.next()) Z(r, q);
              }
              return a;
            }
            function W(t, r) {
              var a = null;
              if (Y(r) == k || t.match(k, false)) {
                switch (K(r)) {
                  case 0:
                    Z(r, W, V(k, 1));
                    t.match(M);
                    a = 'variable-2';
                    break;
                  case 1:
                    Z(r, W, V(k, 2));
                    t.match(O);
                    break;
                  case 2:
                    Z(r, W, V(k, 3));
                    t.match(N);
                    a = 'keyword';
                    break;
                  case 3:
                    Z(r, W, V(k, 4));
                    t.match($);
                    a = 'meta';
                    break;
                  default:
                    Z(r, q);
                }
              } else if (Y(r) == v || t.match(v, false)) {
                switch (K(r)) {
                  case 0:
                    Z(r, W, V(v, 1));
                    t.match(z);
                    a = 'keyword';
                    if (t.current().match(/^(?:math|latex)/)) r.tmp_stex = true;
                    else if (t.current().match(/^python/)) r.tmp_py = true;
                    break;
                  case 1:
                    Z(r, W, V(v, 2));
                    t.match(R);
                    a = 'meta';
                    if (t.match(/^latex\s*$/) || r.tmp_stex) {
                      r.tmp_stex = undefined;
                      Z(r, H, { mode: i, local: e.startState(i) });
                    }
                    break;
                  case 2:
                    Z(r, W, V(v, 3));
                    if (t.match(/^python\s*$/) || r.tmp_py) {
                      r.tmp_py = undefined;
                      Z(r, H, { mode: n, local: e.startState(n) });
                    }
                    break;
                  default:
                    Z(r, q);
                }
              } else if (Y(r) == b || t.match(b, false)) {
                switch (K(r)) {
                  case 0:
                    Z(r, W, V(b, 1));
                    t.match(L);
                    t.match(D);
                    a = 'link';
                    break;
                  case 1:
                    Z(r, W, V(b, 2));
                    t.match(P);
                    a = 'meta';
                    break;
                  default:
                    Z(r, q);
                }
              } else if (t.match(_)) {
                Z(r, q);
                a = 'quote';
              } else if (t.match(x)) {
                Z(r, q);
                a = 'quote';
              } else {
                t.eatSpace();
                if (t.eol()) {
                  Z(r, q);
                } else {
                  t.skipToEnd();
                  Z(r, j);
                  a = 'comment';
                }
              }
              return a;
            }
            function j(e, t) {
              return G(e, t, 'comment');
            }
            function B(e, t) {
              return G(e, t, 'meta');
            }
            function G(e, t, r) {
              if (e.eol() || e.eatSpace()) {
                e.skipToEnd();
                return r;
              } else {
                Z(t, q);
                return null;
              }
            }
            function H(e, t) {
              if (t.ctx.mode && t.ctx.local) {
                if (e.sol()) {
                  if (!e.eatSpace()) Z(t, q);
                  return null;
                }
                return t.ctx.mode.token(e, t.ctx.local);
              }
              Z(t, q);
              return null;
            }
            function V(e, t, r, n) {
              return { phase: e, stage: t, mode: r, local: n };
            }
            function Z(e, t, r) {
              e.tok = t;
              e.ctx = r || {};
            }
            function K(e) {
              return e.ctx.stage || 0;
            }
            function Y(e) {
              return e.ctx.phase;
            }
            return {
              startState: function () {
                return { tok: q, ctx: V(undefined, 0) };
              },
              copyState: function (t) {
                var r = t.ctx,
                  n = t.tmp;
                if (r.local) r = { mode: r.mode, local: e.copyState(r.mode, r.local) };
                if (n) n = { mode: n.mode, local: e.copyState(n.mode, n.local) };
                return { tok: t.tok, ctx: r, tmp: n };
              },
              innerMode: function (e) {
                return e.tmp
                  ? { state: e.tmp.local, mode: e.tmp.mode }
                  : e.ctx.mode
                  ? { state: e.ctx.local, mode: e.ctx.mode }
                  : null;
              },
              token: function (e, t) {
                return t.tok(e, t);
              },
            };
          },
          'python',
          'stex'
        );
        e.defineMIME('text/x-rst', 'rst');
      });
    },
    80853: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          var t = {};
          for (var r = 0, n = e.length; r < n; ++r) t[e[r]] = true;
          return t;
        }
        var r = [
            'alias',
            'and',
            'BEGIN',
            'begin',
            'break',
            'case',
            'class',
            'def',
            'defined?',
            'do',
            'else',
            'elsif',
            'END',
            'end',
            'ensure',
            'false',
            'for',
            'if',
            'in',
            'module',
            'next',
            'not',
            'or',
            'redo',
            'rescue',
            'retry',
            'return',
            'self',
            'super',
            'then',
            'true',
            'undef',
            'unless',
            'until',
            'when',
            'while',
            'yield',
            'nil',
            'raise',
            'throw',
            'catch',
            'fail',
            'loop',
            'callcc',
            'caller',
            'lambda',
            'proc',
            'public',
            'protected',
            'private',
            'require',
            'load',
            'require_relative',
            'extend',
            'autoload',
            '__END__',
            '__FILE__',
            '__LINE__',
            '__dir__',
          ],
          n = t(r);
        var i = t([
          'def',
          'class',
          'case',
          'for',
          'while',
          'until',
          'module',
          'then',
          'catch',
          'loop',
          'proc',
          'begin',
        ]);
        var a = t(['end', 'until']);
        var o = { '[': ']', '{': '}', '(': ')' };
        var s = { ']': '[', '}': '{', ')': '(' };
        e.defineMode('ruby', function (t) {
          var r;
          function l(e, t, r) {
            r.tokenize.push(e);
            return e(t, r);
          }
          function u(e, t) {
            if (e.sol() && e.match('=begin') && e.eol()) {
              t.tokenize.push(h);
              return 'comment';
            }
            if (e.eatSpace()) return null;
            var n = e.next(),
              i;
            if (n == '`' || n == "'" || n == '"') {
              return l(m(n, 'string', n == '"' || n == '`'), e, t);
            } else if (n == '/') {
              if (c(e)) return l(m(n, 'string-2', true), e, t);
              else return 'operator';
            } else if (n == '%') {
              var a = 'string',
                s = true;
              if (e.eat('s')) a = 'atom';
              else if (e.eat(/[WQ]/)) a = 'string';
              else if (e.eat(/[r]/)) a = 'string-2';
              else if (e.eat(/[wxq]/)) {
                a = 'string';
                s = false;
              }
              var u = e.eat(/[^\w\s=]/);
              if (!u) return 'operator';
              if (o.propertyIsEnumerable(u)) u = o[u];
              return l(m(u, a, s, true), e, t);
            } else if (n == '#') {
              e.skipToEnd();
              return 'comment';
            } else if (
              n == '<' &&
              (i = e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))
            ) {
              return l(p(i[2], i[1]), e, t);
            } else if (n == '0') {
              if (e.eat('x')) e.eatWhile(/[\da-fA-F]/);
              else if (e.eat('b')) e.eatWhile(/[01]/);
              else e.eatWhile(/[0-7]/);
              return 'number';
            } else if (/\d/.test(n)) {
              e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/);
              return 'number';
            } else if (n == '?') {
              while (e.match(/^\\[CM]-/)) {}
              if (e.eat('\\')) e.eatWhile(/\w/);
              else e.next();
              return 'string';
            } else if (n == ':') {
              if (e.eat("'")) return l(m("'", 'atom', false), e, t);
              if (e.eat('"')) return l(m('"', 'atom', true), e, t);
              if (e.eat(/[\<\>]/)) {
                e.eat(/[\<\>]/);
                return 'atom';
              }
              if (e.eat(/[\+\-\*\/\&\|\:\!]/)) {
                return 'atom';
              }
              if (e.eat(/[a-zA-Z$@_\xa1-\uffff]/)) {
                e.eatWhile(/[\w$\xa1-\uffff]/);
                e.eat(/[\?\!\=]/);
                return 'atom';
              }
              return 'operator';
            } else if (n == '@' && e.match(/^@?[a-zA-Z_\xa1-\uffff]/)) {
              e.eat('@');
              e.eatWhile(/[\w\xa1-\uffff]/);
              return 'variable-2';
            } else if (n == '$') {
              if (e.eat(/[a-zA-Z_]/)) {
                e.eatWhile(/[\w]/);
              } else if (e.eat(/\d/)) {
                e.eat(/\d/);
              } else {
                e.next();
              }
              return 'variable-3';
            } else if (/[a-zA-Z_\xa1-\uffff]/.test(n)) {
              e.eatWhile(/[\w\xa1-\uffff]/);
              e.eat(/[\?\!]/);
              if (e.eat(':')) return 'atom';
              return 'ident';
            } else if (
              n == '|' &&
              (t.varList || t.lastTok == '{' || t.lastTok == 'do')
            ) {
              r = '|';
              return null;
            } else if (/[\(\)\[\]{}\\;]/.test(n)) {
              r = n;
              return null;
            } else if (n == '-' && e.eat('>')) {
              return 'arrow';
            } else if (/[=+\-\/*:\.^%<>~|]/.test(n)) {
              var f = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
              if (n == '.' && !f) r = '.';
              return 'operator';
            } else {
              return null;
            }
          }
          function c(e) {
            var t = e.pos,
              r = 0,
              n,
              i = false,
              a = false;
            while ((n = e.next()) != null) {
              if (!a) {
                if ('[{('.indexOf(n) > -1) {
                  r++;
                } else if (']})'.indexOf(n) > -1) {
                  r--;
                  if (r < 0) break;
                } else if (n == '/' && r == 0) {
                  i = true;
                  break;
                }
                a = n == '\\';
              } else {
                a = false;
              }
            }
            e.backUp(e.pos - t);
            return i;
          }
          function f(e) {
            if (!e) e = 1;
            return function (t, r) {
              if (t.peek() == '}') {
                if (e == 1) {
                  r.tokenize.pop();
                  return r.tokenize[r.tokenize.length - 1](t, r);
                } else {
                  r.tokenize[r.tokenize.length - 1] = f(e - 1);
                }
              } else if (t.peek() == '{') {
                r.tokenize[r.tokenize.length - 1] = f(e + 1);
              }
              return u(t, r);
            };
          }
          function d() {
            var e = false;
            return function (t, r) {
              if (e) {
                r.tokenize.pop();
                return r.tokenize[r.tokenize.length - 1](t, r);
              }
              e = true;
              return u(t, r);
            };
          }
          function m(e, t, r, n) {
            return function (i, a) {
              var o = false,
                s;
              if (a.context.type === 'read-quoted-paused') {
                a.context = a.context.prev;
                i.eat('}');
              }
              while ((s = i.next()) != null) {
                if (s == e && (n || !o)) {
                  a.tokenize.pop();
                  break;
                }
                if (r && s == '#' && !o) {
                  if (i.eat('{')) {
                    if (e == '}') {
                      a.context = { prev: a.context, type: 'read-quoted-paused' };
                    }
                    a.tokenize.push(f());
                    break;
                  } else if (/[@\$]/.test(i.peek())) {
                    a.tokenize.push(d());
                    break;
                  }
                }
                o = !o && s == '\\';
              }
              return t;
            };
          }
          function p(e, t) {
            return function (r, n) {
              if (t) r.eatSpace();
              if (r.match(e)) n.tokenize.pop();
              else r.skipToEnd();
              return 'string';
            };
          }
          function h(e, t) {
            if (e.sol() && e.match('=end') && e.eol()) t.tokenize.pop();
            e.skipToEnd();
            return 'comment';
          }
          return {
            startState: function () {
              return {
                tokenize: [u],
                indented: 0,
                context: { type: 'top', indented: -t.indentUnit },
                continuedLine: false,
                lastTok: null,
                varList: false,
              };
            },
            token: function (e, t) {
              r = null;
              if (e.sol()) t.indented = e.indentation();
              var o = t.tokenize[t.tokenize.length - 1](e, t),
                s;
              var l = r;
              if (o == 'ident') {
                var u = e.current();
                o =
                  t.lastTok == '.'
                    ? 'property'
                    : n.propertyIsEnumerable(e.current())
                    ? 'keyword'
                    : /^[A-Z]/.test(u)
                    ? 'tag'
                    : t.lastTok == 'def' || t.lastTok == 'class' || t.varList
                    ? 'def'
                    : 'variable';
                if (o == 'keyword') {
                  l = u;
                  if (i.propertyIsEnumerable(u)) s = 'indent';
                  else if (a.propertyIsEnumerable(u)) s = 'dedent';
                  else if (
                    (u == 'if' || u == 'unless') &&
                    e.column() == e.indentation()
                  )
                    s = 'indent';
                  else if (u == 'do' && t.context.indented < t.indented) s = 'indent';
                }
              }
              if (r || (o && o != 'comment')) t.lastTok = l;
              if (r == '|') t.varList = !t.varList;
              if (s == 'indent' || /[\(\[\{]/.test(r))
                t.context = { prev: t.context, type: r || o, indented: t.indented };
              else if ((s == 'dedent' || /[\)\]\}]/.test(r)) && t.context.prev)
                t.context = t.context.prev;
              if (e.eol()) t.continuedLine = r == '\\' || o == 'operator';
              return o;
            },
            indent: function (r, n) {
              if (r.tokenize[r.tokenize.length - 1] != u) return e.Pass;
              var i = n && n.charAt(0);
              var a = r.context;
              var o =
                a.type == s[i] ||
                (a.type == 'keyword' &&
                  /^(?:end|until|else|elsif|when|rescue)\b/.test(n));
              return (
                a.indented +
                (o ? 0 : t.indentUnit) +
                (r.continuedLine ? t.indentUnit : 0)
              );
            },
            electricInput: /^\s*(?:end|rescue|elsif|else|\})$/,
            lineComment: '#',
            fold: 'indent',
          };
        });
        e.defineMIME('text/x-ruby', 'ruby');
        e.registerHelper('hintWords', 'ruby', r);
      });
    },
    90911: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(40790));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineSimpleMode('rust', {
          start: [
            { regex: /b?"/, token: 'string', next: 'string' },
            { regex: /b?r"/, token: 'string', next: 'string_raw' },
            { regex: /b?r#+"/, token: 'string', next: 'string_raw_hash' },
            {
              regex: /'(?:[^'\\]|\\(?:[nrt0'"]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\}))'/,
              token: 'string-2',
            },
            { regex: /b'(?:[^']|\\(?:['\\nrt0]|x[\da-fA-F]{2}))'/, token: 'string-2' },
            {
              regex:
                /(?:(?:[0-9][0-9_]*)(?:(?:[Ee][+-]?[0-9_]+)|\.[0-9_]+(?:[Ee][+-]?[0-9_]+)?)(?:f32|f64)?)|(?:0(?:b[01_]+|(?:o[0-7_]+)|(?:x[0-9a-fA-F_]+))|(?:[0-9][0-9_]*))(?:u8|u16|u32|u64|i8|i16|i32|i64|isize|usize)?/,
              token: 'number',
            },
            {
              regex:
                /(let(?:\s+mut)?|fn|enum|mod|struct|type|union)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,
              token: ['keyword', null, 'def'],
            },
            {
              regex:
                /(?:abstract|alignof|as|async|await|box|break|continue|const|crate|do|dyn|else|enum|extern|fn|for|final|if|impl|in|loop|macro|match|mod|move|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
              token: 'keyword',
            },
            {
              regex:
                /\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|f16|f32|f64|i8|i16|i32|i64|str|Option)\b/,
              token: 'atom',
            },
            { regex: /\b(?:true|false|Some|None|Ok|Err)\b/, token: 'builtin' },
            {
              regex: /\b(fn)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,
              token: ['keyword', null, 'def'],
            },
            { regex: /#!?\[.*\]/, token: 'meta' },
            { regex: /\/\/.*/, token: 'comment' },
            { regex: /\/\*/, token: 'comment', next: 'comment' },
            { regex: /[-+\/*=<>!]+/, token: 'operator' },
            { regex: /[a-zA-Z_]\w*!/, token: 'variable-3' },
            { regex: /[a-zA-Z_]\w*/, token: 'variable' },
            { regex: /[\{\[\(]/, indent: true },
            { regex: /[\}\]\)]/, dedent: true },
          ],
          string: [
            { regex: /"/, token: 'string', next: 'start' },
            { regex: /(?:[^\\"]|\\(?:.|$))*/, token: 'string' },
          ],
          string_raw: [
            { regex: /"/, token: 'string', next: 'start' },
            { regex: /[^"]*/, token: 'string' },
          ],
          string_raw_hash: [
            { regex: /"#+/, token: 'string', next: 'start' },
            { regex: /(?:[^"]|"(?!#))*/, token: 'string' },
          ],
          comment: [
            { regex: /.*?\*\//, token: 'comment', next: 'start' },
            { regex: /.*/, token: 'comment' },
          ],
          meta: {
            dontIndentStates: ['comment'],
            electricInput: /^\s*\}$/,
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
            fold: 'brace',
          },
        });
        e.defineMIME('text/x-rustsrc', 'rust');
        e.defineMIME('text/rust', 'rust');
      });
    },
    16229: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('sas', function () {
          var e = {};
          var t = {
            eq: 'operator',
            lt: 'operator',
            le: 'operator',
            gt: 'operator',
            ge: 'operator',
            in: 'operator',
            ne: 'operator',
            or: 'operator',
          };
          var r = /(<=|>=|!=|<>)/;
          var n = /[=\(:\),{}.*<>+\-\/^\[\]]/;
          function i(t, r, n) {
            if (n) {
              var i = r.split(' ');
              for (var a = 0; a < i.length; a++) {
                e[i[a]] = { style: t, state: n };
              }
            }
          }
          i('def', 'stack pgm view source debug nesting nolist', ['inDataStep']);
          i('def', 'if while until for do do; end end; then else cancel', [
            'inDataStep',
          ]);
          i('def', 'label format _n_ _error_', ['inDataStep']);
          i(
            'def',
            'ALTER BUFNO BUFSIZE CNTLLEV COMPRESS DLDMGACTION ENCRYPT ENCRYPTKEY EXTENDOBSCOUNTER GENMAX GENNUM INDEX LABEL OBSBUF OUTREP PW PWREQ READ REPEMPTY REPLACE REUSE ROLE SORTEDBY SPILL TOBSNO TYPE WRITE FILECLOSE FIRSTOBS IN OBS POINTOBS WHERE WHEREUP IDXNAME IDXWHERE DROP KEEP RENAME',
            ['inDataStep']
          );
          i(
            'def',
            'filevar finfo finv fipname fipnamel fipstate first firstobs floor',
            ['inDataStep']
          );
          i(
            'def',
            'varfmt varinfmt varlabel varlen varname varnum varray varrayx vartype verify vformat vformatd vformatdx vformatn vformatnx vformatw vformatwx vformatx vinarray vinarrayx vinformat vinformatd vinformatdx vinformatn vinformatnx vinformatw vinformatwx vinformatx vlabel vlabelx vlength vlengthx vname vnamex vnferr vtype vtypex weekday',
            ['inDataStep']
          );
          i('def', 'zipfips zipname zipnamel zipstate', ['inDataStep']);
          i('def', 'put putc putn', ['inDataStep']);
          i('builtin', 'data run', ['inDataStep']);
          i('def', 'data', ['inProc']);
          i('def', '%if %end %end; %else %else; %do %do; %then', ['inMacro']);
          i('builtin', 'proc run; quit; libname filename %macro %mend option options', [
            'ALL',
          ]);
          i('def', 'footnote title libname ods', ['ALL']);
          i('def', '%let %put %global %sysfunc %eval ', ['ALL']);
          i(
            'variable',
            '&sysbuffr &syscc &syscharwidth &syscmd &sysdate &sysdate9 &sysday &sysdevic &sysdmg &sysdsn &sysencoding &sysenv &syserr &syserrortext &sysfilrc &syshostname &sysindex &sysinfo &sysjobid &syslast &syslckrc &syslibrc &syslogapplname &sysmacroname &sysmenv &sysmsg &sysncpu &sysodspath &sysparm &syspbuff &sysprocessid &sysprocessname &sysprocname &sysrc &sysscp &sysscpl &sysscpl &syssite &sysstartid &sysstartname &systcpiphostname &systime &sysuserid &sysver &sysvlong &sysvlong4 &syswarningtext',
            ['ALL']
          );
          i('def', 'source2 nosource2 page pageno pagesize', ['ALL']);
          i(
            'def',
            '_all_ _character_ _cmd_ _freq_ _i_ _infile_ _last_ _msg_ _null_ _numeric_ _temporary_ _type_ abort abs addr adjrsq airy alpha alter altlog altprint and arcos array arsin as atan attrc attrib attrn authserver autoexec awscontrol awsdef awsmenu awsmenumerge awstitle backward band base betainv between blocksize blshift bnot bor brshift bufno bufsize bxor by byerr byline byte calculated call cards cards4 catcache cbufno cdf ceil center cexist change chisq cinv class cleanup close cnonct cntllev coalesce codegen col collate collin column comamid comaux1 comaux2 comdef compbl compound compress config continue convert cos cosh cpuid create cross crosstab css curobs cv daccdb daccdbsl daccsl daccsyd dacctab dairy datalines datalines4 datejul datepart datetime day dbcslang dbcstype dclose ddfm ddm delete delimiter depdb depdbsl depsl depsyd deptab dequote descending descript design= device dflang dhms dif digamma dim dinfo display distinct dkricond dkrocond dlm dnum do dopen doptname doptnum dread drop dropnote dsname dsnferr echo else emaildlg emailid emailpw emailserver emailsys encrypt end endsas engine eof eov erf erfc error errorcheck errors exist exp fappend fclose fcol fdelete feedback fetch fetchobs fexist fget file fileclose fileexist filefmt filename fileref  fmterr fmtsearch fnonct fnote font fontalias  fopen foptname foptnum force formatted formchar formdelim formdlim forward fpoint fpos fput fread frewind frlen from fsep fuzz fwrite gaminv gamma getoption getvarc getvarn go goto group gwindow hbar hbound helpenv helploc hms honorappearance hosthelp hostprint hour hpct html hvar ibessel ibr id if index indexc indexw initcmd initstmt inner input inputc inputn inr insert int intck intnx into intrr invaliddata irr is jbessel join juldate keep kentb kurtosis label lag last lbound leave left length levels lgamma lib  library libref line linesize link list log log10 log2 logpdf logpmf logsdf lostcard lowcase lrecl ls macro macrogen maps mautosource max maxdec maxr mdy mean measures median memtype merge merror min minute missing missover mlogic mod mode model modify month mopen mort mprint mrecall msglevel msymtabmax mvarsize myy n nest netpv new news nmiss no nobatch nobs nocaps nocardimage nocenter nocharcode nocmdmac nocol nocum nodate nodbcs nodetails nodmr nodms nodmsbatch nodup nodupkey noduplicates noechoauto noequals noerrorabend noexitwindows nofullstimer noicon noimplmac noint nolist noloadlist nomiss nomlogic nomprint nomrecall nomsgcase nomstored nomultenvappl nonotes nonumber noobs noovp nopad nopercent noprint noprintinit normal norow norsasuser nosetinit  nosplash nosymbolgen note notes notitle notitles notsorted noverbose noxsync noxwait npv null number numkeys nummousekeys nway obs  on open     order ordinal otherwise out outer outp= output over ovp p(1 5 10 25 50 75 90 95 99) pad pad2  paired parm parmcards path pathdll pathname pdf peek peekc pfkey pmf point poisson poke position printer probbeta probbnml probchi probf probgam probhypr probit probnegb probnorm probsig probt procleave prt ps  pw pwreq qtr quote r ranbin rancau random ranexp rangam range ranks rannor ranpoi rantbl rantri ranuni rcorr read recfm register regr remote remove rename repeat repeated replace resolve retain return reuse reverse rewind right round rsquare rtf rtrace rtraceloc s s2 samploc sasautos sascontrol sasfrscr sasmsg sasmstore sasscript sasuser saving scan sdf second select selection separated seq serror set setcomm setot sign simple sin sinh siteinfo skewness skip sle sls sortedby sortpgm sortseq sortsize soundex  spedis splashlocation split spool sqrt start std stderr stdin stfips stimer stname stnamel stop stopover sub subgroup subpopn substr sum sumwgt symbol symbolgen symget symput sysget sysin sysleave sysmsg sysparm sysprint sysprintfont sysprod sysrc system t table tables tan tanh tapeclose tbufsize terminal test then timepart tinv  tnonct to today tol tooldef totper transformout translate trantab tranwrd trigamma trim trimn trunc truncover type unformatted uniform union until upcase update user usericon uss validate value var  weight when where while wincharset window work workinit workterm write wsum xsync xwait yearcutoff yes yyq  min max',
            ['inDataStep', 'inProc']
          );
          i('operator', 'and not ', ['inDataStep', 'inProc']);
          function a(i, a) {
            var o = i.next();
            if (o === '/' && i.eat('*')) {
              a.continueComment = true;
              return 'comment';
            } else if (a.continueComment === true) {
              if (o === '*' && i.peek() === '/') {
                i.next();
                a.continueComment = false;
              } else if (i.skipTo('*')) {
                i.skipTo('*');
                i.next();
                if (i.eat('/')) a.continueComment = false;
              } else {
                i.skipToEnd();
              }
              return 'comment';
            }
            if (o == '*' && i.column() == i.indentation()) {
              i.skipToEnd();
              return 'comment';
            }
            var s = o + i.peek();
            if ((o === '"' || o === "'") && !a.continueString) {
              a.continueString = o;
              return 'string';
            } else if (a.continueString) {
              if (a.continueString == o) {
                a.continueString = null;
              } else if (i.skipTo(a.continueString)) {
                i.next();
                a.continueString = null;
              } else {
                i.skipToEnd();
              }
              return 'string';
            } else if (a.continueString !== null && i.eol()) {
              i.skipTo(a.continueString) || i.skipToEnd();
              return 'string';
            } else if (/[\d\.]/.test(o)) {
              if (o === '.') i.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
              else if (o === '0') i.match(/^[xX][0-9a-fA-F]+/) || i.match(/^0[0-7]+/);
              else i.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
              return 'number';
            } else if (r.test(o + i.peek())) {
              i.next();
              return 'operator';
            } else if (t.hasOwnProperty(s)) {
              i.next();
              if (i.peek() === ' ') return t[s.toLowerCase()];
            } else if (n.test(o)) {
              return 'operator';
            }
            var l;
            if (i.match(/[%&;\w]+/, false) != null) {
              l = o + i.match(/[%&;\w]+/, true);
              if (/&/.test(l)) return 'variable';
            } else {
              l = o;
            }
            if (a.nextword) {
              i.match(/[\w]+/);
              if (i.peek() === '.') i.skipTo(' ');
              a.nextword = false;
              return 'variable-2';
            }
            l = l.toLowerCase();
            if (a.inDataStep) {
              if (l === 'run;' || i.match(/run\s;/)) {
                a.inDataStep = false;
                return 'builtin';
              }
              if (l && i.next() === '.') {
                if (/\w/.test(i.peek())) return 'variable-2';
                else return 'variable';
              }
              if (
                l &&
                e.hasOwnProperty(l) &&
                (e[l].state.indexOf('inDataStep') !== -1 ||
                  e[l].state.indexOf('ALL') !== -1)
              ) {
                if (i.start < i.pos) i.backUp(i.pos - i.start);
                for (var u = 0; u < l.length; ++u) i.next();
                return e[l].style;
              }
            }
            if (a.inProc) {
              if (l === 'run;' || l === 'quit;') {
                a.inProc = false;
                return 'builtin';
              }
              if (
                l &&
                e.hasOwnProperty(l) &&
                (e[l].state.indexOf('inProc') !== -1 ||
                  e[l].state.indexOf('ALL') !== -1)
              ) {
                i.match(/[\w]+/);
                return e[l].style;
              }
            }
            if (a.inMacro) {
              if (l === '%mend') {
                if (i.peek() === ';') i.next();
                a.inMacro = false;
                return 'builtin';
              }
              if (
                l &&
                e.hasOwnProperty(l) &&
                (e[l].state.indexOf('inMacro') !== -1 ||
                  e[l].state.indexOf('ALL') !== -1)
              ) {
                i.match(/[\w]+/);
                return e[l].style;
              }
              return 'atom';
            }
            if (l && e.hasOwnProperty(l)) {
              i.backUp(1);
              i.match(/[\w]+/);
              if (l === 'data' && /=/.test(i.peek()) === false) {
                a.inDataStep = true;
                a.nextword = true;
                return 'builtin';
              }
              if (l === 'proc') {
                a.inProc = true;
                a.nextword = true;
                return 'builtin';
              }
              if (l === '%macro') {
                a.inMacro = true;
                a.nextword = true;
                return 'builtin';
              }
              if (/title[1-9]/.test(l)) return 'def';
              if (l === 'footnote') {
                i.eat(/[1-9]/);
                return 'def';
              }
              if (a.inDataStep === true && e[l].state.indexOf('inDataStep') !== -1)
                return e[l].style;
              if (a.inProc === true && e[l].state.indexOf('inProc') !== -1)
                return e[l].style;
              if (a.inMacro === true && e[l].state.indexOf('inMacro') !== -1)
                return e[l].style;
              if (e[l].state.indexOf('ALL') !== -1) return e[l].style;
              return null;
            }
            return null;
          }
          return {
            startState: function () {
              return {
                inDataStep: false,
                inProc: false,
                inMacro: false,
                nextword: false,
                continueString: null,
                continueComment: false,
              };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return a(e, t);
            },
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
          };
        });
        e.defineMIME('text/x-sas', 'sas');
      });
    },
    81201: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(36629));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'sass',
          function (t) {
            var r = e.mimeModes['text/css'];
            var n = r.propertyKeywords || {},
              i = r.colorKeywords || {},
              a = r.valueKeywords || {},
              o = r.fontProperties || {};
            function s(e) {
              return new RegExp('^' + e.join('|'));
            }
            var l = ['true', 'false', 'null', 'auto'];
            var u = new RegExp('^' + l.join('|'));
            var c = [
              '\\(',
              '\\)',
              '=',
              '>',
              '<',
              '==',
              '>=',
              '<=',
              '\\+',
              '-',
              '\\!=',
              '/',
              '\\*',
              '%',
              'and',
              'or',
              'not',
              ';',
              '\\{',
              '\\}',
              ':',
            ];
            var f = s(c);
            var d = /^::?[a-zA-Z_][\w\-]*/;
            var m;
            function p(e) {
              return !e.peek() || e.match(/\s+$/, false);
            }
            function h(e, t) {
              var r = e.peek();
              if (r === ')') {
                e.next();
                t.tokenizer = x;
                return 'operator';
              } else if (r === '(') {
                e.next();
                e.eatSpace();
                return 'operator';
              } else if (r === "'" || r === '"') {
                t.tokenizer = b(e.next());
                return 'string';
              } else {
                t.tokenizer = b(')', false);
                return 'string';
              }
            }
            function g(e, t) {
              return function (r, n) {
                if (r.sol() && r.indentation() <= e) {
                  n.tokenizer = x;
                  return x(r, n);
                }
                if (t && r.skipTo('*/')) {
                  r.next();
                  r.next();
                  n.tokenizer = x;
                } else {
                  r.skipToEnd();
                }
                return 'comment';
              };
            }
            function b(e, t) {
              if (t == null) {
                t = true;
              }
              function r(n, i) {
                var a = n.next();
                var o = n.peek();
                var s = n.string.charAt(n.pos - 2);
                var l = (a !== '\\' && o === e) || (a === e && s !== '\\');
                if (l) {
                  if (a !== e && t) {
                    n.next();
                  }
                  if (p(n)) {
                    i.cursorHalf = 0;
                  }
                  i.tokenizer = x;
                  return 'string';
                } else if (a === '#' && o === '{') {
                  i.tokenizer = v(r);
                  n.next();
                  return 'operator';
                } else {
                  return 'string';
                }
              }
              return r;
            }
            function v(e) {
              return function (t, r) {
                if (t.peek() === '}') {
                  t.next();
                  r.tokenizer = e;
                  return 'operator';
                } else {
                  return x(t, r);
                }
              };
            }
            function k(e) {
              if (e.indentCount == 0) {
                e.indentCount++;
                var r = e.scopes[0].offset;
                var n = r + t.indentUnit;
                e.scopes.unshift({ offset: n });
              }
            }
            function _(e) {
              if (e.scopes.length == 1) return;
              e.scopes.shift();
            }
            function x(e, t) {
              var r = e.peek();
              if (e.match('/*')) {
                t.tokenizer = g(e.indentation(), true);
                return t.tokenizer(e, t);
              }
              if (e.match('//')) {
                t.tokenizer = g(e.indentation(), false);
                return t.tokenizer(e, t);
              }
              if (e.match('#{')) {
                t.tokenizer = v(x);
                return 'operator';
              }
              if (r === '"' || r === "'") {
                e.next();
                t.tokenizer = b(r);
                return 'string';
              }
              if (!t.cursorHalf) {
                if (r === '-') {
                  if (e.match(/^-\w+-/)) {
                    return 'meta';
                  }
                }
                if (r === '.') {
                  e.next();
                  if (e.match(/^[\w-]+/)) {
                    k(t);
                    return 'qualifier';
                  } else if (e.peek() === '#') {
                    k(t);
                    return 'tag';
                  }
                }
                if (r === '#') {
                  e.next();
                  if (e.match(/^[\w-]+/)) {
                    k(t);
                    return 'builtin';
                  }
                  if (e.peek() === '#') {
                    k(t);
                    return 'tag';
                  }
                }
                if (r === '$') {
                  e.next();
                  e.eatWhile(/[\w-]/);
                  return 'variable-2';
                }
                if (e.match(/^-?[0-9\.]+/)) return 'number';
                if (e.match(/^(px|em|in)\b/)) return 'unit';
                if (e.match(u)) return 'keyword';
                if (e.match(/^url/) && e.peek() === '(') {
                  t.tokenizer = h;
                  return 'atom';
                }
                if (r === '=') {
                  if (e.match(/^=[\w-]+/)) {
                    k(t);
                    return 'meta';
                  }
                }
                if (r === '+') {
                  if (e.match(/^\+[\w-]+/)) {
                    return 'variable-3';
                  }
                }
                if (r === '@') {
                  if (e.match('@extend')) {
                    if (!e.match(/\s*[\w]/)) _(t);
                  }
                }
                if (
                  e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)
                ) {
                  k(t);
                  return 'def';
                }
                if (r === '@') {
                  e.next();
                  e.eatWhile(/[\w-]/);
                  return 'def';
                }
                if (e.eatWhile(/[\w-]/)) {
                  if (e.match(/ *: *[\w-\+\$#!\("']/, false)) {
                    m = e.current().toLowerCase();
                    var s = t.prevProp + '-' + m;
                    if (n.hasOwnProperty(s)) {
                      return 'property';
                    } else if (n.hasOwnProperty(m)) {
                      t.prevProp = m;
                      return 'property';
                    } else if (o.hasOwnProperty(m)) {
                      return 'property';
                    }
                    return 'tag';
                  } else if (e.match(/ *:/, false)) {
                    k(t);
                    t.cursorHalf = 1;
                    t.prevProp = e.current().toLowerCase();
                    return 'property';
                  } else if (e.match(/ *,/, false)) {
                    return 'tag';
                  } else {
                    k(t);
                    return 'tag';
                  }
                }
                if (r === ':') {
                  if (e.match(d)) {
                    return 'variable-3';
                  }
                  e.next();
                  t.cursorHalf = 1;
                  return 'operator';
                }
              } else {
                if (r === '#') {
                  e.next();
                  if (e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)) {
                    if (p(e)) {
                      t.cursorHalf = 0;
                    }
                    return 'number';
                  }
                }
                if (e.match(/^-?[0-9\.]+/)) {
                  if (p(e)) {
                    t.cursorHalf = 0;
                  }
                  return 'number';
                }
                if (e.match(/^(px|em|in)\b/)) {
                  if (p(e)) {
                    t.cursorHalf = 0;
                  }
                  return 'unit';
                }
                if (e.match(u)) {
                  if (p(e)) {
                    t.cursorHalf = 0;
                  }
                  return 'keyword';
                }
                if (e.match(/^url/) && e.peek() === '(') {
                  t.tokenizer = h;
                  if (p(e)) {
                    t.cursorHalf = 0;
                  }
                  return 'atom';
                }
                if (r === '$') {
                  e.next();
                  e.eatWhile(/[\w-]/);
                  if (p(e)) {
                    t.cursorHalf = 0;
                  }
                  return 'variable-2';
                }
                if (r === '!') {
                  e.next();
                  t.cursorHalf = 0;
                  return e.match(/^[\w]+/) ? 'keyword' : 'operator';
                }
                if (e.match(f)) {
                  if (p(e)) {
                    t.cursorHalf = 0;
                  }
                  return 'operator';
                }
                if (e.eatWhile(/[\w-]/)) {
                  if (p(e)) {
                    t.cursorHalf = 0;
                  }
                  m = e.current().toLowerCase();
                  if (a.hasOwnProperty(m)) {
                    return 'atom';
                  } else if (i.hasOwnProperty(m)) {
                    return 'keyword';
                  } else if (n.hasOwnProperty(m)) {
                    t.prevProp = e.current().toLowerCase();
                    return 'property';
                  } else {
                    return 'tag';
                  }
                }
                if (p(e)) {
                  t.cursorHalf = 0;
                  return null;
                }
              }
              if (e.match(f)) return 'operator';
              e.next();
              return null;
            }
            function y(e, r) {
              if (e.sol()) r.indentCount = 0;
              var n = r.tokenizer(e, r);
              var i = e.current();
              if (i === '@return' || i === '}') {
                _(r);
              }
              if (n !== null) {
                var a = e.pos - i.length;
                var o = a + t.indentUnit * r.indentCount;
                var s = [];
                for (var l = 0; l < r.scopes.length; l++) {
                  var u = r.scopes[l];
                  if (u.offset <= o) s.push(u);
                }
                r.scopes = s;
              }
              return n;
            }
            return {
              startState: function () {
                return {
                  tokenizer: x,
                  scopes: [{ offset: 0, type: 'sass' }],
                  indentCount: 0,
                  cursorHalf: 0,
                  definedVars: [],
                  definedMixins: [],
                };
              },
              token: function (e, t) {
                var r = y(e, t);
                t.lastToken = { style: r, content: e.current() };
                return r;
              },
              indent: function (e) {
                return e.scopes[0].offset;
              },
              blockCommentStart: '/*',
              blockCommentEnd: '*/',
              lineComment: '//',
              fold: 'indent',
            };
          },
          'css'
        );
        e.defineMIME('text/x-sass', 'sass');
      });
    },
    42372: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('scheme', function () {
          var e = 'builtin',
            t = 'comment',
            r = 'string',
            n = 'atom',
            i = 'number',
            a = 'bracket';
          var o = 2;
          function s(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var l = s(
            'λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?'
          );
          var u = s(
            'define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless'
          );
          function c(e, t, r) {
            this.indent = e;
            this.type = t;
            this.prev = r;
          }
          function f(e, t, r) {
            e.indentStack = new c(t, r, e.indentStack);
          }
          function d(e) {
            e.indentStack = e.indentStack.prev;
          }
          var m = new RegExp(
            /^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i
          );
          var p = new RegExp(
            /^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i
          );
          var h = new RegExp(
            /^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i
          );
          var g = new RegExp(
            /^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i
          );
          function b(e) {
            return e.match(m);
          }
          function v(e) {
            return e.match(p);
          }
          function k(e, t) {
            if (t === true) {
              e.backUp(1);
            }
            return e.match(g);
          }
          function _(e) {
            return e.match(h);
          }
          return {
            startState: function () {
              return {
                indentStack: null,
                indentation: 0,
                mode: false,
                sExprComment: false,
                sExprQuote: false,
              };
            },
            token: function (s, c) {
              if (c.indentStack == null && s.sol()) {
                c.indentation = s.indentation();
              }
              if (s.eatSpace()) {
                return null;
              }
              var m = null;
              switch (c.mode) {
                case 'string':
                  var p,
                    h = false;
                  while ((p = s.next()) != null) {
                    if (p == '"' && !h) {
                      c.mode = false;
                      break;
                    }
                    h = !h && p == '\\';
                  }
                  m = r;
                  break;
                case 'comment':
                  var p,
                    g = false;
                  while ((p = s.next()) != null) {
                    if (p == '#' && g) {
                      c.mode = false;
                      break;
                    }
                    g = p == '|';
                  }
                  m = t;
                  break;
                case 's-expr-comment':
                  c.mode = false;
                  if (s.peek() == '(' || s.peek() == '[') {
                    c.sExprComment = 0;
                  } else {
                    s.eatWhile(/[^\s\(\)\[\]]/);
                    m = t;
                    break;
                  }
                default:
                  var x = s.next();
                  if (x == '"') {
                    c.mode = 'string';
                    m = r;
                  } else if (x == "'") {
                    if (s.peek() == '(' || s.peek() == '[') {
                      if (typeof c.sExprQuote != 'number') {
                        c.sExprQuote = 0;
                      }
                      m = n;
                    } else {
                      s.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);
                      m = n;
                    }
                  } else if (x == '#') {
                    if (s.eat('|')) {
                      c.mode = 'comment';
                      m = t;
                    } else if (s.eat(/[tf]/i)) {
                      m = n;
                    } else if (s.eat(';')) {
                      c.mode = 's-expr-comment';
                      m = t;
                    } else {
                      var y = null,
                        w = false,
                        E = true;
                      if (s.eat(/[ei]/i)) {
                        w = true;
                      } else {
                        s.backUp(1);
                      }
                      if (s.match(/^#b/i)) {
                        y = b;
                      } else if (s.match(/^#o/i)) {
                        y = v;
                      } else if (s.match(/^#x/i)) {
                        y = _;
                      } else if (s.match(/^#d/i)) {
                        y = k;
                      } else if (s.match(/^[-+0-9.]/, false)) {
                        E = false;
                        y = k;
                      } else if (!w) {
                        s.eat('#');
                      }
                      if (y != null) {
                        if (E && !w) {
                          s.match(/^#[ei]/i);
                        }
                        if (y(s)) m = i;
                      }
                    }
                  } else if (/^[-+0-9.]/.test(x) && k(s, true)) {
                    m = i;
                  } else if (x == ';') {
                    s.skipToEnd();
                    m = t;
                  } else if (x == '(' || x == '[') {
                    var S = '';
                    var T = s.column(),
                      I;
                    while ((I = s.eat(/[^\s\(\[\;\)\]]/)) != null) {
                      S += I;
                    }
                    if (S.length > 0 && u.propertyIsEnumerable(S)) {
                      f(c, T + o, x);
                    } else {
                      s.eatSpace();
                      if (s.eol() || s.peek() == ';') {
                        f(c, T + 1, x);
                      } else {
                        f(c, T + s.current().length, x);
                      }
                    }
                    s.backUp(s.current().length - 1);
                    if (typeof c.sExprComment == 'number') c.sExprComment++;
                    if (typeof c.sExprQuote == 'number') c.sExprQuote++;
                    m = a;
                  } else if (x == ')' || x == ']') {
                    m = a;
                    if (
                      c.indentStack != null &&
                      c.indentStack.type == (x == ')' ? '(' : '[')
                    ) {
                      d(c);
                      if (typeof c.sExprComment == 'number') {
                        if (--c.sExprComment == 0) {
                          m = t;
                          c.sExprComment = false;
                        }
                      }
                      if (typeof c.sExprQuote == 'number') {
                        if (--c.sExprQuote == 0) {
                          m = n;
                          c.sExprQuote = false;
                        }
                      }
                    }
                  } else {
                    s.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);
                    if (l && l.propertyIsEnumerable(s.current())) {
                      m = e;
                    } else m = 'variable';
                  }
              }
              return typeof c.sExprComment == 'number'
                ? t
                : typeof c.sExprQuote == 'number'
                ? n
                : m;
            },
            indent: function (e) {
              if (e.indentStack == null) return e.indentation;
              return e.indentStack.indent;
            },
            closeBrackets: { pairs: '()[]{}""' },
            lineComment: ';;',
          };
        });
        e.defineMIME('text/x-scheme', 'scheme');
      });
    },
    49311: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('sieve', function (e) {
          function t(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var r = t('if elsif else stop require');
          var n = t('true false not');
          var i = e.indentUnit;
          function a(e, t) {
            var i = e.next();
            if (i == '/' && e.eat('*')) {
              t.tokenize = s;
              return s(e, t);
            }
            if (i === '#') {
              e.skipToEnd();
              return 'comment';
            }
            if (i == '"') {
              t.tokenize = l(i);
              return t.tokenize(e, t);
            }
            if (i == '(') {
              t._indent.push('(');
              t._indent.push('{');
              return null;
            }
            if (i === '{') {
              t._indent.push('{');
              return null;
            }
            if (i == ')') {
              t._indent.pop();
              t._indent.pop();
            }
            if (i === '}') {
              t._indent.pop();
              return null;
            }
            if (i == ',') return null;
            if (i == ';') return null;
            if (/[{}\(\),;]/.test(i)) return null;
            if (/\d/.test(i)) {
              e.eatWhile(/[\d]/);
              e.eat(/[KkMmGg]/);
              return 'number';
            }
            if (i == ':') {
              e.eatWhile(/[a-zA-Z_]/);
              e.eatWhile(/[a-zA-Z0-9_]/);
              return 'operator';
            }
            e.eatWhile(/\w/);
            var a = e.current();
            if (a == 'text' && e.eat(':')) {
              t.tokenize = o;
              return 'string';
            }
            if (r.propertyIsEnumerable(a)) return 'keyword';
            if (n.propertyIsEnumerable(a)) return 'atom';
            return null;
          }
          function o(e, t) {
            t._multiLineString = true;
            if (!e.sol()) {
              e.eatSpace();
              if (e.peek() == '#') {
                e.skipToEnd();
                return 'comment';
              }
              e.skipToEnd();
              return 'string';
            }
            if (e.next() == '.' && e.eol()) {
              t._multiLineString = false;
              t.tokenize = a;
            }
            return 'string';
          }
          function s(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (r && n == '/') {
                t.tokenize = a;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function l(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) break;
                n = !n && i == '\\';
              }
              if (!n) r.tokenize = a;
              return 'string';
            };
          }
          return {
            startState: function (e) {
              return { tokenize: a, baseIndent: e || 0, _indent: [] };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return (t.tokenize || a)(e, t);
            },
            indent: function (e, t) {
              var r = e._indent.length;
              if (t && t[0] == '}') r--;
              if (r < 0) r = 0;
              return r * i;
            },
            electricChars: '}',
          };
        });
        e.defineMIME('application/sieve', 'sieve');
      });
    },
    32486: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(16531), r(80853));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode(
          'slim',
          function (t) {
            var r = e.getMode(t, { name: 'htmlmixed' });
            var n = e.getMode(t, 'ruby');
            var i = { html: r, ruby: n };
            var a = {
              ruby: 'ruby',
              javascript: 'javascript',
              css: 'text/css',
              sass: 'text/x-sass',
              scss: 'text/x-scss',
              less: 'text/x-less',
              styl: 'text/x-styl',
              coffee: 'coffeescript',
              asciidoc: 'text/x-asciidoc',
              markdown: 'text/x-markdown',
              textile: 'text/x-textile',
              creole: 'text/x-creole',
              wiki: 'text/x-wiki',
              mediawiki: 'text/x-mediawiki',
              rdoc: 'text/x-rdoc',
              builder: 'text/x-builder',
              nokogiri: 'text/x-nokogiri',
              erb: 'application/x-erb',
            };
            var o = (function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return new RegExp('^(' + t.join('|') + '):');
            })(a);
            var s = {
              commentLine: 'comment',
              slimSwitch: 'operator special',
              slimTag: 'tag',
              slimId: 'attribute def',
              slimClass: 'attribute qualifier',
              slimAttribute: 'attribute',
              slimSubmode: 'keyword special',
              closeAttributeTag: null,
              slimDoctype: null,
              lineContinuation: null,
            };
            var l = { '{': '}', '[': ']', '(': ')' };
            var u = '_a-zA-ZÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�';
            var c = u + '\\-0-9·̀-ͯ‿-⁀';
            var f = new RegExp('^[:' + u + '](?::[' + c + ']|[' + c + ']*)');
            var d = new RegExp('^[:' + u + '][:\\.' + c + ']*(?=\\s*=)');
            var m = new RegExp('^[:' + u + '][:\\.' + c + ']*');
            var p = /^\.-?[_a-zA-Z]+[\w\-]*/;
            var h = /^#[_a-zA-Z]+[\w\-]*/;
            function g(e, t, r) {
              var n = function (n, i) {
                i.tokenize = t;
                if (n.pos < e) {
                  n.pos = e;
                  return r;
                }
                return i.tokenize(n, i);
              };
              return function (e, r) {
                r.tokenize = n;
                return t(e, r);
              };
            }
            function b(e, t, r, n, i) {
              var a = e.current();
              var o = a.search(r);
              if (o > -1) {
                t.tokenize = g(e.pos, t.tokenize, i);
                e.backUp(a.length - o - n);
              }
              return i;
            }
            function v(e, t) {
              e.stack = {
                parent: e.stack,
                style: 'continuation',
                indented: t,
                tokenize: e.line,
              };
              e.line = e.tokenize;
            }
            function k(e) {
              if (e.line == e.tokenize) {
                e.line = e.stack.tokenize;
                e.stack = e.stack.parent;
              }
            }
            function _(e, t) {
              return function (r, n) {
                k(n);
                if (r.match(/^\\$/)) {
                  v(n, e);
                  return 'lineContinuation';
                }
                var i = t(r, n);
                if (r.eol() && r.current().match(/(?:^|[^\\])(?:\\\\)*\\$/)) {
                  r.backUp(1);
                }
                return i;
              };
            }
            function x(e, t) {
              return function (r, n) {
                k(n);
                var i = t(r, n);
                if (r.eol() && r.current().match(/,$/)) {
                  v(n, e);
                }
                return i;
              };
            }
            function y(e, t) {
              return function (r, n) {
                var i = r.peek();
                if (i == e && n.rubyState.tokenize.length == 1) {
                  r.next();
                  n.tokenize = t;
                  return 'closeAttributeTag';
                } else {
                  return E(r, n);
                }
              };
            }
            function w(t) {
              var r;
              var i = function (e, n) {
                if (n.rubyState.tokenize.length == 1 && !n.rubyState.context.prev) {
                  e.backUp(1);
                  if (e.eatSpace()) {
                    n.rubyState = r;
                    n.tokenize = t;
                    return t(e, n);
                  }
                  e.next();
                }
                return E(e, n);
              };
              return function (t, a) {
                r = a.rubyState;
                a.rubyState = e.startState(n);
                a.tokenize = i;
                return E(t, a);
              };
            }
            function E(e, t) {
              return n.token(e, t.rubyState);
            }
            function S(e, t) {
              if (e.match(/^\\$/)) {
                return 'lineContinuation';
              }
              return T(e, t);
            }
            function T(e, t) {
              if (e.match(/^#\{/)) {
                t.tokenize = y('}', t.tokenize);
                return null;
              }
              return b(e, t, /[^\\]#\{/, 1, r.token(e, t.htmlState));
            }
            function I(e) {
              return function (t, r) {
                var n = S(t, r);
                if (t.eol()) r.tokenize = e;
                return n;
              };
            }
            function A(e, t, r) {
              t.stack = {
                parent: t.stack,
                style: 'html',
                indented: e.column() + r,
                tokenize: t.line,
              };
              t.line = t.tokenize = T;
              return null;
            }
            function C(e, t) {
              e.skipToEnd();
              return t.stack.style;
            }
            function z(e, t) {
              t.stack = {
                parent: t.stack,
                style: 'comment',
                indented: t.indented + 1,
                tokenize: t.line,
              };
              t.line = C;
              return C(e, t);
            }
            function R(e, t) {
              if (e.eat(t.stack.endQuote)) {
                t.line = t.stack.line;
                t.tokenize = t.stack.tokenize;
                t.stack = t.stack.parent;
                return null;
              }
              if (e.match(m)) {
                t.tokenize = M;
                return 'slimAttribute';
              }
              e.next();
              return null;
            }
            function M(e, t) {
              if (e.match(/^==?/)) {
                t.tokenize = O;
                return null;
              }
              return R(e, t);
            }
            function O(e, t) {
              var r = e.peek();
              if (r == '"' || r == "'") {
                t.tokenize = Y(r, 'string', true, false, R);
                e.next();
                return t.tokenize(e, t);
              }
              if (r == '[') {
                return w(R)(e, t);
              }
              if (e.match(/^(true|false|nil)\b/)) {
                t.tokenize = R;
                return 'keyword';
              }
              return w(R)(e, t);
            }
            function N(e, t, r) {
              e.stack = {
                parent: e.stack,
                style: 'wrapper',
                indented: e.indented + 1,
                tokenize: r,
                line: e.line,
                endQuote: t,
              };
              e.line = e.tokenize = R;
              return null;
            }
            function $(t, r) {
              if (t.match(/^#\{/)) {
                r.tokenize = y('}', r.tokenize);
                return null;
              }
              var n = new e.StringStream(t.string.slice(r.stack.indented), t.tabSize);
              n.pos = t.pos - r.stack.indented;
              n.start = t.start - r.stack.indented;
              n.lastColumnPos = t.lastColumnPos - r.stack.indented;
              n.lastColumnValue = t.lastColumnValue - r.stack.indented;
              var i = r.subMode.token(n, r.subState);
              t.pos = n.pos + r.stack.indented;
              return i;
            }
            function L(e, t) {
              t.stack.indented = e.column();
              t.line = t.tokenize = $;
              return t.tokenize(e, t);
            }
            function D(r) {
              var n = a[r];
              var i = e.mimeModes[n];
              if (i) {
                return e.getMode(t, i);
              }
              var o = e.modes[n];
              if (o) {
                return o(t, { name: n });
              }
              return e.getMode(t, 'null');
            }
            function P(e) {
              if (!i.hasOwnProperty(e)) {
                return (i[e] = D(e));
              }
              return i[e];
            }
            function U(t, r) {
              var n = P(t);
              var i = e.startState(n);
              r.subMode = n;
              r.subState = i;
              r.stack = {
                parent: r.stack,
                style: 'sub',
                indented: r.indented + 1,
                tokenize: r.line,
              };
              r.line = r.tokenize = L;
              return 'slimSubmode';
            }
            function F(e, t) {
              e.skipToEnd();
              return 'slimDoctype';
            }
            function q(e, t) {
              var r = e.peek();
              if (r == '<') {
                return (t.tokenize = I(t.tokenize))(e, t);
              }
              if (e.match(/^[|']/)) {
                return A(e, t, 1);
              }
              if (e.match(/^\/(!|\[\w+])?/)) {
                return z(e, t);
              }
              if (e.match(/^(-|==?[<>]?)/)) {
                t.tokenize = _(e.column(), x(e.column(), E));
                return 'slimSwitch';
              }
              if (e.match(/^doctype\b/)) {
                t.tokenize = F;
                return 'keyword';
              }
              var n = e.match(o);
              if (n) {
                return U(n[1], t);
              }
              return j(e, t);
            }
            function W(e, t) {
              if (t.startOfLine) {
                return q(e, t);
              }
              return j(e, t);
            }
            function j(e, t) {
              if (e.eat('*')) {
                t.tokenize = w(B);
                return null;
              }
              if (e.match(f)) {
                t.tokenize = B;
                return 'slimTag';
              }
              return G(e, t);
            }
            function B(e, t) {
              if (e.match(/^(<>?|><?)/)) {
                t.tokenize = G;
                return null;
              }
              return G(e, t);
            }
            function G(e, t) {
              if (e.match(h)) {
                t.tokenize = G;
                return 'slimId';
              }
              if (e.match(p)) {
                t.tokenize = G;
                return 'slimClass';
              }
              return H(e, t);
            }
            function H(e, t) {
              if (e.match(/^([\[\{\(])/)) {
                return N(t, l[RegExp.$1], H);
              }
              if (e.match(d)) {
                t.tokenize = V;
                return 'slimAttribute';
              }
              if (e.peek() == '*') {
                e.next();
                t.tokenize = w(X);
                return null;
              }
              return X(e, t);
            }
            function V(e, t) {
              if (e.match(/^==?/)) {
                t.tokenize = Z;
                return null;
              }
              return H(e, t);
            }
            function Z(e, t) {
              var r = e.peek();
              if (r == '"' || r == "'") {
                t.tokenize = Y(r, 'string', true, false, H);
                e.next();
                return t.tokenize(e, t);
              }
              if (r == '[') {
                return w(H)(e, t);
              }
              if (r == ':') {
                return w(K)(e, t);
              }
              if (e.match(/^(true|false|nil)\b/)) {
                t.tokenize = H;
                return 'keyword';
              }
              return w(H)(e, t);
            }
            function K(e, t) {
              e.backUp(1);
              if (e.match(/^[^\s],(?=:)/)) {
                t.tokenize = w(K);
                return null;
              }
              e.next();
              return H(e, t);
            }
            function Y(e, t, r, n, i) {
              return function (a, o) {
                k(o);
                var s = a.current().length == 0;
                if (a.match(/^\\$/, s)) {
                  if (!s) return t;
                  v(o, o.indented);
                  return 'lineContinuation';
                }
                if (a.match(/^#\{/, s)) {
                  if (!s) return t;
                  o.tokenize = y('}', o.tokenize);
                  return null;
                }
                var l = false,
                  u;
                while ((u = a.next()) != null) {
                  if (u == e && (n || !l)) {
                    o.tokenize = i;
                    break;
                  }
                  if (r && u == '#' && !l) {
                    if (a.eat('{')) {
                      a.backUp(2);
                      break;
                    }
                  }
                  l = !l && u == '\\';
                }
                if (a.eol() && l) {
                  a.backUp(1);
                }
                return t;
              };
            }
            function X(e, t) {
              if (e.match(/^==?/)) {
                t.tokenize = E;
                return 'slimSwitch';
              }
              if (e.match(/^\/$/)) {
                t.tokenize = W;
                return null;
              }
              if (e.match(/^:/)) {
                t.tokenize = j;
                return 'slimSwitch';
              }
              A(e, t, 0);
              return t.tokenize(e, t);
            }
            var J = {
              startState: function () {
                var t = e.startState(r);
                var i = e.startState(n);
                return {
                  htmlState: t,
                  rubyState: i,
                  stack: null,
                  last: null,
                  tokenize: W,
                  line: W,
                  indented: 0,
                };
              },
              copyState: function (t) {
                return {
                  htmlState: e.copyState(r, t.htmlState),
                  rubyState: e.copyState(n, t.rubyState),
                  subMode: t.subMode,
                  subState: t.subMode && e.copyState(t.subMode, t.subState),
                  stack: t.stack,
                  last: t.last,
                  tokenize: t.tokenize,
                  line: t.line,
                };
              },
              token: function (e, t) {
                if (e.sol()) {
                  t.indented = e.indentation();
                  t.startOfLine = true;
                  t.tokenize = t.line;
                  while (
                    t.stack &&
                    t.stack.indented > t.indented &&
                    t.last != 'slimSubmode'
                  ) {
                    t.line = t.tokenize = t.stack.tokenize;
                    t.stack = t.stack.parent;
                    t.subMode = null;
                    t.subState = null;
                  }
                }
                if (e.eatSpace()) return null;
                var r = t.tokenize(e, t);
                t.startOfLine = false;
                if (r) t.last = r;
                return s.hasOwnProperty(r) ? s[r] : r;
              },
              blankLine: function (e) {
                if (e.subMode && e.subMode.blankLine) {
                  return e.subMode.blankLine(e.subState);
                }
              },
              innerMode: function (e) {
                if (e.subMode) return { state: e.subState, mode: e.subMode };
                return { state: e, mode: J };
              },
            };
            return J;
          },
          'htmlmixed',
          'ruby'
        );
        e.defineMIME('text/x-slim', 'slim');
        e.defineMIME('application/x-slim', 'slim');
      });
    },
    66690: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('smalltalk', function (e) {
          var t = /[+\-\/\\*~<>=@%|&?!.,:;^]/;
          var r = /true|false|nil|self|super|thisContext/;
          var n = function (e, t) {
            this.next = e;
            this.parent = t;
          };
          var i = function (e, t, r) {
            this.name = e;
            this.context = t;
            this.eos = r;
          };
          var a = function () {
            this.context = new n(o, null);
            this.expectVariable = true;
            this.indentation = 0;
            this.userIndentationDelta = 0;
          };
          a.prototype.userIndent = function (t) {
            this.userIndentationDelta = t > 0 ? t / e.indentUnit - this.indentation : 0;
          };
          var o = function (e, a, o) {
            var f = new i(null, a, false);
            var d = e.next();
            if (d === '"') {
              f = s(e, new n(s, a));
            } else if (d === "'") {
              f = l(e, new n(l, a));
            } else if (d === '#') {
              if (e.peek() === "'") {
                e.next();
                f = u(e, new n(u, a));
              } else {
                if (e.eatWhile(/[^\s.{}\[\]()]/)) f.name = 'string-2';
                else f.name = 'meta';
              }
            } else if (d === '$') {
              if (e.next() === '<') {
                e.eatWhile(/[^\s>]/);
                e.next();
              }
              f.name = 'string-2';
            } else if (d === '|' && o.expectVariable) {
              f.context = new n(c, a);
            } else if (/[\[\]{}()]/.test(d)) {
              f.name = 'bracket';
              f.eos = /[\[{(]/.test(d);
              if (d === '[') {
                o.indentation++;
              } else if (d === ']') {
                o.indentation = Math.max(0, o.indentation - 1);
              }
            } else if (t.test(d)) {
              e.eatWhile(t);
              f.name = 'operator';
              f.eos = d !== ';';
            } else if (/\d/.test(d)) {
              e.eatWhile(/[\w\d]/);
              f.name = 'number';
            } else if (/[\w_]/.test(d)) {
              e.eatWhile(/[\w\d_]/);
              f.name = o.expectVariable
                ? r.test(e.current())
                  ? 'keyword'
                  : 'variable'
                : null;
            } else {
              f.eos = o.expectVariable;
            }
            return f;
          };
          var s = function (e, t) {
            e.eatWhile(/[^"]/);
            return new i('comment', e.eat('"') ? t.parent : t, true);
          };
          var l = function (e, t) {
            e.eatWhile(/[^']/);
            return new i('string', e.eat("'") ? t.parent : t, false);
          };
          var u = function (e, t) {
            e.eatWhile(/[^']/);
            return new i('string-2', e.eat("'") ? t.parent : t, false);
          };
          var c = function (e, t) {
            var r = new i(null, t, false);
            var n = e.next();
            if (n === '|') {
              r.context = t.parent;
              r.eos = true;
            } else {
              e.eatWhile(/[^|]/);
              r.name = 'variable';
            }
            return r;
          };
          return {
            startState: function () {
              return new a();
            },
            token: function (e, t) {
              t.userIndent(e.indentation());
              if (e.eatSpace()) {
                return null;
              }
              var r = t.context.next(e, t.context, t);
              t.context = r.context;
              t.expectVariable = r.eos;
              return r.name;
            },
            blankLine: function (e) {
              e.userIndent(0);
            },
            indent: function (t, r) {
              var n =
                t.context.next === o && r && r.charAt(0) === ']'
                  ? -1
                  : t.userIndentationDelta;
              return (t.indentation + n) * e.indentUnit;
            },
            electricChars: ']',
          };
        });
        e.defineMIME('text/x-stsrc', { name: 'smalltalk' });
      });
    },
    52889: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('smarty', function (t, r) {
          var n = r.rightDelimiter || '}';
          var i = r.leftDelimiter || '{';
          var a = r.version || 2;
          var o = e.getMode(t, r.baseMode || 'null');
          var s = ['debug', 'extends', 'function', 'include', 'literal'];
          var l = {
            operatorChars: /[+\-*&%=<>!?]/,
            validIdentifier: /[a-zA-Z0-9_]/,
            stringChar: /['"]/,
          };
          var u;
          function c(e, t) {
            u = t;
            return e;
          }
          function f(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function d(e, t) {
            if (t == null) t = e.pos;
            return (
              a === 3 &&
              i == '{' &&
              (t == e.string.length || /\s/.test(e.string.charAt(t)))
            );
          }
          function m(e, t) {
            var r = e.string;
            for (var a = e.pos; ; ) {
              var s = r.indexOf(i, a);
              a = s + i.length;
              if (s == -1 || !d(e, s + i.length)) break;
            }
            if (s == e.pos) {
              e.match(i);
              if (e.eat('*')) {
                return f(e, t, g('comment', '*' + n));
              } else {
                t.depth++;
                t.tokenize = p;
                u = 'startTag';
                return 'tag';
              }
            }
            if (s > -1) e.string = r.slice(0, s);
            var l = o.token(e, t.base);
            if (s > -1) e.string = r;
            return l;
          }
          function p(e, t) {
            if (e.match(n, true)) {
              if (a === 3) {
                t.depth--;
                if (t.depth <= 0) {
                  t.tokenize = m;
                }
              } else {
                t.tokenize = m;
              }
              return c('tag', null);
            }
            if (e.match(i, true)) {
              t.depth++;
              return c('tag', 'startTag');
            }
            var r = e.next();
            if (r == '$') {
              e.eatWhile(l.validIdentifier);
              return c('variable-2', 'variable');
            } else if (r == '|') {
              return c('operator', 'pipe');
            } else if (r == '.') {
              return c('operator', 'property');
            } else if (l.stringChar.test(r)) {
              t.tokenize = h(r);
              return c('string', 'string');
            } else if (l.operatorChars.test(r)) {
              e.eatWhile(l.operatorChars);
              return c('operator', 'operator');
            } else if (r == '[' || r == ']') {
              return c('bracket', 'bracket');
            } else if (r == '(' || r == ')') {
              return c('bracket', 'operator');
            } else if (/\d/.test(r)) {
              e.eatWhile(/\d/);
              return c('number', 'number');
            } else {
              if (t.last == 'variable') {
                if (r == '@') {
                  e.eatWhile(l.validIdentifier);
                  return c('property', 'property');
                } else if (r == '|') {
                  e.eatWhile(l.validIdentifier);
                  return c('qualifier', 'modifier');
                }
              } else if (t.last == 'pipe') {
                e.eatWhile(l.validIdentifier);
                return c('qualifier', 'modifier');
              } else if (t.last == 'whitespace') {
                e.eatWhile(l.validIdentifier);
                return c('attribute', 'modifier');
              }
              if (t.last == 'property') {
                e.eatWhile(l.validIdentifier);
                return c('property', null);
              } else if (/\s/.test(r)) {
                u = 'whitespace';
                return null;
              }
              var o = '';
              if (r != '/') {
                o += r;
              }
              var f = null;
              while ((f = e.eat(l.validIdentifier))) {
                o += f;
              }
              for (var d = 0, p = s.length; d < p; d++) {
                if (s[d] == o) {
                  return c('keyword', 'keyword');
                }
              }
              if (/\s/.test(r)) {
                return null;
              }
              return c('tag', 'tag');
            }
          }
          function h(e) {
            return function (t, r) {
              var n = null;
              var i = null;
              while (!t.eol()) {
                i = t.peek();
                if (t.next() == e && n !== '\\') {
                  r.tokenize = p;
                  break;
                }
                n = i;
              }
              return 'string';
            };
          }
          function g(e, t) {
            return function (r, n) {
              while (!r.eol()) {
                if (r.match(t)) {
                  n.tokenize = m;
                  break;
                }
                r.next();
              }
              return e;
            };
          }
          return {
            startState: function () {
              return { base: e.startState(o), tokenize: m, last: null, depth: 0 };
            },
            copyState: function (t) {
              return {
                base: e.copyState(o, t.base),
                tokenize: t.tokenize,
                last: t.last,
                depth: t.depth,
              };
            },
            innerMode: function (e) {
              if (e.tokenize == m) return { mode: o, state: e.base };
            },
            token: function (e, t) {
              var r = t.tokenize(e, t);
              t.last = u;
              return r;
            },
            indent: function (t, r, n) {
              if (t.tokenize == m && o.indent) return o.indent(t.base, r, n);
              else return e.Pass;
            },
            blockCommentStart: i + '*',
            blockCommentEnd: '*' + n,
          };
        });
        e.defineMIME('text/x-smarty', 'smarty');
      });
    },
    18715: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('solr', function () {
          'use strict';
          var e = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/;
          var t = /[\|\!\+\-\*\?\~\^\&]/;
          var r = /^(OR|AND|NOT|TO)$/i;
          function n(e) {
            return parseFloat(e).toString() === e;
          }
          function i(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) break;
                n = !n && i == '\\';
              }
              if (!n) r.tokenize = s;
              return 'string';
            };
          }
          function a(e) {
            return function (t, r) {
              var n = 'operator';
              if (e == '+') n += ' positive';
              else if (e == '-') n += ' negative';
              else if (e == '|') t.eat(/\|/);
              else if (e == '&') t.eat(/\&/);
              else if (e == '^') n += ' boost';
              r.tokenize = s;
              return n;
            };
          }
          function o(t) {
            return function (i, a) {
              var o = t;
              while ((t = i.peek()) && t.match(e) != null) {
                o += i.next();
              }
              a.tokenize = s;
              if (r.test(o)) return 'operator';
              else if (n(o)) return 'number';
              else if (i.peek() == ':') return 'field';
              else return 'string';
            };
          }
          function s(r, n) {
            var l = r.next();
            if (l == '"') n.tokenize = i(l);
            else if (t.test(l)) n.tokenize = a(l);
            else if (e.test(l)) n.tokenize = o(l);
            return n.tokenize != s ? n.tokenize(r, n) : null;
          }
          return {
            startState: function () {
              return { tokenize: s };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return t.tokenize(e, t);
            },
          };
        });
        e.defineMIME('text/x-solr', 'solr');
      });
    },
    61527: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(16531));
        else {
        }
      })(function (e) {
        'use strict';
        var t = { noEndTag: true, soyState: 'param-def' };
        var r = {
          alias: { noEndTag: true },
          delpackage: { noEndTag: true },
          namespace: { noEndTag: true, soyState: 'namespace-def' },
          '@attribute': t,
          '@attribute?': t,
          '@param': t,
          '@param?': t,
          '@inject': t,
          '@inject?': t,
          '@state': t,
          template: { soyState: 'templ-def', variableScope: true },
          literal: {},
          msg: {},
          fallbackmsg: { noEndTag: true, reduceIndent: true },
          select: {},
          plural: {},
          let: { soyState: 'var-def' },
          if: {},
          elseif: { noEndTag: true, reduceIndent: true },
          else: { noEndTag: true, reduceIndent: true },
          switch: {},
          case: { noEndTag: true, reduceIndent: true },
          default: { noEndTag: true, reduceIndent: true },
          foreach: { variableScope: true, soyState: 'for-loop' },
          ifempty: { noEndTag: true, reduceIndent: true },
          for: { variableScope: true, soyState: 'for-loop' },
          call: { soyState: 'templ-ref' },
          param: { soyState: 'param-ref' },
          print: { noEndTag: true },
          deltemplate: { soyState: 'templ-def', variableScope: true },
          delcall: { soyState: 'templ-ref' },
          log: {},
          element: { variableScope: true },
        };
        var n = Object.keys(r).filter(function (e) {
          return !r[e].noEndTag || r[e].reduceIndent;
        });
        e.defineMode(
          'soy',
          function (t) {
            var i = e.getMode(t, 'text/plain');
            var a = {
              html: e.getMode(t, {
                name: 'text/html',
                multilineTagIndentFactor: 2,
                multilineTagIndentPastTag: false,
                allowMissingTagName: true,
              }),
              attributes: i,
              text: i,
              uri: i,
              trusted_resource_uri: i,
              css: e.getMode(t, 'text/css'),
              js: e.getMode(t, {
                name: 'text/javascript',
                statementIndent: 2 * t.indentUnit,
              }),
            };
            function o(e) {
              return e[e.length - 1];
            }
            function s(e, t, r) {
              if (e.sol()) {
                for (var n = 0; n < t.indent; n++) {
                  if (!e.eat(/\s/)) break;
                }
                if (n) return null;
              }
              var i = e.string;
              var a = r.exec(i.substr(e.pos));
              if (a) {
                e.string = i.substr(0, e.pos + a.index);
              }
              var s = e.hideFirstChars(t.indent, function () {
                var r = o(t.localStates);
                return r.mode.token(e, r.state);
              });
              e.string = i;
              return s;
            }
            function l(e, t) {
              while (e) {
                if (e.element === t) return true;
                e = e.next;
              }
              return false;
            }
            function u(e, t) {
              return { element: t, next: e };
            }
            function c(e) {
              if (!e.context) return;
              if (e.context.scope) {
                e.variables = e.context.scope;
              }
              e.context = e.context.previousContext;
            }
            function f(e, t, r) {
              return l(e, t) ? 'variable-2' : r ? 'variable' : 'variable-2 error';
            }
            function d(e, t, r) {
              this.previousContext = e;
              this.tag = t;
              this.kind = null;
              this.scope = r;
            }
            function m(e, t) {
              var r;
              if (e.match(/[[]/)) {
                t.soyState.push('list-literal');
                t.context = new d(t.context, 'list-literal', t.variables);
                t.lookupVariables = false;
                return null;
              } else if (e.match(/map\b/)) {
                t.soyState.push('map-literal');
                return 'keyword';
              } else if (e.match(/record\b/)) {
                t.soyState.push('record-literal');
                return 'keyword';
              } else if (e.match(/([\w]+)(?=\()/)) {
                return 'variable callee';
              } else if ((r = e.match(/^["']/))) {
                t.soyState.push('string');
                t.quoteKind = r[0];
                return 'string';
              } else if (e.match(/^[(]/)) {
                t.soyState.push('open-parentheses');
                return null;
              } else if (
                e.match(/(null|true|false)(?!\w)/) ||
                e.match(/0x([0-9a-fA-F]{2,})/) ||
                e.match(/-?([0-9]*[.])?[0-9]+(e[0-9]*)?/)
              ) {
                return 'atom';
              } else if (e.match(/(\||[+\-*\/%]|[=!]=|\?:|[<>]=?)/)) {
                return 'operator';
              } else if ((r = e.match(/^\$([\w]+)/))) {
                return f(t.variables, r[1], !t.lookupVariables);
              } else if ((r = e.match(/^\w+/))) {
                return /^(?:as|and|or|not|in|if)$/.test(r[0]) ? 'keyword' : null;
              }
              e.next();
              return null;
            }
            return {
              startState: function () {
                return {
                  soyState: [],
                  variables: u(null, 'ij'),
                  scopes: null,
                  indent: 0,
                  quoteKind: null,
                  context: null,
                  lookupVariables: true,
                  localStates: [{ mode: a.html, state: e.startState(a.html) }],
                };
              },
              copyState: function (t) {
                return {
                  tag: t.tag,
                  soyState: t.soyState.concat([]),
                  variables: t.variables,
                  context: t.context,
                  indent: t.indent,
                  quoteKind: t.quoteKind,
                  lookupVariables: t.lookupVariables,
                  localStates: t.localStates.map(function (t) {
                    return { mode: t.mode, state: e.copyState(t.mode, t.state) };
                  }),
                };
              },
              token: function (i, l) {
                var p;
                switch (o(l.soyState)) {
                  case 'comment':
                    if (i.match(/^.*?\*\//)) {
                      l.soyState.pop();
                    } else {
                      i.skipToEnd();
                    }
                    if (!l.context || !l.context.scope) {
                      var h = /@param\??\s+(\S+)/g;
                      var g = i.current();
                      for (var p; (p = h.exec(g)); ) {
                        l.variables = u(l.variables, p[1]);
                      }
                    }
                    return 'comment';
                  case 'string':
                    var p = i.match(/^.*?(["']|\\[\s\S])/);
                    if (!p) {
                      i.skipToEnd();
                    } else if (p[1] == l.quoteKind) {
                      l.quoteKind = null;
                      l.soyState.pop();
                    }
                    return 'string';
                }
                if (!l.soyState.length || o(l.soyState) != 'literal') {
                  if (i.match(/^\/\*/)) {
                    l.soyState.push('comment');
                    return 'comment';
                  } else if (i.match(i.sol() ? /^\s*\/\/.*/ : /^\s+\/\/.*/)) {
                    return 'comment';
                  }
                }
                switch (o(l.soyState)) {
                  case 'templ-def':
                    if ((p = i.match(/^\.?([\w]+(?!\.[\w]+)*)/))) {
                      l.soyState.pop();
                      return 'def';
                    }
                    i.next();
                    return null;
                  case 'templ-ref':
                    if ((p = i.match(/(\.?[a-zA-Z_][a-zA-Z_0-9]+)+/))) {
                      l.soyState.pop();
                      if (p[0][0] == '.') {
                        return 'variable-2';
                      }
                      return 'variable';
                    }
                    if ((p = i.match(/^\$([\w]+)/))) {
                      l.soyState.pop();
                      return f(l.variables, p[1], !l.lookupVariables);
                    }
                    i.next();
                    return null;
                  case 'namespace-def':
                    if ((p = i.match(/^\.?([\w\.]+)/))) {
                      l.soyState.pop();
                      return 'variable';
                    }
                    i.next();
                    return null;
                  case 'param-def':
                    if ((p = i.match(/^\*/))) {
                      l.soyState.pop();
                      l.soyState.push('param-type');
                      return 'type';
                    }
                    if ((p = i.match(/^\w+/))) {
                      l.variables = u(l.variables, p[0]);
                      l.soyState.pop();
                      l.soyState.push('param-type');
                      return 'def';
                    }
                    i.next();
                    return null;
                  case 'param-ref':
                    if ((p = i.match(/^\w+/))) {
                      l.soyState.pop();
                      return 'property';
                    }
                    i.next();
                    return null;
                  case 'open-parentheses':
                    if (i.match(/[)]/)) {
                      l.soyState.pop();
                      return null;
                    }
                    return m(i, l);
                  case 'param-type':
                    var b = i.peek();
                    if ('}]=>,'.indexOf(b) != -1) {
                      l.soyState.pop();
                      return null;
                    } else if (b == '[') {
                      l.soyState.push('param-type-record');
                      return null;
                    } else if (b == '(') {
                      l.soyState.push('param-type-template');
                      return null;
                    } else if (b == '<') {
                      l.soyState.push('param-type-parameter');
                      return null;
                    } else if ((p = i.match(/^([\w]+|[?])/))) {
                      return 'type';
                    }
                    i.next();
                    return null;
                  case 'param-type-record':
                    var b = i.peek();
                    if (b == ']') {
                      l.soyState.pop();
                      return null;
                    }
                    if (i.match(/^\w+/)) {
                      l.soyState.push('param-type');
                      return 'property';
                    }
                    i.next();
                    return null;
                  case 'param-type-parameter':
                    if (i.match(/^[>]/)) {
                      l.soyState.pop();
                      return null;
                    }
                    if (i.match(/^[<,]/)) {
                      l.soyState.push('param-type');
                      return null;
                    }
                    i.next();
                    return null;
                  case 'param-type-template':
                    if (i.match(/[>]/)) {
                      l.soyState.pop();
                      l.soyState.push('param-type');
                      return null;
                    }
                    if (i.match(/^\w+/)) {
                      l.soyState.push('param-type');
                      return 'def';
                    }
                    i.next();
                    return null;
                  case 'var-def':
                    if ((p = i.match(/^\$([\w]+)/))) {
                      l.variables = u(l.variables, p[1]);
                      l.soyState.pop();
                      return 'def';
                    }
                    i.next();
                    return null;
                  case 'for-loop':
                    if (i.match(/\bin\b/)) {
                      l.soyState.pop();
                      return 'keyword';
                    }
                    if (i.peek() == '$') {
                      l.soyState.push('var-def');
                      return null;
                    }
                    i.next();
                    return null;
                  case 'record-literal':
                    if (i.match(/^[)]/)) {
                      l.soyState.pop();
                      return null;
                    }
                    if (i.match(/[(,]/)) {
                      l.soyState.push('map-value');
                      l.soyState.push('record-key');
                      return null;
                    }
                    i.next();
                    return null;
                  case 'map-literal':
                    if (i.match(/^[)]/)) {
                      l.soyState.pop();
                      return null;
                    }
                    if (i.match(/[(,]/)) {
                      l.soyState.push('map-value');
                      l.soyState.push('map-value');
                      return null;
                    }
                    i.next();
                    return null;
                  case 'list-literal':
                    if (i.match(']')) {
                      l.soyState.pop();
                      l.lookupVariables = true;
                      c(l);
                      return null;
                    }
                    if (i.match(/\bfor\b/)) {
                      l.lookupVariables = true;
                      l.soyState.push('for-loop');
                      return 'keyword';
                    }
                    return m(i, l);
                  case 'record-key':
                    if (i.match(/[\w]+/)) {
                      return 'property';
                    }
                    if (i.match(/^[:]/)) {
                      l.soyState.pop();
                      return null;
                    }
                    i.next();
                    return null;
                  case 'map-value':
                    if (i.peek() == ')' || i.peek() == ',' || i.match(/^[:)]/)) {
                      l.soyState.pop();
                      return null;
                    }
                    return m(i, l);
                  case 'import':
                    if (i.eat(';')) {
                      l.soyState.pop();
                      l.indent -= 2 * t.indentUnit;
                      return null;
                    }
                    if (i.match(/\w+(?=\s+as)/)) {
                      return 'variable';
                    }
                    if ((p = i.match(/\w+/))) {
                      return /(from|as)/.test(p[0]) ? 'keyword' : 'def';
                    }
                    if ((p = i.match(/^["']/))) {
                      l.soyState.push('string');
                      l.quoteKind = p[0];
                      return 'string';
                    }
                    i.next();
                    return null;
                  case 'tag':
                    var v;
                    var k;
                    if (l.tag === undefined) {
                      v = true;
                      k = '';
                    } else {
                      v = l.tag[0] == '/';
                      k = v ? l.tag.substring(1) : l.tag;
                    }
                    var _ = r[k];
                    if (i.match(/^\/?}/)) {
                      var x = i.current() == '/}';
                      if (x && !v) {
                        c(l);
                      }
                      if (l.tag == '/template' || l.tag == '/deltemplate') {
                        l.variables = u(null, 'ij');
                        l.indent = 0;
                      } else {
                        l.indent -=
                          t.indentUnit * (x || n.indexOf(l.tag) == -1 ? 2 : 1);
                      }
                      l.soyState.pop();
                      return 'keyword';
                    } else if (i.match(/^([\w?]+)(?==)/)) {
                      if (
                        l.context &&
                        l.context.tag == k &&
                        i.current() == 'kind' &&
                        (p = i.match(/^="([^"]+)/, false))
                      ) {
                        var y = p[1];
                        l.context.kind = y;
                        var w = a[y] || a.html;
                        var E = o(l.localStates);
                        if (E.mode.indent) {
                          l.indent += E.mode.indent(E.state, '', '');
                        }
                        l.localStates.push({ mode: w, state: e.startState(w) });
                      }
                      return 'attribute';
                    }
                    return m(i, l);
                  case 'template-call-expression':
                    if (i.match(/^([\w-?]+)(?==)/)) {
                      return 'attribute';
                    } else if (i.eat('>')) {
                      l.soyState.pop();
                      return 'keyword';
                    } else if (i.eat('/>')) {
                      l.soyState.pop();
                      return 'keyword';
                    }
                    return m(i, l);
                  case 'literal':
                    if (i.match('{/literal}', false)) {
                      l.soyState.pop();
                      return this.token(i, l);
                    }
                    return s(i, l, /\{\/literal}/);
                }
                if (i.match('{literal}')) {
                  l.indent += t.indentUnit;
                  l.soyState.push('literal');
                  l.context = new d(l.context, 'literal', l.variables);
                  return 'keyword';
                } else if ((p = i.match(/^\{([/@\\]?\w+\??)(?=$|[\s}]|\/[/*])/))) {
                  var S = l.tag;
                  l.tag = p[1];
                  var v = l.tag[0] == '/';
                  var T = !!r[l.tag];
                  var k = v ? l.tag.substring(1) : l.tag;
                  var _ = r[k];
                  if (l.tag != '/switch')
                    l.indent +=
                      ((v || (_ && _.reduceIndent)) && S != 'switch' ? 1 : 2) *
                      t.indentUnit;
                  l.soyState.push('tag');
                  var I = false;
                  if (_) {
                    if (!v) {
                      if (_.soyState) l.soyState.push(_.soyState);
                    }
                    if (!_.noEndTag && (T || !v)) {
                      l.context = new d(
                        l.context,
                        l.tag,
                        _.variableScope ? l.variables : null
                      );
                    } else if (v) {
                      if (!l.context || l.context.tag != k) {
                        I = true;
                      } else if (l.context) {
                        if (l.context.kind) {
                          l.localStates.pop();
                          var E = o(l.localStates);
                          if (E.mode.indent) {
                            l.indent -= E.mode.indent(E.state, '', '');
                          }
                        }
                        c(l);
                      }
                    }
                  } else if (v) {
                    I = true;
                  }
                  return (I ? 'error ' : '') + 'keyword';
                } else if (i.eat('{')) {
                  l.tag = 'print';
                  l.indent += 2 * t.indentUnit;
                  l.soyState.push('tag');
                  return 'keyword';
                } else if (!l.context && i.match(/\bimport\b/)) {
                  l.soyState.push('import');
                  l.indent += 2 * t.indentUnit;
                  return 'keyword';
                } else if ((p = i.match('<{'))) {
                  l.soyState.push('template-call-expression');
                  l.indent += 2 * t.indentUnit;
                  l.soyState.push('tag');
                  return 'keyword';
                } else if ((p = i.match('</>'))) {
                  l.indent -= 1 * t.indentUnit;
                  return 'keyword';
                }
                return s(i, l, /\{|\s+\/\/|\/\*/);
              },
              indent: function (r, n, i) {
                var a = r.indent,
                  s = o(r.soyState);
                if (s == 'comment') return e.Pass;
                if (s == 'literal') {
                  if (/^\{\/literal}/.test(n)) a -= t.indentUnit;
                } else {
                  if (/^\s*\{\/(template|deltemplate)\b/.test(n)) return 0;
                  if (/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(n))
                    a -= t.indentUnit;
                  if (r.tag != 'switch' && /^\{(case|default)\b/.test(n))
                    a -= t.indentUnit;
                  if (/^\{\/switch\b/.test(n)) a -= t.indentUnit;
                }
                var l = o(r.localStates);
                if (a && l.mode.indent) {
                  a += l.mode.indent(l.state, n, i);
                }
                return a;
              },
              innerMode: function (e) {
                if (e.soyState.length && o(e.soyState) != 'literal') return null;
                else return o(e.localStates);
              },
              electricInput:
                /^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,
              lineComment: '//',
              blockCommentStart: '/*',
              blockCommentEnd: '*/',
              blockCommentContinue: ' * ',
              useInnerComments: false,
              fold: 'indent',
            };
          },
          'htmlmixed'
        );
        e.registerHelper('wordChars', 'soy', /[\w$]/);
        e.registerHelper(
          'hintWords',
          'soy',
          Object.keys(r).concat(['css', 'debugger'])
        );
        e.defineMIME('text/x-soy', 'soy');
      });
    },
    63982: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('sparql', function (e) {
          var t = e.indentUnit;
          var r;
          function n(e) {
            return new RegExp('^(?:' + e.join('|') + ')$', 'i');
          }
          var i = n([
            'str',
            'lang',
            'langmatches',
            'datatype',
            'bound',
            'sameterm',
            'isiri',
            'isuri',
            'iri',
            'uri',
            'bnode',
            'count',
            'sum',
            'min',
            'max',
            'avg',
            'sample',
            'group_concat',
            'rand',
            'abs',
            'ceil',
            'floor',
            'round',
            'concat',
            'substr',
            'strlen',
            'replace',
            'ucase',
            'lcase',
            'encode_for_uri',
            'contains',
            'strstarts',
            'strends',
            'strbefore',
            'strafter',
            'year',
            'month',
            'day',
            'hours',
            'minutes',
            'seconds',
            'timezone',
            'tz',
            'now',
            'uuid',
            'struuid',
            'md5',
            'sha1',
            'sha256',
            'sha384',
            'sha512',
            'coalesce',
            'if',
            'strlang',
            'strdt',
            'isnumeric',
            'regex',
            'exists',
            'isblank',
            'isliteral',
            'a',
            'bind',
          ]);
          var a = n([
            'base',
            'prefix',
            'select',
            'distinct',
            'reduced',
            'construct',
            'describe',
            'ask',
            'from',
            'named',
            'where',
            'order',
            'limit',
            'offset',
            'filter',
            'optional',
            'graph',
            'by',
            'asc',
            'desc',
            'as',
            'having',
            'undef',
            'values',
            'group',
            'minus',
            'in',
            'not',
            'service',
            'silent',
            'using',
            'insert',
            'delete',
            'union',
            'true',
            'false',
            'with',
            'data',
            'copy',
            'to',
            'move',
            'add',
            'create',
            'drop',
            'clear',
            'load',
          ]);
          var o = /[*+\-<>=&|\^\/!\?]/;
          function s(e, t) {
            var n = e.next();
            r = null;
            if (n == '$' || n == '?') {
              if (n == '?' && e.match(/\s/, false)) {
                return 'operator';
              }
              e.match(
                /^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/
              );
              return 'variable-2';
            } else if (n == '<' && !e.match(/^[\s\u00a0=]/, false)) {
              e.match(/^[^\s\u00a0>]*>?/);
              return 'atom';
            } else if (n == '"' || n == "'") {
              t.tokenize = u(n);
              return t.tokenize(e, t);
            } else if (/[{}\(\),\.;\[\]]/.test(n)) {
              r = n;
              return 'bracket';
            } else if (n == '#') {
              e.skipToEnd();
              return 'comment';
            } else if (n === '^') {
              n = e.peek();
              if (n === '^') e.eat('^');
              else e.eatWhile(o);
              return 'operator';
            } else if (o.test(n)) {
              e.eatWhile(o);
              return 'operator';
            } else if (n == ':') {
              l(e);
              return 'atom';
            } else if (n == '@') {
              e.eatWhile(/[a-z\d\-]/i);
              return 'meta';
            } else {
              e.eatWhile(/[_\w\d]/);
              if (e.eat(':')) {
                l(e);
                return 'atom';
              }
              var s = e.current();
              if (i.test(s)) return 'builtin';
              else if (a.test(s)) return 'keyword';
              else return 'variable';
            }
          }
          function l(e) {
            e.match(
              /(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i
            );
          }
          function u(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  r.tokenize = s;
                  break;
                }
                n = !n && i == '\\';
              }
              return 'string';
            };
          }
          function c(e, t, r) {
            e.context = { prev: e.context, indent: e.indent, col: r, type: t };
          }
          function f(e) {
            e.indent = e.context.indent;
            e.context = e.context.prev;
          }
          return {
            startState: function () {
              return { tokenize: s, context: null, indent: 0, col: 0 };
            },
            token: function (e, t) {
              if (e.sol()) {
                if (t.context && t.context.align == null) t.context.align = false;
                t.indent = e.indentation();
              }
              if (e.eatSpace()) return null;
              var n = t.tokenize(e, t);
              if (
                n != 'comment' &&
                t.context &&
                t.context.align == null &&
                t.context.type != 'pattern'
              ) {
                t.context.align = true;
              }
              if (r == '(') c(t, ')', e.column());
              else if (r == '[') c(t, ']', e.column());
              else if (r == '{') c(t, '}', e.column());
              else if (/[\]\}\)]/.test(r)) {
                while (t.context && t.context.type == 'pattern') f(t);
                if (t.context && r == t.context.type) {
                  f(t);
                  if (r == '}' && t.context && t.context.type == 'pattern') f(t);
                }
              } else if (r == '.' && t.context && t.context.type == 'pattern') f(t);
              else if (/atom|string|variable/.test(n) && t.context) {
                if (/[\}\]]/.test(t.context.type)) c(t, 'pattern', e.column());
                else if (t.context.type == 'pattern' && !t.context.align) {
                  t.context.align = true;
                  t.context.col = e.column();
                }
              }
              return n;
            },
            indent: function (e, r) {
              var n = r && r.charAt(0);
              var i = e.context;
              if (/[\]\}]/.test(n)) while (i && i.type == 'pattern') i = i.prev;
              var a = i && n == i.type;
              if (!i) return 0;
              else if (i.type == 'pattern') return i.col;
              else if (i.align) return i.col + (a ? 0 : 1);
              else return i.indent + (a ? 0 : t);
            },
            lineComment: '#',
          };
        });
        e.defineMIME('application/sparql-query', 'sparql');
      });
    },
    63138: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('spreadsheet', function () {
          return {
            startState: function () {
              return { stringType: null, stack: [] };
            },
            token: function (e, t) {
              if (!e) return;
              if (t.stack.length === 0) {
                if (e.peek() == '"' || e.peek() == "'") {
                  t.stringType = e.peek();
                  e.next();
                  t.stack.unshift('string');
                }
              }
              switch (t.stack[0]) {
                case 'string':
                  while (t.stack[0] === 'string' && !e.eol()) {
                    if (e.peek() === t.stringType) {
                      e.next();
                      t.stack.shift();
                    } else if (e.peek() === '\\') {
                      e.next();
                      e.next();
                    } else {
                      e.match(/^.[^\\\"\']*/);
                    }
                  }
                  return 'string';
                case 'characterClass':
                  while (t.stack[0] === 'characterClass' && !e.eol()) {
                    if (!(e.match(/^[^\]\\]+/) || e.match(/^\\./))) t.stack.shift();
                  }
                  return 'operator';
              }
              var r = e.peek();
              switch (r) {
                case '[':
                  e.next();
                  t.stack.unshift('characterClass');
                  return 'bracket';
                case ':':
                  e.next();
                  return 'operator';
                case '\\':
                  if (e.match(/\\[a-z]+/)) return 'string-2';
                  else {
                    e.next();
                    return 'atom';
                  }
                case '.':
                case ',':
                case ';':
                case '*':
                case '-':
                case '+':
                case '^':
                case '<':
                case '/':
                case '=':
                  e.next();
                  return 'atom';
                case '$':
                  e.next();
                  return 'builtin';
              }
              if (e.match(/\d+/)) {
                if (e.match(/^\w+/)) return 'error';
                return 'number';
              } else if (e.match(/^[a-zA-Z_]\w*/)) {
                if (e.match(/(?=[\(.])/, false)) return 'keyword';
                return 'variable-2';
              } else if (['[', ']', '(', ')', '{', '}'].indexOf(r) != -1) {
                e.next();
                return 'bracket';
              } else if (!e.eatSpace()) {
                e.next();
              }
              return null;
            },
          };
        });
        e.defineMIME('text/x-spreadsheet', 'spreadsheet');
      });
    },
    60742: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('stylus', function (e) {
          var m = e.indentUnit,
            p = '',
            v = g(t),
            k = /^(a|b|i|s|col|em)$/i,
            _ = g(a),
            x = g(o),
            y = g(u),
            w = g(l),
            E = g(r),
            S = h(r),
            T = g(i),
            I = g(n),
            A = g(s),
            C = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/,
            z = h(c),
            R = g(f),
            M = new RegExp(/^\-(moz|ms|o|webkit)-/i),
            O = g(d),
            N = '',
            $ = {},
            L,
            D,
            P,
            U;
          while (p.length < m) p += ' ';
          function F(e, t) {
            N = e.string.match(
              /(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/
            );
            t.context.line.firstWord = N ? N[0].replace(/^\s*/, '') : '';
            t.context.line.indent = e.indentation();
            L = e.peek();
            if (e.match('//')) {
              e.skipToEnd();
              return ['comment', 'comment'];
            }
            if (e.match('/*')) {
              t.tokenize = q;
              return q(e, t);
            }
            if (L == '"' || L == "'") {
              e.next();
              t.tokenize = W(L);
              return t.tokenize(e, t);
            }
            if (L == '@') {
              e.next();
              e.eatWhile(/[\w\\-]/);
              return ['def', e.current()];
            }
            if (L == '#') {
              e.next();
              if (e.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i)) {
                return ['atom', 'atom'];
              }
              if (e.match(/^[a-z][\w-]*/i)) {
                return ['builtin', 'hash'];
              }
            }
            if (e.match(M)) {
              return ['meta', 'vendor-prefixes'];
            }
            if (e.match(/^-?[0-9]?\.?[0-9]/)) {
              e.eatWhile(/[a-z%]/i);
              return ['number', 'unit'];
            }
            if (L == '!') {
              e.next();
              return [
                e.match(/^(important|optional)/i) ? 'keyword' : 'operator',
                'important',
              ];
            }
            if (L == '.' && e.match(/^\.[a-z][\w-]*/i)) {
              return ['qualifier', 'qualifier'];
            }
            if (e.match(S)) {
              if (e.peek() == '(') t.tokenize = j;
              return ['property', 'word'];
            }
            if (e.match(/^[a-z][\w-]*\(/i)) {
              e.backUp(1);
              return ['keyword', 'mixin'];
            }
            if (e.match(/^(\+|-)[a-z][\w-]*\(/i)) {
              e.backUp(1);
              return ['keyword', 'block-mixin'];
            }
            if (e.string.match(/^\s*&/) && e.match(/^[-_]+[a-z][\w-]*/)) {
              return ['qualifier', 'qualifier'];
            }
            if (e.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)) {
              e.backUp(1);
              return ['variable-3', 'reference'];
            }
            if (e.match(/^&{1}\s*$/)) {
              return ['variable-3', 'reference'];
            }
            if (e.match(z)) {
              return ['operator', 'operator'];
            }
            if (e.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)) {
              if (e.match(/^(\.|\[)[\w-\'\"\]]+/i, false)) {
                if (!K(e.current())) {
                  e.match('.');
                  return ['variable-2', 'variable-name'];
                }
              }
              return ['variable-2', 'word'];
            }
            if (e.match(C)) {
              return ['operator', e.current()];
            }
            if (/[:;,{}\[\]\(\)]/.test(L)) {
              e.next();
              return [null, L];
            }
            e.next();
            return [null, null];
          }
          function q(e, t) {
            var r = false,
              n;
            while ((n = e.next()) != null) {
              if (r && n == '/') {
                t.tokenize = null;
                break;
              }
              r = n == '*';
            }
            return ['comment', 'comment'];
          }
          function W(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  if (e == ')') t.backUp(1);
                  break;
                }
                n = !n && i == '\\';
              }
              if (i == e || (!n && e != ')')) r.tokenize = null;
              return ['string', 'string'];
            };
          }
          function j(e, t) {
            e.next();
            if (!e.match(/\s*[\"\')]/, false)) t.tokenize = W(')');
            else t.tokenize = null;
            return [null, '('];
          }
          function B(e, t, r, n) {
            this.type = e;
            this.indent = t;
            this.prev = r;
            this.line = n || { firstWord: '', indent: 0 };
          }
          function G(e, t, r, n) {
            n = n >= 0 ? n : m;
            e.context = new B(r, t.indentation() + n, e.context);
            return r;
          }
          function H(e, t) {
            var r = e.context.indent - m;
            t = t || false;
            e.context = e.context.prev;
            if (t) e.context.indent = r;
            return e.context.type;
          }
          function V(e, t, r) {
            return $[r.context.type](e, t, r);
          }
          function Z(e, t, r, n) {
            for (var i = n || 1; i > 0; i--) r.context = r.context.prev;
            return V(e, t, r);
          }
          function K(e) {
            return e.toLowerCase() in v;
          }
          function Y(e) {
            e = e.toLowerCase();
            return e in _ || e in A;
          }
          function X(e) {
            return e.toLowerCase() in R;
          }
          function J(e) {
            return e.toLowerCase().match(M);
          }
          function Q(e) {
            var t = e.toLowerCase();
            var r = 'variable-2';
            if (K(e)) r = 'tag';
            else if (X(e)) r = 'block-keyword';
            else if (Y(e)) r = 'property';
            else if (t in y || t in O) r = 'atom';
            else if (t == 'return' || t in w) r = 'keyword';
            else if (e.match(/^[A-Z]/)) r = 'string';
            return r;
          }
          function ee(e, t) {
            return (
              (ie(t) && (e == '{' || e == ']' || e == 'hash' || e == 'qualifier')) ||
              e == 'block-mixin'
            );
          }
          function te(e, t) {
            return e == '{' && t.match(/^\s*\$?[\w-]+/i, false);
          }
          function re(e, t) {
            return e == ':' && t.match(/^[a-z-]+/, false);
          }
          function ne(e) {
            return e.sol() || e.string.match(new RegExp('^\\s*' + b(e.current())));
          }
          function ie(e) {
            return e.eol() || e.match(/^\s*$/, false);
          }
          function ae(e) {
            var t = /^\s*[-_]*[a-z0-9]+[\w-]*/i;
            var r = typeof e == 'string' ? e.match(t) : e.string.match(t);
            return r ? r[0].replace(/^\s*/, '') : '';
          }
          $.block = function (e, t, r) {
            if ((e == 'comment' && ne(t)) || (e == ',' && ie(t)) || e == 'mixin') {
              return G(r, t, 'block', 0);
            }
            if (te(e, t)) {
              return G(r, t, 'interpolation');
            }
            if (ie(t) && e == ']') {
              if (!/^\s*(\.|#|:|\[|\*|&)/.test(t.string) && !K(ae(t))) {
                return G(r, t, 'block', 0);
              }
            }
            if (ee(e, t)) {
              return G(r, t, 'block');
            }
            if (e == '}' && ie(t)) {
              return G(r, t, 'block', 0);
            }
            if (e == 'variable-name') {
              if (t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || X(ae(t))) {
                return G(r, t, 'variableName');
              } else {
                return G(r, t, 'variableName', 0);
              }
            }
            if (e == '=') {
              if (!ie(t) && !X(ae(t))) {
                return G(r, t, 'block', 0);
              }
              return G(r, t, 'block');
            }
            if (e == '*') {
              if (ie(t) || t.match(/\s*(,|\.|#|\[|:|{)/, false)) {
                U = 'tag';
                return G(r, t, 'block');
              }
            }
            if (re(e, t)) {
              return G(r, t, 'pseudo');
            }
            if (/@(font-face|media|supports|(-moz-)?document)/.test(e)) {
              return G(r, t, ie(t) ? 'block' : 'atBlock');
            }
            if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) {
              return G(r, t, 'keyframes');
            }
            if (/@extends?/.test(e)) {
              return G(r, t, 'extend', 0);
            }
            if (e && e.charAt(0) == '@') {
              if (t.indentation() > 0 && Y(t.current().slice(1))) {
                U = 'variable-2';
                return 'block';
              }
              if (/(@import|@require|@charset)/.test(e)) {
                return G(r, t, 'block', 0);
              }
              return G(r, t, 'block');
            }
            if (e == 'reference' && ie(t)) {
              return G(r, t, 'block');
            }
            if (e == '(') {
              return G(r, t, 'parens');
            }
            if (e == 'vendor-prefixes') {
              return G(r, t, 'vendorPrefixes');
            }
            if (e == 'word') {
              var n = t.current();
              U = Q(n);
              if (U == 'property') {
                if (ne(t)) {
                  return G(r, t, 'block', 0);
                } else {
                  U = 'atom';
                  return 'block';
                }
              }
              if (U == 'tag') {
                if (/embed|menu|pre|progress|sub|table/.test(n)) {
                  if (Y(ae(t))) {
                    U = 'atom';
                    return 'block';
                  }
                }
                if (t.string.match(new RegExp('\\[\\s*' + n + '|' + n + '\\s*\\]'))) {
                  U = 'atom';
                  return 'block';
                }
                if (k.test(n)) {
                  if (
                    (ne(t) && t.string.match(/=/)) ||
                    (!ne(t) && !t.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) && !K(ae(t)))
                  ) {
                    U = 'variable-2';
                    if (X(ae(t))) return 'block';
                    return G(r, t, 'block', 0);
                  }
                }
                if (ie(t)) return G(r, t, 'block');
              }
              if (U == 'block-keyword') {
                U = 'keyword';
                if (t.current(/(if|unless)/) && !ne(t)) {
                  return 'block';
                }
                return G(r, t, 'block');
              }
              if (n == 'return') return G(r, t, 'block', 0);
              if (U == 'variable-2' && t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)) {
                return G(r, t, 'block');
              }
            }
            return r.context.type;
          };
          $.parens = function (e, t, r) {
            if (e == '(') return G(r, t, 'parens');
            if (e == ')') {
              if (r.context.prev.type == 'parens') {
                return H(r);
              }
              if (
                (t.string.match(/^[a-z][\w-]*\(/i) && ie(t)) ||
                X(ae(t)) ||
                /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(ae(t)) ||
                (!t.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && K(ae(t)))
              ) {
                return G(r, t, 'block');
              }
              if (
                t.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) ||
                t.string.match(/^\s*(\(|\)|[0-9])/) ||
                t.string.match(/^\s+[a-z][\w-]*\(/i) ||
                t.string.match(/^\s+[\$-]?[a-z]/i)
              ) {
                return G(r, t, 'block', 0);
              }
              if (ie(t)) return G(r, t, 'block');
              else return G(r, t, 'block', 0);
            }
            if (e && e.charAt(0) == '@' && Y(t.current().slice(1))) {
              U = 'variable-2';
            }
            if (e == 'word') {
              var n = t.current();
              U = Q(n);
              if (U == 'tag' && k.test(n)) {
                U = 'variable-2';
              }
              if (U == 'property' || n == 'to') U = 'atom';
            }
            if (e == 'variable-name') {
              return G(r, t, 'variableName');
            }
            if (re(e, t)) {
              return G(r, t, 'pseudo');
            }
            return r.context.type;
          };
          $.vendorPrefixes = function (e, t, r) {
            if (e == 'word') {
              U = 'property';
              return G(r, t, 'block', 0);
            }
            return H(r);
          };
          $.pseudo = function (e, t, r) {
            if (!Y(ae(t.string))) {
              t.match(/^[a-z-]+/);
              U = 'variable-3';
              if (ie(t)) return G(r, t, 'block');
              return H(r);
            }
            return Z(e, t, r);
          };
          $.atBlock = function (e, t, r) {
            if (e == '(') return G(r, t, 'atBlock_parens');
            if (ee(e, t)) {
              return G(r, t, 'block');
            }
            if (te(e, t)) {
              return G(r, t, 'interpolation');
            }
            if (e == 'word') {
              var n = t.current().toLowerCase();
              if (/^(only|not|and|or)$/.test(n)) U = 'keyword';
              else if (E.hasOwnProperty(n)) U = 'tag';
              else if (I.hasOwnProperty(n)) U = 'attribute';
              else if (T.hasOwnProperty(n)) U = 'property';
              else if (x.hasOwnProperty(n)) U = 'string-2';
              else U = Q(t.current());
              if (U == 'tag' && ie(t)) {
                return G(r, t, 'block');
              }
            }
            if (e == 'operator' && /^(not|and|or)$/.test(t.current())) {
              U = 'keyword';
            }
            return r.context.type;
          };
          $.atBlock_parens = function (e, t, r) {
            if (e == '{' || e == '}') return r.context.type;
            if (e == ')') {
              if (ie(t)) return G(r, t, 'block');
              else return G(r, t, 'atBlock');
            }
            if (e == 'word') {
              var n = t.current().toLowerCase();
              U = Q(n);
              if (/^(max|min)/.test(n)) U = 'property';
              if (U == 'tag') {
                k.test(n) ? (U = 'variable-2') : (U = 'atom');
              }
              return r.context.type;
            }
            return $.atBlock(e, t, r);
          };
          $.keyframes = function (e, t, r) {
            if (
              t.indentation() == '0' &&
              ((e == '}' && ne(t)) ||
                e == ']' ||
                e == 'hash' ||
                e == 'qualifier' ||
                K(t.current()))
            ) {
              return Z(e, t, r);
            }
            if (e == '{') return G(r, t, 'keyframes');
            if (e == '}') {
              if (ne(t)) return H(r, true);
              else return G(r, t, 'keyframes');
            }
            if (e == 'unit' && /^[0-9]+\%$/.test(t.current())) {
              return G(r, t, 'keyframes');
            }
            if (e == 'word') {
              U = Q(t.current());
              if (U == 'block-keyword') {
                U = 'keyword';
                return G(r, t, 'keyframes');
              }
            }
            if (/@(font-face|media|supports|(-moz-)?document)/.test(e)) {
              return G(r, t, ie(t) ? 'block' : 'atBlock');
            }
            if (e == 'mixin') {
              return G(r, t, 'block', 0);
            }
            return r.context.type;
          };
          $.interpolation = function (e, t, r) {
            if (e == '{') H(r) && G(r, t, 'block');
            if (e == '}') {
              if (
                t.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) ||
                (t.string.match(/^\s*[a-z]/i) && K(ae(t)))
              ) {
                return G(r, t, 'block');
              }
              if (!t.string.match(/^(\{|\s*\&)/) || t.match(/\s*[\w-]/, false)) {
                return G(r, t, 'block', 0);
              }
              return G(r, t, 'block');
            }
            if (e == 'variable-name') {
              return G(r, t, 'variableName', 0);
            }
            if (e == 'word') {
              U = Q(t.current());
              if (U == 'tag') U = 'atom';
            }
            return r.context.type;
          };
          $.extend = function (e, t, r) {
            if (e == '[' || e == '=') return 'extend';
            if (e == ']') return H(r);
            if (e == 'word') {
              U = Q(t.current());
              return 'extend';
            }
            return H(r);
          };
          $.variableName = function (e, t, r) {
            if (
              e == 'string' ||
              e == '[' ||
              e == ']' ||
              t.current().match(/^(\.|\$)/)
            ) {
              if (t.current().match(/^\.[\w-]+/i)) U = 'variable-2';
              return 'variableName';
            }
            return Z(e, t, r);
          };
          return {
            startState: function (e) {
              return {
                tokenize: null,
                state: 'block',
                context: new B('block', e || 0, null),
              };
            },
            token: function (e, t) {
              if (!t.tokenize && e.eatSpace()) return null;
              D = (t.tokenize || F)(e, t);
              if (D && typeof D == 'object') {
                P = D[1];
                D = D[0];
              }
              U = D;
              t.state = $[t.state](P, e, t);
              return U;
            },
            indent: function (e, t, r) {
              var n = e.context,
                i = t && t.charAt(0),
                a = n.indent,
                o = ae(t),
                s = r.match(/^\s*/)[0].replace(/\t/g, p).length,
                l = e.context.prev ? e.context.prev.line.firstWord : '',
                u = e.context.prev ? e.context.prev.line.indent : s;
              if (
                n.prev &&
                ((i == '}' &&
                  (n.type == 'block' ||
                    n.type == 'atBlock' ||
                    n.type == 'keyframes')) ||
                  (i == ')' && (n.type == 'parens' || n.type == 'atBlock_parens')) ||
                  (i == '{' && n.type == 'at'))
              ) {
                a = n.indent - m;
              } else if (!/(\})/.test(i)) {
                if (
                  /@|\$|\d/.test(i) ||
                  /^\{/.test(t) ||
                  /^\s*\/(\/|\*)/.test(t) ||
                  /^\s*\/\*/.test(l) ||
                  /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(t) ||
                  /^(\+|-)?[a-z][\w-]*\(/i.test(t) ||
                  /^return/.test(t) ||
                  X(o)
                ) {
                  a = s;
                } else if (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(i) || K(o)) {
                  if (/\,\s*$/.test(l)) {
                    a = u;
                  } else if (
                    /^\s+/.test(r) &&
                    (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(l) || K(l))
                  ) {
                    a = s <= u ? u : u + m;
                  } else {
                    a = s;
                  }
                } else if (!/,\s*$/.test(r) && (J(o) || Y(o))) {
                  if (X(l)) {
                    a = s <= u ? u : u + m;
                  } else if (/^\{/.test(l)) {
                    a = s <= u ? s : u + m;
                  } else if (J(l) || Y(l)) {
                    a = s >= u ? u : s;
                  } else if (
                    /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(l) ||
                    /=\s*$/.test(l) ||
                    K(l) ||
                    /^\$[\w-\.\[\]\'\"]/.test(l)
                  ) {
                    a = u + m;
                  } else {
                    a = s;
                  }
                }
              }
              return a;
            },
            electricChars: '}',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            blockCommentContinue: ' * ',
            lineComment: '//',
            fold: 'indent',
          };
        });
        var t = [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'bgsound',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'nobr',
          'noframes',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
        ];
        var r = ['domain', 'regexp', 'url-prefix', 'url'];
        var n = [
          'all',
          'aural',
          'braille',
          'handheld',
          'print',
          'projection',
          'screen',
          'tty',
          'tv',
          'embossed',
        ];
        var i = [
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'device-width',
          'min-device-width',
          'max-device-width',
          'device-height',
          'min-device-height',
          'max-device-height',
          'aspect-ratio',
          'min-aspect-ratio',
          'max-aspect-ratio',
          'device-aspect-ratio',
          'min-device-aspect-ratio',
          'max-device-aspect-ratio',
          'color',
          'min-color',
          'max-color',
          'color-index',
          'min-color-index',
          'max-color-index',
          'monochrome',
          'min-monochrome',
          'max-monochrome',
          'resolution',
          'min-resolution',
          'max-resolution',
          'scan',
          'grid',
        ];
        var a = [
          'align-content',
          'align-items',
          'align-self',
          'alignment-adjust',
          'alignment-baseline',
          'anchor-point',
          'animation',
          'animation-delay',
          'animation-direction',
          'animation-duration',
          'animation-fill-mode',
          'animation-iteration-count',
          'animation-name',
          'animation-play-state',
          'animation-timing-function',
          'appearance',
          'azimuth',
          'backface-visibility',
          'background',
          'background-attachment',
          'background-clip',
          'background-color',
          'background-image',
          'background-origin',
          'background-position',
          'background-repeat',
          'background-size',
          'baseline-shift',
          'binding',
          'bleed',
          'bookmark-label',
          'bookmark-level',
          'bookmark-state',
          'bookmark-target',
          'border',
          'border-bottom',
          'border-bottom-color',
          'border-bottom-left-radius',
          'border-bottom-right-radius',
          'border-bottom-style',
          'border-bottom-width',
          'border-collapse',
          'border-color',
          'border-image',
          'border-image-outset',
          'border-image-repeat',
          'border-image-slice',
          'border-image-source',
          'border-image-width',
          'border-left',
          'border-left-color',
          'border-left-style',
          'border-left-width',
          'border-radius',
          'border-right',
          'border-right-color',
          'border-right-style',
          'border-right-width',
          'border-spacing',
          'border-style',
          'border-top',
          'border-top-color',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-top-style',
          'border-top-width',
          'border-width',
          'bottom',
          'box-decoration-break',
          'box-shadow',
          'box-sizing',
          'break-after',
          'break-before',
          'break-inside',
          'caption-side',
          'clear',
          'clip',
          'color',
          'color-profile',
          'column-count',
          'column-fill',
          'column-gap',
          'column-rule',
          'column-rule-color',
          'column-rule-style',
          'column-rule-width',
          'column-span',
          'column-width',
          'columns',
          'content',
          'counter-increment',
          'counter-reset',
          'crop',
          'cue',
          'cue-after',
          'cue-before',
          'cursor',
          'direction',
          'display',
          'dominant-baseline',
          'drop-initial-after-adjust',
          'drop-initial-after-align',
          'drop-initial-before-adjust',
          'drop-initial-before-align',
          'drop-initial-size',
          'drop-initial-value',
          'elevation',
          'empty-cells',
          'fit',
          'fit-position',
          'flex',
          'flex-basis',
          'flex-direction',
          'flex-flow',
          'flex-grow',
          'flex-shrink',
          'flex-wrap',
          'float',
          'float-offset',
          'flow-from',
          'flow-into',
          'font',
          'font-feature-settings',
          'font-family',
          'font-kerning',
          'font-language-override',
          'font-size',
          'font-size-adjust',
          'font-stretch',
          'font-style',
          'font-synthesis',
          'font-variant',
          'font-variant-alternates',
          'font-variant-caps',
          'font-variant-east-asian',
          'font-variant-ligatures',
          'font-variant-numeric',
          'font-variant-position',
          'font-weight',
          'grid',
          'grid-area',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-auto-position',
          'grid-auto-rows',
          'grid-column',
          'grid-column-end',
          'grid-column-start',
          'grid-row',
          'grid-row-end',
          'grid-row-start',
          'grid-template',
          'grid-template-areas',
          'grid-template-columns',
          'grid-template-rows',
          'hanging-punctuation',
          'height',
          'hyphens',
          'icon',
          'image-orientation',
          'image-rendering',
          'image-resolution',
          'inline-box-align',
          'justify-content',
          'left',
          'letter-spacing',
          'line-break',
          'line-height',
          'line-stacking',
          'line-stacking-ruby',
          'line-stacking-shift',
          'line-stacking-strategy',
          'list-style',
          'list-style-image',
          'list-style-position',
          'list-style-type',
          'margin',
          'margin-bottom',
          'margin-left',
          'margin-right',
          'margin-top',
          'marker-offset',
          'marks',
          'marquee-direction',
          'marquee-loop',
          'marquee-play-count',
          'marquee-speed',
          'marquee-style',
          'max-height',
          'max-width',
          'min-height',
          'min-width',
          'move-to',
          'nav-down',
          'nav-index',
          'nav-left',
          'nav-right',
          'nav-up',
          'object-fit',
          'object-position',
          'opacity',
          'order',
          'orphans',
          'outline',
          'outline-color',
          'outline-offset',
          'outline-style',
          'outline-width',
          'overflow',
          'overflow-style',
          'overflow-wrap',
          'overflow-x',
          'overflow-y',
          'padding',
          'padding-bottom',
          'padding-left',
          'padding-right',
          'padding-top',
          'page',
          'page-break-after',
          'page-break-before',
          'page-break-inside',
          'page-policy',
          'pause',
          'pause-after',
          'pause-before',
          'perspective',
          'perspective-origin',
          'pitch',
          'pitch-range',
          'play-during',
          'position',
          'presentation-level',
          'punctuation-trim',
          'quotes',
          'region-break-after',
          'region-break-before',
          'region-break-inside',
          'region-fragment',
          'rendering-intent',
          'resize',
          'rest',
          'rest-after',
          'rest-before',
          'richness',
          'right',
          'rotation',
          'rotation-point',
          'ruby-align',
          'ruby-overhang',
          'ruby-position',
          'ruby-span',
          'shape-image-threshold',
          'shape-inside',
          'shape-margin',
          'shape-outside',
          'size',
          'speak',
          'speak-as',
          'speak-header',
          'speak-numeral',
          'speak-punctuation',
          'speech-rate',
          'stress',
          'string-set',
          'tab-size',
          'table-layout',
          'target',
          'target-name',
          'target-new',
          'target-position',
          'text-align',
          'text-align-last',
          'text-decoration',
          'text-decoration-color',
          'text-decoration-line',
          'text-decoration-skip',
          'text-decoration-style',
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-position',
          'text-emphasis-style',
          'text-height',
          'text-indent',
          'text-justify',
          'text-outline',
          'text-overflow',
          'text-shadow',
          'text-size-adjust',
          'text-space-collapse',
          'text-transform',
          'text-underline-position',
          'text-wrap',
          'top',
          'transform',
          'transform-origin',
          'transform-style',
          'transition',
          'transition-delay',
          'transition-duration',
          'transition-property',
          'transition-timing-function',
          'unicode-bidi',
          'vertical-align',
          'visibility',
          'voice-balance',
          'voice-duration',
          'voice-family',
          'voice-pitch',
          'voice-range',
          'voice-rate',
          'voice-stress',
          'voice-volume',
          'volume',
          'white-space',
          'widows',
          'width',
          'will-change',
          'word-break',
          'word-spacing',
          'word-wrap',
          'z-index',
          'clip-path',
          'clip-rule',
          'mask',
          'enable-background',
          'filter',
          'flood-color',
          'flood-opacity',
          'lighting-color',
          'stop-color',
          'stop-opacity',
          'pointer-events',
          'color-interpolation',
          'color-interpolation-filters',
          'color-rendering',
          'fill',
          'fill-opacity',
          'fill-rule',
          'image-rendering',
          'marker',
          'marker-end',
          'marker-mid',
          'marker-start',
          'shape-rendering',
          'stroke',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-miterlimit',
          'stroke-opacity',
          'stroke-width',
          'text-rendering',
          'baseline-shift',
          'dominant-baseline',
          'glyph-orientation-horizontal',
          'glyph-orientation-vertical',
          'text-anchor',
          'writing-mode',
          'font-smoothing',
          'osx-font-smoothing',
        ];
        var o = [
          'scrollbar-arrow-color',
          'scrollbar-base-color',
          'scrollbar-dark-shadow-color',
          'scrollbar-face-color',
          'scrollbar-highlight-color',
          'scrollbar-shadow-color',
          'scrollbar-3d-light-color',
          'scrollbar-track-color',
          'shape-inside',
          'searchfield-cancel-button',
          'searchfield-decoration',
          'searchfield-results-button',
          'searchfield-results-decoration',
          'zoom',
        ];
        var s = [
          'font-family',
          'src',
          'unicode-range',
          'font-variant',
          'font-feature-settings',
          'font-stretch',
          'font-weight',
          'font-style',
        ];
        var l = [
          'aliceblue',
          'antiquewhite',
          'aqua',
          'aquamarine',
          'azure',
          'beige',
          'bisque',
          'black',
          'blanchedalmond',
          'blue',
          'blueviolet',
          'brown',
          'burlywood',
          'cadetblue',
          'chartreuse',
          'chocolate',
          'coral',
          'cornflowerblue',
          'cornsilk',
          'crimson',
          'cyan',
          'darkblue',
          'darkcyan',
          'darkgoldenrod',
          'darkgray',
          'darkgreen',
          'darkkhaki',
          'darkmagenta',
          'darkolivegreen',
          'darkorange',
          'darkorchid',
          'darkred',
          'darksalmon',
          'darkseagreen',
          'darkslateblue',
          'darkslategray',
          'darkturquoise',
          'darkviolet',
          'deeppink',
          'deepskyblue',
          'dimgray',
          'dodgerblue',
          'firebrick',
          'floralwhite',
          'forestgreen',
          'fuchsia',
          'gainsboro',
          'ghostwhite',
          'gold',
          'goldenrod',
          'gray',
          'grey',
          'green',
          'greenyellow',
          'honeydew',
          'hotpink',
          'indianred',
          'indigo',
          'ivory',
          'khaki',
          'lavender',
          'lavenderblush',
          'lawngreen',
          'lemonchiffon',
          'lightblue',
          'lightcoral',
          'lightcyan',
          'lightgoldenrodyellow',
          'lightgray',
          'lightgreen',
          'lightpink',
          'lightsalmon',
          'lightseagreen',
          'lightskyblue',
          'lightslategray',
          'lightsteelblue',
          'lightyellow',
          'lime',
          'limegreen',
          'linen',
          'magenta',
          'maroon',
          'mediumaquamarine',
          'mediumblue',
          'mediumorchid',
          'mediumpurple',
          'mediumseagreen',
          'mediumslateblue',
          'mediumspringgreen',
          'mediumturquoise',
          'mediumvioletred',
          'midnightblue',
          'mintcream',
          'mistyrose',
          'moccasin',
          'navajowhite',
          'navy',
          'oldlace',
          'olive',
          'olivedrab',
          'orange',
          'orangered',
          'orchid',
          'palegoldenrod',
          'palegreen',
          'paleturquoise',
          'palevioletred',
          'papayawhip',
          'peachpuff',
          'peru',
          'pink',
          'plum',
          'powderblue',
          'purple',
          'rebeccapurple',
          'red',
          'rosybrown',
          'royalblue',
          'saddlebrown',
          'salmon',
          'sandybrown',
          'seagreen',
          'seashell',
          'sienna',
          'silver',
          'skyblue',
          'slateblue',
          'slategray',
          'snow',
          'springgreen',
          'steelblue',
          'tan',
          'teal',
          'thistle',
          'tomato',
          'turquoise',
          'violet',
          'wheat',
          'white',
          'whitesmoke',
          'yellow',
          'yellowgreen',
        ];
        var u = [
          'above',
          'absolute',
          'activeborder',
          'additive',
          'activecaption',
          'afar',
          'after-white-space',
          'ahead',
          'alias',
          'all',
          'all-scroll',
          'alphabetic',
          'alternate',
          'always',
          'amharic',
          'amharic-abegede',
          'antialiased',
          'appworkspace',
          'arabic-indic',
          'armenian',
          'asterisks',
          'attr',
          'auto',
          'avoid',
          'avoid-column',
          'avoid-page',
          'avoid-region',
          'background',
          'backwards',
          'baseline',
          'below',
          'bidi-override',
          'binary',
          'bengali',
          'blink',
          'block',
          'block-axis',
          'bold',
          'bolder',
          'border',
          'border-box',
          'both',
          'bottom',
          'break',
          'break-all',
          'break-word',
          'bullets',
          'button',
          'button-bevel',
          'buttonface',
          'buttonhighlight',
          'buttonshadow',
          'buttontext',
          'calc',
          'cambodian',
          'capitalize',
          'caps-lock-indicator',
          'caption',
          'captiontext',
          'caret',
          'cell',
          'center',
          'checkbox',
          'circle',
          'cjk-decimal',
          'cjk-earthly-branch',
          'cjk-heavenly-stem',
          'cjk-ideographic',
          'clear',
          'clip',
          'close-quote',
          'col-resize',
          'collapse',
          'column',
          'compact',
          'condensed',
          'contain',
          'content',
          'contents',
          'content-box',
          'context-menu',
          'continuous',
          'copy',
          'counter',
          'counters',
          'cover',
          'crop',
          'cross',
          'crosshair',
          'currentcolor',
          'cursive',
          'cyclic',
          'dashed',
          'decimal',
          'decimal-leading-zero',
          'default',
          'default-button',
          'destination-atop',
          'destination-in',
          'destination-out',
          'destination-over',
          'devanagari',
          'disc',
          'discard',
          'disclosure-closed',
          'disclosure-open',
          'document',
          'dot-dash',
          'dot-dot-dash',
          'dotted',
          'double',
          'down',
          'e-resize',
          'ease',
          'ease-in',
          'ease-in-out',
          'ease-out',
          'element',
          'ellipse',
          'ellipsis',
          'embed',
          'end',
          'ethiopic',
          'ethiopic-abegede',
          'ethiopic-abegede-am-et',
          'ethiopic-abegede-gez',
          'ethiopic-abegede-ti-er',
          'ethiopic-abegede-ti-et',
          'ethiopic-halehame-aa-er',
          'ethiopic-halehame-aa-et',
          'ethiopic-halehame-am-et',
          'ethiopic-halehame-gez',
          'ethiopic-halehame-om-et',
          'ethiopic-halehame-sid-et',
          'ethiopic-halehame-so-et',
          'ethiopic-halehame-ti-er',
          'ethiopic-halehame-ti-et',
          'ethiopic-halehame-tig',
          'ethiopic-numeric',
          'ew-resize',
          'expanded',
          'extends',
          'extra-condensed',
          'extra-expanded',
          'fantasy',
          'fast',
          'fill',
          'fixed',
          'flat',
          'flex',
          'footnotes',
          'forwards',
          'from',
          'geometricPrecision',
          'georgian',
          'graytext',
          'groove',
          'gujarati',
          'gurmukhi',
          'hand',
          'hangul',
          'hangul-consonant',
          'hebrew',
          'help',
          'hidden',
          'hide',
          'higher',
          'highlight',
          'highlighttext',
          'hiragana',
          'hiragana-iroha',
          'horizontal',
          'hsl',
          'hsla',
          'icon',
          'ignore',
          'inactiveborder',
          'inactivecaption',
          'inactivecaptiontext',
          'infinite',
          'infobackground',
          'infotext',
          'inherit',
          'initial',
          'inline',
          'inline-axis',
          'inline-block',
          'inline-flex',
          'inline-table',
          'inset',
          'inside',
          'intrinsic',
          'invert',
          'italic',
          'japanese-formal',
          'japanese-informal',
          'justify',
          'kannada',
          'katakana',
          'katakana-iroha',
          'keep-all',
          'khmer',
          'korean-hangul-formal',
          'korean-hanja-formal',
          'korean-hanja-informal',
          'landscape',
          'lao',
          'large',
          'larger',
          'left',
          'level',
          'lighter',
          'line-through',
          'linear',
          'linear-gradient',
          'lines',
          'list-item',
          'listbox',
          'listitem',
          'local',
          'logical',
          'loud',
          'lower',
          'lower-alpha',
          'lower-armenian',
          'lower-greek',
          'lower-hexadecimal',
          'lower-latin',
          'lower-norwegian',
          'lower-roman',
          'lowercase',
          'ltr',
          'malayalam',
          'match',
          'matrix',
          'matrix3d',
          'media-controls-background',
          'media-current-time-display',
          'media-fullscreen-button',
          'media-mute-button',
          'media-play-button',
          'media-return-to-realtime-button',
          'media-rewind-button',
          'media-seek-back-button',
          'media-seek-forward-button',
          'media-slider',
          'media-sliderthumb',
          'media-time-remaining-display',
          'media-volume-slider',
          'media-volume-slider-container',
          'media-volume-sliderthumb',
          'medium',
          'menu',
          'menulist',
          'menulist-button',
          'menulist-text',
          'menulist-textfield',
          'menutext',
          'message-box',
          'middle',
          'min-intrinsic',
          'mix',
          'mongolian',
          'monospace',
          'move',
          'multiple',
          'myanmar',
          'n-resize',
          'narrower',
          'ne-resize',
          'nesw-resize',
          'no-close-quote',
          'no-drop',
          'no-open-quote',
          'no-repeat',
          'none',
          'normal',
          'not-allowed',
          'nowrap',
          'ns-resize',
          'numbers',
          'numeric',
          'nw-resize',
          'nwse-resize',
          'oblique',
          'octal',
          'open-quote',
          'optimizeLegibility',
          'optimizeSpeed',
          'oriya',
          'oromo',
          'outset',
          'outside',
          'outside-shape',
          'overlay',
          'overline',
          'padding',
          'padding-box',
          'painted',
          'page',
          'paused',
          'persian',
          'perspective',
          'plus-darker',
          'plus-lighter',
          'pointer',
          'polygon',
          'portrait',
          'pre',
          'pre-line',
          'pre-wrap',
          'preserve-3d',
          'progress',
          'push-button',
          'radial-gradient',
          'radio',
          'read-only',
          'read-write',
          'read-write-plaintext-only',
          'rectangle',
          'region',
          'relative',
          'repeat',
          'repeating-linear-gradient',
          'repeating-radial-gradient',
          'repeat-x',
          'repeat-y',
          'reset',
          'reverse',
          'rgb',
          'rgba',
          'ridge',
          'right',
          'rotate',
          'rotate3d',
          'rotateX',
          'rotateY',
          'rotateZ',
          'round',
          'row-resize',
          'rtl',
          'run-in',
          'running',
          's-resize',
          'sans-serif',
          'scale',
          'scale3d',
          'scaleX',
          'scaleY',
          'scaleZ',
          'scroll',
          'scrollbar',
          'scroll-position',
          'se-resize',
          'searchfield',
          'searchfield-cancel-button',
          'searchfield-decoration',
          'searchfield-results-button',
          'searchfield-results-decoration',
          'semi-condensed',
          'semi-expanded',
          'separate',
          'serif',
          'show',
          'sidama',
          'simp-chinese-formal',
          'simp-chinese-informal',
          'single',
          'skew',
          'skewX',
          'skewY',
          'skip-white-space',
          'slide',
          'slider-horizontal',
          'slider-vertical',
          'sliderthumb-horizontal',
          'sliderthumb-vertical',
          'slow',
          'small',
          'small-caps',
          'small-caption',
          'smaller',
          'solid',
          'somali',
          'source-atop',
          'source-in',
          'source-out',
          'source-over',
          'space',
          'spell-out',
          'square',
          'square-button',
          'start',
          'static',
          'status-bar',
          'stretch',
          'stroke',
          'sub',
          'subpixel-antialiased',
          'super',
          'sw-resize',
          'symbolic',
          'symbols',
          'table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row',
          'table-row-group',
          'tamil',
          'telugu',
          'text',
          'text-bottom',
          'text-top',
          'textarea',
          'textfield',
          'thai',
          'thick',
          'thin',
          'threeddarkshadow',
          'threedface',
          'threedhighlight',
          'threedlightshadow',
          'threedshadow',
          'tibetan',
          'tigre',
          'tigrinya-er',
          'tigrinya-er-abegede',
          'tigrinya-et',
          'tigrinya-et-abegede',
          'to',
          'top',
          'trad-chinese-formal',
          'trad-chinese-informal',
          'translate',
          'translate3d',
          'translateX',
          'translateY',
          'translateZ',
          'transparent',
          'ultra-condensed',
          'ultra-expanded',
          'underline',
          'up',
          'upper-alpha',
          'upper-armenian',
          'upper-greek',
          'upper-hexadecimal',
          'upper-latin',
          'upper-norwegian',
          'upper-roman',
          'uppercase',
          'urdu',
          'url',
          'var',
          'vertical',
          'vertical-text',
          'visible',
          'visibleFill',
          'visiblePainted',
          'visibleStroke',
          'visual',
          'w-resize',
          'wait',
          'wave',
          'wider',
          'window',
          'windowframe',
          'windowtext',
          'words',
          'x-large',
          'x-small',
          'xor',
          'xx-large',
          'xx-small',
          'bicubic',
          'optimizespeed',
          'grayscale',
          'row',
          'row-reverse',
          'wrap',
          'wrap-reverse',
          'column-reverse',
          'flex-start',
          'flex-end',
          'space-between',
          'space-around',
          'unset',
        ];
        var c = [
            'in',
            'and',
            'or',
            'not',
            'is not',
            'is a',
            'is',
            'isnt',
            'defined',
            'if unless',
          ],
          f = ['for', 'if', 'else', 'unless', 'from', 'to'],
          d = [
            'null',
            'true',
            'false',
            'href',
            'title',
            'type',
            'not-allowed',
            'readonly',
            'disabled',
          ],
          m = [
            '@font-face',
            '@keyframes',
            '@media',
            '@viewport',
            '@page',
            '@host',
            '@supports',
            '@block',
            '@css',
          ];
        var p = t.concat(r, n, i, a, o, l, u, s, c, f, d, m);
        function h(e) {
          e = e.sort(function (e, t) {
            return t > e;
          });
          return new RegExp('^((' + e.join(')|(') + '))\\b');
        }
        function g(e) {
          var t = {};
          for (var r = 0; r < e.length; ++r) t[e[r]] = true;
          return t;
        }
        function b(e) {
          return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }
        e.registerHelper('hintWords', 'stylus', p);
        e.defineMIME('text/x-styl', 'stylus');
      });
    },
    37355: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          var t = {};
          for (var r = 0; r < e.length; r++) t[e[r]] = true;
          return t;
        }
        var r = t([
          '_',
          'var',
          'let',
          'class',
          'enum',
          'extension',
          'import',
          'protocol',
          'struct',
          'func',
          'typealias',
          'associatedtype',
          'open',
          'public',
          'internal',
          'fileprivate',
          'private',
          'deinit',
          'init',
          'new',
          'override',
          'self',
          'subscript',
          'super',
          'convenience',
          'dynamic',
          'final',
          'indirect',
          'lazy',
          'required',
          'static',
          'unowned',
          'unowned(safe)',
          'unowned(unsafe)',
          'weak',
          'as',
          'is',
          'break',
          'case',
          'continue',
          'default',
          'else',
          'fallthrough',
          'for',
          'guard',
          'if',
          'in',
          'repeat',
          'switch',
          'where',
          'while',
          'defer',
          'return',
          'inout',
          'mutating',
          'nonmutating',
          'catch',
          'do',
          'rethrows',
          'throw',
          'throws',
          'try',
          'didSet',
          'get',
          'set',
          'willSet',
          'assignment',
          'associativity',
          'infix',
          'left',
          'none',
          'operator',
          'postfix',
          'precedence',
          'precedencegroup',
          'prefix',
          'right',
          'Any',
          'AnyObject',
          'Type',
          'dynamicType',
          'Self',
          'Protocol',
          '__COLUMN__',
          '__FILE__',
          '__FUNCTION__',
          '__LINE__',
        ]);
        var n = t([
          'var',
          'let',
          'class',
          'enum',
          'extension',
          'import',
          'protocol',
          'struct',
          'func',
          'typealias',
          'associatedtype',
          'for',
        ]);
        var i = t(['true', 'false', 'nil', 'self', 'super', '_']);
        var a = t([
          'Array',
          'Bool',
          'Character',
          'Dictionary',
          'Double',
          'Float',
          'Int',
          'Int8',
          'Int16',
          'Int32',
          'Int64',
          'Never',
          'Optional',
          'Set',
          'String',
          'UInt8',
          'UInt16',
          'UInt32',
          'UInt64',
          'Void',
        ]);
        var o = '+-/*%=|&<>~^?!';
        var s = ':;,.(){}[]';
        var l = /^\-?0b[01][01_]*/;
        var u = /^\-?0o[0-7][0-7_]*/;
        var c =
          /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/;
        var f = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/;
        var d = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/;
        var m = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
        var p = /^\#[A-Za-z]+/;
        var h = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
        function g(e, t, g) {
          if (e.sol()) t.indented = e.indentation();
          if (e.eatSpace()) return null;
          var b = e.peek();
          if (b == '/') {
            if (e.match('//')) {
              e.skipToEnd();
              return 'comment';
            }
            if (e.match('/*')) {
              t.tokenize.push(k);
              return k(e, t);
            }
          }
          if (e.match(p)) return 'builtin';
          if (e.match(h)) return 'attribute';
          if (e.match(l)) return 'number';
          if (e.match(u)) return 'number';
          if (e.match(c)) return 'number';
          if (e.match(f)) return 'number';
          if (e.match(m)) return 'property';
          if (o.indexOf(b) > -1) {
            e.next();
            return 'operator';
          }
          if (s.indexOf(b) > -1) {
            e.next();
            e.match('..');
            return 'punctuation';
          }
          var _;
          if ((_ = e.match(/("""|"|')/))) {
            var x = v.bind(null, _[0]);
            t.tokenize.push(x);
            return x(e, t);
          }
          if (e.match(d)) {
            var y = e.current();
            if (a.hasOwnProperty(y)) return 'variable-2';
            if (i.hasOwnProperty(y)) return 'atom';
            if (r.hasOwnProperty(y)) {
              if (n.hasOwnProperty(y)) t.prev = 'define';
              return 'keyword';
            }
            if (g == 'define') return 'def';
            return 'variable';
          }
          e.next();
          return null;
        }
        function b() {
          var e = 0;
          return function (t, r, n) {
            var i = g(t, r, n);
            if (i == 'punctuation') {
              if (t.current() == '(') ++e;
              else if (t.current() == ')') {
                if (e == 0) {
                  t.backUp(1);
                  r.tokenize.pop();
                  return r.tokenize[r.tokenize.length - 1](t, r);
                } else --e;
              }
            }
            return i;
          };
        }
        function v(e, t, r) {
          var n = e.length == 1;
          var i,
            a = false;
          while ((i = t.peek())) {
            if (a) {
              t.next();
              if (i == '(') {
                r.tokenize.push(b());
                return 'string';
              }
              a = false;
            } else if (t.match(e)) {
              r.tokenize.pop();
              return 'string';
            } else {
              t.next();
              a = i == '\\';
            }
          }
          if (n) {
            r.tokenize.pop();
          }
          return 'string';
        }
        function k(e, t) {
          var r;
          while (true) {
            e.match(/^[^/*]+/, true);
            r = e.next();
            if (!r) break;
            if (r === '/' && e.eat('*')) {
              t.tokenize.push(k);
            } else if (r === '*' && e.eat('/')) {
              t.tokenize.pop();
            }
          }
          return 'comment';
        }
        function _(e, t, r) {
          this.prev = e;
          this.align = t;
          this.indented = r;
        }
        function x(e, t) {
          var r = t.match(/^\s*($|\/[\/\*])/, false) ? null : t.column() + 1;
          e.context = new _(e.context, r, e.indented);
        }
        function y(e) {
          if (e.context) {
            e.indented = e.context.indented;
            e.context = e.context.prev;
          }
        }
        e.defineMode('swift', function (e) {
          return {
            startState: function () {
              return { prev: null, context: null, indented: 0, tokenize: [] };
            },
            token: function (e, t) {
              var r = t.prev;
              t.prev = null;
              var n = t.tokenize[t.tokenize.length - 1] || g;
              var i = n(e, t, r);
              if (!i || i == 'comment') t.prev = r;
              else if (!t.prev) t.prev = i;
              if (i == 'punctuation') {
                var a = /[\(\[\{]|([\]\)\}])/.exec(e.current());
                if (a) (a[1] ? y : x)(t, e);
              }
              return i;
            },
            indent: function (t, r) {
              var n = t.context;
              if (!n) return 0;
              var i = /^[\]\}\)]/.test(r);
              if (n.align != null) return n.align - (i ? 1 : 0);
              return n.indented + (i ? 0 : e.indentUnit);
            },
            electricInput: /^\s*[\)\}\]]$/,
            lineComment: '//',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            fold: 'brace',
            closeBrackets: '()[]{}\'\'""``',
          };
        });
        e.defineMIME('text/x-swift', 'swift');
      });
    },
    25664: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('tcl', function () {
          function e(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var t = e(
            'Tcl safe after append array auto_execok auto_import auto_load ' +
              'auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror ' +
              'binary break catch cd close concat continue dde eof encoding error ' +
              'eval exec exit expr fblocked fconfigure fcopy file fileevent filename ' +
              'filename flush for foreach format gets glob global history http if ' +
              'incr info interp join lappend lindex linsert list llength load lrange ' +
              'lreplace lsearch lset lsort memory msgcat namespace open package parray ' +
              'pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp ' +
              'registry regsub rename resource return scan seek set socket source split ' +
              'string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord ' +
              'tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest ' +
              'tclvars tell time trace unknown unset update uplevel upvar variable ' +
              'vwait'
          );
          var r = e('if elseif else and not or eq ne in ni for foreach while switch');
          var n = /[+\-*&%=<>!?^\/\|]/;
          function i(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function a(e, a) {
            var u = a.beforeParams;
            a.beforeParams = false;
            var c = e.next();
            if ((c == '"' || c == "'") && a.inParams) {
              return i(e, a, o(c));
            } else if (/[\[\]{}\(\),;\.]/.test(c)) {
              if (c == '(' && u) a.inParams = true;
              else if (c == ')') a.inParams = false;
              return null;
            } else if (/\d/.test(c)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            } else if (c == '#') {
              if (e.eat('*')) return i(e, a, s);
              if (c == '#' && e.match(/ *\[ *\[/)) return i(e, a, l);
              e.skipToEnd();
              return 'comment';
            } else if (c == '"') {
              e.skipTo(/"/);
              return 'comment';
            } else if (c == '$') {
              e.eatWhile(/[$_a-z0-9A-Z\.{:]/);
              e.eatWhile(/}/);
              a.beforeParams = true;
              return 'builtin';
            } else if (n.test(c)) {
              e.eatWhile(n);
              return 'comment';
            } else {
              e.eatWhile(/[\w\$_{}\xa1-\uffff]/);
              var f = e.current().toLowerCase();
              if (t && t.propertyIsEnumerable(f)) return 'keyword';
              if (r && r.propertyIsEnumerable(f)) {
                a.beforeParams = true;
                return 'keyword';
              }
              return null;
            }
          }
          function o(e) {
            return function (t, r) {
              var n = false,
                i,
                o = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  o = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (o) r.tokenize = a;
              return 'string';
            };
          }
          function s(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '#' && r) {
                t.tokenize = a;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function l(e, t) {
            var r = 0,
              n;
            while ((n = e.next())) {
              if (n == '#' && r == 2) {
                t.tokenize = a;
                break;
              }
              if (n == ']') r++;
              else if (n != ' ') r = 0;
            }
            return 'meta';
          }
          return {
            startState: function () {
              return { tokenize: a, beforeParams: false, inParams: false };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return t.tokenize(e, t);
            },
            lineComment: '#',
          };
        });
        e.defineMIME('text/x-tcl', 'tcl');
      });
    },
    43897: (e, t, r) => {
      (function (e) {
        if (true) {
          e(r(4631));
        } else {
        }
      })(function (e) {
        'use strict';
        var t = {
          addition: 'positive',
          attributes: 'attribute',
          bold: 'strong',
          cite: 'keyword',
          code: 'atom',
          definitionList: 'number',
          deletion: 'negative',
          div: 'punctuation',
          em: 'em',
          footnote: 'variable',
          footCite: 'qualifier',
          header: 'header',
          html: 'comment',
          image: 'string',
          italic: 'em',
          link: 'link',
          linkDefinition: 'link',
          list1: 'variable-2',
          list2: 'variable-3',
          list3: 'keyword',
          notextile: 'string-2',
          pre: 'operator',
          p: 'property',
          quote: 'bracket',
          span: 'quote',
          specialChar: 'tag',
          strong: 'strong',
          sub: 'builtin',
          sup: 'builtin',
          table: 'variable-3',
          tableHeading: 'operator',
        };
        function r(e, t) {
          t.mode = d.newLayout;
          t.tableHeading = false;
          if (
            t.layoutType === 'definitionList' &&
            t.spanningLayout &&
            e.match(f('definitionListEnd'), false)
          )
            t.spanningLayout = false;
        }
        function n(e, r, n) {
          if (n === '_') {
            if (e.eat('_')) return i(e, r, 'italic', /__/, 2);
            else return i(e, r, 'em', /_/, 1);
          }
          if (n === '*') {
            if (e.eat('*')) {
              return i(e, r, 'bold', /\*\*/, 2);
            }
            return i(e, r, 'strong', /\*/, 1);
          }
          if (n === '[') {
            if (e.match(/\d+\]/)) r.footCite = true;
            return a(r);
          }
          if (n === '(') {
            var o = e.match(/^(r|tm|c)\)/);
            if (o) return s(r, t.specialChar);
          }
          if (n === '<' && e.match(/(\w+)[^>]+>[^<]+<\/\1>/)) return s(r, t.html);
          if (n === '?' && e.eat('?')) return i(e, r, 'cite', /\?\?/, 2);
          if (n === '=' && e.eat('=')) return i(e, r, 'notextile', /==/, 2);
          if (n === '-' && !e.eat('-')) return i(e, r, 'deletion', /-/, 1);
          if (n === '+') return i(e, r, 'addition', /\+/, 1);
          if (n === '~') return i(e, r, 'sub', /~/, 1);
          if (n === '^') return i(e, r, 'sup', /\^/, 1);
          if (n === '%') return i(e, r, 'span', /%/, 1);
          if (n === '@') return i(e, r, 'code', /@/, 1);
          if (n === '!') {
            var l = i(e, r, 'image', /(?:\([^\)]+\))?!/, 1);
            e.match(/^:\S+/);
            return l;
          }
          return a(r);
        }
        function i(e, t, r, n, i) {
          var o = e.pos > i ? e.string.charAt(e.pos - i - 1) : null;
          var s = e.peek();
          if (t[r]) {
            if ((!s || /\W/.test(s)) && o && /\S/.test(o)) {
              var l = a(t);
              t[r] = false;
              return l;
            }
          } else if (
            (!o || /\W/.test(o)) &&
            s &&
            /\S/.test(s) &&
            e.match(new RegExp('^.*\\S' + n.source + '(?:\\W|$)'), false)
          ) {
            t[r] = true;
            t.mode = d.attributes;
          }
          return a(t);
        }
        function a(e) {
          var r = o(e);
          if (r) return r;
          var n = [];
          if (e.layoutType) n.push(t[e.layoutType]);
          n = n.concat(
            l(
              e,
              'addition',
              'bold',
              'cite',
              'code',
              'deletion',
              'em',
              'footCite',
              'image',
              'italic',
              'link',
              'span',
              'strong',
              'sub',
              'sup',
              'table',
              'tableHeading'
            )
          );
          if (e.layoutType === 'header') n.push(t.header + '-' + e.header);
          return n.length ? n.join(' ') : null;
        }
        function o(e) {
          var r = e.layoutType;
          switch (r) {
            case 'notextile':
            case 'code':
            case 'pre':
              return t[r];
            default:
              if (e.notextile) return t.notextile + (r ? ' ' + t[r] : '');
              return null;
          }
        }
        function s(e, t) {
          var r = o(e);
          if (r) return r;
          var n = a(e);
          if (t) return n ? n + ' ' + t : t;
          else return n;
        }
        function l(e) {
          var r = [];
          for (var n = 1; n < arguments.length; ++n) {
            if (e[arguments[n]]) r.push(t[arguments[n]]);
          }
          return r;
        }
        function u(e) {
          var t = e.spanningLayout,
            r = e.layoutType;
          for (var n in e) if (e.hasOwnProperty(n)) delete e[n];
          e.mode = d.newLayout;
          if (t) {
            e.layoutType = r;
            e.spanningLayout = true;
          }
        }
        var c = {
          cache: {},
          single: {
            bc: 'bc',
            bq: 'bq',
            definitionList: /- .*?:=+/,
            definitionListEnd: /.*=:\s*$/,
            div: 'div',
            drawTable: /\|.*\|/,
            foot: /fn\d+/,
            header: /h[1-6]/,
            html: /\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,
            link: /[^"]+":\S/,
            linkDefinition: /\[[^\s\]]+\]\S+/,
            list: /(?:#+|\*+)/,
            notextile: 'notextile',
            para: 'p',
            pre: 'pre',
            table: 'table',
            tableCellAttributes: /[\/\\]\d+/,
            tableHeading: /\|_\./,
            tableText: /[^"_\*\[\(\?\+~\^%@|-]+/,
            text: /[^!"_=\*\[\(<\?\+~\^%@-]+/,
          },
          attributes: {
            align: /(?:<>|<|>|=)/,
            selector: /\([^\(][^\)]+\)/,
            lang: /\[[^\[\]]+\]/,
            pad: /(?:\(+|\)+){1,2}/,
            css: /\{[^\}]+\}/,
          },
          createRe: function (e) {
            switch (e) {
              case 'drawTable':
                return c.makeRe('^', c.single.drawTable, '$');
              case 'html':
                return c.makeRe('^', c.single.html, '(?:', c.single.html, ')*', '$');
              case 'linkDefinition':
                return c.makeRe('^', c.single.linkDefinition, '$');
              case 'listLayout':
                return c.makeRe('^', c.single.list, f('allAttributes'), '*\\s+');
              case 'tableCellAttributes':
                return c.makeRe(
                  '^',
                  c.choiceRe(c.single.tableCellAttributes, f('allAttributes')),
                  '+\\.'
                );
              case 'type':
                return c.makeRe('^', f('allTypes'));
              case 'typeLayout':
                return c.makeRe(
                  '^',
                  f('allTypes'),
                  f('allAttributes'),
                  '*\\.\\.?',
                  '(\\s+|$)'
                );
              case 'attributes':
                return c.makeRe('^', f('allAttributes'), '+');
              case 'allTypes':
                return c.choiceRe(
                  c.single.div,
                  c.single.foot,
                  c.single.header,
                  c.single.bc,
                  c.single.bq,
                  c.single.notextile,
                  c.single.pre,
                  c.single.table,
                  c.single.para
                );
              case 'allAttributes':
                return c.choiceRe(
                  c.attributes.selector,
                  c.attributes.css,
                  c.attributes.lang,
                  c.attributes.align,
                  c.attributes.pad
                );
              default:
                return c.makeRe('^', c.single[e]);
            }
          },
          makeRe: function () {
            var e = '';
            for (var t = 0; t < arguments.length; ++t) {
              var r = arguments[t];
              e += typeof r === 'string' ? r : r.source;
            }
            return new RegExp(e);
          },
          choiceRe: function () {
            var e = [arguments[0]];
            for (var t = 1; t < arguments.length; ++t) {
              e[t * 2 - 1] = '|';
              e[t * 2] = arguments[t];
            }
            e.unshift('(?:');
            e.push(')');
            return c.makeRe.apply(null, e);
          },
        };
        function f(e) {
          return c.cache[e] || (c.cache[e] = c.createRe(e));
        }
        var d = {
          newLayout: function (e, t) {
            if (e.match(f('typeLayout'), false)) {
              t.spanningLayout = false;
              return (t.mode = d.blockType)(e, t);
            }
            var r;
            if (!o(t)) {
              if (e.match(f('listLayout'), false)) r = d.list;
              else if (e.match(f('drawTable'), false)) r = d.table;
              else if (e.match(f('linkDefinition'), false)) r = d.linkDefinition;
              else if (e.match(f('definitionList'))) r = d.definitionList;
              else if (e.match(f('html'), false)) r = d.html;
            }
            return (t.mode = r || d.text)(e, t);
          },
          blockType: function (e, t) {
            var r, n;
            t.layoutType = null;
            if ((r = e.match(f('type')))) n = r[0];
            else return (t.mode = d.text)(e, t);
            if ((r = n.match(f('header')))) {
              t.layoutType = 'header';
              t.header = parseInt(r[0][1]);
            } else if (n.match(f('bq'))) {
              t.layoutType = 'quote';
            } else if (n.match(f('bc'))) {
              t.layoutType = 'code';
            } else if (n.match(f('foot'))) {
              t.layoutType = 'footnote';
            } else if (n.match(f('notextile'))) {
              t.layoutType = 'notextile';
            } else if (n.match(f('pre'))) {
              t.layoutType = 'pre';
            } else if (n.match(f('div'))) {
              t.layoutType = 'div';
            } else if (n.match(f('table'))) {
              t.layoutType = 'table';
            }
            t.mode = d.attributes;
            return a(t);
          },
          text: function (e, t) {
            if (e.match(f('text'))) return a(t);
            var r = e.next();
            if (r === '"') return (t.mode = d.link)(e, t);
            return n(e, t, r);
          },
          attributes: function (e, r) {
            r.mode = d.layoutLength;
            if (e.match(f('attributes'))) return s(r, t.attributes);
            else return a(r);
          },
          layoutLength: function (e, t) {
            if (e.eat('.') && e.eat('.')) t.spanningLayout = true;
            t.mode = d.text;
            return a(t);
          },
          list: function (e, t) {
            var r = e.match(f('list'));
            t.listDepth = r[0].length;
            var n = (t.listDepth - 1) % 3;
            if (!n) t.layoutType = 'list1';
            else if (n === 1) t.layoutType = 'list2';
            else t.layoutType = 'list3';
            t.mode = d.attributes;
            return a(t);
          },
          link: function (e, r) {
            r.mode = d.text;
            if (e.match(f('link'))) {
              e.match(/\S+/);
              return s(r, t.link);
            }
            return a(r);
          },
          linkDefinition: function (e, r) {
            e.skipToEnd();
            return s(r, t.linkDefinition);
          },
          definitionList: function (e, t) {
            e.match(f('definitionList'));
            t.layoutType = 'definitionList';
            if (e.match(/\s*$/)) t.spanningLayout = true;
            else t.mode = d.attributes;
            return a(t);
          },
          html: function (e, r) {
            e.skipToEnd();
            return s(r, t.html);
          },
          table: function (e, t) {
            t.layoutType = 'table';
            return (t.mode = d.tableCell)(e, t);
          },
          tableCell: function (e, t) {
            if (e.match(f('tableHeading'))) t.tableHeading = true;
            else e.eat('|');
            t.mode = d.tableCellAttributes;
            return a(t);
          },
          tableCellAttributes: function (e, r) {
            r.mode = d.tableText;
            if (e.match(f('tableCellAttributes'))) return s(r, t.attributes);
            else return a(r);
          },
          tableText: function (e, t) {
            if (e.match(f('tableText'))) return a(t);
            if (e.peek() === '|') {
              t.mode = d.tableCell;
              return a(t);
            }
            return n(e, t, e.next());
          },
        };
        e.defineMode('textile', function () {
          return {
            startState: function () {
              return { mode: d.newLayout };
            },
            token: function (e, t) {
              if (e.sol()) r(e, t);
              return t.mode(e, t);
            },
            blankLine: u,
          };
        });
        e.defineMIME('text/x-textile', 'textile');
      });
    },
    91046: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('tiddlywiki', function () {
          var e = {};
          var t = {
            allTags: true,
            closeAll: true,
            list: true,
            newJournal: true,
            newTiddler: true,
            permaview: true,
            saveChanges: true,
            search: true,
            slider: true,
            tabs: true,
            tag: true,
            tagging: true,
            tags: true,
            tiddler: true,
            timeline: true,
            today: true,
            version: true,
            option: true,
            with: true,
            filter: true,
          };
          var r = /[\w_\-]/i,
            n = /^\-\-\-\-+$/,
            i = /^\/\*\*\*$/,
            a = /^\*\*\*\/$/,
            o = /^<<<$/,
            s = /^\/\/\{\{\{$/,
            l = /^\/\/\}\}\}$/,
            u = /^<!--\{\{\{-->$/,
            c = /^<!--\}\}\}-->$/,
            f = /^\{\{\{$/,
            d = /^\}\}\}$/,
            m = /.*?\}\}\}/;
          function p(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function h(t, d) {
            var m = t.sol(),
              h = t.peek();
            d.block = false;
            if (m && /[<\/\*{}\-]/.test(h)) {
              if (t.match(f)) {
                d.block = true;
                return p(t, d, v);
              }
              if (t.match(o)) return 'quote';
              if (t.match(i) || t.match(a)) return 'comment';
              if (t.match(s) || t.match(l) || t.match(u) || t.match(c))
                return 'comment';
              if (t.match(n)) return 'hr';
            }
            t.next();
            if (m && /[\/\*!#;:>|]/.test(h)) {
              if (h == '!') {
                t.skipToEnd();
                return 'header';
              }
              if (h == '*') {
                t.eatWhile('*');
                return 'comment';
              }
              if (h == '#') {
                t.eatWhile('#');
                return 'comment';
              }
              if (h == ';') {
                t.eatWhile(';');
                return 'comment';
              }
              if (h == ':') {
                t.eatWhile(':');
                return 'comment';
              }
              if (h == '>') {
                t.eatWhile('>');
                return 'quote';
              }
              if (h == '|') return 'header';
            }
            if (h == '{' && t.match('{{')) return p(t, d, v);
            if (
              /[hf]/i.test(h) &&
              /[ti]/i.test(t.peek()) &&
              t.match(
                /\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i
              )
            )
              return 'link';
            if (h == '"') return 'string';
            if (h == '~') return 'brace';
            if (/[\[\]]/.test(h) && t.match(h)) return 'brace';
            if (h == '@') {
              t.eatWhile(r);
              return 'link';
            }
            if (/\d/.test(h)) {
              t.eatWhile(/\d/);
              return 'number';
            }
            if (h == '/') {
              if (t.eat('%')) {
                return p(t, d, g);
              } else if (t.eat('/')) {
                return p(t, d, k);
              }
            }
            if (h == '_' && t.eat('_')) return p(t, d, _);
            if (h == '-' && t.eat('-')) {
              if (t.peek() != ' ') return p(t, d, x);
              if (t.peek() == ' ') return 'brace';
            }
            if (h == "'" && t.eat("'")) return p(t, d, b);
            if (h == '<' && t.eat('<')) return p(t, d, y);
            t.eatWhile(/[\w\$_]/);
            return e.propertyIsEnumerable(t.current()) ? 'keyword' : null;
          }
          function g(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = h;
                break;
              }
              r = n == '%';
            }
            return 'comment';
          }
          function b(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == "'" && r) {
                t.tokenize = h;
                break;
              }
              r = n == "'";
            }
            return 'strong';
          }
          function v(e, t) {
            var r = t.block;
            if (r && e.current()) {
              return 'comment';
            }
            if (!r && e.match(m)) {
              t.tokenize = h;
              return 'comment';
            }
            if (r && e.sol() && e.match(d)) {
              t.tokenize = h;
              return 'comment';
            }
            e.next();
            return 'comment';
          }
          function k(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = h;
                break;
              }
              r = n == '/';
            }
            return 'em';
          }
          function _(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '_' && r) {
                t.tokenize = h;
                break;
              }
              r = n == '_';
            }
            return 'underlined';
          }
          function x(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '-' && r) {
                t.tokenize = h;
                break;
              }
              r = n == '-';
            }
            return 'strikethrough';
          }
          function y(e, r) {
            if (e.current() == '<<') {
              return 'macro';
            }
            var n = e.next();
            if (!n) {
              r.tokenize = h;
              return null;
            }
            if (n == '>') {
              if (e.peek() == '>') {
                e.next();
                r.tokenize = h;
                return 'macro';
              }
            }
            e.eatWhile(/[\w\$_]/);
            return t.propertyIsEnumerable(e.current()) ? 'keyword' : null;
          }
          return {
            startState: function () {
              return { tokenize: h };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              return r;
            },
          };
        });
        e.defineMIME('text/x-tiddlywiki', 'tiddlywiki');
      });
    },
    17988: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('tiki', function (e) {
          function t(e, t, r) {
            return function (i, a) {
              while (!i.eol()) {
                if (i.match(t)) {
                  a.tokenize = n;
                  break;
                }
                i.next();
              }
              if (r) a.tokenize = r;
              return e;
            };
          }
          function r(e) {
            return function (t, r) {
              while (!t.eol()) {
                t.next();
              }
              r.tokenize = n;
              return e;
            };
          }
          function n(e, i) {
            function a(t) {
              i.tokenize = t;
              return t(e, i);
            }
            var o = e.sol();
            var l = e.next();
            switch (l) {
              case '{':
                e.eat('/');
                e.eatSpace();
                e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/);
                i.tokenize = s;
                return 'tag';
              case '_':
                if (e.eat('_')) return a(t('strong', '__', n));
                break;
              case "'":
                if (e.eat("'")) return a(t('em', "''", n));
                break;
              case '(':
                if (e.eat('(')) return a(t('variable-2', '))', n));
                break;
              case '[':
                return a(t('variable-3', ']', n));
                break;
              case '|':
                if (e.eat('|')) return a(t('comment', '||'));
                break;
              case '-':
                if (e.eat('=')) {
                  return a(t('header string', '=-', n));
                } else if (e.eat('-')) {
                  return a(t('error tw-deleted', '--', n));
                }
                break;
              case '=':
                if (e.match('==')) return a(t('tw-underline', '===', n));
                break;
              case ':':
                if (e.eat(':')) return a(t('comment', '::'));
                break;
              case '^':
                return a(t('tw-box', '^'));
                break;
              case '~':
                if (e.match('np~')) return a(t('meta', '~/np~'));
                break;
            }
            if (o) {
              switch (l) {
                case '!':
                  if (e.match('!!!!!')) {
                    return a(r('header string'));
                  } else if (e.match('!!!!')) {
                    return a(r('header string'));
                  } else if (e.match('!!!')) {
                    return a(r('header string'));
                  } else if (e.match('!!')) {
                    return a(r('header string'));
                  } else {
                    return a(r('header string'));
                  }
                  break;
                case '*':
                case '#':
                case '+':
                  return a(r('tw-listitem bracket'));
                  break;
              }
            }
            return null;
          }
          var i = e.indentUnit;
          var a, o;
          function s(e, t) {
            var r = e.next();
            var i = e.peek();
            if (r == '}') {
              t.tokenize = n;
              return 'tag';
            } else if (r == '(' || r == ')') {
              return 'bracket';
            } else if (r == '=') {
              o = 'equals';
              if (i == '>') {
                e.next();
                i = e.peek();
              }
              if (!/[\'\"]/.test(i)) {
                t.tokenize = u();
              }
              return 'operator';
            } else if (/[\'\"]/.test(r)) {
              t.tokenize = l(r);
              return t.tokenize(e, t);
            } else {
              e.eatWhile(/[^\s\u00a0=\"\'\/?]/);
              return 'keyword';
            }
          }
          function l(e) {
            return function (t, r) {
              while (!t.eol()) {
                if (t.next() == e) {
                  r.tokenize = s;
                  break;
                }
              }
              return 'string';
            };
          }
          function u() {
            return function (e, t) {
              while (!e.eol()) {
                var r = e.next();
                var n = e.peek();
                if (r == ' ' || r == ',' || /[ )}]/.test(n)) {
                  t.tokenize = s;
                  break;
                }
              }
              return 'string';
            };
          }
          var c, f;
          function d() {
            for (var e = arguments.length - 1; e >= 0; e--) c.cc.push(arguments[e]);
          }
          function m() {
            d.apply(null, arguments);
            return true;
          }
          function p(e, t) {
            var r = c.context && c.context.noIndent;
            c.context = {
              prev: c.context,
              pluginName: e,
              indent: c.indented,
              startOfLine: t,
              noIndent: r,
            };
          }
          function h() {
            if (c.context) c.context = c.context.prev;
          }
          function g(e) {
            if (e == 'openPlugin') {
              c.pluginName = a;
              return m(k, b(c.startOfLine));
            } else if (e == 'closePlugin') {
              var t = false;
              if (c.context) {
                t = c.context.pluginName != a;
                h();
              } else {
                t = true;
              }
              if (t) f = 'error';
              return m(v(t));
            } else if (e == 'string') {
              if (!c.context || c.context.name != '!cdata') p('!cdata');
              if (c.tokenize == n) h();
              return m();
            } else return m();
          }
          function b(e) {
            return function (t) {
              if (t == 'selfclosePlugin' || t == 'endPlugin') return m();
              if (t == 'endPlugin') {
                p(c.pluginName, e);
                return m();
              }
              return m();
            };
          }
          function v(e) {
            return function (t) {
              if (e) f = 'error';
              if (t == 'endPlugin') return m();
              return d();
            };
          }
          function k(e) {
            if (e == 'keyword') {
              f = 'attribute';
              return m(k);
            }
            if (e == 'equals') return m(_, k);
            return d();
          }
          function _(e) {
            if (e == 'keyword') {
              f = 'string';
              return m();
            }
            if (e == 'string') return m(x);
            return d();
          }
          function x(e) {
            if (e == 'string') return m(x);
            else return d();
          }
          return {
            startState: function () {
              return {
                tokenize: n,
                cc: [],
                indented: 0,
                startOfLine: true,
                pluginName: null,
                context: null,
              };
            },
            token: function (e, t) {
              if (e.sol()) {
                t.startOfLine = true;
                t.indented = e.indentation();
              }
              if (e.eatSpace()) return null;
              f = o = a = null;
              var r = t.tokenize(e, t);
              if ((r || o) && r != 'comment') {
                c = t;
                while (true) {
                  var n = t.cc.pop() || g;
                  if (n(o || r)) break;
                }
              }
              t.startOfLine = false;
              return f || r;
            },
            indent: function (e, t) {
              var r = e.context;
              if (r && r.noIndent) return 0;
              if (r && /^{\//.test(t)) r = r.prev;
              while (r && !r.startOfLine) r = r.prev;
              if (r) return r.indent + i;
              else return 0;
            },
            electricChars: '/',
          };
        });
        e.defineMIME('text/tiki', 'tiki');
      });
    },
    47617: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('toml', function () {
          return {
            startState: function () {
              return { inString: false, stringType: '', lhs: true, inArray: 0 };
            },
            token: function (e, t) {
              if (!t.inString && (e.peek() == '"' || e.peek() == "'")) {
                t.stringType = e.peek();
                e.next();
                t.inString = true;
              }
              if (e.sol() && t.inArray === 0) {
                t.lhs = true;
              }
              if (t.inString) {
                while (t.inString && !e.eol()) {
                  if (e.peek() === t.stringType) {
                    e.next();
                    t.inString = false;
                  } else if (e.peek() === '\\') {
                    e.next();
                    e.next();
                  } else {
                    e.match(/^.[^\\\"\']*/);
                  }
                }
                return t.lhs ? 'property string' : 'string';
              } else if (t.inArray && e.peek() === ']') {
                e.next();
                t.inArray--;
                return 'bracket';
              } else if (t.lhs && e.peek() === '[' && e.skipTo(']')) {
                e.next();
                if (e.peek() === ']') e.next();
                return 'atom';
              } else if (e.peek() === '#') {
                e.skipToEnd();
                return 'comment';
              } else if (e.eatSpace()) {
                return null;
              } else if (
                t.lhs &&
                e.eatWhile(function (e) {
                  return e != '=' && e != ' ';
                })
              ) {
                return 'property';
              } else if (t.lhs && e.peek() === '=') {
                e.next();
                t.lhs = false;
                return null;
              } else if (!t.lhs && e.match(/^\d\d\d\d[\d\-\:\.T]*Z/)) {
                return 'atom';
              } else if (!t.lhs && (e.match('true') || e.match('false'))) {
                return 'atom';
              } else if (!t.lhs && e.peek() === '[') {
                t.inArray++;
                e.next();
                return 'bracket';
              } else if (!t.lhs && e.match(/^\-?\d+(?:\.\d+)?/)) {
                return 'number';
              } else if (!e.eatSpace()) {
                e.next();
              }
              return null;
            },
          };
        });
        e.defineMIME('text/x-toml', 'toml');
      });
    },
    66043: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(16531), r(14146));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('tornado:inner', function () {
          var e = [
            'and',
            'as',
            'assert',
            'autoescape',
            'block',
            'break',
            'class',
            'comment',
            'context',
            'continue',
            'datetime',
            'def',
            'del',
            'elif',
            'else',
            'end',
            'escape',
            'except',
            'exec',
            'extends',
            'false',
            'finally',
            'for',
            'from',
            'global',
            'if',
            'import',
            'in',
            'include',
            'is',
            'json_encode',
            'lambda',
            'length',
            'linkify',
            'load',
            'module',
            'none',
            'not',
            'or',
            'pass',
            'print',
            'put',
            'raise',
            'raw',
            'return',
            'self',
            'set',
            'squeeze',
            'super',
            'true',
            'try',
            'url_escape',
            'while',
            'with',
            'without',
            'xhtml_escape',
            'yield',
          ];
          e = new RegExp('^((' + e.join(')|(') + '))\\b');
          function t(e, t) {
            e.eatWhile(/[^\{]/);
            var n = e.next();
            if (n == '{') {
              if ((n = e.eat(/\{|%|#/))) {
                t.tokenize = r(n);
                return 'tag';
              }
            }
          }
          function r(r) {
            if (r == '{') {
              r = '}';
            }
            return function (n, i) {
              var a = n.next();
              if (a == r && n.eat('}')) {
                i.tokenize = t;
                return 'tag';
              }
              if (n.match(e)) {
                return 'keyword';
              }
              return r == '#' ? 'comment' : 'string';
            };
          }
          return {
            startState: function () {
              return { tokenize: t };
            },
            token: function (e, t) {
              return t.tokenize(e, t);
            },
          };
        });
        e.defineMode('tornado', function (t) {
          var r = e.getMode(t, 'text/html');
          var n = e.getMode(t, 'tornado:inner');
          return e.overlayMode(r, n);
        });
        e.defineMIME('text/x-tornado', 'tornado');
      });
    },
    20800: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('troff', function () {
          var e = {};
          function t(t) {
            if (t.eatSpace()) return null;
            var r = t.sol();
            var n = t.next();
            if (n === '\\') {
              if (
                t.match('fB') ||
                t.match('fR') ||
                t.match('fI') ||
                t.match('u') ||
                t.match('d') ||
                t.match('%') ||
                t.match('&')
              ) {
                return 'string';
              }
              if (t.match('m[')) {
                t.skipTo(']');
                t.next();
                return 'string';
              }
              if (t.match('s+') || t.match('s-')) {
                t.eatWhile(/[\d-]/);
                return 'string';
              }
              if (t.match('(') || t.match('*(')) {
                t.eatWhile(/[\w-]/);
                return 'string';
              }
              return 'string';
            }
            if (r && (n === '.' || n === "'")) {
              if (t.eat('\\') && t.eat('"')) {
                t.skipToEnd();
                return 'comment';
              }
            }
            if (r && n === '.') {
              if (t.match('B ') || t.match('I ') || t.match('R ')) {
                return 'attribute';
              }
              if (
                t.match('TH ') ||
                t.match('SH ') ||
                t.match('SS ') ||
                t.match('HP ')
              ) {
                t.skipToEnd();
                return 'quote';
              }
              if (
                (t.match(/[A-Z]/) && t.match(/[A-Z]/)) ||
                (t.match(/[a-z]/) && t.match(/[a-z]/))
              ) {
                return 'attribute';
              }
            }
            t.eatWhile(/[\w-]/);
            var i = t.current();
            return e.hasOwnProperty(i) ? e[i] : null;
          }
          function r(e, r) {
            return (r.tokens[0] || t)(e, r);
          }
          return {
            startState: function () {
              return { tokens: [] };
            },
            token: function (e, t) {
              return r(e, t);
            },
          };
        });
        e.defineMIME('text/troff', 'troff');
        e.defineMIME('text/x-troff', 'troff');
        e.defineMIME('application/x-troff', 'troff');
      });
    },
    68923: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('ttcn-cfg', function (e, t) {
          var r = e.indentUnit,
            n = t.keywords || {},
            i = t.fileNCtrlMaskOptions || {},
            a = t.externalCommands || {},
            o = t.multiLineStrings,
            s = t.indentStatements !== false;
          var l = /[\|]/;
          var u;
          function c(e, t) {
            var r = e.next();
            if (r == '"' || r == "'") {
              t.tokenize = f(r);
              return t.tokenize(e, t);
            }
            if (/[:=]/.test(r)) {
              u = r;
              return 'punctuation';
            }
            if (r == '#') {
              e.skipToEnd();
              return 'comment';
            }
            if (/\d/.test(r)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            }
            if (l.test(r)) {
              e.eatWhile(l);
              return 'operator';
            }
            if (r == '[') {
              e.eatWhile(/[\w_\]]/);
              return 'number sectionTitle';
            }
            e.eatWhile(/[\w\$_]/);
            var o = e.current();
            if (n.propertyIsEnumerable(o)) return 'keyword';
            if (i.propertyIsEnumerable(o)) return 'negative fileNCtrlMaskOptions';
            if (a.propertyIsEnumerable(o)) return 'negative externalCommands';
            return 'variable';
          }
          function f(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  var s = t.peek();
                  if (s) {
                    s = s.toLowerCase();
                    if (s == 'b' || s == 'h' || s == 'o') t.next();
                  }
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !(n || o)) r.tokenize = null;
              return 'string';
            };
          }
          function d(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function m(e, t, r) {
            var n = e.indented;
            if (e.context && e.context.type == 'statement') n = e.context.indented;
            return (e.context = new d(n, t, r, null, e.context));
          }
          function p(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new d((e || 0) - r, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) return null;
              u = null;
              var n = (t.tokenize || c)(e, t);
              if (n == 'comment') return n;
              if (r.align == null) r.align = true;
              if ((u == ';' || u == ':' || u == ',') && r.type == 'statement') {
                p(t);
              } else if (u == '{') m(t, e.column(), '}');
              else if (u == '[') m(t, e.column(), ']');
              else if (u == '(') m(t, e.column(), ')');
              else if (u == '}') {
                while (r.type == 'statement') r = p(t);
                if (r.type == '}') r = p(t);
                while (r.type == 'statement') r = p(t);
              } else if (u == r.type) p(t);
              else if (
                s &&
                (((r.type == '}' || r.type == 'top') && u != ';') ||
                  (r.type == 'statement' && u == 'newstatement'))
              )
                m(t, e.column(), 'statement');
              t.startOfLine = false;
              return n;
            },
            electricChars: '{}',
            lineComment: '#',
            fold: 'brace',
          };
        });
        function t(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        e.defineMIME('text/x-ttcn-cfg', {
          name: 'ttcn-cfg',
          keywords: t(
            'Yes No LogFile FileMask ConsoleMask AppendFile' +
              ' TimeStampFormat LogEventTypes SourceInfoFormat' +
              ' LogEntityName LogSourceInfo DiskFullAction' +
              ' LogFileNumber LogFileSize MatchingHints Detailed' +
              ' Compact SubCategories Stack Single None Seconds' +
              ' DateTime Time Stop Error Retry Delete TCPPort KillTimer' +
              ' NumHCs UnixSocketsEnabled LocalAddress'
          ),
          fileNCtrlMaskOptions: t(
            'TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING' +
              ' TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP' +
              ' TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION' +
              ' TTCN_USER TTCN_FUNCTION TTCN_STATISTICS' +
              ' TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG' +
              ' EXECUTOR ERROR WARNING PORTEVENT TIMEROP' +
              ' VERDICTOP DEFAULTOP TESTCASE ACTION USER' +
              ' FUNCTION STATISTICS PARALLEL MATCHING DEBUG' +
              ' LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED' +
              ' DEBUG_ENCDEC DEBUG_TESTPORT' +
              ' DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE' +
              ' DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT' +
              ' DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED' +
              ' EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA' +
              ' EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS' +
              ' EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED' +
              ' FUNCTION_RND FUNCTION_UNQUALIFIED' +
              ' MATCHING_DONE MATCHING_MCSUCCESS' +
              ' MATCHING_MCUNSUCC MATCHING_MMSUCCESS' +
              ' MATCHING_MMUNSUCC MATCHING_PCSUCCESS' +
              ' MATCHING_PCUNSUCC MATCHING_PMSUCCESS' +
              ' MATCHING_PMUNSUCC MATCHING_PROBLEM' +
              ' MATCHING_TIMEOUT MATCHING_UNQUALIFIED' +
              ' PARALLEL_PORTCONN PARALLEL_PORTMAP' +
              ' PARALLEL_PTC PARALLEL_UNQUALIFIED' +
              ' PORTEVENT_DUALRECV PORTEVENT_DUALSEND' +
              ' PORTEVENT_MCRECV PORTEVENT_MCSEND' +
              ' PORTEVENT_MMRECV PORTEVENT_MMSEND' +
              ' PORTEVENT_MQUEUE PORTEVENT_PCIN' +
              ' PORTEVENT_PCOUT PORTEVENT_PMIN' +
              ' PORTEVENT_PMOUT PORTEVENT_PQUEUE' +
              ' PORTEVENT_STATE PORTEVENT_UNQUALIFIED' +
              ' STATISTICS_UNQUALIFIED STATISTICS_VERDICT' +
              ' TESTCASE_FINISH TESTCASE_START' +
              ' TESTCASE_UNQUALIFIED TIMEROP_GUARD' +
              ' TIMEROP_READ TIMEROP_START TIMEROP_STOP' +
              ' TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED' +
              ' USER_UNQUALIFIED VERDICTOP_FINAL' +
              ' VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT' +
              ' VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED'
          ),
          externalCommands: t(
            'BeginControlPart EndControlPart BeginTestCase' + ' EndTestCase'
          ),
          multiLineStrings: true,
        });
      });
    },
    71105: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('ttcn', function (e, t) {
          var r = e.indentUnit,
            n = t.keywords || {},
            i = t.builtin || {},
            a = t.timerOps || {},
            o = t.portOps || {},
            s = t.configOps || {},
            l = t.verdictOps || {},
            u = t.sutOps || {},
            c = t.functionOps || {},
            f = t.verdictConsts || {},
            d = t.booleanConsts || {},
            m = t.otherConsts || {},
            p = t.types || {},
            h = t.visibilityModifiers || {},
            g = t.templateMatch || {},
            b = t.multiLineStrings,
            v = t.indentStatements !== false;
          var k = /[+\-*&@=<>!\/]/;
          var _;
          function x(e, t) {
            var r = e.next();
            if (r == '"' || r == "'") {
              t.tokenize = y(r);
              return t.tokenize(e, t);
            }
            if (/[\[\]{}\(\),;\\:\?\.]/.test(r)) {
              _ = r;
              return 'punctuation';
            }
            if (r == '#') {
              e.skipToEnd();
              return 'atom preprocessor';
            }
            if (r == '%') {
              e.eatWhile(/\b/);
              return 'atom ttcn3Macros';
            }
            if (/\d/.test(r)) {
              e.eatWhile(/[\w\.]/);
              return 'number';
            }
            if (r == '/') {
              if (e.eat('*')) {
                t.tokenize = w;
                return w(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (k.test(r)) {
              if (r == '@') {
                if (e.match('try') || e.match('catch') || e.match('lazy')) {
                  return 'keyword';
                }
              }
              e.eatWhile(k);
              return 'operator';
            }
            e.eatWhile(/[\w\$_\xa1-\uffff]/);
            var b = e.current();
            if (n.propertyIsEnumerable(b)) return 'keyword';
            if (i.propertyIsEnumerable(b)) return 'builtin';
            if (a.propertyIsEnumerable(b)) return 'def timerOps';
            if (s.propertyIsEnumerable(b)) return 'def configOps';
            if (l.propertyIsEnumerable(b)) return 'def verdictOps';
            if (o.propertyIsEnumerable(b)) return 'def portOps';
            if (u.propertyIsEnumerable(b)) return 'def sutOps';
            if (c.propertyIsEnumerable(b)) return 'def functionOps';
            if (f.propertyIsEnumerable(b)) return 'string verdictConsts';
            if (d.propertyIsEnumerable(b)) return 'string booleanConsts';
            if (m.propertyIsEnumerable(b)) return 'string otherConsts';
            if (p.propertyIsEnumerable(b)) return 'builtin types';
            if (h.propertyIsEnumerable(b)) return 'builtin visibilityModifiers';
            if (g.propertyIsEnumerable(b)) return 'atom templateMatch';
            return 'variable';
          }
          function y(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  var o = t.peek();
                  if (o) {
                    o = o.toLowerCase();
                    if (o == 'b' || o == 'h' || o == 'o') t.next();
                  }
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !(n || b)) r.tokenize = null;
              return 'string';
            };
          }
          function w(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = null;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function E(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function S(e, t, r) {
            var n = e.indented;
            if (e.context && e.context.type == 'statement') n = e.context.indented;
            return (e.context = new E(n, t, r, null, e.context));
          }
          function T(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new E((e || 0) - r, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) return null;
              _ = null;
              var n = (t.tokenize || x)(e, t);
              if (n == 'comment') return n;
              if (r.align == null) r.align = true;
              if ((_ == ';' || _ == ':' || _ == ',') && r.type == 'statement') {
                T(t);
              } else if (_ == '{') S(t, e.column(), '}');
              else if (_ == '[') S(t, e.column(), ']');
              else if (_ == '(') S(t, e.column(), ')');
              else if (_ == '}') {
                while (r.type == 'statement') r = T(t);
                if (r.type == '}') r = T(t);
                while (r.type == 'statement') r = T(t);
              } else if (_ == r.type) T(t);
              else if (
                v &&
                (((r.type == '}' || r.type == 'top') && _ != ';') ||
                  (r.type == 'statement' && _ == 'newstatement'))
              )
                S(t, e.column(), 'statement');
              t.startOfLine = false;
              return n;
            },
            electricChars: '{}',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
            fold: 'brace',
          };
        });
        function t(e) {
          var t = {},
            r = e.split(' ');
          for (var n = 0; n < r.length; ++n) t[r[n]] = true;
          return t;
        }
        function r(t, r) {
          if (typeof t == 'string') t = [t];
          var n = [];
          function i(e) {
            if (e) for (var t in e) if (e.hasOwnProperty(t)) n.push(t);
          }
          i(r.keywords);
          i(r.builtin);
          i(r.timerOps);
          i(r.portOps);
          if (n.length) {
            r.helperType = t[0];
            e.registerHelper('hintWords', t[0], n);
          }
          for (var a = 0; a < t.length; ++a) e.defineMIME(t[a], r);
        }
        r(['text/x-ttcn', 'text/x-ttcn3', 'text/x-ttcnpp'], {
          name: 'ttcn',
          keywords: t(
            'activate address alive all alt altstep and and4b any' +
              ' break case component const continue control deactivate' +
              ' display do else encode enumerated except exception' +
              ' execute extends extension external for from function' +
              ' goto group if import in infinity inout interleave' +
              ' label language length log match message mixed mod' +
              ' modifies module modulepar mtc noblock not not4b nowait' +
              ' of on optional or or4b out override param pattern port' +
              ' procedure record recursive rem repeat return runs select' +
              ' self sender set signature system template testcase to' +
              ' type union value valueof var variant while with xor xor4b'
          ),
          builtin: t(
            'bit2hex bit2int bit2oct bit2str char2int char2oct encvalue' +
              ' decomp decvalue float2int float2str hex2bit hex2int' +
              ' hex2oct hex2str int2bit int2char int2float int2hex' +
              ' int2oct int2str int2unichar isbound ischosen ispresent' +
              ' isvalue lengthof log2str oct2bit oct2char oct2hex oct2int' +
              ' oct2str regexp replace rnd sizeof str2bit str2float' +
              ' str2hex str2int str2oct substr unichar2int unichar2char' +
              ' enum2int'
          ),
          types: t(
            'anytype bitstring boolean char charstring default float' +
              ' hexstring integer objid octetstring universal verdicttype timer'
          ),
          timerOps: t('read running start stop timeout'),
          portOps: t(
            'call catch check clear getcall getreply halt raise receive' +
              ' reply send trigger'
          ),
          configOps: t('create connect disconnect done kill killed map unmap'),
          verdictOps: t('getverdict setverdict'),
          sutOps: t('action'),
          functionOps: t('apply derefers refers'),
          verdictConsts: t('error fail inconc none pass'),
          booleanConsts: t('true false'),
          otherConsts: t('null NULL omit'),
          visibilityModifiers: t('private public friend'),
          templateMatch: t('complement ifpresent subset superset permutation'),
          multiLineStrings: true,
        });
      });
    },
    73556: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('turtle', function (e) {
          var t = e.indentUnit;
          var r;
          function n(e) {
            return new RegExp('^(?:' + e.join('|') + ')$', 'i');
          }
          var i = n([]);
          var a = n(['@prefix', '@base', 'a']);
          var o = /[*+\-<>=&|]/;
          function s(e, t) {
            var n = e.next();
            r = null;
            if (n == '<' && !e.match(/^[\s\u00a0=]/, false)) {
              e.match(/^[^\s\u00a0>]*>?/);
              return 'atom';
            } else if (n == '"' || n == "'") {
              t.tokenize = l(n);
              return t.tokenize(e, t);
            } else if (/[{}\(\),\.;\[\]]/.test(n)) {
              r = n;
              return null;
            } else if (n == '#') {
              e.skipToEnd();
              return 'comment';
            } else if (o.test(n)) {
              e.eatWhile(o);
              return null;
            } else if (n == ':') {
              return 'operator';
            } else {
              e.eatWhile(/[_\w\d]/);
              if (e.peek() == ':') {
                return 'variable-3';
              } else {
                var s = e.current();
                if (a.test(s)) {
                  return 'meta';
                }
                if (n >= 'A' && n <= 'Z') {
                  return 'comment';
                } else {
                  return 'keyword';
                }
              }
              var s = e.current();
              if (i.test(s)) return null;
              else if (a.test(s)) return 'meta';
              else return 'variable';
            }
          }
          function l(e) {
            return function (t, r) {
              var n = false,
                i;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  r.tokenize = s;
                  break;
                }
                n = !n && i == '\\';
              }
              return 'string';
            };
          }
          function u(e, t, r) {
            e.context = { prev: e.context, indent: e.indent, col: r, type: t };
          }
          function c(e) {
            e.indent = e.context.indent;
            e.context = e.context.prev;
          }
          return {
            startState: function () {
              return { tokenize: s, context: null, indent: 0, col: 0 };
            },
            token: function (e, t) {
              if (e.sol()) {
                if (t.context && t.context.align == null) t.context.align = false;
                t.indent = e.indentation();
              }
              if (e.eatSpace()) return null;
              var n = t.tokenize(e, t);
              if (
                n != 'comment' &&
                t.context &&
                t.context.align == null &&
                t.context.type != 'pattern'
              ) {
                t.context.align = true;
              }
              if (r == '(') u(t, ')', e.column());
              else if (r == '[') u(t, ']', e.column());
              else if (r == '{') u(t, '}', e.column());
              else if (/[\]\}\)]/.test(r)) {
                while (t.context && t.context.type == 'pattern') c(t);
                if (t.context && r == t.context.type) c(t);
              } else if (r == '.' && t.context && t.context.type == 'pattern') c(t);
              else if (/atom|string|variable/.test(n) && t.context) {
                if (/[\}\]]/.test(t.context.type)) u(t, 'pattern', e.column());
                else if (t.context.type == 'pattern' && !t.context.align) {
                  t.context.align = true;
                  t.context.col = e.column();
                }
              }
              return n;
            },
            indent: function (e, r) {
              var n = r && r.charAt(0);
              var i = e.context;
              if (/[\]\}]/.test(n)) while (i && i.type == 'pattern') i = i.prev;
              var a = i && n == i.type;
              if (!i) return 0;
              else if (i.type == 'pattern') return i.col;
              else if (i.align) return i.col + (a ? 0 : 1);
              else return i.indent + (a ? 0 : t);
            },
            lineComment: '#',
          };
        });
        e.defineMIME('text/turtle', 'turtle');
      });
    },
    54702: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(87093));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('twig:inner', function () {
          var e = [
              'and',
              'as',
              'autoescape',
              'endautoescape',
              'block',
              'do',
              'endblock',
              'else',
              'elseif',
              'extends',
              'for',
              'endfor',
              'embed',
              'endembed',
              'filter',
              'endfilter',
              'flush',
              'from',
              'if',
              'endif',
              'in',
              'is',
              'include',
              'import',
              'not',
              'or',
              'set',
              'spaceless',
              'endspaceless',
              'with',
              'endwith',
              'trans',
              'endtrans',
              'blocktrans',
              'endblocktrans',
              'macro',
              'endmacro',
              'use',
              'verbatim',
              'endverbatim',
            ],
            t = /^[+\-*&%=<>!?|~^]/,
            r = /^[:\[\(\{]/,
            n = [
              'true',
              'false',
              'null',
              'empty',
              'defined',
              'divisibleby',
              'divisible by',
              'even',
              'odd',
              'iterable',
              'sameas',
              'same as',
            ],
            i = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
          e = new RegExp('((' + e.join(')|(') + '))\\b');
          n = new RegExp('((' + n.join(')|(') + '))\\b');
          function a(a, o) {
            var s = a.peek();
            if (o.incomment) {
              if (!a.skipTo('#}')) {
                a.skipToEnd();
              } else {
                a.eatWhile(/\#|}/);
                o.incomment = false;
              }
              return 'comment';
            } else if (o.intag) {
              if (o.operator) {
                o.operator = false;
                if (a.match(n)) {
                  return 'atom';
                }
                if (a.match(i)) {
                  return 'number';
                }
              }
              if (o.sign) {
                o.sign = false;
                if (a.match(n)) {
                  return 'atom';
                }
                if (a.match(i)) {
                  return 'number';
                }
              }
              if (o.instring) {
                if (s == o.instring) {
                  o.instring = false;
                }
                a.next();
                return 'string';
              } else if (s == "'" || s == '"') {
                o.instring = s;
                a.next();
                return 'string';
              } else if (
                a.match(o.intag + '}') ||
                (a.eat('-') && a.match(o.intag + '}'))
              ) {
                o.intag = false;
                return 'tag';
              } else if (a.match(t)) {
                o.operator = true;
                return 'operator';
              } else if (a.match(r)) {
                o.sign = true;
              } else {
                if (a.eat(' ') || a.sol()) {
                  if (a.match(e)) {
                    return 'keyword';
                  }
                  if (a.match(n)) {
                    return 'atom';
                  }
                  if (a.match(i)) {
                    return 'number';
                  }
                  if (a.sol()) {
                    a.next();
                  }
                } else {
                  a.next();
                }
              }
              return 'variable';
            } else if (a.eat('{')) {
              if (a.eat('#')) {
                o.incomment = true;
                if (!a.skipTo('#}')) {
                  a.skipToEnd();
                } else {
                  a.eatWhile(/\#|}/);
                  o.incomment = false;
                }
                return 'comment';
              } else if ((s = a.eat(/\{|%/))) {
                o.intag = s;
                if (s == '{') {
                  o.intag = '}';
                }
                a.eat('-');
                return 'tag';
              }
            }
            a.next();
          }
          return {
            startState: function () {
              return {};
            },
            token: function (e, t) {
              return a(e, t);
            },
          };
        });
        e.defineMode('twig', function (t, r) {
          var n = e.getMode(t, 'twig:inner');
          if (!r || !r.base) return n;
          return e.multiplexingMode(e.getMode(t, r.base), {
            open: /\{[{#%]/,
            close: /[}#%]\}/,
            mode: n,
            parseDelimiters: true,
          });
        });
        e.defineMIME('text/x-twig', 'twig');
      });
    },
    12660: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('vb', function (t, r) {
          var n = 'error';
          function i(e) {
            return new RegExp('^((' + e.join(')|(') + '))\\b', 'i');
          }
          var a = new RegExp('^[\\+\\-\\*/%&\\\\|\\^~<>!]');
          var o = new RegExp('^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]');
          var s = new RegExp('^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))');
          var l = new RegExp('^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))');
          var u = new RegExp('^((//=)|(>>=)|(<<=)|(\\*\\*=))');
          var c = new RegExp('^[_A-Za-z][_A-Za-z0-9]*');
          var f = [
            'class',
            'module',
            'sub',
            'enum',
            'select',
            'while',
            'if',
            'function',
            'get',
            'set',
            'property',
            'try',
            'structure',
            'synclock',
            'using',
            'with',
          ];
          var d = ['else', 'elseif', 'case', 'catch', 'finally'];
          var m = ['next', 'loop'];
          var p = [
            'and',
            'andalso',
            'or',
            'orelse',
            'xor',
            'in',
            'not',
            'is',
            'isnot',
            'like',
          ];
          var h = i(p);
          var g = [
            '#const',
            '#else',
            '#elseif',
            '#end',
            '#if',
            '#region',
            'addhandler',
            'addressof',
            'alias',
            'as',
            'byref',
            'byval',
            'cbool',
            'cbyte',
            'cchar',
            'cdate',
            'cdbl',
            'cdec',
            'cint',
            'clng',
            'cobj',
            'compare',
            'const',
            'continue',
            'csbyte',
            'cshort',
            'csng',
            'cstr',
            'cuint',
            'culng',
            'cushort',
            'declare',
            'default',
            'delegate',
            'dim',
            'directcast',
            'each',
            'erase',
            'error',
            'event',
            'exit',
            'explicit',
            'false',
            'for',
            'friend',
            'gettype',
            'goto',
            'handles',
            'implements',
            'imports',
            'infer',
            'inherits',
            'interface',
            'isfalse',
            'istrue',
            'lib',
            'me',
            'mod',
            'mustinherit',
            'mustoverride',
            'my',
            'mybase',
            'myclass',
            'namespace',
            'narrowing',
            'new',
            'nothing',
            'notinheritable',
            'notoverridable',
            'of',
            'off',
            'on',
            'operator',
            'option',
            'optional',
            'out',
            'overloads',
            'overridable',
            'overrides',
            'paramarray',
            'partial',
            'private',
            'protected',
            'public',
            'raiseevent',
            'readonly',
            'redim',
            'removehandler',
            'resume',
            'return',
            'shadows',
            'shared',
            'static',
            'step',
            'stop',
            'strict',
            'then',
            'throw',
            'to',
            'true',
            'trycast',
            'typeof',
            'until',
            'until',
            'when',
            'widening',
            'withevents',
            'writeonly',
          ];
          var b = [
            'object',
            'boolean',
            'char',
            'string',
            'byte',
            'sbyte',
            'short',
            'ushort',
            'int16',
            'uint16',
            'integer',
            'uinteger',
            'int32',
            'uint32',
            'long',
            'ulong',
            'int64',
            'uint64',
            'decimal',
            'single',
            'double',
            'float',
            'date',
            'datetime',
            'intptr',
            'uintptr',
          ];
          var v = i(g);
          var k = i(b);
          var _ = '"';
          var x = i(f);
          var y = i(d);
          var w = i(m);
          var E = i(['end']);
          var S = i(['do']);
          var T = null;
          e.registerHelper(
            'hintWords',
            'vb',
            f.concat(d).concat(m).concat(p).concat(g).concat(b)
          );
          function I(e, t) {
            t.currentIndent++;
          }
          function A(e, t) {
            t.currentIndent--;
          }
          function C(e, t) {
            if (e.eatSpace()) {
              return null;
            }
            var r = e.peek();
            if (r === "'") {
              e.skipToEnd();
              return 'comment';
            }
            if (e.match(/^((&H)|(&O))?[0-9\.a-f]/i, false)) {
              var i = false;
              if (e.match(/^\d*\.\d+F?/i)) {
                i = true;
              } else if (e.match(/^\d+\.\d*F?/)) {
                i = true;
              } else if (e.match(/^\.\d+F?/)) {
                i = true;
              }
              if (i) {
                e.eat(/J/i);
                return 'number';
              }
              var f = false;
              if (e.match(/^&H[0-9a-f]+/i)) {
                f = true;
              } else if (e.match(/^&O[0-7]+/i)) {
                f = true;
              } else if (e.match(/^[1-9]\d*F?/)) {
                e.eat(/J/i);
                f = true;
              } else if (e.match(/^0(?![\dx])/i)) {
                f = true;
              }
              if (f) {
                e.eat(/L/i);
                return 'number';
              }
            }
            if (e.match(_)) {
              t.tokenize = z(e.current());
              return t.tokenize(e, t);
            }
            if (e.match(u) || e.match(l)) {
              return null;
            }
            if (e.match(s) || e.match(a) || e.match(h)) {
              return 'operator';
            }
            if (e.match(o)) {
              return null;
            }
            if (e.match(S)) {
              I(e, t);
              t.doInCurrentLine = true;
              return 'keyword';
            }
            if (e.match(x)) {
              if (!t.doInCurrentLine) I(e, t);
              else t.doInCurrentLine = false;
              return 'keyword';
            }
            if (e.match(y)) {
              return 'keyword';
            }
            if (e.match(E)) {
              A(e, t);
              A(e, t);
              return 'keyword';
            }
            if (e.match(w)) {
              A(e, t);
              return 'keyword';
            }
            if (e.match(k)) {
              return 'keyword';
            }
            if (e.match(v)) {
              return 'keyword';
            }
            if (e.match(c)) {
              return 'variable';
            }
            e.next();
            return n;
          }
          function z(e) {
            var t = e.length == 1;
            var i = 'string';
            return function (a, o) {
              while (!a.eol()) {
                a.eatWhile(/[^'"]/);
                if (a.match(e)) {
                  o.tokenize = C;
                  return i;
                } else {
                  a.eat(/['"]/);
                }
              }
              if (t) {
                if (r.singleLineStringErrors) {
                  return n;
                } else {
                  o.tokenize = C;
                }
              }
              return i;
            };
          }
          function R(e, t) {
            var r = t.tokenize(e, t);
            var i = e.current();
            if (i === '.') {
              r = t.tokenize(e, t);
              if (r === 'variable') {
                return 'variable';
              } else {
                return n;
              }
            }
            var a = '[({'.indexOf(i);
            if (a !== -1) {
              I(e, t);
            }
            if (T === 'dedent') {
              if (A(e, t)) {
                return n;
              }
            }
            a = '])}'.indexOf(i);
            if (a !== -1) {
              if (A(e, t)) {
                return n;
              }
            }
            return r;
          }
          var M = {
            electricChars: 'dDpPtTfFeE ',
            startState: function () {
              return {
                tokenize: C,
                lastToken: null,
                currentIndent: 0,
                nextLineIndent: 0,
                doInCurrentLine: false,
              };
            },
            token: function (e, t) {
              if (e.sol()) {
                t.currentIndent += t.nextLineIndent;
                t.nextLineIndent = 0;
                t.doInCurrentLine = 0;
              }
              var r = R(e, t);
              t.lastToken = { style: r, content: e.current() };
              return r;
            },
            indent: function (e, r) {
              var n = r.replace(/^\s+|\s+$/g, '');
              if (n.match(w) || n.match(E) || n.match(y))
                return t.indentUnit * (e.currentIndent - 1);
              if (e.currentIndent < 0) return 0;
              return e.currentIndent * t.indentUnit;
            },
            lineComment: "'",
          };
          return M;
        });
        e.defineMIME('text/x-vb', 'vb');
      });
    },
    98073: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('vbscript', function (e, t) {
          var r = 'error';
          function n(e) {
            return new RegExp('^((' + e.join(')|(') + '))\\b', 'i');
          }
          var i = new RegExp('^[\\+\\-\\*/&\\\\\\^<>=]');
          var a = new RegExp('^((<>)|(<=)|(>=))');
          var o = new RegExp('^[\\.,]');
          var s = new RegExp('^[\\(\\)]');
          var l = new RegExp('^[A-Za-z][_A-Za-z0-9]*');
          var u = [
            'class',
            'sub',
            'select',
            'while',
            'if',
            'function',
            'property',
            'with',
            'for',
          ];
          var c = ['else', 'elseif', 'case'];
          var f = ['next', 'loop', 'wend'];
          var d = n(['and', 'or', 'not', 'xor', 'is', 'mod', 'eqv', 'imp']);
          var m = [
            'dim',
            'redim',
            'then',
            'until',
            'randomize',
            'byval',
            'byref',
            'new',
            'property',
            'exit',
            'in',
            'const',
            'private',
            'public',
            'get',
            'set',
            'let',
            'stop',
            'on error resume next',
            'on error goto 0',
            'option explicit',
            'call',
            'me',
          ];
          var p = ['true', 'false', 'nothing', 'empty', 'null'];
          var h = [
            'abs',
            'array',
            'asc',
            'atn',
            'cbool',
            'cbyte',
            'ccur',
            'cdate',
            'cdbl',
            'chr',
            'cint',
            'clng',
            'cos',
            'csng',
            'cstr',
            'date',
            'dateadd',
            'datediff',
            'datepart',
            'dateserial',
            'datevalue',
            'day',
            'escape',
            'eval',
            'execute',
            'exp',
            'filter',
            'formatcurrency',
            'formatdatetime',
            'formatnumber',
            'formatpercent',
            'getlocale',
            'getobject',
            'getref',
            'hex',
            'hour',
            'inputbox',
            'instr',
            'instrrev',
            'int',
            'fix',
            'isarray',
            'isdate',
            'isempty',
            'isnull',
            'isnumeric',
            'isobject',
            'join',
            'lbound',
            'lcase',
            'left',
            'len',
            'loadpicture',
            'log',
            'ltrim',
            'rtrim',
            'trim',
            'maths',
            'mid',
            'minute',
            'month',
            'monthname',
            'msgbox',
            'now',
            'oct',
            'replace',
            'rgb',
            'right',
            'rnd',
            'round',
            'scriptengine',
            'scriptenginebuildversion',
            'scriptenginemajorversion',
            'scriptengineminorversion',
            'second',
            'setlocale',
            'sgn',
            'sin',
            'space',
            'split',
            'sqr',
            'strcomp',
            'string',
            'strreverse',
            'tan',
            'time',
            'timer',
            'timeserial',
            'timevalue',
            'typename',
            'ubound',
            'ucase',
            'unescape',
            'vartype',
            'weekday',
            'weekdayname',
            'year',
          ];
          var g = [
            'vbBlack',
            'vbRed',
            'vbGreen',
            'vbYellow',
            'vbBlue',
            'vbMagenta',
            'vbCyan',
            'vbWhite',
            'vbBinaryCompare',
            'vbTextCompare',
            'vbSunday',
            'vbMonday',
            'vbTuesday',
            'vbWednesday',
            'vbThursday',
            'vbFriday',
            'vbSaturday',
            'vbUseSystemDayOfWeek',
            'vbFirstJan1',
            'vbFirstFourDays',
            'vbFirstFullWeek',
            'vbGeneralDate',
            'vbLongDate',
            'vbShortDate',
            'vbLongTime',
            'vbShortTime',
            'vbObjectError',
            'vbOKOnly',
            'vbOKCancel',
            'vbAbortRetryIgnore',
            'vbYesNoCancel',
            'vbYesNo',
            'vbRetryCancel',
            'vbCritical',
            'vbQuestion',
            'vbExclamation',
            'vbInformation',
            'vbDefaultButton1',
            'vbDefaultButton2',
            'vbDefaultButton3',
            'vbDefaultButton4',
            'vbApplicationModal',
            'vbSystemModal',
            'vbOK',
            'vbCancel',
            'vbAbort',
            'vbRetry',
            'vbIgnore',
            'vbYes',
            'vbNo',
            'vbCr',
            'VbCrLf',
            'vbFormFeed',
            'vbLf',
            'vbNewLine',
            'vbNullChar',
            'vbNullString',
            'vbTab',
            'vbVerticalTab',
            'vbUseDefault',
            'vbTrue',
            'vbFalse',
            'vbEmpty',
            'vbNull',
            'vbInteger',
            'vbLong',
            'vbSingle',
            'vbDouble',
            'vbCurrency',
            'vbDate',
            'vbString',
            'vbObject',
            'vbError',
            'vbBoolean',
            'vbVariant',
            'vbDataObject',
            'vbDecimal',
            'vbByte',
            'vbArray',
          ];
          var b = ['WScript', 'err', 'debug', 'RegExp'];
          var v = [
            'description',
            'firstindex',
            'global',
            'helpcontext',
            'helpfile',
            'ignorecase',
            'length',
            'number',
            'pattern',
            'source',
            'value',
            'count',
          ];
          var k = [
            'clear',
            'execute',
            'raise',
            'replace',
            'test',
            'write',
            'writeline',
            'close',
            'open',
            'state',
            'eof',
            'update',
            'addnew',
            'end',
            'createobject',
            'quit',
          ];
          var _ = ['server', 'response', 'request', 'session', 'application'];
          var x = [
            'buffer',
            'cachecontrol',
            'charset',
            'contenttype',
            'expires',
            'expiresabsolute',
            'isclientconnected',
            'pics',
            'status',
            'clientcertificate',
            'cookies',
            'form',
            'querystring',
            'servervariables',
            'totalbytes',
            'contents',
            'staticobjects',
            'codepage',
            'lcid',
            'sessionid',
            'timeout',
            'scripttimeout',
          ];
          var y = [
            'addheader',
            'appendtolog',
            'binarywrite',
            'end',
            'flush',
            'redirect',
            'binaryread',
            'remove',
            'removeall',
            'lock',
            'unlock',
            'abandon',
            'getlasterror',
            'htmlencode',
            'mappath',
            'transfer',
            'urlencode',
          ];
          var w = k.concat(v);
          b = b.concat(g);
          if (e.isASP) {
            b = b.concat(_);
            w = w.concat(y, x);
          }
          var E = n(m);
          var S = n(p);
          var T = n(h);
          var I = n(b);
          var A = n(w);
          var C = '"';
          var z = n(u);
          var R = n(c);
          var M = n(f);
          var O = n(['end']);
          var N = n(['do']);
          var $ = n(['on error resume next', 'exit']);
          var L = n(['rem']);
          function D(e, t) {
            t.currentIndent++;
          }
          function P(e, t) {
            t.currentIndent--;
          }
          function U(e, t) {
            if (e.eatSpace()) {
              return 'space';
            }
            var n = e.peek();
            if (n === "'") {
              e.skipToEnd();
              return 'comment';
            }
            if (e.match(L)) {
              e.skipToEnd();
              return 'comment';
            }
            if (
              e.match(/^((&H)|(&O))?[0-9\.]/i, false) &&
              !e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, false)
            ) {
              var u = false;
              if (e.match(/^\d*\.\d+/i)) {
                u = true;
              } else if (e.match(/^\d+\.\d*/)) {
                u = true;
              } else if (e.match(/^\.\d+/)) {
                u = true;
              }
              if (u) {
                e.eat(/J/i);
                return 'number';
              }
              var c = false;
              if (e.match(/^&H[0-9a-f]+/i)) {
                c = true;
              } else if (e.match(/^&O[0-7]+/i)) {
                c = true;
              } else if (e.match(/^[1-9]\d*F?/)) {
                e.eat(/J/i);
                c = true;
              } else if (e.match(/^0(?![\dx])/i)) {
                c = true;
              }
              if (c) {
                e.eat(/L/i);
                return 'number';
              }
            }
            if (e.match(C)) {
              t.tokenize = F(e.current());
              return t.tokenize(e, t);
            }
            if (e.match(a) || e.match(i) || e.match(d)) {
              return 'operator';
            }
            if (e.match(o)) {
              return null;
            }
            if (e.match(s)) {
              return 'bracket';
            }
            if (e.match($)) {
              t.doInCurrentLine = true;
              return 'keyword';
            }
            if (e.match(N)) {
              D(e, t);
              t.doInCurrentLine = true;
              return 'keyword';
            }
            if (e.match(z)) {
              if (!t.doInCurrentLine) D(e, t);
              else t.doInCurrentLine = false;
              return 'keyword';
            }
            if (e.match(R)) {
              return 'keyword';
            }
            if (e.match(O)) {
              P(e, t);
              P(e, t);
              return 'keyword';
            }
            if (e.match(M)) {
              if (!t.doInCurrentLine) P(e, t);
              else t.doInCurrentLine = false;
              return 'keyword';
            }
            if (e.match(E)) {
              return 'keyword';
            }
            if (e.match(S)) {
              return 'atom';
            }
            if (e.match(A)) {
              return 'variable-2';
            }
            if (e.match(T)) {
              return 'builtin';
            }
            if (e.match(I)) {
              return 'variable-2';
            }
            if (e.match(l)) {
              return 'variable';
            }
            e.next();
            return r;
          }
          function F(e) {
            var n = e.length == 1;
            var i = 'string';
            return function (a, o) {
              while (!a.eol()) {
                a.eatWhile(/[^'"]/);
                if (a.match(e)) {
                  o.tokenize = U;
                  return i;
                } else {
                  a.eat(/['"]/);
                }
              }
              if (n) {
                if (t.singleLineStringErrors) {
                  return r;
                } else {
                  o.tokenize = U;
                }
              }
              return i;
            };
          }
          function q(e, t) {
            var n = t.tokenize(e, t);
            var i = e.current();
            if (i === '.') {
              n = t.tokenize(e, t);
              i = e.current();
              if (
                n &&
                (n.substr(0, 8) === 'variable' || n === 'builtin' || n === 'keyword')
              ) {
                if (n === 'builtin' || n === 'keyword') n = 'variable';
                if (w.indexOf(i.substr(1)) > -1) n = 'variable-2';
                return n;
              } else {
                return r;
              }
            }
            return n;
          }
          var W = {
            electricChars: 'dDpPtTfFeE ',
            startState: function () {
              return {
                tokenize: U,
                lastToken: null,
                currentIndent: 0,
                nextLineIndent: 0,
                doInCurrentLine: false,
                ignoreKeyword: false,
              };
            },
            token: function (e, t) {
              if (e.sol()) {
                t.currentIndent += t.nextLineIndent;
                t.nextLineIndent = 0;
                t.doInCurrentLine = 0;
              }
              var r = q(e, t);
              t.lastToken = { style: r, content: e.current() };
              if (r === 'space') r = null;
              return r;
            },
            indent: function (t, r) {
              var n = r.replace(/^\s+|\s+$/g, '');
              if (n.match(M) || n.match(O) || n.match(R))
                return e.indentUnit * (t.currentIndent - 1);
              if (t.currentIndent < 0) return 0;
              return t.currentIndent * e.indentUnit;
            },
          };
          return W;
        });
        e.defineMIME('text/vbscript', 'vbscript');
      });
    },
    15912: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('velocity', function () {
          function e(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var t = e(
            '#end #else #break #stop #[[ #]] ' + '#{end} #{else} #{break} #{stop}'
          );
          var r = e(
            '#if #elseif #foreach #set #include #parse #macro #define #evaluate ' +
              '#{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}'
          );
          var n = e(
            '$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent'
          );
          var i = /[+\-*&%=<>!?:\/|]/;
          function a(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function o(e, o) {
            var c = o.beforeParams;
            o.beforeParams = false;
            var f = e.next();
            if (f == "'" && !o.inString && o.inParams) {
              o.lastTokenWasBuiltin = false;
              return a(e, o, s(f));
            } else if (f == '"') {
              o.lastTokenWasBuiltin = false;
              if (o.inString) {
                o.inString = false;
                return 'string';
              } else if (o.inParams) return a(e, o, s(f));
            } else if (/[\[\]{}\(\),;\.]/.test(f)) {
              if (f == '(' && c) o.inParams = true;
              else if (f == ')') {
                o.inParams = false;
                o.lastTokenWasBuiltin = true;
              }
              return null;
            } else if (/\d/.test(f)) {
              o.lastTokenWasBuiltin = false;
              e.eatWhile(/[\w\.]/);
              return 'number';
            } else if (f == '#' && e.eat('*')) {
              o.lastTokenWasBuiltin = false;
              return a(e, o, l);
            } else if (f == '#' && e.match(/ *\[ *\[/)) {
              o.lastTokenWasBuiltin = false;
              return a(e, o, u);
            } else if (f == '#' && e.eat('#')) {
              o.lastTokenWasBuiltin = false;
              e.skipToEnd();
              return 'comment';
            } else if (f == '$') {
              e.eat('!');
              e.eatWhile(/[\w\d\$_\.{}-]/);
              if (n && n.propertyIsEnumerable(e.current())) {
                return 'keyword';
              } else {
                o.lastTokenWasBuiltin = true;
                o.beforeParams = true;
                return 'builtin';
              }
            } else if (i.test(f)) {
              o.lastTokenWasBuiltin = false;
              e.eatWhile(i);
              return 'operator';
            } else {
              e.eatWhile(/[\w\$_{}@]/);
              var d = e.current();
              if (t && t.propertyIsEnumerable(d)) return 'keyword';
              if (
                (r && r.propertyIsEnumerable(d)) ||
                (e.current().match(/^#@?[a-z0-9_]+ *$/i) &&
                  e.peek() == '(' &&
                  !(r && r.propertyIsEnumerable(d.toLowerCase())))
              ) {
                o.beforeParams = true;
                o.lastTokenWasBuiltin = false;
                return 'keyword';
              }
              if (o.inString) {
                o.lastTokenWasBuiltin = false;
                return 'string';
              }
              if (
                e.pos > d.length &&
                e.string.charAt(e.pos - d.length - 1) == '.' &&
                o.lastTokenWasBuiltin
              )
                return 'builtin';
              o.lastTokenWasBuiltin = false;
              return null;
            }
          }
          function s(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                if (e == '"' && t.peek() == '$' && !n) {
                  r.inString = true;
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a) r.tokenize = o;
              return 'string';
            };
          }
          function l(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '#' && r) {
                t.tokenize = o;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function u(e, t) {
            var r = 0,
              n;
            while ((n = e.next())) {
              if (n == '#' && r == 2) {
                t.tokenize = o;
                break;
              }
              if (n == ']') r++;
              else if (n != ' ') r = 0;
            }
            return 'meta';
          }
          return {
            startState: function () {
              return {
                tokenize: o,
                beforeParams: false,
                inParams: false,
                inString: false,
                lastTokenWasBuiltin: false,
              };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return t.tokenize(e, t);
            },
            blockCommentStart: '#*',
            blockCommentEnd: '*#',
            lineComment: '##',
            fold: 'velocity',
          };
        });
        e.defineMIME('text/velocity', 'velocity');
      });
    },
    63249: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('verilog', function (t, r) {
          var n = t.indentUnit,
            i = r.statementIndentUnit || n,
            a = r.dontAlignCalls,
            o = r.compilerDirectivesUseRegularIndentation,
            s = r.noIndentKeywords || [],
            l = r.multiLineStrings,
            u = r.hooks || {};
          function c(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var f = c(
            'accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind ' +
              'bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config ' +
              'const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable ' +
              'dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup ' +
              'endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask ' +
              'enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin ' +
              'function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import ' +
              'incdir include initial inout input inside instance int integer interconnect interface intersect join join_any ' +
              'join_none large let liblist library local localparam logic longint macromodule matches medium modport module ' +
              'nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed ' +
              'parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup ' +
              'pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg ' +
              'reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime ' +
              's_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify ' +
              'specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on ' +
              'table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior ' +
              'trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void ' +
              'wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor'
          );
          var d = /[\+\-\*\/!~&|^%=?:<>]/;
          var m = /[\[\]{}()]/;
          var p = /\d[0-9_]*/;
          var h = /\d*\s*'s?d\s*\d[0-9_]*/i;
          var g = /\d*\s*'s?b\s*[xz01][xz01_]*/i;
          var b = /\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i;
          var v = /\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i;
          var k = /(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i;
          var _ = /^((`?\w+)|[)}\]])/;
          var x = /[)}\]]/;
          var y = new RegExp(
            '^(`(?:ifdef|ifndef|elsif|else|endif|undef|undefineall|define|include|begin_keywords|celldefine|default|' +
              'nettype|end_keywords|endcelldefine|line|nounconnected_drive|pragma|resetall|timescale|unconnected_drive))\\b'
          );
          var w = /^(`(?:ifdef|ifndef|elsif|else))\b/;
          var E = /^(`(?:elsif|else|endif))\b/;
          var S;
          var T;
          var I = c(
            'case checker class clocking config function generate interface module package ' +
              'primitive program property specify sequence table task'
          );
          var A = {};
          for (var C in I) {
            A[C] = 'end' + C;
          }
          A['begin'] = 'end';
          A['casex'] = 'endcase';
          A['casez'] = 'endcase';
          A['do'] = 'while';
          A['fork'] = 'join;join_any;join_none';
          A['covergroup'] = 'endgroup';
          A['macro_begin'] = 'macro_end';
          for (var z in s) {
            var C = s[z];
            if (A[C]) {
              A[C] = undefined;
            }
          }
          var R = c(
            'always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while extern typedef'
          );
          function M(e, t) {
            var r = e.peek(),
              n;
            if (u[r] && (n = u[r](e, t)) != false) return n;
            if (u.tokenBase && (n = u.tokenBase(e, t)) != false) return n;
            if (/[,;:\.]/.test(r)) {
              S = e.next();
              return null;
            }
            if (m.test(r)) {
              S = e.next();
              return 'bracket';
            }
            if (r == '`') {
              e.next();
              if (e.eatWhile(/[\w\$_]/)) {
                var i = e.current();
                T = i;
                if (i.startsWith('`uvm_') && i.endsWith('_begin')) {
                  var a = T.substr(0, T.length - 5) + 'end';
                  A[i] = a;
                  S = 'newblock';
                } else {
                  e.eatSpace();
                  if (e.peek() == '(') {
                    S = 'newmacro';
                  }
                  var o = e.current();
                  e.backUp(o.length - i.length);
                }
                return 'def';
              } else {
                return null;
              }
            }
            if (r == '$') {
              e.next();
              if (e.eatWhile(/[\w\$_]/)) {
                return 'meta';
              } else {
                return null;
              }
            }
            if (r == '#') {
              e.next();
              e.eatWhile(/[\d_.]/);
              return 'def';
            }
            if (r == '@') {
              e.next();
              e.eatWhile(/[@]/);
              return 'def';
            }
            if (r == '"') {
              e.next();
              t.tokenize = O(r);
              return t.tokenize(e, t);
            }
            if (r == '/') {
              e.next();
              if (e.eat('*')) {
                t.tokenize = N;
                return N(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
              e.backUp(1);
            }
            if (
              e.match(k) ||
              e.match(h) ||
              e.match(g) ||
              e.match(b) ||
              e.match(v) ||
              e.match(p) ||
              e.match(k)
            ) {
              return 'number';
            }
            if (e.eatWhile(d)) {
              S = e.current();
              return 'meta';
            }
            if (e.eatWhile(/[\w\$_]/)) {
              var i = e.current();
              if (f[i]) {
                if (A[i]) {
                  S = 'newblock';
                  if (i === 'fork') {
                    e.eatSpace();
                    if (e.peek() == ';') {
                      S = 'newstatement';
                    }
                    e.backUp(e.current().length - i.length);
                  }
                }
                if (R[i]) {
                  S = 'newstatement';
                }
                T = i;
                return 'keyword';
              }
              return 'variable';
            }
            e.next();
            return null;
          }
          function O(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '\\';
              }
              if (a || !(n || l)) r.tokenize = M;
              return 'string';
            };
          }
          function N(e, t) {
            var r = false,
              n;
            while ((n = e.next())) {
              if (n == '/' && r) {
                t.tokenize = M;
                break;
              }
              r = n == '*';
            }
            return 'comment';
          }
          function $(e, t, r, n, i, a) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.scopekind = n;
            this.align = i;
            this.prev = a;
          }
          function L(e, t, r, n) {
            var i = e.indented;
            var a = new $(i, t, r, n ? n : '', null, e.context);
            return (e.context = a);
          }
          function D(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') {
              e.indented = e.context.indented;
            }
            return (e.context = e.context.prev);
          }
          function P(e, t) {
            if (e == t) {
              return true;
            } else {
              var r = t.split(';');
              for (var n in r) {
                if (e == r[n]) {
                  return true;
                }
              }
              return false;
            }
          }
          function U(e, t) {
            if (e == null) {
              return false;
            }
            if (e.scopekind === t) {
              return true;
            }
            return U(e.prev, t);
          }
          function F() {
            var e = [];
            for (var t in A) {
              if (A[t]) {
                var r = A[t].split(';');
                for (var n in r) {
                  e.push(r[n]);
                }
              }
            }
            var i = new RegExp('[{}()\\[\\]]|(' + e.join('|') + ')$');
            return i;
          }
          return {
            electricInput: F(),
            startState: function (e) {
              var t = {
                tokenize: null,
                context: new $((e || 0) - n, 0, 'top', 'top', false),
                indented: 0,
                compilerDirectiveIndented: 0,
                startOfLine: true,
              };
              if (u.startState) u.startState(t);
              return t;
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (u.token) {
                var n = u.token(e, t);
                if (n !== undefined) {
                  return n;
                }
              }
              if (e.eatSpace()) return null;
              S = null;
              T = null;
              var n = (t.tokenize || M)(e, t);
              if (n == 'comment' || n == 'meta' || n == 'variable') {
                if ((S === '=' || S === '<=') && !U(r, 'assignment')) {
                  L(t, e.column() + S.length, 'assignment', 'assignment');
                  if (r.align == null) r.align = true;
                }
                return n;
              }
              if (r.align == null) r.align = true;
              var a =
                r.type == 'assignment' && x.test(S) && r.prev && r.prev.type === S;
              if (S == r.type || a) {
                if (a) {
                  r = D(t);
                }
                r = D(t);
                if (S == ')') {
                  if (r && r.type === 'macro') {
                    r = D(t);
                    while (r && (r.type == 'statement' || r.type == 'assignment'))
                      r = D(t);
                  }
                } else if (S == '}') {
                  if (r && r.type === 'statement') {
                    while (r && r.type == 'statement') r = D(t);
                  }
                }
              } else if (
                ((S == ';' || S == ',') &&
                  (r.type == 'statement' || r.type == 'assignment')) ||
                (r.type && P(T, r.type))
              ) {
                r = D(t);
                while (r && (r.type == 'statement' || r.type == 'assignment')) r = D(t);
              } else if (S == '{') {
                L(t, e.column(), '}');
              } else if (S == '[') {
                L(t, e.column(), ']');
              } else if (S == '(') {
                L(t, e.column(), ')');
              } else if (r && r.type == 'endcase' && S == ':') {
                L(t, e.column(), 'statement', 'case');
              } else if (S == 'newstatement') {
                L(t, e.column(), 'statement', T);
              } else if (S == 'newblock') {
                if (
                  T == 'function' &&
                  r &&
                  (r.type == 'statement' || r.type == 'endgroup')
                ) {
                } else if (T == 'task' && r && r.type == 'statement') {
                } else if (T == 'class' && r && r.type == 'statement') {
                } else {
                  var o = A[T];
                  L(t, e.column(), o, T);
                }
              } else if (S == 'newmacro' || (T && T.match(y))) {
                if (S == 'newmacro') {
                  L(t, e.column(), 'macro', 'macro');
                }
                if (T.match(E)) {
                  t.compilerDirectiveIndented -= i;
                }
                if (T.match(w)) {
                  t.compilerDirectiveIndented += i;
                }
              }
              t.startOfLine = false;
              return n;
            },
            indent: function (t, r) {
              if (t.tokenize != M && t.tokenize != null) return e.Pass;
              if (u.indent) {
                var s = u.indent(t);
                if (s >= 0) return s;
              }
              var l = t.context,
                c = r && r.charAt(0);
              if (l.type == 'statement' && c == '}') l = l.prev;
              var f = false;
              var d = r.match(_);
              if (d) f = P(d[0], l.type);
              if (!o && r.match(y)) {
                if (r.match(E)) {
                  return t.compilerDirectiveIndented - i;
                }
                return t.compilerDirectiveIndented;
              }
              if (l.type == 'statement') return l.indented + (c == '{' ? 0 : i);
              else if ((x.test(l.type) || l.type == 'assignment') && l.align && !a)
                return l.column + (f ? 0 : 1);
              else if (l.type == ')' && !f) return l.indented + i;
              else return l.indented + (f ? 0 : n);
            },
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
            fold: 'indent',
          };
        });
        e.defineMIME('text/x-verilog', { name: 'verilog' });
        e.defineMIME('text/x-systemverilog', { name: 'verilog' });
        var t = {
          '|': 'link',
          '>': 'property',
          $: 'variable',
          $$: 'variable',
          '?$': 'qualifier',
          '?*': 'qualifier',
          '-': 'hr',
          '/': 'property',
          '/-': 'property',
          '@': 'variable-3',
          '@-': 'variable-3',
          '@++': 'variable-3',
          '@+=': 'variable-3',
          '@+=-': 'variable-3',
          '@--': 'variable-3',
          '@-=': 'variable-3',
          '%+': 'tag',
          '%-': 'tag',
          '%': 'tag',
          '>>': 'tag',
          '<<': 'tag',
          '<>': 'tag',
          '#': 'tag',
          '^': 'attribute',
          '^^': 'attribute',
          '^!': 'attribute',
          '*': 'variable-2',
          '**': 'variable-2',
          '\\': 'keyword',
          '"': 'comment',
        };
        var r = {
          '/': 'beh-hier',
          '>': 'beh-hier',
          '-': 'phys-hier',
          '|': 'pipe',
          '?': 'when',
          '@': 'stage',
          '\\': 'keyword',
        };
        var n = 3;
        var i = false;
        var a = /^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/;
        var o = /^[! ]  /;
        var s = /^[! ] */;
        var l = /^\/[\/\*]/;
        function u(e, t, r) {
          var i = t / n;
          return 'tlv-' + e.tlvIndentationStyle[i] + '-' + r;
        }
        function c(e) {
          var t;
          return (t = e.match(a, false)) && t[2].length > 0;
        }
        e.defineMIME('text/x-tlv', {
          name: 'verilog',
          hooks: {
            electricInput: false,
            token: function (e, f) {
              var d = undefined;
              var m;
              if (e.sol() && !f.tlvInBlockComment) {
                if (e.peek() == '\\') {
                  d = 'def';
                  e.skipToEnd();
                  if (e.string.match(/\\SV/)) {
                    f.tlvCodeActive = false;
                  } else if (e.string.match(/\\TLV/)) {
                    f.tlvCodeActive = true;
                  }
                }
                if (
                  f.tlvCodeActive &&
                  e.pos == 0 &&
                  f.indented == 0 &&
                  (m = e.match(s, false))
                ) {
                  f.indented = m[0].length;
                }
                var p = f.indented;
                var h = p / n;
                if (h <= f.tlvIndentationStyle.length) {
                  var g = e.string.length == p;
                  var b = h * n;
                  if (b < e.string.length) {
                    var v = e.string.slice(b);
                    var k = v[0];
                    if (r[k] && (m = v.match(a)) && t[m[1]]) {
                      p += n;
                      if (!(k == '\\' && b > 0)) {
                        f.tlvIndentationStyle[h] = r[k];
                        if (i) {
                          f.statementComment = false;
                        }
                        h++;
                      }
                    }
                  }
                  if (!g) {
                    while (f.tlvIndentationStyle.length > h) {
                      f.tlvIndentationStyle.pop();
                    }
                  }
                }
                f.tlvNextIndent = p;
              }
              if (f.tlvCodeActive) {
                var _ = false;
                if (i) {
                  _ =
                    e.peek() != ' ' &&
                    d === undefined &&
                    !f.tlvInBlockComment &&
                    e.column() == f.tlvIndentationStyle.length * n;
                  if (_) {
                    if (f.statementComment) {
                      _ = false;
                    }
                    f.statementComment = e.match(l, false);
                  }
                }
                var m;
                if (d !== undefined) {
                  d += ' ' + u(f, 0, 'scope-ident');
                } else if (
                  e.pos / n < f.tlvIndentationStyle.length &&
                  (m = e.match(e.sol() ? o : /^   /))
                ) {
                  d =
                    'tlv-indent-' +
                    (e.pos % 2 == 0 ? 'even' : 'odd') +
                    ' ' +
                    u(f, e.pos - n, 'indent');
                  if (m[0].charAt(0) == '!') {
                    d += ' tlv-alert-line-prefix';
                  }
                  if (c(e)) {
                    d += ' ' + u(f, e.pos, 'before-scope-ident');
                  }
                } else if (f.tlvInBlockComment) {
                  if (e.match(/^.*?\*\//)) {
                    f.tlvInBlockComment = false;
                    if (i && !e.eol()) {
                      f.statementComment = false;
                    }
                  } else {
                    e.skipToEnd();
                  }
                  d = 'comment';
                } else if ((m = e.match(l)) && !f.tlvInBlockComment) {
                  if (m[0] == '//') {
                    e.skipToEnd();
                  } else {
                    f.tlvInBlockComment = true;
                  }
                  d = 'comment';
                } else if ((m = e.match(a))) {
                  var x = m[1];
                  var y = m[2];
                  if (t.hasOwnProperty(x) && (y.length > 0 || e.eol())) {
                    d = t[x];
                    if (e.column() == f.indented) {
                      d += ' ' + u(f, e.column(), 'scope-ident');
                    }
                  } else {
                    e.backUp(e.current().length - 1);
                    d = 'tlv-default';
                  }
                } else if (e.match(/^\t+/)) {
                  d = 'tlv-tab';
                } else if (e.match(/^[\[\]{}\(\);\:]+/)) {
                  d = 'meta';
                } else if ((m = e.match(/^[mM]4([\+_])?[\w\d_]*/))) {
                  d = m[1] == '+' ? 'tlv-m4-plus' : 'tlv-m4';
                } else if (e.match(/^ +/)) {
                  if (e.eol()) {
                    d = 'error';
                  } else {
                    d = 'tlv-default';
                  }
                } else if (e.match(/^[\w\d_]+/)) {
                  d = 'number';
                } else {
                  e.next();
                  d = 'tlv-default';
                }
                if (_) {
                  d += ' tlv-statement';
                }
              } else {
                if (e.match(/^[mM]4([\w\d_]*)/)) {
                  d = 'tlv-m4';
                }
              }
              return d;
            },
            indent: function (e) {
              return e.tlvCodeActive == true ? e.tlvNextIndent : -1;
            },
            startState: function (e) {
              e.tlvIndentationStyle = [];
              e.tlvCodeActive = true;
              e.tlvNextIndent = -1;
              e.tlvInBlockComment = false;
              if (i) {
                e.statementComment = false;
              }
            },
          },
        });
      });
    },
    53140: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          var t = {},
            r = e.split(',');
          for (var n = 0; n < r.length; ++n) {
            var i = r[n].toUpperCase();
            var a = r[n].charAt(0).toUpperCase() + r[n].slice(1);
            t[r[n]] = true;
            t[i] = true;
            t[a] = true;
          }
          return t;
        }
        function r(e) {
          e.eatWhile(/[\w\$_]/);
          return 'meta';
        }
        e.defineMode('vhdl', function (e, n) {
          var i = e.indentUnit,
            a = n.atoms || t('null'),
            o = n.hooks || { '`': r, $: r },
            s = n.multiLineStrings;
          var l = t(
            'abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,' +
              'body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,' +
              'end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,' +
              'function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,' +
              'literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,' +
              'postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,' +
              'sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor'
          );
          var u = t(
            'architecture,entity,begin,case,port,else,elsif,end,for,function,if'
          );
          var c = /[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/;
          var f;
          function d(e, t) {
            var r = e.next();
            if (o[r]) {
              var n = o[r](e, t);
              if (n !== false) return n;
            }
            if (r == '"') {
              t.tokenize = p(r);
              return t.tokenize(e, t);
            }
            if (r == "'") {
              t.tokenize = m(r);
              return t.tokenize(e, t);
            }
            if (/[\[\]{}\(\),;\:\.]/.test(r)) {
              f = r;
              return null;
            }
            if (/[\d']/.test(r)) {
              e.eatWhile(/[\w\.']/);
              return 'number';
            }
            if (r == '-') {
              if (e.eat('-')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            if (c.test(r)) {
              e.eatWhile(c);
              return 'operator';
            }
            e.eatWhile(/[\w\$_]/);
            var i = e.current();
            if (l.propertyIsEnumerable(i.toLowerCase())) {
              if (u.propertyIsEnumerable(i)) f = 'newstatement';
              return 'keyword';
            }
            if (a.propertyIsEnumerable(i)) return 'atom';
            return 'variable';
          }
          function m(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '--';
              }
              if (a || !(n || s)) r.tokenize = d;
              return 'string';
            };
          }
          function p(e) {
            return function (t, r) {
              var n = false,
                i,
                a = false;
              while ((i = t.next()) != null) {
                if (i == e && !n) {
                  a = true;
                  break;
                }
                n = !n && i == '--';
              }
              if (a || !(n || s)) r.tokenize = d;
              return 'string-2';
            };
          }
          function h(e, t, r, n, i) {
            this.indented = e;
            this.column = t;
            this.type = r;
            this.align = n;
            this.prev = i;
          }
          function g(e, t, r) {
            return (e.context = new h(e.indented, t, r, null, e.context));
          }
          function b(e) {
            var t = e.context.type;
            if (t == ')' || t == ']' || t == '}') e.indented = e.context.indented;
            return (e.context = e.context.prev);
          }
          return {
            startState: function (e) {
              return {
                tokenize: null,
                context: new h((e || 0) - i, 0, 'top', false),
                indented: 0,
                startOfLine: true,
              };
            },
            token: function (e, t) {
              var r = t.context;
              if (e.sol()) {
                if (r.align == null) r.align = false;
                t.indented = e.indentation();
                t.startOfLine = true;
              }
              if (e.eatSpace()) return null;
              f = null;
              var n = (t.tokenize || d)(e, t);
              if (n == 'comment' || n == 'meta') return n;
              if (r.align == null) r.align = true;
              if ((f == ';' || f == ':') && r.type == 'statement') b(t);
              else if (f == '{') g(t, e.column(), '}');
              else if (f == '[') g(t, e.column(), ']');
              else if (f == '(') g(t, e.column(), ')');
              else if (f == '}') {
                while (r.type == 'statement') r = b(t);
                if (r.type == '}') r = b(t);
                while (r.type == 'statement') r = b(t);
              } else if (f == r.type) b(t);
              else if (
                r.type == '}' ||
                r.type == 'top' ||
                (r.type == 'statement' && f == 'newstatement')
              )
                g(t, e.column(), 'statement');
              t.startOfLine = false;
              return n;
            },
            indent: function (e, t) {
              if (e.tokenize != d && e.tokenize != null) return 0;
              var r = t && t.charAt(0),
                n = e.context,
                a = r == n.type;
              if (n.type == 'statement') return n.indented + (r == '{' ? 0 : i);
              else if (n.align) return n.column + (a ? 0 : 1);
              else return n.indented + (a ? 0 : i);
            },
            electricChars: '{}',
          };
        });
        e.defineMIME('text/x-vhdl', 'vhdl');
      });
    },
    2426: (e, t, r) => {
      (function (e) {
        'use strict';
        if (true) {
          e(
            r(4631),
            r(14146),
            r(29589),
            r(96876),
            r(90044),
            r(36629),
            r(81201),
            r(60742),
            r(75354),
            r(62101)
          );
        } else {
        }
      })(function (e) {
        var t = {
          script: [
            ['lang', /coffee(script)?/, 'coffeescript'],
            [
              'type',
              /^(?:text|application)\/(?:x-)?coffee(?:script)?$/,
              'coffeescript',
            ],
            ['lang', /^babel$/, 'javascript'],
            ['type', /^text\/babel$/, 'javascript'],
            ['type', /^text\/ecmascript-\d+$/, 'javascript'],
          ],
          style: [
            ['lang', /^stylus$/i, 'stylus'],
            ['lang', /^sass$/i, 'sass'],
            ['lang', /^less$/i, 'text/x-less'],
            ['lang', /^scss$/i, 'text/x-scss'],
            ['type', /^(text\/)?(x-)?styl(us)?$/i, 'stylus'],
            ['type', /^text\/sass/i, 'sass'],
            ['type', /^(text\/)?(x-)?scss$/i, 'text/x-scss'],
            ['type', /^(text\/)?(x-)?less$/i, 'text/x-less'],
          ],
          template: [
            ['lang', /^vue-template$/i, 'vue'],
            ['lang', /^pug$/i, 'pug'],
            ['lang', /^handlebars$/i, 'handlebars'],
            ['type', /^(text\/)?(x-)?pug$/i, 'pug'],
            ['type', /^text\/x-handlebars-template$/i, 'handlebars'],
            [null, null, 'vue-template'],
          ],
        };
        e.defineMode('vue-template', function (t, r) {
          var n = {
            token: function (e) {
              if (e.match(/^\{\{.*?\}\}/)) return 'meta mustache';
              while (e.next() && !e.match('{{', false)) {}
              return null;
            },
          };
          return e.overlayMode(e.getMode(t, r.backdrop || 'text/html'), n);
        });
        e.defineMode(
          'vue',
          function (r) {
            return e.getMode(r, { name: 'htmlmixed', tags: t });
          },
          'htmlmixed',
          'xml',
          'javascript',
          'coffeescript',
          'css',
          'sass',
          'stylus',
          'pug',
          'handlebars'
        );
        e.defineMIME('script/x-vue', 'vue');
        e.defineMIME('text/x-vue', 'vue');
      });
    },
    8632: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(40790));
        else {
        }
      })(function (e) {
        'use strict';
        var t = [
          'align',
          'block',
          'br(_if|_table|_on_(cast|data|func|i31|null))?',
          'call(_indirect|_ref)?',
          'current_memory',
          '\\bdata\\b',
          'catch(_all)?',
          'delegate',
          'drop',
          'elem',
          'else',
          'end',
          'export',
          '\\bextern\\b',
          '\\bfunc\\b',
          'global(\\.(get|set))?',
          'if',
          'import',
          'local(\\.(get|set|tee))?',
          'loop',
          'module',
          'mut',
          'nop',
          'offset',
          'param',
          'result',
          'rethrow',
          'return(_call(_indirect|_ref)?)?',
          'select',
          'start',
          'table(\\.(size|get|set|size|grow|fill|init|copy))?',
          'then',
          'throw',
          'try',
          'type',
          'unreachable',
          'unwind',
          'i(32|64)\\.(store(8|16)|(load(8|16)_[su]))',
          'i64\\.(load32_[su]|store32)',
          '[fi](32|64)\\.(const|load|store)',
          'f(32|64)\\.(abs|add|ceil|copysign|div|eq|floor|[gl][et]|max|min|mul|nearest|neg?|sqrt|sub|trunc)',
          'i(32|64)\\.(a[dn]d|c[lt]z|(div|rem)_[su]|eqz?|[gl][te]_[su]|mul|ne|popcnt|rot[lr]|sh(l|r_[su])|sub|x?or)',
          'i64\\.extend_[su]_i32',
          'i32\\.wrap_i64',
          'i(32|64)\\.trunc_f(32|64)_[su]',
          'f(32|64)\\.convert_i(32|64)_[su]',
          'f64\\.promote_f32',
          'f32\\.demote_f64',
          'f32\\.reinterpret_i32',
          'i32\\.reinterpret_f32',
          'f64\\.reinterpret_i64',
          'i64\\.reinterpret_f64',
          'memory(\\.((atomic\\.(notify|wait(32|64)))|grow|size))?',
          'i64.atomic\\.(load32_u|store32|rmw32\\.(a[dn]d|sub|x?or|(cmp)?xchg)_u)',
          'i(32|64)\\.atomic\\.(load((8|16)_u)?|store(8|16)?|rmw(\\.(a[dn]d|sub|x?or|(cmp)?xchg)|(8|16)\\.(a[dn]d|sub|x?or|(cmp)?xchg)_u))',
          'v128\\.load(8x8|16x4|32x2)_[su]',
          'v128\\.load(8|16|32|64)_splat',
          'v128\\.(load|store)(8|16|32|64)_lane',
          'v128\\.load(32|64)_zero',
          'v128.(load|store|const|not|andnot|and|or|xor|bitselect|any_true)',
          'i(8x16|16x8)\\.(extract_lane_[su]|(add|sub)_sat_[su]|avgr_u)',
          'i(8x16|16x8|32x4|64x2)\\.(neg|add|sub|abs|shl|shr_[su]|all_true|bitmask|eq|ne|[lg][te]_s)',
          '(i(8x16|16x8|32x4|64x2)|f(32x4|64x2)).(splat|replace_lane)',
          'i(8x16|16x8|32x4)\\.(([lg][te]_u)|((min|max)_[su]))',
          'f(32x4|64x2)\\.(neg|add|sub|abs|nearest|eq|ne|[lg][te]|sqrt|mul|div|min|max|ceil|floor|trunc)',
          '[fi](32x4|64x2)\\.extract_lane',
          'i8x16\\.(shuffle|swizzle|popcnt|narrow_i16x8_[su])',
          'i16x8\\.(narrow_i32x4_[su]|mul|extadd_pairwise_i8x16_[su]|q15mulr_sat_s)',
          'i16x8\\.(extend|extmul)_(low|high)_i8x16_[su]',
          'i32x4\\.(mul|dot_i16x8_s|trunc_sat_f64x2_[su]_zero)',
          'i32x4\\.((extend|extmul)_(low|high)_i16x8_|trunc_sat_f32x4_|extadd_pairwise_i16x8_)[su]',
          'i64x2\\.(mul|(extend|extmul)_(low|high)_i32x4_[su])',
          'f32x4\\.(convert_i32x4_[su]|demote_f64x2_zero)',
          'f64x2\\.(promote_low_f32x4|convert_low_i32x4_[su])',
          '\\bany\\b',
          'array\\.len',
          '(array|struct)(\\.(new_(default_)?with_rtt|get(_[su])?|set))?',
          '\\beq\\b',
          'field',
          'i31\\.(new|get_[su])',
          '\\bnull\\b',
          'ref(\\.(([ai]s_(data|func|i31))|cast|eq|func|(is_|as_non_)?null|test))?',
          'rtt(\\.(canon|sub))?',
        ];
        e.defineSimpleMode('wast', {
          start: [
            {
              regex:
                /[+\-]?(?:nan(?::0x[0-9a-fA-F]+)?|infinity|inf|0x[0-9a-fA-F]+\.?[0-9a-fA-F]*p[+\/-]?\d+|\d+(?:\.\d*)?[eE][+\-]?\d*|\d+\.\d*|0x[0-9a-fA-F]+|\d+)/,
              token: 'number',
            },
            { regex: new RegExp(t.join('|')), token: 'keyword' },
            {
              regex: /\b((any|data|eq|extern|i31|func)ref|[fi](32|64)|i(8|16))\b/,
              token: 'atom',
            },
            {
              regex: /\$([a-zA-Z0-9_`\+\-\*\/\\\^~=<>!\?@#$%&|:\.]+)/,
              token: 'variable-2',
            },
            {
              regex: /"(?:[^"\\\x00-\x1f\x7f]|\\[nt\\'"]|\\[0-9a-fA-F][0-9a-fA-F])*"/,
              token: 'string',
            },
            { regex: /\(;.*?/, token: 'comment', next: 'comment' },
            { regex: /;;.*$/, token: 'comment' },
            { regex: /\(/, indent: true },
            { regex: /\)/, dedent: true },
          ],
          comment: [
            { regex: /.*?;\)/, token: 'comment', next: 'start' },
            { regex: /.*/, token: 'comment' },
          ],
          meta: { dontIndentStates: ['comment'] },
        });
        e.defineMIME('text/webassembly', 'wast');
      });
    },
    11015: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        function t(e) {
          return new RegExp('^((' + e.join(')|(') + '))\\b');
        }
        var r = [
          'Clamp',
          'Constructor',
          'EnforceRange',
          'Exposed',
          'ImplicitThis',
          'Global',
          'PrimaryGlobal',
          'LegacyArrayClass',
          'LegacyUnenumerableNamedProperties',
          'LenientThis',
          'NamedConstructor',
          'NewObject',
          'NoInterfaceObject',
          'OverrideBuiltins',
          'PutForwards',
          'Replaceable',
          'SameObject',
          'TreatNonObjectAsNull',
          'TreatNullAs',
          'EmptyString',
          'Unforgeable',
          'Unscopeable',
        ];
        var n = t(r);
        var i = [
          'unsigned',
          'short',
          'long',
          'unrestricted',
          'float',
          'double',
          'boolean',
          'byte',
          'octet',
          'Promise',
          'ArrayBuffer',
          'DataView',
          'Int8Array',
          'Int16Array',
          'Int32Array',
          'Uint8Array',
          'Uint16Array',
          'Uint32Array',
          'Uint8ClampedArray',
          'Float32Array',
          'Float64Array',
          'ByteString',
          'DOMString',
          'USVString',
          'sequence',
          'object',
          'RegExp',
          'Error',
          'DOMException',
          'FrozenArray',
          'any',
          'void',
        ];
        var a = t(i);
        var o = [
          'attribute',
          'callback',
          'const',
          'deleter',
          'dictionary',
          'enum',
          'getter',
          'implements',
          'inherit',
          'interface',
          'iterable',
          'legacycaller',
          'maplike',
          'partial',
          'required',
          'serializer',
          'setlike',
          'setter',
          'static',
          'stringifier',
          'typedef',
          'optional',
          'readonly',
          'or',
        ];
        var s = t(o);
        var l = ['true', 'false', 'Infinity', 'NaN', 'null'];
        var u = t(l);
        e.registerHelper('hintWords', 'webidl', r.concat(i).concat(o).concat(l));
        var c = ['callback', 'dictionary', 'enum', 'interface'];
        var f = t(c);
        var d = ['typedef'];
        var m = t(d);
        var p = /^[:<=>?]/;
        var h = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/;
        var g =
          /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/;
        var b = /^_?[A-Za-z][0-9A-Z_a-z-]*/;
        var v = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/;
        var k = /^"[^"]*"/;
        var _ = /^\/\*.*?\*\//;
        var x = /^\/\*.*/;
        var y = /^.*?\*\//;
        function w(e, t) {
          if (e.eatSpace()) return null;
          if (t.inComment) {
            if (e.match(y)) {
              t.inComment = false;
              return 'comment';
            }
            e.skipToEnd();
            return 'comment';
          }
          if (e.match('//')) {
            e.skipToEnd();
            return 'comment';
          }
          if (e.match(_)) return 'comment';
          if (e.match(x)) {
            t.inComment = true;
            return 'comment';
          }
          if (e.match(/^-?[0-9\.]/, false)) {
            if (e.match(h) || e.match(g)) return 'number';
          }
          if (e.match(k)) return 'string';
          if (t.startDef && e.match(b)) return 'def';
          if (t.endDef && e.match(v)) {
            t.endDef = false;
            return 'def';
          }
          if (e.match(s)) return 'keyword';
          if (e.match(a)) {
            var r = t.lastToken;
            var i = (e.match(/^\s*(.+?)\b/, false) || [])[1];
            if (r === ':' || r === 'implements' || i === 'implements' || i === '=') {
              return 'builtin';
            } else {
              return 'variable-3';
            }
          }
          if (e.match(n)) return 'builtin';
          if (e.match(u)) return 'atom';
          if (e.match(b)) return 'variable';
          if (e.match(p)) return 'operator';
          e.next();
          return null;
        }
        e.defineMode('webidl', function () {
          return {
            startState: function () {
              return {
                inComment: false,
                lastToken: '',
                startDef: false,
                endDef: false,
              };
            },
            token: function (e, t) {
              var r = w(e, t);
              if (r) {
                var n = e.current();
                t.lastToken = n;
                if (r === 'keyword') {
                  t.startDef = f.test(n);
                  t.endDef = t.endDef || m.test(n);
                } else {
                  t.startDef = false;
                }
              }
              return r;
            },
          };
        });
        e.defineMIME('text/x-webidl', 'webidl');
      });
    },
    61484: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('xquery', function () {
          var e = (function () {
            function e(e) {
              return { type: e, style: 'keyword' };
            }
            var t = e('operator'),
              r = { type: 'atom', style: 'atom' },
              n = { type: 'punctuation', style: null },
              i = { type: 'axis_specifier', style: 'qualifier' };
            var a = { ',': n };
            var o = [
              'after',
              'all',
              'allowing',
              'ancestor',
              'ancestor-or-self',
              'any',
              'array',
              'as',
              'ascending',
              'at',
              'attribute',
              'base-uri',
              'before',
              'boundary-space',
              'by',
              'case',
              'cast',
              'castable',
              'catch',
              'child',
              'collation',
              'comment',
              'construction',
              'contains',
              'content',
              'context',
              'copy',
              'copy-namespaces',
              'count',
              'decimal-format',
              'declare',
              'default',
              'delete',
              'descendant',
              'descendant-or-self',
              'descending',
              'diacritics',
              'different',
              'distance',
              'document',
              'document-node',
              'element',
              'else',
              'empty',
              'empty-sequence',
              'encoding',
              'end',
              'entire',
              'every',
              'exactly',
              'except',
              'external',
              'first',
              'following',
              'following-sibling',
              'for',
              'from',
              'ftand',
              'ftnot',
              'ft-option',
              'ftor',
              'function',
              'fuzzy',
              'greatest',
              'group',
              'if',
              'import',
              'in',
              'inherit',
              'insensitive',
              'insert',
              'instance',
              'intersect',
              'into',
              'invoke',
              'is',
              'item',
              'language',
              'last',
              'lax',
              'least',
              'let',
              'levels',
              'lowercase',
              'map',
              'modify',
              'module',
              'most',
              'namespace',
              'next',
              'no',
              'node',
              'nodes',
              'no-inherit',
              'no-preserve',
              'not',
              'occurs',
              'of',
              'only',
              'option',
              'order',
              'ordered',
              'ordering',
              'paragraph',
              'paragraphs',
              'parent',
              'phrase',
              'preceding',
              'preceding-sibling',
              'preserve',
              'previous',
              'processing-instruction',
              'relationship',
              'rename',
              'replace',
              'return',
              'revalidation',
              'same',
              'satisfies',
              'schema',
              'schema-attribute',
              'schema-element',
              'score',
              'self',
              'sensitive',
              'sentence',
              'sentences',
              'sequence',
              'skip',
              'sliding',
              'some',
              'stable',
              'start',
              'stemming',
              'stop',
              'strict',
              'strip',
              'switch',
              'text',
              'then',
              'thesaurus',
              'times',
              'to',
              'transform',
              'treat',
              'try',
              'tumbling',
              'type',
              'typeswitch',
              'union',
              'unordered',
              'update',
              'updating',
              'uppercase',
              'using',
              'validate',
              'value',
              'variable',
              'version',
              'weight',
              'when',
              'where',
              'wildcards',
              'window',
              'with',
              'without',
              'word',
              'words',
              'xquery',
            ];
            for (var s = 0, l = o.length; s < l; s++) {
              a[o[s]] = e(o[s]);
            }
            var u = [
              'xs:anyAtomicType',
              'xs:anySimpleType',
              'xs:anyType',
              'xs:anyURI',
              'xs:base64Binary',
              'xs:boolean',
              'xs:byte',
              'xs:date',
              'xs:dateTime',
              'xs:dateTimeStamp',
              'xs:dayTimeDuration',
              'xs:decimal',
              'xs:double',
              'xs:duration',
              'xs:ENTITIES',
              'xs:ENTITY',
              'xs:float',
              'xs:gDay',
              'xs:gMonth',
              'xs:gMonthDay',
              'xs:gYear',
              'xs:gYearMonth',
              'xs:hexBinary',
              'xs:ID',
              'xs:IDREF',
              'xs:IDREFS',
              'xs:int',
              'xs:integer',
              'xs:item',
              'xs:java',
              'xs:language',
              'xs:long',
              'xs:Name',
              'xs:NCName',
              'xs:negativeInteger',
              'xs:NMTOKEN',
              'xs:NMTOKENS',
              'xs:nonNegativeInteger',
              'xs:nonPositiveInteger',
              'xs:normalizedString',
              'xs:NOTATION',
              'xs:numeric',
              'xs:positiveInteger',
              'xs:precisionDecimal',
              'xs:QName',
              'xs:short',
              'xs:string',
              'xs:time',
              'xs:token',
              'xs:unsignedByte',
              'xs:unsignedInt',
              'xs:unsignedLong',
              'xs:unsignedShort',
              'xs:untyped',
              'xs:untypedAtomic',
              'xs:yearMonthDuration',
            ];
            for (var s = 0, l = u.length; s < l; s++) {
              a[u[s]] = r;
            }
            var c = [
              'eq',
              'ne',
              'lt',
              'le',
              'gt',
              'ge',
              ':=',
              '=',
              '>',
              '>=',
              '<',
              '<=',
              '.',
              '|',
              '?',
              'and',
              'or',
              'div',
              'idiv',
              'mod',
              '*',
              '/',
              '+',
              '-',
            ];
            for (var s = 0, l = c.length; s < l; s++) {
              a[c[s]] = t;
            }
            var f = [
              'self::',
              'attribute::',
              'child::',
              'descendant::',
              'descendant-or-self::',
              'parent::',
              'ancestor::',
              'ancestor-or-self::',
              'following::',
              'preceding::',
              'following-sibling::',
              'preceding-sibling::',
            ];
            for (var s = 0, l = f.length; s < l; s++) {
              a[f[s]] = i;
            }
            return a;
          })();
          function t(e, t, r) {
            t.tokenize = r;
            return r(e, t);
          }
          function r(r, s) {
            var d = r.next(),
              p = false,
              g = h(r);
            if (d == '<') {
              if (r.match('!--', true)) return t(r, s, l);
              if (r.match('![CDATA', false)) {
                s.tokenize = u;
                return 'tag';
              }
              if (r.match('?', false)) {
                return t(r, s, c);
              }
              var k = r.eat('/');
              r.eatSpace();
              var _ = '',
                x;
              while ((x = r.eat(/[^\s\u00a0=<>\"\'\/?]/))) _ += x;
              return t(r, s, o(_, k));
            } else if (d == '{') {
              b(s, { type: 'codeblock' });
              return null;
            } else if (d == '}') {
              v(s);
              return null;
            } else if (f(s)) {
              if (d == '>') return 'tag';
              else if (d == '/' && r.eat('>')) {
                v(s);
                return 'tag';
              } else return 'variable';
            } else if (/\d/.test(d)) {
              r.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/);
              return 'atom';
            } else if (d === '(' && r.eat(':')) {
              b(s, { type: 'comment' });
              return t(r, s, n);
            } else if (!g && (d === '"' || d === "'")) return t(r, s, i(d));
            else if (d === '$') {
              return t(r, s, a);
            } else if (d === ':' && r.eat('=')) {
              return 'keyword';
            } else if (d === '(') {
              b(s, { type: 'paren' });
              return null;
            } else if (d === ')') {
              v(s);
              return null;
            } else if (d === '[') {
              b(s, { type: 'bracket' });
              return null;
            } else if (d === ']') {
              v(s);
              return null;
            } else {
              var y = e.propertyIsEnumerable(d) && e[d];
              if (g && d === '"') while (r.next() !== '"') {}
              if (g && d === "'") while (r.next() !== "'") {}
              if (!y) r.eatWhile(/[\w\$_-]/);
              var w = r.eat(':');
              if (!r.eat(':') && w) {
                r.eatWhile(/[\w\$_-]/);
              }
              if (r.match(/^[ \t]*\(/, false)) {
                p = true;
              }
              var E = r.current();
              y = e.propertyIsEnumerable(E) && e[E];
              if (p && !y) y = { type: 'function_call', style: 'variable def' };
              if (m(s)) {
                v(s);
                return 'variable';
              }
              if (E == 'element' || E == 'attribute' || y.type == 'axis_specifier')
                b(s, { type: 'xmlconstructor' });
              return y ? y.style : 'variable';
            }
          }
          function n(e, t) {
            var r = false,
              n = false,
              i = 0,
              a;
            while ((a = e.next())) {
              if (a == ')' && r) {
                if (i > 0) i--;
                else {
                  v(t);
                  break;
                }
              } else if (a == ':' && n) {
                i++;
              }
              r = a == ':';
              n = a == '(';
            }
            return 'comment';
          }
          function i(e, t) {
            return function (n, a) {
              var o;
              if (p(a) && n.current() == e) {
                v(a);
                if (t) a.tokenize = t;
                return 'string';
              }
              b(a, { type: 'string', name: e, tokenize: i(e, t) });
              if (n.match('{', false) && d(a)) {
                a.tokenize = r;
                return 'string';
              }
              while ((o = n.next())) {
                if (o == e) {
                  v(a);
                  if (t) a.tokenize = t;
                  break;
                } else {
                  if (n.match('{', false) && d(a)) {
                    a.tokenize = r;
                    return 'string';
                  }
                }
              }
              return 'string';
            };
          }
          function a(e, t) {
            var n = /[\w\$_-]/;
            if (e.eat('"')) {
              while (e.next() !== '"') {}
              e.eat(':');
            } else {
              e.eatWhile(n);
              if (!e.match(':=', false)) e.eat(':');
            }
            e.eatWhile(n);
            t.tokenize = r;
            return 'variable';
          }
          function o(e, t) {
            return function (n, i) {
              n.eatSpace();
              if (t && n.eat('>')) {
                v(i);
                i.tokenize = r;
                return 'tag';
              }
              if (!n.eat('/')) b(i, { type: 'tag', name: e, tokenize: r });
              if (!n.eat('>')) {
                i.tokenize = s;
                return 'tag';
              } else {
                i.tokenize = r;
              }
              return 'tag';
            };
          }
          function s(e, n) {
            var a = e.next();
            if (a == '/' && e.eat('>')) {
              if (d(n)) v(n);
              if (f(n)) v(n);
              return 'tag';
            }
            if (a == '>') {
              if (d(n)) v(n);
              return 'tag';
            }
            if (a == '=') return null;
            if (a == '"' || a == "'") return t(e, n, i(a, s));
            if (!d(n)) b(n, { type: 'attribute', tokenize: s });
            e.eat(/[a-zA-Z_:]/);
            e.eatWhile(/[-a-zA-Z0-9_:.]/);
            e.eatSpace();
            if (e.match('>', false) || e.match('/', false)) {
              v(n);
              n.tokenize = r;
            }
            return 'attribute';
          }
          function l(e, t) {
            var n;
            while ((n = e.next())) {
              if (n == '-' && e.match('->', true)) {
                t.tokenize = r;
                return 'comment';
              }
            }
          }
          function u(e, t) {
            var n;
            while ((n = e.next())) {
              if (n == ']' && e.match(']', true)) {
                t.tokenize = r;
                return 'comment';
              }
            }
          }
          function c(e, t) {
            var n;
            while ((n = e.next())) {
              if (n == '?' && e.match('>', true)) {
                t.tokenize = r;
                return 'comment meta';
              }
            }
          }
          function f(e) {
            return g(e, 'tag');
          }
          function d(e) {
            return g(e, 'attribute');
          }
          function m(e) {
            return g(e, 'xmlconstructor');
          }
          function p(e) {
            return g(e, 'string');
          }
          function h(e) {
            if (e.current() === '"') return e.match(/^[^\"]+\"\:/, false);
            else if (e.current() === "'") return e.match(/^[^\"]+\'\:/, false);
            else return false;
          }
          function g(e, t) {
            return e.stack.length && e.stack[e.stack.length - 1].type == t;
          }
          function b(e, t) {
            e.stack.push(t);
          }
          function v(e) {
            e.stack.pop();
            var t = e.stack.length && e.stack[e.stack.length - 1].tokenize;
            e.tokenize = t || r;
          }
          return {
            startState: function () {
              return { tokenize: r, cc: [], stack: [] };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              var r = t.tokenize(e, t);
              return r;
            },
            blockCommentStart: '(:',
            blockCommentEnd: ':)',
          };
        });
        e.defineMIME('application/xquery', 'xquery');
      });
    },
    65278: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('yacas', function (t, r) {
          function n(e) {
            var t = {},
              r = e.split(' ');
            for (var n = 0; n < r.length; ++n) t[r[n]] = true;
            return t;
          }
          var i = n(
            'Assert BackQuote D Defun Deriv For ForEach FromFile ' +
              'FromString Function Integrate InverseTaylor Limit ' +
              'LocalSymbols Macro MacroRule MacroRulePattern ' +
              'NIntegrate Rule RulePattern Subst TD TExplicitSum ' +
              'TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ' +
              'ToStdout ToString TraceRule Until While'
          );
          var a = '(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)';
          var o = "(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)";
          var s = new RegExp(a);
          var l = new RegExp(o);
          var u = new RegExp(o + '?_' + o);
          var c = new RegExp(o + '\\s*\\(');
          function f(e, t) {
            var r;
            r = e.next();
            if (r === '"') {
              t.tokenize = d;
              return t.tokenize(e, t);
            }
            if (r === '/') {
              if (e.eat('*')) {
                t.tokenize = m;
                return t.tokenize(e, t);
              }
              if (e.eat('/')) {
                e.skipToEnd();
                return 'comment';
              }
            }
            e.backUp(1);
            var n = e.match(/^(\w+)\s*\(/, false);
            if (n !== null && i.hasOwnProperty(n[1])) t.scopes.push('bodied');
            var a = p(t);
            if (a === 'bodied' && r === '[') t.scopes.pop();
            if (r === '[' || r === '{' || r === '(') t.scopes.push(r);
            a = p(t);
            if (
              (a === '[' && r === ']') ||
              (a === '{' && r === '}') ||
              (a === '(' && r === ')')
            )
              t.scopes.pop();
            if (r === ';') {
              while (a === 'bodied') {
                t.scopes.pop();
                a = p(t);
              }
            }
            if (e.match(/\d+ *#/, true, false)) {
              return 'qualifier';
            }
            if (e.match(s, true, false)) {
              return 'number';
            }
            if (e.match(u, true, false)) {
              return 'variable-3';
            }
            if (e.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
              return 'bracket';
            }
            if (e.match(c, true, false)) {
              e.backUp(1);
              return 'variable';
            }
            if (e.match(l, true, false)) {
              return 'variable-2';
            }
            if (
              e.match(
                /(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,
                true,
                false
              )
            ) {
              return 'operator';
            }
            return 'error';
          }
          function d(e, t) {
            var r,
              n = false,
              i = false;
            while ((r = e.next()) != null) {
              if (r === '"' && !i) {
                n = true;
                break;
              }
              i = !i && r === '\\';
            }
            if (n && !i) {
              t.tokenize = f;
            }
            return 'string';
          }
          function m(e, t) {
            var r, n;
            while ((n = e.next()) != null) {
              if (r === '*' && n === '/') {
                t.tokenize = f;
                break;
              }
              r = n;
            }
            return 'comment';
          }
          function p(e) {
            var t = null;
            if (e.scopes.length > 0) t = e.scopes[e.scopes.length - 1];
            return t;
          }
          return {
            startState: function () {
              return { tokenize: f, scopes: [] };
            },
            token: function (e, t) {
              if (e.eatSpace()) return null;
              return t.tokenize(e, t);
            },
            indent: function (r, n) {
              if (r.tokenize !== f && r.tokenize !== null) return e.Pass;
              var i = 0;
              if (n === ']' || n === '];' || n === '}' || n === '};' || n === ');')
                i = -1;
              return (r.scopes.length + i) * t.indentUnit;
            },
            electricChars: '{}[]();',
            blockCommentStart: '/*',
            blockCommentEnd: '*/',
            lineComment: '//',
          };
        });
        e.defineMIME('text/x-yacas', { name: 'yacas' });
      });
    },
    98554: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631), r(53631));
        else {
        }
      })(function (e) {
        var t = 0,
          r = 1,
          n = 2;
        e.defineMode('yaml-frontmatter', function (i, a) {
          var o = e.getMode(i, 'yaml');
          var s = e.getMode(i, (a && a.base) || 'gfm');
          function l(e) {
            return e.state == n ? s : o;
          }
          return {
            startState: function () {
              return { state: t, inner: e.startState(o) };
            },
            copyState: function (t) {
              return { state: t.state, inner: e.copyState(l(t), t.inner) };
            },
            token: function (i, a) {
              if (a.state == t) {
                if (i.match('---', false)) {
                  a.state = r;
                  return o.token(i, a.inner);
                } else {
                  a.state = n;
                  a.inner = e.startState(s);
                  return s.token(i, a.inner);
                }
              } else if (a.state == r) {
                var l = i.sol() && i.match(/(---|\.\.\.)/, false);
                var u = o.token(i, a.inner);
                if (l) {
                  a.state = n;
                  a.inner = e.startState(s);
                }
                return u;
              } else {
                return s.token(i, a.inner);
              }
            },
            innerMode: function (e) {
              return { mode: l(e), state: e.inner };
            },
            indent: function (t, r, n) {
              var i = l(t);
              return i.indent ? i.indent(t.inner, r, n) : e.Pass;
            },
            blankLine: function (e) {
              var t = l(e);
              if (t.blankLine) return t.blankLine(e.inner);
            },
          };
        });
      });
    },
    53631: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('yaml', function () {
          var e = ['true', 'false', 'on', 'off', 'yes', 'no'];
          var t = new RegExp('\\b((' + e.join(')|(') + '))$', 'i');
          return {
            token: function (e, r) {
              var n = e.peek();
              var i = r.escaped;
              r.escaped = false;
              if (n == '#' && (e.pos == 0 || /\s/.test(e.string.charAt(e.pos - 1)))) {
                e.skipToEnd();
                return 'comment';
              }
              if (e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/)) return 'string';
              if (r.literal && e.indentation() > r.keyCol) {
                e.skipToEnd();
                return 'string';
              } else if (r.literal) {
                r.literal = false;
              }
              if (e.sol()) {
                r.keyCol = 0;
                r.pair = false;
                r.pairStart = false;
                if (e.match('---')) {
                  return 'def';
                }
                if (e.match('...')) {
                  return 'def';
                }
                if (e.match(/\s*-\s+/)) {
                  return 'meta';
                }
              }
              if (e.match(/^(\{|\}|\[|\])/)) {
                if (n == '{') r.inlinePairs++;
                else if (n == '}') r.inlinePairs--;
                else if (n == '[') r.inlineList++;
                else r.inlineList--;
                return 'meta';
              }
              if (r.inlineList > 0 && !i && n == ',') {
                e.next();
                return 'meta';
              }
              if (r.inlinePairs > 0 && !i && n == ',') {
                r.keyCol = 0;
                r.pair = false;
                r.pairStart = false;
                e.next();
                return 'meta';
              }
              if (r.pairStart) {
                if (e.match(/^\s*(\||\>)\s*/)) {
                  r.literal = true;
                  return 'meta';
                }
                if (e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) {
                  return 'variable-2';
                }
                if (r.inlinePairs == 0 && e.match(/^\s*-?[0-9\.\,]+\s?$/)) {
                  return 'number';
                }
                if (r.inlinePairs > 0 && e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)) {
                  return 'number';
                }
                if (e.match(t)) {
                  return 'keyword';
                }
              }
              if (
                !r.pair &&
                e.match(
                  /^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/
                )
              ) {
                r.pair = true;
                r.keyCol = e.indentation();
                return 'atom';
              }
              if (r.pair && e.match(/^:\s*/)) {
                r.pairStart = true;
                return 'meta';
              }
              r.pairStart = false;
              r.escaped = n == '\\';
              e.next();
              return null;
            },
            startState: function () {
              return {
                pair: false,
                pairStart: false,
                keyCol: 0,
                inlinePairs: 0,
                inlineList: 0,
                literal: false,
                escaped: false,
              };
            },
            lineComment: '#',
            fold: 'indent',
          };
        });
        e.defineMIME('text/x-yaml', 'yaml');
        e.defineMIME('text/yaml', 'yaml');
      });
    },
    22245: (e, t, r) => {
      (function (e) {
        if (true) e(r(4631));
        else {
        }
      })(function (e) {
        'use strict';
        e.defineMode('z80', function (e, t) {
          var r = t.ez80;
          var n, i;
          if (r) {
            n =
              /^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i;
            i = /^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i;
          } else {
            n =
              /^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i;
            i = /^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i;
          }
          var a = /^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i;
          var o = /^(n?[zc]|p[oe]?|m)\b/i;
          var s = /^([hl][xy]|i[xy][hl]|slia|sll)\b/i;
          var l = /^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;
          return {
            startState: function () {
              return { context: 0 };
            },
            token: function (e, t) {
              if (!e.column()) t.context = 0;
              if (e.eatSpace()) return null;
              var u;
              if (e.eatWhile(/\w/)) {
                if (r && e.eat('.')) {
                  e.eatWhile(/\w/);
                }
                u = e.current();
                if (e.indentation()) {
                  if ((t.context == 1 || t.context == 4) && a.test(u)) {
                    t.context = 4;
                    return 'var2';
                  }
                  if (t.context == 2 && o.test(u)) {
                    t.context = 4;
                    return 'var3';
                  }
                  if (n.test(u)) {
                    t.context = 1;
                    return 'keyword';
                  } else if (i.test(u)) {
                    t.context = 2;
                    return 'keyword';
                  } else if (t.context == 4 && l.test(u)) {
                    return 'number';
                  }
                  if (s.test(u)) return 'error';
                } else if (e.match(l)) {
                  return 'number';
                } else {
                  return null;
                }
              } else if (e.eat(';')) {
                e.skipToEnd();
                return 'comment';
              } else if (e.eat('"')) {
                while ((u = e.next())) {
                  if (u == '"') break;
                  if (u == '\\') e.next();
                }
                return 'string';
              } else if (e.eat("'")) {
                if (e.match(/\\?.'/)) return 'number';
              } else if (e.eat('.') || (e.sol() && e.eat('#'))) {
                t.context = 5;
                if (e.eatWhile(/\w/)) return 'def';
              } else if (e.eat('$')) {
                if (e.eatWhile(/[\da-f]/i)) return 'number';
              } else if (e.eat('%')) {
                if (e.eatWhile(/[01]/)) return 'number';
              } else {
                e.next();
              }
              return null;
            },
          };
        });
        e.defineMIME('text/x-z80', 'z80');
        e.defineMIME('text/x-ez80', { name: 'z80', ez80: true });
      });
    },
  },
]);
//# sourceMappingURL=6064.1a4a55a09511d4907870.js.map?v=1a4a55a09511d4907870

import type { languages } from 'monaco-editor'

export const gabcLanguageDefinition: languages.IMonarchLanguage = {
  defaultToken: '',

  keywords: [
    'name:',
    'gabc-copyright:',
    'score-copyright:',
    'office-part:',
    'occasion:',
    'meter:',
    'commentary:',
    'arranger:',
    'author:',
    'date:',
    'manuscript:',
    'manuscript-reference:',
    'manuscript-storage-place:',
    'book:',
    'language:',
    'transcriber:',
    'transcription-date:',
    'mode:',
    'user-notes:',
    'annotation:'
  ],

  typeKeywords: [],

  operators: [
    '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
    '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
    '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
    '%=', '<<=', '>>=', '>>>='
  ],

  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  tokenizer: {
    root: [
      // Switch state on GABC header line
      [/^%%.*$/, { token: 'keyword', next: '@inGabcHeader' }],

      // GABC notation: simple bracket tags (no whitespace allowed in root)
      [/\([a-zA-Z0-9.]+\)/, 'tag'],

      // Identifiers and keywords
      [/[a-zA-Z0-9_$-]+:?/, {
        cases: {
          '@typeKeywords': 'keyword',
          '@keywords': 'keyword',
          '@default': 'identifier'
        }
      }],

      { include: '@whitespace' },

      // Brackets and operators
      [/[()]/, '@brackets'],
      [/@symbols/, {
        cases: {
          '@operators': 'operator',
          '@default': ''
        }
      }],

      // Annotations (e.g. @annotation)
      [/@\s*[a-zA-Z_\$][\w\$]*/, 'annotation'],

      // Numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
      [/0[xX][0-9a-fA-F]+/, 'number.hex'],
      [/\d+/, 'number'],

      // Delimiters and punctuation
      [/[;,.]/, 'delimiter'],

      // Strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'],
      [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

      [/'[^\\']'/, 'string'],
      [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
      [/'/, 'string.invalid'],
    ],

    inGabcHeader: [
      // Allow whitespace inside parens only in this state
      [/\(\s*[a-zA-Z0-9.\s:]+\s*\)/, 'tag'],

      // Pop out on empty line or any non-header line
      [/^$/, '', '@pop'],
      [/^(?!%%).+$/, '', '@pop'],

      [/[a-zA-Z0-9_$-]+/, {
        cases: {
          '@typeKeywords': 'keyword',
          '@keywords': 'keyword',
          '@default': 'identifier'
        }
      }],

      [/[()]/, '@brackets'],
      { include: '@whitespace' }
    ],

    whitespace: [
      [/[ \t\r\n]+/, 'white'],
      [/\/\*/, 'comment', '@comment'],
      [/\/\/.*$/, 'comment']
    ],

    comment: [
      [/[^/*]+/, 'comment'],
      [/\/\*/, 'comment', '@push'],
      ["\\*/", 'comment', '@pop'],
      [/[\/*]/, 'comment']
    ],

    string: [
      [/[^\\"]+/, 'string'],
      [/@escapes/, 'string.escape'],
      [/\\./, 'string.escape.invalid'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
    ]
  }
}

'use strict';
var restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  // 'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
];
module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parser: 'typescript-eslint-parser',
  extends: ['airbnb'],
  plugins: ['typescript', 'import', 'flowtype', 'react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'dot-notation': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': ['error', 'always'],
    'semi': ['error', 'never'],
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx', 'ts', 'tsx']}],
    // ----
    // http://eslint.org/docs/rules/
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'allow-null'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'error',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'warn',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    radix: 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'error',
      // TODO: reenable once import() is no longer slow.
      // https://github.com/facebookincubator/create-react-app/issues/2176
      // {
      //   object: 'require',
      //   property: 'ensure',
      //   message: 'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
      // },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
    'react/jsx-wrap-multilines': [
      'error',
      {
        'return': 'ignore'
      },
    ],

    'space-infix-ops': 0,
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn',
    // 函数有重载时，必须将重载成员分组在一起
    // @off 该规则现在有 bug https://github.com/AlloyTeam/eslint-config-alloy/issues/38
    'typescript/adjacent-overload-signatures': 'off',
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    'typescript/class-name-casing': 'error',
    // 必须手动指定类的属性和方法的可访问性（private 或 public）
    // @off 太严格了
    'typescript/explicit-member-accessibility': 'off',
    // 接口必须以 I 开头
    // @off 没必要限制
    'typescript/interface-name-prefix': 'off',
    // 接口和类型字面量中每一行都必须以分号结尾
    'typescript/member-delimiter-style': 'error',
    // 私有变量命名必须以下划线开头
    // @off 没必要限制
    'typescript/menber-naming': 'off',
    // 属性和方法必须按照排序规则排序
    'typescript/member-ordering': 'error',
    // 必须使用 as 进行类型断言
    // @off 没必要限制，在 React 项目中需要限制
    'typescript/no-angle-bracket-type-assertion': 'off',
    // 禁止使用 Array 构造函数来初始化数组，除非指定了泛型，或传入的是单个数字
    // 开启，可以帮助发现错误
    'typescript/no-array-constructor': 'error',
    // 禁止使用空接口
    // @off 没必要限制
    'typescript/no-empty-interface': 'off',
    // 禁止使用 any
    // @off 太严格了
    'typescript/no-explicit-any': 'off',
    // 禁止使用 namespace 和 module
    // 用 namespace 或 module 来定义模块是以前的用法，现在已经有了 import 和 export
    'typescript/no-namespace': 'error',
    // 禁止在给构造函数的参数添加修饰符
    // @off 没必要限制
    'typescript/no-parameter-properties': 'off',
    // 禁止使用三斜线注释
    // @off 没必要限制
    'typescript/no-triple-slash-reference': 'off',
    // 限制 type 的使用
    // @off 没必要限制
    'typescript/no-type-alias': 'off',
    // 定义过的变量必须使用
    // eslint 原生的 no-unused-vars 无法使用，需要使用 typescript/no-unused-vars
    'typescript/no-unused-vars': 'error',
    // 变量必须先定义后使用
    // @off eslint 原生已支持 no-use-before-define
    'typescript/no-use-before-define': 'off',
    // 使用 namespace 代替 module
    // @off typescirpt/no-namespace 已经禁用了 namespace 和 module
    'typescript/prefer-namespace-keyword': 'off',
    // 类型定义的冒号前后是否需要空格
    // 默认冒号前必须没有空格，冒号后必须有空格
    'typescript/type-annotation-spacing': 'error'
  },

  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    parser: 'typescript-eslint-parser',
    rules: {
      "import/export": "off",
      "no-restricted-globals": "off",
      "import/extensions": "off",
      "no-dupe-class-members": "off",
      "no-empty-pattern": "off",
      "no-redeclare": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-use-before-define": "off",
      "no-useless-constructor": "off",
      "no-unused-vars": "off"
    }
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: './build/webpack.config.base.js',
        extensions: ['.js', '.jsx', '.ts', 'tsx']
      },
      "eslint-import-resolver-typescript": true
    }
  },
};

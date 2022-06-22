module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true
  },
  extends: [ 'airbnb-base' ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [ 'chai-friendly' ],
  rules: {
    // exibe um erro quando há logs
    'no-console': 'warn',

    // exibe um erro quando há expressões 'debugger' em códigos no ambiente de produção
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // desabilita o uso mandatório de templates para concatenar strings
    // e.g. `${someVar}-appendix`
    'prefer-template': 'off',

    // Desabilita o uso mandatório do segundo argumento 'radix' do parseInt
    'radix': 'off',

    // não permite ponto e vírgula extra
    'no-extra-semi': 'error',

    // não permite o uso de ponto e vírgula
    'semi': [ 'error', 'never' ],

    // não obriga o uso de parênteses no parâmetro de uma arrow function
    'arrow-parens': 'off',

    // não obriga o encapsulamento de expressões de retorno de arrow functions
    // com parênteses (para não confundir com expressões de >=, por exemplo)
    'no-confusing-arrow': 'off',

    // desabilita o uso de expressões não utilizadas pelo programa
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': [ 'error', { allowShortCircuit: true, allowTernary: true } ],

    'no-plusplus': [ 'error', { allowForLoopAfterthoughts: true } ],

    'global-require': 'off',

    'import/no-dynamic-require': 'off',

    // habilita o acesso de propriedades de objetos via colchetes (obj['prop'])
    'dot-notation': 'off',

    // habilita o uso de underscore (_) em nomes de variáveis e funções
    'no-underscore-dangle': 'off',

    // desabilita o uso de atribuições de valores a variáveis em expressões de retorno
    // (exceto quando envolvida em parênteses)
    'no-return-assign': [ 'error', 'except-parens' ],

    // habilita a necessidade de utilizar vírgula como último
    // caracter da linha em objetos literais
    'comma-style': [ 'error', 'last', { 'exceptions': { 'ObjectExpression': true } } ],

    // habilita o uso de propriedades do Object.prototype diretamente em instâncias de objetos
    // e.g. obj.hasOwnProperty('xpto') // obj.isPrototypeOf(xpto)
    'no-prototype-builtins': 'off',

    // desabilita a obrigatoriedade do uso de camelCase para variáveis e funções
    'camelcase': 'off',

    // força o uso de indentação consistente
    'indent': 'error',

    // desabilita a obrigatoriedade do uso de chaves para blocos com apenas uma linha
    // e.g. if (foo === bar) return baz
    'curly': 'off',

    // habilita a obrigatoriedade  de quebras de linha consistentes em
    // objetos literais ou expressões de desestruturação
    'object-curly-newline': [ 'error', { 'consistent': true } ],

    // habilita a reatribuição de valores de parâmetros de funções
    'no-param-reassign': [ 'error', { 'props': false } ],

    // habilita a obrigatoriedade de espaçamentos consistentes de
    // parâmetros de objetos literais. e.g. { prop : 'foo' }
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],

    // exibe alerta quando não são utilizadas aspas simples ('') na definição de strings
    'quotes': 'error',

    // desabilita a obrigatoriedade do uso vírgulas na última propriedade de um objeto literal
    'comma-dangle': 'off',

    // habilita o uso de expressões ternárias aninhadas
    'no-nested-ternary': 'off',

    // desabilita a obrigatoriedade de importações utilizarem apenas pacotes
    // contidos no package.json (ESLint não interpretava os 'alias' do webpack)
    'import/no-extraneous-dependencies': 'off',

    // desabilita a obrigatoriedade de incluir a extensão dos arquivos sendo importados
    'import/extensions': 'off',

    // habilita regras de espaçamento de elementos de array
    'array-bracket-spacing': [ 'error', 'always' ],

    // habilita o uso de variáveis escopadas com mesmo nome de variáveis globais
    // (foi habilitado pois quebrava mutations na store)
    'no-shadow': 'off',

    // desabilita o uso de múltiplos espaços numa linha de código
    'no-multi-spaces': 'error',

    // desabilita regras de espaçamento de nova linha de argumentos de funções
    'function-paren-newline': 'off',

    // desabilita a obrigatoriedade do uso de chaves para arrow functions
    'arrow-body-style': 'off',

    // desabilita a obrigatoriedade do uso de exportação padrão (export default)
    // no lugar de exportações nomeadas em módulos com apenas uma exportação
    'import/prefer-default-export': 'off',

    // não permite a declaração de funções sem espaçamento antes dos parênteses com argumentos
    'space-before-function-paren': [ 'error', 'always' ],

    // desabilita a obrigatoriedade de consistência nos tipos de retorno de uma função
    'consistent-return': 'off',

    // habilita obrigatoriedade do uso de 'shorthands' de métodos de objetos
    'object-shorthand': [ 'error', 'always', { ignoreConstructors: false } ],

    // habilita a obrigatoriedade do uso de funções nomeadas como métodos de objetos
    // e.g. Foo.prototype.bar = function () {};
    'func-names': [ 'error', 'as-needed' ],

    // habilita a utilização de propriedades de objetos com aspas
    // e.g. { 'eita-nois': foo }
    'quote-props': 'off',

    /**
     * REGRAS ESPECÍFICAS PARA O MIDDLEWARE
     */

    'nonblock-statement-body-position': [ 'error', 'any' ],

    'import/no-named-default': 'off',

    'import/no-unresolved': [ 2, { 'ignore': [ '^#.+$' ] } ],

    'no-unused-vars': [ 'error', {
      'argsIgnorePattern': '^_',
      'ignoreRestSiblings': true
    } ]
  }
}

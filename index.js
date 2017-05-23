'use strict';

module.exports = {
  plugins: [
    require('esformatter-quotes'),
    require('esformatter-use-strict'),
    require('esformatter-align')
  ],

  indent: {
    value: '    '
  },

  quotes: {
    type: 'single',
    avoidEscape: false
  },

  align: {
    ObjectExpression: 1,
    VariableDeclaration: 1,
    AssignmentExpression: 1,
    TernaryExpression: 1,
    OrExpression: 1
  }
}

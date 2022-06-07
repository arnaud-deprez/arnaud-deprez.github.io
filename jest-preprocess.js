/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// import babelJest from 'babel-jest'

const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-named-capturing-groups-regex',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ],
}
// temporary workaround: https://github.com/facebook/jest/issues/11444
module.exports = require('babel-jest').default.createTransformer(babelOptions)
// export default babelJest.createTransformer(babelOptions)

const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
    'babel-preset-gatsby',
  ],
  plugins: [
    '@babel/plugin-transform-named-capturing-groups-regex',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ],
}
module.exports = require('babel-jest').createTransformer(babelOptions)

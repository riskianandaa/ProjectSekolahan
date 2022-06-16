module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        'transform-remove-console',
      ],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@handlers': './src/handlers',
          '@navigator': './src/navigator',
          '@pages': './src/pages',
          '@styles': './src/styles',
          '@app-types': './src/types'
        }
      }

    ],
    'react-native-reanimated/plugin'
  ],
};

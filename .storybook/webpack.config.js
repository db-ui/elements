module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require('@babel/preset-typescript').default,
            require('@babel/preset-react').default,
            require('@babel/preset-env').default
          ]
        }
      },
      require.resolve('react-docgen-typescript-loader')
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};

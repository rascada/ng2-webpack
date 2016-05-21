module.exports = {
  entry: './src/main',

  output: {
    filename: 'app.js',
    path: 'dist',
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts',
      },
    ],
  },
};

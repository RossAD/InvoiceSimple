const path = require('path')

module.exports = {
  entry: './index.js',

  context: path.resolve(__dirname, 'src'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/,  loader: 'babel-loader', exclude: /node_modules/ },
    ]
  }
}

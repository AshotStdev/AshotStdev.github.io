module.export = {
        module: {
              test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  type: 'javascript/auto',
        }
}
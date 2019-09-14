module.exports = {
    entry: './index.js',// assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
      path: __dirname, // assumes your bundle.js will also be in the root of your project folder
      filename: './public/bundle.js'
    },
    devtool: 'source-maps',
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/env']
            }
          },
          // use the style-loader/css-loader combos for anything matching the .css extension
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ]
          }
        ]
      }
  }

module.exports = {
   entry: [
    './src/index.js'
    
  ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },


   devtool: "source-map",

    module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-1', 'stage-0']
      }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },


  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

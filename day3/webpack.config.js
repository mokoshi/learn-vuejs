module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.js'
    }
  }
};

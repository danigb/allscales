// var webpack = require('webpack')

module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      './app/app.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
      // new webpack.NoErrorsPlugin()
    ]

}

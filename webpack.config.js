module.exports = {
    entry: './src2/app.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-source-map'
};

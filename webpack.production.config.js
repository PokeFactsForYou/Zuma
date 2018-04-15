const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./frontend/index.html",
    filename: "./index.html"
});

module.exports = {
    output: {
        publicPath: './',
        path: path.join(__dirname, 'src', 'main', 'resources', 'static'),
        filename: 'bundle-[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlPlugin]
};
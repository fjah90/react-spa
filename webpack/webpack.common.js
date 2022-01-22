const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(?:png|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(.(woff(2))?|eot|ttf|otf|svg)$/,
                type: "asset/inline",
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: "bundle.[contenthash].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            filename: './index.html',
        }),
    ],
    stats: 'errors-only',
}

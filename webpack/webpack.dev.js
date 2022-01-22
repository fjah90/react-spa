const path = require('path');
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 4004,
        open: true,
        hot: true
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        ]
    },
    target: "web",
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
    resolve: {
        plugins: [
            new TsconfigPathsPlugin()
        ],
    },
}
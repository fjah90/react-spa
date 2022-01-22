const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    resolve: {
        plugins: [
            new TsconfigPathsPlugin()
        ],
    },
}
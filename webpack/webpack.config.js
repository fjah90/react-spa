const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

/** @type {import('webpack').Configuration} */
module.exports = (enVars) => {
    const {env} = enVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
}
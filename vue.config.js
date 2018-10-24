module.exports = {
    configureWebpack: {
        output: {
            path: __dirname + "/dist"
        }
    },
    devServer: {
        disableHostCheck: true
    }
};
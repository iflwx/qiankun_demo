module.exports = {
    devServer: {
        port: 8080,
        headers: {
            // 允许跨域访问子应用页面
            'Access-Control-Allow-Origin': '*',
        }
    }
}
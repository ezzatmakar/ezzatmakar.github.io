const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/apis',
        createProxyMiddleware({
            target: 'https://admin.octopuspro.com',
            changeOrigin: true,
        })
    );
};

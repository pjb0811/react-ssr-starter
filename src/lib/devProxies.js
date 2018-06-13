const devProxies = {
  '/api': {
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api': ''
    }
  }
};

module.exports = devProxies;

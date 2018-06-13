const proxies = {
  '/api': {
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }
};

export default proxies;

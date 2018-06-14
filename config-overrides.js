const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const proxies = require('./src/lib/proxies');

module.exports = {
  webpack: function(config, env) {
    config = rewireReactHotLoader(config, env);
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.proxy = proxies;
      return config;
    };
  }
};

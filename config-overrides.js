const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const devProxies = require('./src/lib/devProxies');

module.exports = {
  webpack: function(config, env) {
    config = rewireReactHotLoader(config, env);
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.proxy = devProxies;
      return config;
    };
  }
};

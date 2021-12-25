const path = require('path');
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@@'] = path.resolve(__dirname, './components');
    return config;
  }
}
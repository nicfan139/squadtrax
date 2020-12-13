const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    config.resolve.alias['assets'] = path.join(__dirname, 'src/assets');
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['utils'] = path.join(__dirname, 'src/utils');

    return config;
  }
});
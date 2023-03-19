const axeCore = require('axe-core');

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium') {
      launchOptions.extensions.push(axeCore.extensionSource);
    }

    return launchOptions;
  });
};

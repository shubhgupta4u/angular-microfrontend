const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "shell",
  remoteType: 'var',
  remotes: {
    account: 'account',
    merchant: 'merchant',
    order: 'order',
    payment: 'payment',
    product: 'product'
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'account',

  exposes: {
    './AppModule': './projects/account/src/app/app.module.ts',
    './AccountModule': './projects/account/src/Features/account/account.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

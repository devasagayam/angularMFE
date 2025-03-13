const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'dynamic-form-app',
  filename: 'remoteEntry.js',
  exposes: {
    './DynamicFormModule': './projects/dynamic-form-app/src/app/dynamic-form/dynamic-form.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

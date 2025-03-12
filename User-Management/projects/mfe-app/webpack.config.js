const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfeApp', // ✅ Match with remoteName
  filename: 'remoteEntry.js',

  exposes: {
    './AddUserModule': './projects/mfe-app/src/app/add-user/add-user.module.ts', // ✅ Ensure exact path
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

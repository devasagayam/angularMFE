const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfeApp', 
  filename: 'remoteEntry.js',

  exposes: {
    './AddUserModule': './projects/mfe-app/src/app/add-user/add-user.module.ts', 
  },

  remotes: {
    hostApp: "hostApp@http://localhost:4200/remoteEntry.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },
});

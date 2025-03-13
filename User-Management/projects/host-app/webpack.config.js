const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'hostApp', 
  filename: 'remoteEntry.js',

  // exposes: {
  //   './UserFacadeModule': './projects/host-app/src/app/services/user-facade.module.ts', 
  // },
  remotes: {
    "mfeApp": "mfeApp@http://localhost:4300/remoteEntry.js" 
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },
});

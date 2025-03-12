const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'hostApp', // ✅ Keep a different name
  remotes: {
    "mfeApp": "mfeApp@http://localhost:4300/remoteEntry.js" // ✅ Ensure matching remoteName
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

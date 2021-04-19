const path = require("path");
const babelConfig = require("../babel.config");

const rootFolder = path.resolve(__dirname, "..");

const getBabelAbsoluteAliases = (aliases) => {
  return Object.keys(aliases).reduce((absoluteAliases, aliasName) => {
    absoluteAliases[aliasName] = path.resolve(rootFolder, aliases[aliasName]);
    return absoluteAliases;
  }, {});
};

const addResolveAlias = (config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    ...getBabelAbsoluteAliases(babelConfig.plugins[0][1].alias),
  };
  return config;
};

module.exports = {
  addResolveAlias,
};

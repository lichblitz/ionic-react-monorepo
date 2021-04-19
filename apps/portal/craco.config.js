const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const { addResolveAlias } = require("./commands/aliasResolver");

const absolutePath = path.join(__dirname, "../ui");

module.exports = {
  webpack: {
    alias: {
      react: path.resolve("./node_modules/react"),
    },
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName("babel-loader"));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[absolutePath];
      }
      addResolveAlias(webpackConfig);
      return webpackConfig;
    },
  },
};

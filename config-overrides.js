const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": resolve("src"),
    "@apis": resolve("src/apis"),
    "@asset": resolve("src/asset"),
    "@components": resolve("src/components"),
    "@contexts": resolve("src/contexts"),
    "@pages": resolve("src/pages"),
    "@styles": resolve("src/styles"),
    "@utils": resolve("src/utils"),
  };
  return config;
};

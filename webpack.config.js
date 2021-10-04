const config = {
  entry: "./public/assets/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  mode: "development",
};
module.exports = config;

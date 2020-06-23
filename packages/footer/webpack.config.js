const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8082/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8082,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "footer",
      library: { type: "var", name: "footer" },
      filename: "footer.js",
      remotes: {},
      exposes: {
        "./Footer": "./src/Footer",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
};

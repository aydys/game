module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  env: {
    production: {
      plugins: ["emotion"],
    },
    development: {
      plugins: [["emotion", { sourceMap: true }]],
    },
  },
};

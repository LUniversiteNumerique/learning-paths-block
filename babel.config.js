module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/transform-arrow-functions",
    "@babel/proposal-class-properties"
  ], // same as "@babel/plugin-transform-arrow-functions"
};
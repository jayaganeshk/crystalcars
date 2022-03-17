const { defineConfig } = require("@vue/cli-service");

console.log(process.env.PUBLIC_PATH);

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: process.env.PUBLIC_PATH ?? "/",
});

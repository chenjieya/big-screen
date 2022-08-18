const { defineConfig } = require('@vue/cli-service')

console.log(process)

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT||8080,
    open: true
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE
        return args
    })
}
})

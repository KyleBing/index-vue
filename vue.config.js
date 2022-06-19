const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  productionSourceMap: false, // 不产出 .map 文件

  outputDir: '../index',
  // devServer: {
  //   proxy: {
  //     '/portal/thumbs-up/all': {
  //       target: 'https://kylebing.cn/portal/thumbs-up/all',
  //       changeOrigin: true
  //     },
  //   }
  // },
})

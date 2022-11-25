/*
 * @Author: zhaoshan
 * @Date: 2022-11-21 19:49:18
 * @LastEditTime: 2022-11-22 09:30:54
 * @LastEditors: zhaoshan
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 前端代理服务器
  devServer: {
    proxy: {
      // proxyon为代理前缀，如果请求中包含该前缀，就走代理
      '/api/': {
        // 真实的后端服务器地址
        target: `${'https://api-test.nhf.cn/wjj-web-manager/'}`,
        ws: true,
        // 控制请求头中的host
        changeOrigin: true,
        // 将代理前缀名称替换为后端的真实前缀名称
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
})

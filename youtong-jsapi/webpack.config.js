const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件
 
module.exports = {
  entry: {
    'index': './index.js',
    'index.min': './index.js'
  },
  output: {
    filename: '[name].js',
    library: 'youtong',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'none', // 设置mode为none避免默认压缩
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 使用压缩插件
        include: /\.min\.js$/
      })
    ]
  }
}
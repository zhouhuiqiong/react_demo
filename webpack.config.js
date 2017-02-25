/**
 * Created by zhangdongming on 2017/1/8.
 */
var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    devtool:"cheap-source-map",
  entry:path.resolve(__dirname,'./src/index.js'),
  output:{
      path:path.resolve(__dirname,'dist'),
      filename:'bundle.js'
  },
  module:{
    loaders:[
        {
          test:/\.js$/,
          loader:'babel',
          exclude:/node_modules/
        },
        {
          test:/\.css$/,
          loader:'style!css'
        }
    ]
  },
  plugins:[
      new htmlWebpackPlugin({
          title:'react学习',
          template:path.resolve(__dirname,'./src/index.html')
      })
  ]
};

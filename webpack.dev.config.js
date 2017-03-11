module.exports={
  entry:'./src/index.js',　　　//指定入口文件
  output:{
    path:'/build',　　　　　　//出口文件所在文件夹
    filename:'bundle.js',　　//出口文件
    publicPath: '/build/'  //公共路径
  },
  devtool:'eval' ,//找到源代码错误
  resolve:{                   //解决文件后缀省略
    extensions: [".js",".css",".jpg",".png"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,　　　　//编译.js文件
        exclude: /node_modules/,
        use: "babel-loader"  //用babel-loader包编译
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test:/\.(jpe?g|png)$/,
        use: 'file-loader'
      }
    ]
  }
}

const webpackConfigBase = {
  //module此处为loader区域，一般文件内容解析，处理放在此处，如babel，less,postcss转换等
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json","less"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
            ],
          }
        }
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        use: [
          {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
          }
        }]
      },
      {
        test: [/\.css$/, /\.less$/],
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              // parser: 'postcss-strip-inline-comments',
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')()
              ],
            }
          },
          {
            loader:'less-loader',
            // options: {
            //   lessOptions: {
            //     strictMath: true,
            //   },
            // }
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 12000,
              // name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = webpackConfigBase;

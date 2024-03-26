/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
// fork-ts-checker-webpack-plugin需要单独安装
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const dotenv = require('dotenv');
const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}`}).parsed;
// 将环境变量转换为 DefinePlugin 能够处理的格式
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: './src/main',
  output: {
    path: path.resolve(__dirname, 'nest-blog'), // 输出目录路径
    filename: 'main.js'
  },
  target: 'node',
  // ts文件的处理
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          }
        },
        exclude: /node_modules/,
        
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    // minimize: true,
  },
  externals: {},
  plugins: [
    new webpack.DefinePlugin(envKeys),
    // 需要进行忽略的插件
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@nestjs/microservices',
          '@nestjs/microservices/microservices-module',
          '@nestjs/websockets/socket-module',
          'cache-manager',
          'class-validator',
          'class-transformer'
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource, {
            paths: [process.cwd()]
          });
        } catch (err) {
          return true;
        }
        return false;
      }
    }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};


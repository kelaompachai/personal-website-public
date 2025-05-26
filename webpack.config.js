import path from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackOptions = (env, argv) => {
  console.log('mode is:', argv.mode);
  return {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    '@tailwindcss/postcss'
                  ]
                ]
              }
            }
          }]
        },
        {
          test: /\.(png|jpg)/,
          type: 'asset',
          generator: {
            filename: '[name][ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Joe Paul'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.css']
    }
  };
};

export default webpackOptions;

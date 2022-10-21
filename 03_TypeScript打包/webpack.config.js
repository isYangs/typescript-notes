// 引入一个包
const path = require('path');
// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 打包文件所在目录
    output: {
        // 指定打包文件路径
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: 'bundle.js',

        environment: {
            // 告诉webpack不使用箭头函数
            arrowFunction: false,
        },
    },

    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 使用的是ts-loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    '@babel/preset-env',
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            chrome: '88',
                                            ie: '11',
                                        },
                                        // 指定corejs的版本
                                        corejs: '3',
                                        // 使用corejs的方式 "usage"表示按需加载
                                        useBuiltIns: 'usage',
                                    },
                                ],
                            ],
                        },
                    },
                    'ts-loader',
                ],
                // 要排除的文件
                exclude: '/node_modules/',
            },
        ],
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: '这是自定义的title',
            template: './src/index.html',
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js'],
    },

    mode: 'development',
};

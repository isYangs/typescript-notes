// 引入一个包
const path = require('path');

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
    },

    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 使用的是ts-loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: '/node_modules/',
            },
        ],
    },
};

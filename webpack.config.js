const path = require('path');

module.exports = {
    target: ['web', 'es5'],
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/i,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.png$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ],
    },
    output: {
        library: 'aEmoji',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    }
};

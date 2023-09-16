const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const buildFileDest = path.resolve(__dirname, '../app/public')
const templateFileDest = path.resolve(__dirname, '../app/view')
module.exports = env => {
    console.log(env)
    console.log(env.production)
    return {
        mode: 'production',

        context: path.resolve(__dirname, '../webpack'),
        entry: './index.js',
        output: {
            // clean: true,
            path: buildFileDest,
            filename: 'bundle.[hash].js',
            // publicPath: env.production ? 'http://lego-backend-ldy2.oss-cn-beijing.aliyuncs.com/h5-assets/' : '/public/'
            publicPath: 'http://lego-backend-ldy2.oss-cn-beijing.aliyuncs.com/h5-assets/'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[hash].css'
            }),
            new HtmlWebpackPlugin({
                filename: 'page.nj',
                template: path.resolve(__dirname, './template.html')
            }),
            new CopyWebpackPlugin({
                patterns: [{
                    from: path.join(buildFileDest, 'page.nj'),
                    to: templateFileDest
                }]
            })
        ]
    }
}

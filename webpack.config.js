const path = require('path')
console.log(path.join(__dirname, 'public'));
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// making module export as a function
module.exports = (env) => {
    const isProduction = env === 'production';

    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundel.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }

                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }

}
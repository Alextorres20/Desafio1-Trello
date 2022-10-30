const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },

            // Aqui configure styles.css por mia.scss
            {
                test: /\.css$/,
                exclude: /mia.scss$/,
                use: ['style-loader', 'css-loader']
            },
            //Y aqui igual
            {
                test: /mia.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',
            //filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),

        //Aqui cambie la dirreción de donde se va a guardar las imagenes
        //Cambie assests por imagenes y borre la carpeta /assets/img
        new CopyPlugin({
            patterns: [
                {from: 'src/imagenes/', to: 'imagenes/'}
            ]
        })
    ]
};
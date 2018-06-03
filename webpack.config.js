const path = require('path');
const webpack = require('webpack');

function resolve(partial) {
    return path.resolve(process.cwd(), partial);
}

const entry = resolve('src/index.js');
const dist = resolve('dist/');

const baseConfig = {
    bail: true,
    devtool: 'source-map',

    entry: [entry],

    module: {
        strictExportPresence: true,
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        }],
    },

    plugins: [
        new webpack.EnvironmentPlugin(),
    ],
};

const baseOutput = {
    path: dist,
    library: 'CPF',
    libraryTarget: 'umd',
};

const regularConfig = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseOutput, {
        filename: 'cpf.js',
    }),

    optimization: {
        minimize: false,
    },
});

const minifiedConfig = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseOutput, {
        filename: 'cpf.min.js',
    }),

    optimization: {
        minimize: true,
    },
});

module.exports = [regularConfig, minifiedConfig];

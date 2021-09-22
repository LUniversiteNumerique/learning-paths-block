const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    ...defaultConfig,
    entry: './index.tsx',
    output: {
        ...defaultConfig.output,
        path: path.resolve(__dirname, 'build'),
        filename: 'block.js'
    },
    module: {
        ...defaultConfig.module,
        rules: [
            {
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
            ...defaultConfig.module.rules
        ]
    },
    resolve: {
        ...defaultConfig.resolve,
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        alias: {
            react: path.resolve('./node_modules/react')
        }
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};

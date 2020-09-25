import path from 'path';
import webpack, { Configuration } from 'webpack';

const webpackConfig = (env: any): Configuration => {
    return {
        target: 'node',
        entry: './src/index.ts',
        resolve: {
            extensions: ['.ts']
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'story.js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/
                }
            ]
        }
    };
};

export default webpackConfig;

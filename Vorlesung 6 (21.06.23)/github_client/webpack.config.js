const path = require('path');

module.exports = {
    entry: './src/scripts/bundle.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
    },
};
const path = require('path');

module.exports = {
  entry: {
    app: [
      './app.js'
      //path.resolve(environment.paths.source, 'Sass', 'main.scss')
    ],
  },
  paths: {
    /* Path to source files directory */
    source: path.resolve(__dirname, '../Resources/Private/'),

    /* Path to built files directory */
    output: path.resolve(__dirname, '../Resources/Public/'),
  },
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    images: 8192,

    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    fonts: 8192,
  },
};

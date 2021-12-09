// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const prod = process.env.NODE_ENV === 'production'

const path = prod ? '/hackernews' : '';

module.exports = withPlugins(
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: prod ? '/hackernews/_next/static/images/' : '',
  }],
  {
    // basePath: path,
    assetPrefix: path,
    publicRuntimeConfig: {
      basePath: path,
    },
    exportPathMap: function () {
      return {
        '/': { page: '/new' },
        '/new': { page: '/new' },
        '/top': { page: '/top' },
        '/best': { page: '/best' },
        '/ask': { page: '/ask' },
        '/jobs': { page: '/jobs' },
        '/show': { page: '/show' }
      }
    }
  }
)

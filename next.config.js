// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  // assetPrefix: !debug ? '/hackernews' : '',
  // images: {
  //   loader: 'imgix',
  //   path: '',
  // },
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/new' },
  //     '/new': { page: '/new' },
  //     '/top': { page: '/top' },
  //     '/best': { page: '/best' },
  //     '/ask': { page: '/ask' },
  //     '/jobs': { page: '/jobs' },
  //     '/show': { page: '/show' }
  //   }
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/new',
  //       permanent: true,
  //     },
  //   ]
  // },
}

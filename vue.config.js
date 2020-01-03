module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/workout-app/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}

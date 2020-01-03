module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/workout-log/'
    : '/',

  transpileDependencies: [
    'vuetify'
  ],

  pwa: {
    name: 'Workout Log',
    themeColor: '#1976D2'
  }
}

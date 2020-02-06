module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/workout-log/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Workout Log',
    themeColor: '#1976D2',
    msTileColor: '#1976D2',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      background_color: '#1976D2'
    }
  }
};

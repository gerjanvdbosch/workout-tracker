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
    manifestOptions: {
      background_color: '#1976D2',
      icons: [
        {
          'src': 'https://api.iconify.design/mdi-weight-lifter.svg',
          'type': 'image/svg',
          'purpose': 'any'
        }
      ]
    }
  }
};

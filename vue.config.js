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
          'src': './img/icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-144x144.png',
          'sizes': '144x144',
          'type': 'image/png'
        }
      ]
    }
  }
};

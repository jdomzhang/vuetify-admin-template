module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:{{devPort}}/',
        secure: false,
        changeOrigin: true
      },
      '/userdata/*': {
        target: 'http://localhost:{{devPort}}/',
        secure: false,
        changeOrigin: true
      }
    }
  }
}

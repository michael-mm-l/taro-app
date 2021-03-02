export default {
  pages: [
    'pages/index/index',
    'pages/me/me'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgba(68, 68, 68, 1)',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页'
      },
      {
        pagePath: 'pages/me/me',
        text: '我的'
      }]
  }
}

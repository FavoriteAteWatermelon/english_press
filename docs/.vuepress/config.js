module.exports = {
  title: 'English',
  // description: 'Hello, Object-c',
  head: [
      ['link', {
          rel: 'icon',
          href: `/favicon.ico`
      }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'UIComponents', link: '/componets/' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese' },
      //     { text: 'English', link: '/language/english' }
      //   ]
      // },
      // { text: 'External', link: 'https://www.baidu.com' },
    ],
// sidebarDepth: 2,
sidebar: [
  {
    title: 'Grammer',
    // collapsable: false,
    children: [
      '词/',
      '词/preposition',
      '词/active',
    ]
  },         
        
  {
    title: 'Reading',
    // collapsable: false,
    children: [
      'chapter2/',
      'chapter2/book'
    ]
  },         
        
]
},

}
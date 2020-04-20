module.exports = {
  title: 'English Grammar',
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
    title: 'English Grammer',
    // collapsable: false,
    children: [
      'chapter1/',
      'chapter1/preposition'
    ]
  },         
        
]
},

}
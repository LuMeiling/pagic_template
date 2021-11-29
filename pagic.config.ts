export default {
    theme: 'blog',
    plugins: ['blog'],
    title: '晓露的博客',
    description: '欢迎来到我的博客，这里搜集了我的技术文章和生活感悟，欢迎一起交流成长。',
    blog: {
        root: '/posts/',
        social: {
          github: 'LuMeiling/blog',
          email: 'meiling1989@163.com',
          twitter: 'KrystalMeiling',
        },
    },
    nav: [
        {
          text: '首页',
          link: '/index.html',
          icon: 'czs-home-l',
        },
        {
          text: '分类',
          link: '/categories/index.html',
          icon: 'czs-category-l',
        },
        {
          text: '标签',
          link: '/tags/index.html',
          icon: 'czs-tag-l',
        },
        {
          text: '关于',
          link: '/about/index.html',
          icon: 'czs-about-l',
        },
        {
          text: '归档',
          link: '/archives/index.html',
          icon: 'czs-box-l',
        },
        {
          text: '友情链接',
          link: '/links/index.html',
          icon: 'czs-link-l',
        },
      ]
};

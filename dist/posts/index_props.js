import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/index.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/index.html",
    'title': "博客的标题",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>博客的标题</h1>\n<p>博客的正文</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@17.0.2/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@17.0.2/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u535A\u5BA2\u7684\u6807\u9898"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>博客的正文</p>'
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-11-29T13:04:32.265Z",
    'updated': null,
    'excerpt': "博客的正文",
    'cover': undefined,
    'categories': [
        "编程世界"
    ],
    'tags': [
        "代码质量",
        "代码复杂度"
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};

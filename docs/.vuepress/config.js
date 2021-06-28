module.exports = {
    title: 'IRITA-企业级联盟链产品',
    description: 'irita.binajie.ai',
    base:'/',
    head: [
        [ 'link', {rel:'icon',href:''}],
        [ 'meta', {name:'keywords',content:''}],
        [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        logo: '',
        search: false,
        navbar: false,
        nav: [
            {text:'关于 IRITA', link: '/'},
            {text:'技术文档', link: 'https://irita.bianjie.ai/docs/'},
            {text:'开放社区', link: '/opencommunity'},
            // {text:'开放社区', link: '/opencommunity',items: [
            //     {text:'技术博客', link:'/opencommunity/blog'},
            //     {text:'文章资讯', link:'/opencommunity/articles'},
            //     {text:'GitHub', link:'https://github.com/bianjieai/irita'},
            // ]},
            {text:'开发者',link:'/developer'},
            {text:'关于边界',link:'https://www.bianjie.ai'}
        ]
    }
}
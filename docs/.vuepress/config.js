module.exports = {
    title: 'IRITA-企业级联盟链产品',
    description: 'irita.binajie.ai',
    base:'/',
    head: [
        [ 'link', {rel:'icon',href:'/favicon.png'}],
        [ 'meta', {name:'keywords',content:''}],
        [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        logo: '',
        search: false,
        navbar: false,
        nav: [
            {text:'关于 IRITA', link: '/', target: '_self'},
            {text:'技术文档', link: 'https://irita.bianjie.ai/docs/', target: '_blank'},
            {text:'开放社区', link: '/opencommunity/blog', target:'_self'},
            {text:'开发者',link:'/developer', target:'_self'},
            {text:'关于边界',link:'https://www.bianjie.ai', target: '_blank'}
        ]
    }
}
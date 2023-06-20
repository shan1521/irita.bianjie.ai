module.exports = {
    title: 'IRITA-企业级联盟链产品线',
    description: 'IRITA 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。IRITA 面向服务，针对开发者提供丰富的链应用开发服务套件，能更好的满足中小企业以更具成本效益的方式快速开发和部署 DApp 及其他链上应用的需求。',
    base:'/',
    head: [
        [ 'link', {rel:'icon',href:'/favicon.ico'}],
        [ 'meta', {name:'keywords',content:'IRITA,irita,IRITAOPB,iritaopb,IRITAHUB,iritahub,上海边界,边界智能区块链,边界智能区块链底层技术,分布式商业,企业联盟链,许可链,开放许可链,区块链底层技术框架,iService,IBC,区块链跨链,文昌链,开放联盟链,文昌链天舟,文昌链天和,文昌链多链'}],
        [ 'meta', {name:'description',content:'IRITA 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。IRITA 面向服务，针对开发者提供丰富的链应用开发服务套件，能更好的满足中小企业以更具成本效益的方式快速开发和部署 DApp 及其他链上应用的需求。'}],
        [ 'meta', {name: 'baidu-site-verification', content: 'code-jY9z5Dzz79' }],
        [ 'meta', {name: '360-site-verification', content: '7f2a1617665f5d995f3cf90b824f29a5' }],
        [ 'meta', {property:'og:image',content:'https://www.bianjie.ai/resources/IRITA/Bianjie-Logo-IRITA-Vertical-Black.png'}],
        [ 'meta', {property:'og:title',content:'IRITA - 企业级联盟链产品线'}],
        [ 'meta', {property:'og:description',content:'IRITA 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。IRITA 面向服务，针对开发者提供丰富的链应用开发服务套件，能更好的满足中小企业以更具成本效益的方式快速开发和部署 DApp 及其他链上应用的需求。'}],
        [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        logo: '',
        search: false,
        navbar: false,
        nav: [
            {text:'关于 IRITA', link: '/', target: '_self'},
            {text:'文昌链', link: 'https://wenchang.bianjie.ai/', target: '_blank'},
            {text:'技术文档', link: 'https://irita.bianjie.ai/docs/', target: '_blank'},
            {text:'开放社区', link: '/community', target:'_self'},
            {text:'开发者',link:'/developer', target:'_self'},
            {text:'关于边界',link:'https://www.bianjie.ai', target: '_blank'}
        ]
    },
    plugins:{
        '@vuepress/pwa': {
            generateSWConfig : {               
                globPatterns: [
                    '**/*.{js,css,png,jpg,jpeg,gif,svg,woff,woff2,eot,ttf,otf}'
                ]
            }
        }
    }
}

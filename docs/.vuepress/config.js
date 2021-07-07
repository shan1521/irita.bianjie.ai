module.exports = {
    title: 'IRITA-企业级联盟链产品',
    description: 'IRITA 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。IRITA 面向服务，针对开发者提供丰富的链应用开发服务套件，能更好的满足中小企业以更具成本效益的方式快速开发和部署 DApp 及其他链上应用的需求。',
    base:'/',
    head: [
        [ 'link', {rel:'icon',href:'/iritalogo.png'}],
        [ 'meta', {name:'keywords',content:'IRITA,irita,IRITA HUB,IRITA OPB,文昌链,BSN开放联盟链,iService,IBC,跨链服务,边界智能区块链,边界科技,上海边界,边界区块链'}],
        [ 'meta', {name:'description',content:''}],
        [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        logo: '',
        search: false,
        navbar: false,
        nav: [
            {text:'关于 IRITA', link: '/', target: '_self'},
            {text:'技术文档', link: 'https://irita.bianjie.ai/docs/', target: '_blank'},
            {text:'开放社区', link: '/community', target:'_self'},
            {text:'开发者',link:'/developer', target:'_self'},
            {text:'关于边界',link:'https://www.bianjie.ai', target: '_blank'}
        ]
    }
}

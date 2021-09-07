---
{
    layout: WenchangLay,
    pageTitle: 文昌链开发配置文档,
    firstContent: {
        text: 一、SDK-GO地址：,
        link: https://github.com/bianjieai/opb-sdk-go
    },
    secondContent: {
        text: 二、开发环境,
        bsnContent: {
            text: 1、BSN,
            title: BSN 文昌链注册及账户创建的文档,
            list: [
                {
                    text: 注册, 
                    link: https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html
                },
                {
                    text: 链账户的创建, 
                    link: https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html,
                    tip: （注意托管账户和非托管账户的区别及使用）
                },
                {
                    text: 项目的创建及接入参数的下载, 
                    link: https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html
                },
                {
                    text: 网关接入说明, 
                    link: https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html
                },
            ]
        },
        iritaTestnet: {
            text: 2、IRITA测试网,
            title: 初始化SKD配置,
            block: [
                {text: Chain-ID：testing},
                {text: RPC：47.100.192.234:26657},
                {text: gRPC：47.100.192.234:9090},
            ],
            lang: javascript
        }
    },
    thirdContent: {
        text: 三、链信息和区块、交易查询,
        title: 文昌链区块链浏览器暂未开放，链信息、区块和交易查询可参照如下方式,
        description: 初始化 client 成功后，再调用 BaseClient 可以查询到。
    },
    forthContent: {
        text: 四、NFT文档,
        link: https://irita.bianjie.ai/docs/core_modules/nft.html
    }
}
---
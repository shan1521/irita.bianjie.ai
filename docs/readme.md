---
{
    layout: Layout,
    isNewHome: true,
    homeContent: {
        title: IRITA,
        subTitle: 支持下一代分布式商业的企业级联盟链产品线,
        homeLink: [
            {
                icon: icon-doct,
                type: 技术文档,
                href: https://irita.bianjie.ai/docs/
            },
            {
                icon: icon-github,
                type: GitHub,
                href: https://github.com/bianjieai/irita
            }
        ]
    },
    iritaDescription: {
        title: IRITA 是什么？,
        characteristic: [
            { text: 自主可控},
            { text: 高效易用},
            { text: 功能全面}
        ],
        descriptionArticle: [
            {paragraph: IRITA 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。},
            {paragraph: IRITA 具有保护隐私的数据加密共享、高效的共识协议、领先的跨链技术、实用性极强的链上链下系统交互及多方协作业务流集成能力、灵活的数字资产建模与可信交换支撑、以及大数据存储等 6 大核心技术优势，可广泛应用于金融、医疗健康、供应链、车联网等多种商业场景，为实体经济提供基于区块链信任机器的价值赋能。},
            {paragraph: IRITA 支持中国国密标准，并有完善的 SDK 及运维工具支持，在性能、安全可靠性、认证及权限、可维护性、可扩展性和运维监控等多方面都满足企业级应用需求。}
        ]
    },
    productContent: {
        text: IRITA 整体架构
    },
    advantageContent: {
        text: IRITA 核心技术优势,
        advantageList: [
            {
                img: iservice.png,
                advantageTitle: 面向服务、支持多方协作 - iService,
                description: [
                    {paragraph: 链上链下可信交互},
                    {paragraph: 高效支持对于ERP等各类传统系统的有效集成}
                ]
            },
            {
                img: yinsijisuan.png,
                advantageTitle: 隐私计算 - 数据多方安全协作,
                description: [
                    {paragraph: 支持数据多层次高效安全加密存储},
                    {paragraph: 通过多种隐私计算方法，保护各方数据所有权和隐私},
                    {paragraph: 支持多方协作时的数据不出门 ，实现数据可用不可见}
                ]
            },
            {
                img: shuzizichan.png,
                advantageTitle: 数字资产建模与可信交换,
                description: [
                    {paragraph: 支持对数字资产数据多元结构的灵活建模实现链上可信交换},
                    {paragraph: 以NFT（非同质化通证）为基础，支持供应链、知识产权、医疗、存证等各领域的数字资产化}
                ]
            },
            {
                img: tendermint.png,
                advantageTitle: 高效共识 - Tendermint,
                description: [
                    {paragraph: 互联网级别可应用的拜占庭共识协议，Facebook、长安链也借鉴使用此共识技术}
                ]
            },
            {
                img: IBC.png,
                advantageTitle: 先进跨链技术 - IBC协议,
                description: [
                    {paragraph: IBC 支持异构系统围绕数据和计算的跨链调用和可信交互},
                    {paragraph: 边界智能团队参与并贡献了 IBC 中重要模块——ICS20 跨链转账的开发}
                ]
            },
            {
                img: dashuju.png,
                advantageTitle: 大数据存储,
                description: [
                    {paragraph: 自带存储层支持云存储和分布式存储},
                    {paragraph: 数据仓库和链式数据结合支持链上数据高效全生命周期查询},
                ]
            },
        ]   
    },
    productionLine: {
        text: IRITA 产品线,
        subText: IRITA 产品线中各个子产品具有模块化的架构和不同的功能特点，可以基于 IRITA 产品线根据不同业务场景高效打造不同行业应用,
        productionList: [
            {
                id: 0,
                lineName: IRITA CE,
                lineIntro: 开源版本,
                lineDescription: 供开发者学习、快速上手熟悉 IRITA 的体系架构、并部署行业验证应用系统等,
                iconName: icon-ce
            },
            {
                id: 1,
                lineName: IRITA HUB,
                lineIntro: 异构区块链跨链服务枢纽,
                lineDescription: 支持各种异构区块链网络间跨链资产交换/转移及信息安全验证；跨链数据安全共享和跨链服务调用,
                iconName: icon-irita_hub
            },
            {
                id: 2,
                lineName: IRITA OPB,
                lineIntro: 基于智能合约的开放联盟链,
                lineDescription: 支持智能合约应用开发的开放联盟链，以应用服务平台形式支持分布式商业系统应用快速开发、部署及运营,
                iconName: icon-irita_opb
            },
            {
                id: 3,
                lineName: IRITA BEAN,
                lineIntro: 保护数据隐私的数据共享平台,
                lineDescription: 专注于大数据隐私保护和边缘分析的产品，集成主流开源隐私计算框架，实现了大数据多层次授权共享、多方隐私保护查询、多方联盟学习等能力,
                iconName: icon-irita_bean
            },
            {
                id: 4,
                lineName: IRITA DA,
                lineIntro: 数字资产确权及交换平台,
                lineDescription: 专注于支持 NFT 数字资产登记、确权及可信交换的产品；支持实物资产在链上的数字化建模和全生命周期管理,
                iconName: icon-irita_da
            },
        ],
        productionLineImg: [
            {
                lineImgName: irita_ce_image,
                lineImgHighlightName: irita_ce_highlight,
            },
            {
                lineImgName: irita_hub_image,
                lineImgHighlightName: irita_hub_highlight,
            },
            {
                lineImgName: irita_opb_image,
                lineImgHighlightName: irita_opb_highlight,
            },
            {
                lineImgName: irita_bean_image,
                lineImgHighlightName: irita_bean_highlight,
            },
            {
                lineImgName: irita_da_image,
                lineImgHighlightName: irita_da_highlight,
            },
        ]
    },
    openCommunity: {
        text: 开放社区,
        list: [
            {
                text: 技术博客, 
                link: /community, 
                routingLevel: 2,
                target: _self,
                blogImgName: techblog,
                blogImgHighlightName: techblog_highlight
            },
            {
                text: 文章资讯, 
                link: /community, 
                routingLevel: 2,
                target: _self,
                blogImgName: news,
                blogImgHighlightName: news_highlight
            },
            {
                text: GitHub, 
                link:  https://github.com/bianjieai/irita, 
                target: _blank,
                blogImgName: github,
                blogImgHighlightName: github_highlight
            }
        ]
    }
}
---
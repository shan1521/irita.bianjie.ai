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
            {paragraph: IRITA 是边界智能以区块链跨链、NFT 技术及大数据隐私保护技术为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。},
            {paragraph: IRITA 具有保护隐私的数据加密共享、高效的共识协议、领先的跨链技术、实用性极强的链上链下系统交互及多方协作业务流集成能力、灵活的资产数字化建模与可信交换支撑、以及大数据存储 6 大核心技术优势，可广泛应用于金融、医疗健康、供应链、车联网等多种商业场景，为实体经济提供基于区块链信任机器的价值赋能。},
            {paragraph: IRITA 支持中国国密标准，并有完善的 SDK 及运维工具支持，在性能、安全可靠性、认证及权限、可维护性、可扩展性和运维监控等多方面都满足企业级应用需求。}
        ]
    },
    blockchainPlatform: {
        title: 企业级区块链底层技术平台,
        itro1: 边界智能以区块链跨链、NFT 技术及大数据隐私保护技术为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线-IRITA。,
        itro2: 以自主可控、高效易用、功能全面的产品优势，可满足多种复杂的分布式商业环境应用场景，为实体经济提供基于区块链信任机器的价值赋能。,
        blockchainList: [
            {
                blockchainTitle: 共识引擎,
                description: 易于使用、易于理解、高性能且适用于各种分布式应用程序的共识算法，实现高交易吞吐量、可扩展和安全性，提高共识效率
            },
            { 
                blockchainTitle: 跨链服务,
                description: 采用 IBC+iService 的跨链通信协议，不仅实现数据在多个不同区块链网络间可信交换与调用;更可为分布式应用提供面向服务的交互协议，支持链上链下可信交互
            },
            { 
                blockchainTitle: 数据隐私保护,
                description: 通过多方安全计算、联邦学习等多种隐私计算方式，支持多方协作时原始数据不出门，实现数据可用不可见，真正保护各方联盟链生态伙伴的数据所有权及隐私安全
            },
            { 
                blockchainTitle: 可信账本,
                description: 采用结构化、模块化的账本结构，保证链上数据信息的易查询、易验证，各节点账本信息的统一性与数据一致性
            }
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
                    {paragraph: 高效支持对于各类传统系统的有效集成}
                ]
            },
            {
                img: yinsijisuan.png,
                advantageTitle: 隐私计算 - 数据多方安全协作,
                description: [
                    {paragraph: 支持数据多层次高效安全加密存储},
                    {paragraph: 通过多种隐私计算方法，保护各方数据所有权和隐私},
                    {paragraph: 支持多方协作时原始数据不出门，实现数据可用不可见的价值流通}
                ]
            },
            {
                img: shuzizichan.png,
                advantageTitle: 资产数字化建模与可信交换,
                description: [
                    {paragraph: 采用 NFT 技术支持对有价值的数据资产和实体资产进行链上数字化建模，形成区块链上数字化资产并支持可信流转与交换，能很好支持分布式商业系统及元宇宙应用围绕资产的可信业务流程实现。}
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
                lineIntro: IRITA 的开源版本,
                lineDescription: IRITA Community Edition 属于开源版本，供开发者学习、快速上手熟悉 IRITA 的体系架构、并部署行业验证应用系统等,
                iconName: icon-ce
            },
            {
                id: 1,
                lineName: IRITA HUB,
                lineIntro: 异构区块链跨链服务枢纽,
                lineDescription: 基于先进的跨链技术、IBC 协议和 Tendermint 共识机制，支持各种异构区块链网络及链外系统间的跨链资产交换/转移及信息安全验证，支持跨链数据安全共享和跨链服务调用,
                iconName: icon-irita_hub
            },
            {
                id: 2,
                lineName: IRITA OPB,
                lineIntro: 支持分布式商业应用的开放许可链,
                lineDescription: 支持复杂分布式商业应用系统的开放许可链，集成了包括资产数字化 NFT 技术、大数据隐私保护等功能，提供智能合约的编程环境，以应用服务平台形式支持分布式商业系统应用快速开发、部署及运营,
                iconName: icon-irita_opb
            },
            {
                id: 3,
                lineName: IRITA BEAN,
                lineIntro: 数据隐私保护及共享产品,
                lineDescription: 专注于大数据隐私保护，集成主流开源隐私计算框架，实现了大数据多层次授权、多方隐私保护查询、联邦学习等能力；支持对数据和业务流程全生命周期进行监管，实现数据隐私保护及可信流转。可用于物联网、政务协作、医疗健康等业务场景,
                iconName: icon-irita_bean
            },
            {
                id: 4,
                lineName: IRITA DA,
                lineIntro: 资产数字化确权及交换产品,
                lineDescription: 以 NFT 技术为基础，支持多元化资产在链上的数字化建模、确权、可信交换及全生命周期管理，实现以智能合约驱动实体经济相关流程的自动化运行，降低业务运营成本,
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
                link: https://github.com/bianjieai/irita, 
                target: _blank,
                blogImgName: github,
                blogImgHighlightName: github_highlight
            }
        ]
    }
}
---

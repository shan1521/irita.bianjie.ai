<template>
	<div class="production_container">
		<div class="production_header_content_wrap">
			<div class="production_header_content">
				<div class="production_header_img_wrap">
					<h5>支持下一代分布式商业系统的联盟链产品-IRITA</h5>
					<div class="title_img_content">
						<img src="../assets/home/iritahome_banner.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="production_text_content">
			<div class="production_text_title">产品简介</div>
			<p class="production_list_item">IRITA 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品。IRITA 具有保护隐私的数据加密共享、高效的共识协议、领先的跨链技术、实用性极强的链上链下系统交互能力、灵活的数字资产建模与可信交换支撑、以及大数据支持等 6 大核心技术优势，可广泛应用于金融、医疗健康、供应链、车联网等多种商业场景，为实体经济提供基于区块链信任机器的价值赋能。</p>
			<p class="production_list_item">IRITA 支持中国国密标准，并有完善的 SDK 及运维工具支持，在性能、安全可靠性、认证及权限、可维护性、可扩展性和运维监控等多方面都满足企业级应用需求。</p>
			
			<p class="production_list_item">IRITA 具有模块化的架构，各个子产品具有不同的功能，可以根据不同业务场景高效打造不同行业应用：</p>
			<p class="production_list_item_children"> • IRITA-Lite 属于开源版本</p>
			<p class="production_list_item_children"> • IRITA BEAN 保护数据隐私的数据共享，可用于物联网、医疗健康等数据管理平台</p>
			<p class="production_list_item_children"> • IRITA DA 数字资产确权及交换，可应用于供应链金融、碳中和等领域</p>
			<p class="production_list_item_children"> • IRITA HUB 跨链服务枢纽，已上线BSN</p>
			<p class="production_list_item_children"> • IRITA OPB 开放联盟链，已上线BSN</p>
		</div>
		<div class="production_irita_img_content">
			<div class="production_irita_img_wrap">
				<div class="production_irita_img">
					<h3 class="production_irita_title">产品架构</h3>
					<img src="../assets/irita/IRITA_framework.png" alt="">
				</div>
			</div>
		</div>
		<div class="production_irita_core_content">
			<div class="production_content_wrap">
				<h2 class="production_title">核心技术优势</h2>
				<ul class="production_core_list_content">
					<li class="production_core_list_item" v-for="item in coreArray">
						<div class="production_core_list_item_img_icon">
							<img :src="item.src" alt="">
						</div>
						<h3 class="production_core_list_item_title">{{item.title}}</h3>
						<div class="production_list_content">
							<p class="production_core_list_item_section">{{item.section}}</p>
							<p class="production_core_list_item_section_second">{{item.sectionSecond}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Production",
		data() {
			return {
				coreArray:[
					{
						src: require("../assets/irita/tendermint.png"),
						title:'高效共识-Tendermint',
						section:'互联网级别可应用的拜占庭共识协议，Libra也沿用此技术'
					},
					{
						src: require("../assets/irita/ibc.png"),
						title:'先进跨链技术-IBC协议',
						section:'团队贡献的业内公认的、国际领先跨链技术标准设计与实施',
						sectionSecond:'支持各种异构链间可信交互'
					},
					{
						src: require("../assets/irita/privacy.png"),
						title:'隐私计算-数据授权共享',
						section:'数据在链上加密存储，保护各方数据所有权和隐私',
						sectionSecond:'只有用户授权数据才会共享给第三方'
					},
					{
						src: require("../assets/irita/tx.png"),
						title:'数字资产建模与交易',
						section:'支持对实体资产数据多元结构的灵活建模，非常适合实现各领域的资产数字化'
					},
					{
						src: require("../assets/irita/data.png"),
						title:'大数据支持',
						section:'自带存储层支持云存储和分布式存储；数据仓库和链式数据结合支持链上数据高效全生命周期查询'
					},
					{
						src: require("../assets/irita/iservice.png"),
						title:'面向服务-iService',
						section:'链上链下可信交互，高效支持对于ERP等各类传统系统的集成'
					},
				]
			}
		}
	}
</script>

<style scoped lang="less">
	@import "../style/convert";
	@media print {
		.production_container{
			background: #fff !important;
			.production_header_content_wrap{
				-webkit-print-color-adjust: exact;
				.production_header_content{
					h5{
						padding: 0 ~`convertPxToCm('20px')`!important;
					}
				}
			}
			.production_text_content{
				padding-bottom: ~`convertPxToCm('60px')`!important;
				.production_text_title{
					margin-top: ~`convertPxToCm('40px')`!important;
				}
				.production_list_item{
					padding: 0 ~`convertPxToCm('20px')`!important;
				}
			}
			.production_irita_core_content{
				.production_content_wrap{
					padding-top: ~`convertPxToCm('20px')` !important;
					padding-bottom: ~`convertPxToCm('120px')` !important;
					.production_title{
					}
					.production_core_list_content{
						.production_core_list_item{
							margin-top: ~`convertPxToCm('20px')` !important;
							margin-right: ~`convertPxToCm('61px')` !important;
							.production_core_list_item_img_icon{
								margin-bottom: ~`convertPxToCm('40px')`!important;
							}
							.production_core_list_item_title{
								margin-bottom: ~`convertPxToCm('10px')`!important;
							}
						}
					}
				}
			}
			.production_irita_img_content{
				.production_irita_img_wrap{
					.production_irita_img{
						padding-top: ~`convertPxToCm('80px')`!important;
					}
				}
			}

		}
	}
	.production_container{
		width: 100%;
		background: #fff;
		.production_header_content_wrap{
			background: url("../assets/home/irita_banner_bg.png") no-repeat center center;
			background-size: cover;
			height: 4.6rem;
			display: flex;
			align-items: center;
			width: 100%;
			.production_header_content{
				text-align: left;
				display: flex;
				justify-content: flex-start;
				max-width: 12rem;
				width: 100%;
				margin: 0 auto;
				.production_header_img_wrap{
					display:flex;
					position: relative;
					justify-content: flex-start;
					width: 100%;
					h5{
						width: 100%;
						text-align: left;
						font-size: 0.5rem;
						color: #fff;
						line-height: 0.7rem;
						font-weight: 500;
						max-width: 6.5rem;
						@media(max-width: 1200px){
							margin-left: 0.2rem;
						}
						@media(max-width: 1050px){
							max-width: 5.4rem;
							font-size: 0.4rem;
							line-height: 0.6rem;
						}
						@media(max-width: 900px){
							max-width: 5rem;
							font-size: 0.36rem;
							line-height: 0.5rem;
						}
						@media(max-width: 768px){
							max-width: 5rem;
							font-size: 0.36rem;
						}
						@media(max-width: 600px){
							max-width: 4.68rem;
							margin: 0 auto;
							line-height: 0.5rem;
						}
						@media(max-width: 500px){
							font-size: 0.3rem;
							max-width: 3.9rem;
							margin: 0 auto;
							padding: 0;
							line-height: 0.4rem;
						}
						@media(max-width: 440px){
							font-size: 0.24rem;
							max-width: 3.2rem;
							margin: 0 auto;
							padding: 0;
							line-height: 0.32rem;
							
						}
						@media(max-width: 321px){
							font-size: 0.2rem;
							max-width: 2.6rem;
							margin: 0 auto;
							padding: 0;
						}
					}
					.title_img_content{
						flex: 1;
						position: absolute;
						right: -0.8rem;
						top:-1.55rem;
						@media(max-width: 1200px){
							top:-1.05rem;
						}
						@media(max-width: 1050px){
							top:-0.45rem;
						}
						@media(max-width: 1050px){
							top:-0.25rem;
							right: -0.6rem;
						}
						@media(max-width: 768px){
							top:0.2rem;
							right: -0.6rem;
						}
						img{
							max-width: 7.9rem;
							width: 100%;
							@media(max-width: 1200px){
								max-width: 6.35rem;
							}
							@media(max-width: 1050px){
								max-width: 5.35rem;
							}
							@media(max-width: 900px){
								max-width: 4.8rem;
							}
							@media(max-width: 768px){
								max-width: 4.8rem;
							}
							@media(max-width: 600px){
								display: none;
							}
						}
					}
				}
			}
		}
		.production_text_content{
			max-width: 12rem;
			margin: 0 auto 0.8rem auto;
			.production_text_title{
				font-size:0.18rem;
				text-align: center;
				color: #0C253A;
				margin: 1rem 0 0.4rem 0;
				font-weight: bold;
			}
			.production_list_item{
				font-size: 0.14rem;
				line-height: 0.28rem;
				color: #0C253A;
			}
			.production_list_item_children{
				text-indent: 0.2rem;
				font-size: 0.14rem;
				line-height: 0.28rem;
				color: #0C253A;
			}
			.production_list_item:nth-of-type(2){
				margin-top: 0.16rem;
			}
			.production_list_item:nth-of-type(3){
				margin-top: 0.16rem;
			}
			.production_list_item:last-child{
				margin-top: 0.16rem;
			}
			.production_list_content{
				margin-top: 0.25rem;
				color: #0C253A;
				p{
					font-size: 0.14rem;
					margin-bottom: 0.14rem;
				}
			}
		}
		.production_irita_core_content{
			background: #fff;
			.production_content_wrap{
				max-width: 12rem;
				margin: 0 auto;
				padding-top: 0.8rem;
				padding-bottom: 1rem;
				.production_title{
					text-align: center;
					font-size: 0.18rem;
				}
				.production_core_list_content{
					list-style: none;
					display: flex;
					flex-wrap: wrap;
					margin-top: 0.65rem;
					justify-content: space-between;
					.production_core_list_item{
						max-width: 2.7rem;
						margin-right: 1.46rem;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-between;
						.production_list_content{
							min-height: 1rem;
							.production_core_list_item_section{
								font-size: 0.14rem;
								font-weight:400;
								color:rgba(138,153,165,1);
								line-height: 0.24rem;
								letter-spacing: 0.01rem;
								text-align: center;
							}
							.production_core_list_item_section_second{
								font-size: 0.14rem;
								font-weight:400;
								color:rgba(138,153,165,1);
								line-height: 0.24rem;
								letter-spacing: 0.01rem;
								text-align: center;
							}
						}
						.production_core_list_item_title{
							font-size: 0.16rem;
							font-weight:400;
							color:rgba(12,37,58,1);
							line-height: 0.22rem;
							margin-bottom: 0.2rem;
						}
						.production_core_list_item_img_icon{
							width: 0.5rem;
							margin-bottom: 0.41rem;
							img{
								width: 100%;
							}
						}
					}
					.production_core_list_item:nth-of-type(3){
						margin-right: 0;
						
					}
					.production_core_list_item:nth-of-type(6){
						margin-right: 0;
						
					}
				}
			}
		}
		.production_irita_img_content{
			background: #fafafa;
			.production_irita_img_wrap{
				max-width: 12rem;
				margin: 0 auto;
				box-sizing: border-box;
				padding: 0 0.2rem;
				.production_irita_img{
					padding: 0.8rem 0;
					.production_irita_title{
						font-size: 0.18rem;
						font-weight:600;
						color:rgba(12,37,58,1);
						line-height: 0.25rem;
						text-align: center;
						padding-bottom: 0.6rem;
					}
					img{
						width: 100%;
					}
				}
			}
		}
	}
	@media screen and (max-width: 1200px){
		.production_container{
			.production_header_content_wrap{
				.production_header_content{
					h5{
						box-sizing: border-box;
					}
				}
			}
			.production_text_content{
				box-sizing: border-box;
				padding:  0 0.2rem;
			}
			.production_irita_core_content{
				.production_content_wrap{
					max-width: 7.68rem;
					.production_core_list_content{
						justify-content: center;
						.production_core_list_item{
							padding-top: 0.4rem;
						}
					
						.production_core_list_item:nth-of-type(2){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(3){
							margin-right: 1.46rem;
							
						}
						.production_core_list_item:nth-of-type(4){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(6){
							margin-right: 0;
							
						}
					}
				}
			}
		}
	}
	@media screen and (min-width: 500px) and (max-width: 768px){
		.production_container{
			.production_header_content_wrap{
				.production_header_content{
					h2{
						font-size: 0.48rem;
					}
				}
			}
			.production_irita_core_content{
				.production_content_wrap{
					max-width: 5rem;
					.production_core_list_content{
						justify-content: center;
						.production_core_list_item{
							padding-top: 0.4rem;
							max-width: 2rem;
							margin-right: 13%;
							.production_list_content{
								min-height: 1.3rem;
							}
						}
						.production_core_list_item:nth-of-type(2){
							margin-right: 0;
						
						}
						.production_core_list_item:nth-of-type(3){
							margin-right: 13%;
						
						}
						.production_core_list_item:nth-of-type(4){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(6){
							margin-right: 0;
							
						}
					}
				}
			}
		}
	}

	@media screen  and (max-width: 500px) {
		.production_container{
			.production_header_content_wrap{
				.production_header_content{
					h2{
						font-size: 0.32rem;
					}
					h5{
						font-size: 0.14rem;
						line-height: 0.21rem;
						padding: 0 0.6rem;
					}
				}
			}
			.production_irita_core_content{
				.production_content_wrap{
					max-width: 375rem;
					padding-left: 0.2rem;
					padding-right: 0.2rem;
					.production_core_list_content{
						justify-content: center;
						.production_core_list_item{
							padding-top: 0.4rem;
							max-width: 3.2rem;
							margin-right: 0;
							.production_core_list_item_section{
								min-height: auto;
							}
						}
						.production_core_list_item:nth-of-type(2){
							margin-right: 0;
						
						}
						.production_core_list_item:nth-of-type(3){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(4){
							margin-right: 0;
							
						}
						.production_core_list_item:nth-of-type(6){
							margin-right: 0;
							
						}
					}
				}
			}
		}
	}
</style>

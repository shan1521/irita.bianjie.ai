<template>
  <div class="home_content_wrapper">
		<!-- 顶部 -->
		<div class="home_top_content">
			<div class="top_content">
				<h1 class="top_content_title">{{$frontmatter.homeContent.title}}</h1>
				<p class="title_desc">{{$frontmatter.homeContent.subTitle}}</p>
				<div class="link_content">
					<span class="link link_content_left">
						<i class="iconfont icon-doct"></i>
						<span class="link_type">技术文档</span>
					</span>
					<span class="link link_content_right">
						<i class="iconfont icon-github"></i>
						<span class="link_type">GitHub</span>
					</span>
				</div>	
			</div>
		</div>
		<div class="home_irita_what_content">
			<div class="irita_what_content">
				<img src="/irita_image_1.png" alt="" class="irita_image_1">
				<div class="irita_description">
					<p class="title">IRITA 是什么？</p>
					<div class="characteristic">
						<span class="characteristic_item">自主可控</span>
						<span class="characteristic_item">高效易用</span>
						<span class="characteristic_item">功能全面</span>
					</div>
					<p class="description_article">
						IRITA 是边界智能以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发的支持下一代分布式商业系统的企业级联盟链产品线。 IRITA 具有保护隐私的数据加密共享、高效的共识协议、领先的跨链技术、实用性极强的链上链下系统交互能力、灵活的数字资产建模与可信交换支撑、以及大数据支持等 6 大核心技术优势，可广泛应用于金融、医疗健康、供应链、车联网等多种商业场景，为实体经济提供基于区块链信任机器的价值赋能 IRITA 支持中国国密标准，并有完善的 SDK 及运维工具支持，在性能、安全可靠性、认证及权限、可维护性、可扩展性和运维监控等多方面都满足企业级应用需求。
					</p>
				</div>
			</div>
		</div>
		<div class="home_product_content">

		</div>

	</div>
</template>

<script>
export default {
    name:'NewHome'
}
</script>

<style lang="stylus">
@import url('../../public/iconfont/iconfont.css');
.home_content_wrapper
	// height 100rem
	// background green
	.home_top_content
		width 100%
		height 46.4rem
		background url('/home_banner.png') no-repeat center center
		background-size cover
		.top_content
			padding 10.7rem 0 17.3rem 8.1rem
			margin 0 auto
			max-width $contentWidth
			.top_content_title
				height 6.4rem
				line-height 6.4rem
				font-size $fontSize60
				font-family PingFangSC-Medium, PingFang SC
				font-weight $fontWeight500
				letter-spacing 0.5rem
				color $blackColor
			.title_desc
				margin-top 2.4rem
				margin-bottom 4rem
				height 2.4rem
				line-height 2.4rem
				font-size $fontSize24
				font-family PingFangSC-Medium, PingFang SC
				font-weight $fontWeight500
				color $blackColor
			.link_content
				display flex
				align-items center
				box-sizing border-box
				height 3.2rem
				line-height 3.2rem
				.link
					display flex
					align-items center
					padding-left 0.4rem
					height 3.2rem
					border 0.1rem solid $highlightDetailColor
					border-radius 1.6rem
					.iconfont
						display flex
						justify-content center
						margin-right 0.8rem
						width 2.4rem
						height 2.4rem
						line-height 2.4rem
						color $whiteColor
						border-radius 50%
						background $highlightDetailColor
						vertical-align middle
					.link_type
						height 2.2rem
						line-height 2.4rem
						font-size $fontSize16
						font-family PingFangSC-Medium, PingFang SC
						font-weight $fontWeight500
						color $blackColor
				.link_content_left
					margin-right 2.4rem
					width 11.2rem
				.link_content_right
					width 10.2rem
	.home_irita_what_content
		width 100%
		height 50.7rem
		background pink
		.irita_what_content
			display flex
			align-items center
			margin 0 auto
			padding 8rem 4.8rem 8rem 6.6rem
			max-width $contentWidth
			.irita_image_1
				width 33.8rem
				height 34.7rem
				vertical-align middle
			.irita_description
				margin-left 10rem
				.title
					height 2.8rem
					line-height 2.8rem
					font-size $fontSize28
					font-family PingFangSC-Semibold, PingFang SC
					font-weight $fontWeight600
					color: $blackColor
				.characteristic
					margin-top 4.8rem
					margin-bottom 3.6rem
					.characteristic-item
						box-sizing border-box
						margin-left 0.8rem
						height 2.4rem
						line-height 2.4rem
						font-size $fontSize20
						font-family PingFangSC-Semibold, PingFang SC
						font-weight $fontWeight600
						color $blackColor
</style>
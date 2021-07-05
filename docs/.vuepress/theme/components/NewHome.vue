<template>
  <div class="home_content_wrapper">
		<!-- 顶部 -->
		<div class="home_top_content">
			<div class="top_content">
				<h1 class="top_content_title">{{homeContent.title}}</h1>
				<p class="title_desc">{{homeContent.subTitle}}</p>
				<div class="link_content">
					<a :href="item.href" class="link" v-for="(item,index) in homeContent.homeLink" :key="index"
						target="_blank" rel="noopener noreferrer">
						<i class="iconfont" :class="item.icon ? item.icon : ''"></i>
						<span class="link_type">{{item.type}}</span>
					</a>
				</div>
			</div>
		</div>
		<!-- IRITA 介绍 -->
		<div class="home_irita_what_content">
			<div class="irita_what_content">
				<img src="/home/irita_image_1.png" alt="" class="irita_image_1">
				<div class="irita_description">
					<p class="title">{{iritaDescription.title}}</p>
					<div class="characteristic">
						<span class="characteristic_item" v-for="(item,index) in iritaDescription.characteristic" :key="index">{{item.text}}</span>
					</div>
					<p class="description_article" v-for="(item,index) in iritaDescription.descriptionArticle" :key="index">{{item.paragraph}}</p>
				</div>
			</div>
		</div>
		<!-- 产品架构 -->
		<div class="home_product_content">
			<div class="product_content">
				<p class="product_title">{{productContent.text}}</p>
				<img src="/home/chanpinjiagou_image.png" alt="" class="product_img">
			</div>
		</div>
		<!-- IRITA 核心技术优势 -->
		<div class="home_advantage_content">
			<div class="advantage_content_wrapper">
				<div class="advantage_content">
					<p class="advantage_title">{{advantageContent.text}}</p>
					<ul class="advantage_list">
						<li class="advantage_item_wrapper" v-for="(item,index) in advantageContent.advantageList" :key="index">
							<div class="advantage_item" ref="advantageItem">
								<img :src="differentAdvantageImg(item.img)" alt="" class="advantage_img">
								<p class="advantage_title">{{item.advantageTitle}}</p>
								<p class="description" v-for="(dItem,dIndex) in item.description" :key="dIndex">{{dItem.paragraph}}</p>
							</div>
						</li>
					</ul>
					<div class="more">
						<a class="more_content" href="https://irita.bianjie.ai/docs/" target="_blank" rel="noopener noreferrer">
							<span class="more_text">了解更多</span>
							<i class="iconfont icon-turnto"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- IRITA 产品线 -->
		<div class="home_productionline_content">
			<div class="productionline_content">
				<p class="text">{{productionLine.text}}</p>
				<p class="subtext">{{productionLine.subText}}</p>
				<div class="production_line_content">
					<ul class="production_line">
						<div class="line_item_wrapper" ref="lineItemWrapper" :style="productionLineTop(index)" @mouseenter="hoverFn(item.id)" @mouseleave="leaveFn(item.id)" v-for="(item,index) in productionLine.productionList" :key="item.id">
							<li class="line_item">
								<div class="item_title">
									<span class="line"></span>
									<span class="line_title">{{item.lineName}}</span>
								</div>
								<div class="item_intro">{{item.lineIntro}}</div>
								<div class="item_description">{{item.lineDescription}}</div>
								<i class="iconfont" :class="item.iconName ? item.iconName : ''"></i>
							</li>
						</div>
					</ul>
					<div class="production_line_img">
						<img ref="productionLineImg" v-for="(item,index) in productionLine.productionLineImg" :key="index" :src="differentLineImg(item.lineImgName)" alt="" class="irita_image">
					</div>
				</div>
			</div>
		</div>
		<!-- 开放社区 -->
		<div class="home_opencommunity_content">
			<div class="opencommunity_content">
				<p class="title">{{openCommunity.text}}</p>
				<ul class="opencommunity_list">
					<li class="open_item" v-for="(item,index) in openCommunity.list" :key="index">
						<div class="item_wrapper" @mouseenter="hoverOpenFn(index)" @mouseleave="leaveOpenFn(index)" ref="openWrapper" :style="differentOpenImg(item.blogImgName)">
							<div class="line"></div>
							<p class="title">{{item.text}}</p>
							<div class="more">
								<a v-show="item.target === '_blank'" :href="item.link" :target="item.target" class="more_content"
									>
									<span class="more_text">了解更多</span>
									<i class="iconfont icon-turnto"></i>
								</a>
								<router-link v-show="item.target === '_self'" @click.native="commitFn(item.routingLevel)" :to="item.link" replace class="more_content"
								>
									<span class="more_text">了解更多</span>
									<i class="iconfont icon-turnto"></i>
								</router-link>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'NewHome',
	computed:{
		// 产品线定位高度
		productionLineTop(){
			return function(index){
				return `top: ${(11.2 * index)}rem; left: 0;`;
			}
		},
		homeContent(){
			return this.$frontmatter.homeContent;
		},
		iritaDescription(){
			return this.$frontmatter.iritaDescription;
		},
		// 产品架构
		productContent(){
			return this.$frontmatter.productContent;
		},
		// 核心技术优势
		advantageContent(){
			return this.$frontmatter.advantageContent;
		},
		differentAdvantageImg(){
			return function(imgName){
				return `/home/advantage/${imgName}`;
			}
		},
		// 循环显示不同图片
		differentLineImg(){
			return function(imgName){
				return `/productionline/${imgName}.png`;
			}
		},
		// 产品线
		productionLine(){
			return this.$frontmatter.productionLine;
		},
		openCommunity(){
			return this.$frontmatter.openCommunity;
		},
		differentOpenImg(){
			return function(imgName){
				return `background:url(/home/opencommunity/${imgName}.png) no-repeat center center;background-size: cover;`;
			}
		},
	},
	methods:{
		hoverFn(id){
			this.$refs.productionLineImg[id].src = this.differentLineImg(this.productionLine.productionLineImg[id].lineImgHighlightName);
		},
		leaveFn(id){
			this.$refs.productionLineImg[id].src = this.differentLineImg(this.productionLine.productionLineImg[id].lineImgName);
		},
		commitFn(value){
			this.$store.commit('currentIndex',value);
		},
		// 开放社区
		hoverOpenFn(index){
			this.$refs.openWrapper[index].style = this.differentOpenImg(this.openCommunity.list[index].blogImgHighlightName);
		},
		leaveOpenFn(index){
			this.$refs.openWrapper[index].style = this.differentOpenImg(this.openCommunity.list[index].blogImgName);
		},
		
	}
}
</script>

<style lang="stylus">
@import url('../../public/iconfont/iconfont.css');
.home_content_wrapper
	width 100%
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
					margin-right 2.4rem
					padding-left 0.4rem
					height 3.2rem
					border 0.1rem solid $highlightDetailColor
					border-radius 1.6rem
					.iconfont
						display flex
						justify-content center
						width 2.4rem
						height 2.4rem
						line-height 2.4rem
						color $whiteColor
						border-radius 50%
						background $highlightDetailColor
						vertical-align middle
					.link_type
						margin 0 0.8rem
						height 2.2rem
						line-height 2.4rem
						font-size $fontSize16
						font-family PingFangSC-Medium, PingFang SC
						font-weight $fontWeight500
						color $blackColor
	.home_irita_what_content
		width 100%
		min-height 50.7rem
		.irita_what_content
			display flex
			justify-content center
			align-items center
			margin 0 auto
			padding 8rem 4.8rem 8rem 6.6rem
			max-width $contentWidth
			.irita_image_1
				margin-right 10rem
				max-width 33.8rem
				height 34.7rem
				vertical-align middle
			.irita_description
				.title
					height 2.8rem
					line-height 2.8rem
					font-size $fontSize28
					font-family PingFangSC-Semibold, PingFang SC
					font-weight $fontWeight600
					color: $blackColor
				.characteristic
					display flex
					flex-wrap wrap
					margin-top 4.8rem
					margin-bottom 2rem
					max-width 63.2rem
					min-height 2.4rem
					.characteristic_item
						box-sizing border-box
						margin-right 8.8rem
						margin-bottom 1.6rem
						padding-left 0.8rem
						min-height 2.4rem
						line-height 2.4rem
						font-size $fontSize20
						font-family PingFangSC-Semibold, PingFang SC
						font-weight $fontWeight600
						color $blackColor
						border-left 0.4rem solid $highlightDetailColor
						&:nth-of-type(4n)
							margin-right 0
				.description_article
					width 63.2rem
					// min-height 19.6rem
					line-height 2.8rem
					font-size $fontSize14
					font-family PingFangSC-Medium, PingFang SC
					font-weight $fontWeight500
					color $blackColorOpacity1
	.home_product_content
		width 100%
		height 87.8rem
		background $bgColor
		.product_content
			box-sizing border-box
			margin 0 auto
			padding 8rem 6.3rem 8rem 6.1rem
			max-width $contentWidth
			.product_title
				margin-bottom 3.8rem
				height 2.8rem
				line-height 2.8rem
				font-size $fontSize28
				font-family PingFangSC-Semibold, PingFang SC
				font-weigth $fontWeight600
				color $blackColor
			.product_img
				display inline-block
				// width 107.8rem
				height 65.2rem
	.home_advantage_content
		width 100%
		min-height 98rem
		.advantage_content_wrapper
			margin 0 auto
			padding 8rem 0
			max-width $contentWidth
			min-height 82rem
			.advantage_content
				margin 0 auto
				max-width 95.2rem
				min-height 82rem
				.advantage_title
					height 2.8rem
					line-height 2.8rem
					font-size $fontSize28
					font-family PingFangSC-Semibold, PingFang SC
					font-weigth $fontWeight600
					color $blackColor
				.advantage_list
					display flex
					flex-wrap wrap
					justify-content space-around
					align-items center
					margin 4.8rem auto
					max-width 95.2rem
					min-height 68rem
					background $bgColor
					.advantage_item_wrapper
						box-sizing border-box
						display flex
						flex-direction column
						justify-content center
						padding 0.8rem
						width 29.6rem
						min-height 31.6rem
						background $whiteColor
						border 0.1rem solid $borderLineColor
						border-radius 0.4rem
						.advantage_item
							margin 0 auto
							width 28rem
							min-height 30rem
							background url('/core_card_bg.png') no-repeat center center
							background-size cover
							transition all .3s linear
							&:hover
								transform scale(1.05)
							.advantage_img
								padding-top 0.8rem
								padding-left 1.6rem
								height 8rem
								vertical-align middle
							.advantage_title
								padding 1.6rem 0 1.6rem 1.6rem
								height 2.4rem
								line-height 2.4rem
								font-size $fontSize16
								font-family PingFangSC-Semibold, PingFang SC
								font-weight $fontWeight600
								color $blackColor
							.description
								padding 0 2.8rem 0 1.6rem
								padding-right 2.8rem
								width 23.6rem
								line-height 2.8rem
								font-size $fontSize14
								font-family PingFangSC-Medium, PingFang SC
								font-weight $fontWeight500
								color $blackColorOpacity
				.more
					max-width 95.2rem
					height 1.6rem
					line-height 1.6rem
					text-align center
					.more_content
						color $highlightDetailColor
						.more_text
							margin-right 0.8rem
							font-size $fontSize16
							font-family PingFangSC-Regular, PingFang SC
							font-weight $fontWeight400
						.iconfont
							width 1.6rem
							height 1.6rem
	.home_productionline_content
		width 100%
		min-height 81.4rem
		background url('/irita_bg.png') no-repeat center center
		background-size cover
		.productionline_content
			box-sizing border-box
			margin 0 auto
			padding 8rem 0.1rem 8rem 8.8rem
			max-width $contentWidth
			min-height 81.4rem
			.text
				height 2.8rem
				line-height 2.8rem
				font-size $fontSize28
				font-family PingFangSC-Semibold, PingFang SC
				font-weight $fontWeight600
				color $blackColor
			.subtext
				margin 1.6rem 0 4.8rem
				height 1.4rem
				line-height 1.4rem
				font-size $fontSize14
				font-family PingFangSC-Medium, PingFang SC
				font-weight $fontWeight500
				color $blackColorOpacity
			.production_line_content
				display flex
				justify-content space-between
				height 56rem
				.production_line
					position relative
					width 48rem
					min-height 54.8rem
					.line_item_wrapper
						position absolute
						width 48rem
						.line_item
							position relative
							box-sizing border-box
							margin-bottom 1.2rem
							padding 2.6rem 0 2.6rem 1.6rem
							max-width 48rem
							min-height 10rem
							background $whiteColor
							border-radius 0.4rem
							&:hover
								top -2.2rem
								left -0.2rem
								background $highlightDetailColor
								box-shadow 0 0.2rem 0.7rem 0 #D2D0EF
								transform scale(1.1)
								transition all .3s linear
								z-index 2
								.item_title
									.line
										background $whiteColor
									.line_title
										color $whiteColor
										text-shadow 0 0.2rem 0.7rem #D2D0EF
								.item_intro
									font-family PingFangSC-Semibold, PingFang SC
									font-weight $fontWeight600
									color $whiteColor
								.item_description
									display block
								.iconfont
									display block
							.item_title
								display flex
								align-items center
								height 1.6rem
								line-height 1.6rem
								.line
									display inline-block
									margin-right 0.8rem
									width 0.8rem
									height 1.6rem
									line-height 1.6rem
									background $highlightDetailColor
								.line_title
									height 1.6rem
									line-height 1.6rem
									font-size $fontSize16
									font-family PingFangSC-Regular, PingFang SC
									font-weight $fontWeight400
									color $blackColorOpacity
							.item_intro
								margin-top 1.2rem
								height 2rem
								line-height 2rem
								font-size $fontSize20
								font-family PingFangSC-Regular, PingFang SC
								font-weight $fontWeight400
								color $blackColor
							.item_description
								display none
								margin-top 1.6rem
								margin-right 7.7rem
								max-width 32rem
								min-height 4.8rem
								line-height 2.4rem
								font-size $fontSize14
								font-family PingFangSC-Regular, PingFang SC
								font-weight $fontWeight400
								color $whiteColor
								text-shadow 0 0.2rem 0.7rem #D2D0EF
							.iconfont
								display none
								align-self flex-end
								position absolute
								right 0
								bottom -25%
								font-size $fontSize90
								color $whiteColorOpacity2
        .production_line_img
					position relative
					width 60.7rem
					height 51.6rem
					background url('/irita_image_core.png') no-repeat center center
					background-size cover
					.irita_image
						position absolute
						height 15rem
						&:nth-of-type(1)
							top 12rem
							left 2.5rem
						&:nth-of-type(2)
							top 17.1rem
							right 7.1rem
						&:nth-of-type(3)
							right 11.8rem
							bottom 3.2rem
						&:nth-of-type(4)
							top 7.2rem
							right 19.5rem
						&:nth-of-type(5)
							left 3.5rem
							bottom 1.5rem
	.home_opencommunity_content
		width 100%
		min-height 55.5rem
		.opencommunity_content
			box-sizing border-box
			margin 0 auto
			padding 8rem 20.4rem
			max-width $contentWidth
			min-height 55.5rem
			.title
				margin-bottom 4.7rem
				height 2.8rem
				line-height 2.8rem
				font-size $fontSize28
				font-family PingFangSC-Semibold, PingFang SC
				font-weight $fontWeight600
				color $blackColor
			.opencommunity_list
				display flex
				flex-wrap wrap
				justify-content space-between
				max-width 82.8rem
				min-height 32rem
				.open_item
					box-sizing border-box
					margin-bottom 1.6rem
					padding 0.8rem
					width 24rem
					height 32rem
					border 0.1rem solid $borderLineColor
					border-radius 0.4rem
					&:hover
						transform scale(1.05)
					.item_wrapper
						padding 1.6rem
						.line
							width 3.2rem
							height 0.2rem
							background $highlightDetailColor
						.title
							margin 0.8rem 0 23rem 0
							height 1.6rem
							line-height 1.6rem
							font-size $fontSize16
							font-family PingFangSC-Semibold, PingFang SC
							font-weight $fontWeight600
							color $blackColor
						.more
							height 1.6rem
							line-height 1.6rem
							text-align end
							.more_content
								color $highlightDetailColor
								.mote-text
									margin-right 0.6rem
@media (max-width: 1200px)
	.home_content_wrapper
		.home_irita_what_content
			.irita_what_content
				.irita_image_1
					display none
		.home_product_content
			.product_content
				.product_img
					height 58rem
		.home_productionline_content
			.productionline_content
				.production_line_content
					.production_line_img
						display none
// @media (max-width: 768px) 

</style>

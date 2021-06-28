<template>
  <div class="navigation_content_wrapper">
    <div class="navigation_content">
      <div class="navigation_content_left">
        <div class="navigation_img_content" @click="toHome()">
          <!-- <img class="logo" src="../../public/logo.svg" alt="" /> -->
        </div>
      </div>
      <ul class="navigation_content_right">
				<li class="navigation_list_item" v-for="(item,index) in navigationList" :key="index"
					@click="changeIndex(index)">
					<!-- <span class="navigation_item" v-show="index">{{item.text}}</span> -->
						<div :class="currentIndex === index ? 'line' : ''"></div>
						<a class="navigation_item" :class="currentIndex === index ? 'router_link_item' : ''" :href="item.link" target="_blank" rel="noopener noreferrer">{{item.text}}</a>
				</li>
			</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
	data(){
		return {
			navigation: [],
			currentIndex: 0
		}
	},
	created(){
			this.navigation = this.$site.themeConfig.nav;
	},
	computed:{
		navigationList(){
			return this.navigation;
		}
	},
	methods:{
		changeIndex(index){
			if(this.currentIndex !== index) {
				this.currentIndex = index;
				console.log(index,this.currentIndex)
			}
		}
	}
};
</script>

<style lang="stylus" scoped>
.navigation_content_wrapper
	position fixed
	top 0
	left 0
	width 100%
	height $navbarHeight
	background $whiteColor
	z-index 10
	.navigation_content
		display flex
		justify-content space-between
		align-items center
		margin 0 auto
		max-width $contentWidth
		height $navbarHeight
		background pink
		.navigation_content_left
			padding-left 0.8rem
			height $navbarHeight
			.navigation_img_content {
				display flex
				height 3.6rem 
			}
		.navigation_content_right
			display flex
			justify-content space-between
			margin 0
			padding 0
			padding-right 0.8rem
			height $navbarHeight
			list-style none
			font-size $fontSize16
			.navigation_list_item 
				position relative
				padding 2.1rem 3rem
				line-height 100%
				.line
					position absolute
					top 0
					left 50%
					transform translateX(-50%)
					width 11.2rem
					height 0.4rem
					background $highlightDetailColor
				.navigation_item
					height 2.2rem
					line-height 2.2rem
					font-family PingFangSC-Medium,PingFang SC
					font-weight $fontWeight500
					color $blackColor
				.router_link_item
					display flex
					flex-direction column
					align-items center
					height 2.2rem
					line-height 2.2rem
					font-family PingFangSC-Semibold,PingFang SC
					font-weight $fontWeight600
					color $highlightDetailColor
</style>
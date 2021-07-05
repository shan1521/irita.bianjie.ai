<template>
  <div class="footer_content_wrapper">
    <div class="footer_content_top">
      <div class="top_content">
				<div class="content">
					<div class="content_left">
						<div class="left_img">
							<img src="/irita_logo_white.png" alt="" class="img">
						</div>
						<p class="img_desc">支持下一代分布式商业系统的企业级联盟链产品线</p>
					</div>
					<div class="content_right">
						<div class="line"></div>
						<div class="contact">
							<span class="contact_title">联系我们</span>
							<span class="email">contact@bianjie.ai</span>
							<a class="official" href="https://www.bianjie.ai" target="_blank" rel="noopener noreferrer">www.bianjie.ai</a>
						</div>
						<div class="focus">
							<span class="focus_title">关注我们</span>
							<span class="qr_code">
								<img src="/qrcode.png" alt="" class="qr_code_img">
							</span>
							<span class="desc">微信公众号 边界智能</span>
						</div>
					</div>
				</div>
			</div>
    </div>
    <div class="footer_content_bottom">
      <div class="bottom_content">
        <span class="copyright_content">{{
          `版权所有©2016-${new Date().getFullYear()} 上海边界智能科技有限公司`
        }}</span>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028"
          target="_blank"
          rel="noreferrer noopener"
          >沪ICP备17020986号</a
        >
        <span class="police_content">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028"
            target="_blank"
            rel="noreferrer noopener"
            >沪公网安备31011502009028号</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="stylus" scoped>
.footer_content_wrapper
  margin-top 2rem
  width 100%
  height 37.4rem
  flex 0 0 37.4rem
  .footer_content_top
    width 100%
    height 31.4rem
    background $footerTopColor
		.top_content
			margin 0 auto
			padding 6rem 2.4rem
			max-width $footerTopContentWidth
			height 19.4rem
			.content
				display flex
				justify-content space-between
				margin 0 auto
				width 100%
				height 100%
				.content_left
					.left_img
						height 6rem
						.img
							height 6rem
					.img_desc
						margin-top 2.4rem
						height 2.4rem
						line-height 2.4rem
						font-size $fontSize16
						font-family PingFangSC-Medium, PingFang SC
						font-weight $fontWeight500
						color $whiteColorOpacity1
				.content_right
					display flex
					justify-content space-between
					.line
						width 0.1rem
						height 19.5rem
						background #515071
					.contact
						display flex
						flex-direction column
						margin 0 8rem
						.contact_title
							height 2.4rem
							line-height 2.4rem
							font-size $fontSize16
							font-family PingFangSC-Semibold, PingFang SC
							font-weight $fontWeight600
							color $whiteColor
						.email
							margin 2.4rem 0
							height 2.4rem
							line-height 2.4rem
							font-size $fontSize16
							font-family PingFangSC-Medium, PingFang SC
							font-weight $fontWeight500
							color $whiteColorOpacity
							&:hover
								color $whiteColor
								cursor pointer
						.official
							height 2.4rem
							line-height 2.4rem
							font-size $fontSize16
							font-family PingFangSC-Medium, PingFang SC
							font-weight $fontWeight500
							color $whiteColorOpacity
							&:hover
								color $whiteColor
					.focus
						display flex
						flex-direction column
						.focus_title
							height 2.4rem
							line-height 2.4rem
							font-size $fontSize16
							font-family PingFangSC-Semibold, PingFang SC
							font-weight $fontWeight600
							color $whiteColor
						.qr_code
							display flex
							justify-content center
							align-items center
							margin 2.4rem 0 0.8rem
							width 11.4rem
							height 11.4rem
							.qr_code_img
								width 11.4rem
								height 11.4rem
								vertical-align middle
						.desc
							height 2.4rem
							line-height 2.4rem
							font-size $fontSize12
							font-family PingFangSC-Medium, PingFang SC
							font-weight $fontWeight500
							color $whiteColorOpacity
  .footer_content_bottom
    width 100%
    height 6rem
    background $footerBottomColor
		font-size $fontSize14
		font-family PingFangSC-Medium, PingFang SC
		font-weight $fontWeight500
		.bottom_content
			display flex
			justify-content space-between
			align-items center
			margin 0 auto
			max-width $contentWidth
			height 6rem
			.copyright_content
				color $whiteColorOpacity
			a
				color $whiteColorOpacity
				cursor pointer
@media (max-width: 680px)
	.footer_content_wrapper
		.footer_content_bottom
			height 9rem
			line-height 3rem
			.bottom_content
				flex-direction column
</style>

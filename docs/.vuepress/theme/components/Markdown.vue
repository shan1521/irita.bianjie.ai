<template>
  <div class="article_content_wrapper" v-if="articleDetails">
    <h1 class="article_title" v-if="articleDetails.title">{{ articleDetails.title }}</h1>
    <div class="article_about">
      <div class="article_about_owner_container">
		<div v-if="articleDetails.icon" class="article_about_icon_wrap">
		<img :src="$withBase(articleDetails.icon)" class="article_about_icon">
		</div>
        <span v-if="articleDetails.owner" class="article_about_owner">
          {{ articleDetails.owner }}
        </span>
      </div>
      <span v-if="time" class="article_about_time">
        {{ time }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Markdown",
  data() {
    return {
      article: {},
    };
  },
  props: ['articleDetails'],
  computed:{
	  time(){
		  return this.articleDetails.time && this.articleDetails.time.split('/').join('-')
	  }
  },
};
</script>

<style lang="stylus">
.article_content_wrapper {
	margin-bottom: 26px;
	border-bottom: 1px solid #E8EBF5;
	.article_title {
		line-height: 26px;
		font-size: 24px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #000000;
	}
  	.article_about {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		margin-bottom: 15px;
		line-height: 16px;
		.article_about_owner_container {
			display: flex;
			align-items: center;
			.article_about_icon_wrap {
				margin-right: 8px;
				width: 16px;
				height: 16px;
				.article_about_icon {
					display: inline-block;
					width: 16px;
					height: 16px;
				}
			}
			.article_about_owner {
				height: 16px;
				font-size: 14px;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: rgba(0, 0, 0, 0.75);
				line-height: 16px;
			}
		}
		.article_about_time {
			height: 16px;
			line-height: 16px;
			font-size: 14px;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.64);
		}
  }
}
</style>
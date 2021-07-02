<template>
    <div class="community_container">
        <div class="community_top">
            <div class="community_top_wrap">
                <div class="community_top_left">
                    <i class="community_top_left_border"></i>
                    <span class="community_top_left_sub_title">
                        在这里, 了解 IRITA
                    </span>
                </div>
                <div class="community_top_right">
                    <img src="../assets/developer_top_img.png" alt=""
                         class="community_top_right_img">
                </div>

            </div>
        </div>
        <div class="community_bottom">
            <div class="community_bottom_wrap">
                <div class="community_bottom_tab_container">
                    <span class="community_bottom_tab" @click="handleTabClick(0)"
                          :class="activeTab === 0 ? 'active' : ''">
                        技术博客
                    </span>
                    <span class="community_bottom_tab" @click="handleTabClick(1)"
                          :class="activeTab === 1 ? 'active' : ''">
                        文章咨询
                    </span>
                </div>
                <div class="community_bottom_content_container" v-show="activeTab === 0" v-if="$frontmatter">
                    <div class="community_bottom_content_item"
                         @click="handleArticleClick(item)"
                         v-for="item in blogList">
                        <img :src="$withBase(item.src)" class="community_bottom_content_item_img">

                        <div class="community_bottom_content_item_time_container">
                            <span class="community_bottom_content_item_title">
                                {{ item.title }}
                            </span>
                            <div class="community_bottom_content_item_wrap">
                                <div class="community_bottom_content_item_owner_container">
                                    <img :src="$withBase(item.icon)" class="community_bottom_content_item_icon">
                                    <span class="community_bottom_content_item_owner">
                                    {{ item.owner }}
                                </span>
                                </div>
                                <span class="community_bottom_content_item_time">
                                {{ item.time }}
                            </span>
                            </div>

                        </div>
                        <span class="community_bottom_content_item_detail">
                            文章详情
                        </span>
                    </div>

                </div>
                <div class="community_bottom_content_article_container" v-show="activeTab === 1" v-if="$frontmatter">
                    <div class="community_bottom_content_article_item"
                         @click="handleArticleClick(item)"
                         v-for="(item, index) in articleList">
                        <div class="community_bottom_content_article_item_left">
                            <div class="community_bottom_content_article_item_left_top">
                                <span class="community_bottom_content_article_item_left_top_month">
                                    {{ item.month }}
                                </span>
                                <span class="community_bottom_content_article_item_left_top_date">
                                    {{ item.date }}
                                </span>

                            </div>
                            <span class="community_bottom_content_article_item_left_bottom">
                                {{ item.year }}
                            </span>
                        </div>
                        <div class="community_bottom_content_article_item_right">
                            <span class="community_bottom_content_article_item_right_title">
                                {{ item.title }}
                                <i class="community_bottom_content_article_item_right_tag" v-show="index === 0">
                                    new
                                </i>
                            </span>
                            <span class="community_bottom_content_article_item_right_content">
                                {{ item.content }}
                            </span>

                        </div>
                    </div>
                </div>
                <div class="community_pagination">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="6"
                        @current-change="handlePageClick"
                        :current-page="currentPage"
                        :total="total">
                    </el-pagination>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name : 'Community',
    data(){
        return {
            activeTab : 1,
            total:0,
            currentPage: 1,
        }
    },
    watch:{
        activeTab(){
            this.setTotal();
            this.currentPage = 1;
        }
    },
    computed:{
        blogList(){
            if(this.$frontmatter && this.$frontmatter.blogs && this.$frontmatter.blogs.length > 0 && this.activeTab === 0){
                let blogs = JSON.parse(JSON.stringify(this.$frontmatter.blogs))
                return blogs.splice((this.currentPage - 1) * 6, 6);
            }

        },
        articleList(){
            if(this.$frontmatter && this.$frontmatter.articles && this.$frontmatter.articles.length > 0 && this.activeTab === 1){
                let articles = JSON.parse(JSON.stringify(this.$frontmatter.articles))
                return articles.splice((this.currentPage - 1) * 6, 6);
            }

        }
    },
    mounted(){
        this.setTotal()
        console.log(this.$route);
    },
    methods : {
        handleTabClick(tab){
            this.activeTab = tab;
        },
        setTotal(){
            if(this.activeTab === 0 && this.$frontmatter.blogs.length >= 0){
                this.total = this.$frontmatter.blogs.length;
            }else if(this.activeTab === 1 && this.$frontmatter.articles.length >= 0){
                this.total = this.$frontmatter.articles.length;
            }
        },
        handleArticleClick(article){
            this.$router.push({
                path: article.router,
                query: {
                    article:encodeURIComponent(article)
                }
            })
        },
        handlePageClick(page){
            this.currentPage = page;
        }
    }
}
</script>

<style lang="stylus">
@import url('../../public/iconfont/iconfont.css');
@import '../styles/adaptation.styl';
.community_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    span{
        line-height:1;
    }

    .community_top {
        width: 100%;
        background url('../assets/devoloper_top_bg.png') no-repeat center / 100% 100%;
        display: flex;
        justify-content center;

        .community_top_wrap {
            display: flex;
            align-items center;

            .community_top_left {
                display: flex;
                flex-direction: column;
                align-items flex-start;

                .community_top_left_sub_title {
                    font-size: 24px;
                    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                    font-weight: 400;
                    color: #000000;
                    margin-bottom: 22px;
                }

                .community_top_left_border {
                    width: 64px;
                    height: 4px;
                    background #7065FF;
                    margin-bottom: 32px;
                }
            }

            .community_top_right {
                height: 100%;
                display: flex;
                align-items flex-end;

                .community_top_right_img {
                    width: 432px;
                    height: 294px;
                }
            }

        }
    }

    .community_bottom {
        display: flex;
        justify-content center;
        align-items flex-start;
        padding-top:48px;
        .community_bottom_wrap {
            display: flex;
            flex-direction: column;
            .community_bottom_tab_container {
                border-bottom: 2px solid #E8EBF5;
                display: flex;
                margin-bottom: 32px;

                .community_bottom_tab {
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #000000;
                    margin-right: 32px;
                    cursor: pointer;
                    border-bottom: 4px solid transparent;
                    padding-bottom: 8px;
                    opacity .4;
                    transition all .2s linear;
                }

                .active {
                    border-bottom: 4px solid #7065FF;
                    opacity 1;
                }
            }

            .community_bottom_content_container {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content space-between;

                .community_bottom_content_item {
                    height: 336px;
                    width: 320px;
                    background: #FFFFFF;
                    border-radius: 4px;
                    border: 1px solid #E8EBF5;
                    box-sizing border-box;
                    margin-bottom: 24px;
                    display: flex;
                    flex-direction column;
                    cursor: pointer;
                    transition: all .2s linear;

                    &:hover {
                        border-color: #7065FF;

                        .community_bottom_content_item_detail {
                            color: #ffffff;
                            background #7065FF;
                        }
                    }

                    .community_bottom_content_item_img {
                        width: 100%;
                        height: 200px;
                        flex: 0 0 200px;
                    }

                    .community_bottom_content_item_time_container {
                        flex: 1;
                        display: flex;
                        flex-direction column;
                        box-sizing border-box;
                        padding: 16px;
                        justify-content space-between;

                        .community_bottom_content_item_title {
                            font-size: 18px;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #000000;
                        }

                        .community_bottom_content_item_wrap {
                            display: flex;
                            justify-content space-between;
                            align-items center;

                            .community_bottom_content_item_owner_container {
                                display: flex;
                                align-items center;

                                .community_bottom_content_item_icon {
                                    width: 24px;
                                    height: 24px;
                                    margin-right: 4px;
                                }

                                .community_bottom_content_item_owner {
                                    font-size: 14px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #000000;
                                    opacity .4;
                                }
                            }

                            .community_bottom_content_item_time {
                                font-size: 14px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #000000;
                                opacity .4;
                            }
                        }

                    }

                    .community_bottom_content_item_detail {
                        height: 45px;
                        flex: 0 0 45px;
                        border-top: 1px solid #E8EBF5;
                        box-sizing: border-box;
                        display: flex;
                        justify-content center;
                        align-items center;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #7065FF;
                        transition: all .2s linear;
                    }
                }
            }

            .community_bottom_content_article_container {
                width: 100%;
                display: flex;
                flex-direction: column;
                .community_bottom_content_article_item{
                    height:131px;
                    border-bottom:1px solid #E8EBF5;
                    box-sizing border-box;
                    display:flex;
                    align-items center;
                    cursor:pointer;
                    &:hover{
                        .community_bottom_content_article_item_right_title{
                            color:#7065FF !important;
                        }
                    }
                    .community_bottom_content_article_item_left{
                        margin-right:24px;
                        display flex;
                        flex-direction column;
                        .community_bottom_content_article_item_left_top{
                            display flex;
                            flex-direction column;
                            width: 36px;
                            height: 42px;
                            border: 1px solid #7065FF;
                            justify-content center;
                            align-items center;
                            box-sizing border-box;
                            margin-bottom 2px;
                            .community_bottom_content_article_item_left_top_month{
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #000000;
                                margin-bottom 2px;
                            }
                            .community_bottom_content_article_item_left_top_date{
                                font-size: 20px;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #7065FF;
                                letter-spacing: 1px;
                            }

                        }
                        .community_bottom_content_article_item_left_bottom{
                            width: 36px;
                            height: 20px;
                            background: #4A4A7F;
                            display flex;
                            flex-direction column;
                            justify-content center;
                            align-items center;
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                        }
                    }
                    .community_bottom_content_article_item_right{
                        display flex;
                        flex-direction column;
                        .community_bottom_content_article_item_right_title{
                            display flex;
                            align-items center;
                            font-size: 20px;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                            color: #000000;
                            margin-bottom 12px;
                            .community_bottom_content_article_item_right_tag{
                                width: 60px;
                                height: 24px;
                                border-radius: 12px;
                                border: 1px solid #7065FF;
                                font-style:normal;
                                font-size: 16px;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #7065FF;
                                text-align center;
                                line-height:20px;
                                box-sizing border-box;
                                margin-left:8px;
                            }
                        }
                        .community_bottom_content_article_item_right_content{
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #000000;
                            line-height: 24px;
                            opacity .4;
                        }

                    }
                }
            }
            .community_pagination{
                width:100%;
                display:flex;
                justify-content center;
                margin-top:48px;
            }
        }


    }


    //pc
    @media screen and (min-width: $minPcWidth) {
        .community_top {
            height: 360px;

            .community_top_wrap {
                .community_top_left {
                    margin-right: 132px;
                }
            }
        }

        .community_bottom {
            //height: 963px;

            .community_bottom_wrap {
                display: flex;
                flex-direction: column;
                justify-content center;
                width: 1008px;
            }
        }
    }
    //pad
    @media screen and (max-width: $maxPadWidth) and (min-width: $minPadWidth) {

    }
    //mobile
    @media screen and (max-width: $maxMobileWidth) and (min-width: $minMobileWidth) {

    }

}

</style>

<template>
    <div class="home_content_wrapper">
        <!-- 顶部 -->
        <div class="home_top_content">
            <div class="top_content">
                <h1 class="top_content_title">{{ homeContent.title }}</h1>
                <p class="title_desc">{{ homeContent.subTitle }}</p>
                <div class="link_content">
                    <a :href="item.href"
                        class="link"
                        v-for="(item,index) in homeContent.homeLink"
                        :key="index"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i class="iconfont"
                            :class="item.icon ? item.icon : ''"></i>
                        <span class="link_type">{{ item.type }}</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- IRITA 介绍 -->
        <div class="home_irita_what_content">
            <div class="irita_what_content">
                <img src="/home/irita_image_1.png"
                    alt=""
                    class="irita_image_1">
                <div class="irita_description">
                    <p class="title">{{ iritaDescription.title }}</p>
                    <div class="characteristic">
                        <span class="characteristic_item"
                            v-for="(item,index) in iritaDescription.characteristic"
                            :key="index">{{ item.text }}</span>
                    </div>
                    <p class="description_article"
                        v-for="(item,index) in iritaDescription.descriptionArticle"
                        :key="index">{{ item.paragraph }}</p>
                </div>
            </div>
        </div>
        <!-- 企业级区块链底层平台 -->

        <div class="blockchain_container">
            <div class="blockchain_container_top_title">
                <div class="blockchain_container_top">{{blockchainPlatform.title}}</div>
                <div class="blockchain_container_center">
                    <div class="center_one">{{blockchainPlatform.itro1}}</div>
                    <div class="center_two">{{blockchainPlatform.itro2}}</div>
                </div>
            </div>
            <div class="blockchain_container_bottom">
                <div class="chain_img">
                    <img src="../assets/blockchain.png"
                        alt="">
                </div>
                <ul class="list">
                    <li class="list_item" v-for="(item,index) in blockchainPlatform.blockchainList"
                        :key="index">
                        <div class="item_title">{{item.blockchainTitle}}</div>
                        <div class="item_desc">{{item.description}}</div>
                    </li>
                </ul>

            </div>

        </div>

        <!-- 产品架构 -->
        <div class="home_product_content">
            <div class="product_content">
                <p class="product_title">{{ productContent.text }}</p>
                <div class="product_img">
                    <img src="/home/chanpinjiagou_image.png"
                        alt="">
                </div>
            </div>
        </div>
        <!-- IRITA 核心技术优势 -->
        <div class="home_advantage_content">
            <div class="advantage_content">
                <p class="advantage_title">{{ advantageContent.text }}</p>
                <ul class="advantage_list">
                    <li class="advantage_item_wrapper"
                        v-for="(item,index) in advantageContent.advantageList"
                        :key="index">
                        <div class="advantage_item"
                            ref="advantageItem">
                            <img :src="$withBase(differentAdvantageImg(item.img))"
                                alt=""
                                class="advantage_img">
                            <p class="advantage_title">{{ item.advantageTitle }}</p>
                            <p class="description"
                                v-for="(dItem,dIndex) in item.description"
                                :key="dIndex">
                                {{ dItem.paragraph }}</p>
                        </div>
                    </li>
                </ul>
                <div class="more">
                    <a class="more_content"
                        href="https://irita.bianjie.ai/docs/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span class="more_text">了解更多</span>
                        <i class="iconfont icon-turnto"></i>
                    </a>
                </div>
            </div>
        </div>
        <!-- IRITA 产品线 -->
        <div class="home_productionline_content">
            <div class="productionline_content">
                <p class="text">{{ productionLine.text }}</p>
                <p class="subtext">{{ productionLine.subText }}</p>
                <div class="production_line_content">
                    <ul class="production_line">
                        <div class="line_item_wrapper"
                            ref="lineItemWrapper"
                            :style="productionLineTop(index)"
                            @mouseenter="hoverFn(item.id)"
                            @mouseleave="leaveFn(item.id)"
                            v-for="(item,index) in productionLine.productionList"
                            :key="item.id">
                            <li class="line_item">
                                <div class="item_title">
                                    <span class="line"></span>
                                    <span class="line_title">{{ item.lineName }}</span>
                                </div>
                                <div class="item_intro">{{ item.lineIntro }}</div>
                                <div class="item_description">{{ item.lineDescription }}</div>
                                <i class="iconfont"
                                    :class="item.iconName ? item.iconName : ''"></i>
                            </li>
                        </div>
                    </ul>
                    <div class="production_line_img">
                        <img ref="productionLineImg"
                            v-for="(item,index) in productionLine.productionLineImg"
                            :key="index"
                            :src="differentLineImg(item.lineImgName)"
                            alt=""
                            class="irita_image">
                    </div>
                </div>
            </div>
        </div>
        <!-- 开放社区 -->
        <div class="home_opencommunity_content">
            <div class="opencommunity_content">
                <p class="title">{{ openCommunity.text }}</p>
                <ul class="opencommunity_list">
                    <li class="open_item"
                        v-for="(item,index) in openCommunity.list"
                        :key="index"
                        @mouseenter="hoverOpenFn(index)"
                        @mouseleave="leaveOpenFn(index)"
                        @click="hoverOpenFn(index)">
                        <div class="item_wrapper"
                            ref="openWrapper"
                            :style="differentOpenImg(item.blogImgName)">
                            <div class="line"></div>
                            <p class="title">{{ item.text }}</p>
                            <div class="more">
                                <a v-show="item.target === '_blank'"
                                    :href="item.link"
                                    :target="item.target"
                                    class="more_content">
                                    <span class="more_text">了解更多</span>
                                    <i class="iconfont icon-turnto"></i>
                                </a>
                                <router-link v-show="item.target === '_self'"
                                    @click.native="commitFn(item.routingLevel,index)"
                                    :to="item.link"
                                    replace
                                    class="more_content">
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
    name: "NewHome",
    computed: {
        // 产品线定位高度
        productionLineTop() {
            return function (index) {
                return `top: ${11.5 * index}rem; left: 0;`;
            };
        },
        homeContent() {
            return this.$frontmatter.homeContent;
        },
        iritaDescription() {
            return this.$frontmatter.iritaDescription;
        },
        // 企业级区块链底层技术平台
        blockchainPlatform() {
            return this.$frontmatter.blockchainPlatform;
        },

        // 产品架构
        productContent() {
            return this.$frontmatter.productContent;
        },
        // 核心技术优势
        advantageContent() {
            return this.$frontmatter.advantageContent;
        },
        differentAdvantageImg() {
            return function (imgName) {
                return `/home/advantage/${imgName}`;
            };
        },
        // 循环显示不同图片
        differentLineImg() {
            return function (imgName) {
                return `/productionline/${imgName}.png`;
            };
        },
        // 产品线
        productionLine() {
            return this.$frontmatter.productionLine;
        },
        openCommunity() {
            return this.$frontmatter.openCommunity;
        },
        differentOpenImg() {
            return function (imgName) {
                return `background:url(/home/opencommunity/${imgName}.png) no-repeat center / cover; transition: all .2s linear;`;
            };
        },
    },
    methods: {
        hoverFn(id) {
            this.$refs.productionLineImg[id].src = this.differentLineImg(
                this.productionLine.productionLineImg[id].lineImgHighlightName
            );
        },
        leaveFn(id) {
            this.$refs.productionLineImg[id].src = this.differentLineImg(
                this.productionLine.productionLineImg[id].lineImgName
            );
        },
        commitFn(value, index) {
            this.$store.commit("currentIndex", value);
            localStorage.setItem("currentIndex", value);
            this.$store.commit("activeTab", index);
            localStorage.setItem("activeTab", JSON.stringify(index));
        },
        // 开放社区
        hoverOpenFn(index) {
            this.$refs.openWrapper[index].style = this.differentOpenImg(
                this.openCommunity.list[index].blogImgHighlightName
            );
        },
        leaveOpenFn(index) {
            this.$refs.openWrapper[index].style = this.differentOpenImg(
                this.openCommunity.list[index].blogImgName
            );
        },
    },
    mounted() {
        this.$store.commit("currentIndex", 0);
        localStorage.setItem("currentIndex", "0");
    },
};
</script>

<style lang="stylus">
@import url('../../public/iconfont/iconfont.css');

.home_content_wrapper {
    background: $bgColor;
    width: 100%;

    .home_top_content {
        width: 100%;
        background: url('/home_banner.png') no-repeat center center;
        background-size: cover;

        @media (max-width: 768px) {
            background: url('/home_bg_768.png') no-repeat bottom -10rem right 0;
            background-size: cover;
        }

        @media (max-width: 700px) {
            background: url('/home_bg_768.png') no-repeat bottom -7rem right 0;
            background-size: cover;
        }

        @media (max-width: 660px) {
            background: url('/home_bg_768.png') no-repeat bottom -4rem right 0;
            background-size: cover;
        }

        @media (max-width: 625px) {
            background: url('/home_bg_768.png') no-repeat bottom -2rem right 0;
            background-size: cover;
        }

        @media (max-width: 600px) {
            min-height: 27.2rem;
            background: rgba(231, 240, 255, 1);
        }

        .top_content {
            box-sizing: border-box;
            padding: 10.7rem 0 17.3rem 8.1rem;
            margin: 0 auto;
            max-width: $contentWidth;

            @media (max-width: 768px) {
                padding: 8rem 4.8rem;
            }

            @media (max-width: 460px) {
                padding: 4.8rem 2.4rem;
            }

            @media (max-width: 375px) {
                text-align: center;
            }

            .top_content_title {
                height: 6.4rem;
                line-height: 6.4rem;
                font-size: $fontSize60;
                font-weight: $fontWeight400;
                letter-spacing: 0.5rem;
                color: $blackColor;

                @media (max-width: 375px) {
                    font-size: $fontSize48;
                }
            }

            .title_desc {
                margin-top: 2.4rem;
                margin-bottom: 4rem;
                line-height: 4rem;
                font-size: $fontSize24;
                font-weight: $fontWeight400;
                color: $blackColor;

                @media (max-width: 375px) {
                    font-size: $fontSize16;
                }
            }

            .link_content {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                height: 3.2rem;
                line-height: 3.2rem;

                @media (max-width: 375px) {
                    justify-content: center;
                }

                .link {
                    display: flex;
                    align-items: center;
                    margin-right: 2.4rem;
                    padding-left: 0.4rem;
                    height: 3.2rem;
                    border: 0.1rem solid $highlightDetailColor;
                    border-radius: 1.6rem;

                    @media (max-width: 375px) {
                        &:nth-of-type(2) {
                            margin-right: 0;
                        }
                    }

                    .iconfont {
                        display: flex;
                        justify-content: center;
                        width: 2.4rem;
                        height: 2.4rem;
                        line-height: 2.4rem;
                        color: $whiteColor;
                        border-radius: 50%;
                        background: $highlightDetailColor;
                        vertical-align: middle;
                    }

                    .link_type {
                        margin: 0 0.8rem;
                        height: 2.2rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight400;
                        color: $blackColor;
                    }
                }
            }
        }
    }

    .blockchain_container {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 8rem 4.8rem 8rem 6.6rem;
        max-width: $contentWidth;
        flex-direction: column;

        @media (max-width: 768px) {
            padding: 4.8rem;
            align-items: flex-start;
        }

        @media (max-width: 460px) {
            padding: 3.6rem 2.4rem;
        }

        @media (max-width: 375px) {
            padding: 3.6rem 2rem;
        }

        .blockchain_container_top_title {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 4.8rem;

            .blockchain_container_top {
                width: 100%;
                font-size: 2.8rem;
                margin-bottom: 2.4rem;
                font-weight: 600;
                color: #000000;
                line-height: 2.8rem;
            }

            .blockchain_container_center {
                width: 100%;
                font-size: 1.4rem;
                font-weight: 500;
                color: #000000;
                line-height: 2.8rem;
            }
        }

        .blockchain_container_bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            max-width: 108rem;
            @media (max-width: 1200px) {
                flex-direction: column;
            }

            .chain_img {
                width: 69.4rem;
                @media (max-width: 1200px) {
                    width: 100%;
                }
                img {
                    width: 100%;
                    vertical-align: middle;
                }
            }

            .list {
                margin-left: 3.6rem;
                max-width: 35rem;
                @media(max-width: 1200px) {
                    margin-top: 4rem;
                    margin-left: 0;
                    max-width: 100%;
                }
                .list_item {
                    margin-top: 2.4rem;
                    &:first-child {
                        margin-top: 0;
                    }
                    .item_title {
                        font-size: 2rem;
                        font-weight: 600;
                        color: #000000;
                        line-height: 2.4rem;
                    }

                    .item_desc {
                        margin-top: 1.6rem;
                        font-size: 1.4rem;
                        font-weight: 500;
                        color: rgba(0, 0, 0, 0.64);
                        line-height: 2.8rem;
                    }
                }
            }
        }
    }

    .home_irita_what_content {
        width: 100%;
        min-height: 50.7rem;
        background: #fff;

        .irita_what_content {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            padding: 8rem 4.8rem 8rem 6.6rem;
            max-width: $contentWidth;
            flex: 1;

            @media (max-width: 768px) {
                padding: 4.8rem;
            }

            @media (max-width: 460px) {
                padding: 3.6rem 2.4rem;
            }

            @media (max-width: 375px) {
                padding: 3.6rem 2rem;
            }

            .irita_image_1 {
                margin-right: 10rem;
                max-width: 33.8rem;
                height: 34.7rem;
                vertical-align: middle;

                @media (max-width: 960px) {
                    display: none;
                }
            }

            .irita_description {
                flex: 1;

                .title {
                    height: 2.8rem;
                    line-height: 2.8rem;
                    font-size: $fontSize28;
                    font-weight: $fontWeight600;
                    color: $blackColor;

                    @media (max-width: 768px) {
                        font-size: $fontSize24;
                    }

                    @media (max-width: 375px) {
                        font-size: $fontSize20;
                    }
                }

                .characteristic {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 4.8rem;
                    margin-bottom: 2rem;
                    max-width: 63.2rem;
                    min-height: 2.4rem;

                    @media (max-width: 768px) {
                        margin-top: 3.6rem;
                        margin-bottom: 3.6rem;
                    }

                    @media (max-width: 375px) {
                        margin-top: 2.4rem;
                        margin-bottom: 2.4rem;
                    }

                    .characteristic_item {
                        flex: 1;
                        box-sizing: border-box;
                        margin-bottom: 1.6rem;
                        padding-left: 0.8rem;
                        line-height: 2.4rem;
                        font-size: $fontSize20;
                        font-weight: $fontWeight600;
                        color: $blackColor;
                        border-left: 0.4rem solid $highlightDetailColor;

                        &:nth-of-type(4n) {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 375px) {
    .characteristic_item {
        padding-left: 0.4rem;
        font-size: $fontSize16 !important;
    }
}

.description_article {
    width: 100%;
    // min-height 19.6rem
    line-height: 2.8rem;
    font-size: $fontSize14;
    font-weight: $fontWeight400;
    color: $blackColorOpacity1;
}

.home_product_content {
    width: 100%;
    background: #fff;

    .product_content {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 6.3rem 8rem 6.1rem;
        max-width: $contentWidth;

        @media (max-width: 768px) {
            padding: 4.8rem;
        }

        @media (max-width: 460px) {
            padding: 3.6rem 2.4rem;
        }

        @media (max-width: 375px) {
            padding: 3.6rem 1.6rem;
        }

        .product_img {
            width: 100%;

            img {
                width: 100%;
                vertical-align: middle;
            }
        }

        .product_title {
            margin-bottom: 3.8rem;
            height: 2.8rem;
            line-height: 2.8rem;
            font-size: $fontSize28;
            font-weight: $fontWeight600;
            color: $blackColor;

            @media (max-width: 768px) {
                font-size: $fontSize24;
            }

            @media (max-width: 375px) {
                font-size: $fontSize20;
            }
        }
    }
}

.product_img, .home_advantage_content {
    width: 100%;

    .advantage_content {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 6.3rem 8rem 6.1rem;
        max-width: $contentWidth;
        min-height: 82rem;

        @media (max-width: 768px) {
            padding: 4.8rem;
        }

        @media (max-width: 460px) {
            padding: 3.6rem 2.4rem;
        }

        @media (max-width: 375px) {
            padding: 3.6rem 2rem;
        }

        .advantage_title {
            line-height: 2.8rem;
            font-size: $fontSize28;
            font-weight: $fontWeight600;
            color: $blackColor;

            @media (max-width: 768px) {
                font-size: $fontSize24;
            }

            @media (max-width: 375px) {
                font-size: $fontSize20;
            }
        }

        .advantage_list {
            box-sizing: border-box;
            display: -ms-grid;
            display: grid;
            grid-template-columns: repeat(3, 3fr);
            // -ms-grid-columns: 3fr auto 1fr;
            // -ms-grid-column: 3;
            justify-items: center;
            grid-row-gap: 2.4rem;
            margin: 4.8rem auto;
            padding: 2.4rem 4.8rem;
            // max-width 95.2rem
            min-height: 68rem;
            background: $bgColor;

            @media (max-width: 1200px) {
                padding: 1.6rem;
            }

            @media (max-width: 1100px) {
                grid-template-columns: repeat(2, 3fr);
            }

            @media (max-width: 767px) {
                grid-template-columns: repeat(1, 3fr);
            }

            @media (max-width: 460px) {
                margin: 2.4rem auto;
            }

            @media (max-width: 375px) {
                padding: 0.8rem;
            }

            .advantage_item_wrapper {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0.8rem;
                max-width: 29.6rem;
                min-height: 31.6rem;
                background: $whiteColor;
                border: 0.1rem solid $borderLineColor;
                border-radius: 0.4rem;

                @media (max-width: 375px) {
                    padding: 0;
                    max-width: 27.2rem;
                }

                .advantage_item {
                    margin: 0 auto;
                    width: 28rem;
                    min-height: 30rem;
                    background: url('/core_card_bg.png') no-repeat center / cover;
                    transition: all 0.3s linear;

                    @media (max-width: 375px) {
                        width: 25.6rem;
                    }

                    .advantage_img {
                        padding-top: 0.8rem;
                        padding-left: 1.6rem;
                        height: 8rem;
                        vertical-align: middle;
                    }

                    .advantage_title {
                        padding: 1.6rem 0 1.6rem 1.6rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: $blackColor;

                        @media (max-width: 375px) {
                            width: 22.4rem;
                        }
                    }

                    .description {
                        padding: 0 2.8rem 0 1.6rem;
                        width: 23.6rem;
                        line-height: 2.8rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: $blackColorOpacity;

                        @media (max-width: 375px) {
                            width: 22.4rem;
                        }
                    }
                }
            }
        }

        .more {
            // max-width 95.2rem
            height: 1.6rem;
            line-height: 1.6rem;
            text-align: center;

            .more_content {
                color: $highlightDetailColor;

                .more_text {
                    margin-right: 0.8rem;
                    font-size: $fontSize16;
                    font-weight: $fontWeight400;
                }

                .iconfont {
                    width: 1.6rem;
                    height: 1.6rem;
                }
            }
        }
    }
}

.home_productionline_content {
    box-sizing: border-box;
    width: 100%;
    min-height: 81.4rem;
    background: url('/irita_bg.png') no-repeat center / cover;

    @media (max-width: 768px) {
        padding: 4.8rem;
    }

    @media (max-width: 375px) {
        padding: 3.6rem 1.6rem;
    }

    .productionline_content {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 0.1rem 8rem 6.1rem;
        max-width: $contentWidth;
        min-height: 81.4rem;

        @media (max-width: 768px) {
            padding: 0;
            max-width: 64rem;
        }

        @media (max-width: 375px) {
            max-width: 100%;
        }

        .text {
            height: 2.8rem;
            line-height: 2.8rem;
            font-size: $fontSize28;
            font-weight: $fontWeight600;
            color: $blackColor;

            @media (max-width: 768px) {
                font-size: $fontSize24;
            }

            @media (max-width: 375px) {
                font-size: $fontSize20;
            }
        }

        .subtext {
            width: 100%;
            margin: 2.4rem 0 3.2rem;
            line-height: 2.4rem;
            font-size: $fontSize14;
            font-weight: $fontWeight400;
            color: $blackColorOpacity;

            @media (max-width: 1000px) {
                box-sizing: border-box;
                padding-right: 4.8rem;
            }

            @media (max-width: 460px) {
                box-sizing: border-box;
                padding-right: 2.4rem;
            }

            @media (max-width: 375px) {
                box-sizing: border-box;
                padding-right: 1.6rem;
            }
        }

        .production_line_content {
            display: flex;
            justify-content: space-between;
            height: 56rem;

            .production_line {
                position: relative;
                width: 48rem;
                min-height: 54.8rem;

                @media (max-width: 530px) {
                    width: 100%;
                }

                .line_item_wrapper {
                    position: absolute;
                    width: 48rem;

                    @media (max-width: 530px) {
                        width: 100%;
                    }

                    .line_item {
                        position: relative;
                        box-sizing: border-box;
                        margin-bottom: 1.2rem;
                        padding: 2.6rem 0 2.6rem 1.6rem;
                        max-width: 55rem;
                        min-height: 10rem;
                        background: $whiteColor;
                        border-radius: 0.4rem;

                        @media (max-width: 580px) {
                            max-width: 36rem;
                        }

                        @media (max-width: 420px) {
                            max-width: 28.8rem;
                        }

                        &:hover {
                            // margin-right:2rem;

                            width: 77rem;
                            top: -2.2rem;
                            left: -3.3rem;
                            background: $highlightDetailColor;
                            box-shadow: 0 0.2rem 0.7rem 0 #D2D0EF;
                            transform: scale(1.05);
                            transition: transform 0.3s linear;
                            z-index: 2;

                            .item_title {
                                .line {
                                    background: $whiteColor;
                                }

                                .line_title {
                                    color: $whiteColor;
                                }
                            }

                            .item_intro {
                                display: none;
                                font-weight: $fontWeight600;
                                color: $whiteColor;
                            }

                            .item_description {
                                display: block;
                            }

                            .iconfont {
                                display: block;

                                @media (max-width: 420px) {
                                    display: none;
                                }
                            }
                        }

                        .item_title {
                            display: flex;
                            align-items: center;
                            height: 1.6rem;
                            line-height: 1.6rem;

                            .line {
                                display: inline-block;
                                margin-right: 0.8rem;
                                width: 0.8rem;
                                height: 1.6rem;
                                line-height: 1.6rem;
                                background: $highlightDetailColor;
                            }

                            .line_title {
                                height: 1.6rem;
                                line-height: 1.6rem;
                                font-size: $fontSize16;
                                font-weight: $fontWeight400;
                                color: $blackColorOpacity;
                            }
                        }

                        .item_intro {
                            margin-top: 1.2rem;
                            height: 2rem;
                            line-height: 2rem;
                            font-size: $fontSize20;
                            font-weight: $fontWeight400;
                            color: $blackColor;
                        }

                        .item_description {
                            display: none;
                            margin-top: 1.6rem;
                            margin-right: 1.6rem;
                            max-width: 100%;
                            line-height: 2.4rem;
                            font-size: $fontSize14;
                            font-weight: $fontWeight400;
                            color: $whiteColor;

                            @media (max-width: 420px) {
                                margin-right: 1.6rem;
                            }
                        }

                        .iconfont {
                            display: none;
                            align-self: flex-end;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            font-size: $fontSize90;
                            color: $whiteColorOpacity2;
                        }
                    }
                }
            }
        }
    }
}

.production_line_img {
    position: relative;
    width: 60.7rem;
    height: 51.6rem;
    background: url('/irita_image_core.png') no-repeat center / cover;

    .irita_image {
        position: absolute;
        height: 15rem;

        &:nth-of-type(1) {
            top: 12rem;
            left: 2.5rem;
        }

        &:nth-of-type(2) {
            top: 16.3rem;
            right: 5rem;
        }

        &:nth-of-type(3) {
            right: 11.8rem;
            bottom: 3.2rem;
        }

        &:nth-of-type(4) {
            top: 6.5rem;
            right: 19rem;
        }

        &:nth-of-type(5) {
            left: 3.9rem;
            bottom: 1.9rem;
        }
    }
}

.home_opencommunity_content {
    width: 100%;
    min-height: 55.5rem;

    .opencommunity_content {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 8rem 6.3rem 10rem 6.1rem;
        max-width: $contentWidth;
        min-height: 55.5rem;

        @media (max-width: 768px) {
            padding: 3.6rem 4.8rem;
        }

        @media (max-width: 460px) {
            padding: 3.6rem 2.4rem;
        }

        @media (max-width: 375px) {
            padding: 3.6rem 1.6rem;
        }

        .title {
            margin-bottom: 4.7rem;
            height: 2.8rem;
            line-height: 2.8rem;
            font-size: $fontSize28;
            font-weight: $fontWeight600;
            color: $blackColor;

            @media (max-width: 768px) {
                margin-bottom: 3.6rem;
                font-size: $fontSize24;
            }

            @media (max-width: 375px) {
                margin-bottom: 2.4rem;
                font-size: $fontSize20;
            }
        }

        .opencommunity_list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 82.8rem;
            min-height: 32rem;
            margin: 0 auto;

            @media (max-width: 768px) {
                max-width: 67.2rem;
            }

            @media (max-width: 600px) {
                flex-direction: column;
                max-width: 24rem;
            }

            @media (max-width: 375px) {
                flex-direction: column;
                max-width: 24rem;
            }

            .open_item {
                box-sizing: border-box;
                margin-bottom: 1.6rem;
                padding: 0.8rem;
                flex: 1;
                margin-right: 5%;
                height: 32rem;
                border: 0.1rem solid $borderLineColor;
                border-radius: 0.4rem;

                @media (max-width: 900px) {
                    margin-right: 2%;
                }

                @media (max-width: 600px) {
                    margin-right: 0;
                    max-width: 21.6rem;
                }

                @media (max-width: 375px) {
                    max-width: 24rem;
                }

                &:hover {
                    transform: scale(1.05);
                    transition: all 0.2s linear;
                }

                &:last-child {
                    margin-right: 0;
                }

                .item_wrapper {
                    padding: 1.6rem;

                    &:hover {
                        transition: all 0.3s linear;
                    }

                    .line {
                        width: 3.2rem;
                        height: 0.2rem;
                        background: $highlightDetailColor;
                    }

                    .title {
                        margin: 0.8rem 0 23rem 0;
                        height: 1.6rem;
                        line-height: 1.6rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: $blackColor;
                    }

                    .more {
                        height: 1.6rem;
                        line-height: 1.6rem;
                        text-align: end;

                        .more_content {
                            color: $highlightDetailColor;

                            .more-text {
                                margin-right: 0.6rem;

                                @media (max-width: 768px) {
                                    font-size: $fontSize14;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .home_productionline_content {
        .productionline_content {
            .production_line_content {
                .production_line_img {
                    display: none;
                }
            }
        }
    }
}
</style>

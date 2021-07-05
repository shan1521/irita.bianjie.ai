<template>
    <div
        class="theme-container"
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <Navigation></Navigation>
        <div class="empty"></div>
        <div class="main_content_wrapper">
            <Home v-if="$page.frontmatter.home"></Home>
            <NewHome v-if="$page.frontmatter.isNewHome"></NewHome>
            <Developer v-if="$page.frontmatter.isDeveloper"></Developer>
            <Community v-if="$page.frontmatter.isCommunity"/>
            <div class="md_container" v-if="showMd">
                <div class="md_wrap">
                    <Content v-for="item in blogAndArticleList" :slot-key="item.slot" />
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import Navigation from "@theme/components/Navigation.vue";
import Footer from "@theme/components/Footer.vue";
import NewHome from "@theme/components/NewHome.vue";
import Developer from "../components/Developer";
import Community from "../components/Community";

export default {
    name : 'Layout',
    data(){
        return {
            isSidebarOpen : false,
            blogAndArticleList:[],
        }
    },
    components : {
        Home,
        Page,
        Sidebar,
        Navbar,
        Navigation,
        Footer,
        NewHome,
        Developer,
        Community,
    },
    watch:{
        frontmatter(frontmatter){
            if(frontmatter.isCommunity){
                this.setBlogAndArticleList(frontmatter)
            }
        },
        $route:{
            handler(val,oldval){
                console.log(val);//新路由信息
                console.log(oldval);//老路由信息
            },
            // 深度观察监听
            deep: true
        }
    },

    mounted(){
        this.$router.afterEach(() => {
            this.isSidebarOpen = false
            window.scrollTo(0, 0)
        })
        if(this.$page.frontmatter.isCommunity){
            this.setBlogAndArticleList(this.$page.frontmatter)
        }
        window.onhashchange = function (e) {
            console.log(e);
            console.log(e.newURL);
            console.log(e.oldURL);
        }
    },
    computed : {
        showMd(){
            return Object.keys(this.$page.frontmatter).length === 0;
        },
        frontmatter(){
           return this.$page.frontmatter
        },
        shouldShowNavbar(){
            const {themeConfig} = this.$site
            const {frontmatter} = this.$page
            if(
                frontmatter.navbar === false
                || themeConfig.navbar === false){
                return false
            }
            return (
                this.$title
                || themeConfig.logo
                || themeConfig.repo
                || themeConfig.nav
                || this.$themeLocaleConfig.nav
            )
        },

        shouldShowSidebar(){
            const {frontmatter} = this.$page
            return (
                !frontmatter.home
                && frontmatter.sidebar !== false
                && this.sidebarItems.length
            )
        },

        sidebarItems(){
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            )
        },

        pageClasses(){
            const userPageClass = this.$page.frontmatter.pageClass
            return [
                {
                    'no-navbar' : !this.shouldShowNavbar,
                    'sidebar-open' : this.isSidebarOpen,
                    'no-sidebar' : !this.shouldShowSidebar
                },
                userPageClass
            ]
        }
    },
    methods : {
        toggleSidebar(to){
            this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
            this.$emit('toggle-sidebar', this.isSidebarOpen)
        },
        setBlogAndArticleList(frontmatter){
            let articles = JSON.parse(JSON.stringify(frontmatter.articles));
            let blogs = JSON.parse(JSON.stringify(frontmatter.blogs));
            this.blogAndArticleList = [...articles, ...blogs];
        },
        // side swipe
        onTouchStart(e){
            this.touchStart = {
                x : e.changedTouches[0].clientX,
                y : e.changedTouches[0].clientY
            }
        },

        onTouchEnd(e){
            // const dx = e.changedTouches[0].clientX - this.touchStart.x
            // const dy = e.changedTouches[0].clientY - this.touchStart.y
            // if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
            //   if (dx > 0 && this.touchStart.x <= 80) {
            //     this.toggleSidebar(true)
            //   } else {
            //     this.toggleSidebar(false)
            //   }
            // }
        }
    }
}
</script>
<style lang="stylus">
@import '../styles/adaptation.styl';
.theme-container{
    display flex
    flex-direction column
    //padding-top $navbarHeight
    width 100%
    height 100%

    .main_content_wrapper{
        flex 1
        .md_container{
            //display:flex;
            .md_wrap{
                padding-top:60px;
            }

        }
    }
    .empty{
        width:0;
        height:6.3rem;
        flex:0 0 6.3rem;
    }
}



@media screen and (min-width: $minPcWidth) {
    .theme-container{
        .main_content_wrapper{

            display:flex;
            justify-content center;
            .md_container{
                width:960px;
                //display:flex;
                .md_wrap{

                }

            }
        }
    }

}
</style>

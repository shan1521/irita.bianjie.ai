<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    /> -->
    <Navigation></Navigation>
    <!-- <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    /> -->

    <!-- <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar> -->
    <div class="main_content_wrapper">
      <Home v-if="$page.frontmatter.home"></Home>

    </div>

    <!-- <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page> -->
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

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    Navigation,
    Footer
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
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

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
      window.scrollTo(0,0)
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
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
  .theme-container
    display flex
    flex-direction column
    padding-top $navbarHeight
    width 100%
    height 100%
    .main_content_wrapper
      flex 1
      background green
</style>
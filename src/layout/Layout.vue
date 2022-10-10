<template>
  <a-layout class="layout">
    <div class="layout-navbar">
      <NavBar />
    </div>
    <a-layout>
      <a-layout-sider class="layout-sider" theme="dark">Sider</a-layout-sider>
      <a-layout class="layout-content" :style="paddingStyle">
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <Footer></Footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const navbar = computed(() => appStore.navbar)
const navbarHeight = '60px'
const renderMenu = computed(() => appStore.menu)
const hideMenu = computed(() => appStore.hideMenu)
const menuWidth = computed(() => {
  return appStore.menuWidth
})

const paddingStyle = computed(() => {
  const paddingLeft =
    renderMenu.value && !hideMenu.value
      ? { paddingLeft: `${menuWidth.value}px` }
      : {}
  const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {}
  return { ...paddingLeft, ...paddingTop }
})
</script>

<style lang="less" scoped>
@nav-size-height: 60px;
.a-layout {
  height: 100%;
}

.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}

.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
}
.layout-content {
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
</style>

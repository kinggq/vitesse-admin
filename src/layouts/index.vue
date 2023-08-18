<script setup lang="ts">
import {
  Menu,
} from './components'

const collapsed = ref(false)
</script>

<template>
  <n-layout has-sider h-full>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
    >
      <div text="28px center" py-30px>
        Logo
      </div>
      <Menu :collapsed="collapsed" />
    </n-layout-sider>
    <div flex-1>
      <header flex="~" h-60px items-center justify-between border-b px-20px>
        <div @click="collapsed = !collapsed">
          <div v-if="!collapsed" i-ri:menu-fold-line />
          <div v-else i-ri:menu-unfold-line />
        </div>
        <TheFooter />
      </header>
      <RouterView />
    </div>
  </n-layout>
</template>

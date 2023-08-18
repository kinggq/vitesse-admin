<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { useRouteStore } from '~/store'

defineProps<{
  collapsed: boolean
}>()

const store = useRouteStore()
store.initStaticRoute()

function handleUpdateValue(key: string, item: MenuOption) {
}
</script>

<template>
  <n-menu :collapsed="collapsed" :options="store.menus" @update:value="handleUpdateValue" />
</template>

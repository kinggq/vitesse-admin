<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <main h-full text="gray-700 dark:gray-200">
    <n-config-provider h-full :theme="isDark ? darkTheme : undefined">
      <RouterView />
    </n-config-provider>
  </main>
</template>

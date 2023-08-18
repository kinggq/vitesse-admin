import { NIcon } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'

export function transfromRouteToMenu(routes: RouteRecordRaw[]) {
  return routes.map((route) => {
    return {
      label: route.meta?.title,
      key: route.path,
      icon: () => h(
        NIcon,
        null,
        {
          default: () => h('div', { class: route?.meta?.icon }),
        },
      ),
    }
  })
}

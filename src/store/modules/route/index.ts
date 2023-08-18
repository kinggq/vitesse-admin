import type { MenuOption } from 'naive-ui'
import routes from 'pages-generated'
import { defineStore } from 'pinia'
import { transfromRouteToMenu } from './helpers'

interface RouteState {
  menus: MenuOption[]
}

export const useRouteStore = defineStore('route-store', {
  state: () => <RouteState>({
    menus: [],
  }),
  actions: {
    initStaticRoute() {
      this.menus = transfromRouteToMenu(routes)
    },
  },
})

declare namespace AuthRoute {
  type RouteMeta = {
    title: string
    icon?: string
  }

  type Route = {
    meta: RouteMeta
  } & Omit<import('vue-router').RouteRecordRaw,  'redirect' | 'component' | 'children' | 'meta'>
}

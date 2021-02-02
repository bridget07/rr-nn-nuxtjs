import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75fb8b55 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _8e04d86c = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _66ed2dde = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _397ffede = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _f08024e4 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _6a2cb198 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _204a422b = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _75fb8b55,
    children: [{
      path: "",
      component: _8e04d86c,
      name: "/"
    }, {
      path: "/login",
      component: _66ed2dde,
      name: "login"
    }, {
      path: "/register",
      component: _66ed2dde,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _397ffede,
      name: "profile"
    }, {
      path: "/settings",
      component: _f08024e4,
      name: "settings"
    }, {
      path: "/editor",
      component: _6a2cb198,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _204a422b,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}

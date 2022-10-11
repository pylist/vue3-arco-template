import { defineStore } from 'pinia'
import { AppState } from './types'

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    navbar: true,
    menu: true,
    menuWidth: 220,
    hideMenu: false
  }),
  actions: {}
})

import { defineStore } from 'pinia'

interface AppState {
  navbar: boolean
  menu: boolean
  menuWidth: number
  menuCollapse: boolean
  hideMenu: boolean
}

const useAppStore = defineStore('app', {
  state: (): AppState => ({
    navbar: true,
    menu: true,
    menuCollapse: false,
    menuWidth: 220,
    hideMenu: false
  }),
  actions: {
    updateSettings(partial: Partial<AppState>) {
      this.$patch(partial)
    }
  }
})

export default useAppStore

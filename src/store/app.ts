import { defineStore, storeToRefs } from "pinia";
import { AppState } from "./types";

export const userAppStore = defineStore('app', {
  state: ():AppState  => ({
    count: 0
  }),
  actions: {
    increment() {
      this.$patch({
        count: this.count+1.
      })
    },
  }
})
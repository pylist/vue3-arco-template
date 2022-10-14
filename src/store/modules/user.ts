import { defineStore } from 'pinia'
import { GetStorage } from '@/utils/index'

interface UserState {
  token?: string
}

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '1111'
  }),
  actions: {
    getToken(): string {
      return this.token || GetStorage('token')
    }
  }
})

export default useUserStore

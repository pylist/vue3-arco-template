import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入组件
    Components({
      resolvers: [
        ArcoResolver()
      ]
    })
  ],
  // 设置@路径
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})

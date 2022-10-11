<template>
  <div class="login-form">
    <div class="login-form-title">登录</div>
    <a-form :model="userInfo">
      <a-form-item field="username" hide-label>
        <a-input v-model="userInfo.username">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item field="password" hide-label>
        <a-input-password v-model="userInfo.password">
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <div class="login-form-password-reset">
        <a-link>忘记密码</a-link>
      </div>
      <a-button type="primary">登录</a-button>
      <a-button type="text" class="login-form-register-btn">注册账号</a-button>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { IconUser, IconLock } from '@arco-design/web-vue/es/icon'

import { reactive } from 'vue'

const userInfo = reactive({
  username: '',
  password: ''
})
</script>

<style lang="less" scoped>
.login-form {
  width: 320px;
  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 20px;
  }
  &-register-btn {
    color: var(--color-text-3) !important;
  }
  &-password-reset {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 10px;
  }
}
</style>

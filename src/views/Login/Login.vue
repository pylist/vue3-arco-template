<template>
  <div class="login">
    <div class="form">
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from './components/LoginForm.vue'
</script>

<style scoped lang="less">
.login {
  display: flex;
  align-items: center;
  height: 100vh;
  .form {
    margin: 0 auto;
  }
}
</style>

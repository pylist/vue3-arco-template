<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { userAppStore } from '@/store/app'
import { computed } from '@vue/reactivity';

defineProps<{ msg: string }>()

const appStore = userAppStore()

const count = computed(() => appStore.count)

</script>

<template>
  <h1>{{ msg }}</h1>

  <a-button type="primary" @click="appStore.increment()">count is: {{ count }}</a-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

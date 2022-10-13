<template>
  <div class="navbar">
    <div class="left">
      <div>
        <a-typography-title
          :style="{ margin: 0, fontSize: '18px' }"
          :heading="5"
        >
          管理平台
        </a-typography-title>
      </div>
    </div>
    <div class="right">
      <div>
        <a-popover trigger="click">
          <a-badge :count="5" dot>
            <a-button class="nav-btn" type="outline" shape="circle">
              <IconNotification />
            </a-button>
          </a-badge>
          <template #content>
            <MessageNotice></MessageNotice>
          </template>
        </a-popover>
      </div>
      <div>
        <a-dropdown trigger="click">
          <a-avatar :size="32" style="cursor: pointer">Valn</a-avatar>
          <template #content>
            <a-doption>
              <a-space>
                <icon-tag />
                <span> 用户角色 </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space>
                <icon-user />
                <span> 用户中心 </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space>
                <icon-settings />
                <span> 用户设置 </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space>
                <icon-export />
                <span> 退出登录 </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  IconNotification,
  IconTag,
  IconUser,
  IconSettings,
  IconExport
} from '@arco-design/web-vue/es/icon'
import MessageNotice from '@/components/MessageNotice.vue'
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  div {
    margin: 0 10px;
  }
  .left {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .right {
    display: flex;
    margin-right: 20px;
    align-items: center;
  }
}

.nav-btn {
  border-color: rgb(var(--gray-2));
  color: rgb(var(--gray-8));
  font-size: 16px;
}
</style>

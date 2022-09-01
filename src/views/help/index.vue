<template>
  <a-layout class="page-help" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <!-- common -->
        <a-sub-menu key="common">
          <template #title>
            <span>
              <fire-outlined />
              <span>公用示例</span>
            </span>
          </template>
          <a-menu-item v-for="item in example.common" :key="item.key">{{
            item.name
          }}</a-menu-item>
        </a-sub-menu>
        <!-- private -->
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 24px;">
      <component :is="activeExample" />
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { FireOutlined } from '@ant-design/icons-vue';
import exampleComps from './example';

const collapsed = ref(false);
const openKeys = ref(['common']);
const selectedKeys = ref(['Playground']);
const example = ref({
  common: [
    {
      key: 'Playground',
      name: 'Playground'
    }
  ]
});

// computed
const activeExample = computed(() => {
  return exampleComps[selectedKeys.value[0]];
});
</script>

<style scoped lang="less">
.page-help .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>

<script setup>
// import { useSlots } from 'vue';

defineProps({
  msg: {
    type: String
  }
});

function getValue() {
  return 'test ref';
}

// 抛出去，ref可以使用 [git]
defineExpose({
  getValue
});
</script>

<template>
  <div class="greetings">
    哈哈哈-hellow-world
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.greetings {
  padding: 32px;
}
</style>

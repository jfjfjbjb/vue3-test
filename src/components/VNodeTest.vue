<script lang='jsx'>
export default {
  data() {
    return {
      greeting: '单个组件jsx'
    }
  },
  methods: {
    getJSX(h) {
      return <div>jsx部分</div>
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <VNode :node="getJSX" />
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>

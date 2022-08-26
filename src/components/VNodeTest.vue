<script lang='jsx'>
export default {
  // setup(props, context) {
  //   console.log(props, context)
  // },
  data() {
    // this.$message.error('data')
    return {
      greeting: '单个组件jsx',
      filterTest: 'mmmmmm'
    }
  },
  methods: {
    getJSX(h) {
      return <div>jsx部分</div>
    },
    tempFunc(val) {
      return val + '-dfkdjfkdjkf'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <VNode :node="getJSX" />
  <!-- <div>{{ tempFunc(filterTest) }}</div> -->
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>

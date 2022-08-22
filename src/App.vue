<script lang="jsx" setup>
import { reactive, ref, computed, h, getCurrentInstance, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import VNode from './components/VNode.jsx'
import VNodeTest from './components/VNodeTest.vue'
import { useCounterStore } from './stores/counter';
import config from './components/config.jsx';
const uc = useCounterStore();
const { proxy } = getCurrentInstance();
const self = {};

// console.log(this, proxy);
// refs
const state = reactive({ count: 0 });
const jsxConfig = reactive(config(self));

// computed
const testStoreCounter = computed(() => {
  return uc.counter;
})

// life circle
onMounted(() => {
  console.log(proxy, uc.counter);
})

// methods
function onTestPlus() {
  uc.increment();
}
function getJSX(h) {
  return <div>本文件获取jsx</div>
}
function tempFunc() {
  return '模板方法'
}

self.state = state;
self.tempFunc = tempFunc;
// const expose = {
//   state
// }
// defineExpose
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="@/assets/M.png" width="125" height="125" />
    <img alt="Vue logo" class="logo" src="@/assets/oceanbase.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld ref="hd" msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div>
    {{ tempFunc() }}
    <VNodeTest ref="vt" />
    <VNode :node="getJSX" />
    <VNode :node="jsxConfig.getJSX" />
    <div class="color-purple">test {{ testStoreCounter }}</div>
    <button class="color-green" @click="onTestPlus">添加+</button>
  </div>

  <RouterView />
</template>

<style scoped lang="less">
@color: purple;

.color-purple {
  color: @color;
  .font-bold();
}

.color-green {
  color: @color-green;
}
</style>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

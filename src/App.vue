<script lang="jsx" setup>
import { reactive, ref, computed, h, getCurrentInstance, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import IconCommunity from './components/icons/IconCommunity.vue';
import Input from '@/components/Input/index.vue';
// import VNode from './components/VNode.jsx'
import VNodeTest from './components/VNodeTest.vue';
import { useCounterStore } from './stores/counter';
import config from './components/config.jsx';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
const uc = useCounterStore();
const { proxy } = getCurrentInstance();
const self = {};

// console.log(this, proxy);
// refs
const state = reactive({ count: 0 });
const jsxConfig = reactive(config(self));
const locale = reactive(zhCN);
const date = ref();
const year = ref();
const inputAttrs = ref({});
const inputValue = ref();

// computed
const testStoreCounter = computed(() => {
  return uc.counter;
});

// life circle
onMounted(() => {
  console.log(proxy, uc.counter);
});

// methods
function onTestPlus() {
  uc.increment();
}
function onCompTest() {
  inputAttrs.value.placeholder = '时刻提防' + Math.random();
}
function getJSX(h) {
  return <div>本文件获取jsx</div>;
}
function tempFunc() {
  return '模板方法';
}
function logDate(e) {
  $message.success(date.value);
  console.log(e, date.value, year.value, 'date log');
}

self.state = state;
self.tempFunc = tempFunc;

// const expose = {
//   state
// }
// defineExpose
</script>

<template>
  <a-config-provider :locale="locale">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/M.png"
        width="125"
        height="125"
      />
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/oceanbase.svg"
        width="125"
        height="125"
      />
    </header>

    <div>
      <HelloWorld>456454546</HelloWorld>
    </div>

    <div>
      <IconCommunity />
      {{ tempFunc() }}
      <VNodeTest ref="vt" />
      <VNode :node="getJSX" />
      <VNode :node="jsxConfig.getJSX" />
      <div class="color-purple">test {{ testStoreCounter }}</div>
      <button class="color-green" @click="onTestPlus">添加+</button>
      <a-divider />
      <a-button @click="onCompTest">hello</a-button>
      {{ date }}
      <a-date-picker
        v-model:value="date"
        valueFormat="YYYY-MM-DD"
        @change="logDate"
      />
      <a-date-picker v-model:value="year" picker="year" @change="logDate" />
      <Input
        style="width: 200px"
        v-model="inputValue"
        placeholder="rrrrr"
        v-bind="inputAttrs"
      />
      <span>{{ inputValue }}</span>
    </div>

    <RouterView />
  </a-config-provider>
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

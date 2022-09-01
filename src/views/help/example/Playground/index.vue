<template>
  <div class="example-playground">
    <a-card title="图片使用">
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
        src="@/assets/oceanbase.svg?url"
        width="125"
        height="125"
      />
      <OceanbaseIcon class="img" width="125" height="125" />
      <div class="bg-img"></div>
      <!-- suggest -->
      <div class="suggest">
        <div>1、普通图片（png,jpg,...），小图片build为base64</div>
        <div>2、svg?url 【svg图片使用】</div>
        <div>3、svg?component 【svg组件使用】</div>
        <div>4、背景图使用</div>
      </div>
    </a-card>

    <a-card title="jsx使用">
      <VNode :node="getJSX" />
      <VNode :node="cfg.getJSX" />
    </a-card>

    <a-card title="pinia和ref测试">
      <div class="color-purple">
        <div>testPinia: {{ testStoreCounter }}</div>
        <div>test: {{ state.count }}</div>
        <button class="color-green" @click="onTestPlus">添加+</button>
      </div>
    </a-card>

    <a-card title="表单项初测">
      <div>
        {{ date }}
        <a-date-picker
          v-model:value="date"
          valueFormat="YYYY-MM-DD"
          @change="logDate"
        />
        <a-date-picker v-model:value="year" picker="year" @change="logDate" />
      </div>
      <a-divider />
      <div>
        <a-button @click="onCompTest">修改placeholder</a-button>
        <custom-input
          style="width: 200px"
          v-model="inputValue"
          placeholder="rrrrr"
          v-bind="inputAttrs"
        />
        <span>{{ inputValue }}</span>
      </div>
    </a-card>
  </div>
</template>

<script lang="jsx" setup>
import { apiGet, apiPost, apiText } from '@/api/test';
import { reactive, ref, computed, getCurrentInstance, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
import OceanbaseIcon from '@/assets/oceanbase.svg?component';
import config from './config.jsx';

const { proxy } = getCurrentInstance();
const uc = useCounterStore();
const self = {};

// refs
const state = reactive({ count: 0 });
const cfg = reactive(config(self));
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
  // get请求
  apiGet({ a: 111 })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  // post请求
  apiPost({ b: 222 })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  // post请求
  apiText({ c: 333 })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  // 监听事件
  window.$bus.on('event-test', (data) => {
    console.log('evt: ', data);
  });
});

// methods
function getJSX(h) {
  return (
    <div>
      1、本文件获取 <b style='color: blue;'>jsx</b>
    </div>
  );
}
function onTestPlus() {
  uc.increment();
  state.count += 1;
  window.$bus.emit('event-test', state.count);
}
function onCompTest() {
  inputAttrs.value.placeholder = '时刻提防' + Math.random();
}
function logDate(e) {
  window.$message.success(date.value);
  console.log(e, date.value, year.value, 'date log');
}

self.state = state;

// const expose = {
//   state
// }
// defineExpose
</script>

<style scoped lang="less">
@color: purple;

.ant-card {
  margin-bottom: 1rem;
}

.color-purple {
  color: @color;
  .font-bold();
  font-size: @font-size-lg;
}

.color-green {
  color: @color-green;
}

.bg-img {
  width: 125px;
  height: 125px;
  display: inline-block;
  background-image: url('@/assets/oceanbase.svg');
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
}
</style>

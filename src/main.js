import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import _ from 'lodash';
import VNode from './components/VNode';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import mitt from 'mitt';

// import './assets/main.css'
// import './assets/style/index.css'
// import 'ant-design-vue/dist/antd.css';
import './assets/style/index.less';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(Antd)
app.config.globalProperties.$message = message;
window.$message = message;
window._ = _;
window.$bus = mitt();
// message.info('This is a normal message');

app.component('VNode', VNode);

app.mount('#app');


import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';
import router from './router';
import store from './Store/store';


const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd).mount('#app');


// import { createApp } from 'vue';

// import { Button, message } from 'ant-design-vue';
// import App from './App';
// import 'ant-design-vue/dist/reset.css';

// const app = createApp(App);

// /* Automatically register components under Button, such as Button.Group */
// app.use(Button).mount('#app');

// app.config.globalProperties.$message = message;
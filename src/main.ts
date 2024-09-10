import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router/index.ts';
import '@/global/style/main.less';

const app = createApp(App);
setupRouter(app);
app.mount('#app');

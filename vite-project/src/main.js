import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from "./router/index.js"; 
import App from './App.vue'

createApp(App).use(router).use(createPinia()).mount('#app')

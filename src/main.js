/***
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
***/

import { createApp } from 'vue'
import App from './App.vue'
import { store } from "./store";
import tunnel from "./tunnel";

import './index.css'
import './portal.css'

import router from "./router/sections";


const app = createApp(App)
app.use(router).use(store).use(tunnel)
app.mount('#app')


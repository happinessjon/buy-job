import { createApp } from 'vue'
import 'virtual:windi.css'
import App from './App.vue'
import "./main.scss"
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount('#app');
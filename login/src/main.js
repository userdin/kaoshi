import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局样式
import '@/assets/styles/index.scss' 
import '@/assets/styles/ruoyi.scss'

Vue.use(ElementUI);  
Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
    require('./mock/mock')
  }

let app=createApp(App)
app.config.globalProperties.cui_fn=()=>{
    console.log('======');
}
app.use(ElementPlus)
createApp(App).use(store).use(router).mount("#app");

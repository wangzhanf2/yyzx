import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//导入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(store).use(router).use(ElementPlus).mount('#app')
//链式编程，  函数或者方法返回值是this或者对象，可以继续调用方法

//将框架内容作为   组件   提供

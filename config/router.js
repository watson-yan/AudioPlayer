import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index/index.vue'
import Button from '../views/demo/button.vue'
import Span from '../views/demo/span.vue'
import Table from '../views/demo/table.vue'
import Form from '../views/demo/form.vue'
import Popup from '../views/demo/popup.vue'
import Loading from '../views/demo/loading.vue'
import Select from '../views/demo/select.vue'

const routes = [
    { path: '/', name: '主页', component: Index },
    { path: '/button', name: '按钮', component: Button },
    { path: '/span', name: '标签', component: Span },
    { path: '/table', name: '表格', component: Table },
    { path: '/form', name: '表单', component: Form },
    { path: '/popup', name: '弹出框', component: Popup },
    { path: '/loading', name: '加载动画', component: Loading },
    { path: '/select', name: '下拉框', component: Select }
]

Vue.use(VueRouter)
const routers = new VueRouter({
    mode: 'history',
    routes
})

export default routers

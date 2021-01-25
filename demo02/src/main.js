// 导入Vue
import Vue from 'vue'

// 导入APP组件
import App from './App.vue'

// 创建vue根实例
new Vue({
    // 挂载APP组件
    el:"#app",
    components:{
        // 组件名：组件对象
        App:App
    },
    template:'<App/>'
})
console.log("111");
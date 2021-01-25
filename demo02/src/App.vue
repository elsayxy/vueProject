<template>
    <div>
        <h1>TodoList</h1>
        <input type="text" v-model="content">
        <button @click="addTodo">添加</button>
        <ul>
            <li v-for="(items,index) of todoData" :key="index">{{items}}</li>
        </ul>
    </div>
</template>

<script>
// import img from './assets/images/play2.png'
// import './assets/images/shutoff.png'
// import './assets/styles/test.css'
import './assets/styles/global.styl'

export default {
    name:'App',
    data(){
        return{
            todoData:['todo1','todo2','todo3','todo4'],
            content:''
        }
    },
    methods:{
        addTodo(){
            if (this.content === "") return;
            this.todoData.push(this.content);
            this.content = '';
        }
    }
}
</script>

<style lang="stylus" scoped>
h1 
    color: #000
    // transform :translate(100px,100px)
li:nth-of-type(odd)
    color : red
</style>
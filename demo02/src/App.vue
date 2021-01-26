<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
  import './assets/styles/global.styl'
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'

  export default {
    name: 'App',
    components: {
      // 组件名：组件对象
      MainHeader: MainHeader,
      MainTodo, // 简写方式
    },
    methods: {},
  }
</script>

<style lang="stylus" scoped></style>
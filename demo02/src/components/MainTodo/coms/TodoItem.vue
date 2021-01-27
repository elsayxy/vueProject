<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed" />
    <label for="">{{ todo.content }}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    methods: {
      delItem() {
        this.$emit('del', this.todo.id)
      },
    },
    props: {
      todo: Object,
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lighted

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    input
      width: 50px
      height: 24px
      CleanDefault()
      text-align: center
      margin-top: 5px

      &:after
        content: url('~images/unchecked.png')
        padding-top: 21px

      &:checked:after
        content: url('~images/checked.png')
        padding-top: 21px

    label
      flex: 1
      transition: color 0.4s

    button
      CleanDefault()
      background-color: transparent
      cursor: pointer
      line-height: 26px
</style>
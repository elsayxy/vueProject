<template>
  <div class="todo-info">
    <span class="total">{{ total }} items left</span>
    <div class="states">
      <a
        :class="['btn', 'primary', state == item ? 'actived' : '']"
        v-for="(item, index) in states"
        :key="index"
        @click="toggleState(item)"
        >{{ item }}</a
      >
    </div>
    <button class="btn clear" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    props: {
      total: Number,
    },
    data() {
      return {
        states: ['all', 'active', 'completed'],
        state: 'all',
      }
    },
    methods: {
      toggleState(state) {
        this.state = state
        this.$emit('toggleState', state)
      },
      clearCompleted() {
        this.$emit('clearCompleted')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    padding: 5px 10px
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)
    font-weight: 400

    .total
      color: $red

    .states
      display: flex
      justify-content: space-between
      width: 200px

  .btn.primary
    primaryBorderBtn()

    &.actived
      primaryBtn()

  .btn.clear
    btn($green)
</style>
<template lang="pug">
  .todo-input
    input(
      type="text"
      placeholder="Todo name"
      autofocus
      v-model="todo.name"
      @keydown.enter="addTodo"
    ).input
</template>

<script>
  let uniqId = 1;
  export default {
    data() {
      return {
        todo: {
          id: 0,
          name: "",
          checked: false
        }
      }
    },
    methods: {
      addTodo(){
        this.todo.id = uniqId
        uniqId++
        this.$emit('addtodo', {...this.todo});
        this.todo.name = "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    font-size: 24px;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 100%;
    background: #fff;
  }
</style>

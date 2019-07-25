<template lang="pug">
  .todo
    todo-input
    todo-list(
      v-if="todos.length > 0"
      :todos="todoFiltered"
    )
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';
import { mapState } from 'vuex';
export default {
  components: {
    todoInput,
    todoList
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),    
    todoFiltered() {
      switch(this.filter) {
        case 'all':
          return this.todos;
        case 'active':
          return this.todos.filter(item => (item.checked === false));
        case 'complited':
          return this.todos.filter(item => item.checked);  
      }
    }
  }
}
</script>

<style lang="scss">
.todo {
  width: 100%;
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 
              0 25px 50px 0 rgba(0, 0, 0, 0.1)
}
</style>

<template lang="pug">
  .todo
    todo-input(
      @addtodo="todo"
    )
    todo-list(
      v-if="todos.length > 0"
      :todos="todoFiltered"
      @removeTodo="removeTodo"
      @checkTodo="checkTodo"
      @todoFilter="todoFilter"
    )
</template>

<script>
import todoInput from './todoInput'
import todoList from './todoList'
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    }
  },
  components: {
    todoInput,
    todoList
  },
  computed: {
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
  },
  methods: {
    todo(todo){
      this.todos.push(todo)
    },
    removeTodo(todoid) {
      this.todos = this.todos.filter(item => item.id !== todoid)
    },
    checkTodo(todo) {
      this.todos = this.todos.map(item => (item.id === todo.id ? todo : item));
    },
    todoFilter(filter){
      this.filter = filter
      console.log(this.filter);
      
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

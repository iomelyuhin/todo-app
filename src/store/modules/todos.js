const todos = {
  state: {
    todos: [],
    filter: "all"
  },
  mutations: {
    addTodo(state, todo){
      state.todos.push(todo)
    },
    removeTodo(state, todoid) {
      state.todos = state.todos.filter(item => item.id !== todoid)
    },
    checkTodo(state, todo) {
      state.todos = state.todos.map(item => (item.id === todo.id ? todo : item));
    },
    todoFilter(state, filter){
      state.filter = filter
      
    }
  }
}

export default todos;
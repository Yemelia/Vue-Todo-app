<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: []
    };
  },
  mounted(){
    this.$http.get('/api/todos')
    .then(response => {
      this.todos = response.body;
    }, response => {
        console.log(response);
    });
  },
  methods:{
    addTodo(todo){
      this.$http.put('/api/add-todo', todo)
      .then(response => {
        this.todos = response.body
      }, response => {
        console.log(response);
      });
    }
  }
}
</script>

<style lang="scss">

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>

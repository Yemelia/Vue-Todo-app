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
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  methods:{
    addTodo(todo){
      this.todos.push(todo);
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

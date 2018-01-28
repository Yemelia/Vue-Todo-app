<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
export default {
  name: 'app',
components: {
    TodoList,
  },
  // data function avails data to the template
  data() {
    return {
      todos: [{
        id: 1,
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        id: 2,
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        id:3,
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        id:4,
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
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

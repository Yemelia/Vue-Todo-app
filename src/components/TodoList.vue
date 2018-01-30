<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo v-on:delete-todo="deleteTodo" v-for="(todo, index) in todos" v-bind:todo="todo" v-bind:key="index" v-on:complete-todo="completeTodo"></todo>
  </div>
</template>

<script type = "text/javascript" >

import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);

      this.$http.post('/api/delete-todo', {todoIndex})
      .then(response => {
        this.todos = response.body
      }, response => {
        console.log('Error');
      });
    },

    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
};
</script>
<template>
  <AppHeader />

  <AppFilters />

  <main class="app-main">
    <AppTodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
    <AppAddTodo @add-new-todo="addNewTodo" />
  </main>

  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Todo } from "./types/Todo";

import AppHeader from "./components/AppHeader.vue";
import AppFilters from "./components/AppFilters.vue";
import AppTodoList from "./components/AppTodoList.vue";
import AppAddTodo from "./components/AppAddTodo.vue";
import AppFooter from "./components/AppFooter.vue";

interface State {
  todos: Todo[];
}

export default defineComponent({
  components: {
    AppHeader,
    AppFilters,
    AppTodoList,
    AppAddTodo,
    AppFooter,
  },
  data(): State {
    return {
      todos: [
        { id: 0, text: "Learn the basics of Vue", completed: true },
        { id: 1, text: "Learn the basics of Typescript", completed: false },
        { id: 2, text: "Subscribe to the channel", completed: false },
      ],
    };
  },
  methods: {
    toggleTodo(id: number) {
      this.todos.find((todo: Todo) =>
        todo.id === id ? (todo.completed = !todo.completed) : null
      );
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
    },
    addNewTodo(todo: Todo) {
      this.todos.push(todo);
    },
  },
});
</script>

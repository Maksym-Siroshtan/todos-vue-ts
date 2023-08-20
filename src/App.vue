<template>
  <AppHeader />

  <AppFilters :active-filter="activeFilter" @set-filter="setFilter" />

  <main class="app-main">
    <AppTodoList
      :todos="filteredTodos"
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
import { Filter } from "./types/Filter";
import { generateTodos } from "./functions";

import AppHeader from "./components/AppHeader.vue";
import AppFilters from "./components/AppFilters.vue";
import AppTodoList from "./components/AppTodoList.vue";
import AppAddTodo from "./components/AppAddTodo.vue";
import AppFooter from "./components/AppFooter.vue";

interface State {
  todos: Todo[];
  activeFilter: Filter;
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
      todos: generateTodos(),
      activeFilter: "All",
    };
  },
  computed: {
    filteredTodos(): Todo[] {
      switch (this.activeFilter) {
        case "Active":
          return this.active;
        case "Done":
          return this.done;
        case "All":
        default:
          return this.todos;
      }
    },
    active(): Todo[] {
      return this.todos.filter((todo: Todo) => todo.completed === false);
    },
    done(): Todo[] {
      return this.todos.filter((todo: Todo) => todo.completed);
    },
  },
  methods: {
    toggleTodo(id: string) {
      this.todos.find((todo: Todo) =>
        todo.id === id ? (todo.completed = !todo.completed) : null
      );
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
    },
    addNewTodo(todo: Todo) {
      this.todos.push(todo);
    },
    setFilter(filter: Filter) {
      this.activeFilter = filter;
    },
  },
});
</script>

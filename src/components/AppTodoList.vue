<template>
  <ul class="todo-list">
    <AppTodoListItem
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Todo } from "../types/Todo";
import AppTodoListItem from "./AppTodoListItem.vue";

interface State {
  todos: Todo[];
}
export default defineComponent({
  components: {
    AppTodoListItem,
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
  },
});
</script>

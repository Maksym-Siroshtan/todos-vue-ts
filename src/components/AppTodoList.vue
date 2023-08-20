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
import { defineComponent, PropType } from "vue";
import { Todo } from "../types/Todo";
import AppTodoListItem from "./AppTodoListItem.vue";

export default defineComponent({
  components: {
    AppTodoListItem,
  },
  props: {
    todos: {
      required: true,
      type: Array as PropType<Todo[]>,
    },
  },
  methods: {
    toggleTodo(id: number) {
      this.$emit("toggleTodo", id);
    },
    deleteTodo(id: number) {
      this.$emit("deleteTodo", id);
    },
  },
  emits: {
    toggleTodo: (id: number) => Number.isInteger(id),
    deleteTodo: (id: number) => Number.isInteger(id),
  },
});
</script>

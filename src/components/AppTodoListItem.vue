<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': todo.completed }"
    @click="toggleTodo"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ todo.text }}</span>
    <button class="todo-item__remove-button" @click.stop="deleteTodo">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "../types/Todo";

export default defineComponent({
  props: {
    todo: {
      required: true,
      type: Object as PropType<Todo>,
    },
  },
  methods: {
    toggleTodo() {
      this.$emit("toggleTodo", this.todo.id);
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.todo.id);
    },
  },
  emits: {
    toggleTodo: (id: number) => Number.isInteger(id),
    deleteTodo: (id: number) => Number.isInteger(id),
  },
});
</script>

<template>
  <ul class="todo-list">
    <AppTodoListItem v-for="todo in todos" :todo="todo" :key="todo.id" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTodoListItem from "./AppTodoListItem.vue";

export default defineComponent({
  components: {
    AppTodoListItem,
  },
  data() {
    return {
      todos: [
        { id: 0, text: "Learn the basics of Vue", completed: true },
        { id: 1, text: "Learn the basics of Typescript", completed: false },
        { id: 2, text: "Subscribe to the channel", completed: false },
      ],
    };
  },
});
</script>

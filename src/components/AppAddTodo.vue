<template>
  <section class="add-todo">
    <form
      v-if="isFormVisible"
      class="add-todo__form"
      @submit.prevent="addNewTodo"
    >
      <button class="close-button" type="button" @click="hideForm">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input v-model="todoText" class="input" />
      </div>
      <button :disabled="todoText.trim() === ''" class="button button--filled">
        Add task
      </button>
    </form>
    <button v-else class="add-todo__show-form-button" @click="showForm">
      <i class="bi bi-plus-lg"></i>
    </button>
  </section>
</template>

<script lang="ts">
import { Todo } from "@/types/Todo";
import { defineComponent } from "vue";

interface State {
  isFormVisible: boolean;
  todoText: string;
}

export default defineComponent({
  data(): State {
    return {
      isFormVisible: false,
      todoText: "",
    };
  },
  methods: {
    showForm() {
      this.isFormVisible = true;
    },
    hideForm() {
      this.isFormVisible = false;
    },
    addNewTodo() {
      this.$emit("addNewTodo", {
        id: Date.now(),
        text: this.todoText,
        completed: false,
      });

      this.todoText = "";
    },
  },
  emits: {
    addNewTodo: (todo: Todo) => todo,
  },
});
</script>

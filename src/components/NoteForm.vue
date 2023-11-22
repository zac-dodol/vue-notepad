<!-- NoteForm.vue -->

<template>
  <div>
    <h2>Note Form</h2>

    <form @submit.prevent="saveNote" class="d-flex flex-column gap-2">
      <div class="form-group">
        <label for="title">Title:</label>

        <input
          type="text"
          v-model="localNote.title"
          class="form-control"
          id="title"
          required
        />
      </div>

      <div class="form-group">
        <label for="body">Body:</label>

        <textarea
          v-model="localNote.body"
          class="form-control"
          id="body"
          rows="4"
        ></textarea>
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="localNote.favorite" /> Favorite
        </label>
      </div>

      <div class="form-group">
        <label for="color">Note Color:</label>

        <input
          type="color"
          v-model="localNote.color"
          class="form-control"
          id="color"
        />
      </div>

      <button type="submit" class="btn btn-primary mt-2">Save Note</button>
    </form>

    <button @click="createNewNote" class="btn btn-secondary mt-4 w-100">
      Create New Note
    </button>
  </div>
</template>

<script>
export default {
  name: "NoteForm",
  props: {
    note: Object,
  },
  data() {
    return {
      localNote: { ...this.note },
    };
  },
  watch: {
    note(newNote) {
      this.localNote = { ...newNote };
    },
  },
  methods: {
    saveNote() {
      this.$emit("saveNote", { ...this.localNote });
    },
    createNewNote() {
      this.localNote = {}; // Reset the localNote data
      this.$emit("selectNote", null); // Emit null to reset the form
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>

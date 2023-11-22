<template>
  <div>
    <h2>Note List</h2>
    <ul>
      <li
        v-for="note in notes"
        :key="note.id"
        :class="{ selected: selectedNote === note }"
        @click="selectNote(note)"
        class="pointer"
      >
        {{ note.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NoteList",
  props: {
    notes: Array,
  },
  methods: {
    selectNote(note) {
      this.$emit("selectNote", note);
    },
  },
};
</script>

<style scoped>
.selected {
  background-color: #f0f0f0;
}

.pointer {
  cursor: pointer;
}
</style>

<template>
  <div class="d-flex gap-4 flex-row">
    <NoteForm :note="selectedNote" @saveNote="saveNote" />
    <NoteList :notes="notes" @selectNote="selectNote" />
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import NoteForm from "@/components/NoteForm.vue";

export default {
  components: {
    NoteList,
    NoteForm,
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: "Sample Note",
          body: "This is a sample note.",
          favorite: false,
          color: "#ffffff",
        },
      ],
      selectedNote: null,
    };
  },
  methods: {
    saveNote(newNote) {
      if (newNote.id) {
        // Update existing note
        const index = this.notes.findIndex((note) => note.id === newNote.id);
        this.notes[index] = { ...newNote };
      } else {
        // Add new note
        newNote.id = this.notes.length + 1;
        this.notes.push({ ...newNote });
      }

      this.selectedNote = { ...newNote };
    },
    selectNote(note) {
      this.selectedNote = note;
    },
  },
};
</script>

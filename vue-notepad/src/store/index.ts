import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [
      {
        id: 1,
        title: "Sample Note",
        body: "This is a sample note",
        favorite: false,
        color: "#ffffff",
      },
    ],
    selectedNote: null,
  },
  mutations: {
    // Your mutations to add, edit, and select notes
  },
  actions: {
    // Your actions to interact with notes
  },
  modules: {},
});

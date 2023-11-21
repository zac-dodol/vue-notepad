<template>
  <div id="app" class="d-flex flex-column">
    <nav class="m-auto text-center mb-4">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Projects</router-link> |
      <router-link to="/study">Study</router-link>
    </nav>

    <router-view />

    <!-- <NoteForm :note="selectedNote" @saveNote="saveNote" />
    <NoteList :notes="notes" @selectNote="selectNote" /> -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
</style>

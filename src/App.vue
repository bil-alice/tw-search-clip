<template>
  <div id="app">
    <Calendar />
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";
export default {
  name: "App",
  components: {
    Calendar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200&display=swap");
html {
  font-size: 70%;
}
body {
  margin: 0;
  font-family: "Roboto Mono", monospace;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
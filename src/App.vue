<template>
  <div id="app">
    <FormSearchGiphy />
  </div>
</template>

<script>
import FormSearchGiphy from "./components/PageSearchGiphy";

export default {
  name: "App",
  components: {
    FormSearchGiphy,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0;
  padding: 0;

  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <div id="app">
    <div class="ui top fixed menu">
      <router-link class="item" to="/search">Search Giphys</router-link> 
      <router-link class="item" to="/savedgiphys">Giphys Saved</router-link>
    </div>
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(223, 213, 213);
  min-height: 100vh;

  background: #2c3e50;
}

.menu{
  display: flex;
  justify-content: center;
  height: 60px;
  padding: 20px;
}
</style>

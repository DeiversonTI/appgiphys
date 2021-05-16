<template>
  <div id="app">
    <nav class="topbar">
      <router-link to="/" class="topbar-title">Giphys</router-link>
      <ul>
        <li class="topbar-items">
          <router-link class="links" to="/">Início</router-link>
        </li>
        <!-- <li class="topbar-items">
          <router-link class="links" to="/trendings">Trendings</router-link>
        </li> -->
        <li class="topbar-items">
          <router-link class="links" to="/pesquisar">Pesquisar</router-link>
        </li>
        <li class="topbar-items">
          <router-link class="links" to="/salvos">Salvos</router-link>
        </li>
      </ul>
    </nav>
		<router-view class="view"></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  min-height: 100vh;
  max-width: 100vw;

  background: #383a59;
}

nav.topbar {
  background: #282a36;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
  justify-content: space-around;
}

.topbar-title {
  font-family: Abril Text;
  font-weight: 700;
  color: #f2f2f2;
  font-size: 42px;
  cursor: pointer;
  -webkit-transition: none;
  transition: none;
  border-left: 50%;
}

a {
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  text-decoration: none;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

nav ul li .links {
  color: #f2f2f2;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  margin-left: 20px;
}

.links:hover {
  border-bottom: 2px solid white;
}
</style>

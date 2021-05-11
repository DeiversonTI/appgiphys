<template>
  <div id="app">
    <nav class="topbar">
      <a href="/" class="topbar-title">Giphys</a>
      <ul>
        <li class="topbar-items"><a href="/pesquisar">Pesquisar</a></li>
        <li class="topbar-items"><a href="/salvos">Salvos</a></li>
      </ul>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;
  width: 100vw;

  background: #383a59;
}

nav.topbar {
  background: #282a36;
  height: 50px;
  padding: 5px;
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
  font-size: 24px;
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

nav ul li a {
  color: #f2f2f2;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  margin-left: 20px;
}
</style>

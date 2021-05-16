<template>
  <main id="search-page">
    <h1>Bem vindo a página de Pesquisa</h1>
    <button @click="teste()">Pesquisar</button>
  </main>
</template>

<script>
import actions from '../../../store/actions';

export default ({
  el: 'search-page',
  methods: {
    teste(){
      actions.getTrending();
    }
  }
})
</script>

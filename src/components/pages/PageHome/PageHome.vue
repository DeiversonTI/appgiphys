<template>
  <main id="home-page">
    <h1>Bem vindo aos trendings</h1>
    <section id="Cards">
      <CardGiphy />
    </section>
  </main>
</template>

<script>
  import CardGiphy from '@/components/Cards/CardGiphy';

  export default {
    components: {
      CardGiphy,
    },
  }
</script>

<style>
    main#home-Page #cards{
      display: grid;
      grid-template-columns: auto auto auto;
    }
</style>
<template>
  <main id="home-page">
    <h1>Bem vindo aos trendings</h1>
    <section id="cards">
      <CardGiphy
        v-for="(giphy, index) in list"
        :key="index"
        :url="giphy.images.downsized.url"
        :title="giphy.title"
        :import_date="giphy.import_datetime"
        :id="giphy.id"
      />
    </section>
  </main>
</template>

<script>
import CardGiphy from "@/components/Cards/CardGiphy";
import { state, actions } from '@/store'

export default {
  components: {
    CardGiphy,
  },
  data() {
    return {
      list: state.list,
    };
  },
  created(){
    actions.getTrending()
  }
};
</script>

<style>
#home-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#cards {
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  margin-bottom: 50px;
}
</style>
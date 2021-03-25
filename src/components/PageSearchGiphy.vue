<template>
  <section class="main">
    <section id="formToSearch">
      <h1>Search Giphys</h1>
      <input type="text" id="inpValueSearch" v-model="valueSearch" />
      <button id="btnSearch" @click="searchGiphys()">Pesquisar</button>
    </section>

    <section id="viewGiphys" v-if="items_response != null">
      <GiphyCard
        v-for="(giphy, index) in items_response"
        :key="index"
        :urlGiphy="giphy.images.downsized.url"
        :title="giphy.title"
        :import_date="giphy.import_datetime"
      />
    </section>
  </section>
</template>

<script>
import GiphyCard from "./Cards/GiphyCards";

export default {
  name: "FormSearchGiphy",
  components: {
    GiphyCard,
  },
  data() {
    return {
      api_key: "KuOjfeKF3VQCVK9PIsI33rzivmUlKkOF",
      valueSearch: "",
      url: "https://api.giphy.com/v1/gifs/search?",

      items_response: null,
    };
  },
  methods: {
    async searchGiphys() {
      let urlToFetch = this.url.concat(
        `api_key=${this.api_key}&limit=12&q=${this.valueSearch}`
      );

      await fetch(urlToFetch)
        .then((response) => response.json())
        .then((content) => {
          this.items_response = content.data;
          console.log(content.data);
          //console.log(content.meta);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.main {
  width: 100%;
  background-color: #ececec;
}

section#formToSearch{
  padding: 10px;
  border-bottom: 3px black solid;
}

section#viewGiphys{
  margin-top: 50px ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}

</style>

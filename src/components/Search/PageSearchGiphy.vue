<template>
  <section class="main">
    <header id="formToSearch">
      <div class="ui large icon input">
        <input
          id="btnSearch"
          type="text"
          v-model="valueSearch"
          @blur="searchGiphys()"
          @keypress.enter="searchGiphys()"
        />
        <i class="search icon"></i>
      </div>
    </header>

    <main
      class="ui centered grid"
      id="viewGiphys"
      v-if="items_response.length > 0"
    >
      <GiphyCard
        v-for="giphy in items_response"
        :key="giphy.id"
        :urlGiphy="giphy.images.downsized.url"
        :title="giphy.title"
        :import_date="giphy.import_datetime"
        :id="giphy.id"
      />
    </main>
  </section>
</template>

<script>
import GiphyCard from "../Cards/GiphyCards";

export default {
  name: "FormSearchGiphy",
  components: {
    GiphyCard,
  },
  data() {
    return {
      api_key: "KuOjfeKF3VQCVK9PIsI33rzivmUlKkOF",
      valueSearch: "" || localStorage.getItem('valueSearched'),
      url: "https://api.giphy.com/v1/gifs/search?",

      items_response: {},
    };
  },
  methods: {
    async searchGiphys() {
      let urlToFetch = this.url.concat(
        `api_key=${this.api_key}&limit=12&q=${this.valueSearch}&lang=pt`
      );

      await fetch(urlToFetch)
        .then((response) => response.json())
        .then((content) => {
          this.items_response = content.data;
          //console.log(content.data);
          //console.log(content.meta);
        })
        .catch((err) => console.error(err));
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.main {
  margin-top: 60px;
  width: 100vw; 
}

#formToSearch {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

main#viewGiphys {
  margin-top: 50px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3rem;
}
</style>

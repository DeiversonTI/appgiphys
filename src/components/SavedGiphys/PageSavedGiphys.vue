<template>
  <main
    class="ui centered grid"
    id="viewGiphysSaved"
    @mousemove="getItemsInStorage()"
  >
    <GiphyCardsSaved
      v-for="giphy in giphysSaved"
      :key="giphy.id"
      :urlGiphy="giphy.url"
      :title="giphy.title"
      :import_date="giphy.import_datetime"
      :id="giphy.id"
    />
  </main>
</template>

<script>
import GiphyCardsSaved from "../Cards/GiphyCardsSaved.vue";

export default {
  name: "SavedGiphys",
  components: {
    GiphyCardsSaved,
  },
  data() {
    return {
      giphysSaved: new Array(),
    };
  },
  methods: {
    getItemsInStorage: function() {
      let saveds = [];
      let valuesOnStorage = [];

      for (let i = 0; i < localStorage.length; i++) {
        saveds.push(localStorage.key(i));
      }

      saveds.forEach((element, index) => {
        if (element.substr(0, 5) != "props") {
          saveds.splice(index, 1);
        }
      });

      saveds.forEach((element) => {
        valuesOnStorage.push(JSON.parse(localStorage.getItem(element)));
      });
      this.giphysSaved = valuesOnStorage;
    },
  },
};
</script>

<style scoped>
#viewGiphysSaved {
  min-width: 100vw;
  min-height: 100vh;

  margin-top: 50px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3rem;
}
</style>

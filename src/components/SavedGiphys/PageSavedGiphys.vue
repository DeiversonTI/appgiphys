<template>
  <main
    class="ui centered grid"
    id="viewGiphysSaved"
  >
    <GiphyCardsSaved
      v-for="(giphy, index) in list"
      :key="giphy.id+index"
      :urlGiphy="giphy.url"
      :title="giphy.title"
      :import_date="giphy.import_data"
      :id="giphy.id"
    />
  </main>
</template>

<script>
import GiphyCardsSaved from "../Cards/GiphyCardsSaved.vue";
import { mapState } from "vuex";

export default {
  name: "SavedGiphys",
  components: {
    GiphyCardsSaved,
  },
  computed: {
    ...mapState({
      list: (state) => state.saveds.list,
    }),
  },
  created(){
    console.log(this.list);
  }
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

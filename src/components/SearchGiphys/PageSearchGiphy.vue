<template>
  <section class="main">
    <header id="formToSearch">
      <div class="ui large icon input">
        <input
          id="btnSearch"
          type="text"
          v-model="valueToSearch"
          @blur="searchGiphys()"
          @keypress.enter="searchGiphys()"
        />
        <i class="search icon"></i>
      </div>
    </header>

    <main class="ui centered grid" id="viewGiphys" v-if="list.length > 0">
      <GiphyCard
        v-for="(giphy, index) in list"
        :key="giphy.id + index"
        :urlGiphy="giphy.images.downsized.url"
        :title="giphy.title"
        :import_date="giphy.import_datetime"
        :id="giphy.id"
      />
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </main>
  </section>
</template>

<script>
import GiphyCard from "../Cards/GiphyCards";
import { mapActions, mapState } from "vuex";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "FormSearchGiphy",
  components: {
    GiphyCard,
    InfiniteLoading,
  },
  computed: {
    ...mapState({
      list: (state) => state.searcheds.list,
    }),
    valueToSearch: {
      get() {
        return this.$store.state.searcheds.valueToSearch;
      },
      set(value) {
        this.$store.commit("setValueToSearch", value);
      },
    },
  },
  methods: {
    ...mapActions(["getGiphys"]),
    async searchGiphys() {
      await this.$store.dispatch("getGiphys");
    },
    async infiniteHandler($state) {
      await this.$store.dispatch("getGiphys");
      $state.loaded();
    },
  },
  watch: {
    valueToSearch(newValue, oldValue){
      if(newValue != oldValue){
        this.$store.commit('resetList');
        this.$store.commit('resetOffSet');
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.main {
  /* margin-top: 60px; */
  width: 100vw;
}

.input {
  margin-top: 60px;
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

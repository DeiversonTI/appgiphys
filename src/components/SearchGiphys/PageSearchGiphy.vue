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

    <main class="ui centered grid" id="viewGiphys" v-if="list.length > 0">
      <GiphyCard
        v-for="giphy in list"
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
import { mapActions } from "vuex";

export default {
  name: "FormSearchGiphy",
  components: {
    GiphyCard,
  },
  data() {
    return {
      valueSearch: "",
    };
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  methods: {
    ...mapActions(["getGiphys"]),
    searchGiphys() {
      this.$store.dispatch("getGiphys", this.valueSearch);
    },
  },
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

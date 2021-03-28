<template>
  <div id="main">
    <div class="ui cards">
      <div class="card">
        <div class="image">
          <img :src="urlGiphy" :alt="title" />
        </div>
        <div class="content">
          <div class="header" v-html="title || 'Gif'"></div>
          <br />
          <div class="ui labeled button" tabindex="0">
            <div
              class="ui red animated button"
              tabindex="0"
              @click="deleteGiphy()"
            >
              <div class="visible content">
                <i class="thumbs up icon"></i>
                Like
              </div>
              <div class="hidden content">
                <i class="thumbs down icon"></i>
                Dislike
              </div>
            </div>
          </div>
          <br>
          <br>
          <FormEditCard
            :giphyUrl="urlGiphy"
            :giphyTitle="title"
            :giphyDate="import_date"
            :giphyId="id"
          />
        </div>
        <div class="extra content">
          <span class="left floated">
            última atualização: <span v-html="moment(import_date)"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import FormEditCard from "../FormEditCard/FormEditCard.vue";

export default {
  name: "GiphyCard",
  components: {
    FormEditCard,
  },
  props: ["urlGiphy", "title", "import_date", "id"],
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    moment: function(data) {
      return moment(data).format("DD/MM/YYYY");
    },
    deleteGiphy: function() {
      localStorage.removeItem(`props${this.id}`);
    },
  },
};
</script>

<style scoped>
</style>

<template>
  <div id="main">
    <div class="ui cards">
      <div class="card">
        <div class="image">
          <img :src="urlGiphy" :alt="title" />
        </div>
        <div class="content">
          <div class="header" v-html="title || 'Gif'"></div>
          <!-- <div class="description" v-html="description"></div> -->
          <br />
          <div class="ui labeled button" tabindex="0">
            <div
              class="ui button"
              :class="{ red: saved }"
              tabindex="0"
              @click="giphySaved()"
            >
              <i class="heart icon"></i>
              Like
            </div>
          </div>
        </div>
        <div class="extra content">
          <span class="center floated">
            Postado em <span v-html="moment(import_date)"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions } from 'vuex';

export default {
  name: "GiphyCard",
  props: ["urlGiphy", "title", "import_date", "id"],
  data() {
    return {
      saved: false,
    };
  },
  methods: {
    ...mapActions(['saveGiphy', 'removeGiphy']),
    async giphySaved(){
      if (this.saved) {
        this.saved = false;
				this.removeGiphy();
      } else {
        this.saved = true;
        this.addGiphy();
      }
    },
    async addGiphy(){
      let props = {
        url: this.urlGiphy,
        title: this.title,
        import_date: this.import_date,
        id: this.id,
      };
      await this.$store.dispatch('saveGiphy', props);
    },
    async removeGiphy(){
      await this.$store.dispatch('removeGiphy', this.id);
    },
    moment: function(data) {
      return moment(data).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped></style>

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
              @click="saveGiphy()"
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

export default {
  name: "GiphyCard",
  props: ["urlGiphy", "title", "import_date", "id"],
  data() {
    return {
      saved: false,
    };
  },
  methods: {
    moment: function(data) {
      return moment(data).format("DD/MM/YYYY");
    },
    saveGiphy: function() {
      if (this.saved) {
        this.saved = false;
				this.removeOnStorage();
      } else {
        this.saved = true;
        this.saveInStorage();
      }
    },
    saveInStorage: function() {
      let props = {
        url: this.urlGiphy,
        title: this.title,
        import_data: this.import_date,
        id: this.id,
      };

      localStorage.setItem(`props${this.id}`, JSON.stringify(props));
    },
		removeOnStorage: function(){
			localStorage.removeItem(`props${this.id}`);
		}
  },
};
</script>

<style scoped></style>

<template>
  <main>
    <button class="ui button" @click="showForm()">
      <i class="edit icon"></i>
      Edit
    </button>
    <form class="ui form" v-if="edit == true">
      <!-- <h4 class="ui dividing header">Edit card</h4> -->
      <br />
      <hr />
      <div class="field">
        <div class="field">
          <input
            type="hidden"
            name="giphyId"
            placeholder=""
            v-model="idGiphy"
            readonly
          />
        </div>
      </div>
      <div class="field">
        <label>Title</label>
        <div class="field">
          <input
            type="text"
            name="giphyTitle"
            placeholder="Insira um titúlo"
            v-model="titleGiphy"
          />
        </div>
      </div>
      <div class="field">
        <label>Data</label>
        <div class="field">
          <input
            type="date"
            name="giphyDate"
            placeholder="Insira uma Data"
            v-model="dateGiphy"
          />
        </div>
      </div>
      <div class="field">
        <label>URL</label>
        <div class="field">
          <input
            type="text"
            name="giphyUrl"
            placeholder=""
            v-model="urlGiphy"
            readonly
          />
        </div>
      </div>
      <div class="ui button" tabindex="0" @click="saveChanges()">
        Confimar
      </div>
    </form>
  </main>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "GiphyCard",
  props: ["giphyUrl", "giphyTitle", "giphyDate", "giphyId"],
  data() {
    return {
      edit: false,
      urlGiphy: this.giphyUrl,
      titleGiphy: this.giphyTitle,
      dateGiphy: this.giphyDate,
      idGiphy: this.giphyId,
    };
  },
  computed: {
    ...mapState({
      list: (state) => state.saveds.list,
    }),
  },
  methods: {
    moment: function (data) {
      return moment(data).format("YYYY-MM-DD");
    },
    showForm: function () {
      if (this.edit) {
        this.edit = false;
      } else {
        this.edit = true;
      }
    },
    saveChanges: function () {
      let giphy = {
        url: this.urlGiphy,
        title: this.titleGiphy,
        import_data: this.dateGiphy,
        id: this.idGiphy,
      };
      this.$store.dispatch('editGiphy', giphy);
      this.edit = false;
    },
  },
};
</script>

<style scoped></style>

<template>
  <main>
    <button class="ui button" @click="openModal()">
      <i class="edit icon"></i>
      Edit
    </button>
    <form class="ui form modal">
      <h4 class="ui dividing header">Shipping Information</h4>
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
            />
          </div>
          <div class="field">
            <input
              type="text"
              name="shipping[last-name]"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div class="field">
        <label>Billing Address</label>
        <div class="fields">
          <div class="twelve wide field">
            <input
              type="text"
              name="shipping[address]"
              placeholder="Street Address"
            />
          </div>
          <div class="four wide field">
            <input type="text" name="shipping[address-2]" placeholder="Apt #" />
          </div>
        </div>
      </div>
      <div class="ui button" tabindex="0">Submit Order</div>
    </form>
  </main>
</template>

<script>
import moment from "moment";

export default {
  name: "GiphyCard",
  props: ["urlGiphy", "title", "import_date", "id"],
  data() {
    return {
      giphyUrl: this.urlGiphy,
      giphyTitle: this.title,
      giphyYate: this.import_date,
    };
  },
  methods: {
    moment: function(data) {
      return moment(data).format("DD/MM/YYYY");
    },
    openModal: function(){
      
    }
  },
};
</script>

<style scoped></style>

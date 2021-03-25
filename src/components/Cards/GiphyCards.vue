<template>
  <div id="main">
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img :src="urlGiphy" :alt="title" width="150px" height="150px" />
        </div>
        <div class="content">
          <div class="header" v-html="title || 'Gif'"></div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <!-- <div class="description" v-html="description"></div> -->
        </div>
        <div class="extra content">
          <span class="right floated">
            import in <span v-html="import_date"></span>
          </span>
          <span>
            <i class="user icon"></i>
            75 Friends
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GiphyCard",
  props: ["urlGiphy", "title", "import_date", ],
};
</script>

<style scoped>
img {
  margin: 25px;
}
</style>

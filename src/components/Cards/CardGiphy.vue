<template>
  <section>
    <div class="card">
        <img :src="url" :alt="title">
        <!-- <h6>{{ title }}</h6>
        <h6>{{ url }}</h6>
        <h6>{{ import_date }}</h6>
        <h6>{{ id }}</h6> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "CardGiphy",
  props: ['url', 'title', 'import_date', 'id'],
};
</script>

<style scoped>
section {
  color: black;
}

section .card {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: white;
}
</style>
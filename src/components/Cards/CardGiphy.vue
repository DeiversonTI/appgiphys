<template>
  <section>
    <div class="card">
        <img :src="url" :alt="title">
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

section .card img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
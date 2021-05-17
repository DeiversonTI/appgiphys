<template>
  <section>
    <div class="card">

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
  color: white;
}

section .card {
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 20px;
}
</style>
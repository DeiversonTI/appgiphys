<template>
  <main id="home-page">
    <h1>Bem vindo aos trendings</h1>
    <section id="cards">
      <CardGiphy />
    </section>
  </main>
</template>

<script>
import CardGiphy from "@/components/Cards/CardGiphy";
import actions from '@/store/actions';
import state from "@/store/state";

export default {
  components: {
    CardGiphy,
  },
	data(){
		return {
			list: state.list,
		}
	},
	render() {
		return state.list.push(actions.getTrending());
	},
};
</script>

<style>
#home-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#cards {
	align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 25px;
}
</style>
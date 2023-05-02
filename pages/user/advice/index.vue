<template>
<div>
  <div class="grid grid-cols-4 gap-4" v-if="loadSpecies">
  <SpecieSheet 
    v-for="specie in species" 
    :key="specie.ID" 
    :specie="specie"
    @goTo="goTo"/>
  </div> 
</div>
</template>

<script>
import { useSpeciesStore } from '~~/stores/speciesStore';
const speciesStore = useSpeciesStore();

export default {
  data() {
    return {
      species: [],
      loadSpecies: false
    };
  },

  mounted() {
    this.getAllSpecies();
  },
  methods :{
    async getAllSpecies() {
      try {
        await speciesStore.getAllSpecies();
        this.species = speciesStore.$state.species.data;
        console.log(this.species);
        this.loadSpecies = true;
      } catch (e) {
        console.log(e);
      }
    },
    goTo(id) {
      // Methode qu'on utilise pour envoyé l'user sur la page de l'annonce qu'il a cliqué
      this.$router.push(`/user/advice/${id}`);
    },
  }

};
</script>

<style>
</style>
<template>
  <div>
    <AnnonceComponent @goTo="goTo" :annonces="annonces" />
  </div>
</template>

<script>
import { useAnnoncesStore } from "~~/stores/annoncesStore";
import { usePlantesStore } from "~~/stores/plantesStore";
const annoncesStore = useAnnoncesStore();
const plantesStore = usePlantesStore();

export default {
  data() {
    return {
      annonces: [],
    };
  },
  beforeMount() {
    // on récupère les annonces au chargement de la page
    this.getAllAnnonces();
  },
  methods: {
    async getAllAnnonces() {
      try {
        await annoncesStore.getAllAnnonces();
        this.annonces = annoncesStore.$state.annonces.data;
      } catch (e) {
        console.log(e);
      }
    },
    goTo(id) {
      // Methode qu'on utilise pour envoyé l'user sur la page de l'annonce qu'il a cliqué
      this.$router.push(`/annonces/${id}`);
    },
  },
};
</script>

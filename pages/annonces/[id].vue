<template>
  <div>
    <AnnonceDetail
      :plants="plants"
      :annonce="annonce"
      :loadPicture="loadPicture"
    />
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
      annonce: "",
      plants: "",
      loadPicture: false,
    };
  },
  beforeMount() {
    // on récupère les annonces au chargement de la page
    this.getAnnonce();
    this.getplantsPicture();
  },
  methods: {
    async getAnnonce() {
      try {
        await annoncesStore.getAnnonceById(this.$route.params.id);
        this.annonce = annoncesStore.$state.annonce.data[0];
      } catch (e) {
        console.log(e);
      }
    },

    async getplantsPicture() {
      try {
        await plantesStore.getPlantsByAnnonce(this.$route.params.id);
        this.plants = plantesStore.$state.plants.data;
        this.loadPicture = true;
      } catch (e) {
        console.log(e);
      }
    },

    async setAdvice(id) {
      try {
        console.log("Voici l'id : ", id);
        await plantesStore.getAdviceByPlantId(id);
        this.tabPlant = plantesStore.$state.advice.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center pt-10">
    <ConfierFormulaire @addAnnonce="addAnnonce" v-if="!succes && !echec" />
    <Succes message=" Votre annonce a été enregistrer :)" route="/annonces" v-if="succes" />
    <Echec message="Echec lors de l'enregistrement :(" route="/user/confier" v-if="echec" />
  </div>
</template>

<script>
import { useAnnoncesStore } from "~~/stores/annoncesStore";
import decodeToken from "~~/tools/utils/decodeToken";
const annoncesStore = useAnnoncesStore();

definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      ownerId: "",
      result: "",
      echec: false,
      succes: false,
    };
  },
  mounted() {
    this.echec = false;
    this.succes = false;
  },
  methods: {
    async addAnnonce(
      startDate,
      endDate,
      plantCount,
      annonceDescription,
      location,
      annonceTitle,
      urlImage
    ) {
      try {
        this.ownerId = await decodeToken(useCookie("tokenAuth").value);
        await annoncesStore.postAddAnnonce(
          this.ownerId.userId,
          startDate,
          endDate,
          plantCount,
          annonceDescription,
          location,
          annonceTitle,
          urlImage
        );
        if (annoncesStore.$state.addAnnonceStatus.data.status == 200) {
          this.succes = true;
          this.echec = false;
        } else {
          this.succes = false;
          this.echec = true;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
// Il faut importer Annonce store, récuperé l'id de l'user connecter dans le cookie et faire le post pour add l'annonce
</script>

<template>
    <div>
      <NuxtLink :to="`/user/advice`">
      <svg width="32" height="32" viewBox="0 0 20 20" class="mb-2">
        <path
          fill="darkgreen"
          d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9H3.828z"
        />
      </svg>
    </NuxtLink>
    <v-img
      v-if="loadSpecieAdvices"
      class="mx-auto mb-5"
      height="200"
      max-width="70%"
      :src="specieAdvices[0].img"
      cover
    />
      <SpecieAdvices :specieAdvices="specieAdvices" v-if="loadSpecieAdvices" @addAdvice="addAdvice"/>
    </div>
  </template>

<script>
import { useSpeciesStore } from '~~/stores/speciesStore';
import decodeToken from '~~/tools/utils/decodeToken';
const speciesStore = useSpeciesStore();

export default {
  data() {
    return {
      specieAdvices: [],
      loadSpecieAdvices: false,
      adviceSucces : false,
      adviceEchec : false,
      user : "",
    };
  },
  mounted() {
    this.adviceSucces = true,
    this.adviceEchec = false,
    this.getSpecieAdviceBySpecieId(this.$route.params.id);
  },
  methods :{
    async getSpecieAdviceBySpecieId(specieId) {
      try {
        await speciesStore.getSpecieAdviceBySpecieId(specieId);
        this.specieAdvices = speciesStore.$state.specieAdvices.data;
        this.loadSpecieAdvices = true;
      } catch (e) {
        console.log(e);
      }
    },

    async addAdvice(message){ // Cette methode va rajouter le conseil de l'user dans l'espèce ciblé
      this.user = await decodeToken(useCookie("tokenAuth").value)
      await speciesStore.postAddSpecieAdvice(this.user.userId, this.$route.params.id, message)
    },
    async console(modelMessage){
      console.log(modelMessage)

    }
  }
}
</script>

<style>

</style>
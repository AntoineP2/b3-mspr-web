export const useSpeciesStore = defineStore("speciesStore", {
  state: () => {
    return {
      species : "",
      specieAdvices : "",
      postSpecieAdviceStatus: "",
    };
  },

  actions: {

    // ------------------ GET -------------------

    async getAllSpecies() {
      // Fonctionnelle
      this.species = await useFetch(
        `http://localhost:3005/plant/getAllSpecies`
      );
    },

    async getSpecieAdviceBySpecieId(specieId) {
      // Fonctionnelle
      this.specieAdvices = await useFetch(
        `http://localhost:3005/plant/getSpecieAdvicesBySpecieId?specieId=${specieId}`
      );
    },


    // ------------------ POST -------------------

    async postAddSpecieAdvice(userId, specieId, advice) {
      // Pas testé
      this.postSpecieAdviceStatus = await useFetch(
        `http://localhost:3005/plant/addSpecieAdvice`,
        {
          method: "POST",
          body: JSON.stringify({
            userId: userId,
            specieId: specieId,
            advice: advice,
          }),
        }
      );
    },
  },
});

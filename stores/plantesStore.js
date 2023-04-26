export const usePlantesStore = defineStore("plantesStore", {
  state: () => {
    return {
      ID: "",
      ownerId: "",
      guardId: "",
      annonceId: "",
      plantName: "",
      plantDescription: "",
      plantPicture: "",
      // HEYYY
      plants: "",
    };
  },

  actions: {
    async delPlantById(id) {
      await useFetch("http://localhost:3005/plant/delPlant");
    },

    async getPlantsByAnnonce(annonceId) {
      this.plants = await useFetch(
        `http://localhost:3005/plant/plantsByAnnonce?annonceId=${annonceId}`
      );
    },

    async postAddPlant(ownerId, plantName, plantDescription, plantPicture) {
      this.postAddPlant = await useFetch(
        `http://localhost:3005/plant/addPlant`,
        {
          method: "POST",
          body: JSON.stringify({
            ownerId: ownerId,
            plantName: plantName,
            plantDescription: plantDescription,
            plantPicture: plantPicture,
          }),
        }
      );
    },
  },
});

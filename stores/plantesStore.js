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
      advice: "",
    };
  },

  actions: {
    async delPlantById(id) {
      // Pas testé
      await useFetch("http://localhost:3005/plant/delPlant");
    },

    async getPlantsByAnnonce(annonceId) {
      // Fonctionnelle
      this.plants = await useFetch(
        `http://localhost:3005/plant/plantsByAnnonce?annonceId=${annonceId}`
      );
    },

    async getAdviceByPlantId(plantId) {
      // Fonctionnelle
      return await useFetch(
        `http://localhost:3005/plant/adviceByPlantId?plantId=${plantId}`
      );
    },

    async postAddPlant(ownerId, plantName, plantDescription, plantPicture) {
      // Pas testé
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

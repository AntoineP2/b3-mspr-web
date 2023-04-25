export const useAnnoncesStore = defineStore("annoncesStore", {
  state: () => {
    return {
      ID: "",
      ownerId: "",
      guardId: "",
      annonceTitle: "",
      startDate: "",
      endDate: "",
      plantCount: "",
      location: "",
      annonceDescription: "",
    };
  },

  actions: {
    async getAllAnnonces() {
      this.allAnnonces = await useFetch(
        "http://localhost:3005/annonce/allAnnonces"
      );
    },

    async delAnnonceById(id) {
      await useFetch("http://localhost:3005/annonce/delAnnonce");
    },

    async getAnnoncesByUser(ownerId) {
      this.userAnnonce = await useFetch(
        "http://localhost:3005/annonce/annoncesByUser"
      );
    },

    async postAddAnnonce(
      ownerId,
      startDate,
      endDate,
      plantCount,
      annonceDescription,
      location,
      annonceTitle
    ) {
      this.addAnnonce = await useFetch(
        `http://localhost:3005/annonce/addAnnonce`,
        {
          method: "POST",
          body: JSON.stringify({
            ownerId: ownerId,
            startDate: startDate,
            endDate: endDate,
            plantCount: plantCount,
            annonceDescription: annonceDescription,
            location: location,
            annonceTitle: annonceTitle,
          }),
        }
      );
    },
  },
});

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
      //heyyyyyy
      annonces: "",
      annonce: "",
    };
  },

  actions: {
    async getAllAnnonces() {
      this.annonces = await useFetch(
        "http://localhost:3005/annonce/allAnnonces"
      );
    },

    async delAnnonceById(id) {
      await useFetch("http://localhost:3005/annonce/delAnnonce");
    },

    async getAnnonceById(id) {
      this.annonce = await useFetch(
        `http://localhost:3005/annonce/annoncesById?ID=${id}`
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

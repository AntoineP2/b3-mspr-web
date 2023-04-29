<template>
  <v-card variant="tonal" class="w-3/5">
    <v-container>
      <v-form v-model="valid">
        <v-text-field
          v-model="annonceTitle"
          :rules="annonceTileRules"
          :counter="20"
          label="Titre de l'annonce"
          required
          class="green--text text--lighten-2"
        ></v-text-field>
        <v-textarea
          v-model="annonceDescription"
          :rules="annonceDescriptionRules"
          label="Description"
          :counter="200"
          required
          class="green--text text--lighten-2"
        ></v-textarea>
        <v-text-field
          v-model="plantCount"
          :rules="plantCountRules"
          label="Entrer votre nombre de plantes"
          required
          class="green--text text--lighten-2"
        ></v-text-field>
        <div class="flex">
          <v-text-field
            type="date"
            label="Date de Début"
            v-model="startDate"
            class="mr-2"
          ></v-text-field>
          <v-text-field
            type="date"
            label="Date de Fin"
            v-model="endDate"
          ></v-text-field>
        </div>
        <v-text-field
          v-model="location"
          :rules="locationRules"
          :counter="30"
          label="Adresse"
          required
          class="green--text text--lighten-2"
        ></v-text-field>
        <v-text-field
          v-model="urlImage"
          :rules="urlImageRules"
          label="URL de votre image"
          required
          class="green--text text--lighten-2"
        ></v-text-field>

        <div class="flex justify-center">
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="
              $emit(
                'addAnnonce',
                startDate,
                endDate,
                plantCount,
                annonceDescription,
                location,
                annonceTitle,
                urlImage
              )
            "
            >Poster l'annonce</v-btn
          >
        </div>
      </v-form>
    </v-container></v-card
  >
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      plantCount: "",
      location: "",
      startDate: "",
      urlImage: "",
      endDate: "",
      annonceTitle: "",
      annonceDescription: "",
      showPassword: false,
      annonceTileRules: [
        (value) => !!value || "Nom d'annonce requit",
        (value) =>
          value?.length <= 20 || "L'annonce doit avoir moins de 20 caractères.",
      ],
      plantCountRules: [
        (value) => !!value || "Nombre de plantes requit",
        (value) =>
          value?.length <= 2 ||
          "Le nombre de plantes doit être inférieur à 99.",
        (value) =>
          /^\d+$/.test(value) || "Veuillez saisir uniquement des chiffres",
      ],
      locationRules: [
        (value) => !!value || "Adresse requise",
        (value) =>
          value?.length <= 30 || "L'adresse doit avoir moins de 30 caractères.",
      ],
      urlImageRules: [
        (value) => !!value || "Adresse requise",
        (value) =>
          value?.length <= 150 ||
          "L'url de l'image doit avoir moins de 50 caractères.",
      ],
      annonceDescriptionRules: [
        (value) => !!value || "Description requise.",
        (value) =>
          value?.length >= 20 ||
          "La description doit avoir au moins 20 caractères.",
        (value) =>
          value?.length <= 200 ||
          "L'annonce doit avoir moins de 200 caractères.",
      ],
    };
  },
};
</script>

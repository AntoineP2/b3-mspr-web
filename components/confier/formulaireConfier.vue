<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="titreGarde"
        label="Titre de la garde"
        :rules="titreGardeRules"
      ></v-text-field>

      <v-text-field
        v-model="descGarde"
        label="Description de la garde"
        :rules="descGardeRules"
      ></v-text-field>

      <v-text-field
        v-model="dateDebut"
        label="Date de début"
        :rules="dateDebutRules"
      ></v-text-field>

      <v-text-field
        v-model="dateFin"
        label="Date de fin"
        :rules="dateFinRules"
      ></v-text-field>

      <v-text-field
        v-model="horrairesGarde"
        label="Horraire de garde"
        :rules="horrairesGardeRules"
      ></v-text-field>

      <v-text-field
        v-model="nomDeLaPlante"
        label="Nom de la plante"
        :rules="nomDeLaPlanteRules"
      ></v-text-field>

      <v-file-input
        clearable
        label="Photo Plante (.jpeg, .png, .jpg)"
        variant="solo"
      ></v-file-input>

      <v-btn type="submit" block class="mt-2">CONFIER</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    dateDebut: "",
    dateDebutRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return false;

        return "La date ne doit contenir que des chiffres.";
      },
    ],
    dateFin: "",
    dateFinRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return false;

        return "La date ne doit contenir que des chiffres.";
      },
    ],

    horrairesGarde: "",
    horrairesGardeRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return false;

        return "Les horraires ne doivent contenir que des chiffres.";
      },
    ],
    titreGarde: "",
    titreGardeRules: [],

    descGarde: "",
    descGardeRules: [],
    
    nomDeLaPlante: "",
    nomDeLaPlanteRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Le nom de la plante ne doit contenir que des lettres.";
      },
    ],
  }),
};
</script>

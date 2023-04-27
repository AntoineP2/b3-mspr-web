<template>
  <v-card variant="tonal" class="mt-2">
    <v-img
      class="align-end text-white"
      height="200"
      :src="annonce.annoncePicture"
      cover
    >
      <v-card-title> {{ annonce.annonceTitle }}</v-card-title>
    </v-img>
    <v-card-subtitle class="mt-4"
      >Annonce posté par : {{ annonce.userPseudo }}
    </v-card-subtitle>
    <v-card-text> {{ annonce.annonceDescription }}</v-card-text>

    <v-card-actions>
      <v-btn color="green" @click="$emit('goTo', annonce.ID)">
        Voir annonce {{ annonce.ID }}
      </v-btn></v-card-actions
    >
  </v-card>
</template>


<script>
export default {
  props: {
    annonce: {
      type: Object,
      default: {},
    },
  },
};
</script>


<style>
</style>
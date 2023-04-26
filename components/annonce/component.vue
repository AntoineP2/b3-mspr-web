<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <v-card
        v-for="annonce in annonces"
        :key="annonce.ID"
        variant="tonal"
        class="mt-2"
      >
        <v-img
          class="align-end text-white"
          height="200"
          :src="annonce.annoncePicture"
          cover
        >
          <v-card-title> {{ annonce.annonceTitle }}</v-card-title>
        </v-img>
        <v-card-text> {{ annonce.annonceDescription }}</v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="$emit('goTo', annonce.ID)">
            Voir annonce {{ annonce.ID }}
          </v-btn></v-card-actions
        >
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    annonces: {
      type: Object,
      default: {},
    },
  },
};
</script>


<style>
</style>
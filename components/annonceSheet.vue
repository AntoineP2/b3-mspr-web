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
    <v-card-text>
      <p class="mt-4 mb-4">
        <Icon name="zondicons:calendar" size="20px" class="mr-2" />
        {{ annonce.startDate }} -
        {{ annonce.endDate }}
      </p>
      <p class="mt-4 mb-4">
        <Icon name="game-icons:carnivorous-plant" size="25px" class="" />
        {{ annonce.plantCount }} Plante(s)
      </p>
      {{ annonce.annonceDescription }}</v-card-text
    >

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
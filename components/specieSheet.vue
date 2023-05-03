<template>
  <v-card class="mt-2 hover:scale-105" variant="tonal">
    <v-img
      class="align-end text-white filter brightness-50 hover:brightness-100 transition duration-150 ease-in-out"
      height="200"
      :src="specie.img"
      cover
    >
      <v-card-title> {{ specie.name }}</v-card-title>
    </v-img>

    <v-card-actions>
      <v-btn color="green" @click="$emit('goTo', specie.ID)">
        Voir les conseils
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    specie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
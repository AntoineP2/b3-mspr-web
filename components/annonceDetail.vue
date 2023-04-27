<template>
  <div>
    <NuxtLink :to="`/annonces`">
      <svg width="32" height="32" viewBox="0 0 20 20" class="mb-2">
        <path
          fill="green"
          d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9H3.828z"
        />
      </svg>
    </NuxtLink>
    <v-carousel v-if="loadPicture" show-arrows="hover" height="500">
      <v-carousel-item
        v-for="plant in plants"
        :key="plant.ID"
        :src="plant.plantPicture"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-card variant="tonal" class="mt-5">
      <v-tabs v-model="tab" bg-color="primary" align-tabs="center">
        <v-tab value="one">Description</v-tab>
        <v-tab value="two">Date</v-tab>
        <v-tab value="three">Localisation</v-tab>
        <v-tab value="four">Les Plantes</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab" class="mt-5">
          <v-window-item value="one">
            <p class="text-center text-xl">
              {{ annonce.annonceDescription }}
            </p>
          </v-window-item>

          <v-window-item value="two">
            <p class="text-center text-xl">
              {{ annonce.startDate }} - {{ annonce.endDate }}
            </p>
          </v-window-item>

          <v-window-item value="three">
            <p class="text-center text-xl">
              {{ annonce.location }}
            </p>
          </v-window-item>
          <v-window-item value="four" class="grid grid-cols-3 gap-4">
            <PlantSheet
              v-for="plant in plants"
              :key="plant.ID"
              :plant="plant"
            />
          </v-window-item>
        </v-window>
      </v-card-text>
      <v-card-actions>
        <v-btn color="green"> Prendre en charge </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
  
  
  
  <script>
export default {
  data() {
    return {
      tab: "",
    };
  },
  props: {
    plants: {
      type: Object,
      default: {},
    },
    annonce: {
      type: Object,
      default: {},
    },
    loadPicture: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
  
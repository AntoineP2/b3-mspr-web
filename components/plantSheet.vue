<template>
  <v-card>
    <v-img
      class="align-end text-white"
      height="200"
      :src="plant.plantPicture"
      cover
    >
      <v-card-title>{{ plant.plantName }}</v-card-title>
    </v-img>
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab value="one">Description</v-tab>
      <v-tab value="two">Conseil</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab" class="mt-5">
        <v-window-item value="one">
          <p class="text-center">
            {{ plant.plantDescription }}
          </p>
        </v-window-item>
        <v-window-item value="two">
          <p v-for="advice in advices" :key="advice.ID">
            - {{ advice.advice }}
          </p>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import { usePlantesStore } from "~~/stores/plantesStore";
const plantesStore = usePlantesStore();

export default {
  data() {
    return {
      tab: "",
      advicesData: "",
      advices: "",
      loadingAdvice: false,
    };
  },
  mounted() {
    this.setAdvice();
  },
  methods: {
    async setAdvice() {
      try {
        this.advicesData = await plantesStore.getAdviceByPlantId(this.plant.ID);
        this.advices = this.advicesData.data;
        if (!this.advices)
          this.advices = [{ ID: 0, advice: "Pas de conseil pour le moment" }];
      } catch (e) {
        console.log(e);
      }
    },
  },
  props: {
    plant: {
      type: Object,
      default: {},
    },
    conseil: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style>
</style>
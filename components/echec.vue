<template>
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    color="error"
    class="pa-4 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="red"
      icon="mdi-close-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6"> {{  message }}</h2>

    <v-divider class="mb-4"></v-divider>
    <div class="text-end">
      <v-btn
        class="text-none"
        color="red"
        rounded
        variant="flat"
        width="120"
        @click="$router.push(route)"
      >
        Recommencer
      </v-btn>
    </div>
  </v-sheet>
</template>
  
  <script>
export default {
  props: {
    message: {
      type: Boolean,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>
  
  <style>
</style>
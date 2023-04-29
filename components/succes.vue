<template>
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">Annonce enregistrée avec succès !</h2>

    <v-divider class="mb-4"></v-divider>
    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        rounded
        variant="flat"
        width="90"
        @click="$router.push('/annonces')"
      >
        Validé
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style>
</style>
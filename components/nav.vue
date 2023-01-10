<template>
  <v-card>
    <div class="flex justify-between p-0 m-0 h-12">
      <div>
        <v-tabs>
          <NuxtLink to="/" ><v-tab>One</v-tab></NuxtLink>
          <NuxtLink to="/autrePage"><v-tab>Two</v-tab></NuxtLink>
          <v-tab>Three</v-tab>
          <v-tab>Four</v-tab>
        </v-tabs>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
};
</script>

<style>
</style>
<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">Bienvenue sur A-rose-je</p>
      <div class="text--primary">
        <p>
          Ici, vous découvrirez notre plateforme ainsi que les services que nous
          proposons.
        </p>
        <p>
          Aussi, vous pouvez vous inscrire gratuitement afin de bénéficier
          gratuitement de notre application !
        </p>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Se connecter
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
};
</script>

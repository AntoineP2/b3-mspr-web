<template>
  <v-card>
    <v-tabs fixed-tabs>
      <v-tab to="/">
        <Icon name="mdi-home-circle" size="30px" />
        <p>Acceuil</p></v-tab
      >
      <v-tab v-if="auth" to="/user/confier/">
        <Icon name="mdi-flower-tulip-outline" size="30px" />
        <p>Confier</p></v-tab
      >
      <v-tab to="/annonces/">
        <Icon name="mdi-alpha-a-circle-outline" size="30px" />
        <p>Annonces</p></v-tab
      >
      <v-tab v-if="auth" to="/user/compte/"
        ><Icon name="mdi-account-circle" size="30px" />
        <p>Compte</p></v-tab
      >
      <v-tab to="/user/advice/" v-if="auth"
        ><Icon name="game-icons:carnivorous-plant" size="35px" class="" />
        <p>Les Conseils</p></v-tab
      >
      <v-tab to="/about/"
        ><Icon name="mdi-information-outline" size="30px" />
        <p>A propos</p></v-tab
      >
      <v-tab v-if="!auth" to="/login/"
        ><Icon name="mdi-login" size="30px" />
        <p>Login / Inscription</p></v-tab
      >
      <v-tab v-if="auth" to="/user/logout/"
        ><Icon name="mdi-logout" size="30px" />
        <p>Deconnexion</p></v-tab
      >
    </v-tabs>
  </v-card>
</template>

<script>
// const config = useRuntimeConfig(); // Il aime pas ça visiblement
import isAuth from "../tools/utils/isAuth";
export default {
  data() {
    return {
      auth: false,
    };
  },
  watch: {
    $route() {
      this.isAuthentification();
    },
  },

  methods: {
    async isAuthentification() {
      this.auth = await isAuth(useCookie("tokenAuth").value);
    },
  },
};
</script>

<style></style>

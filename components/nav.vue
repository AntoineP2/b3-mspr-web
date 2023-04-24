<template>
  <v-card>
    <v-tabs fixed-tabs>
      <v-tab to="/">
        <Icon name="mdi-home-circle" size="30px" />
        <p>Acceuil</p></v-tab
      >
      <v-tab v-if="auth" to="/gardes">
        <Icon name="mdi-flower-tulip" size="30px" />
        <p>Garder</p></v-tab
      >
      <v-tab v-if="auth" to="/confier/">
        <Icon name="mdi-flower-tulip-outline" size="30px" />
        <p>Confier</p></v-tab
      >
      <v-tab to="/annonces/">
        <Icon name="mdi-alpha-a-circle-outline" size="30px" />
        <p>Annonces</p></v-tab
      >
      <v-tab v-if="auth" to="/conseils/"
        ><Icon name="mdi-thought-bubble-outline" size="30px" />
        <p>Conseils</p></v-tab
      >
      <v-tab v-if="auth" to="/compte/"
        ><Icon name="mdi-account-circle" size="30px" />
        <p>Compte</p></v-tab
      >
      <v-tab to="/autrePage/"
        ><Icon name="mdi-information-outline" size="30px" />
        <p>A propos</p></v-tab
      >
      <v-tab v-if="!auth" to="/login/"
        ><Icon name="mdi-login" size="30px" />
        <p>Login / Inscription</p></v-tab
      >
      <v-tab v-if="auth" to="/logout/"
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

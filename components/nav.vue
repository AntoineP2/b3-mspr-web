<template>
  <v-card>
    <v-tabs fixed-tabs>
      <v-tab to="/">
        <Icon name="🏡 " size="30px" />
        <p>Acceuil</p></v-tab
      >
      <v-tab to="/gardes">
        <Icon name="🪴 " size="30px" />
        <p>Gardes proposées</p></v-tab
      >
      <v-tab to="/autrePage"
        ><Icon name="💬 " size="30px" />
        <p>A propos</p></v-tab
      >
      <v-tab v-if="!auth" to="/login"
        ><Icon name="ion:ios-log-in" size="30px" />
        <p>Login / Inscription</p></v-tab
      >
      <v-tab v-if="auth" to="/logout"
        ><Icon name="ion:ios-log-in" size="30px" />
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

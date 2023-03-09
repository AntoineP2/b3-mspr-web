<template>
  <v-card>
    <v-tabs fixed-tabs>
      <v-tab to="/">
        <Icon name="octicon:home-fill-24" size="30px" />
        <p>Acceuil</p></v-tab
      >
      <v-tab to="/autrePage"
        ><Icon name="ion:chatbubble-outline" size="30px" />
        <p>A propos</p></v-tab
      >
      <v-tab v-if="!auth" to="/login"
        ><Icon name="ion:ios-log-in" size="30px" />
        <p>Login</p></v-tab
      >
      <v-tab v-if="auth" to="/login/welcom"
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
      console.log(useCookie("tokenAuth").value);
    },
  },
};
</script>

<style>
</style>
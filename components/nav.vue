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
      <v-tab v-if="!isAuth" to="/login"
        ><Icon name="ion:ios-log-in" size="30px" />
        <p>Login</p></v-tab
      >
      <v-tab v-if="isAuth" to="/login/welcom"
        ><Icon name="ion:ios-log-in" size="30px" />
        <p>Deconnexion</p></v-tab
      >
    </v-tabs>
  </v-card>
</template>

<script>
import { useUsersStore } from "~~/stores/usersStore";
const store = useUsersStore();
export default {
  data() {
    return {
      isAuth: false,
    };
  },
  watch: {
    $route() {
      this.isAuthentification();
    },
  },

  methods: {
    async isAuthentification() {
      // Si l'utilisateur est authentifié, on affiche le bouton deconnexion sinon, on affiche login
      try {
        await store.isAuthVerif(useCookie("tokenUser").value.token);
        this.isAuth = true;
      } catch (e) {
        this.isAuth = false;
      }
    },
  },
};
</script>

<style>
</style>
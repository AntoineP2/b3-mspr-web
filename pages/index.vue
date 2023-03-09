<template>
  <div>
    <h1>{{ salut }}</h1>
    <v-btn> UN BOUTON</v-btn>
  </div>
</template>
<script>
import { useUsersStore } from "~~/stores/usersStore";
const config = useRuntimeConfig();
export default {
  data() {
    return {
      salut: "",
      userName: "",
      userId: "",
    };
  },
  mounted() {
    this.isAuthentification();
  },
  methods: {
    async isAuthentification() {
      // try {
      //   await store.isAuthVerif(useCookie("tokenUser").value.token);
      //   this.userId = store.$state.isAuth.data.userId;
      //   await store.getUserById(this.userId);
      //   this.userName = store.$state.user.data[0].userPseudo;
      //   this.salut = "Désolé " + this.userName + " il n'y a pas grand chose !";
      // } catch (e) {
      //   this.salut = "Vous n'êtes pas authentifié";
      // }
    },
  },
};
</script>



  
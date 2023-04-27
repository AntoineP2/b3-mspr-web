<template>
    <div>
        <v-btn @click="logout">DECONNEXION</v-btn>
    </div>
  </template>
  
  <script>
  definePageMeta({
  middleware: ['auth'],
})
  export default {
    data() {
      return {
        users: [],
        tokenUser: "",
        userId: "",
        userPseudo: "",
      };
    },
    methods: {
       logout() {
          useCookie("tokenAuth").value = undefined
          this.$router.push("/login");
        // Cette méthode renvoie true ou false selon si l'utilisateur est authentifié ou non
      },
    },
  };
  </script>
  
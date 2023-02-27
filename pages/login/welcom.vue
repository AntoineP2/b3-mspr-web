<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
import { useUsersStore } from "~~/stores/usersStore";
const store = useUsersStore();

export default {
  data() {
    return {
      message: "",
      userName: "",
      userId: "",
    };
  },
  mounted() {
    this.isAuthentification();
  },
  methods: {
    async isAuthentification() {
      try {
        // await store.isAuthVerif(useCookie("tokenUser").value.token);
        // this.userId = store.$state.isAuth.data.userId;
        // await store.getUserById(this.userId);
        // this.userName = store.$state.user.data[0].userPseudo;
        // this.message =
        //   "Vous êtes authentifié, Bienvenue " + this.userName + " !";
      } catch (e) {
        this.message = "Vous n'êtes pas authentifié";
      }
    },
  },
};
</script>



  
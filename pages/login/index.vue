<template>
  <div>
    <LoginFormulaireLogin @auth="login" />
    <v-btn @click="setUsers">Get users</v-btn>
  </div>
</template>

<script>
import { useUsersStore } from "~~/stores/usersStore";
const store = useUsersStore();
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
    async setUsers() {
      await store.getAllUsers();
      this.users = store.$state.users.data[0].userMail;
    },

    // async login(pseudo, password) {
    //   // Cette méthode renvoie true ou false selon si l'utilisateur est authentifié ou non
    //   await store.login(pseudo, password);
    //   this.tokenUser = store.$state.auth.data;
    //   if (this.tokenUser) {
    //     await this.getUserId(this.tokenUser); // On passe le token en paramètre pour récupérer l'id de l'utilisateur et le pseudo
    //     useCookie("tokenUser", { maxAge: 30 }).value = {
    //       token: this.tokenUser,
    //       userId: this.userId,
    //       userPseudo: this.userPseudo,
    //     }; // On créer le cookie et on lui donne la valeur du token
    //     this.$router.push("/login/welcom");
    //   }
    // },

    async login(pseudo, password) {
      try {
        await store.login(pseudo, password);
        this.tokenUser = store.$state.auth.data;
        useCookie("tokenAuth", { maxAge: 30 }).value = this.tokenUser;
        this.$router.push("/login/welcom");
      } catch (e) {
        console.log(e);
      }
      // Cette méthode renvoie true ou false selon si l'utilisateur est authentifié ou non
    },

    async getUserId(token) {
      try {
        await store.isAuthVerif(token); // Grace a cette méthode, on vérifie que l'users soit connecté puis on récupère son id
        this.userId = store.$state.isAuth.data.userId;
        await store.getUserById(this.userId); // On récupère les données de l'utilisateur grâce à son id
        this.userId = store.$state.isAuth.data.userId;
        this.userPseudo = store.$state.user.data[0].userPseudo;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

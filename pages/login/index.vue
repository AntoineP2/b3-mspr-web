<template>
  <div>
    <LoginFormulaireLogin @auth="login" />
  </div>
</template>

<script>
import { useUsersStore } from "~~/stores/usersStore";
import decodeToken from "../../tools/utils/decodeToken";
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
    async login(pseudo, password) {
      try {
        await store.login(pseudo, password); // Si les identifiants sont corrects, on récupère le token
        this.tokenUser = store.$state.auth.data;
        useCookie("tokenAuth", { maxAge: 30 }).value = this.tokenUser; // on stock le token dans un cookie
        const valueToken = decodeToken(this.tokenUser); // On décode le token pour récupérer l'id de l'utilisateur par exemple
        console.log("Valeur token : ", valueToken);
        this.$router.push("/login/welcom"); // On redirige l'utilisateur vers la page de bienvenu
      } catch (e) {
        console.log(e);
      }
      // Cette méthode renvoie true ou false selon si l'utilisateur est authentifié ou non
    },
  },
};
</script>

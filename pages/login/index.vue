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
        await store.login(pseudo, password);
        this.tokenUser = store.$state.auth.data;
        useCookie("tokenAuth", { maxAge: 30 }).value = this.tokenUser;
        this.$router.push("/login/welcom");
      } catch (e) {
        console.log(e);
      }
      // Cette méthode renvoie true ou false selon si l'utilisateur est authentifié ou non
    },
  },
};
</script>

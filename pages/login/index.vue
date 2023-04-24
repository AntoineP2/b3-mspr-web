<template>
  <div>
    <LoginFormulaireLogin @auth="login" />
    <v-card title="Pas encore inscrit ?" variant="tonal" class="w-3/5 mt-9">
      <v-container>
        <div class="flex justify-center">
          <v-btn color="primary" to="/inscription"> INSCRIPTION </v-btn>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { useUsersStore } from "~~/stores/usersStore";
import decodeToken from "../../tools/utils/decodeToken";
import encodePassword from "~~/tools/utils/encodePassword";
const store = useUsersStore();
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      users: [],
      tokenUser: "",
      userId: "",
      userPseudo: "",
      dialog1: false,
      dialog2: false,
    };
  },
  methods: {
    async login(pseudo, password) {
      try {
        await store.login(pseudo, encodePassword(password));
        this.tokenUser = store.$state.auth.data;
        useCookie("tokenAuth", { maxAge: 3600 }).value = this.tokenUser; // 1h
        this.dialog1 = false;
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

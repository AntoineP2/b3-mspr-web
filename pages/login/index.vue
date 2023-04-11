<template>
  <div class="flex justify-center items-center">
    <v-row justify="center">
        <v-col cols="12" md="4">
           <!-- BOUTON CONNEXION -->
          <v-btn>
        Se connecter
        <v-dialog v-model="dialog1" activator="parent">
          <v-card>
            <v-card-text> <LoginFormulaireLogin @auth="login" /></v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog1 = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- BOUTON D'INSCRIPTION -->
      </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn>
        S'inscrire
        <v-dialog v-model="dialog2" activator="parent">
          <v-card>
            <v-card-text> <InscriptionFormulaire @inscription="inscription" /></v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog2 = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
        </v-col>
    </v-row>
      
  </div>
</template>

<script>
import { useUsersStore } from "~~/stores/usersStore";
import decodeToken from "../../tools/utils/decodeToken";
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
        await store.login(pseudo, password);
        this.tokenUser = store.$state.auth.data;
        useCookie("tokenAuth", { maxAge: 3600 }).value = this.tokenUser; // 1h
        this.dialog1 = false;
        this.$router.push("/login/welcom");
      } catch (e) {
        console.log(e);
      }
      // Cette méthode renvoie true ou false selon si l'utilisateur est authentifié ou non
    },
    async inscription(userPseudo, userMail, userPassword) {
        try{
            await store.inscription(userPseudo, userMail, userPassword) // On envoie les infos a la BDD pour verifier si l'user est déjà inscrit et on l'enregistre
            this.dialog1 = false;
        }
        catch(err){
            return console.log(err)
        }
      },
  },
};
</script>

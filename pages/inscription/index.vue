<template>
  <div class="flex justify-center pt-10">
    <InscriptionFormulaire @inscription="inscription" />
    <v-card color="red" class="mt-6" v-if="registerEchec"
      ><div class="flex justify-center p-3">
        <p>Identifiant ou Email déjà utilisé ! :(</p>
      </div></v-card
    >
    <v-card color="green" class="mt-6" v-if="registerComplet"
      ><div class="flex justify-center p-3">
        <p>Inscription Validé ! :)</p>
      </div></v-card
    >
  </div>
</template>
<script>
import { useUsersStore } from "~~/stores/usersStore";
import encodePassword from "~~/tools/utils/encodePassword";
const store = useUsersStore();
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      registerComplet: false,
      registerEchec: false,
    };
  },

  mounted() {
    this.registerComplet = false;
    this.registerEchec = false;
  },
  methods: {
    async inscription(userPseudo, userMail, userPassword) {
      try {
        const encodedPassword = encodePassword(userPassword); // On encode le mdp
        await store.inscription(userPseudo, userMail, encodedPassword); // On envoie les infos a la BDD pour verifier si l'user est déjà inscrit et on l'enregistre
        console.log("here ==> : ", store.$state.register.data.status);
        if (store.$state.register.data.status === 200) {
          this.registerEchec = false;
          this.registerComplet = true;
          this.$router.push("/login");
        }
      } catch (err) {
        this.registerEchec = true;
        this.registerComplet = false;
        return console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
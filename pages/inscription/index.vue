<template>
  <InscriptionFormulaire />
</template>
<script>
import { useUsersStore } from "~~/stores/usersStore";
import encodePassword from "~~/tools/utils/encodePassword";
const store = useUsersStore();
definePageMeta({
  middleware: ["auth"],
});
export default {
  methods: {
    async inscription(userPseudo, userMail, userPassword) {
      try {
        const encodedPassword = encodePassword(userPassword); // On encode le mdp
        await store.inscription(userPseudo, userMail, encodedPassword); // On envoie les infos a la BDD pour verifier si l'user est déjà inscrit et on l'enregistre
        this.$router.push("/login");
      } catch (err) {
        return console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
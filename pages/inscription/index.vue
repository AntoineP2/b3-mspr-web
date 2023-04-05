<template>
    <div>
      <InscriptionFormulaire @inscription="inscription" />
    </div>
  </template>
  
  <script>
  import { useUsersStore } from "~~/stores/usersStore";
  const store = useUsersStore();
  definePageMeta({
    middleware: ['auth'],
  })
  export default {
    data() {
      return {
        inscriptionRes : "",
      };
    },
    methods: {
      async inscription(userPseudo, userMail, userPassword) {
        try{
            await store.inscription(userPseudo, userMail, userPassword) // On envoie les infos a la BDD pour verifier si l'user est déjà inscrit et on l'enregistre
        }
        catch(err){
            return console.log(err)
        }

      },
    },
  };
  </script>
  
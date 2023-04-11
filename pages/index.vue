<template>
  <div>
    <h1>{{ salut }}</h1>
    <v-btn @click="encodePass(salut)"> Encode</v-btn>
  </div>
</template>
<script>
import { useUsersStore } from "~~/stores/usersStore";
import encodePassword from "~~/tools/utils/encodePassword";
export default {
  data() {
    return {
      salut: "mdp123",
      userName: "",
      userId: "",
    };
  },
  methods: {
    encodePass(pass){
      console.log(encodePassword(pass));
    },
  },
};
</script>



  
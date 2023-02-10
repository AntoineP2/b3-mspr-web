<template>
  <div>
    <LoginFormulaire />
    <v-btn @click="setUsers">Get tusers</v-btn>
  </div>
</template>

<script>
import { useUsersStore } from "~~/stores/usersStore";
const store = useUsersStore();
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async setUsers() {
      await store.getAllUsers();
      this.users = store.$state.users.data[0].userMail;
      console.log(this.users);
    },
  },
};
</script>

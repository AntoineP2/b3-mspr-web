export const useUsersStore = defineStore("usersStore", {
  state: () => {
    return {
      users: "",
    };
  },

  actions: {
    async getAllUsers() {
      this.users = await useFetch("http://localhost:3005/todos/");
    },

    async login(user, password) {
      const users = await useFetch("http://localhost:3005/todos/");
      const userFound = users.find(
        (login) => login.user === user && login.password === password
      );
      if (userFound) {
        this.$store.commit("setUser", userFound);
        return true;
      }
      return false;
    },
  },
});

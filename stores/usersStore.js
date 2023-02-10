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
  },
});

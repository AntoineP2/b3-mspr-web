export const useUsersStore = defineStore("usersStore", {
  state: () => {
    return {
      users: "",
      user: "",
      auth: "",
      register: "",
      isAuth: false,
    };
  },

  actions: {
    async getAllUsers() {
      this.users = await useFetch("http://localhost:3005/user/");
    },

    async login(user, password) {
      this.auth = await useFetch("http://localhost:3005/user/login", {
        method: "POST",
        body: JSON.stringify({ userPseudo: user, userPassword: password }),
      });
    },

    async isAuthVerif(token) {
      this.isAuth = await useFetch("http://localhost:3005/isAuth", {
        headers: { Authorization: `Bearer ${token}` },
      });
    },

    async getUserById(id) {
      this.user = await useFetch(`http://localhost:3005/user/id?id=${id}`);
    },
    async getReturnUserById(id) {
      return await useFetch(`http://localhost:3005/user/id?id=${id}`);
    },

    async inscription(userPseudo, userMail, userPassword) {
      this.register = await useFetch("http://localhost:3005/user/inscription", {
        method: "POST",
        body: JSON.stringify({
          userPseudo: userPseudo,
          userMail: userMail,
          userPassword: userPassword,
        }),
      });
    },
  },
});

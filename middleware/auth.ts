// import isAuth from "~~/tools/isAuth";

// export default defineNuxtRouteMiddleware(async (to) => {
//   const config = useRuntimeConfig();
//   //* On vérifie sur l'utilisateur est authentifié, si il ne l'est pas, on le redirige vers la page d'authentification
//   if (!(await isAuth(useCookie("tokenAuth").value)) && to.path === "/home") {
//     return navigateTo("/");
//   }
//   //* On vérifie sur l'utilisateur est authentifié, si il l'est, on le redirige vers la page d'accueil
//   if ((await isAuth(useCookie("tokenAuth").value)) && to.path === "/") {
//     return navigateTo("/home");
//   }
// });

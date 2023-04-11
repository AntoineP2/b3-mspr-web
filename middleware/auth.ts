import isAuth from "../tools/utils/isAuth";

export default defineNuxtRouteMiddleware(async (to) => {
  //* On vérifie sur l'utilisateur est authentifié, si il ne l'est pas, on le redirige vers la page d'authentification
  if (!(await isAuth(useCookie("tokenAuth").value)) && to.path === ("/logout" || "/login/welcom")) {
    return navigateTo("/login");
  }
  //* On vérifie sur l'utilisateur est authentifié, si il l'est, on le redirige vers la page d'accueil
  if ((await isAuth(useCookie("tokenAuth").value)) && to.path === ("/login")) {
    return navigateTo("/login/welcom");
  }
});
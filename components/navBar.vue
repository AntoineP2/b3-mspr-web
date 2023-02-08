<template>
  <v-app>
    <v-main>
      <v-bottom-navigation
        v-model="value"
        color="#4a7c59"
        grow
        horizontal
        shift
        temporary
      >
        <v-btn
          v-for="(route, key) in routes"
          ref="link"
          :key="'route' + key"
          :to="route.to"
          min-width="48"
          class="px-2"
        >
          <v-icon>{{ route.icon }}</v-icon>
          <span>{{ route.value }}</span>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    value: "home",
    routes: [
      { value: "Accueil", to: "/", icon: "mdi-home" },
      { value: "A propos", to: "/about", icon: "mdi-information-outline" },
      { value: "Connexion", to: "/login", icon: "mdi-login-variant" },
    ],
  }),
};
</script>

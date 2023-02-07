<template>
  <v-card>
    <v-tabs fixed-tabs>
      <v-tab to="/">
        <Icon name="octicon:home-fill-24" size="30px" />
        <p>Acceuil</p></v-tab
      >
      <v-tab to="/autrePage"
        ><Icon name="ion:chatbubble-outline" size="30px" />
        <p>A propos</p></v-tab
      >
      <v-tab to="/login"
        ><Icon name="ion:ios-log-in" size="30px" />
        <p>Login</p></v-tab
      >
    </v-tabs>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>
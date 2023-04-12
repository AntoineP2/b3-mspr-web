<template>
  <v-card variant="tonal" class="w-3/5">
    <v-container>
      <v-form v-model="valid">
        <v-text-field
          v-model="pseudo"
          :rules="nameRules"
          :counter="10"
          label="Pseudo"
          required
          class="green--text text--lighten-2"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          label="Mot de passe"
          required
          class="green--text text--lighten-2"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          class="green--text text--lighten-2"
        ></v-text-field>
        <div class="flex justify-center">
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="$emit('inscription', pseudo, email, password)"
            >S'inscrire</v-btn
          >
        </div>
      </v-form>
    </v-container></v-card
  >
</template>
  
  <script>
export default {
  data: () => ({
    valid: false,
    pseudo: "",
    password: "",
    showPassword: false,
    nameRules: [
      (value) => !!value || "Pseudo est requis.",
      (value) =>
        value?.length <= 10 || "Pseudo doit avoir moins de 10 caractères.",
    ],
    passwordRules: [
      (value) => !!value || "Mot de passe est requis.",
      (value) =>
        value?.length >= 6 || "Mot de passe doit avoir au moins 6 caractères.",
    ],
    email: "",
    emailRules: [
      (value) => !!value || "E-mail est requis.",
      (value) => /.+@.+\..+/.test(value) || "E-mail doit être valide.",
    ],
  }),
};
</script>

<style>
.green--text {
  color: #4caf50 !important;
}
.text--lighten-2 {
  font-weight: bold;
}
</style>
<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="pseudo"
            :rules="nameRules"
            :counter="10"
            label="Pseudo"
            required
            class="green--text text--lighten-2"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'visibility_off' : 'visibility'"
            :append-icon-cb="() => (showPassword = !showPassword)"
            label="Mot de passe"
            required
            class="green--text text--lighten-2"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            class="green--text text--lighten-2"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="$emit('inscription', pseudo, email, password)"
            >S'inscrire</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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
        value?.length >= 8 || "Mot de passe doit avoir au moins 8 caractères.",
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
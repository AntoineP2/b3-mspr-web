<template>
  <v-card variant="tonal" class="w-3/5">
    <v-container>
      <v-form v-model="valid">
        <v-text-field
          v-model="annonceName"
          :rules="annonceNameRules"
          :counter="10"
          label="Nom de l'annonce"
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
        <div class="flex justify-center">
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="$emit('auth', pseudo, password)"
            >Se connecter</v-btn
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
    annonceName: "",
    password: "",
    showPassword: false,
    annonceNameRules: [
      (value) => !!value || "Pseudo est requis.",
      (value) =>
        value?.length <= 10 || "Pseudo doit avoir moins de 10 caractères.",
    ],
    passwordRules: [
      (value) => !!value || "Mot de passe est requis.",
      (value) =>
        value?.length >= 1 || "Mot de passe doit avoir au moins 8 caractères.",
    ],
  }),
};
</script>

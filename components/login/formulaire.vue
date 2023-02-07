<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="pseudo"
              :rules="nameRules"
              :counter="10"
              label="Pseudo"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'visibility_off' : 'visibility'"
              :append-icon-cb="() => (showPassword = !showPassword)"
              label="Mot de passe"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn :disabled="!valid" color="primary">S'inscrire</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
  
  <script>
    export default {
      data: () => ({
        valid: false,
        pseudo: '',
        password: '',
        showPassword: false,
        nameRules: [
          value => !!value || 'Pseudo est requis.',
          value => (value?.length <= 10) || 'Pseudo doit avoir moins de 10 caractères.',
        ],
        passwordRules: [
          value => !!value || 'Mot de passe est requis.',
          value => (value?.length >= 8) || 'Mot de passe doit avoir au moins 8 caractères.',
        ],
        email: '',
        emailRules: [
          value => !!value || 'E-mail est requis.',
          value => /.+@.+\..+/.test(value) || 'E-mail doit être valide.',
        ],
      }),
    }
  </script>

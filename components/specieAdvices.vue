<template>
  <v-card
      class="mx-auto"
      max-width="70%"
    >
      <v-list lines="two" class="m-2">
        <v-list-header>Conseils {{ specieAdvices[0].name }}</v-list-header>
        <div v-for="advice in specieAdvices" :key="advice.ID">  
          <v-list-item
          prepend-avatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          :title="advice.userPseudo"
        >
          <template v-slot:subtitle>
           {{ advice.advice }}
          </template>
        </v-list-item>
        <v-divider></v-divider>
        </div> 
      </v-list>
    </v-card>
    <v-card     class="mx-auto mt-5"
      max-width="70%">
        <v-form>
        <v-card-text>Votre Conseil :</v-card-text>
        <v-container>
            <v-text-field v-model="modelMessage" clearable clear-icon="mdi-close-circle-outline" append-icon="mdi-send" @click:append="$emit('addAdvice', modelMessage), modelMessage =''"></v-text-field>
        </v-container>
      </v-form>
    </v-card>
</template>

<script>
export default {
    props : {
        specieAdvices : {
            type : Array,
            required : true
        },
        adviceEchec : {
            type : Boolean,
            required : true
        },
        adviceSuccess : {
            type : Boolean,
            required : true
        }    
    },
    data(){
        return{
            modelMessage : ""
        }
    }
}
</script>

<style>

</style>
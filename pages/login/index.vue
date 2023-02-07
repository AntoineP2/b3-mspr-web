<template>
    <LoginFormulaire />
    <v-btn @click="setUsers">Get users</v-btn>
</template>

<script>
import { useUsersStore } from '~~/stores/usersStore';
const store = useUsersStore();
export default {

    data() {
        return {
            users: [],
        }
    },
    methods: {
        setUsers() {
            this.users = store.getAllUsers()
            console.log(this.users)
        },
            
        }
    }
</script>

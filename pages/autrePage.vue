<!-- <script setup>
import { useUsersStore } from '~~/stores/usersStore';
const store = useusersStore();
</script>
<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          pseudo
        </th>
        <th class="text-left">
          password
        </th>
        <th class="text-left">
          email
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in users"
        :key="item.pseudo"
      >
        <td>{{ item.pseudo }}</td>
        <td>{{ item.password }}</td>
        <td>{{ item.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
  export default {
    getAllUsers() {
      store.getAllUsers();
    },
</script> -->
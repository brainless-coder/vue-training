<template>
  <h3>The List of all the Users</h3>
  <br>
  <div>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Password</th>
          <th>Role</th>
          <!-- <th>Delete User</th> -->
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.username">
        <tr>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.role }}</td>
          <!-- <td><button class="btn btn-outline-danger" @click="deleteUser">Delete User</button></td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      users: this.$store.getters.getUsers,
    };
  },
  methods: {
    deleteUser(e) {
      console.log(e);
      
    }
  },
};
</script>

<style>
th, td {
  padding: 2px 10px;
}
</style>

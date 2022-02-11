<template>
  <h1>Register Page</h1>
  <form action="POST" @submit="register">
    <label for="username">Username</label>
    <input type="text" v-model="username" ref="username" />
    <br />
    <label for="pwd">Password</label>
    <input type="password" v-model="pwd" ref="pwd" />
    <br />
    <label for="cnf_pwd">Confirm Password</label>
    <input type="password" ref="cnf_pwd" v-model="cnf_pwd" />
    <br />
    <div class="text-danger">{{ err }}</div>
    <button class="btn btn-primary">Create User</button>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      pwd: "",
      cnf_pwd: "",
      users: [],
      err: "",
    };
  },
  methods: {
    register(e) {
      // register ke baad login pe jaana hai
      e.preventDefault();
      this.err = "";
      if (this.pwd !== this.cnf_pwd) {
        this.err = "Both the passwords should be same";
        return;
      }
      let user = {
        username: this.username,
        password: this.pwd,
        role: "user",
      };
      this.$store.dispatch("register", user).then(() => {
        // this.$router.push("/login");
        alert('User created successfully');
        this.username = "";
        this.pwd = "";
        this.cnf_pwd = "";
      });
    },
  },
};
</script>

<style></style>

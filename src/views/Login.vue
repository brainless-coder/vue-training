<template>
  <h1>Login Page</h1>
  <form method="GET" @submit="login">
    <div class="form-group row">
      <label for="username" class="col-sm-2 col-form-label">Username</label>
      <div class="col-sm-10">
        <input
          v-model="username"
          type="text"
          class="form-control"
          ref="username"
          placeholder="Enter your Username"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="password" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input
          v-model="password"
          type="password"
          class="form-control"
          ref="password"
          placeholder="Enter your Password"
        />
      </div>
    </div>
    <div class="text-danger">{{ err }}</div>
    <br />
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Log in</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      err: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.err="";
      if (this.username !== "" && this.password !== "") {
        let currUser = {
          username: this.username,
          password: this.password,
        };

        let users = this.$store.getters.getUsers;
        let userExists = false;
        // console.log(users, currUser);
        users.forEach((user) => {
          console.log(user);
          if (user.username === currUser.username) {
            userExists = true;
            if (user.password === currUser.password) {
              // login karwake dashboard pe bhejo
              this.$store.dispatch('login', currUser).then(() => {
                this.$router.push('/dashboard');
              })
            } else {
              this.err = "Incorrect password";
            }
          }
        });
        if (!userExists) this.err = "User does not exists";
      } else {
        this.err = "All the fields are required";
      }
    },
  },
};
</script>

<style></style>

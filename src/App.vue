<template>
  <link
    type="text/css"
    rel="stylesheet"
    href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"
  />
  <link
    type="text/css"
    rel="stylesheet"
    href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"
  />
  <div id="nav" class="bg-dark">
    <router-link to="/">Home</router-link> <span class="routeSeparator"> | </span>
    <router-link to="/about">About</router-link> <span class="routeSeparator"> | </span>
    <router-link to="/register">Register</router-link> <span class="routeSeparator"> | </span> 
    <router-link to="/login">Login</router-link> <span class="routeSeparator"> | </span> 
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

.routeSeparator {
  font-weight: bold;
  color: #fff;
  /* letter-spacing: 10px; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <h1>Hello {{ getLoggedInUser.username }}</h1>
  <div>{{ quote }}</div>
  <br><br>
  <div v-if="getLoggedInUser.role === 'admin'">
    <AdminDashboard />
  </div>
  <br><br>
  <button type="button" class="btn btn-warning" @click="logout">Logout</button>
</template>

<script>
import AdminDashboard from "../components/AdminDashboard.vue";

export default {
  name: "Login",
  components: {
    AdminDashboard,
  },
  data() {
    return {
      quote: "",
    };
  },
  async mounted() {
    // console.log("inside mounted", this.quote);
    this.quote = await this.getQuote();
    console.log(this.quote);
    setInterval(async () => {
      this.quote = await this.getQuote();
    }, 1000 * 120);
  },
  methods: {
    logout(e) {
      e.preventDefault();
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    async getQuote() {
      // fetch("https://api.quotable.io/random")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     this.quote = data.content;
      //   });
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      return data.content;
    },
  },
  computed: {
    getLoggedInUser() {
      console.log(this.$store.getters.getLoggedInUser);
      return this.$store.getters.getLoggedInUser;
    },
  },
};
</script>

<style></style>

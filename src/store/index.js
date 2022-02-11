import { createStore } from "vuex";

export default createStore({
  state: {
    users: [{
      username: "admin",
      password: "admin",
      role: "admin"
    }],
    loggedInUser: null,
    token: null
  },
  mutations: {
    updateToken(state, payload) {
      state.token = payload;
    },
    register(state, payload) {
      state.users.push(payload);
    }, 
    login(state, payload) {
      state.users.forEach(user => {
        if (user.username === payload.username) {
          state.loggedInUser = user;
        }
      })
    },
    logout(state) {
      state.loggedInUser = null;
    }
  },
  actions: {
    register(context, payload) {
      return new Promise(resolve => {
        context.commit('register', payload);
        resolve();
      });
    },
    login(context, payload) {
      return new Promise(resolve => {
        context.commit('login', payload);
        context.commit('updateToken', 'secretToken');
        resolve();
      });
    },
    logout(context) {
      context.commit('logout');
      context.commit('updateToken', null);
    }
  },
  getters: {
    getLoggedInUser(state) {
      return state.loggedInUser;
    },
    getUsers(state) {
      return state.users;
    },
    getToken(state) {
      return state.token;
    }
  },
  modules: {},
});

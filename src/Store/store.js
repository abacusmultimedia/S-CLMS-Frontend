import { createStore } from 'vuex';

export default createStore({
  modules: {
    auth: {
      state: {
        isAuthenticated: false,
        user: null,
      },
      mutations: {
        setAuth(state, { isAuthenticated, user }) {
          state.isAuthenticated = isAuthenticated;
          state.user = user;
        },
      },
      actions: {
        login({ commit }, user) {
          // Simulate asynchronous login (replace with actual login logic)
          commit('setAuth', { isAuthenticated: true, user });
        //   setTimeout(() => {
        //   }, 1000);
        },
        logout({ commit }) {
          // Perform logout logic
          commit('setAuth', { isAuthenticated: false, user: null });
        },
      },
      getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        currentUser: (state) => state.user,
      },
    },
    // Add more modules if needed
  },
});

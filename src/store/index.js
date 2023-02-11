import { createStore } from "vuex";

export default createStore({
  state: {
    userName: "",
    userEmail: "",
    password: "",
  },
  getters: {
    isLoggedIn(state) {
      if (state.userName && state.userEmail && state.password) {
        return true;
      } else return false;
    },
  },
  mutations: {
    ADD_NEW_USER(state, userDetails) {
      state.userName = userDetails.name;
      state.userEmail = userDetails.email;
      state.password = userDetails.password;
    },
  },
  actions: {
    // userDetails has to be an object
    addNewUser(context, userDetails) {
      context.commit("ADD_NEW_USER", userDetails);
    },
  },
  modules: {},
});

// In react, I would have a storage/server. Then state object for username, email and password
// so before the page renders, I check if the user has an account by getting details from localstorage
// Otherwise we show signup page
//I can also create a boolean state for hasUserSignedUp

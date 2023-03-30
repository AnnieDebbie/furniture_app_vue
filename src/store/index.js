import { createStore } from "vuex";

export default createStore({
  state: {
    userDetails: {},
  },

  mutations: {
    ADD_NEW_USER(state, userInfo) {
      state.userDetails.userName = userInfo.name;
      state.userDetails.userEmail = userInfo.email;
      state.userDetails.password = userInfo.password;
    },
  },
  actions: {
    // userDetails has to be an object
    addNewUser(context, userInfo) {
      context.commit("ADD_NEW_USER", userInfo);
    },
  },
  modules: {},
});

// In react, I would have a storage/server. Then state object for username, email and password
// so before the page renders, I check if the user has an account by getting details from localstorage
// Otherwise we show signup page
//I can also create a boolean state for hasUserSignedUp

import Vue from "vue";
import Vuex from "vuex";
import UserService from "./Service/UserService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    error: "",
  },
  mutations: {
    setUsersMutation: (state, users) => {
      state.users = users;
    },
    setErrorMutation: (state, error) => {
      state.error = error;
    },
  },
  actions: {
    setUsersAction: (context) => {
      UserService.getUsers()
        .then((res) => {
          context.commit("setUsersMutation", res);
        })
        .catch((err) => {
          context.commit("setErrorMutation", err);
        });
    },
    addUserAction: (context, user) => {
      UserService.insertUser(user).then(() => {
        context.dispatch("setUsersAction");
      });
    },
    deleteUserAction: (context, _id) => {
      UserService.deleteUser(_id).then(() => {
        context.dispatch("setUsersAction");
      });
    },
  },
});

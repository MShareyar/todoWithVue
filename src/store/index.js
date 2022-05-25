import todo from "./modules/todo/index";

import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state:{},
  mutations:{},
  actions:{},
  getters:{},
  modules:{
    todo,
  }
});
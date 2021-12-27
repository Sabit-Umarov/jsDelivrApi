import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowModal: false,
    modalPackage: {
      name: "sdasd",
    },
  },
  mutations: {
    updateShowModal(state, payload) {
      state.isShowModal = payload;
    },
    updateModalPackage(state, packageInfo = {}) {
      state.modalPackage = packageInfo;
    },
  },
  actions: {},
  modules: {},
});

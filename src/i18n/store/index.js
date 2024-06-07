const state = {
  locale: "es",
};

const mutations = {
  SET_LOCALE(state, locale) {
    state.locale = locale;
  },
};

const actions = {
  setLocale({ commit }, locale) {
    commit("SET_LOCALE", locale);
  },
};

const getters = {
  locale: (state) => state.locale,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

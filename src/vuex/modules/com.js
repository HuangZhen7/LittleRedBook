import * as types from '../types'

const state = {
  showSidebar: false,
  token:'',
  userID:'',
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.ADD_COUNT] (state, token) { // 第一个参数为 state 用于变更状态 登录
    localStorage.setItem("token", token);
    state.token = token;
  },
  [types.REMOVE_COUNT] (state, token) { // 退出登录
    localStorage.removeItem("token", token);
    state.token = token;
  },
}

const actions = {
  setShowSidebar({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }

} 

const getters = {
  showSidebar: state => state.showSidebar
}

export default{
  state,
  mutations,
  actions,
  getters
}
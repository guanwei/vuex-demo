import Vue from 'vue'

export default {
  login (state, userInfo) {
    Vue.set(state, 'userInfo', userInfo)
  },
  setMemberInfo (state, memberInfo) {
    Vue.set(state, 'userStatus', memberInfo.userStatus)
    Vue.set(state, 'vipLevel', memberInfo.vipLevel)
  }
}
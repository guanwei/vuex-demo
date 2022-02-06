export default {
  buyVip ({ commit }, vip) {
    return new Promise(resolve => {
      // mock api 交互
      setTimeout(() => {
        // 修改本地state
        commit("setMemberInfo", {
          userStatus: vip.userStatus,
          vipLevel: vip.vipLevel
        })
        resolve("购买成功")
      }, 1000)
    })
  },
  getFreeVip ({ commit, state }) {
    // mock api 交互
    return new Promise(resolve => {
      setTimeout(() => {
        if (state.userStatus === 0) {
          commit("setMemberInfo", {
            userStatus: 1,
            vipLevel: 0
          })
          resolve("分享成功，您已获得一个月的高级vip会员")
        } else {
          resolve("分享成功")
        }
      }, 1000)
    })
  }
}
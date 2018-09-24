import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: null,
		uid: null
	},
	mutations: {
		setLogin(state, userInfo) {
			state.hasLogin = true;
			state.uid = userInfo.uid;
			state.userInfo = userInfo;
		},
		setLogout(state) {
			state.hasLogin = false
			state.uid = null
			state.userInfo = null
		}
	}
})

export default store

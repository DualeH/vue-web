import Vue from 'vue'
import Vuex from 'vuex'
import localStore from 'store'		// 浏览器存储

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		sidebarShow: true,
		navName: '',
		user: {},
		permission: {}
	},
	mutations: {
		sidebarShow (state, params) {
			state.sidebarShow = params.sidebarShow;
		},
		navName(state, params) {
			state.navName = params.navName;		// 切换导航和菜单
		},
		user(state, params) {
			localStore.set('user', params);
			state.user = params;
		},
		permission(state, params) {
			let permission = {};
			// 转换格式
			if (Array.isArray(params)) {
				params.forEach(v => {
					if (!permission[v.module]) {
						permission[v.module] = {}
					}
					permission[v.module][v.action] = true;
				});
			}
			localStore.set('permission', permission);
			state.permission = permission;
		}
	},
	actions: {
		// ModifyState(state, params) {
		// 	commit('ModifyState', params)
		// }
	},
	getters: {
		// 登录的个人信息
		user: (state) => {
			return state.user || localStore.get('user')
		}
	}
})

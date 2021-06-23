import Vue from 'vue'
import Vuex from 'vuex'
import todolist from '../pages/todolist/store'
import home from '../pages/home/store'
//1.安装Vuex
Vue.use(Vuex)

//2.生成一个store的实例,注意,整个应用只能有一个store的实例
const store = new Vuex.Store({
	state: {
		list: [
			{
				id: 1,
				task: 'play games'
			}
		]
	},
	// getters 相当于store的计算属性
	getters: {
		// state是当前组件的state
		total(state) {
			return state.list.length;
		}
	},
	// 正常的异步处理程序
	// actions: {
	// 	async loadItem({ commit }) {
	// 		const result = await axios.get('http://127.0.0.1:3000')
	// 		commit('loadItem', result.data)
	// 	}
	// },
	// actions 处理异步程序
	actions: {
		// 一般写法
		/*loadItem(item) {
			console.log(item);
			let data = { id: 100, task = '计算机专业' }
			commit: ƒ boundCommit(type, payload, options)
			item.commit('loadItem', data)
		},*/

		// es6 对象结构解析
		loadItem({ commit }) {
			// console.log(item);
			let data = [{ id: new Date(), task: 'not to play games' }];
			// commit: ƒ boundCommit(type, payload, options)
			commit('loadItem', data);
		}
	},
	mutations: {
		// state 是当前store的state payload是传来的参数
		loadItem(state, payload) {
			// console.log(state);
			// console.log(payload);
			state.list = payload;
		},
		// 添加任务
		addItem(state, payload) {
			state.list.push(payload);
		},
		// 删除任务
		delItem(state, payload) {
			// console.log(state.list.filter(payload));
			// const list = state.list.filter(item => item.id != payload)
			state.list = state.list.filter((item) => {
				return item.id != payload;
			});
		}
	}
})

//3.导出store的实例
export default store

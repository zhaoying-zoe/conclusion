import Vuex from 'vuex';
import Vue from 'vue';

// 安装vuex
Vue.use(Vuex);

// 生成store实例,只能有一个store
const store = new Vuex.store({
  state: {
    list: [],
  }
})

// 导出store
export default store;
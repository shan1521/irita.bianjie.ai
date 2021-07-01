import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		currentIndex: sessionStorage.getItem('currentIndex')
	},
	mutations: {
		currentIndex(state,currentIndex){
			state.currentIndex = currentIndex;
			sessionStorage.setItem('currentIndex',currentIndex);
		}
	}
})

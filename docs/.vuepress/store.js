import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		currentIndex: 1
	},
	mutations: {
		currentIndex(state,currentIndex){
			state.currentIndex = currentIndex;
			/*if(window.sessionStorage){
                sessionStorage.setItem('currentIndex',currentIndex);
            }*/
		}
	}
})

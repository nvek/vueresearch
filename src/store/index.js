import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import todo from './modules/todo'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        post,
        todo
    }

});

export default store;

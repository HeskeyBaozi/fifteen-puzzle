import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import {registerModel} from './util';
import count from './models/count';

Vue.use(Vuex);

const store = new Store();
registerModel(store, count);

export default store;

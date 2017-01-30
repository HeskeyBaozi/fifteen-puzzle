import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import {registerModel} from './util';
import game from './models/game';

Vue.use(Vuex);

const store = new Store();
registerModel(store, game);

export default store;

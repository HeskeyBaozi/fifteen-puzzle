import {enhanceM} from './enhance_models';

export function registerModel(store, model) {
    store.registerModule(model.namespace, enhanceM(model));
}
export function enhanceM({
    namespace,
    state,
    actions,
    mutations,
    getters
}) {
    return {
        state,
        actions: createEnhancedObject(actions, namespace),
        mutations: createEnhancedObject(mutations, namespace),
        getters: createEnhancedObject(getters, namespace)
    };
}

function createEnhancedObject(rawObject, prefix) {
    const result = {};
    Object.keys(rawObject).forEach(key => {
        result[`${prefix}/${key}`] = rawObject[key];
    });
    return result;
}
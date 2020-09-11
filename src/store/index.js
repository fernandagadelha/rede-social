const { createStore } = require("redux");
const { default: ReducerRaiz } = require("../reducers");

const store = createStore(ReducerRaiz);

export default store;
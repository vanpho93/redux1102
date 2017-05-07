import reducer from './reducer/reducer';

const redux = require('redux');

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line
));

export default store;

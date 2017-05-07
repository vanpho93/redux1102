import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import List from './List';

const redux = require('redux');

const mangDefault = [
    { id: 1, content: 'ReactJS' },
    { id: 2, content: 'NodeJS' },
    { id: 3, content: 'React Native' },
    { id: 4, content: 'PHP' },
    { id: 5, content: 'Android' }
];

const mangReducer = (state = mangDefault, action) => {
    if (action.type === 'XOA') {
        return state.filter(e => e.id !== action.id);
    }
    if (action.type === 'THEM') {
        return [action.item, ...state];
    }
    return state;
};

const isUpdatingReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_IS_UPDATING') return !state;
    return state;
};

const reducer = redux.combineReducers({
    mang: mangReducer, isUpdating: isUpdatingReducer
});

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const App = () => (
    <div>
        <h2>App component</h2>
        <List />
    </div>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')// eslint-disable-line
);


// babel-preset-stage-0

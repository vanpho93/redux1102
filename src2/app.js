import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import List from './List';

const redux = require('redux');

const defaultState = {
    mang: [
        { id: 1, content: 'ReactJS' },
        { id: 2, content: 'NodeJS' },
        { id: 3, content: 'React Native' },
        { id: 4, content: 'PHP' },
        { id: 5, content: 'Android' }
    ],
    isUpdating: false
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'XOA') {
        return { ...state, mang: state.mang.filter(e => e.id !== action.id) };
    }
    if (action.type === 'THEM') {
        return { ...state, mang: [action.item, ...state.mang] };
    }
    if (action.type === 'TOGGLE_IS_UPDATING') {
        return { ...state, isUpdating: !state.isUpdating };
    }
    return state;
};

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

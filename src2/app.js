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
    ]
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'XOA') {
        return { mang: state.mang.filter(e => e.id !== action.id) };
    }
    return state;
};

const store = redux.createStore(reducer);

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

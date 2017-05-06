import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Box from './components/Box';

const redux = require('redux');

const App = () => (
    <div>
        <h2>App component</h2>
        <Box />
    </div>
);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')// eslint-disable-line
);

const reducer = (state = { value: 0 }, action) => {
    if (action.type === 'THEM') return { value: state.value + 1 };
    if (action.type === 'BOT') return { value: state.value - 1 };
    return state;
};

const store = redux.createStore(reducer);

const state = store.getState();
console.log(state);
store.dispatch({ type: 'THEM' });
console.log(store.getState());
store.dispatch({ type: 'BOT' });
console.log(store.getState());
store.dispatch({ type: 'BOT' });
console.log(store.getState());

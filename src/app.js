import React from 'react';
import ReactDOM from 'react-dom';

const redux = require('redux');

const App = () => (
    <div>
        <h2>App component</h2>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);

/*
    action la 1 object co thuoc tinh type
    {
        type: 'ABCD',
        ...
    }
*/

const reducer = (state = 0, action) => {
    if (action.type === 'THEM') return state + 1;
    return state;
};

const store = redux.createStore(reducer);

const state = store.getState();
console.log(state);
store.dispatch({ type: 'THEM' });
console.log(store.getState());

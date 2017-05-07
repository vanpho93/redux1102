import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import List from './List';
import store from './redux/store';

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

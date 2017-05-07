import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TopBar from './TopBar';
import List from './List';
import store from './redux/store';

import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'; // eslint-disable-line
jQuery(document).ready(() => $(document).foundation()) // eslint-disable-line

const App = () => (
    <div>
        <TopBar />
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

import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const App = () => (
    <div>
        <h2>App component</h2>
        <List />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')// eslint-disable-line
);

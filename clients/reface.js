import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ControlNumbers from '../components/control-number/index';

function App() {
    return (
        <div>
            <h1>Hello, world.</h1>
            <ControlNumbers label={ 'Hello' } />
        </div>
    );
}

ReactDOM.render(App(), document.getElementById('root'));

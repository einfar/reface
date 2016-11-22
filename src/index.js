import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './Timer';

ReactDOM.render(<App />, document.getElementById('root'));


function tick() {
    ReactDOM.render(<Timer />, document.getElementById('timer'));
}

setInterval(tick, 1000);

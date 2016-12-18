import React, { Component } from 'react';

export default class Timer extends React.Component {
    render() {
        return (
            <div>
                <h1>Make Clock!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


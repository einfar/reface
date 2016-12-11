import {createStore} from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ControlNumbers from '../components/control-number/index';
import TextBlock from '../components/text-block/index';
import StyleCustom from '../components/style-custom/index';

function refaceReducer(state, action) { // 4
    state = state || {};
    if (action.type === fontSizeChange) {
        state = {
            'font-size': action.payload
        }
    }
    return state;
}

const fontSizeChange = 'FONT_SIZE_CHANGE';

/*{
    type: fontSizeChange,
    payload: 32
}*/

const store = createStore(refaceReducer); // 1

/*const unsubscribe = store.subscribe(function () { //2
    console.log('Reducer update!'); //5
    console.log(store.getState());
});*/

store.dispatch({type:"makeTest" /* makeTest - действие, которое произошло в системе */ }); // 3






let mainReducer = store.getState();

class App extends Component {


    constructor (props) {
        super(props);
        this.store = props.store;
        this.state = {fontSize: 16};
        this.fetchFontSize = this.fetchFontSize.bind(this);
    }

    fetchFontSize (fontsize) {
        this.store.dispatch({
            type:fontSizeChange,
            payload: fontsize
        });
    }

    componentDidMount() {
        console.log('Did mount');
        this.unsubscribe = this.store.subscribe(this.onFontSizeChange.bind(this));
    }

    onFontSizeChange  () {
        console.log('onFontSizeChange');
        this.setState({
            fontSize: this.store.getState()['font-size']
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world.</h1>
                <ControlNumbers label={ 'font-size:' } notify={ this.fetchFontSize } />
                <TextBlock />
                <StyleCustom fontSize={ this.state.fontSize } />
            </div>
        );
    }

}



ReactDOM.render(<App store={store} />, document.getElementById('root'));

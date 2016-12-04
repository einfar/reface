import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ControlNumbers from '../components/control-number/index';
import TextBlock from '../components/text-block/index';
import StyleCustom from '../components/style-custom/index';



class App extends Component {
    constructor (props) {
        super(props);
        this.state = {fontSize: '1rem'};
        this.onFontSizeChange = this.onFontSizeChange.bind(this);
    }



    onFontSizeChange  (target) {
        this.setState({
            fontSize: target
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world.</h1>
                <ControlNumbers label={ 'font-size:' } notify={ this.onFontSizeChange } />
                <TextBlock />
                <StyleCustom fontSize={ this.state.fontSize } />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));

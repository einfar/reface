import React, {Component} from 'react';

export default class ControlNumber extends Component {

    constructor (props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <label>{ this.props.label }</label>
                </div>
                <div>
                    <input type="number" onChange={ this.onChange } />
                </div>
            </div>
        );
    }

    onChange(event) {
        this.props.notify(event.target.value);
    }
}
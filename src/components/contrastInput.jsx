import React from 'react';

class ContrastInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: Math.floor(Math.random()*16777215).toString(16)};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="card">
                <br/>
                <div className="input-field">
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    <input value={this.state.value} onChange={this.handleChange} type="text" id={this.props.id}/>
                </div>
                <p> Color: {this.state.value}</p>
            </div>

        );
    }
}

export default ContrastInput;

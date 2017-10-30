import React from 'react';

class Contrast extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        if (this.refs.myInput !== null) {
            var input = this.refs.myInput;
            var inputValue = input.value;
            alert("Input is", inputValue);
        }
    }
    render() {
        return (
            <div className="section">
                <div className="row">
                    <h1 className="center">Contrast checker</h1>

                    <div className="card col l3 offset-l2" style={{ }}>
                        <div className="input-field">
                            <label htmlFor="f">Foreground</label>
                            <input ref="MyInput" onBlur="handleClick();" type="text" id="f"/>
                        </div>
                        <p> Woop! </p>
                    </div>

                    <div className="card col l3 offset-l2" style={{ }}>
                        <div className="input-field">
                            <label htmlFor="b">Foreground</label>
                            <input type="text" id="b"/>
                        </div>
                        <p> Woop! </p>
                    </div>

                </div>

                <div className="row">
                    <div className="card col l8 offset-l2" style={{ }}>
                        <h2> Together</h2>
                        <p> Woop! </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contrast;
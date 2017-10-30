import React from 'react';
import ContrastInput from "./contrastInput";

class Contrast extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col l3 offset-l2">
                    <ContrastInput/>
                </div>
                <div className="col l3 offset-l2">
                    <ContrastInput/>
                </div>
            </div>
        );
    }
}

export default Contrast;

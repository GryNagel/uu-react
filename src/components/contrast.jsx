import React from 'react';
import ContrastInput from "./contrastInput";

class Contrast extends React.Component {
    contrastCalculation(){
        return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black':'white';
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col l3 offset-l2">
                        <ContrastInput label="Foreground" id="f" />
                    </div>
                    <div className="col l3 offset-l2">
                        <ContrastInput label="Background" id="b" />
                    </div>
                </div>

                <div className="row">
                        <div className="card" style={{ background: 'red' }}>
                            <p style={{ color: 'yellow' }}> Hellur, this is text  </p>
                        </div>
                </div>
            </div>
        );
    }
}

export default Contrast;

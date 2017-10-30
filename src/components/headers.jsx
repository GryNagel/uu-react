import React from 'react';

const Headers = () => (
    <div>
        <div className="row">
            <div className="col l6 m6">
                <p style={{fontSize: 40}} className="teal-text"> Yay </p>
                <h1> <code>H1</code> tittel </h1>
                <h2> <code>H2</code> tittel </h2>
                <h3> <code>H3</code> tittel </h3>
                <h4> <code>H4</code> tittel </h4>
                <h5> <code>H5</code> tittel </h5>
                <h6> <code>H6</code> tittel </h6>
                <p>Hierarchic</p>
            </div>
            <div className="col l6 m6">
                <p style={{fontSize: 40}} className="red-text text-darken-2"> Nay </p>
                <h6> <code>H6</code> tittel </h6>
                <h4> <code>H4</code> tittel </h4>
                <h2> <code>H2</code> tittel </h2>
                <h3> <code>H3</code> tittel </h3>
                <h5> <code>H5</code> tittel </h5>
                <h1> <code>H1</code> tittel </h1>
                <p>A mess</p>
            </div>
        </div>

        <div className="row">
            <div className="col lg12">
                <p style={{fontSize: 40}} className="teal-text"> Sometimes </p>
                <div className="card col l2 m2 s12 center">
                    <h2>This is the left content</h2>
                    <p>Uses <code>H2</code></p>
                </div>
                <div className="card col l4 m4 s12 offset-l1  center">
                    <h1>This is the main content</h1>
                    <p>Not first in the HTML, but is still the main content. Uses <code>H1</code></p>
                </div>
                <div className="card col l2 m2 s12 offset-l1  center">
                    <h2>This is the right content</h2>
                    <p>Uses <code>H2</code></p>
                </div>
            </div>
        </div>
    </div>
);

export default Headers;
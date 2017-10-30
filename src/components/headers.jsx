import React from 'react';

const Headers = () => (
    <div>
        <div className="row">
            <div className="col l4 m6">
                Headers are used to give content meaning an structure. H1 tags should be used hierarchical. Screen
                readers
                can analyze code and present content to the user.
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col l6 m6">
                <p style={{fontSize: 40}} className="teal-text"> Yay </p>
                <h1> H1 tittel </h1>
                <h2> H2 tittel </h2>
                <h3> H3 tittel </h3>
                <h4> H4 tittel </h4>
                <h5> H5 tittel </h5>
                <h6> H6 tittel </h6>
            </div>
            <div className="col l6 m6">
                <p style={{fontSize: 40}} className="red-text"> Nay </p>
                <h6> H6 tittel </h6>
                <h4> H4 tittel </h4>
                <h2> H2 tittel </h2>
                <h3> H3 tittel </h3>
                <h5> H5 tittel </h5>
                <h1> H1 tittel </h1>
            </div>
        </div>
        <hr/>

        <div className="row">
            <p style={{fontSize: 40}} className="orange-text"> Sometimes </p>
            <div className="col l3 m3 s12 center">
                <h2>This is the left content</h2>
                <p>Uses h2</p>
            </div>
            <div className="col l6 m3 s12 center" >
                <h1>This is the main content</h1>
                <p>Not first in the HTML, but is still the main content. Uses H1</p>
            </div>
            <div className="col l3 m3 s12 center">
                <h2>This is the right content</h2>
                <p>Uses h2</p>
            </div>
        </div>
    </div>
);

export default Headers;
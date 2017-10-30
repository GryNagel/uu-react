import React from 'react';

const Form = () => (
    <div>
        <div className="row">
            <div className="col l5 m5 s12">
                <p style={{fontSize: 40}} className="teal-text"> Yay </p>
                <form className="col s6">
                    <div className="row">
                        <div className="input-field">
                            <input id="first-name" type="text" className="validate"/>
                            <label htmlFor="first-name" className="active">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="last-name" type="text" className="validate"/>
                            <label htmlFor="last-name" className="active">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="pass" type="password" className="validate"/>
                            <label htmlFor="pass" className="active">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="mail" type="email" className="validate"/>
                            <label htmlFor="mail" className="active">E-mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="mail2" type="email" className="validate"/>
                            <label htmlFor="mail2" className="active">Repeat e-mail</label>
                        </div>
                    </div>
                    <input type="button" value="submit" className="waves-effect waves-light btn light-blue darken-4"/>
                </form>
            </div>

            <div className="col l5 m5 s12 offset1">
                <p style={{fontSize: 40}} className="red-text"> Nay </p>
                <form className="col s6">
                    <div className="row">
                        <div className="input-field">
                            <input placeholder="First name" id="first_name" type="text" className="validate"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="last_name" type="text" className="validate" placeholder="Last name"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password" className="active">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email" className="active">E-mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email" className="active">Repeat e-mail</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn light-blue darken-4">Submit</a>
                </form>
            </div>
        </div>
    </div>
);

export default Form;

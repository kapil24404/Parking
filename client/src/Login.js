import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from './Nav';

const Login = (props) => {
    const [state, setState] = useState({
        name: '',
        password: ''
    });

    const { name, password } = state;

    useEffect(() => {
        // If user is already logged in, redirect to home page
        // For now, we'll assume there's no authentication, so we don't need this logic.
    }, []);

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Hardcoded username and password check
        if (name === 'Kapil' && password === '1234') {
            // If the credentials are correct, redirect to /create
            props.history.push('/create');
        } else {
            // If credentials are incorrect, show an alert
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <div className="header">
                <div className="container">
                    <h3>PARKING MANAGEMENT SYSTEM</h3>
                </div>
            </div>

            <div className="logo wow fadeInDown animated" data-wow-delay=".5s">
                <Nav />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <div className="container pb-5">
                            <h3>ADMINISTRATIVE LOGIN</h3>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="test-muted">Admin Username</label>
                                    <input
                                        onChange={handleChange('name')}
                                        value={name}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Admin Username"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="test-muted">Admin Password</label>
                                    <input
                                        onChange={handleChange('password')}
                                        value={password}
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Admin Password"
                                        required
                                    />
                                </div>
                                <div>
                                    <button className="button btn-primary">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Login);

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({
    name: '',
    password: ''
  });

  const { name, password } = state;
  const history = useHistory(); // Hook to programmatically navigate

  // Handle input field changes
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Hardcoded credentials
    if (name === 'Kapil' && password === '1234') {
      // Show success message (optional)
      alert('Successfully logged in!');
      
      // Redirect to the "Create" page
      history.push('/create');
    } else {
      // Show an alert if credentials are incorrect
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <h3>SMART PARKING SYSTEM</h3>
        </div>
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

export default Login;

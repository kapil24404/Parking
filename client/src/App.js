import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login'; // Import your Login component
import Create from './Create'; // Import your Create component
import Read from './Read'; // Import the Read component

const App = () => {
  return (
    <Router>
      <div>
        <div className="header">
          <div className="container">
            <h3>SMART PARKING SYSTEM</h3>
          </div>
        </div>
        <div className="logo wow fadeInDown animated" data-wow-delay=".5s">
          <Nav />
        </div>
        <br /><br />

        <Switch>
          {/* Define the routes here */}
          <Route exact path="/" component={Login} /> {/* Login route */}
          <Route path="/create" component={Create} /> {/* Create route */}
          <Route path="/read" component={Read} /> {/* Read route */}
        </Switch>

        <br />
        <div className="row">
          <div className="col-md-8">
            <img
              src="../Car-Parking.jpg"
              className="img"
              style={{ marginLeft: 15, height: 450, width: 900 }}
              alt="Parking"
            />
          </div>

          <div className="col-md-4 col-sm-4">
            <h4 className="para">SMART PARKING SYSTEM</h4>
            <p className="para" style={{ textAlign: 'justify' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            </p>
          </div>
        </div>

        <br />
        <div className="row" style={{ marginLeft: 20, marginRight: 20 }}>
          <div className="col-md-3">
            <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 26<br />
            Timings: 8:00-20:00
          </div>
          <div className="col-md-3">
            <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 29<br />
            Timings: 8:00-20:00
          </div>
          <div className="col-md-3">
            <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 34<br />
            Timings: 20:00-8:00
          </div>
          <div className="col-md-3">
            <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 30<br />
            Timings: 20:00-8:00
          </div>
        </div>

        <br />
        <div className="footer">
          <p>© Copyright 2020-21</p>
        </div>
      </div>
    </Router>
  );
};

export default App;

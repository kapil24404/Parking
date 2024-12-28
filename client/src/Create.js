import React, { useState } from 'react';

const Create = () => {
    const [state, setState] = useState({
        num: '',
        content: '',
        fee: '',
        from: '',
        user: ''
    });

    const { num, content, fee, from, user } = state;

    // Handle form field changes
    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a vehicle object with the form data
        const vehicleData = { num, content, fee, from, user };

        // Retrieve existing vehicles from localStorage
        const existingVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];

        // Add the new vehicle to the existing array
        existingVehicles.push(vehicleData);

        // Save the updated array back to localStorage
        localStorage.setItem('vehicles', JSON.stringify(existingVehicles));

        // Display a success message and reset form
        alert(`Vehicle Number ${num} data is saved successfully`);

        // Optionally reset the form
        setState({
            num: '',
            content: '',
            fee: '',
            from: '',
            user: ''
        });
    };

    return (
        <div>
            <div className="header">
                <div className="container">
                    <h3>SMART PARKING SYSTEM</h3>
                </div>
            </div>

            <div className="container p-5">
                <h3>ENTER VEHICLE INFORMATION</h3>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="test-muted">Vehicle Type</label>
                        <select
                            name="monthofbirth"
                            onChange={handleChange('content')}
                            className="form-control"
                            placeholder="Please Select Vehicle Type"
                            required
                        >
                            <option selected="true" disabled>
                                Please Select Vehicle Type
                            </option>
                            <option value="Bicycle">Bicycle</option>
                            <option value="2 Wheelers">2 Wheelers</option>
                            <option value="3 Wheelers">3 Wheelers</option>
                            <option value="4 Wheelers">4 Wheelers</option>
                            <option value="Rickshaw">Rickshaw</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="test-muted">Vehicle Number</label>
                        <input
                            onChange={handleChange('num')}
                            value={num}
                            type="text"
                            className="form-control"
                            placeholder="Enter Vehicle Number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="test-muted">Fees Taken</label>
                        <input
                            onChange={handleChange('fee')}
                            value={fee}
                            type="number"
                            className="form-control"
                            placeholder="Enter Fee Taken at Arrival"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="test-muted">Vehicle Coming From</label>
                        <input
                            onChange={handleChange('from')}
                            value={from}
                            type="text"
                            className="form-control"
                            placeholder="Enter Vehicle Coming From"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="test-muted">Username</label>
                        <input
                            onChange={handleChange('user')}
                            value={user}
                            type="text"
                            className="form-control"
                            placeholder="Enter Owner Name"
                            required
                        />
                    </div>
                    <div>
                        <button className="button btn-primary">Save</button>
                    </div>
                </form>
            </div>

            <br />
            <div className="footer">
                <p>© Copyright 2020-21</p>
            </div>
        </div>
    );
};

export default Create;

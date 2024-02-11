import React, { useState } from "react";
import axios from "axios";

// Defining State
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   When submit button is clicked following action takes place
  const handleInput = (e) => {
    e.preventDefault();
    console.log(values);
  };

  //   Returning JSX
  return (
    <div className="bg-white p-3 border">
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            name="name"
            className="form-control rounded-0"
            placeholder="Enter Username"
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            name="email"
            className="form-control rounded-0"
            placeholder="Enter Email"
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            name="password"
            className="form-control rounded-0"
            placeholder="Enter Password"
            onChange={(e) => {
              setValues({ ...values, password: e.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 rounded-0"
          onClick={handleInput}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="border p-3">
      <h2>Sign In</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            name="email"
            className="form-control rounded-0"
            placeholder="Enter Email"
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
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Login
        </button>
        <p>You are agree to our terms and policies</p>
        <button className="btn btn-secondary w-100 rounded-0">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Login;

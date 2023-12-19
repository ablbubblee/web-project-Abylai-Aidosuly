// Signin.js
import React from 'react';

const Signin = () => {
  const handleSignin = (e) => {
    e.preventDefault();
    // Add your signin logic here
  };

  return (
    <div className="container mt-5">
      <form className="w-50 mx-auto" onSubmit={handleSignin}>
      <h2 className="mb-4">Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;

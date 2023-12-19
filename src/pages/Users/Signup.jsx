// Signup.js
import React from 'react';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSignup} className='w-50 mx-auto'>
      <h2 className="mb-4">Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

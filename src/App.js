// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Signup from './pages/Users/Signup'
import Signin from './pages/Users/Signin'
import Blogs from './pages/Blogs/Blogs';
import Blog from './pages/Blogs/Blogs';
import Navbar from './components/Header';
import Liked from './pages/Liked/Liked';
function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/" element={<Users />} />
        <Route path="blogs/" element={<Blogs />} />
        <Route path="blog/:id/" element={<Blog />} />
        <Route path="signin/" element={<Signin />} />
        <Route path="signup/" element={<Signup />} />
        <Route path="liked/" element={<Liked />} />
      </Routes>
    </Router>
  );
}

export default App;

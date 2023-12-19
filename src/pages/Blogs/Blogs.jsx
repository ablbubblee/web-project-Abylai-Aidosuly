// Blogs.js
import React from 'react';

const Blogs = () => {
  // Dummy blog data for demonstration purposes
  const blogs = [
    { id: 1, title: 'Blog Post 1', content: 'Content for Blog Post 1' },
    { id: 2, title: 'Blog Post 2', content: 'Content for Blog Post 2' },
    { id: 3, title: 'Blog Post 3', content: 'Content for Blog Post 3' },
    // Add more blog data as needed
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.content}</p>
            <a href={`/blog/${blog.id}/`} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

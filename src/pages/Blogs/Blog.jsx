// Blog.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  // Dummy blog data for demonstration purposes
  const blogs = [
    { id: 1, title: 'Blog Post 1', content: 'Content for Blog Post 1' },
    { id: 2, title: 'Blog Post 2', content: 'Content for Blog Post 2' },
    { id: 3, title: 'Blog Post 3', content: 'Content for Blog Post 3' },
    // Add more blog data as needed
  ];

  // Get the blog ID from the URL params
  const { id } = useParams();
  // Find the blog with the matching ID
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    // Handle the case where the blog is not found
    return (
      <div className="container mt-5">
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{blog.title}</h2>
      <p>{blog.content}</p>
      <a href="/blogs" className="btn btn-secondary">
        Back to Blogs
      </a>
    </div>
  );
};

export default Blog;

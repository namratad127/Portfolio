import React from 'react';
import BlogCard from './BlogCard';
import blogsData from '../components/data/blogs.json'; // Import your JSON data

function BlogsSection() {
  return (
    <div className="blogs-section">
      <div className="container">
        <h2 className='post'>Latest Blog Posts</h2>
        <div className="blog-cards">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsSection;


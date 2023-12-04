import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="blog-content">
      <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <div className="user-info">   
          <img src={blog.userPhoto} alt={blog.userName} />
          <div className="user-details">
            <p>{blog.userName}</p><br/>
            <p>{blog.date}</p>
          </div>
        </div>
        <a href={blog.readMoreLink} className='read-more'>Read More</a>
      </div>
    </div>
  );
}

export default BlogCard;

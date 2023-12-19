// Liked.js
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';

const Liked = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Get liked posts from local storage
    const storedLikedPosts = JSON.parse(localStorage.getItem('liked_posts')) || [];
    setLikedPosts(storedLikedPosts);
    console.log(storedLikedPosts)
    // Fetch the news data from the public folder
    fetch('/data/news.json')
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error('Error fetching news data:', error));
  }, []);

  return (
    <div>
      <h2>Liked Posts</h2>
      {likedPosts.length > 0 ? (
        <div className="row">
          {newsData.map((post) => {
            // Find the post details based on the postId
            const postDetails = likedPosts.find((likedPost) => likedPost && likedPost.id == post.id);

            // Check if postDetails is defined and contains the imgUrl property
            if (postDetails) {
              return (
                <div key={post.id} className="col-md-4">
                  {/* Pass the full post details to the Card component */}
                  <Card post={postDetails} />
                </div>
              );
            } else {
              // Log an error and skip rendering this post
              console.error(`Invalid post details for postId: ${post.id}`);
              return null;
            }
          })}
        </div>
      ) : (
        <p>No liked posts yet.</p>
      )}
    </div>
  );
};

export default Liked;

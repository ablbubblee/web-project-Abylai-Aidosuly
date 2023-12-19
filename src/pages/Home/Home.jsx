// Home.js
import React, { useEffect, useState } from 'react';
import CusCarousel from '../../components/Carousel'
import Card from '../../components/Card'
import BigCard from '../../components/BigCard'
const Home = () => {
  const [newses, setnewses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch('data/news.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setnewses(data);

        // Convert the JSON data to a string
        const jsonString = JSON.stringify(data);
        console.log('Stringified JSON:', jsonString);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <CusCarousel />
      <header className="text-center mb-5">
        <h1>Welcome to DAILY BUGLE</h1>
        <p className="lead">Exploring the world through words</p>
      </header>
      <section className="row mb-5">
        {newses && newses.map((index) => (
          <div key={index} className="col-md-4">
            <Card data={index}/>
          </div>
        ))}
      </section>
      <section className="mb-5">
        {/* <h2>Latest Posts</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Latest Post Title 1</h3>
            <p className="card-text">Short description of the post</p>
            <a href="/blog/2" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div> */}
        <BigCard/>
      </section>
      <footer className="text-center text-muted">
        <p>&copy; 2023 Your Blog Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

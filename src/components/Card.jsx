import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = (props) => {
    const { data } = props;

    const image = data.imgUrl || '';
    const title = data.title;
    const description = data.description;

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likedPosts = JSON.parse(localStorage.getItem('liked_posts')) || [];
        setIsLiked(likedPosts.includes(data.id)); 
    }, [data.id]);

    const handleToggleLike = () => {
        const likedPosts = JSON.parse(localStorage.getItem('liked_posts')) || [];
        const updatedLikedPosts = isLiked
            ? likedPosts.filter((postId) => postId !== data.id)
            : [...likedPosts, data.id];

        localStorage.setItem('liked_posts', JSON.stringify(updatedLikedPosts));

        setIsLiked(!isLiked);
    };
    return (
        <div className="card card-profile">
            <div className="card-header card-header-image">
                <a href="#pablo">
                    <img className="img" src={'/assets/news_images/' + image} />
                    <div className="card-title">
                        {title}
                    </div>
                </a>
                <div className="colored-shadow" style={{ backgroundImage: "url({'/assets/news_images/' + image})", opacity: 1 }}></div></div>
            <div className="card-body ">
                <h6 className="card-category text-info">{title}</h6>

                <p className="card-description">
                    {description}
                </p>
                <div className="">
                    <button
                        className={`btn ${isLiked ? 'btn-danger' : 'btn-primary'}`}
                        onClick={handleToggleLike}
                    >
                        {isLiked ? 'Удалить из избранных' : 'Добавить в избранные'}
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Card
import React from 'react'
import Rating from "./Rating/Rating"

const Review = (review) => {
    return (
        <div>
            <Rating review={review}></Rating>
            <div>
                <img src={review.review.avatar} alt=""></img>
            </div>
            <h3>{review.review.title}</h3>
            <p>{review.review.description}</p>
            <p>{review.review.date}</p>
        </div>
    )
}

export default Review

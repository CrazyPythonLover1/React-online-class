import React from 'react';
import './Course.css'

const Course = (props) => {
    const {image,title,author,rating,hours,price} = props.course;
    return (
        <div>
            <div className="courses">
                <div className="single-course">
                    <div className="course-img">
                        <img src={image} alt=" No Image"/>
                    </div>
                    <div className="course-info">
                        <h4> {title} </h4>
                        <p> Created by {author} </p>
                        <h5> Rating: {rating} </h5>
                        <h5> Price: ${price} </h5>
                        <button> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
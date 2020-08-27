import React from 'react';
import './Store.css';
import Course from '../Course/Course';
import { useState } from 'react';
import fakeData from '../../fakeData/course.js'
import Cart from '../Cart/Cart';

const Store = (props) => {
    const [courses,setCourses]= useState(fakeData)
    

    return (
        <div style={{margin:"2rem"}}>
            <h1> The world's largest selection of courses </h1>
            <h1 className="text-info"> Courses: {courses.length} </h1>
            <div className="course-container row">
                {
                    courses.map(course=><Course course={course} handleAddCourse={props.handleAddCourse} key={course.id} ></Course>)
                }
            </div>
            
            <div className="cart ">
                <Cart cart={props.cart}></Cart>
            </div>
        </div>
    );
};

export default Store;
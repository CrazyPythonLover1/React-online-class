import React from 'react';
import './Store.css';
import Course from '../Course/Course';
import { useState } from 'react';
import fakeData from '../../fakeData/course.js'

const Store = () => {
    const [courses,setCourses]= useState(fakeData)
    return (
        <div>
            <div className="course-container">
            <h1 className="text-info"> Courses: {courses.length} </h1>
            {
                courses.map(course=><Course course={course} key={course.id} ></Course>)
            }
            </div>
            <div className="cart">
                This is Cart
            </div>
        </div>
    );
};

export default Store;
import React from 'react';
import './BookCourse.css';
import Light from '../../../images/3.png';

const BookCourse = () => {
    return (
        <div className='book-course'>
            <div className="container">
                <div className="book-course-container">
                    <div className="col-md-2 bb-img">
                        <img src={Light} alt="" />
                    </div>
                    <div className="col-md-7 bb-text">
                        <h4>THEREFORE ALWAYS FREE FROM REPETITION</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    </div>
                    <div className="col-md-3 bb-link">

                        <a href='#home'>Book This Course</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookCourse;
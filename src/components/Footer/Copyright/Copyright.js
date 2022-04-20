import React from 'react';
import './Copyright.css';

const Copyright = () => {
    const year = new Date().getFullYear();
    return (
        <div className='copyright-container'>
            <p>Copyrights &copy; {year} NATIONAL IDEAL COLLEGE. All rights reserved.</p>
        </div>
    );
};

export default Copyright;
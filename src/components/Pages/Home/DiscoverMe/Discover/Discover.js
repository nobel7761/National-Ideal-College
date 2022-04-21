import React from 'react';
import './Discover.css';

const Discover = ({ discover }) => {
    return (
        <div className='discover-container'>
            <div className="col-md-3 col-sm-4 col-xs-12">
                <img src={discover.image} alt={discover.title} />
            </div>
        </div>
    );
};

export default Discover;
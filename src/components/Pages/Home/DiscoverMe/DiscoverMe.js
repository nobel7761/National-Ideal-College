import React, { useEffect, useState } from 'react';
import Discover from './Discover/Discover';
import './DiscoverMe.css';

const DiscoverMe = () => {
    const [discovers, setDiscovers] = useState([]);
    useEffect(() => {
        fetch('JSON/HomePage/DiscoverMe/discoverme.json')
            .then(response => response.json())
            .then(data => setDiscovers(data))
    }, [])
    return (
        <div className='container'>
            <div className="discoverMe-container">
                <h2>Discover <span className='colored-text'>More</span></h2>
                <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                <div className="discover-container">
                    {
                        discovers.map(discover => <Discover key={discover.id} discover={discover}></Discover>)
                    }
                </div>
            </div>

        </div>
    );
};

export default DiscoverMe;
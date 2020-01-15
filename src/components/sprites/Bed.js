import React from 'react';
import bed from '../../images/bed.png';
import '../styles/bed.css';

const Bed = () => {
    return (
        <img
            alt='sleep'
            className='bed'
            src={bed} />
    );
}

export default Bed;
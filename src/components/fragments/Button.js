import React from 'react';
import '../styles/fragments.css';

const Button = (props) => {
    return (
        <button className='button' {...props} />
    );
}

export default Button;
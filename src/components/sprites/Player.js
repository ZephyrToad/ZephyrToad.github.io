import React, { useEffect, useState } from 'react';
import gif from '../../images/shyguy.gif';
import '../styles/sprite.css';

const Player = ({ gameOver, isAwake, speed }) => {
    const StartingPosition = 10.0;
    const [position, setPosition] = useState(StartingPosition);
    
    const calculatePosition = () => {
        position >= -30
            ? setPosition((isAwake ? 1 : -2) * speed + position)
            : gameOver();
    }

    useEffect(() => {
        const interval = setInterval(calculatePosition, 500);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <img
            alt='you'
            className={`sprite ${!isAwake ? 'flip' : ''}`}
            style={{ marginLeft: position }}
            src={gif} />
    );
}

export default Player;
import React, { useState } from 'react';
import { Button } from './fragments';

const AwakeButton = ({ isAwake, setAwake }) => {
    const InitX = 0;
    const InitY = 10;
    const [xPos, setXPos] = useState(InitX);
    const [yPos, setYPos] = useState(InitY);

    const calculateCoordinate = (base) => base + Math.round(Math.random() * 80);

    const onClick = () => {
        setAwake(true);
        setXPos(calculateCoordinate(InitX));
        setYPos(calculateCoordinate(InitY));
    };

    return (
        <Button
            style={{
                position: 'absolute',
                left: `${xPos}%`,
                top: `${yPos}%`
            }}
            disabled={isAwake}
            onClick={onClick}>
            Stay Awake
        </Button>
    );
}

export default AwakeButton;
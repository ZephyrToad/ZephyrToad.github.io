import React, { Fragment, useEffect, useState } from 'react';
import { Buffer, Button } from './fragments';
import { Bed, Player } from './sprites';
import AwakeButton from './AwakeButton';
import DifficultySelector from './DifficultySelector';

const Main = () =>
{
    const [isPlaying, setPlaying] = useState(true);
    const [isAwake, setAwake] = useState(true);
    const [speed, setSpeed] = useState(0);

    const gameOver = () => setPlaying(false);
    const reload = () => window.location.reload();

    useEffect(() => {
        const timer = setTimeout(() => {
            setAwake(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    });

    return (
        isPlaying ?
            <Fragment>
                <DifficultySelector onChange={setSpeed} value={speed} />
                <div>
                    <Bed />
                    <Player {...{ gameOver, isAwake, speed }} />
                </div>
                <Buffer />
                <div>
                    <AwakeButton {...{ isAwake, setAwake }}/>
                </div>
            </Fragment> :
            <Fragment>
                <Button onClick={reload}>
                    WAKE UP
                </Button>
                <Buffer />
                <h1>
                    WAKE UP DUMMY
                </h1>
            </Fragment>
    );
};

export default Main;
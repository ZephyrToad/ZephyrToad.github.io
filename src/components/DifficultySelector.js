import React from 'react';
import { Selector } from './fragments';

const DifficultySelector = (props) => {
    const onChange = ({ target: { value } }) => {
        props.onChange(value);
    }

    return (
        <Selector
            style={{
                float: 'right',
                position: 'static'
            }}
            onChange={onChange}
            value={props.value}
            items={[
                { description: 'Easy', value: 0.5 },
                { description: 'Medium', value: 0.75 },
                { description: 'Hard', value: 2 },
                { description: 'Debug', value: 0 }
            ]} />
    );
}
export default DifficultySelector;
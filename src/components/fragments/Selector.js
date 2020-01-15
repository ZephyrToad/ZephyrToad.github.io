import React from 'react';

const Selector = (props) => {
    const { items, ...etc } = props;

    return (
        <select {...etc}>
            {items.map(x => (
                <option value={x.value}>
                    {x.description}
                </option>
            ))}
        </select>
    );
};

export default Selector;
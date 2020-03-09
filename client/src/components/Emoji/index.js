import React from 'react';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        width={props.width}
    >
        {props.symbol}
    </span>
);
export default Emoji;

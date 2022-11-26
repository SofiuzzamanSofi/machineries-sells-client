import React from 'react';

const ButtonPublic = ({ size, children }) => {
    return (
        <button className={`btn hover:btn-info ${size ? size : ""}`}>{children}</button>
    );
};

export default ButtonPublic;
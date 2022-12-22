import React from 'react';

const ButtonPublic = ({ size, children }) => {
    return (
        <button className={`btn btn-outline hover:bg-[#6d5347] dark:text-white ${size ? size : ""}`}>{children}</button>
    );
};

export default ButtonPublic;
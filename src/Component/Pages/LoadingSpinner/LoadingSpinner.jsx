import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default LoadingSpinner;
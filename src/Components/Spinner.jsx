import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
      <span className="loading loading-spinner  text-error  scale-[5]"></span>
    </div>
    );
};

export default Spinner;
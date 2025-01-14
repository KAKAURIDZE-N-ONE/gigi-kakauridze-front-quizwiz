import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      className={`loader w-7 h-7 bg-blue
      rounded-full relative flex items-center 
      justify-center overflow-hidden
  `}
    >
      <div className={`w-6 h-6 bg-white rounded-full`}></div>
      <div
        className={`w-full h-full bg-white absolute 
        -translate-y-1/2`}
      ></div>
    </div>
  );
};

export default Loader;

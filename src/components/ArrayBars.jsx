import React from 'react';

const ArrayBars = ({ array }) => {
  return (
    <div className="flex items-end justify-center h-64 gap-[2px] w-full">
      {array.map((value, idx) => (
        <div
          key={idx}
          className="bg-blue-500 rounded-t"
          style={{
            height: `${value}px`,
            width: `${100 / array.length}%`,
            transition: 'height 0.2s ease',
          }}
        />
      ))}
    </div>
  );
};

export default ArrayBars;

import React from 'react';

const VisualArea = ({
  array1 = [],
  array2 = [],
  highlighted1 = [],
  highlighted2 = [],
  sorted1 = [],
  sorted2 = []

}) => {
  const getBarStyle = (length, val, color, isHighlighted, isSorted) => {
    const containerWidth = 100;
    const barWidth = containerWidth / length;

    let bgColor = color;
    if (isSorted) bgColor = '#FACC15';        // Yellow for sorted
    else if (isHighlighted) bgColor = '#EF4444'; // Red for comparing

    return {
      height: `${val}%`,
      maxHeight: '90%',
      width: `${barWidth}%`,
      backgroundColor: bgColor,
      margin: '0 0.1%',
      transition: 'height 0.2s ease, background-color 0.2s ease',
    };
  };

  return (
    <div className="w-screen h-[50vh] bg-gray-100 p-4 box-border flex gap-6 mt-8 overflow-hidden">
      {/* Left Array */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-center text-lg font-bold text-black mb-2">Algorithm 1</h2>
        <div className="flex-1 bg-white rounded shadow flex items-end justify-center overflow-hidden">
          {array1.map((val, idx) => (
            <div
              key={idx}
              style={getBarStyle(array1.length, val, '#3B82F6', highlighted1.includes(idx), sorted1.includes(idx))}
            />
          ))}
        </div>
      </div>

      {/* Right Array */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-center text-lg font-bold text-black mb-2">Algorithm 2</h2>
        <div className="flex-1 bg-white rounded shadow flex items-end justify-center overflow-hidden">
          {array2.map((val, idx) => (
            <div
              key={idx}
              style={getBarStyle(array2.length, val, '#10B981', highlighted2.includes(idx), sorted2.includes(idx))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualArea;






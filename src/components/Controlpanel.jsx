import React from 'react';

const ControlPanel = ({
  algo1, setAlgo1,
  algo2, setAlgo2,
  size, setSize,
  speed, setSpeed,
  onVisualize, onSort,
  onSave, onFetchHistory
}) => {
  const algorithms = ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'];

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow flex flex-col gap-4 mb-6">
      <div className="flex justify-between gap-4">
        <select
          value={algo1}
          onChange={(e) => setAlgo1(e.target.value)}
          className="p-2 border rounded w-1/2 text-black bg-white"
        >
          {algorithms.map((algo) => (
            <option key={algo}>{algo}</option>
          ))}
        </select>

        <select
          value={algo2}
          onChange={(e) => setAlgo2(e.target.value)}
          className="p-2 border rounded w-1/2 text-black bg-white"
        >
          {algorithms.map((algo) => (
            <option key={algo}>{algo}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-black">Array Size: {size}</label>
        <input
          type="range"
          min={10}
          max={100}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-black">Speed (ms): {speed}</label>
        <input
          type="range"
          min={10}
          max={1000}
          step={10}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={onVisualize}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          🎨 Visualize
        </button>

        <button
          onClick={onSort}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          ▶️ Start Sorting
        </button>

        <button
          onClick={onSave}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          💾 Save Result
        </button>

        <button
          onClick={onFetchHistory}
          className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
        >
          📚 Past Comparisons
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;

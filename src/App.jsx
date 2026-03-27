import React, { useState, useEffect } from 'react';
import ControlPanel from './components/Controlpanel';
import VisualArea from './components/VisualArea';
import generateArray from './utils/generateArray';
import getSortFunction from './utils/sortFunction';
import { saveComparison, fetchComparisons } from './utils/api';

function App() {
  const [algo1, setAlgo1] = useState('Bubble Sort');
  const [algo2, setAlgo2] = useState('Selection Sort');
  const [size, setSize] = useState(50);
  const [speed, setSpeed] = useState(100);
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);

  const [highlighted1, setHighlighted1] = useState([]);
  const [highlighted2, setHighlighted2] = useState([]);
  const [sorted1, setSorted1] = useState([]);
  const [sorted2, setSorted2] = useState([]);

  const [comparisons1, setComparisons1] = useState(0);
  const [comparisons2, setComparisons2] = useState(0);
  const [swaps1, setSwaps1] = useState(0);
  const [swaps2, setSwaps2] = useState(0);
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);

  const [pastComparisons, setPastComparisons] = useState([]);

  const handleVisualize = () => {
    const newArray = generateArray(size);
    setArray1([...newArray]);
    setArray2([...newArray]);
    setHighlighted1([]);
    setHighlighted2([]);
    setSorted1([]);
    setSorted2([]);
    setComparisons1(0);
    setComparisons2(0);
    setSwaps1(0);
    setSwaps2(0);
    setTime1(0);
    setTime2(0);
  };

  const handleSort = async () => {
    const sort1 = getSortFunction(algo1);
    const sort2 = getSortFunction(algo2);

    if (!sort1 || !sort2) {
      alert("Unsupported algorithm selected");
      return;
    }

    const arr1Copy = [...array1];
    const arr2Copy = [...array2];

    const start1 = performance.now();
    const start2 = performance.now();

    await Promise.all([
      sort1(arr1Copy, setArray1, speed, setHighlighted1, setSorted1, setComparisons1, setSwaps1),
      sort2(arr2Copy, setArray2, speed, setHighlighted2, setSorted2, setComparisons2, setSwaps2)
    ]);

    const end1 = performance.now();
    const end2 = performance.now();

    setTime1(Math.round(end1 - start1));
    setTime2(Math.round(end2 - start2));
  };

  const handleSave = async () => {
    try {
      const payload = {
        algo1,
        algo2,
        size,
        result1: { comparisons: comparisons1, swaps: swaps1, time: time1 },
        result2: { comparisons: comparisons2, swaps: swaps2, time: time2 }
      };
      await saveComparison(payload);
      alert("✅ Result saved successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save result.");
    }
  };

  const handleFetchHistory = async () => {
    try {
      const data = await fetchComparisons();
      setPastComparisons(data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch history.");
    }
  };

  useEffect(() => {
    handleVisualize();
  }, [size]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Algorithm Battle Visualizer
      </h1>

      <ControlPanel
        algo1={algo1}
        setAlgo1={setAlgo1}
        algo2={algo2}
        setAlgo2={setAlgo2}
        size={size}
        setSize={setSize}
        speed={speed}
        setSpeed={setSpeed}
        onStart={handleSort}
        onVisualize={handleVisualize}
        onSort={handleSort}
        onSave={handleSave}
        onFetchHistory={handleFetchHistory}
      />

      <VisualArea
        array1={array1}
        array2={array2}
        highlighted1={highlighted1}
        highlighted2={highlighted2}
        sorted1={sorted1}
        sorted2={sorted2}
      />

      <div className="grid grid-cols-2 gap-6 mt-6 text-center text-lg font-medium text-gray-700">
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-bold text-blue-600 mb-2">{algo1}</h2>
          <p>Comparisons: {comparisons1}</p>
          <p>Swaps: {swaps1}</p>
          <p>Time Taken: {time1} ms</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-bold text-green-600 mb-2">{algo2}</h2>
          <p>Comparisons: {comparisons2}</p>
          <p>Swaps: {swaps2}</p>
          <p>Time Taken: {time2} ms</p>
        </div>
      </div>

      {pastComparisons.length > 0 && (
        <div className="bg-white mt-8 p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-center mb-4 text-black">📚 Past Comparisons</h2>
          <ul className="space-y-2 text-gray-700 text-sm max-h-64 overflow-y-auto">
            {pastComparisons.map((item, index) => (
              <li key={index}>
                <b>{item.algo1}</b> vs <b>{item.algo2}</b> (size {item.size}) →
                {` [${item.result1?.time}ms, ${item.result1?.swaps} swaps] vs [${item.result2?.time}ms, ${item.result2?.swaps} swaps]`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;







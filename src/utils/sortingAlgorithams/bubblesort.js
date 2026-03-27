const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const bubbleSort = async (
  arr,
  setArr,
  speed,
  setHighlighted,
  setSorted,
  setComparisons,
  setSwaps
) => {
  const array = [...arr];
  const n = array.length;
  let sorted = [];

  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // 🔴 Highlight current comparison
      setHighlighted([j, j + 1]);

      comparisons++;
      setComparisons(comparisons);

      await sleep(speed);

      if (array[j] > array[j + 1]) {
        // 🔄 Swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swaps++;
        setSwaps(swaps);

        setArr([...array]); // UI update
        await sleep(speed);
      }
    }

    // ✅ Mark sorted
    sorted.push(n - i - 1);
    setSorted([...sorted]);
  }

  // ✅ Final update
  setSorted([...Array(n).keys()]);
  setHighlighted([]);
};

export default bubbleSort;



// const bubbleSort = async (arr, setArr, speed) => {
//   const array = [...arr];
//   const n = array.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         // Swap
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;

//         setArr([...array]); // Trigger UI update
//         await sleep(speed);
//       }
//     }
//   }
//   setArr([...array]);
// };

// export default bubbleSort;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const selectionSort = async (arr, setArr, speed) => {
  const array = [...arr];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      setArr([...array]); // visualize after each swap
      await sleep(speed);
    }
  }
};

export default selectionSort;

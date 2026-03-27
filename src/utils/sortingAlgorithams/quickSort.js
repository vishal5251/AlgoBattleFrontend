const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const quickSort = async (arr, setArr, speed) => {
  const partition = async (a, low, high) => {
    let pivot = a[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (a[j] < pivot) {
        i++;
        [a[i], a[j]] = [a[j], a[i]];
        setArr([...a]);
        await sleep(speed);
      }
    }
    [a[i + 1], a[high]] = [a[high], a[i + 1]];
    setArr([...a]);
    await sleep(speed);
    return i + 1;
  };

  const quickSortHelper = async (a, low, high) => {
    if (low < high) {
      const pi = await partition(a, low, high);
      await quickSortHelper(a, low, pi - 1);
      await quickSortHelper(a, pi + 1, high);
    }
  };

  const a = [...arr];
  await quickSortHelper(a, 0, a.length - 1);
};

export default quickSort;

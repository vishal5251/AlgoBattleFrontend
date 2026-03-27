const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const insertionSort = async (arr, setArr, speed) => {
  let a = [...arr];
  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j = j - 1;
      setArr([...a]);
      await sleep(speed);
    }
    a[j + 1] = key;
    setArr([...a]);
    await sleep(speed);
  }
};

export default insertionSort;

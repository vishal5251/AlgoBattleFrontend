const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mergeSort = async (
  arr,
  setArr,
  speed,
  setHighlighted,
  setSorted,
  setComparisons,
  setSwaps
) => {
  const a = [...arr];
  let comparisons = 0;
  let swaps = 0;
  const n = a.length;
  const sortedIndices = new Set();

  const merge = async (a, l, m, r) => {
    const left = a.slice(l, m + 1);
    const right = a.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      setHighlighted([k]);

      comparisons++;
      setComparisons(comparisons);

      if (left[i] <= right[j]) {
        a[k++] = left[i++];
      } else {
        a[k++] = right[j++];
      }

      swaps++;
      setSwaps(swaps);

      setArr([...a]);
      await sleep(speed);
    }

    while (i < left.length) {
      setHighlighted([k]);
      a[k++] = left[i++];
      swaps++;
      setSwaps(swaps);
      setArr([...a]);
      await sleep(speed);
    }

    while (j < right.length) {
      setHighlighted([k]);
      a[k++] = right[j++];
      swaps++;
      setSwaps(swaps);
      setArr([...a]);
      await sleep(speed);
    }

    // Mark all merged elements as sorted temporarily (optional)
    for (let idx = l; idx <= r; idx++) {
      sortedIndices.add(idx);
    }
    setSorted([...sortedIndices]);
  };

  const mergeSortHelper = async (a, l, r) => {
    if (l >= r) return;
    const m = Math.floor((l + r) / 2);
    await mergeSortHelper(a, l, m);
    await mergeSortHelper(a, m + 1, r);
    await merge(a, l, m, r);
  };

  await mergeSortHelper(a, 0, n - 1);

  // Final sorted update
  setSorted([...Array(n).keys()]);
  setHighlighted([]);
};

export default mergeSort;


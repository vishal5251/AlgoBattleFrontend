import bubbleSort from './bubblesort';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';
import mergeSort from './mergeSort';
import quickSort from './quickSort';

const getSortFunction = (name) => {
  switch (name) {
    case 'Bubble Sort':
      return bubbleSort;
    case 'Selection Sort':
      return selectionSort;
    case 'Insertion Sort':
      return insertionSort;
    case 'Merge Sort':
      return mergeSort;
    case 'Quick Sort':
      return quickSort;
    default:
      return null;
  }
};

export default getSortFunction;

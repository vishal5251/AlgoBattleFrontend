import bubbleSort from '../utils/sortingAlgorithams/bubblesort';
import selectionSort from '../utils/sortingAlgorithams/selectionSort';
import insertionSort from '../utils/sortingAlgorithams/insertionSort';
import mergeSort from '../utils/sortingAlgorithams/mergeSort';
import quickSort from '../utils/sortingAlgorithams/quickSort';

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

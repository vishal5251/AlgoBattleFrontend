// function to generate random array
// ✅ generateArray.js
const generateArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 500) + 10);
  }
  return arr;
};

export default generateArray;

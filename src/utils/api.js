import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/comparisons';

export const saveComparison = async (data) => {
  const res = await axios.post(`${BASE_URL}/save`, data);
  return res.data;
};

export const fetchComparisons = async () => {
  const res = await axios.get(`${BASE_URL}/all`);
  return res.data;
};

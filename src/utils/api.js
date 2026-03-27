import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/comparisons';
const BASE_URL = `${import.meta.env.Server_Base_Url}/api/comparisons`;

export const saveComparison = async (data) => {
  console.log("Base_url: ", BASE_URL)
  const res = await axios.post(`${BASE_URL}/save`, data);
  return res.data;
};

export const fetchComparisons = async () => {
  const res = await axios.get(`${BASE_URL}/all`);
  return res.data;
};

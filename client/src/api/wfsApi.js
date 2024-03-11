import axios from 'axios';

// TODO: Improve on distinguishing dev/test/prod environment
const isLocalDevelopment = true;
const baseURL = isLocalDevelopment
  ? 'http://localhost:8000/api'
  : process.env.REACT_APP_WFS_API_URL;

export const fetchWildfires = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching wildfires data:", error);
    throw error;
  }
};

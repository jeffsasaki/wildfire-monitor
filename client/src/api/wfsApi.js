import axios from 'axios';

// TODO: Improve on distinguishing dev/test/prod environment
const environment = process.env.REACT_APP_ENVIRONMENT;
const baseURL = environment === 'prod'
  ? process.env.REACT_APP_WFS_API_URL
  : 'http://localhost:8000/api'

export const fetchWildfires = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching wildfires data:", error);
    throw error;
  }
};

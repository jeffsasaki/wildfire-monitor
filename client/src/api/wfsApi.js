import axios from 'axios';

const baseURL = process.env.REACT_APP_WFS_API_URL;

export const fetchWildfires = async (cqlFilter = '') => {
  try {
    const url = `${baseURL}${cqlFilter.length && `&cql_filter=${encodeURIComponent(cqlFilter)}`}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching wildfires data:", error);
    throw error;
  }
};

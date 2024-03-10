import React, { useState, useEffect } from 'react';
import { fetchWildfires } from '../api/wfsApi';
import WildfireList from './WildfireList';
import FilterForm from './FilterForm';

const App = () => {
  const [wildfires, setWildfires] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWildfires();
      setWildfires(data.features);
    };
    loadData();
  }, []);

  return (
    <div className='container'>
      <h1>2023 BC Wildfires</h1>
      <FilterForm setWildfires={setWildfires} />
      <div className='table-responsive'>
        <WildfireList wildfires={wildfires} />
      </div>
    </div>
  );
}

export default App;

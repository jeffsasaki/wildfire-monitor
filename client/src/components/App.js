import React, { useState, useEffect } from 'react';
import { fetchWildfires } from '../api/wfsApi';
import WildfireList from './WildfireList';
import FilterForm from './FilterForm';
import { downloadCSV, convertToCSV } from '../utils/downloadCSV';

const App = () => {
  const [wildfires, setWildfires] = useState([]);
  const [filteredWildfires, setFilteredWildfires] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWildfires();
      setWildfires(data.features);
      setFilteredWildfires(data.features);
    };
    loadData();
  }, []);

  const applyFilters = ({ fireStatus, fireCause, geographicDescription }) => {
    let filtered = wildfires;

    if (fireStatus) {
      filtered = filtered.filter(wildfire => wildfire.properties.FIRE_STATUS === fireStatus);
    }
    if (fireCause) {
      filtered = filtered.filter(wildfire => wildfire.properties.FIRE_CAUSE === fireCause);
    }
    if (geographicDescription) {
      filtered = filtered.filter(wildfire => {
        return wildfire.properties.GEOGRAPHIC_DESCRIPTION
          .toLowerCase()
          .includes(geographicDescription
          .toLowerCase())
      });
    }

    setFilteredWildfires(filtered);
  };

  const handleDownloadClick = () => {
    const csvData = convertToCSV(filteredWildfires.map(wildfire => wildfire.properties));
    downloadCSV(csvData, `bc-2023-wildfires-${+new Date()}.csv`);
  };

  return (
    <div className='container'>
      <h1>2023 BC Wildfires</h1>
      <FilterForm
        applyFilters={applyFilters}
      />
      <button
        className="btn btn-primary my-2"
        onClick={ handleDownloadClick }
        disabled={!filteredWildfires.length}
      >
        Download as CSV
      </button>
      <div className='table-responsive'>
        <WildfireList wildfires={filteredWildfires} />
      </div>
    </div>
  );
};

export default App;

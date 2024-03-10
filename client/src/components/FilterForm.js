import React, { useState } from 'react';

const FilterForm = ({ setWildfires, fetchWildfires }) => {
  const [fireStatus, setFireStatus] = useState('');
  const [fireCause, setFireCause] = useState('');
  const [geographicDescription, setGeographicDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let params = {};
    if (fireStatus) {
        params['FIRE_STATUS'] = fireStatus;
    }
    if (fireCause) {
        params['FIRE_CAUSE'] = fireCause;
    }
    if (geographicDescription) {
        params['GEOGRAPHIC_DESCRIPTION'] = `'${geographicDescription}'`;
    }

    try {
      const data = await fetchWildfires(params);
      setWildfires(data.features);
    } catch (error) {
      console.error('Error fetching filtered wildfires data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='fireStatus'>Fire Status:</label>
        <select id='fireStatus' value={fireStatus} onChange={e => setFireStatus(e.target.value)}>
          <option value=''>Select Status</option>
          <option value='Out'>Out</option>
          <option value='Being Held'>Being Held</option>
          <option value='Under Control'>Under Control</option>
          <option value='Out of Control'>Out of Control</option>
        </select>
      </div>
      <div>
        <label htmlFor='fireCause'>Fire Cause:</label>
        <select id='fireCause' value={fireCause} onChange={e => setFireCause(e.target.value)}>
          <option value=''>Select Cause</option>
          <option value='Lightning'>Lightning</option>
          <option value='Person'>Person</option>
          <option value='Unknown'>Unknown</option>
        </select>
      </div>
      <div>
        <label htmlFor='geographicDescription'>Geographic Description:</label>
        <input
          type='text'
          id='geographicDescription'
          value={geographicDescription}
          onChange={e => setGeographicDescription(e.target.value)}
        />
      </div>
      <button type='submit'>Filter</button>
    </form>
  );
};

export default FilterForm;

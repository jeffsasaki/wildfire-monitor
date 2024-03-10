import React, { useState } from 'react';
import applyFilters from './App';

const FilterForm = ({ applyFilters }) => {
  const [fireStatus, setFireStatus] = useState('');
  const [fireCause, setFireCause] = useState('');
  const [geographicDescription, setGeographicDescription] = useState('');

  const handleFilter = e => {
    e.preventDefault();
    applyFilters({ fireStatus, fireCause, geographicDescription });
  };

  return (
    <div>
      <form onSubmit={handleFilter}>
        <div className='col-md-6 col-sm-12'>
          <label htmlFor="fireStatus">Fire Status:</label>
          <select className="form-control" id="fireStatus" value={fireStatus} onChange={e => setFireStatus(e.target.value)}>
            <option value="">All</option>
            <option value="Out">Out</option>
            <option value="Being Held">Being Held</option>
            <option value="Under Control">Under Control</option>
            <option value="Out of Control">Out of Control</option>
          </select>
        </div>
        <div className='col-md-6 col-sm-12'>
          <label htmlFor="fireCause">Fire Cause:</label>
          <select className="form-control" id="fireCause" value={fireCause} onChange={e => setFireCause(e.target.value)}>
            <option value="">All</option>
            <option value="Lightning">Lightning</option>
            <option value="Person">Person</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div class="form-group col-md-6 col-sm-12">
          <label htmlFor="geographicDescription">Geographic Description:</label>
          <input
            type="text"
            className='form-control'
            id="geographicDescription"
            value={geographicDescription}
            onChange={e => setGeographicDescription(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">Apply Filter</button>
      </form>
    </div>
  );
};

export default FilterForm;

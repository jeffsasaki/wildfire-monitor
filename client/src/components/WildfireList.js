import React from 'react';

const WildfireList = ({ wildfires }) => {
  try {
    if (!wildfires.length) {
      return <p className='text-danger'>No Wildfires Found</p>
    }
  } catch (error) {
    return <p className='text-danger'>Error retrieving data {error}</p>;
  } 

  return (
    <div className='table-responsive small'>
      <table className='table table-striped table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Fire Number</th>
            <th scope='col'>Fire Year</th>
            <th scope='col'>Response Type Desc</th>
            <th scope='col'>Ignition Date</th>
            <th scope='col'>Fire Out Date</th>
            <th scope='col'>Fire Status</th>
            <th scope='col'>Fire Cause</th>
            <th scope='col'>Fire Centre</th>
            <th scope='col'>Zone</th>
            <th scope='col'>Fire Id</th>
            <th scope='col'>Fire Type</th>
            <th scope='col'>Incident Name</th>
            <th scope='col'>Geographic Description</th>
            <th scope='col'>Latitude</th>
            <th scope='col'>Longitude</th>
            <th scope='col'>Current Size</th>
            <th scope='col'>Feature Code</th>
            <th scope='col'>Fire Url</th>
          </tr>
        </thead>
        <tbody>
          {
            wildfires.map((wildfire, key) => (
              <tr key={key}>
                <td>{wildfire.properties.OBJECTID}</td>
                <td>{wildfire.properties.FIRE_NUMBER}</td>
                <td>{wildfire.properties.FIRE_YEAR}</td>
                <td>{wildfire.properties.RESPONSE_TYPE_DESC}</td>
                <td>{wildfire.properties.IGNITION_DATE}</td>
                <td>{wildfire.properties.FIRE_OUT_DATE}</td>
                <td>{wildfire.properties.FIRE_STATUS}</td>
                <td>{wildfire.properties.FIRE_CAUSE}</td>
                <td>{wildfire.properties.FIRE_CENTRE}</td>
                <td>{wildfire.properties.ZONE}</td>
                <td>{wildfire.properties.FIRE_ID}</td>
                <td>{wildfire.properties.FIRE_TYPE}</td>
                <td>{wildfire.properties.INCIDENT_NAME}</td>
                <td>{wildfire.properties.GEOGRAPHIC_DESCRIPTION}</td>
                <td>{wildfire.properties.LATITUDE}</td>
                <td>{wildfire.properties.LONGITUDE}</td>
                <td>{wildfire.properties.CURRENT_SIZE}</td>
                <td>{wildfire.properties.FEATURE_CODE}</td>
                <td>
                  <a
                    href={wildfire.properties.FIRE_URL}
                    target='_blank'
                    rel='noreferrer'
                  >
                    More Details
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default WildfireList;

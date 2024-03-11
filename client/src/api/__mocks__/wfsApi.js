export const fetchWildfires = jest.fn(() =>
  Promise.resolve({
    features: [
      {
        properties: {
          FIRE_NUMBER: "A123",
          FIRE_YEAR: 2023,
          RESPONSE_TYPE_DESC: "Full",
          IGNITION_DATE: "2023-06-25Z",
          FIRE_OUT_DATE: "2023-06-28Z",
          FIRE_STATUS: "Out",
          FIRE_CAUSE: "Lightning",
          FIRE_CENTRE: 7,
          ZONE: 5,
          FIRE_ID: 456,
          FIRE_TYPE: "Fire",
          INCIDENT_NAME: "B123",
          GEOGRAPHIC_DESCRIPTION: "Vancouver",
          LATITUDE: 52.4098,
          LONGITUDE: -124.8375,
          CURRENT_SIZE: 2.5,
          FIRE_URL: "https://example.com",
          FEATURE_CODE: "JA70003000",
          OBJECTID: 12976717,
          SE_ANNO_CAD_DATA: null
        }
      },
    ],
  })
);

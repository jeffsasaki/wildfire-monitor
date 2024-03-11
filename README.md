# wildfire-monitor

A simple BC WFS data viewer allowing users to filter on the wildfire data.

Demo website: https://wfs-monitor.netlify.app/

## Running locally
1. To run in a docker container:
```
docker build -t wildfire-monitor .
docker run -p 3000:80 wildfire-monitor
```
2. Navigate to http://localhost:3000 to access the application.

## Technical Specifications
* Frontend: React on Node v20
* Backend: FastAPI (Python)

## Testing
Unit test can be done via `npm test`.
Functional (e2e) test can be done via the `npx cypress run --spec "cypress/e2e/spec.cy.js"`.

## Technical Approach and Assumptions.
* Filtering is done on the client side as opposed to using cql_filter param. We are doing an initial call to fetch all data.
* Since data will remain unchanged for a period of time, our backend acts only as a proxy and caches data for 120 minutes, preventing unncessary fetch calls every time the page loads.
* To keep security in mind, it obfuscates the base URL.
* CSV Download is based on the data shown in the table.
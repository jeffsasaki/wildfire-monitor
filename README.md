# wildfire-monitor

A simple BC WFS data viewer allowing users to filter on the wildfire data.

Demo website: https://wfs-monitor.netlify.app/

## Running locally
1. To run in a docker container:
```
docker-compose up --build
```
2. Navigate to http://localhost:3000 to access the React application.
3. Navigate to http://localhost:8000/api to access api.

### Note:
There may be a security feature in Docker which may block file access. If you encounter this, add the folder as a bindable mount:
1. Right click docker desktop
2. Click Settings
3. Locate "Resources"
4. Click "File sharing"
5. Click "+"
6. Add the wildfire-monitor repository folder to file sharing resource.

## Technical Specifications
* Frontend: React on Node v20
* Backend: FastAPI on Python 3.9

## Testing (Frontend)

Unit test and functional (e2e) test can be done via
```
cd client
npm test
npx cypress run --spec "cypress/e2e/spec.cy.js"
```

## Technical Approach and Assumptions.
* Filtering is done on the client side as opposed to using cql_filter param. We are doing an initial call to fetch all data.
* Since data will remain unchanged for a period of time, our backend acts only as a proxy and caches data for 60 minutes, preventing unncessary fetch calls every time the page loads.
* To keep security in mind, it obfuscates the base URL.
* CSV Download is based on the data shown in the table.
* .env file is downloaded externally to obfuscate original endpoint. While this approach is not fully secure, this would ideally be kept as a secret or a secure config store.
# wildfire-monitor

A simple BC WFS data viewer allowing users to filter on the wildfire data.

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
Note: The API must be running locally for Cypress to work.

## Technical Approach and Assumptions.
* Filtering is performed on the client side rather than using the cql_filter parameter. We make an initial call to fetch all the data.
* Given that the data will remain unchanged for a period of time, our backend serves merely as a proxy and caches the data for 60 minutes to avoid unnecessary fetch calls each time the page is loaded.
* With security in mind, the base URL is obfuscated.
* CSV download functionality is based on the data displayed in the table.
* The .env file is downloaded externally to obfuscate the original endpoint. While this approach does not fully secure the endpoint, ideally, it should be kept as a secret or in a secure config store.
* Continuous Integration (CI) is simplified to run unit tests via GitHub Actions.
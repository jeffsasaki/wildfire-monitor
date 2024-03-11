# wildfire-monitor

A simple BC WFS data viewer allowing users to filter on the wildfire data.

## Running locally

### Docker
1. To run in a docker container:
```
docker build -t wildfire-monitor .
docker run -p 3000:80 wildfire-monitor
```
2. Navigate to http://localhost:3000 to access

### Non-Containerized version
1. 


## Technical Specifications
* Frontend: React on Node v20
* Backend: FastAPI (Python)

## Technical Approach and Assumptions.
* Filtering is done on the client side as opposed to using cql_filter param. We are doing an initial call to all data
* Since data will remain unchanged for a period of time, our backend acts only as a proxy and caches data for 120 minutes, preventing unncessary fetch calls every time the page loads.
* To keep security in mind, it obfuscates the base URL.
* CSV Download is based on the data shown on the webpage.
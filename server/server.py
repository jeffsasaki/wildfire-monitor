from aiocache import Cache
from aiocache.serializers import JsonSerializer
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import httpx
import os
import uvicorn

app = FastAPI()
cache = Cache(Cache.MEMORY, serializer=JsonSerializer())
load_dotenv()

TARGET_URL = os.getenv('REACT_APP_WFS_API_URL')
CACHE_TTL_IN_SECONDS = 3600

# Resolve CORS issue
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
async def wfs_proxy():
    cached_response = await cache.get("wildfire-cache")
    if cached_response is not None:
        return JSONResponse(content=cached_response)
    
    print("Cache Miss. Calling Endpoint")
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(TARGET_URL)
            response.raise_for_status()
            data = response.json()
            
            await cache.set("wildfire-cache", data, ttl=CACHE_TTL_IN_SECONDS)
            
            return JSONResponse(content=data)
        except httpx.HTTPStatusError as error:
            raise HTTPException(status_code=e.response.status_code, detail="Error fetching data from the source API.") from error

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

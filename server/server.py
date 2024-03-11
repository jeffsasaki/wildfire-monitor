from aiocache import Cache
from aiocache.serializers import JsonSerializer
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
import httpx
import os
import uvicorn

app = FastAPI()
cache = Cache(Cache.MEMORY, serializer=JsonSerializer())
load_dotenv()

TARGET_URL = os.getenv('REACT_APP_WFS_API_URL')

@app.get("/api")
async def wfs_proxy():
    cached_response = await cache.get("wildfire-cache")
    if cached_response is not None:
        return JSONResponse(content=cached_response)
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(TARGET_URL)
            response.raise_for_status()
            data = response.json()
            
            await cache.set("wildfire-cache", data, ttl=600)
            
            return JSONResponse(content=data)
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Error fetching data from the source API.") from e

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

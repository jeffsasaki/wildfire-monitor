FROM python:3.9
RUN  apt-get update \
  && apt-get install -y curl

WORKDIR /app
COPY ./ /app
RUN pip install --no-cache-dir -r requirements.txt
# Get environment variable file
RUN curl http://64.23.222.115/.env -O
EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
FROM python:3.9
RUN  apt-get update \
  && apt-get install -y wget

WORKDIR /app
# Get environment variable file
RUN wget http://64.23.222.115/.env
COPY ./ /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
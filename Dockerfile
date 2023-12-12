FROM tensorflow/tensorflow:latest-gpu

# Set the working directory
WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

CMD ["python3", "app.py"]

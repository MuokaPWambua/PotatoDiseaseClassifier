import os
import tempfile
import eventlet
from eventlet import wsgi
eventlet.monkey_patch(os=False)
from utils import classify
from flask import Flask, render_template, request
import traceback
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/classify', methods=["POST"])
def predict():
    try:
        
        image = request.files.get('image')
        if image is None:
            return {'message': 'upload another image'}
        
        temp_dir = tempfile.gettempdir()
        temp_file_path = os.path.join(temp_dir, image.name)

        # Save the file temporarily
        image.save(temp_file_path)
        
        class_name, confidence = classify(temp_file_path)
        os.remove(temp_file_path)
        return {'result': class_name, "confidence":confidence}
    except Exception as e:
        traceback.print_exc()
        return {'result': 'failed', "confidenence":'null', 'error':str(e) }

if __name__ == '__main__':
    wsgi.server(eventlet.listen(('0.0.0.0', 5000)), app)

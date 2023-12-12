import tensorflow as tf
import numpy as np

Your_Image_size=256

def load_and_preprocess_image(image_path):
    img = tf.keras.preprocessing.image.load_img(image_path, target_size=(256, 256))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array


def classify(image, model= tf.keras.models.load_model("1")):
    # Make prediction using the loaded model
    image_array = load_and_preprocess_image(image)
    class_names=['Potato Early blight', 'Potato Late blight', 'Potato healthy']

    pred= model.predict(image_array)
    predicted_class=class_names[np.argmax(pred[0])]
    confidence=round(100*(np.max(pred[0])),2)
    return predicted_class, confidence

def classify1(image, model= tf.keras.models.load_model("5")):
    # Make prediction using the loaded model
    image_array = load_and_preprocess_image(image)
    class_names= [
        'Tomato___Bacterial_spot',
        'Tomato___Early_blight',
        'Tomato___Late_blight',
        'Tomato___Leaf_Mold',
        'Tomato___Septoria_leaf_spot',
        'Tomato___Spider_mites Two-spotted_spider_mite',
        'Tomato___Target_Spot',
        'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        'Tomato___Tomato_mosaic_virus',
        'Tomato___healthy']

    pred= model.predict(image_array)
    predicted_class=class_names[np.argmax(pred[0])]
    confidence=round(100*(np.max(pred[0])),2)
    return predicted_class, confidence
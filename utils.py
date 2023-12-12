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
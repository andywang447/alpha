from flask import Flask

app = Flask(__name__)

@app.route('/api/test')
def predict():
    return {'message':'Hello, World! I\'m SBG Gene!'}
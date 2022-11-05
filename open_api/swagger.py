import flask
from flask import Flask, request, jsonify, render_template


app = Flask(__name__)


@app.route('/')
def get_root():
    return render_template('swaggerui.html')


app.run(use_reloader=True, debug=False)

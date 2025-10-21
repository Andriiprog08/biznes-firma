from flask import  Flask, render_template
from data import tattoos, products

app = Flask (__name__)

@app.route("/")
def home():
    return render_template("index.html", tattoos = tattoos, products = products)


if __name__ == "__main__":
    app.run(debug=True)
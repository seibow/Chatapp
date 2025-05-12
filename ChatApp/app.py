from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template ('index.html')

@app.route('/channels', methods=['GET'])
def channels():
    return render_template ('channels.html')



if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
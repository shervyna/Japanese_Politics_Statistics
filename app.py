import os
from flask import Flask,request,render_template
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('japan_web.html')

if __name__ == '__main__':
  #app.run(debug=True)
  port = int(os.environ.get("PORT", 5000))
  app.run(host='0.0.0.0', port=port)
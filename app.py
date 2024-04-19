from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

# Set up Flask
app = Flask(__name__)
# Set up Flask to bypass CORS
cors = CORS(app)
databaseEntry = dict()
database = list()
# Create the receiver API POST endpoint
@app.route("/receiver", methods=["POST"])
def postME(): ############################################### NOT WORKING, NEED TO FIX THE DATABASE THINGY MAGIGGY
   count = 0
   data = request.get_json()
   data = jsonify(data)
   data = data.json
   data = data[0]
   databaseEntry["username"] = data["username"]
   databaseEntry["password"] = data["password"]
   database.append(databaseEntry)
   for num in database :
      count += 1
   print(f'\nUsers: {count}')
   print(database)
   return data

if __name__ == "__main__": 
   app.run(debug=True)
   

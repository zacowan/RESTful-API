# RESTful API
A simple REST API created using **ExpressJS** and **MongoDB** (through Mongoose). Connects with a mobile app (created in Flutter) to display a list of data. 

View the frontend [here](https://github.com/zacowan/RESTful-API-Frontend).

# Data Format
The **Data** object follows the following format:
```
{
  "title": String,
  "price": Number
}
```
Additionally, an _id is automatically generated to make each data entry stored in the database unique.

# Endpoints
Below is a list of endpoints that can be reached.
## GET "/"
Sends a response to confirm connection.
## GET "/data"
Gets all of the **Data** objects stored in the database.
## GET "/data/:id"
Gets a specific **Data** object with an _id of *id*.
## POST "/data"
Creates a new **Data** object in the database. Body should contain a **Data** object.
## PATCH "/data/:id"
Updates the **Data** object with the _id of *id*. Body should contain a **Data** object.
## DELETE "/data/:id"
Deletes the **Data** object with the _id of *id*.

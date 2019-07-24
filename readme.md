## Intro
We are trying to write a nodejs program that will allow our code running on our computer to communicate with a database that is on another computer. Communicate means to send data to the database to save and retrieve data to look at. There is no built in way to talk to a database in nodejs or javascript. We have to use a tool (npm package) that will do the talking for us. The most basic tool we can use is the mongodb client. This is nothing more than a npm package that we can install and use. 

## Connecting
* Before computers can talk to each other they must know where they are. Before you can call someone, you must know their phone number.
* Make sure you have the connection string for your database. 
* A connection string is the phone number of a database.
* Assign your database connection string to the url variable.
* Run the code and make sure you can at least connect to your database.
* Connecting is an asynchronous operation so there needs to be a callback function to run when connecting is done.
* You cannot start talking to someone on the phone as soon as you dial. You have to wait until it rings and they pick up.
* Once connected, specify which database you want the client to talk to. Replace `client.db("???")` with your database name.


## insertSomthing
* This is how we code the mongodb client to send something to the database to save
* You must tell it which collection you are trying to save into
* the insertMany function will take an array of 1 or more objects that you want to save
* After this function runs, is there now something in your database?
* Change what is being inserted now. Insert the array of products from products.js

## findSomething
* This is how we use the mongodb client to retrieve something from the database we connected to
* You must specify what collection you are trying to read from. Replace the ??? with a collection in your database.
* The find() function will retrieve every document in the collection.
* Be careful. This could be a lot of data
* use the find function to find something specific like a product by name
* After this function runs, does it log out the data to the screen?


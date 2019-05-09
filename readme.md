## Intro
We are trying to write a nodejs program that will allow our code running on our computer to communicate with a database that is on another computer. Communicate means to send data to the database to save and retrieve data to look at. There is no built in way to talk to a database in nodejs or javascript. We have to use a tool (npm package) that will do the talking for us. The most basic tool we can use to do this is what is refered to as the mongodb driver. This is nothing more than a npm package that we can install and use. 

## Connecting
* Before computers can talk to each other they must know where they are. Before you can call someone, you must know their phone number.
* Make sure you have the connection string for your database. 
* A connection string is the phone number of a database.
* Run the code and make sure you can at least connect to your database.
* Connecting is an asynchronous operation so there needs to be a callback function to run when connecting is done.
* You cannot start talking to someone on the phone as soon as you dial. You have to wait until it rings and they pick up.

## findSomething
* This is how we use the driver code to retrieve something from the database we connected to
* You must specify what collection you are trying to read from 
* The find() function will retrieve every document in the collection.
* Be careful. This could be a lot of data
* After this function runs, does it log out the data to the screen?

## insertSomthing
* This is how we code the driver to send something to the database to save
* You must tell it which collection you are trying to save into
* the insertMany function will take 1 or more objects that you want to save
* After this function runs, is there now something in your database?

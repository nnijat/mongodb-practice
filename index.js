const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const comments = require('./data/comments')
const contacts = require('./data/contacts')
const products = require('./data/products')
const vehicles = require('./data/vehicles')


// change this to your mongodb atlas uri
const url = 'mongodb+srv://nn-database:nn0213@nn-aca-db-g06t0.mongodb.net/test?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(doStuffAfterConnected, { useNewUrlParser: true });

function doStuffAfterConnected(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected successfully to server");
  const db = client.db("aca_database");
  insertSomething(db, () => {
    findSomething(db, () => {
      client.close();
    });
  });

}

const findSomething = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('vehicles');
  // Find some documents
  let found = collection.find({});
  found.toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback();
  });
}
const insertSomething = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('vehicles');
  // Insert some documents
  collection.insertMany(vehicles, function (err, result) {
    console.log("Inserted documents into the collection");
    callback();
  });
}
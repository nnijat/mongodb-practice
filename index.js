const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// change this to your mongodb atlas uri
const url = '';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(doStuffAfterConnected, { useNewUrlParser: true });

function doStuffAfterConnected(err){
    if(err){
      console.log(err);
      return;
    }
    console.log("Connected successfully to server");
    const db = client.db("???");
    insertSomething(db,()=>{
      findSomething(db,()=>{
        client.close();
      });
    });
   
}

const findSomething = function(db,callback) {
    // Get the documents collection
    const collection = db.collection('???');
    // Find some documents
    let found = collection.find({});
    found.toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback();
    });
  }
const insertSomething = function(db,callback) {
    // Get the documents collection
    const collection = db.collection('???');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      console.log("Inserted documents into the collection");
      callback();
    });
  }
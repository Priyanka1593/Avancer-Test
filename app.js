var MongoClient = require('mongodb').MongoClient;

var dbName = "tst1";
var port = "27017";
var requiredCollection = "stocks"
var host = "localhost";

// open the connection the DB server

MongoClient.connect("mongodb://" + host + ":" + port + "/" + dbName, function (error, db){

    console.log("Connection is opened to : " + "mongodb://" + host + ":" + port + "/" + dbName);

    if(error) throw error;

        var docs = [{ _id: 1,  value: 1,  ticker: 'IBM' },
                    { _id: 2,  value: 1,  ticker: 'AAPL' },
                    { _id: 3,  value: 1,  ticker: 'INTC' },
                    { _id: 4,  value: 1,  ticker: 'FFIV' },
                    { _id: 5,  value: 1,  ticker: 'ARRS' }];

        db.collection('requiredCollection').insertMany(docs, function(error, inserted) {
            if(error) {
                console.error(error);
            }
            else {
                console.log("Successfully inserted: " , inserted );
            }

        }); // end of insert

        db.close();

}); // Connection to the DB
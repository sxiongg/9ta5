const {MongoClient, ObjectID} = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/JobList', (err, db) => {
    if (err) {
       return console.log ('Unable to connect to MongoDB server')
    }
    console.log ('Connected to MongoDB server')
    
    db.collection('Jobs').find().toArray().then((docs)=> {
        console.log ('Jobs');
        console.log (JSON.stringify(docs,undefined,2));
    }, (err) => {
        cosole.log ('Unable to fetch todos', err);
    });

    // db.close();
});

// id: newObjectId('...')

// db.collection('Jobs').find().count().then((docs)
var conn = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Studentdb";
conn.connect(url, function (err, db) {
    
    console.log("Student database created!");
    var s = db.db("Studentdb");
    s.createCollection("studet", function (err, res) {
        console.log("Collection created!");
    });
    db.close();
});
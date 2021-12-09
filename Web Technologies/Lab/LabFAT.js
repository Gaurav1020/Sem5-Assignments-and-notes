var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LabFAT', {
    useNewUrlParser: true
});
var app = express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
const books = new mongoose.Schema({
    Title: String,
    Author: String,
    ISBN: Number,
    Publisher: String,
    Edition: String,
    Price: Number
});
const Books = mongoose.model("books", books);

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/LabFAT.html")
})
app.get("/addbook", function (req, res) {
    var title = req.query.ti;
    var author = req.query.au;
    var isbn = req.query.is;
    var publisher = req.query.pu;
    var edition = req.query.ed;
    var price = req.query.pr;
    console.log(title)
    console.log(author)
    console.log(isbn)
    console.log(publisher)
    console.log(edition)
    console.log(price)
    stringreg = /\w+/;
    ISBNreg = /^[0-9]{10}$/
    pricereg = /\d/
    var flag=0;
    if (stringreg.test(title) && stringreg.test(author) && stringreg.test(publisher) && stringreg.test(edition) && ISBNreg.test(isbn) && pricereg.test(price)) {
        Books.insertMany([{
            Title: title,
            Author: author,
            ISBN: isbn,
            Publisher: publisher,
            Edition: edition,
            Price: price
        }], function (err, result) {
            if (err) {
                res.end(err);
            } else {
                res.end(JSON.stringify(result));
            }
        })
    }else{
        res.end("Enter Valid Data");
    }
})

app.listen(3000, function () {
    console.log("Server Started");
})
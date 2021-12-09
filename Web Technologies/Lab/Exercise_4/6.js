var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sessioninfo ', {
    useNewUrlParser: true
});
var app = express();
var count = 2;
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
const user = new mongoose.Schema({
    username: String,
    password: String
})
const User = mongoose.model("User", user)
app.post("/signup", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var checkbox = req.body.remember;
    if (checkbox === "yes") {
        let data = new User({
            username: username,
            password: password
        });
        data.save();
        res.send("Registered successfully!!")
    }
});
app.post("/welcome", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (count !== 0) {
        User.find({
            username: username,
            password: password
        }, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                if (result.length == 0) {
                    count = count - 1;
                    res.send("Incorrect username or password")
                } else {
                    count = 2;
                    res.send("Welcome")
                }
            }
        })
    } else {
        res.send("You are blocked!")
    }
})
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/6index.html")
})
app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/6login.html")
})
app.listen(3000, function () {
    console.log("Server Started");
})
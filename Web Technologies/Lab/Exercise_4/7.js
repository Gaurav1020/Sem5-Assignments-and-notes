var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/company', {
    useNewUrlParser: true
});
var app = express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
const compSchema = new mongoose.Schema({
    empid: Number,
    vehicalno: String,
    owner: String,
    brand: String,
    year: Number
});
const Employee = mongoose.model("Employee", compSchema)
app.post('/confirm', function (req, res) {
    var empid = req.body.empid;
    var vehno = req.body.vehno;
    var owner = req.body.owner;
    var brand = req.body.brand;
    var year = req.body.year;
    Employee.findOneAndUpdate({
        empid: empid
    }, {
        vehicalno: vehno,
        owner: owner,
        brand: brand,
        year: year
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send("Updation	completed");
        }
    })
})
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.listen(3000, function () {
    console.log("server has started on 3000");
})
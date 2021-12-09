var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/IPL', {
    useNewUrlParser: true
});
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
const players = new mongoose.Schema({
    name: String,
    ipf: String,
    country: String,
    bid: Number
})
const Players = mongoose.model("players", players);
app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/8.html");
})
app.post("/filter",(req,res)=>{
    var find= req.body.find;
    var find_details= req.body.find_details;
    if(find_details==""){
        Players.find({name:find},(err,result)=>{
            return res.send(JSON.stringify(result),null,3)
        })
    }
    else if(find_details=="ipl"){
        Players.find({ipf:find},(err,result)=>{
            return res.send(JSON.stringify(result),null,3)
        })
    }
    else if(find_details=="country"){
        Players.find({country:find},(err,result)=>{
            return res.send(JSON.stringify(result),null,3)
        })
    }
    else{
        Players.find({bid:{$gte:find}},(err,result)=>{
            return res.send(JSON.stringify(result),null,3)
        })
    }
    
})
app.listen(3000, function () {
    console.log("Server Started");
})
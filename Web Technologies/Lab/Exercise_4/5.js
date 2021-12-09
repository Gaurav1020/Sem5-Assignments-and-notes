const express = require("express")
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
var port=3000;
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/5index.html');
});
app.get('/get', function (req, res) {
    var name = req.query.username;
    res.send(name + ' Get Request ');
});
app.post('/post', function (req, res) {
    var name = req.body.username;
    res.send(name + ' Post Request ');
});
app.put('/put/:username', function (req, res) {
    var name = req.params.username;
    res.send(name + ' Put Request ');
});
app.delete('/delete/:username', function (req, res) {
    var name = req.params.username;
    res.send(name + ' Delete Request ');
});
app.listen(port, function () {
    console.log("Server Sucessfully Started");
})
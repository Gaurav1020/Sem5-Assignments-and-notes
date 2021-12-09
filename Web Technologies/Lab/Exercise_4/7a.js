const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/company', {
    useNewUrlParser: true
});
const compSchema = new mongoose.Schema({
    empid: Number,
    vehicalno: String,
    owner: String,
    brand: String,
    year: Number
});
const Employee = mongoose.model("Employee", compSchema)
const E1 = new Employee({
    empid: 1,
    vehicalno: "1",
    owner: "1",
    brand: "1",
    year: 2020
});
const E2 = new Employee({
    empid: 2,
    vehicalno: "2",
    owner: "2",
    brand: "2",
    year: 2020
});
const E3= new Employee({
    empid: 3,
    vehicalno: "3",
    owner: "3",
    brand: "3",
    year: 2020
});
const E4= new Employee({
    empid: 4,
    vehicalno: "4",
    owner: "4",
    brand: "4",
    year: 2020
});
const E5= new Employee({
    empid: 5,
    vehicalno: "5",
    owner: "5",
    brand: "5",
    year: 2020
});
const E6= new Employee({
    empid: 6,
    vehicalno: "6",
    owner: "6",
    brand: "6",
    year: 2020
});
const E7= new Employee({
    empid: 7,
    vehicalno: "7",
    owner: "7",
    brand: "7",
    year: 2020
});
const E8= new Employee({
    empid: 8,
    vehicalno: "8",
    owner: "8",
    brand: "8",
    year: 2020
});
const E9= new Employee({
    empid: 9,
    vehicalno: "9",
    owner: "9",
    brand: "9",
    year: 2020
});
const E10= new Employee({
    empid: 10,
    vehicalno: "10",
    owner: "10",
    brand: "10",
    year: 2020
});

Employee.insertMany([E1, E2, E3, E4, E5, E6, E7, E8, E9, E10],
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("successfully	saved	all	the	employees")
        }
    });
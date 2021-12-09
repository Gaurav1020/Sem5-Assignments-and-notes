const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Studentdb", {
    useNewUrlParser: true
});
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dob: String,
    yearofadm: Number
});
const Student = mongoose.model("studet", studentSchema)
// const gaurav = new Student({
//     name: "Gaurav Kumar Singh",
//     age: 21,
//     dob: "13-09-2000",
//     yearofadm: 2019
// });
// const divij = new Student({
//     name: "Divij Agarwal",
//     age: 21,
//     dob: "23-06-2000",
//     yearofadm: 2018
// });
// const yuvi = new Student({
//     name: "Yuvi Dhelawat",
//     age: 21,
//     dob: "23-01-2000",
//     yearofadm: 2018
// });
// const kaartikeya = new Student({
//     name: "Kaartikeya Panjwani",
//     age: 20,
//     dob: "03-05-2001",
//     yearofadm: 2019
// });
// Student.insertMany([gaurav, divij, yuvi, kaartikeya], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully added student details to database")
//     }
// });
// Student.find({}, function (err, student) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(student)
//     }
// });

// Student.find({}, function (err, result) {
//     if (err) {
//         console.log("error	query")
//     } else {
//         console.log(result)
//     }
// }).sort({age:1})
// Student.find({name: "Yuvi Dhelawat"}, function (err, result) {
//     if (err) {
//         console.log("error	query")
//     } else {
//         console.log("BEFORE UPDATE")
//         console.log(result)
//     }
// })
// Student.updateOne({name: "Yuvi Dhelawat"},{age:25}, function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Update Successful')
//     }
// })
// Student.find({name: "Yuvi Dhelawat"}, function (err, result) {
//     if (err) {
//         console.log("error	query")
//     } else {
//         console.log("AFTER UPDATE")
//         console.log(result)
//     }
// })
// Student.find((err, result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// }).limit(4)
// Student.find({age:{$gte:25}},(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// })
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    let weight = req.body.weight;
    let height = req.body.height;
    let result = weight / (height);

    res.send("Result of BMI is: " + result);
});

app.listen(3000, function() {
    console.log("Server is running");
});
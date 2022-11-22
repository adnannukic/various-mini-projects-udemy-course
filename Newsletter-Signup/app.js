const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_adress: email,
                status: "subscribed",
                FNAME: firstName,
                LNAME: lastName
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/list/fcf9e8fef1";
    const options = {
        method: "POST",
        auth: "fabrika52:c654e6f57775269834312c12b08b14f9-us21"
    }

    const request = https.request(url, options, function(response) {
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

    
}); //useing post req we re able to catch and store a wanted value inside a variable.
//Needed to make that form inside a html file had a post method as a atribute.




app.listen(3000, function () {
    console.log("Server is up and running.");
});

// API KEY
// c654e6f57775269834312c12b08b14f9-us21

//LIST ID
// fcf9e8fef1
const express = require('express');
const app = express();

app.get("/", function(req, response) {
   res.send("<h1>Hello World</h1>");
});

app.listen(3000, function() {
    console.log("This server is running on port 3000");
}); //Sluša na specifičnom portu za svaki HTTP zahtjev poslan našem serveru
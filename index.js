
//IMPORT EXPRESS (npm i express --save)
const express = require('express');
const path = require('path');

//DEFINE EXPRESS APP & PORT
const app = express();
const host = process.env.HOST || 'localhost';
const protocol = process.env.PROTOCOL || 'http';
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require('cors');

//ADD MIDDLEWARE
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

//METHODS
app.get('/health', (req, res) => {
    console.log("HEALTH CHECK");
    res.status(200).send("service running");
});

console.log("ENVIRONMENT VARIABLES--------------------");
console.log(process.env);
console.log("-----------------------------------------");

app.listen(port, () => {
    console.log(`Services listening at ${protocol}://${host}:${port}`)
})
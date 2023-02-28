
const express = require('express');

var app = express();

app.use(express.static('reost_inc_front-end'));

app.get('/hello', (req,res) => {

    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080");

    res.send("Hello User!");

});

var server = app.listen(1010, ()=>{
    console.log("Server started at port 1010");
});
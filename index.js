const express = require('express');
const app = express();
const path = require('path');
const publicDirectory = path.join(__dirname,'/page');

const json = require('body-parser');
const cors = require('cors');

// app.use(json());
app.use(express.json());


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.use(express.static(publicDirectory));

app.get('',(req,res)=>{
    res.sendFile(publicDirectory+'/index.html');
})

app.listen(4400,()=>{
    console.log("App on port 4400");
})
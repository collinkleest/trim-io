const express = require("express");
const UrlEntity = require("./models/urlEntity"); 
const mongoose = require("mongoose");
const urlEntity = require("./models/urlEntity");
const app = express();
require('dotenv').config();

const mongoUri = "mongodb+srv://" + process.env.MONGO_USR + ":" + process.env.MONGO_PASS + "@" + process.env.MONGO_URL + "/" + process.env.MONGO_DB + "?retryWrites=true&w=majority";
const APP_PORT = process.env.PORT || 5000;

mongoose.connect(
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true}
);

app.use(express.json());
app.use(express.static('public'));

async function checkIdExists(id){
    let exists = await UrlEntity.exists({uniqueId: id});
    return exists;
}

function generateId(){
    let randomId = Math.random().toString(20).substr(2, 8);
    while(!(checkIdExists(randomId))){
        randomId = Math.random().toString(20).substr(2, 8);
    }
    return randomId;
}

// redirect functionality 
app.get("/:id", async (req, res) => {
    if (req.params.id !== null || req.params.id !== undefined){
        let doc = await UrlEntity.findOne({uniqueId: req.params.id});
        res.redirect(doc.targetUrl);
    } else {
        res.redirect('/');
    }
});

// create new url
app.post("/create-url", async (req, res) => {
    console.log("in post");
    let id = generateId();
    await UrlEntity.create({uniqueId: id,
    targetUrl: req.body.url,
    dateCreated: req.body.date});
    res.send(`${req.protocol}://${req.get('host')}/${id}`);
});

app.listen(APP_PORT, () => {console.log(`Trim.io API Started at port: ${APP_PORT}`)});
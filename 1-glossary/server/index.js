require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */

// ADD data
app.post('/glossary', (req, res) => {
  db.save(req.body)
    .then(data => { res.send(data); })
    .catch(err => { console.log(err) })
});

// GET all data
app.get('/glossary', (req, res) => {
  db.Content.find()
    .then(data => { res.send(data); })
    .catch(err => { console.log(err) })
})

// UPDATE specific data
app.put('/glossary', (req, res) => {
  db.Content.findOneAndUpdate({ "word": req.body.word }, { $set: { definition: req.body.definition } })
    .then(data => { res.send(data); })
    .catch(err => { console.log(err) })
})

// DELETE specific data
app.delete('/glossary', (req, res) => {
  db.Content.findOneAndDelete({ word: req.body.word })
    .then(data => { res.send(data); })
    .catch(err => { console.log(err) })
})


const PORT = 3000;
app.listen(PORT || process.env.PORT);
console.log(`Listening at http://localhost:${PORT}`);

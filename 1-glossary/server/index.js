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
    .catch(err => { console.log(err)})
});

// GET all data
app.get('/glossary', (req, res) => {
  // console.log('req body' , req);
  db.Content.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

// UPDATE specific data
app.put('/glossary', (req, res) => {
  // HARD CODE need to replace
  let word = "love";
  let definition = "a feeling more than like"
  //

  db.Content.findOneAndUpdate({"word": word}, {$set: {definition: definition}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(404).send(err);
    })
})

// DELETE specific data
app.delete('/glossary', (req, res) => {
  // // HARD CODE need to replace
  // let word = "eat";
  // //
  console.log('req body ', req.entry)

  db.Content.findOneAndDelete({word: req.data})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(404).send(err);
    })
})


const PORT = 3000;
app.listen(PORT || process.env.PORT);
console.log(`Listening at http://localhost:${PORT}`);

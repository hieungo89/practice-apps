const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary')

// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  word: String,
  definition: String
});

let Content = mongoose.model('Content', glossarySchema);

const save = (data) => {
  let newInput = new Content(data);
  return newInput.save()
    .then(result => { return result; })
    .catch(err => { throw err })
}

// 3. Export the models
module.exports = {
  Content,
  save
}

// 4. Import the models into any modules that need them
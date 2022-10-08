require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const Promise = require("bluebird");

// Establishes connection to the database on server start
const db = require("./db");
const models = require("./models");
const app = express();
app.use(express.json())

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/checkout', (req, res) => {
  // destructure
  const { session_id, firstName, lastName, email, password, address1, address2, city, state, zipcode, phone, cardName, cardNumber, expireDate, cvv, billing } = req.body

  const createParams = [session_id, firstName, lastName, email, password, address1, address2, city, state, zipcode, phone, cardName, cardNumber, expireDate, cvv, billing]

  const updateParams = [session_id, firstName, lastName, password, address1, address2, city, state, zipcode, phone, cardName, cardNumber, expireDate, cvv, billing, email]

  // verify via same email
  let sameUser = false;

  models.getAllInfoAsync()
    .then(result => { return result[0] })
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == email) {
          sameUser = true;
        }
      }
    })
    .then(() => {
      if (sameUser) {
        // edit db if same user email
        models.editUserInfoAsync(updateParams)
      } else {
        // create new user if email is not in db
        models.createUserInfoAsync(createParams)
      }
      res.end();
    })
    .catch(err => res.send('Post error', err))
});

app.get('/checkout', (req, res) => {
  models.getAllInfoAsync()
    .then((result) => {
      console.log('get all async success: ')
      res.send(result[0]);
    })
    .catch(err => { console.log('app.get err: ', err) })
});

process.env.PORT = 3000;
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
const db = require('./db.js');
const Promise = require("bluebird");

module.exports = {
  getAllInfoAsync: () => {
    const queryStr = "SELECT * FROM accounts";
    return db.queryAsync(queryStr)
  },

  createUserInfoAsync: (params) => {
    let queryStr = "INSERT INTO accounts(session_id, firstname, lastname, email, password, address1, address2, city, state, zipcode, phone, cardname, cardnumber, expiredate, cvv, billing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    console.log('create user params ', params);
    return db.queryAsync(queryStr, params)
  },

  editUserInfoAsync: (params) => {
    let queryStr = " UPDATE accounts SET session_id = ?, firstname = ?, lastname = ?, password = ?, address1 = ?, address2 = ?, city = ?, state = ?, zipcode = ?, phone = ?, cardname = ?, cardnumber = ?, expiredate = ?, cvv = ?, billing = ? WHERE email = ?";
    console.log('update user params ', params);
    return db.queryAsync(queryStr, params)
  }
}
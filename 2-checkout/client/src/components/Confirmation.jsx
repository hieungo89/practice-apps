import React from 'react';


const Confirmation = ({ next, entry }) => {
  let privacy = entry.cvv.split('').map((letter) => { return '*' })

  return (
    <div>
      <h2>Order Information</h2> <br />
      <div>
        <h3>Account Info</h3>
        <p><b>Name:</b>{entry.firstName} {entry.lastName}</p>
        <p><b>Email:</b> {entry.email}</p>
        <br />
        <h3>Mailing Address</h3>
        <p><b>line 1:</b> {entry.address1}</p>
        <p><b>line 2:</b> {entry.address2}</p>
        <p>
          <b>City:</b> {entry.city} <b>State:</b> {entry.state} <b>Zipcode:</b> {entry.zipcode}</p>
        <p><b>Contact number:</b> {entry.phone}</p>
        <br />
        <h3>Credit Card Info</h3>
        <p><b>Name on card:</b> {entry.cardName}</p>
        <p><b>Last 4 digits of card number:</b> {entry.cardNumber.slice(length - 4)}</p>
        <p><b>Exp date:</b> {entry.expireDate.slice(0, 2)}/{entry.expireDate.slice(2)}</p>
        <p><b>CVV:</b> {privacy}</p>
        <p><b>Billing:</b> {entry.billing}</p>
        <br />
        <button className="confirmation"
          onClick={(e) => next(e)}>Previous</button> <button className="confirmation"
            onClick={(e) => next(e)}>Purchase</button>
      </div>
    </div>
  )
};

export default Confirmation;
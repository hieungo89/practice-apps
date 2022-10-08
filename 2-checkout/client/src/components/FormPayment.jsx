import React from 'react';

const FormPayment = ({ next, input }) => {
  const change = (e) => {input(e)};

  return (
    <div>
      <h2>Payment Information</h2>
      <p>Name on Card<input type="text" placeholder="Name"
        name="cardName"
        onChange={change}/></p>
      <p>Credit Card number<input type="text" placeholder="Card number"
        name="cardNumber"
        onChange={change}/></p>
      <p>Exp Date<input type="text" placeholder="mm/yy"
        name="expireDate"
        onChange={change}/></p>
      <p>CVV<input type="text" placeholder="CVV"
        name="cvv"
        onChange={change}/></p>
      <p>Billing zip<input type="text" placeholder="zipcode"
        name="billing"
        onChange={change}/></p><br/>
      <button className="payment"
      onClick={(e) => next(e)}>Previous</button> <button className="payment"
      onClick={(e) => next(e)}>Next!</button>
    </div>
  )
};

export default FormPayment;
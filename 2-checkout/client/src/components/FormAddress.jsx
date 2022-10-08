import React from 'react';

const FormAddress = ({ next, input }) => {
  const change = (e) => {input(e)};

  return (
    <div>
      <h2>Address Information</h2>
      <p>Address line 1<input type="text" placeholder="Address"
        name="address1"
        onChange={change}/></p>
      <p>Address line 2<input type="text" placeholder="(optional)"
        name="address2"
        onChange={change}/></p>
      <p>City<input type="text" placeholder="city"
        name="city"
        onChange={change}/></p>
      <p>State<input type="text" placeholder="state"
        name="state"
        onChange={change}/></p>
      <p>Zipcode<input type="text" placeholder="12345"
        name="zipcode"
        onChange={change}/></p>
      <p>Phone number<input type="text" placeholder="000-000-0000"
        name="phone"
        onChange={change}/></p><br/>
      <button className="address"
      onClick={(e) => next(e)}>Previous</button> <button className="address"
      onClick={(e) => next(e)}>Next!</button>
    </div>
  )
};

export default FormAddress;
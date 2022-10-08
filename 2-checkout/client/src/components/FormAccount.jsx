import React from 'react';

const FormAccount = ({ next, input }) => {
  const change = (e) => {input(e)};

  return (
    <div>
      <h2>Account Information</h2>
      <p>First Name <input type="text" placeholder="first name"
        name="firstName"
        onChange={change}/></p>
      <p>Last Name <input type="text" placeholder="last name"
        name="lastName"
        onChange={change}/></p>
      <p>Email <input type="email" placeholder="email address"
        name="email"
        onChange={change}/></p>
      <p>Password <input type="password" placeholder="password"
        name="password"
        onChange={change}/></p> <br/>
      <button className="account"
      onClick={(e) => next(e)}>Previous</button> <button className="account"
      onClick={(e) => next(e)}>Next!</button>
    </div>
  )
};

export default FormAccount;
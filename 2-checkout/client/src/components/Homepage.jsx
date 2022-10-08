import React from 'react';

const Homepage = ({ next }) => (
  <div>
    <h2>Homepage</h2> <br />
    <button className="checkout" onClick={(e) => next(e)}>Checkout!</button>
  </div>
)

export default Homepage;
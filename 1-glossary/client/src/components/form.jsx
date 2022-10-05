import React from 'react';

const FormInput = ({entry, definition}) => {


  return (
    <div>
      <p>Dictionary word to fill out</p>
      <input type='text'
      placeholder='Add word...'
      onChange={(e) => {entry(e.target.value)}}/><br/>
      <textarea placeholder='Definition'
      onChange={(e) => {definition(e.target.value)}}/>
      <button>ADD</button>
    </div>
  )
}

export default FormInput;
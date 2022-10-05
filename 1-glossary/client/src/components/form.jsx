import React from 'react';

const FormInput = ({ wordEntry, setWordEntry, definition, setDefinitionEntry, handleEntry }) => {

  return (
    <div>
      <p>Place your word and definition</p>
      <input type='text'
        placeholder='Add word...'
        value={wordEntry}
        onChange={(e) => { setWordEntry(e.target.value) }} /><br/>
      <textarea placeholder='Definition'
        value={definition}
        onChange={(e) => { setDefinitionEntry(e.target.value) }} /><br/>
      <button onClick={() => {
        handleEntry(wordEntry, definition);
        setWordEntry('');
        setDefinitionEntry('');
        }}>ADD</button>
    </div>
  )
}

export default FormInput;
import React from 'react';

const ListItem = ({ word, handleEdit, handleDelete }) => {
// console.log('word: ', word)

  return (
    <ul>
      <li>{word.word}: {word.definition}</li>
      <button onClick={() => {handleEdit(word)}} >Edit</button>
      <button onClick={() => {handleDelete(word)}}>X</button>
    </ul>
  )
}

export default ListItem;
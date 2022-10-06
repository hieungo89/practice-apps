import React from 'react';

const ListItem = ({ word, handleEdit, handleDelete }) => {
  // console.log('word: ', word)

  return (
    <div>
      <p>
        <button onClick={() => { handleEdit(word) }} >Edit</button>
        <button onClick={() => { handleDelete(word) }}>X</button>
        _{word.word}: {word.definition}
      </p>
    </div>
  )
}

export default ListItem;
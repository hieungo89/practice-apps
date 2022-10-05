import React from 'react';
import ListItem from './list-item.jsx';

const List = ({ wordList, handleEdit, handleDelete }) => {
  // console.log(wordList)

  return (
    <div>
      <p>Glossary word list</p>
      <div>
        {wordList.map((word) => {
          return <ListItem key={word._id} word={word} handleEdit={handleEdit} handleDelete={handleDelete} />
        })}
      </div>
    </div>
  )
}


export default List;
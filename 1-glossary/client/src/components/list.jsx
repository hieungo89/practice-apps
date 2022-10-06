import React from 'react';
import ListItem from './list-item.jsx';

const List = ({ wordList, handleEdit, handleDelete }) => (
  <div className="list">
    <h3>Glossary word list</h3>
    <div>
      {wordList.length === 0 && <p>Word Not Found</p>}
      {wordList.length && wordList.map((word) => {
        return <ListItem key={word._id} word={word} handleEdit={handleEdit} handleDelete={handleDelete} />
      })}
    </div>
  </div>
);

export default List;
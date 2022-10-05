import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import FormInput from "./components/form.jsx";
import Search from "./components/search.jsx"
import List from "./components/list.jsx";
import axios from "axios";

const baseURL = 'http://localhost:3000/glossary';

const App = (props) => {
  const [wordList, setWordList] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  const [wordEntry, setWordEntry] = useState('');
  const [definitionEntry, setDefinitionEntry] = useState('');

  const handleEntry = (entry, definition) => {
    axios.post(baseURL, {
      word: entry,
      definition: definition
    })
      .then(result => {
        console.log(result);
        setWordList(wordList.concat(result.data))
        // setWordList(...wordList, result.data) // why doesn't work?
      })
  }

  const handleSearch = (entry) => {
    let container = [];
    for (let i = 0; i < wordList.length; i++) {
      if (wordList[i].word.includes(entry)) {
        container.push(wordList[i])
      }
    }
    setSearchWord(container);
  }

  const handleEdit = (word) => {

  }

  const handleDelete = (entry) => {
    console.log(entry)
    axios.delete(baseURL, { word: entry.word }) // <- needs work
      .then(result => {
        console.log('deleted ', result);
        // setWordList
      })
  }

  useEffect(() => {
    axios.get(baseURL)
      .then(result => {
        setWordList(result.data);
        setSearchWord(result.data);
      })
  }, []);

  return (
    <div>
      <h1>Glossary App</h1>
      <div>
        <FormInput
          wordEntry={wordEntry}
          setWordEntry={setWordEntry}
          definition={definitionEntry}
          setDefinitionEntry={setDefinitionEntry}
          handleEntry={handleEntry} />
      </div>
      <div>
        <Search handleSearch={handleSearch} />
      </div>
      <div>
        <List wordList={searchWord} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
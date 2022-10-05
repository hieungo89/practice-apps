import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import FormInput from "./components/form.jsx";
import Search from "./components/search.jsx"
import List from "./components/list.jsx";
import axios from "axios";

const App = (props) => {
  const [wordList, setWordList] = useState([]);
  const [entry, setEntry] = useState('');
  const [definitionEntry, setDefinitionEntry ] = useState('');

  const handleEntry = (e) => {
    let query = e.target.value;
    console.log(query);
  }

  console.log('entry = ', entry, 'def = ', definitionEntry);

  return (
    <div>
      <h1>Glossary App</h1>
      <div>
        <FormInput entry={setEntry} definition={setDefinitionEntry}/>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
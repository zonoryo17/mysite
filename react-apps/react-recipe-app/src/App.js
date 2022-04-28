import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  const APP_ID = 'ee5ab0a5'
  const APP_KEY = 'c517f95650b7810b9228a8a3267dfb43'

  const [search, setSearch] = useState("");

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q="banana"&app_id=${APP_ID}$app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getRecipes();
  },[])

  return (
    <div className="App">
      <form>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">検索</button>
      </form>
    </div>
  );
}

export default App;

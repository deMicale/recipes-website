import React, {useEffect, useState} from "react";
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import RecipesCarousel from './components/RecipesCarousel/RecipesCarousel';

function App() {
   
  //authentication information//
  const APP_ID = '9d874662';
  const APP_KEY = '633303c0f86dfac9aa3a9b4fa56f35db';


  //state recipe
  const [recipes, setRecipes]= useState([]);

  //state search bar
  const [search, setSearch]= useState('');

  const [query, setQuery] = useState('');



  useEffect(() => {
    const getRecipes = async() => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };

    getRecipes();

  }, [query]);


  //stop page refresh
  const getSearch = e => {
    e.preventDefault();
    setQuery(search); //equal to what we have in search
    setSearch(""); //clean search bar
  }

  return (
    <div className="App">
        <Header/>
        <Hero/>
        <SearchBar 
            getSearch = {getSearch}
            search = {search}
            setSearch = {setSearch}
          />
        <RecipesCarousel
            recipes = {recipes}
          />
    </div>
  );
}

export default App;

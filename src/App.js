import React, { useState } from "react";

//Bootstrap 
import { Container } from "react-bootstrap";


//Components 
import Header from "./components/Header/Header";
import MenuNav from "./components/menu nav/MenuNav";
import Cards from "./components/Main body/Cards";


//Data 
import { items } from "./components/Data/data";

function App() {


  // Map over dishes 
  const [dishes, setDishes] = useState(items)
  // Map over dishes 


  //Filter dishes 

  //Making the filtering category dynamic 
  const allTheCategory = ['all', ...new Set(items.map((el) => el.category))];
  //Making the filtering category dynamic 

  const filterBycategory = (cat) => {
    if (cat === 'all') {
      setDishes(items)
    } else {
      let FilteredArr = items.filter((item) => item.category === cat);
      setDishes(FilteredArr)
    }
  }
  //Filter dishes 





  // Filter by Search 
  const filterBySearch = (word) => {
    if (word !== '') {
      const searchWords = word.toLowerCase().split(' ');
      const newSearchArray = items.filter((item) => {
        for (let i = 0; i < searchWords.length; i++) {
          if (!item.title.toLowerCase().includes(searchWords[i])) {
            return false;
          }
        }
        return true;
      });
      setDishes(newSearchArray);
    }
  };



  // Filter by Search 

  return (
    <div className="main-color font-style">
      <Header filterBySearch={filterBySearch} />
      <Container>
        <MenuNav filterBycategory={filterBycategory} allTheCategory={allTheCategory} />
        <Cards dishes={dishes} />
      </Container>
    </div>
  );
}

export default App;

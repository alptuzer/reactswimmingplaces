import React from 'react';
import './App.css';
import { useState} from 'react';
import Categories from './Categories';
import Menu from './Menu';

import Datas from './data'

const allCategories =["all",...new Set(Datas.map((item)=> item.category))];

function  App()  {
  
  const [menuItems,setMenuItems] = useState(Datas);
  const [activeCategory,setActiveCategory]  = useState ();
  const [categories,setCategories] = useState(allCategories);

  const filterItems = (category =>{
    setActiveCategory(category);
    if(category === 'all')
    {
      setMenuItems(Datas)
      return;
    }
    const newItems = Datas.filter((item) => item.category === category);
  setMenuItems(newItems);
  })
    return (
      <div className="App">
        <main>
          <section className='holiday section'>
            <div className='title'>
              <h2> İstanbul Swimming Places</h2>
              <div className='underline'></div>
            </div>
            <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems}></Categories>
            <Menu datas={menuItems}></Menu>
          </section>
        </main>
      
      </div>
    );
  }


export default App;

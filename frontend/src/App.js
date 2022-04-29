
import './App.css';
//import ShoppingList from './components/ShoppingList';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
//import React, { useState } from 'react';
import Input from './components/Input';
import { useEffect, useState } from 'react';


function App() {

  const [listItems, setItem] = useState([]);
  const [value, setValue] = useState("");
  const items = [{
            _id: 1,
            content: 'Apples',
            category: 1, 
            emoji: ''
          }] 

  const getTasks = () => {
    fetch('http://localhost:5000/tasks')
    .then (response => response.json())
    .then(data => {console.log(data);
    setItem(data)
    })
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
          <>
            <Header text="Shopping List" />
            <div className='content'>
              <div className='list'>
              <Input listItems={listItems} setItem={setItem} setValue={setValue} value={value} />
              <List listItems={listItems} setItem={setItem} setValue={setValue} value={value}  /> 
              </div>
            </div>
            <Footer className="footer" text="Shopping list with react made with ♥︎"/>
          </>
        );

}

export default App;

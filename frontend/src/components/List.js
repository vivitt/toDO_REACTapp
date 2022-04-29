import { useState } from 'react';
import ItemButton from './ItemButton';

function List ({listItems, setItem}) {
  
  
  function decrease(index) {
    
    const newArray = [...listItems]
    newArray[index].quantity--;
    setItem(newArray);
  }

  function increase(index) {
    const newArray = [...listItems]
    newArray[index].quantity++;
    setItem(newArray);
  }

 

   return (
    <div> {
    listItems.length > 0
    ? <div > 
       <ul>
        {listItems.map ((item, index) => (
          <li key={item._id}>
           <span> {item.category} </span> <p >{item.content} </p>
            <span>{item.completed}</span>
            <span>
              <ItemButton handler={() => (increase(index))}text="+" color="mediumaquamarine"></ItemButton>
              { item.quantity > 0
              && <ItemButton handler={() => (decrease(index))} text="-" color="crimson"></ItemButton>
              }
            </span> 
          </li>
        ))}
      </ul> 
  
    </div>
    : <h2>The list is empty</h2>
} </div>
    )


}

export default List;

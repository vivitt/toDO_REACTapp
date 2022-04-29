import { useState } from 'react';
import categories from './categories';



function Input ({listItems, setItem, value, setValue, getTasks}) {
    const [category, setCategory] = useState("");
    
    function submitHandler() {
        
        console.log(listItems);
        console.log(value)
       
      
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({task: value})
        };
        fetch('http://localhost:5000/tasks', requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          getTasks(); //TODO
          setValue("");
        } 

        //event.preventDefaul();
  
    return (
       
      //<form onSubmit={submitHandler}>
       <div>
            <select value={categories} onChange={(event) => setCategory(event.target.value)}>
            {/* {categories.values.map ((item) => (
          <option> {item.value} </option>))} */}
           </select>
        <label>
              <input placeholder="add something..." type="text" value={value} onChange={(event) => setValue(event.target.value)} />
          </label>
        <button onClick={submitHandler} >Add</button>
     
        
        </div>
            
   
    
    )
}


export default Input;
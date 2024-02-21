import React, {useState} from 'react';
import './style.css';

const App = () => {
  const[InputList, setInputList]=useState("")
  const[Items, setItems]=useState([])
  const itemEvent = (event) =>
  {
    setInputList(event.target.value);
  };
  const ListofItems=()=>{
    setItems((OldItems)=>{
      return[...OldItems, InputList]
    })
    setInputList("");
  }
 
  
  return(
  <>
  <div className = "background">
  <div className = "centre">
  
  <h1 className="head">ToDo list</h1>
  <input type="text" placeholder="Add" value={InputList} onChange={itemEvent}/>
  <button onClick={ListofItems}>+</button>
  <ol>
  
  {Items.map( (itemval)=>{
    return(
    <li>{itemval}</li>
    )
    
  })}
  </ol>
  
  </div></div>
  
  
  
  </>
  )
}
export default App;

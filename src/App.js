import Add from './components/Add/Add';
import Sub from './components/sub/Sub';
import { useState } from 'react';
import './App.css';



function App() {

  const [inputvalue, setInputValue] = useState(0)
      
  const printValue = () => {
   console.log('inputvalue printValue', inputvalue)
  }
  

   //let inputvalue = 6;
  return (
     <div>
        <h1>My First React Project</h1>
       <p>Hello User {inputvalue }</p>
     

      <div>
        <input 
        value = {inputvalue}
        onChange={(e) => {

         setInputValue(e.target.value)
         console.log('inputvalue ', inputvalue);

        }}
        type = 'number' 
        placeholder='Enter the no.'/>
      </div>

      <button onClick = {printValue}>print</button>
      
   
   <Add a='2' b='5'/> 
   <Sub a='10' b='6'/>
  
  </div>

   
    
    );
}

export default App;
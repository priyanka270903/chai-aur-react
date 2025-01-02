import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter] = useState (15)




//let counter =5

const addValue = () => {
  console.log("clicked", counter);
  setCounter ( counter+1)
 
}

const delValue = () => {
  console.log("clicked", counter);
  counter = counter - 1
  setCounter(counter)
}

  return (
    <>
      
        <h1>chai aur React</h1>
        <h2>counter value : {counter} </h2>

        <button onClick={addValue}> add value</button><br/>
        <br/>
        <button onClick={delValue}> delete value</button>
        <p>footer :{counter}</p>
    </>
  )
}

export default App

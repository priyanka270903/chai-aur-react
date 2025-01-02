import { useState } from 'react'
function App() {
 const [color, setColor]= useState("olive")

  return (
  <div className="w-full h-screen duration-200 " 
  style={{backgroundColor: color}} >
      <div className="fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-full ">
         
          <button  onClick={() =>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"red"}}>Red</button>

          <button onClick={() =>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"green"}}>green</button>

          <button onClick={() =>setColor("maroon")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"maroon"}}>maroon</button>

          <button onClick={() =>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"black"}}>black</button>

          <button onClick={() =>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"blue"}}>blue</button>

          <button onClick={() =>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"yellow"}}>yellow</button>

          <button  onClick={() =>setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor:"gray"}}>gray</button>




        </div>
      </div>
  </div>
  )
}

export default App

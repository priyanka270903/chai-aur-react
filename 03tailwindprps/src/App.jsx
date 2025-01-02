import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <h1 className='bg-blue-300 text-black rounded-xl mb-4 p-4'>
      tailwind test</h1>
    <Card/>
    <Card/>
   
    </>
  )
}

export default App

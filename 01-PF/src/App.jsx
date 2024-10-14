import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from './components/Container'




function App() {
  //const [count, setCount] = useState(0)

  // Borrar <p> cuando el diseño esté definido
  return (
    <>
      <p style={{display: 'block', position: 'absolute', top: 80}}>App</p>
      <Container/>
    </>
  )
}

export default App

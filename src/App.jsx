import { useState } from 'react'
import './App.css'
import '../src/css/reset.css'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Main />
     </div>
  )
}

export default App

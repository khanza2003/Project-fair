
import { Route, Routes } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
     <h1>project fair</h1>
     <Routes>
      <Route to='/' element='./pages/Home.jsx'/>
     </Routes>
    </>
  )
}

export default App

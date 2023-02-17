import { useState, useEffect } from "react"

import { Routes, Route, useNavigate } from "react-router-dom"
import * as puppyService from "./services/puppyService"

// Components
import Nav from "./components/Nav"
import Landing from "./pages/Landing/Landing"

const App = () => {
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index()
      setPuppies(data)
    }
    fetchPuppies()
  }, [])

  //useEffect for console logging
  useEffect(()=>{
    console.log(puppies);
  },[puppies])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/puppies" element={<h1>PUPPY LIST</h1>} />
      </Routes>
    </>
  )
}

export default App

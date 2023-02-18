import { useState, useEffect } from "react"

import { Routes, Route, useNavigate } from "react-router-dom"
import * as puppyService from "./services/puppyService"
import PuppyList from "./pages/PuppyList/PuppyList"
import NewPuppy from "./pages/NewPuppy/NewPuppy.jsx"

// Components
import Nav from "./components/Nav"
import Landing from "./pages/Landing/Landing"

const App = () => {
  const navigate = useNavigate()

  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index()
      setPuppies(data)
    }
    fetchPuppies()
  }, [])

  const handleAddPuppy = async (data) => {
    const newPuppy = await puppyService.create(data)
    setPuppies([newPuppy, ...puppies])
    navigate("/puppies")
  }

  const handleRemovePuppy = async (id) => {
    const removedPuppy = await puppyService.delete(id)
    setPuppies(puppies.filter((puppy) => puppy._id !== removedPuppy._id))
  }

  //useEffect for console logging
  useEffect(() => {
    console.log(puppies)
  }, [puppies])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/puppies"
          element={
            <PuppyList
              puppies={puppies}
              handleRemovePuppy={handleRemovePuppy}
            />
          }
        />
        <Route
          path="/puppies/new"
          element={<NewPuppy handleAddPuppy={handleAddPuppy} />}
        />
      </Routes>
    </>
  )
}

export default App

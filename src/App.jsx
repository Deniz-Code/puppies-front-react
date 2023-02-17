import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Landing from './pages/Landing/Landing'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={
          <h1>PUPPY LIST</h1>
        } />
      </Routes>
    </>
  )
}

export default App
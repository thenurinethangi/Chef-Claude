import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import ChefClude from './chef-clude-page'
import Landing from './landing-page';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ChefClude />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App

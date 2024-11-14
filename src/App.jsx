import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProfilePage from './ProfilePage'
import Home from './Home'
import ErrorPage from './ErrorPage'

function App() {
  return (
    <div>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

export default App

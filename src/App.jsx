import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import ApartmentsPage from './pages/ApartmentsPage'
import ApartmentsDetailsPage from './pages/ApartmentsDetailsPage'
import NewApartment from './pages/NewApartment'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/apartments'>Apartments</Link>
          </li>
          <li>
            <Link to='/apartments/new'>New Apartment</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/apartments' element={<ApartmentsPage />} />
        <Route path='/apartments/:apartmentId' element={<ApartmentsDetailsPage />} />
        <Route path='/apartments/new' element={<NewApartment />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App

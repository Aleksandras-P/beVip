import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext'
import TranslationProvider from './context/TranslationsContext'

import "./styles/main.scss"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Offers from './pages/Offers'
import Cars from './pages/Cars'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { AuthModal } from './components/AuthModal/AuthModal'
import Booking from './pages/Booking'
import Profile from './pages/Profile'






function App() {


  return (
    <>
    <BrowserRouter>
    <TranslationProvider>
    <ThemeProvider>
      
      <AuthModal />
      
      <Navbar/>

     
      <div className='pages'>
        <Routes>
          <Route
                path='/'
                element={<Home/>}
              />
          <Route
                path='/offers'
                element={<Offers/>}
              />
          <Route
                path='/cars'
                element={<Cars/>}
              />
          <Route
                path="/cars/:carId/booking" 
                element={<Booking />} 
              />

          <Route
                path='/about'
                element={<About/>}
              />
          <Route
                path='/contacts'
                element={<Contacts/>}
              />
          <Route
                path='/profile'
                element={<Profile pageState='profile'/>}
              />
          <Route
                path='/profile/orders'
                element={<Profile pageState='myOrders'/>}
              />
          <Route
                path='/profile/history'
                element={<Profile pageState='ordersHistory'/>}
              />
        </Routes>
      </div>

      <Footer />

    
    
    
    </ThemeProvider>
    </TranslationProvider>
    </BrowserRouter>
    </>
  )
}

export default App

import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useState } from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Menu from "./pages/Menu";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [switchLogo, setSwitchLogo] = useState(false);

  const toggleLogo = () => {
    setSwitchLogo(!switchLogo);
  }

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <BrowserRouter>
        <NavBar switchLogo={switchLogo} isLoggedin={isLoggedIn} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={isLoggedIn ? <Reservation /> : <Navigate to="/login" /> } />
          <Route path="/order" element={isLoggedIn ? <Order /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer toggleLogo={toggleLogo} />
      </BrowserRouter>
    </>
  )
}

export default App

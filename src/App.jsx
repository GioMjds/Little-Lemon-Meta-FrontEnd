import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Menu from "./pages/Menu";

function App() {
  const [switchLogo, setSwitchLogo] = useState(false);

  const toggleLogo = () => {
    setSwitchLogo(!switchLogo);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar switchLogo={switchLogo} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer toggleLogo={toggleLogo} />
      </BrowserRouter>
    </>
  )
}

export default App

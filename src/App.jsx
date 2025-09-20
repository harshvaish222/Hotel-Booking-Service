import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Hotels from './pages/Hotels';   // ✅ use Hotels (plural) file
import HotelDetails from './pages/HotelDetails'; // ✅ new hotel detail page
import Rooms from './pages/Rooms';
import SingleRoom from "./pages/SingleRoom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import MyBookings from './pages/MyBookings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const ownerPath = useLocation().pathname.includes("owner");

  return (
    <div className="w-full mx-auto">
      <Toaster /> {/* ✅ Toasts will now work without crashing */}
      {!ownerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} /> {/* ✅ Added */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<SingleRoom />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>

      {!ownerPath && <Footer />}
    </div>
  );
};

export default App;

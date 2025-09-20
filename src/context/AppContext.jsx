import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsData, roomsData } from "../assets/assets.js";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [owner, setOwner] = useState(null);
  const [hotelData, setHotelData] = useState([]);
  const [roomData, setRoomData] = useState([]);

  const fetchHotelsData = () => {
    setHotelData(hotelsData);
  };

  const fetchRoomsData = () => {
    setRoomData(roomsData);
  };

  useEffect(() => {
    fetchHotelsData();
    fetchRoomsData();
  }, []);

  // ✅ added roomData here
  const contextValue = { 
    navigate, 
    user, 
    setUser, 
    owner, 
    setOwner, 
    hotelData, 
    roomData 
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

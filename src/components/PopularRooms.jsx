import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const PopularRooms = () => {
  const { roomData } = useContext(AppContext);
  const [currentImages, setCurrentImages] = useState({}); // Track current image per room

  const handleNextImage = (roomId, images) => {
    setCurrentImages((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % images.length || 0,
    }));
  };

  const handlePrevImage = (roomId, images) => {
    setCurrentImages((prev) => ({
      ...prev,
      [roomId]:
        (prev[roomId] - 1 + images.length) % images.length || 0,
    }));
  };

  return (
    <div className="py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          🌟 Popular Rooms
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md">
            Explore
          </span>{" "}
          our <span className="font-semibold text-gray-800">top-rated rooms</span>, loved by guests for{" "}
          <span className="text-purple-600 font-medium">comfort</span> and{" "}
          <span className="text-pink-600 font-medium">location</span>.
        </motion.p>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="mt-10 overflow-x-auto py-4 px-6">
        <div className="flex gap-6">
          {roomData && roomData.length > 0 ? (
            roomData.map((room, index) => {
              const imgIndex = currentImages[room._id] || 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer "
                >
                  {/* Room Image Carousel */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={room.images[imgIndex]}
                      alt={room.roomType}
                      className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                    {/* Prev/Next Buttons */}
                    <button
                      onClick={() => handlePrevImage(room._id, room.images)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/50 transition"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() => handleNextImage(room._id, room.images)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/50 transition"
                    >
                      ▶
                    </button>
                  </div>

                  {/* Room Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{room.roomType}</h3>
                    <p className="text-gray-500 mt-2 text-sm line-clamp-3">{room.description}</p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mt-3 flex-grow ">
                      {room.amenities.slice(0, 3).map((amenity, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <p className="mt-4 text-purple-600 font-bold text-lg">${room.pricePerNight} / night</p>

                    {/* Book Now Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <p className="text-gray-500">No rooms available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularRooms;

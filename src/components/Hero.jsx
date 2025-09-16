import React from 'react'
import { motion } from "motion/react"
import { assets, homePageData } from '../assets/assets'

const Hero = () => {
    return (
        <>
            <main className='flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-6 sm:px-24 max-w-7xl mx-auto w-full'>

                {/* Left side content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="flex flex-col items-center md:items-start"
                >
                    {/* Heading */}
                    <h1 className='text-heading font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight'>
                        Forget Busy Work, <br /> Start Next Vacation
                    </h1>

                    {/* Paragraph */}
                    <p className='text-paragraph mt-4 max-w-md text-sm sm:text-base leading-relaxed'>
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                    </p>

                    {/* Gradient Glow Button */}
                    <div className='flex flex-col md:flex-row items-center mt-8 gap-3'>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 20px rgba(0, 150, 255, 0.8)"
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className='bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                                       rounded-md px-6 py-2.5 text-sm font-medium flex items-center 
                                       cursor-pointer shadow-lg hover:shadow-blue-400/50'
                        >
                            Show More
                        </motion.button>
                    </div>

                    {/* Stats Section */}
                    <div className='flex flex-wrap items-center gap-16 mt-8'>
                        {homePageData.map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className='flex items-center flex-col'
                            >
                                <img src={item.icon} alt={item.title} className='w-8 h-8' />
                                <div className='flex items-center gap-1 my-4'>
                                    <p className='text-paragraph font-bold text-lg'>{item.value}</p>
                                    <p className='text-paragraph capitalize'>{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right side hero image with smooth zoom in-out */}
                <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
                >
                    <img
                        src={assets.hero_img}
                        alt="hero"
                        className="w-full max-w-lg rounded-2xl object-cover shadow-lg"
                    />
                </motion.div>
            </main>

            {/* Form to Search a Hotel */}
            <form className='max-w-4xl w-full mx-auto bg-[#EAF1FF] text-gray-800 rounded-2xl px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calendar_icon} alt='' className='w-4 h-4' />
                        <label htmlFor="destinationInput">Destination</label>
                    </div>
                    <input list='destinations' id="destinationInput" type="text" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                        <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input id="checkIn" type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                        <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input id="checkOut" type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                    <label htmlFor="guests">Guests</label>
                    <input min={1} max={4} id="guests" type="number" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16" placeholder="0" />
                </div>

                <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                    <span>Search</span>
                </button>
            </form>
        </>
    );
};

export default Hero

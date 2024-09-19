"use client";
import React, { useState, useEffect } from 'react';
import p1 from '../../../../public/image/post.svg';
import p2 from '../../../../public/image/pos2.svg';
import p3 from '../../../../public/image/post3.svg';
import p4 from '../../../../public/image/post4.svg';




// Define the images array
const images = [
  { src: p1.src, width: '100%', height: 'auto' },
  { src: p4.src, width: '100%', height: 'auto' },
  { src: p3.src, width: '100%', height: 'auto' },
  { src: p3.src, width: '100%', height: 'auto' }, // Custom width for p2
];

const Hero = () => {
  // State for the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle going to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle going to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Inject keyframes for scrolling animation
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `;
    document.head.appendChild(styleElement);

    // Clean up the style element on component unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Inline styles for the carousel container and content
  const containerStyle = {
    display: 'flex',
    overflow: 'hidden',
    width: '95%',
    position: 'relative',
    height: 'auto', // Adjust height as needed
    margin: '0 auto', // Centers the carousel horizontally
    justifyContent: 'center', // Centers the content within the container
  };
  
  const contentStyle = {
    display: 'flex',
    width: '200%', // Adjust based on the number of images
    transition: 'transform 0.4s ease-in-out',
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className='h-full w-full'>
      {/* Header */}
      <div className='pt-24 md:lg:pt-36 '>
        <div className='h-12 w-full bg-gre flex justify-center items-center'>
          <h1 className='text-black font-bold text-sm md:text-xl lg:text-xl text-center'>
            India's Largest Refurbished Mobile Phone Store
          </h1>
        </div>
      </div>

      {/* Carousel */}
      <div className='pt-16 md:lg:pt-14 md:lg:pb-20 ' style={containerStyle}>
        <div  style={contentStyle}>
          {images.map((image, index) => (
            <div key={index} className='h-32 md:lg:h-full w-full flex-shrink-0'>
              <img
                src={image.src}
                alt={`post ${index}`}
                style={{ width: image.width, height: image.height }}
                className='w-full h-full object-cover rounded-3xl'
              />
            </div>
          ))}
        </div>
        <button 
          onClick={goToPrev} 
          className='absolute top-28 md:lg:top-52 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded'
        >
          &lt;
        </button>
        <button 
          onClick={goToNext} 
          className='absolute top-28 md:lg:top-52 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded'
        >
          &gt;
        </button>
      </div>

    
    </div>
  );
}

export default Hero;

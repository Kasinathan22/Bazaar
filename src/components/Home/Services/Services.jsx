import React from 'react'
import card from'../../../../public/image/card.svg';


const Services=()=> {
 
    return (
      <div className='w-auto h-full py-10'>
      <div className="container mx-auto p-4  ">
  <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 pb-14">
  {[
    { name: 'Sell Phone', image: '/image/service-1.jpg' },
    { name: 'Buy Phone', image: '/image/service-2.jpg' },
    { name: 'Laptop', image: '/image/service-3.jpg' },
    { name: 'Headphone', image: '/image/service-4.jpg' },
    { name: 'Speakers', image: '/image/service-1.jpg' },
    { name: 'Buy Phone', image: '/image/service-2.jpg' },
    // { name: 'More...', image: '/image/morebu.png' },
  ].map((service, index) => (
    <div key={index} className="bg-gre p-4 text-center rounded-lg w-auto h-36 md:h-48">
      <img
        src={service.image}
        alt={service.name}
        className="mx-auto mb-4 w-52 h-20 md:h-40 object-cover"
      />
      <p className="text-sm md:p-5 md:text-lg text-black mt-2 ">{service.name}</p>
    </div>
  ))}
</div>
</div>
<div className=''>
        <img src={card.src} alt='card' className='w-auto h-auto' />
      </div>

  </div>



    
    );
  }
  

export default Services
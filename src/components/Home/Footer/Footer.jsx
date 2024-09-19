"use client"
import Link from 'next/link';
import Image from 'next/image';
import Footerbg from '../../../../public/image/Background/backgroundClouds.jpg'
import Footermainbg from '../../../../public/image/Background/footerbgshape.png'

const Footer = () => {
  return (
    <div className='w-full mt-20 pt-16 relative'>

      <section className="relative text-white justify-center w-full bg-black">
      </section>


      <footer
        className="bg-black  text-gray-100 py-12 mt-[-100px] md:mt-[-50px] lg:mt-[-50px] relative"
        style={{
          backgroundImage: `url(${Footermainbg.src})`, // Use the Footermainbg image as a background
          backgroundSize: 'contain', // Adjust size to fit within the container
          backgroundPosition: 'top right', // Align the image to the top-right corner
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          padding: '80px 0 0 0', // Top padding to adjust content positioning
        }}
      >


        <div className="container mx-auto px-9">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 md:flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-6xl font-bold mb-4 py-12 md:py-10">Lets make something<br /><span className='text-orange-600   '> great together</span></h2>

            </div>
            <div className="flex flex-col md:flex-row md:ml-auto md:space-x-10">
              <div className="mb-8 md:mb-0 md:flex-1">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <ul className="text-gray-300">
                  <li className="mb-2"><Link href="/Section/Digitalmarket">Sell Phone</Link></li>
                  <li className="mb-2"><Link href="/Section/ECommerce">Sell Television</Link></li>
                  <li className="mb-2"><Link href="/Section/Seo">Sell Smart Watch
                  </Link></li>
                  <li className="mb-2"><Link href="/Section/LeadGenServices">Sell Smart Speakers
                  </Link></li>
                  <li className="mb-2"><Link href="/Section/MobileApp">Sell Smart Speakers                  </Link></li>
                  <li className="mb-2"><Link href="/Section/MobileAppPromo">Sell DSLR Camera</Link></li>
                  <li className="mb-2"><Link href="/Section/Social">Sell Earbuds</Link></li>
                  <li className="mb-2"><Link href="#">Repair Phone</Link></li>
                  <li className="mb-2"><Link href="/Section/Webdev">Buy Phone</Link></li>
                  <li className="mb-2"><Link href="#">Recycle Phone</Link></li>
                  <li className="mb-2"><Link href="#">Find New Phone</Link></li>
                </ul>
              </div>

              <div className="mb-8 md:mb-0 md:flex-1">
                <h2 className="text-xl font-bold mb-4">Company</h2>
                <ul className="text-gray-300">
                  <li className="mb-2"><Link href="/">About Us</Link></li>
                  <li className="mb-2"><Link href="/About">Careers</Link></li>
                  <li className="mb-2"><Link href="">Services</Link></li>
                  <li className="mb-2"><Link href="/Portfolio">Articles</Link></li>
                  <li className="mb-2"><Link href="/Our Works">Become Cashify Partner</Link></li>
                  {/* <li className="mb-2"><Link href="/Contacts">Contact Us</Link></li>
                  <li className="mb-2"><Link href="/Careers">Careers</Link></li>
                  <li className="mb-2"><Link href="/Blog">Blogs</Link></li>
                  <li className="mb-2"><Link href="#">Privacy Policy</Link></li>
                  <li className="mb-2"><Link href="#">Disclaimer Policy</Link></li> */}
                </ul>
              </div>
            </div>
          </div>


          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <div className="mt-8 flex justify-between items-center">
              <div className="flex flex-wrap gap-4 text-sm md:text-base">
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">
                  {/* <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.29 14.71L15 15l-3-3-3 3-1.29-1.29L9 12l-3-3 1.29-1.29L12 9l3-3 1.29 1.29L15 12l3 3-1.29 1.29z" />
                  </svg> */}
                  Email me
                </a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Dribbble</a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Instagram</a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Twitter</a>
                {/* <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">LinkedIn</a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Github</a> */}
              </div>
            </div>
            <p className="text-sm font-normal text-gray-400 md:ml-auto mt-7 text-end">
              &copy; 2024 ApplicationBazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;



{/*<footer
className="bg-black  text-gray-100 py-12 mt-[-100px] md:mt-[-50px] lg:mt-[-50px] relative"
style={{
  backgroundImage: `url(${Footerbg.src})`, // Use the Footermainbg image as a background
  backgroundSize: 'cover', // Adjust size to fit within the container
  backgroundPosition: 'center', // Align the image to the top-right corner
  // Top padding to adjust content positioning
}}
> */}
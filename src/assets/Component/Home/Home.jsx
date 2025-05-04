import React, { useEffect } from 'react';
import background from "../../../../src/Gallery/background.png"
import "./Home.css"
import Product from '../Product/Product'
import Contact from '../Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
        delay: 100,
    });
    AOS.refresh();
}, []);

  return (
    <div>
      <div  id='/'>
        <div className='relative'>
          <img src={background} className='w-full h-screen object-cover' alt="Background" />
        </div>
        <div data-aos="fade-up" className='absolute inset-0 flex justify-center items-center text-yellow-200 mx-5'>
          <div className='bg-white/15 backdrop-blur-3xl p-4 lg:p-8 rounded-3xl border text-center shadow-md hover:scale-110 duration-1000'>
            <h1 className='text-4xl md:text-7xl font-bold textshadow'>Next-Gen Gadgets</h1>
            <p className='text-xl md:text-2xl my-4 text-gray-900'>Discover beauty essentials crafted to highlight the real you.</p>
            <div className='flex justify-center items-center'>
              <button className='bg-yellow-200
               text-gray-800 uppercase px-4 py-2.5 font-semibold rounded-md'>Order Now</button>
            </div>
          </div>
        </div>
      </div>
      <Product></Product>
      <Contact></Contact>
    </div>
  )
}

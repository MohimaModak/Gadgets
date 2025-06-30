import React, { useEffect } from 'react'
import AOS from 'aos';
import OfferProduct1 from "../../../../src/Gallery/iphone7one.jpg"
import OfferProduct2 from "../../../../src/Gallery/iphone7two.jpg"
import OfferProduct3 from "../../../../src/Gallery/iphone7three.jpg"
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

export default function Offer() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out',
            once: true,
            delay: 100,
        });
        AOS.refresh();
    }, []);

    const offers = [
        { image: OfferProduct1, Name: 'Iphone 7', Price: '$2500' },
        { image: OfferProduct2, Name: 'Iphone 7', Price: '$800' },
        { image: OfferProduct3, Name: 'Iphone 7', Price: '$350' },
    ]

  return (
    <div className='relative bg-orange-100'>
    <div data-aos="fade-up" id='/Offer' className='py-14 px-6 lg:px-20 relative bg-orange-100'>
            <h1 className='text-sky-600 text-4xl lg:text-5xl text-center font-bold'>iPhone 7. Timeless Tech</h1>
            <div className='flex justify-center items-center'>
            <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6'>
                {offers.map((item, index) => (
                    <div key={index} className='relative'>
                        <img src={item.image} className='w-96 h-96 text-gray-700 object-cover pt-8 lg:pt-0 rounded lg:rounded-3xl hover:scale-90 duration-1000' />
                        <h1 className='text-center text-2xl mt-2 font-semibold'>{item.Name}</h1>
                        <p className='text-center my-2 font-semibold'>Price: {item.Price}</p>
                        <Link to='/Contact' smooth={true} duration={1000}>
                        <div className='flex justify-center items-center'>
                            <button className='bg-blue-500
               text-white uppercase px-4 py-2.5 font-semibold rounded-md hover:scale-110 duration-1000 hover:bg-green-600 hover:text-white'>Order Now</button>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
            </div>
        </div>
  )
}

import React, { useEffect } from 'react'
import AOS from 'aos';
import OfferProduct1 from "../../../../src/Gallery/Offer1.png"
import OfferProduct2 from "../../../../src/Gallery/Offer2.png"
import OfferProduct3 from "../../../../src/Gallery/Offer3.png"
import OfferProduct4 from "../../../../src/Gallery/Offer4.png"
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
        { image: OfferProduct1, Name: 'Drone', Price: '$2500' },
        { image: OfferProduct2, Name: 'Smart Watch', Price: '$800' },
        { image: OfferProduct3, Name: 'Airpod', Price: '$350' },
        { image: OfferProduct4, Name: 'Head-phone', Price: '$2050' }
    ]

  return (
    <div className='relative bg-orange-100'>
    <div data-aos="fade-up" id='/Offer' className='py-14 px-6 lg:px-20 relative bg-orange-100'>
            <h1 className='text-sky-600 text-4xl lg:text-5xl text-center font-bold'>Special Electronics Offer!</h1>
            <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6'>
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
  )
}

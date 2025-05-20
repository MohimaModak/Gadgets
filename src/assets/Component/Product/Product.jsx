import React, { useEffect } from 'react';
import ProductImage1 from "../../../../src/Gallery/Product1.png"
import ProductImage2 from "../../../../src/Gallery/Product2.png"
import ProductImage3 from "../../../../src/Gallery/Product3.png"
import ProductImage4 from "../../../../src/Gallery/Product4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

export default function Product() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out',
            once: true,
            delay: 100,
        });
        AOS.refresh();
    }, []);

    const Products = [
        { image: ProductImage1, Name: 'Computer', Price: '$4550' },
        { image: ProductImage2, Name: 'Gamer', Price: '$1200' },
        { image: ProductImage3, Name: 'Watch', Price: '$450' },
        { image: ProductImage4, Name: 'Airpod', Price: '$6050' }
    ]

    return (
        <div className='relative bg-orange-100'>
            <div data-aos="fade-up" id='/Product' className='py-14 px-6 lg:px-20 relative bg-orange-100'>
                <h1 className='text-sky-600 text-4xl lg:text-5xl text-center font-bold'>Choose Your Best One</h1>
                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-6'>
                    {Products.map((item, index) => (
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

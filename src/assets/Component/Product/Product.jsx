// import React, { useEffect } from 'react';
// import ProductImage1 from "../../../../src/Gallery/iphone6One.jpg"
// import ProductImage2 from "../../../../src/Gallery/iphone6two.jpg"
// import ProductImage3 from "../../../../src/Gallery/iphone6three.jpg"
// import ProductImage4 from "../../../../src/Gallery/iphone6four.jpg"
// import ProductImage5 from "../../../../src/Gallery/iphone6five.jpg"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-scroll';

// export default function Product() {

//     useEffect(() => {
//         AOS.init({
//             duration: 1500,
//             easing: 'ease-out',
//             once: true,
//             delay: 100,
//         });
//         AOS.refresh();
//     }, []);

//     const Products = [
//         { image: ProductImage1, Name: 'iphone 6', Deposite:'R500', Price: 'R1300' },
//         { image: ProductImage2, Name: 'iphone 6', Deposite:'R500', Price: 'R1300' },
//         { image: ProductImage3, Name: 'iphone 6', Deposite:'R500', Price: 'R1300' },
//         { image: ProductImage4, Name: 'iphone 6', Deposite:'R500', Price: 'R1300' },
//         { image: ProductImage5, Name: 'iphone 6', Deposite:'R500', Price: 'R1300' }
//     ]

//     return (
//         <div className='relative bg-orange-100'>
//             <div data-aos="fade-up" id='/Product' className='py-14 px-6 lg:px-20 relative bg-orange-100'>
//                 <h1 className='text-sky-600 text-4xl lg:text-5xl text-center font-bold'>Affordable iPhone 6 Power</h1>
//                             <div className='flex justify-center items-center'>

//                 <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6'>
//                     {Products.map((item, index) => (
//                         <div key={index} className='relative'>
//                             <img src={item.image} className='w-96 h-96 text-gray-700 object-cover pt-8 lg:pt-0 rounded lg:rounded-3xl hover:scale-90 duration-1000' />
//                             <h1 className='text-center text-2xl mt-2 font-semibold'>{item.Name}</h1>
//                             <p className='text-center my-1 font-semibold'>Deposite: {item.Deposite}</p>
//                             <p className='text-center my-2 font-semibold'>Price: {item.Price}</p>
//                             <Link to='/Contact' smooth={true} duration={1000}>
//                                 <div className='flex justify-center items-center'>
//                                     <button className='bg-blue-500
//                text-white uppercase px-4 py-2.5 font-semibold rounded-md hover:scale-110 duration-1000 hover:bg-green-600 hover:text-white'>Order Now</button>
//                                 </div>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }


























import React, { useEffect } from 'react';
import ProductImage1 from "../../../../src/Gallery/a.jpg"
import ProductImage2 from "../../../../src/Gallery/b.jpg"
import ProductImage3 from "../../../../src/Gallery/c.jpg"
import ProductImage4 from "../../../../src/Gallery/d.jpg"
import ProductImage5 from "../../../../src/Gallery/e.jpg"
import ProductImage6 from "../../../../src/Gallery/iphone7two.jpg"
import ProductImage7 from "../../../../src/Gallery/iphone6two.jpg"
// import ProductImage7 from "../../../../src/Gallery/seven.jpg"
// import ProductImage8 from "../../../../src/Gallery/eight.jpg"
// import ProductImage9 from "../../../../src/Gallery/nine.jpg"
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
        { image: ProductImage1, Name: 'iphone 6', Price: 'R1300' },
        { image: ProductImage2, Name: 'iphone 12', Price: 'R8000' },
        { image: ProductImage3, Name: 'iphone 13', Price: 'R10500' },
        { image: ProductImage4, Name: 'iphone 16', Price: 'R22000' },
        { image: ProductImage5, Name: 'iphone 12', Price: 'R8000' },
        { image: ProductImage6, Name: 'iphone 7',  Price: 'R15000' },
        { image: ProductImage7, Name: 'iphone 6S', Deposite:'R500', Price: 'R1300' },
        // { image: ProductImage8, Name: 'iphone 6', Deposite:'R500', Price: 'R1300' },
        // { image: ProductImage9, Name: 'iphone 6', Deposite:'R500', Price: 'R1300' }
    ]

    return (
        <div className='relative bg-orange-100'>
            <div data-aos="fade-up" id='/Product' className='py-14 px-6 lg:px-20 relative bg-orange-100'>
                <h1 className='text-sky-600 text-4xl lg:text-5xl text-center font-bold'>All iPhone Models Here</h1>
                            <div className='flex justify-center items-center'>

                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6'>
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
        </div>
    )
}































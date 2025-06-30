import React, { useEffect } from 'react';
import ContactImage from "../../../../src/Gallery/Contact.png"
import facebook from "../../../../src/Gallery/facebook.png"
import instagram from "../../../../src/Gallery/instagram.png"
import whatsapp from "../../../../src/Gallery/whatsapp.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

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
    <div className='relative bg-orange-100'>
      <div data-aos="fade-up" id='/Contact' className='py-14 px-6 lg:px-20 relative bg-orange-100'>
        <div data-aos="fade-up" className='max-w-6xl mx-auto lg:flex items-center gap-10'>
          {/* Left Section - Image */}
          <div className='flex justify-center items-center pb-10 lg:pb-0'>
            <img src={ContactImage} className='rounded-3xl hover:scale-110 duration-1000' />
          </div>

          {/* Right Section - Details */}
          <div className='w-full'>
            <h1 className='text-3xl lg:text-5xl font-bold text-sky-600 leading-tight mb-6'>Contact With Us</h1>

            {/* Contact Info */}
            <div className=' text-gray-700 text-base font-medium flex items-center gap-5 mb-4'>
              <a href="https://www.facebook.com/profile.php?id=61577766008061" target='_blank'><button><img src={facebook} className='w-7' /></button></a>
              <a target='_blank' href="https://wa.me/27733118767">
                <button className="bg flex justify-center items-center text-white font-medium px-6 py-4 text-2xl rounded transition">
                  <div><img src={whatsapp} className='w-7' /></div>
                </button>
              </a>
              <a href="https://www.instagram.com/" target='_blank'><button><img src={instagram} className='w-7' /></button></a>
            </div>

            <div className=''>
              <h3 className='text-xl font-bold text-sky-600 mb-4'>Our Location</h3>
              <iframe
                title="Pretoria Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1631906392495!2d28.21837007556638!3d-25.74786797736445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955e9dc8671777%3A0xb8478e05ec162406!2sPretoria%2C%20South%20Africa!5e0!3m2!1sen!2sbd!4v1719828773612!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                className='rounded-xl shadow-xl mb-4 border w-[100%] h-[500%] lg:h-[100%]'
              ></iframe>
            </div>

            <div className=' text-lg font-medium cursor-pointer bg-sky-600 text-white w-max p-4 rounded-md shadow-sm'>
              ✅ Pay in Cash on Delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

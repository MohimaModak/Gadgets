import React from 'react'
import facebook from "../../../../src/Gallery/facebook.png"
import instagram from "../../../../src/Gallery/instagram.png"
import whatsapp from "../../../../src/Gallery/whatsapp.png"


export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* Brand Info */}
      <div>
        <h2 className="text-2xl font-playfair mb-4 text-white">Next-Gen Gadgets
        </h2>
        <p className="text-sm text-teal-100">
        Level up your tech game with stunning, high-performance electronics</p>
      </div>

      {/* Navigation */}
     

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="border-t border-teal-500 text-center py-4 text-sm text-teal-100">
      &copy; {new Date().getFullYear()} Relaxo Chair. All rights reserved.
    </div>
  </footer>
  )
}

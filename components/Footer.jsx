'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#003329] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">🌿 EcoWorld</h3>
            <p className="text-gray-300 leading-relaxed">
              A global movement dedicated to protecting wildlife, preserving forests, and restoring nature for future generations.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-2xl hover:text-[#4CAF50] transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-[#4CAF50] transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-[#4CAF50] transition-colors">📷</a>
              <a href="#" className="text-2xl hover:text-[#4CAF50] transition-colors">💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#4CAF50]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-[#4CAF50] transition-colors">About Us</Link></li>
              <li><Link href="/wildlife" className="text-gray-300 hover:text-[#4CAF50] transition-colors">Wildlife Protection</Link></li>
              <li><Link href="/forests" className="text-gray-300 hover:text-[#4CAF50] transition-colors">Forest Conservation</Link></li>
              <li><Link href="/impact" className="text-gray-300 hover:text-[#4CAF50] transition-colors">Our Impact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#4CAF50]">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link href="/get-involved" className="text-gray-300 hover:text-[#4CAF50] transition-colors">Join the Movement</Link></li>
              <li><Link href="/get-involved#donate" className="text-gray-300 hover:text-[#4CAF50] transition-colors">Donate</Link></li>
              <li><Link href="/get-involved#volunteer" className="text-gray-300 hover:text-[#4CAF50] transition-colors">Volunteer</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#4CAF50] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#4CAF50]">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-[#004d3d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <button className="bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 EcoWorld. All rights reserved. Made with 💚 for our planet Earth.
          </p>
        </div>
      </div>
    </footer>
  )
}

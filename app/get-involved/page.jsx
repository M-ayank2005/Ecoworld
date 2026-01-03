'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GetInvolvedPage() {
  const [selectedAmount, setSelectedAmount] = useState(50)

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#0f1f1a] to-[#0a1f18]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-[#0f1f1a] to-[#123026]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Join the Movement
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Every action counts. Together, we can create a sustainable future for our planet.
            </p>
          </div>
        </section>

        {/* Ways to Help */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003329] text-center mb-16">
              Ways You Can Make a Difference
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">💚</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-4">Donate</h3>
                <p className="text-gray-700 mb-6">
                  Your financial support helps fund conservation projects, protect wildlife, and plant trees worldwide.
                </p>
                <a
                  href="#donate"
                  className="inline-block bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                  Donate Now
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🙌</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-4">Volunteer</h3>
                <p className="text-gray-700 mb-6">
                  Join our field projects, education programs, or remote opportunities to directly impact conservation efforts.
                </p>
                <a
                  href="#volunteer"
                  className="inline-block bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                  Volunteer Today
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200 hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">📣</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-4">Spread the Word</h3>
                <p className="text-gray-700 mb-6">
                  Share our mission, educate others, and inspire action through social media and community engagement.
                </p>
                <a
                  href="#spread"
                  className="inline-block bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                  Start Sharing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Support Our Mission
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 mb-6">
                  Choose your contribution amount or enter a custom value
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-[#4CAF50] text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Custom amount"
                  className="w-full max-w-xs px-6 py-3 border-2 border-gray-300 rounded-xl text-center text-lg focus:outline-none focus:border-[#4CAF50] mb-6"
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
              </div>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg text-[#003329] mb-4">Your Impact:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>${selectedAmount >= 25 ? '✅' : '⬜'} $25</strong> - Plants 50 trees</li>
                  <li>✓ <strong>${selectedAmount >= 50 ? '✅' : '⬜'} $50</strong> - Protects 1 acre of rainforest for a year</li>
                  <li>✓ <strong>${selectedAmount >= 100 ? '✅' : '⬜'} $100</strong> - Supports anti-poaching patrols for a week</li>
                  <li>✓ <strong>${selectedAmount >= 250 ? '✅' : '⬜'} $250</strong> - Provides veterinary care for rescued wildlife</li>
                </ul>
              </div>

              <button className="w-full bg-[#4CAF50] hover:bg-[#359381] text-white font-bold py-4 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Donate ${selectedAmount} Now
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Secure payment processing • Tax-deductible
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003329] text-center mb-16">
              Volunteer Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Field Conservation</h3>
                <p className="text-gray-700 mb-4">
                  Join our teams in wildlife reserves, reforestation sites, and marine sanctuaries. 
                  Hands-on conservation work including tree planting, wildlife monitoring, and habitat restoration.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>📍 <strong>Locations:</strong> Brazil, Kenya, Indonesia, India</li>
                  <li>⏱️ <strong>Duration:</strong> 2 weeks to 6 months</li>
                  <li>🎯 <strong>Skills:</strong> No experience required</li>
                </ul>
                <button className="bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                  Apply for Field Work
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Remote Volunteering</h3>
                <p className="text-gray-700 mb-4">
                  Contribute from home! Help with data analysis, social media, graphic design, 
                  translation, research, and administrative support.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>📍 <strong>Location:</strong> Work from anywhere</li>
                  <li>⏱️ <strong>Commitment:</strong> Flexible hours</li>
                  <li>🎯 <strong>Skills:</strong> Various specializations</li>
                </ul>
                <button className="bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                  Apply for Remote Work
                </button>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border-2 border-yellow-200">
                <div className="text-5xl mb-4">👨‍🏫</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Education Programs</h3>
                <p className="text-gray-700 mb-4">
                  Teach environmental education in schools and communities. Lead workshops, 
                  organize eco-camps, and inspire the next generation of conservationists.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>📍 <strong>Locations:</strong> Local and international</li>
                  <li>⏱️ <strong>Duration:</strong> One-time or ongoing</li>
                  <li>🎯 <strong>Skills:</strong> Teaching or public speaking</li>
                </ul>
                <button className="bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                  Apply for Education Role
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Media & Documentation</h3>
                <p className="text-gray-700 mb-4">
                  Capture the beauty of nature and document conservation efforts through 
                  photography, videography, and storytelling.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>📍 <strong>Locations:</strong> Field sites worldwide</li>
                  <li>⏱️ <strong>Duration:</strong> Project-based</li>
                  <li>🎯 <strong>Skills:</strong> Photography/videography</li>
                </ul>
                <button className="bg-[#4CAF50] hover:bg-[#359381] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                  Apply for Media Role
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Actions Section */}
        <section id="spread" className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Simple Actions You Can Take Today
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { emoji: '♻️', title: 'Reduce, Reuse, Recycle', desc: 'Minimize waste and recycle everything possible' },
                { emoji: '🌱', title: 'Plant Trees', desc: 'Plant native species in your community' },
                { emoji: '🚗', title: 'Reduce Carbon Footprint', desc: 'Walk, bike, or use public transportation' },
                { emoji: '🥗', title: 'Eat Sustainably', desc: 'Choose plant-based meals and local produce' },
                { emoji: '💧', title: 'Conserve Water', desc: 'Fix leaks and use water wisely' },
                { emoji: '🛍️', title: 'Choose Eco-Products', desc: 'Buy sustainable and ethical products' },
                { emoji: '📱', title: 'Share on Social Media', desc: 'Spread awareness about environmental issues' },
                { emoji: '📚', title: 'Educate Yourself', desc: 'Learn about climate change and biodiversity' },
                { emoji: '🗳️', title: 'Support Green Policies', desc: 'Vote for environmental protection' },
              ].map((action, index) => (
                <div
                  key={index}
                  className="bg-[#004d3d] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-5xl mb-3">{action.emoji}</div>
                  <h3 className="text-xl font-bold text-[#4CAF50] mb-2">{action.title}</h3>
                  <p className="text-gray-300">{action.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-b from-[#003329] to-[#002620] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Subscribe to receive updates on our projects, success stories, and ways to get involved.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <button className="bg-[#4CAF50] hover:bg-[#359381] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ParallaxHero from '@/components/ParallaxHero'
import ContentSection from '@/components/ContentSection'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0f1f1a] via-[#0d241c] to-[#0b1411]">
        <ParallaxHero />
        <ContentSection />
        
        {/* Call to Action Section */}
        <section className="bg-gradient-to-b from-[#003329] to-[#002620] py-20">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Join Our Movement Today
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Every action counts. Together, we can protect endangered species, restore forests, 
              and create a sustainable future for all living beings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved"
                className="bg-[#4CAF50] hover:bg-[#359381] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Involved Now
              </Link>
              <Link
                href="/impact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#003329] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                See Our Impact
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="bg-[#002620] py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-3">🌳</div>
                <h3 className="text-4xl font-bold text-[#4CAF50] mb-2">10M+</h3>
                <p className="text-white">Trees Planted</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-3">🦁</div>
                <h3 className="text-4xl font-bold text-[#4CAF50] mb-2">500+</h3>
                <p className="text-white">Species Protected</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-3">🌍</div>
                <h3 className="text-4xl font-bold text-[#4CAF50] mb-2">75+</h3>
                <p className="text-white">Countries Reached</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-3">👥</div>
                <h3 className="text-4xl font-bold text-[#4CAF50] mb-2">1M+</h3>
                <p className="text-white">Active Supporters</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

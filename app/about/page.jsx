'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#0f1f1a] to-[#0a1f18]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-[#0f1f1a] to-[#123026]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              About EcoWorld
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A global movement dedicated to protecting our planet's precious ecosystems
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#0f1f1a] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed mb-4">
                  Founded in 2010, EcoWorld emerged from a simple belief: that every living being 
                  deserves a thriving planet to call home. We are a coalition of environmentalists, 
                  scientists, local communities, and passionate individuals working together to 
                  combat the devastating effects of climate change, deforestation, and wildlife extinction.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Our mission is to protect and restore Earth's natural ecosystems through 
                  conservation initiatives, education, and sustainable development. We believe that 
                  by empowering communities and fostering global partnerships, we can create lasting 
                  change for generations to come.
                </p>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-[#1b3a2f] to-[#2d7a6a] rounded-2xl flex items-center justify-center text-white text-9xl">
                🌍
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#004d3d] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  Working together with local communities, governments, and organizations to create 
                  sustainable solutions that benefit both people and nature.
                </p>
              </div>
              <div className="bg-[#004d3d] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Science-Based</h3>
                <p className="text-gray-300">
                  Relying on rigorous scientific research and data to guide our conservation 
                  strategies and ensure maximum positive impact.
                </p>
              </div>
              <div className="bg-[#004d3d] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">💚</div>
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Compassion</h3>
                <p className="text-gray-300">
                  Approaching every challenge with empathy and understanding, recognizing the 
                  interconnectedness of all life on Earth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-[#0f1f1a] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              What We Do
            </h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-[#359381] mb-4">🦁 Wildlife Protection</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    We work tirelessly to protect endangered species from extinction through 
                    anti-poaching efforts, habitat preservation, and breeding programs. Our teams 
                    monitor wildlife populations and work with local rangers to ensure their safety.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gradient-to-br from-[#1b3a2f] to-[#2d7a6a] rounded-xl flex items-center justify-center text-white text-8xl">
                  🐘
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-[#359381] mb-4">🌳 Reforestation</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Through our massive reforestation initiatives, we've planted over 10 million 
                    trees worldwide. We restore degraded forests, create wildlife corridors, and 
                    help communities build sustainable livelihoods through forest conservation.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gradient-to-br from-[#1b3a2f] to-[#2d7a6a] rounded-xl flex items-center justify-center text-white text-8xl">
                  🌲
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-[#359381] mb-4">📚 Education & Advocacy</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    We empower communities through education programs, workshops, and advocacy 
                    campaigns. By raising awareness about environmental issues, we inspire action 
                    and create a global network of environmental stewards.
                  </p>
                </div>
                <div className="md:w-1/2 h-64 bg-gradient-to-br from-[#1b3a2f] to-[#2d7a6a] rounded-xl flex items-center justify-center text-white text-8xl">
                  🎓
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Sarah Chen', role: 'CEO & Founder', emoji: '👩‍🔬' },
                { name: 'David Martinez', role: 'Conservation Director', emoji: '👨‍🌾' },
                { name: 'Dr. Amara Okafor', role: 'Wildlife Expert', emoji: '👩‍🏫' },
                { name: 'James Wilson', role: 'Operations Manager', emoji: '👨‍💼' },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-[#004d3d] p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-7xl mb-4">{member.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#4CAF50]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-[#003329] to-[#002620] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Together, we can protect our planet and create a sustainable future for all.
            </p>
            <Link
              href="/get-involved"
              className="inline-block bg-[#4CAF50] hover:bg-[#359381] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Involved Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

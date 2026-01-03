'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ImpactPage() {
  const projects = [
    {
      title: 'Amazon Rainforest Restoration',
      location: 'Brazil',
      emoji: '🌳',
      stats: ['2.1M trees planted', '85,000 hectares restored', '150 species protected'],
      description: 'Working with indigenous communities to restore degraded Amazon rainforest, creating wildlife corridors and carbon sinks.',
    },
    {
      title: 'Kenyan Elephant Conservation',
      location: 'Kenya',
      emoji: '🐘',
      stats: ['500+ elephants protected', '12 poaching attempts stopped', '3 herds monitored'],
      description: 'Anti-poaching units and community education programs protecting elephant populations in the Amboseli ecosystem.',
    },
    {
      title: 'Coral Reef Recovery',
      location: 'Indonesia',
      emoji: '🪸',
      stats: ['50 hectares restored', '10,000 coral fragments', '200+ species returned'],
      description: 'Restoring damaged coral reefs through coral gardening and community-based marine protection.',
    },
    {
      title: 'Sumatran Tiger Protection',
      location: 'Indonesia',
      emoji: '🐅',
      stats: ['45 tigers monitored', '100km² habitat secured', '8 cubs born'],
      description: 'Camera trap monitoring and forest protection to save critically endangered Sumatran tigers.',
    },
    {
      title: 'Mangrove Reforestation',
      location: 'Bangladesh',
      emoji: '🌿',
      stats: ['500,000 mangroves planted', '2,000 families trained', '15km coastline protected'],
      description: 'Protecting coastal communities while creating vital habitats for marine life and migratory birds.',
    },
    {
      title: 'Mountain Gorilla Sanctuary',
      location: 'Rwanda',
      emoji: '🦍',
      stats: ['120 gorillas protected', '45,000 hectares secured', 'Zero poaching incidents'],
      description: 'Community-led conservation ensuring the survival of critically endangered mountain gorillas.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#0f1f1a] to-[#0a1f18]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-[#0f1f1a] to-[#123026]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Our Global Impact
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Real results from conservation efforts around the world
            </p>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003329] text-center mb-16">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">🌳</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">10.2M</p>
                <p className="text-gray-700 font-semibold">Trees Planted</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">🦁</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">500+</p>
                <p className="text-gray-700 font-semibold">Species Protected</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">🌍</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">75</p>
                <p className="text-gray-700 font-semibold">Countries</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">👥</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">1M+</p>
                <p className="text-gray-700 font-semibold">Supporters</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">🏞️</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">2.5M</p>
                <p className="text-gray-700 font-semibold">Hectares Protected</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">💨</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">1.2M</p>
                <p className="text-gray-700 font-semibold">Tons CO₂ Captured</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">🎓</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">250K</p>
                <p className="text-gray-700 font-semibold">People Educated</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl">
                <div className="text-6xl mb-3">🌾</div>
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">50K</p>
                <p className="text-gray-700 font-semibold">Farmers Trained</p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Active Conservation Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#004d3d] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="bg-gradient-to-br from-[#4CAF50] to-[#359381] p-8 text-center">
                    <div className="text-8xl mb-2">{project.emoji}</div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80">📍 {project.location}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.stats.map((stat, i) => (
                        <p key={i} className="text-[#4CAF50] font-semibold">✓ {stat}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003329] text-center mb-16">
              Our Journey
            </h2>
            <div className="space-y-8">
              {[
                { year: '2010', title: 'EcoWorld Founded', desc: 'Started with a small team and big dreams in San Francisco' },
                { year: '2012', title: 'First Million Trees', desc: 'Planted our millionth tree in the Amazon rainforest' },
                { year: '2015', title: 'Global Expansion', desc: 'Expanded operations to 25 countries across 5 continents' },
                { year: '2018', title: 'Wildlife Sanctuary Network', desc: 'Established protected reserves for endangered species' },
                { year: '2020', title: '5 Million Trees Milestone', desc: 'Accelerated reforestation efforts worldwide' },
                { year: '2022', title: 'Climate Action Initiative', desc: 'Launched carbon offset programs and renewable energy projects' },
                { year: '2024', title: '10 Million Trees Achieved', desc: 'Reached our decade-long goal of planting 10 million trees' },
                { year: '2026', title: 'Next Phase: 50 Million', desc: 'Committed to planting 50 million trees by 2030' },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start hover:transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-[#4CAF50]">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-1 bg-[#4CAF50] relative">
                    <div className="absolute -left-2 top-2 w-5 h-5 bg-[#4CAF50] rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-green-50 to-white p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-[#003329] mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Impact */}
        <section className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Impact by Region
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">🌎 Americas</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>✓ 3.5M trees planted in Amazon rainforest</li>
                  <li>✓ 250K hectares of forest protected</li>
                  <li>✓ 75 indigenous communities partnered</li>
                  <li>✓ Jaguar and sloth populations stabilized</li>
                </ul>
              </div>
              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">🌍 Africa</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>✓ 2.8M trees planted across 15 countries</li>
                  <li>✓ 500+ elephants and 120 gorillas protected</li>
                  <li>✓ 180K hectares of savanna conserved</li>
                  <li>✓ Anti-poaching units in 12 reserves</li>
                </ul>
              </div>
              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">🌏 Asia</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>✓ 2.9M trees planted in 20 countries</li>
                  <li>✓ Tigers, orangutans, and pandas protected</li>
                  <li>✓ 500K mangroves restoring coastlines</li>
                  <li>✓ 50 coral reef restoration sites</li>
                </ul>
              </div>
              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">🌊 Oceans</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>✓ 50 hectares of coral reefs restored</li>
                  <li>✓ Marine protected areas established</li>
                  <li>✓ Sea turtle populations recovering</li>
                  <li>✓ Plastic cleanup initiatives in 25 beaches</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003329] text-center mb-16">
              Voices from the Field
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Maria Silva',
                  role: 'Indigenous Leader, Brazil',
                  quote: 'EcoWorld helped us protect our ancestral lands and taught sustainable farming. Our forest is thriving again.',
                  emoji: '👩‍🌾',
                },
                {
                  name: 'John Kamau',
                  role: 'Wildlife Ranger, Kenya',
                  quote: 'Thanks to anti-poaching support, we haven\'t lost a single elephant in two years. Our community is safer.',
                  emoji: '🛡️',
                },
                {
                  name: 'Dr. Priya Sharma',
                  role: 'Marine Biologist, India',
                  quote: 'The coral restoration project brought life back to our reefs. Fish populations have doubled!',
                  emoji: '🔬',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200"
                >
                  <div className="text-6xl mb-4">{testimonial.emoji}</div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-[#359381]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#003329] to-[#002620] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of Our Success Story
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of supporters making real change happen every day.
            </p>
            <Link
              href="/get-involved"
              className="inline-block bg-[#4CAF50] hover:bg-[#359381] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join the Movement
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

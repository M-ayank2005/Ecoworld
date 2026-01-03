'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function WildlifePage() {
  const endangeredSpecies = [
    {
      name: 'African Elephants',
      emoji: '🐘',
      status: 'Vulnerable',
      threat: 'Poaching & Habitat Loss',
      population: '~415,000',
      description: 'Majestic giants facing severe threats from ivory poaching and shrinking habitats.',
    },
    {
      name: 'Sumatran Tigers',
      emoji: '🐅',
      status: 'Critically Endangered',
      threat: 'Deforestation & Poaching',
      population: '<400',
      description: 'Fewer than 400 remain in the wild due to palm oil plantations and illegal hunting.',
    },
    {
      name: 'Mountain Gorillas',
      emoji: '🦍',
      status: 'Endangered',
      threat: 'Habitat Loss & Disease',
      population: '~1,000',
      description: 'Conservation efforts have helped, but they remain critically vulnerable.',
    },
    {
      name: 'Polar Bears',
      emoji: '🐻‍❄️',
      status: 'Vulnerable',
      threat: 'Climate Change',
      population: '~26,000',
      description: 'Arctic ice melting threatens their hunting grounds and survival.',
    },
    {
      name: 'Giant Pandas',
      emoji: '🐼',
      status: 'Vulnerable',
      threat: 'Habitat Fragmentation',
      population: '~1,864',
      description: 'Bamboo forest loss continues to threaten their limited habitat.',
    },
    {
      name: 'Sea Turtles',
      emoji: '🐢',
      status: 'Endangered',
      threat: 'Plastic Pollution & Fishing',
      population: 'Declining',
      description: 'All seven species face threats from pollution, fishing nets, and beach development.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#0f1f1a] to-[#0a1f18]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-[#0f1f1a] to-[#143528]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Wildlife Protection
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Fighting to save endangered species from extinction and protect biodiversity for future generations
            </p>
          </div>
        </section>

        {/* Crisis Alert */}
        <section className="bg-red-900 py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Sixth Mass Extinction
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're losing species 1,000 times faster than natural rates. Over 1 million species are 
              at risk of extinction within decades. The time to act is NOW.
            </p>
          </div>
        </section>

        {/* Endangered Species Grid */}
        <section className="bg-[#0f1f1a] py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Species We're Fighting to Save
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {endangeredSpecies.map((species, index) => (
                <div
                  key={index}
                  className="bg-[#0c1f18] border border-[#1f3b2f] p-8 rounded-2xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-7xl mb-4 text-center">{species.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{species.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">
                      <span className="font-semibold text-red-400">Status:</span> {species.status}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-orange-300">Threat:</span> {species.threat}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-blue-300">Population:</span> {species.population}
                    </p>
                  </div>
                  <p className="text-gray-200">{species.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Wildlife Programs */}
        <section className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Wildlife Conservation Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-[#004d3d] p-8 rounded-xl">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Anti-Poaching Units</h3>
                <p className="text-gray-300 leading-relaxed">
                  We deploy trained rangers and modern technology including drones, cameras, and GPS 
                  tracking to protect wildlife from illegal hunting. Our teams work 24/7 across 
                  protected reserves in Africa and Asia.
                </p>
              </div>

              <div className="bg-[#004d3d] p-8 rounded-xl">
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Wildlife Rescue & Rehabilitation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our rescue centers provide medical care, rehabilitation, and safe havens for injured 
                  and orphaned animals. We've saved over 5,000 animals and successfully released them 
                  back into the wild.
                </p>
              </div>

              <div className="bg-[#004d3d] p-8 rounded-xl">
                <div className="text-6xl mb-4">🧬</div>
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Breeding Programs</h3>
                <p className="text-gray-300 leading-relaxed">
                  For critically endangered species, we run breeding programs to maintain genetic 
                  diversity and boost population numbers. Success stories include the California 
                  Condor and Black-footed Ferret.
                </p>
              </div>

              <div className="bg-[#004d3d] p-8 rounded-xl">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Habitat Protection</h3>
                <p className="text-gray-300 leading-relaxed">
                  We establish and manage protected wildlife reserves, create wildlife corridors, and 
                  work with governments to expand conservation areas. Over 2 million acres under 
                  our protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-[#0f1f1a] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Success Stories
            </h2>
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-[#123026] to-[#0f1f1a] p-8 rounded-2xl border border-[#1f3b2f]">
                <div className="flex items-start gap-4">
                  <div className="text-6xl">🐯</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#8bf0c0] mb-3">
                      Bengal Tiger Population Increase
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      Through our intensive anti-poaching efforts and habitat restoration in India, 
                      we've helped increase the Bengal tiger population by 33% over the last decade. 
                      Our monitoring programs track over 200 individual tigers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#123026] to-[#0f1f1a] p-8 rounded-2xl border border-[#1f3b2f]">
                <div className="flex items-start gap-4">
                  <div className="text-6xl">🐋</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#8bf0c0] mb-3">
                      Humpback Whale Recovery
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      Our marine conservation efforts and advocacy led to international whaling bans. 
                      Humpback whale populations have rebounded from just 5,000 to over 80,000 today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#123026] to-[#0f1f1a] p-8 rounded-2xl border border-[#1f3b2f]">
                <div className="flex items-start gap-4">
                  <div className="text-6xl">🦅</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#8bf0c0] mb-3">
                      Bald Eagle Recovery
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      Once on the brink of extinction, our conservation programs helped the bald eagle 
                      population soar from 417 pairs to over 70,000 today. A true conservation triumph!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-b from-[#003329] to-[#002620] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Us Protect Wildlife
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Your support can save species from extinction. Every contribution makes a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved"
                className="bg-[#4CAF50] hover:bg-[#359381] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Support Wildlife Conservation
              </Link>
              <Link
                href="/impact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#003329] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                See Our Impact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

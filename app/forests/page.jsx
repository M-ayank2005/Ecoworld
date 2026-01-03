'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ForestsPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#0f1f1a] to-[#0a1f18]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-[#0f1f1a] to-[#123026]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Forest Conservation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Protecting Earth's lungs and restoring forests to combat climate change and preserve biodiversity
            </p>
          </div>
        </section>

        {/* Crisis Stats */}
        <section className="bg-red-900 py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-6xl mb-4">🔥</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Deforestation Crisis
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold text-yellow-400 mb-2">10M</h3>
                <p className="text-white text-lg">Hectares Lost Annually</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-yellow-400 mb-2">80%</h3>
                <p className="text-white text-lg">Of Forest Species Affected</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-yellow-400 mb-2">15%</h3>
                <p className="text-white text-lg">Of CO₂ Emissions from Deforestation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Forests Matter */}
        <section className="bg-[#0f1f1a] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Why Forests Are Critical
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-6xl mb-4">💨</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Oxygen Production</h3>
                <p className="text-gray-200">
                  Forests produce 28% of Earth's oxygen, providing the air we breathe and supporting all life.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🌡️</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Climate Regulation</h3>
                <p className="text-gray-200">
                  Trees absorb CO₂, helping to regulate global temperatures and combat climate change.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🦋</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Biodiversity Hotspots</h3>
                <p className="text-gray-200">
                  80% of terrestrial species live in forests, making them essential for biodiversity.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-6xl mb-4">💧</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Water Cycles</h3>
                <p className="text-gray-200">
                  Forests regulate rainfall patterns and maintain freshwater supplies for billions.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-6xl mb-4">🏡</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Indigenous Homes</h3>
                <p className="text-gray-200">
                  300 million people depend on forests for their livelihoods and cultural identity.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-6xl mb-4">💊</div>
                <h3 className="text-2xl font-bold text-[#359381] mb-3">Medicine Source</h3>
                <p className="text-gray-200">
                  70% of cancer-fighting drugs come from rainforest plants yet to be fully studied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Reforestation Programs */}
        <section className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Reforestation Initiatives
            </h2>
            <div className="space-y-12">
              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-7xl">🌱</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#4CAF50] mb-4">
                      10 Million Trees Campaign
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Our flagship program has successfully planted over 10 million trees across 
                      deforested regions in Brazil, Indonesia, Kenya, and India. Each tree is monitored 
                      for growth and survival, with a 92% success rate.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#4CAF50]">10.2M</p>
                        <p className="text-gray-400 text-sm">Trees Planted</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#4CAF50]">45</p>
                        <p className="text-gray-400 text-sm">Countries</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#4CAF50]">500K</p>
                        <p className="text-gray-400 text-sm">Hectares Restored</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-[#4CAF50]">92%</p>
                        <p className="text-gray-400 text-sm">Survival Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-7xl">🌳</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#4CAF50] mb-4">
                      Rainforest Protection Alliance
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Partnering with indigenous communities in the Amazon, Congo Basin, and Southeast 
                      Asian rainforests to protect existing old-growth forests from illegal logging 
                      and development. We've secured protection for over 2 million hectares.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-7xl">🌾</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#4CAF50] mb-4">
                      Sustainable Agroforestry
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Teaching farmers to integrate trees with crops, creating sustainable food production 
                      while restoring forest cover. Over 50,000 farmers trained in 12 countries, increasing 
                      their income by an average of 40%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#004d3d] p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-7xl">🛡️</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#4CAF50] mb-4">
                      Forest Fire Prevention
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Deploying early warning systems, firebreaks, and rapid response teams to prevent 
                      and combat forest fires. Our systems have helped reduce fire damage by 65% in 
                      protected areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forest Types We Protect */}
        <section className="bg-[#0f1f1a] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Forest Ecosystems We Protect
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#123026] to-[#0f1f1a] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#1f3b2f]">
                <div className="text-6xl mb-4">🌴</div>
                <h3 className="text-2xl font-bold text-[#8bf0c0] mb-3">Tropical Rainforests</h3>
                <p className="text-gray-200 mb-3">
                  The Amazon, Congo Basin, and Southeast Asian rainforests - Earth's most biodiverse ecosystems.
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Threats:</strong> Logging, agriculture, mining, infrastructure
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#123026] to-[#0f1f1a] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#1f3b2f]">
                <div className="text-6xl mb-4">🌲</div>
                <h3 className="text-2xl font-bold text-[#8bf0c0] mb-3">Temperate Forests</h3>
                <p className="text-gray-200 mb-3">
                  Deciduous and coniferous forests in North America, Europe, and Asia.
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Threats:</strong> Urban expansion, climate change, disease
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#123026] to-[#0f1f1a] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#1f3b2f]">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="text-2xl font-bold text-[#8bf0c0] mb-3">Mangrove Forests</h3>
                <p className="text-gray-200 mb-3">
                  Coastal forests protecting shorelines and serving as nurseries for marine life.
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Threats:</strong> Coastal development, aquaculture, pollution
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#123026] to-[#0f1f1a] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#1f3b2f]">
                <div className="text-6xl mb-4">❄️</div>
                <h3 className="text-2xl font-bold text-[#8bf0c0] mb-3">Boreal Forests</h3>
                <p className="text-gray-200 mb-3">
                  Northern forests storing massive amounts of carbon in Canada, Russia, and Scandinavia.
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Threats:</strong> Logging, oil extraction, wildfires
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-gradient-to-b from-[#003329] to-[#002620] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Our Forest Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-[#004d3d] p-6 rounded-xl">
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">10.2M</p>
                <p className="text-white">Trees Planted</p>
              </div>
              <div className="bg-[#004d3d] p-6 rounded-xl">
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">2.5M</p>
                <p className="text-white">Hectares Protected</p>
              </div>
              <div className="bg-[#004d3d] p-6 rounded-xl">
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">1.2M</p>
                <p className="text-white">Tons CO₂ Captured</p>
              </div>
              <div className="bg-[#004d3d] p-6 rounded-xl">
                <p className="text-5xl font-bold text-[#4CAF50] mb-2">50K</p>
                <p className="text-white">Farmers Trained</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#002620] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Us Restore Our Forests
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Plant a tree, protect a forest, change the world.
            </p>
            <Link
              href="/get-involved"
              className="inline-block bg-[#4CAF50] hover:bg-[#359381] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Plant Trees With Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

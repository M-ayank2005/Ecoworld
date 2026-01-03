'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#0f1f1a] to-[#0a1f18]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-[#0f1f1a] to-[#123026]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003329] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donate">Donation Questions</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4CAF50] hover:bg-[#359381] text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003329] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-200">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">📍</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#359381] mb-2">
                          Headquarters
                        </h3>
                        <p className="text-gray-700">
                          123 Green Earth Avenue<br />
                          San Francisco, CA 94102<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">📧</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#359381] mb-2">
                          Email
                        </h3>
                        <p className="text-gray-700">
                          <a href="mailto:info@ecoworld.org" className="hover:text-[#4CAF50]">
                            info@ecoworld.org
                          </a><br />
                          <a href="mailto:volunteer@ecoworld.org" className="hover:text-[#4CAF50]">
                            volunteer@ecoworld.org
                          </a><br />
                          <a href="mailto:press@ecoworld.org" className="hover:text-[#4CAF50]">
                            press@ecoworld.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-200">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">📞</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#359381] mb-2">
                          Phone
                        </h3>
                        <p className="text-gray-700">
                          Main: +1 (555) 123-4567<br />
                          Toll-free: 1-800-ECO-WRLD<br />
                          Hours: Mon-Fri, 9AM-5PM PST
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border-2 border-yellow-200">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🌐</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#359381] mb-2">
                          Social Media
                        </h3>
                        <div className="flex gap-4 mt-2">
                          <a href="#" className="text-3xl hover:scale-110 transition-transform">📘</a>
                          <a href="#" className="text-3xl hover:scale-110 transition-transform">🐦</a>
                          <a href="#" className="text-3xl hover:scale-110 transition-transform">📷</a>
                          <a href="#" className="text-3xl hover:scale-110 transition-transform">💼</a>
                          <a href="#" className="text-3xl hover:scale-110 transition-transform">▶️</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Offices */}
        <section className="bg-[#003329] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Regional Offices
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { region: 'North America', city: 'San Francisco, USA', emoji: '🌎' },
                { region: 'South America', city: 'São Paulo, Brazil', emoji: '🌳' },
                { region: 'Europe', city: 'London, UK', emoji: '🌍' },
                { region: 'Africa', city: 'Nairobi, Kenya', emoji: '🦁' },
                { region: 'Asia', city: 'Bangkok, Thailand', emoji: '🐘' },
                { region: 'Oceania', city: 'Sydney, Australia', emoji: '🦘' },
                { region: 'Middle East', city: 'Dubai, UAE', emoji: '🏜️' },
                { region: 'Arctic Region', city: 'Reykjavik, Iceland', emoji: '❄️' },
              ].map((office, index) => (
                <div
                  key={index}
                  className="bg-[#004d3d] p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-5xl mb-3">{office.emoji}</div>
                  <h3 className="text-xl font-bold text-[#4CAF50] mb-2">{office.region}</h3>
                  <p className="text-gray-300">{office.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003329] text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How can I donate to EcoWorld?',
                  a: 'Visit our Get Involved page to make a secure online donation. We accept credit cards, PayPal, and bank transfers. All donations are tax-deductible.',
                },
                {
                  q: 'Can I volunteer if I have no conservation experience?',
                  a: 'Absolutely! We welcome volunteers of all skill levels. We provide training and support for all positions, from field work to remote opportunities.',
                },
                {
                  q: 'How do I know my donation is being used effectively?',
                  a: 'We maintain complete transparency. Check our Impact page for detailed reports on how funds are allocated and the results we achieve.',
                },
                {
                  q: 'Do you offer internship programs?',
                  a: 'Yes! We offer internships in conservation, research, education, and administration. Email volunteer@ecoworld.org for current opportunities.',
                },
                {
                  q: 'Can my company partner with EcoWorld?',
                  a: 'We welcome corporate partnerships! Contact us at partnerships@ecoworld.org to discuss sponsorship, employee engagement, and CSR initiatives.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border-l-4 border-[#4CAF50]"
                >
                  <h3 className="text-xl font-bold text-[#359381] mb-3">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-gradient-to-b from-[#003329] to-[#002620] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-900 p-8 rounded-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                🚨 Report Wildlife Emergency
              </h2>
              <p className="text-white/90 mb-6">
                If you witness poaching, illegal logging, or wildlife in distress, contact our 24/7 emergency hotline immediately.
              </p>
              <a
                href="tel:1-800-SAVE-WILD"
                className="inline-block bg-white hover:bg-gray-100 text-red-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                📞 1-800-SAVE-WILD
              </a>
            </div>

            <p className="text-gray-400">
              We're here to help protect nature, one action at a time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

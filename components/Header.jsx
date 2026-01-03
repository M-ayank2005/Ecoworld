'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header background only after scrolling past the hero section (100vh)
      setIsScrolled(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Wildlife', href: '/wildlife' },
    { name: 'Get Involved', href: '/get-involved' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 md:px-12 lg:px-24 py-4 md:py-6 flex justify-between items-center z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f1f1a]/95 backdrop-blur-md shadow-lg border-b border-[#1c2f27]'
          : 'bg-transparent'
      }`}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className={`text-3xl md:text-4xl font-bold transition-colors ${
          isScrolled ? 'text-[#8bf0c0]' : 'text-white'
        }`}>
          🌿 EcoWorld
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              pathname === link.href
                ? 'bg-[#2d7a6a] text-white shadow-lg'
                : 'text-[#e6f5ee] hover:bg-[#2d7a6a] hover:text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white text-2xl font-bold"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0f1f1a] shadow-lg py-4 border-b border-[#1f3b2f]">
          <nav className="flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-center px-4 py-3 font-semibold transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-[#2d7a6a] text-white'
                    : 'text-[#e6f5ee] hover:bg-[#2d7a6a] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

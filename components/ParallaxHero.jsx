'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)
  const [sparks, setSparks] = useState([])
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sparkElements = []
    const numSparks = 30

    for (let i = 0; i < numSparks; i++) {
      sparkElements.push({ id: i, x: 0, y: 0, opacity: 0 })
    }
    setSparks(sparkElements)
  }, [])

  const handleMouseMove = (e) => {
    const mouseX = e.pageX
    const mouseY = e.pageY

    setSparks((prevSparks) =>
      prevSparks.map((spark) => {
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 10 + 3
        const burstX = mouseX + Math.cos(angle) * speed
        const burstY = mouseY + Math.sin(angle) * speed

        return {
          ...spark,
          x: burstX,
          y: burstY,
          opacity: 1,
        }
      })
    )

    setTimeout(() => {
      setSparks((prevSparks) =>
        prevSparks.map((spark) => ({ ...spark, opacity: 0 }))
      )
    }, Math.random() * 500 + 500)
  }

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Wildlife', href: '/wildlife', id: 'wildlife' },
    { name: 'Get Involved', href: '/get-involved', id: 'involved' },
  ]

  return (
    <>
      {/* Parallax Section */}
      <section
        className="relative flex justify-center items-center h-screen overflow-hidden bg-[#0f1f1a]"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f1a]/60 via-transparent to-[#0f1f1a]/80 z-[1] pointer-events-none" />
        {/* Background Hills and Nature Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[0]">
          <Image
            src="/hill1.png"
            alt="Hill background"
            fill
            className="object-cover opacity-90"
            style={{
              transform: `translateY(${scrollY * 1}px)`,
            }}
            priority
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[0]">
          <Image
            src="/hill2.png"
            alt="Hill layer"
            fill
            className="object-cover opacity-95"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[0]">
          <Image
            src="/hill3.png"
            alt="Hill layer"
            fill
            className="object-cover opacity-95"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
          <Image
            src="/hill4.png"
            alt="Hill foreground"
            fill
            className="object-cover"
            style={{
              transform: `translateX(${scrollY * -1.5}px)`,
            }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
          <Image
            src="/hill5.png"
            alt="Hill foreground"
            fill
            className="object-cover"
            style={{
              transform: `translateX(${scrollY * 1.5}px)`,
            }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[2]">
          <Image
            src="/tree.png"
            alt="Tree"
            fill
            className="object-cover"
          />
        </div>

        {/* Main Heading */}
        <h2
          className="absolute text-4xl md:text-7xl lg:text-8xl font-bold text-white text-center px-4 z-[10] drop-shadow-2xl"
          style={{
            marginTop: `${scrollY * 2.5}px`,
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
          }}
        >
          Save Our Planet
        </h2>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[3]">
          <Image
            src="/leaf.png"
            alt="Leaf"
            fill
            className="object-cover"
            style={{
              transform: `translate(${scrollY * 1.5}px, ${scrollY * -1.5}px)`,
            }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[4]">
          <Image
            src="/plant.png"
            alt="Plant"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Spark Effects */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            opacity: spark.opacity,
            zIndex: 9999,
          }}
        />
      ))}
    </>
  )
}

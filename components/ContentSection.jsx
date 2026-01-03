'use client'

export default function ContentSection() {
  return (
    <section className="relative bg-[#003329] px-8 md:px-24 py-20 md:py-32" id="mission">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Our Mission to Save Nature
        </h2>
        
        <div className="space-y-6 text-white text-base md:text-lg font-light leading-relaxed">
          <p>
            Our planet is facing an unprecedented environmental crisis. Climate change, deforestation, 
            pollution, and loss of biodiversity threaten the very foundation of life on Earth. But together, 
            we can make a difference. Every action, no matter how small, contributes to the preservation 
            of our beautiful world.
          </p>

          <p>
            At EcoWorld, we believe that nature conservation starts with awareness and education. 
            Understanding the delicate balance of our ecosystems helps us appreciate the urgent need 
            for action. From the majestic forests to the smallest organisms, every element plays a 
            crucial role in maintaining the health of our planet.
          </p>

          <p>
            We work with communities worldwide to implement sustainable practices, restore damaged 
            ecosystems, and protect endangered species. Through reforestation projects, we've planted 
            over 10 million trees in the last five years. Our ocean cleanup initiatives have removed 
            thousands of tons of plastic waste from marine environments.
          </p>

          <p>
            Climate action is at the heart of everything we do. By promoting renewable energy, supporting 
            green technologies, and advocating for policy changes, we're building a pathway to a sustainable 
            future. Our carbon offset programs help individuals and businesses reduce their environmental 
            footprint while supporting crucial conservation efforts.
          </p>

          <p>
            Education empowers change. We provide resources, workshops, and programs to help people of 
            all ages understand environmental issues and take meaningful action. From school programs 
            teaching children about biodiversity to corporate training on sustainable business practices, 
            we're creating a generation of environmental stewards.
          </p>

          <p>
            Wildlife conservation is critical. We protect endangered species through habitat preservation, 
            anti-poaching efforts, and breeding programs. Our partnerships with wildlife reserves and 
            conservation organizations span across six continents, safeguarding some of the world's most 
            vulnerable creatures.
          </p>

          <p>
            Join us in this vital mission. Whether it's reducing plastic use, supporting renewable energy, 
            planting trees, or spreading awareness, your contribution matters. Together, we can heal our 
            planet, restore balance to nature, and ensure a thriving Earth for generations to come.
          </p>

          <p>
            The time to act is now. Nature doesn't need us, but we need nature. Let's protect what sustains 
            us, cherish what inspires us, and preserve what defines our home. Together, we are the change 
            our planet needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#004d3d] p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-3">10M+</h3>
            <p className="text-white">Trees Planted Worldwide</p>
          </div>
          <div className="bg-[#004d3d] p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-3">500+</h3>
            <p className="text-white">Species Protected</p>
          </div>
          <div className="bg-[#004d3d] p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-3">1M+</h3>
            <p className="text-white">Active Supporters</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#359381] hover:bg-[#4CAF50] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Take Action Now
          </button>
        </div>
      </div>
    </section>
  )
}

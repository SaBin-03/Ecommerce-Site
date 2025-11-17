import React from 'react'

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative text-white">
      <div id="slider" className="inline-block ">
        <span className="md:text-6xl mx-4 uppercase">Gucci</span>
        <span className="md:text-6xl mx-4 uppercase">Prada</span>
        <span className="md:text-6xl mx-4 uppercase oswald">Nike</span>
        <span className="md:text-6xl mx-4 uppercase roboto">Adidas</span>
        <span className="md:text-6xl mx-4 uppercase oswald">Louis Vuitton</span>
        <span className="md:text-6xl mx-4 uppercase roboto">Levi's</span>
      </div>
      <div id="slider" className="inline-block ">
        <span className="md:text-6xl mx-4 uppercase">Gucci</span>
        <span className="md:text-6xl mx-4 uppercase">Prada</span>
        <span className="md:text-6xl mx-4 uppercase">Nike</span>
        <span className="md:text-6xl mx-4 uppercase">Adidas</span>
        <span className="md:text-6xl mx-4 uppercase oswald">Louis Vuitton</span>
        <span className="md:text-6xl mx-4 uppercase roboto">Levi's</span>
      </div>
    </div>
  )
}

export default Marquee
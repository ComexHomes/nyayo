import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

function Locationfirst() {

    useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='amenities-first'>
        <div className="amenities-first-heading">
            <h2>PERFECTLY POSITIONED </h2>
        </div>
        <div className="amenities-first-text">
            <p>With easy access to Mombasa Road and Southern By Pass, as well as close proximity to some of the city’s most popular attractions, Nyayo View Suite is Perfectly positioned in a prized location with Nairobi’s best views featuring The Nyayo National Studium and the Nairobi Express Way views.
            </p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <Link href='https://goo.gl/maps/VASEZpiJ2pmDGejS7' target='_blank'>
            <button className="btn-light">Head to google maps</button>
          </Link>
        </div>
    </div>
  )
}

export default Locationfirst

import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function InvestmentPlan() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="fade-up" className='investment-plan'>
        <div  className="top-text">
          <h3>second source</h3>
          <h1>investment</h1>
          <h3>never look this good</h3>
        </div>

        <div data-aos="fade-up" className="investment-area">
          <div className="investment-card">
            <div className="heading-place">
              <h2>PREMIUM LOCATION</h2>
            </div>

            <div className="text-area-investment">
                <p>Nyayo view suites provides a rare opportunity
to buy into an exclusive and unique new
development in a spectacular setting in
Nairobi West overlooking Nyayo Stadium.
This distinctive and elegant address is
moments away from all that Nairobi
offers.</p>
              </div>
            
          </div>

          <div className="investment-card">
            <div className="heading-place">
              <h2>LIFESTYLE</h2>
            </div>

            <div className="text-area-investment">
                <p>Soaring to unprecedented heights, Nyayo View Suites will set a new standard of living in Nairobi environs.  This world-class mixed-use development brings together lifestyle, retail, entertainment, leisure and five star amenities overlooking the CBD skyline and beyond.

A walking distance from Nyayo Stadium and the Express way. 
</p>
              </div>
            
          </div>

          <div className="investment-card">
            <div className="heading-place">
              <h2>HIGH DEMAND REAL ESTATE</h2>
            </div>

            <div className="text-area-investment">
                <p>A maturing Real Estate market has driven demand inside the country. 
A large base of investors have been attracted by the growing market demand of luxurious Airbnb, hotel apartments and exquisite collection of modern studios and 1 bedroom apartments, a strategy that has seen the market grow exponentially. 

</p>
              </div>
            
          </div>

          
        </div>

        <div data-aos="fade-up" className="investment">
          <div className="investment-card">
            <div className="heading-place">
              <h2>PROJECT TIMELINES</h2>
            </div>

            <div className="text-area-investment">
                <p>Q1 2024 – Q4 2025</p>
              </div>
            
          </div>

          <div className="investment-card">
            <div className="heading-place">
              <h2>STANDARD PAYMENT PLAN</h2>
            </div>

            <div className="text-area-investment">
                <p>25% deposit, 75% payable in quarterly instalments during construction period.</p>
              </div>
            
          </div>

          <div className="investment-card">
            <div className="heading-place">
              <h2>ALTERNATIVE PAYMENT PLAN</h2>
            </div>

            <div className="text-area-investment">
                <p><strong>Upfront Payments:</strong> 
If a buyer wishes to make accelerated payments, a discounted price may be considered. Please discuss this with your sales executive.</p>
              </div>
            
          </div>
        </div>
    </div>
  )
}

export default InvestmentPlan

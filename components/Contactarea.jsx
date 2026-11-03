import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect} from 'react'
import Banner from '../assets/ComexHomes.jpg'
import Logo from '../assets/logoblack.jpg'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contactarea() {

    useEffect(() => {
        AOS.init({duration:1500})
    })



  return (
    <div data-aos='fade-up' className='contact-area'>
      <div className="contact-form-area">
        <div className="contact-form-heading">
            <h1>contact - us</h1>
        </div>

        <div style={{ width: "100%" }}>
          {/* Website Enquiry form in Zoho Forms (info@comexhomes.ke). Every submission is emailed to info@comexhomes.ke. */}
          <iframe
            title="Website Enquiry"
            aria-label="Website Enquiry"
            src="https://forms.zohopublic.com/balozi/form/WebsiteEnquiry/formperma/lMJLwfCsL2F8murEt4IYFdRYU6FWs7a6Xe9Ai3gVfw8?Website=https%3A%2F%2Fwww.nyayoviewsuites.co.ke"
            style={{ width: "100%", height: "900px", border: "none", background: "#fff", borderRadius: 8 }}
          />
        </div>

        <div className="more-text">
            <p style={{fontSize:'20px', color:'#fff'}}>Nyayo View Suites does not share or exchange this information with anyone. All information will be kept confidential.</p>
        </div>
      </div>
      <div className="contact-logo-area">
        <Image className='contact-image-logo-area' src={Banner} height={400} alt='contact image'/>

        <Image className='contact-logo-image-logo-area' src={Logo} alt='CONTACT PAGE logo'/>

        <div className="socials-container">
            <h3>Follow Us</h3>
            <Link href='https://www.facebook.com/comexhomes' target="_blank">
                <ImFacebook className='social-icon'/>
            </Link>

            <Link href='https://www.instagram.com/comexhomeske/' target="_blank">
                <AiOutlineInstagram className='social-icon'/>
            </Link>

            <Link href='https://twitter.com/ComexHomes' target="_blank">
                <AiOutlineTwitter className='social-icon'/>
            </Link>

            <Link href='https://www.linkedin.com/company/comexhomes/' target="_blank">
                <FaLinkedinIn className='social-icon'/>
            </Link>

            <Link href='https://www.youtube.com/channel/UC6Dm0R805fzKUROf96u-VpQ' target="_blank">
                <AiFillYoutube className='social-icon'/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Contactarea

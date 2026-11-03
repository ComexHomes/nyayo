import Image from 'next/image'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import Banner from '../assets/ComexHomes.jpg'
import Logo from '../assets/logoblack.jpg'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import Result from './Result'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contactarea() {

    useEffect(() => {
        AOS.init({duration:1500})
    })


  // const form = useRef();
  const [result, setResult] = useState(false)
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setFailed(false);
    setSending(true);
    try {
      // Sent to /api/enquiry, which passes it to the Zoho "Website Enquiry" form; Zoho emails info@comexhomes.ke.
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "failed");
      form.reset();
      setResult(true);
    } catch (err) {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-aos='fade-up' className='contact-area'>
      <div className="contact-form-area">
        <div className="contact-form-heading">
            <h1>contact - us</h1>
        </div>

        <form className='contact-form' onSubmit={sendEmail}>
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
            <div className="top-form">
                <div className="input-carrier">
                    <label htmlFor="first name">First Name</label>
                    <input type="text" name='firstName' required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="last name">Last Name</label>
                    <input  type="text" name='secondName' required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>

                <div className="input-carrier">
                    <label htmlFor="phone number">Phone Number</label>
                    <input type="tel" name='phone' required />
                </div>
            </div>

            <div className="input-carrier">
                <label htmlFor="subject">Subject</label>
                <input type="text" name='subject' required />
            </div>

            <div className="input-carrier">
                <label htmlFor="message" >Message</label>

                <textarea className='message' name='message'></textarea>
            </div>

            <div className="btn-area">
                <button className="btn-light" disabled={sending}>submit</button>
            </div>

            <div className='result'>
              {
                result ? <Result/> : null
              }
            </div>
          {failed ? (
            <p className="form-error" style={{ color: "#b91c1c", marginTop: 10 }}>
              Sorry, your message did not go through. Please call 0709 501 501 or email info@comexhomes.ke.
            </p>
          ) : null}
        </form>

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

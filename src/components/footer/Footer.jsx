import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Thomas Surbando Licari</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testiomonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>  
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" rel='noreferrer' target='_blank'><FaFacebookF /></a>
        <a href="https://instagram " rel='noreferrer' target='_blank'><FiInstagram /></a>
        <a href="https://twitter.com" rel='noreferrer' target='_blank'><IoLogoTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer
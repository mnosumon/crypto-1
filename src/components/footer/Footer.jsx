import React from 'react'
import './footer.css'
import FooterLogo from '../../assets/images/footerLogo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <section id='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer">
                    <div className="footerLogo">
                        <img src={FooterLogo} alt="FooterLogo" />
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
                    <div className="social">
                        <ul>
                            <li><FaTwitter className='social_icon' /></li>
                            <li><FaLinkedinIn className='social_icon'/></li>
                            <li><FaFacebookF className='social_icon' /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='copyRight'>&copy; All rights reserve by <span className='word_style'>MAAC</span></p>
        </div>
    </section>
  )
}

export default Footer
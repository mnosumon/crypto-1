import React from 'react'
import './about.css'
import AboutImage from '../../assets/images/aboutImage.svg'
import Ellipse from '../../assets/images/ellipse.png'

const About = () => {
  return (
    <section id='about'>
        <div className="container">
            <div className="about_wrapper">
                <div className="about_image">
                    <img src={AboutImage} alt="" />
                </div>
                <div className="about_details">
                    <div className="about_title">
                        <span>About us</span>
                        <h3>A dedicated solution for startups and enterprises</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="about_profile">
                        <div className="about_ellipse">
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className="about_description">
                            <p>"Fieldx is for teams that care about their product growth."</p>
                            <span>CEO, FieldX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
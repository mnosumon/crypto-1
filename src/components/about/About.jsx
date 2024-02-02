import React from 'react'
import './about.css'
import BannerImage from '../../assets/images/banner.png'
import AboutImage from '../../assets/images/aboutImage.svg'
import Ellipse from '../../assets/images/ellipse.png'
import Cup from '../../assets/images/numbers/cup.png'
import Monitor from '../../assets/images/numbers/monitor-mobbile.png'
import people from '../../assets/images/numbers/people.png'
import User from '../../assets/images/numbers/user.png'

const About = () => {
  return (
    <section id='about' style={{backgroundImage: `url(${BannerImage})`}}>
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
            <div className="numbers">
                <div className="number">
                    <div className="numbers_img">
                        <img src={Cup} alt="Cup" />
                    </div>
                    <h3>10+</h3>
                    <span>Platforms Created</span>
                </div>
                <div className="number">
                    <div className="numbers_img">
                        <img src={Monitor} alt="Monitor" />
                    </div>
                    <h3>1559+</h3>
                    <span>Total Users</span>
                </div>
                <div className="number">
                    <div className="numbers_img">
                        <img src={people} alt="people" />
                    </div>
                    <h3>10+</h3>
                    <span>Total Clients</span>
                </div>
                <div className="number">
                    <div className="numbers_img">
                        <img src={User} alt="User" />
                    </div>
                    <h3>300 Days</h3>
                    <span>In Operations</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
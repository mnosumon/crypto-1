import React from 'react'
import './clins.css'
import Treva from '../../assets/images/clins/treva.png'
import Kyan from '../../assets/images/clins/kyan.png'
import Amara from '../../assets/images/clins/amara.png'
import Aven from '../../assets/images/clins/aven.png'
import Circle from '../../assets/images/clins/circle.png'

const Clins = () => {
  return (
    <section id='clins'>
        <div className="container">
            <div className="clins">
                <p>5,000+ high-impact teams rely on Fieldx</p>
                <div className="clins_company">
                    <div className="comapyaAven">
                        <img src={Aven} alt="Aven" />
                    </div>
                    <div className="comapyAmara">
                        <img src={Amara} alt="Amara" />
                    </div>
                    <div className="comapyTreva">
                        <img src={Treva} alt="Treva" />
                    </div>
                    <div className="comapyKyan">
                        <img src={Kyan} alt="Kyan" />
                    </div>
                    <div className="comapyCircle">
                        <img src={Circle} alt="Circle" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clins
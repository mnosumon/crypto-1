import React from 'react'
import './banner.css'
import BannerImage from '../../assets/images/banner.png'
import CryptoCandle from '../../assets/images/cryptoCandle.svg'
import CryptoMobileCandle from '../../assets/images/cryptoMobileCandle.svg'

const Bannner = () => {
  return (
    <section id='banner' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="container">
            <div className="banner_wrapper">
                <div className="content">
                    <h2>Analytics that transform your product inside-out</h2>
                    <div className="banner_button">
                        <button className='banner_btn'>Request for Demo</button>
                        <button className='banner_btn'>Download</button>
                    </div>
                </div>
                <div className="bannerCryptoCndle">
                    <div className="banner_crypto">
                        <img src={CryptoCandle} alt="banner crypto" />
                    </div>
                    <div className="banner_crypto_mobile">
                        <img src={CryptoMobileCandle} alt="Crypto Mobile Candle" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bannner
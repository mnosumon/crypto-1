import React from 'react'
import './productFeature.css'
import ThreeDym from '../../assets/images/threeD.png'
import FeatureImage from '../../assets/images/featureMobileDsahbord.svg'

const ProductFeature = () => {
  return (
    <section id='features'>
        <div className="container">
            <div className="feature_title">
                <span>Products Features</span>
                <h3>Make more out of your data</h3>
            </div>
            <div className="feature_wrapper">
                <div className="feature_items">
                    <div className="feature_item">
                        <div className="threeDym">
                            <div className="threeD">
                                <img src={ThreeDym} alt="Three Dym" />
                            </div>
                        </div>
                        <h5>Real-time analytics</h5>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                    <div className="feature_item">
                        <div className="threeDym">
                            <div className="threeD">
                                <img src={ThreeDym} alt="Three Dym" />
                            </div>
                        </div>
                        <h5>Intuitive dashboard</h5>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                    <div className="feature_item">
                        <div className="threeDym">
                            <div className="threeD">
                                <img src={ThreeDym} alt="Three Dym" />
                            </div>
                        </div>
                        <h5>Smart suggestions</h5>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                </div>
                <div className="featureRoundImage">
                    <div className="feature_rounded"></div>
                    <div className="featureImage">
                        <img src={FeatureImage} alt="Feature Image" />
                    </div>
                </div>
                <div className="feature_items">
                    <div className="feature_item feature_right">
                        <div className="threeDym">
                            <div className="threeD">
                                <img src={ThreeDym} alt="Three Dym" />
                            </div>
                        </div>
                        <h5>Multiple views</h5>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                    <div className="feature_item feature_right">
                        <div className="threeDym">
                            <div className="threeD">
                                <img src={ThreeDym} alt="Three Dym" />
                            </div>
                        </div>
                        <h5>AI-led diagnoses</h5>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                    <div className="feature_item feature_right">
                        <div className="threeDym">
                            <div className="threeD">
                                <img src={ThreeDym} alt="Three Dym" />
                            </div>
                        </div>
                        <h5>Responsive</h5>
                        <p>See product usage, sign-ins, feature metrics change as users work on your.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductFeature
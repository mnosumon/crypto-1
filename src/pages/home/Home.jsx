import React from 'react'
import Bannner from '../../components/banner/Bannner'
import ProductFeature from '../../components/productFeatures/ProductFeature'
import About from '../../components/about/About'
import Question from '../../components/question/Question'
import Clins from '../../components/clins/Clins'

const Home = () => {
  return (
    <>
        <Bannner/>
        <ProductFeature/>
        <About/>
        <Question/>
        {/* <Clins/> */}
    </>
  )
}

export default Home
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Bannner from './components/banner/Bannner'
import ProductFeature from './components/productFeatures/ProductFeature'
import About from './components/about/About'
import Clins from './components/clins/Clins'

const App = () => {
  return (
    <>
      <Navbar/>
      <Bannner/>
      <ProductFeature/>
      <About/>
      <Clins/>
    </>
  )
}

export default App
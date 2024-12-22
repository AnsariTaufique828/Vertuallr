// import React from 'react'

import Feature from "./components/FeatureSection"
import { HeroSection } from "./components/HeroSection"
import Navbar from "./components/Navbar"
import { Pricing } from "./components/Pricing"
import Workflow from "./components/workflow"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>

 <Navbar/>
 <div className="px-0 lg:px-40">
 <div className="max-w-7xL mx-auto pt-20 px-6">
 <HeroSection/>
 </div>
 <Feature/>
 <Workflow/>
 <Pricing/>

 
 <Testimonials/>
 <Footer/>
 </div>
</>
  )
}

export default App

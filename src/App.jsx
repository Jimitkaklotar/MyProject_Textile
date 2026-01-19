import { useState } from 'react'
import './App.css'
import "./index.css"
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopCategorySection from './components/TopCategorySection'
import ShirtCarousel from './components/ArrivalSection'
import TrendingThisWeek from './components/TrendingSection'
import TrendingShoes from './components/ShoesSection'
import FashionShow from './components/FashionSection'
import VoucherSection from './components/VoucherSection'
import TestimonialCard from './components/TestimonialCard'
import InstagramSection from './components/InstagramSection'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
  <div className="overflow-hidden">
       <Navbar/>
       <HeroSection/>
       <TopCategorySection/>
       <ShirtCarousel/>
       <TrendingThisWeek/>
       <TrendingShoes/>
       <FashionShow/>
       <VoucherSection/>
       <TestimonialCard/>
       <InstagramSection/>
       <Footer/>
       </div>
    </>
  )
}

export default App

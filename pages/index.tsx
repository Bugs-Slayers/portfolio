import React, { useEffect, useState } from 'react'
import Nav from "@/Components/Nav";
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import Projects from '@/Components/Projects';
import Testimonial from '@/Components/Testimonial';
import TestimonialSlider from '@/Components/TestimonialSlider';
import Blog from '@/Components/Blog';
import Footer from '@/Components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";

const HomePage = () => {

const [nav,setNav] = useState(false);
const openNav = () => setNav(true);
const closeNav = () => setNav(false);


// Animation  AOS setup
useEffect(() => {
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay : 99,

  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});
},[]);

  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className='relative z-[30]'>
          {/* About  */}
          <About />
          {/* Services */}
          {/* <Services /> */}
          {/* Skills */}
          <Skills />
          {/* Projects */}
          <Projects />
          {/* Reviews/ Testimonial */}
          {/* <Testimonial /> */}
          {/* Testimonial Slider */}
          {/* BLOG */}
          {/* <Blog /> */}
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
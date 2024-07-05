import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import VideoSection from '../components/VideoSection'
import CoachingSection from '../components/CoachingSection'
import Footer from '../components/Footer'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <VideoSection />
    <AboutUsSection />
    <CoachingSection />
    <TestimonialsCarousel />
    <Footer />
    </>
  )
}

export default Home
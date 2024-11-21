// app/page.tsx
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import AboutSection from './components/AboutSection';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';


const HomePage = () => (
  <div>
    <Header />
    <HeroSection />
    <FeaturedProperties />
    <AboutSection />
    <ContactBanner />
    <Footer />
  </div>
);

export default HomePage;



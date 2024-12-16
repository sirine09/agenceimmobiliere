// app/about/page.tsx
import Header from '../components/Headerinscribed';
import AboutContent from '../components/AboutSectioninscribed';
import Footer from '../components/Footerinscribed';
import FeaturedProperties from '../components/Featuresinscribed';
import HeroSection from '../components/HeroSectioninscribed';

const AboutPage = () => (
  <div>
      
    <main >
    <Header/> 
      <HeroSection/>
      <FeaturedProperties/>
      <AboutContent />
    </main>
    <Footer />
  </div>
);

export default AboutPage;

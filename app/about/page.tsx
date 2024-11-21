// app/about/page.tsx
import Header from '../components/Header';

import Footer from '../components/Footer';
import FeaturedProperties from '../components/FeaturedProperties';
const AboutPage = () => (
  <div>
    <Header />
    <main className="container mx-auto p-6">
      <FeaturedProperties/>
         
    </main>
    <Footer />
  </div>
);

export default AboutPage;

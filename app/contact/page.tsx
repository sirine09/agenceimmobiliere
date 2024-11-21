// app/contact/page.tsx
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => (
  <div>
    <Header />
    <main className="container mx-auto p-6">
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default ContactPage;

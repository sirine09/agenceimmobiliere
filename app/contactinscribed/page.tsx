// app/contact/page.tsx
import Header from '../components/Headerinscribed';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footerinscribed';

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
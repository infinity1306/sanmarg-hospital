import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Facilities from './components/Facilities';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Facilities />
        <Doctors />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

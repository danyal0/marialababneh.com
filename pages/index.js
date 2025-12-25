import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

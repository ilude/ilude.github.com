import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PhilosophySection from './components/PhilosophySection';
import ArchitectureSection from './components/ArchitectureSection';
import ProjectsSection from './components/ProjectsSection';
import LoreSection from './components/LoreSection';
import ConstitutionalSection from './components/ConstitutionalSection';
import LinksSection from './components/LinksSection';
import ChaosMeter from './components/ChaosMeter';
import UptimeCounter from './components/UptimeCounter';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      
      {/* Interactive widgets */}
      <ChaosMeter />
      <UptimeCounter />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="philosophy">
          <PhilosophySection />
        </section>
        
        <section id="architecture">
          <ArchitectureSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="lore">
          <LoreSection />
        </section>
        
        <section id="constitutional">
          <ConstitutionalSection />
        </section>
        
        <section id="links">
          <LinksSection />
        </section>
      </main>
    </div>
  );
}

export default App;
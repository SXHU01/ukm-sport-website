import { Navbar } from '../components/ukm/Navbar';
import { HeroSection } from '../components/ukm/HeroSection';
import { MarqueeBanner } from '../components/ukm/MarqueeBanner';
import { AboutSection } from '../components/ukm/AboutSection';
import { SportsGrid } from '../components/ukm/SportsGrid';
import { AgendaSection } from '../components/ukm/AgendaSection';
import { FacilitiesSection } from '../components/ukm/FacilitiesSection';
import { CTASection } from '../components/ukm/CTASection';
import { Footer } from '../components/ukm/Footer';
import { ScrollAnimator } from '../components/ukm/ScrollAnimator';


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero: Tidak dibungkus karena punya animasi sendiri */}
      <HeroSection />

      {/* Marquee Banner: Dekoratif antar section */}
      <MarqueeBanner />

      {/* About: Slide Left */}
      <ScrollAnimator animation="slide-left" duration={800}>
        <AboutSection />
      </ScrollAnimator>

      {/* Sports: Zoom In */}
      <ScrollAnimator animation="zoom-in" duration={800}>
        <SportsGrid />
      </ScrollAnimator>

      {/* Agenda: Fade Up dengan delay */}
      <ScrollAnimator animation="fade-up" delay={100} duration={700}>
        <AgendaSection />
      </ScrollAnimator>

      {/* Facilities: Slide Right */}
      <ScrollAnimator animation="slide-right" duration={800}>
        <FacilitiesSection />
      </ScrollAnimator>

      {/* CTA: Scale Up */}
      <ScrollAnimator animation="scale" duration={600}>
        <CTASection />
      </ScrollAnimator>

      {/* Footer: Fade sederhana */}
      <ScrollAnimator animation="fade" duration={1000}>
        <Footer />
      </ScrollAnimator>
    </main>
  );
}
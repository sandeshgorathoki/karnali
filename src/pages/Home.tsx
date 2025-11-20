import Hero from '../components/home/Hero';
import ServicesHighlight from '../components/home/ServicesHighlight';
import AboutSection from '../components/home/AboutSection';
import ServicesGrid from '../components/home/ServicesGrid';
import ProjectsSection from '../components/home/ProjectsSection';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTASection from '../components/home/CTASection';
import StatsSection from '../components/home/StatsSection';

export default function Home() {
  return (
    <>
      {/* Basic SEO for Home */}
      
      <Hero />
      <ServicesHighlight />
      <AboutSection />
      <ServicesGrid />
      <ProjectsSection />
      <Testimonials />
      <WhyChooseUs />
      <StatsSection />
      <CTASection />
    </>
  );
}


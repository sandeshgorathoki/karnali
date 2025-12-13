import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = useMemo(() => services.find((s) => s.slug === slug), [slug]);
  if (!service) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Service not found</h1>
      </div>
    );
  }
  const getServiceDetails = (slug: string) => {
    const details: { [key: string]: any } = {
      'residential-commercial-construction': {
        features: ['Custom Design & Planning', 'Quality Materials & Construction', 'Timely Project Delivery', 'Post-Construction Support'],
        process: ['Initial Consultation', 'Design & Planning', 'Permit Acquisition', 'Construction Phase', 'Quality Inspection', 'Project Handover'],
        description: 'Our comprehensive construction services cover everything from residential homes to commercial buildings. We specialize in modern, sustainable construction practices using quality materials and advanced techniques.'
      },
      'renovation-remodeling': {
        features: ['Structural Assessment', 'Modern Design Solutions', 'Quality Renovation Work', 'Minimal Disruption'],
        process: ['Site Assessment', 'Design Planning', 'Material Selection', 'Renovation Work', 'Quality Control', 'Final Inspection'],
        description: 'Transform your existing space with our expert renovation services. We handle everything from minor updates to complete structural overhauls while maintaining quality and minimizing disruption.'
      },
      'business-consulting-urban-planning': {
        features: ['Strategic Planning', 'Urban Development', 'Community Engagement', 'Sustainable Solutions'],
        process: ['Analysis & Research', 'Stakeholder Consultation', 'Plan Development', 'Implementation Strategy', 'Monitoring & Evaluation'],
        description: 'Professional consulting services for urban development and business infrastructure. We help create sustainable, well-planned communities and business environments.'
      },
      'roads-infrastructure-development': {
        features: ['Road Construction', 'Bridge Engineering', 'Utility Installation', 'Maintenance Services'],
        process: ['Site Survey', 'Engineering Design', 'Permit Processing', 'Construction', 'Quality Testing', 'Handover'],
        description: 'Comprehensive infrastructure development including roads, bridges, and utilities. We ensure safe, durable infrastructure that serves communities for decades.'
      },
      'structural-design-civil-engineering': {
        features: ['Structural Analysis', 'Safety Compliance', 'Advanced Engineering', 'Quality Assurance'],
        process: ['Site Investigation', 'Structural Design', 'Engineering Calculations', 'Safety Review', 'Construction Support'],
        description: 'Professional structural engineering services ensuring safe, compliant, and durable construction. Our expertise covers all aspects of structural design and civil engineering.'
      },
      'architectural-design-project-management': {
        features: ['Creative Design', 'Project Coordination', 'Timeline Management', 'Quality Control'],
        process: ['Client Consultation', 'Concept Design', 'Detailed Planning', 'Project Execution', 'Progress Monitoring', 'Final Delivery'],
        description: 'Complete architectural design and project management services. We handle everything from initial concept to final delivery, ensuring quality and timeliness.'
      }
    };
    return details[slug] || { features: [], process: [], description: service.description };
  };

  const serviceDetails = getServiceDetails(service.slug);

  return (
    <>
      <PageHero title={service.title} subtitle="Service" image={service.image} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-almostBlack mb-4">Service Overview</h2>
            <p className="text-lg text-neutral-darkGray/80 mb-6">{serviceDetails.description}</p>
            
            <h3 className="text-xl font-semibold text-neutral-almostBlack mb-4">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {serviceDetails.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-darkGray/80">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-neutral-almostBlack mb-4">Our Process</h3>
            <div className="space-y-4">
              {serviceDetails.process.map((step: string, index: number) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-blue-100 bg-white">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-neutral-darkGray/80">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-almostBlack mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-sm text-neutral-darkGray/80">
                <li>• 5+ years of experience</li>
                <li>• Licensed & certified professionals</li>
                <li>• Quality materials & workmanship</li>
                <li>• Timely project delivery</li>
                <li>• Competitive pricing</li>
                <li>• Post-completion support</li>
              </ul>
            </div>

            <div className="bg-white border border-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-almostBlack mb-4">Get Started</h3>
              <p className="text-sm text-neutral-darkGray/80 mb-4">Ready to begin your project? Contact us for a free consultation.</p>
              <a href="/contact" className="w-full bg-primary text-white py-3 px-4 rounded-lg text-center block hover:bg-accent transition">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


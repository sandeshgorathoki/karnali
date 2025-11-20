import PageHero from '../components/shared/PageHero';
import SEO from '../components/shared/SEO';
import TeamSection from '../components/home/TeamSection';
import { PiBuildingBold, PiUsersBold, PiMedalBold, PiShieldCheckBold } from 'react-icons/pi';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Karnali Infrastructure Development Services Pvt Ltd - Nepal's leading construction company with 25+ years of excellence." />
      <PageHero title="About Us" subtitle="Our Story" />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-almostBlack mb-4">Karnali Infrastructure Development Services Pvt Ltd</h2>
          <p className="text-lg text-neutral-darkGray/80 max-w-4xl mx-auto">
            A leading construction company in Nepal with over 5 years of experience in delivering exceptional residential, commercial, and infrastructure projects across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-neutral-almostBlack mb-6">Our Company Story</h3>
            <p className="text-neutral-darkGray/80 mb-4">
              Founded in 2022, Karnali Infrastructure Development Services Pvt Ltd has grown from a small construction firm to one of Nepal's most trusted and respected construction companies. Our journey began with a simple vision: to build Nepal's future through quality construction and innovative engineering.
            </p>
            <p className="text-neutral-darkGray/80 mb-6">
              Over the years, we have successfully completed hundreds of projects ranging from residential complexes and commercial buildings to major infrastructure developments including roads, bridges, and public facilities. Our commitment to quality, safety, and timely delivery has earned us the trust of clients across Nepal.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-neutral-darkGray/80">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-neutral-darkGray/80">Projects Completed</div>
              </div>
            </div>
          </div>
          <img className="w-full h-96 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop" alt="Our construction team" />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-neutral-almostBlack mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white border border-blue-100 rounded-xl">
              <PiBuildingBold className="text-primary text-3xl mx-auto mb-4" />
              <h4 className="font-semibold text-neutral-almostBlack mb-2">Quality</h4>
              <p className="text-sm text-neutral-darkGray/80">We maintain the highest standards in all our construction projects.</p>
            </div>
            <div className="text-center p-6 bg-white border border-blue-100 rounded-xl">
              <PiUsersBold className="text-primary text-3xl mx-auto mb-4" />
              <h4 className="font-semibold text-neutral-almostBlack mb-2">Integrity</h4>
              <p className="text-sm text-neutral-darkGray/80">Honest, transparent, and ethical business practices in everything we do.</p>
            </div>
            <div className="text-center p-6 bg-white border border-blue-100 rounded-xl">
              <PiMedalBold className="text-primary text-3xl mx-auto mb-4" />
              <h4 className="font-semibold text-neutral-almostBlack mb-2">Excellence</h4>
              <p className="text-sm text-neutral-darkGray/80">Continuous improvement and innovation in construction techniques.</p>
            </div>
            <div className="text-center p-6 bg-white border border-blue-100 rounded-xl">
              <PiShieldCheckBold className="text-primary text-3xl mx-auto mb-4" />
              <h4 className="font-semibold text-neutral-almostBlack mb-2">Safety</h4>
              <p className="text-sm text-neutral-darkGray/80">Safety-first approach ensuring zero accidents on all project sites.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-neutral-almostBlack mb-4">Our Mission</h3>
          <p className="text-lg text-neutral-darkGray/80 max-w-4xl mx-auto mb-8">
            To contribute to Nepal's development by delivering world-class construction services that combine traditional craftsmanship with modern technology, while maintaining the highest standards of quality, safety, and environmental responsibility.
          </p>
          <h3 className="text-2xl font-bold text-neutral-almostBlack mb-4">Our Vision</h3>
          <p className="text-lg text-neutral-darkGray/80 max-w-4xl mx-auto">
            To be Nepal's most trusted and innovative construction company, recognized for excellence in building the nation's infrastructure and creating sustainable communities for future generations.
          </p>
        </div>

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section (now at the bottom) */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-neutral-almostBlack text-center mb-8">Frequently Asked Questions</h3>
        <div className="mx-auto max-w-3xl space-y-4">
          <details className="group bg-white border border-blue-100 rounded-xl p-5">
            <summary className="flex cursor-pointer items-center justify-between text-left list-none">
              <span className="font-semibold text-neutral-almostBlack">What services does Karnali provide?</span>
              <span className="ml-4 text-primary group-open:rotate-180 transition">▼</span>
            </summary>
            <div className="mt-3 text-neutral-darkGray/80 text-sm">
              Karnali offers construction, design, project management, and business consulting services in Nepal.
            </div>
          </details>
          <details className="group bg-white border border-blue-100 rounded-xl p-5">
            <summary className="flex cursor-pointer items-center justify-between text-left list-none">
              <span className="font-semibold text-neutral-almostBlack">Why choose Karnali for your construction projects?</span>
              <span className="ml-4 text-primary group-open:rotate-180 transition">▼</span>
            </summary>
            <div className="mt-3 text-neutral-darkGray/80 text-sm">
              We have experienced professionals, use quality materials, and always deliver on time and on budget.
            </div>
          </details>
          <details className="group bg-white border border-blue-100 rounded-xl p-5">
            <summary className="flex cursor-pointer items-center justify-between text-left list-none">
              <span className="font-semibold text-neutral-almostBlack">Does Karnali offer real estate services in Nepal?</span>
              <span className="ml-4 text-primary group-open:rotate-180 transition">▼</span>
            </summary>
            <div className="mt-3 text-neutral-darkGray/80 text-sm">
              Karnali focuses on construction, but can assist with real estate by referral.
            </div>
          </details>
          <details className="group bg-white border border-blue-100 rounded-xl p-5">
            <summary className="flex cursor-pointer items-center justify-between text-left list-none">
              <span className="font-semibold text-neutral-almostBlack">How can I contact Karnali for project inquiries?</span>
              <span className="ml-4 text-primary group-open:rotate-180 transition">▼</span>
            </summary>
            <div className="mt-3 text-neutral-darkGray/80 text-sm">
              Phone, email, or <a href="/contact" className="text-primary hover:underline">our contact form</a>.
            </div>
          </details>
          <details className="group bg-white border border-blue-100 rounded-xl p-5">
            <summary className="flex cursor-pointer items-center justify-between text-left list-none">
              <span className="font-semibold text-neutral-almostBlack">Does Karnali use sustainable construction practices?</span>
              <span className="ml-4 text-primary group-open:rotate-180 transition">▼</span>
            </summary>
            <div className="mt-3 text-neutral-darkGray/80 text-sm">
              Yes, we use eco-friendly materials and methods where possible.
            </div>
          </details>
        </div>
      </div>
      </div>
    </>
  );
}


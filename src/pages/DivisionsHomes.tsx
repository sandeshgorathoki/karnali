import PageHero from '../components/shared/PageHero';
import { PiHouseBold, PiBlueprintBold, PiHammerBold, PiCheckCircleBold } from 'react-icons/pi';

export default function DivisionsHomes() {
  return (
    <>
      <PageHero title="Homes Division" subtitle="Residential Construction" image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop" />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-almostBlack mb-6">Building Your Dream Home</h2>
            <p className="text-lg text-neutral-darkGray/80 mb-6">From concept to completion, our Homes Division specializes in creating beautiful, functional residential spaces that reflect your lifestyle and vision.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiHouseBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Custom Homes</div>
                  <div className="text-sm text-neutral-darkGray/70">Tailored to your needs</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiBlueprintBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Design Services</div>
                  <div className="text-sm text-neutral-darkGray/70">Architectural planning</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiHammerBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Construction</div>
                  <div className="text-sm text-neutral-darkGray/70">Quality craftsmanship</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiCheckCircleBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Handover</div>
                  <div className="text-sm text-neutral-darkGray/70">Complete project delivery</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop" alt="Modern home exterior" />
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" alt="Home interior" />
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" alt="Construction process" />
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Completed home" />
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">Our Residential Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <PiHouseBold className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Single Family Homes</h4>
              <p className="text-neutral-darkGray/80">Custom-designed single-family residences with modern amenities and sustainable features.</p>
            </div>
           
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <PiHammerBold className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Home Renovations</h4>
              <p className="text-neutral-darkGray/80">Complete home makeovers including structural improvements and modern upgrades.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


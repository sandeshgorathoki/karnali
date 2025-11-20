import PageHero from '../components/shared/PageHero';
import { PiRoadHorizonBold, PiBridgeBold, PiWrenchBold, PiShieldCheckBold } from 'react-icons/pi';

export default function DivisionsInfrastructure() {
  return (
    <>
      <PageHero title="Infrastructure Division" subtitle="Public Infrastructure" image="https://images.unsplash.com/photo-1581092921461-eab62e97a261?q=80&w=2000&auto=format&fit=crop" />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-almostBlack mb-6">Building Nepal's Future</h2>
            <p className="text-lg text-neutral-darkGray/80 mb-6">Our Infrastructure Division delivers large-scale public works projects that connect communities, improve quality of life, and drive economic development across Nepal.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiRoadHorizonBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Roads & Highways</div>
                  <div className="text-sm text-neutral-darkGray/70">Modern transportation</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiBridgeBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Bridges</div>
                  <div className="text-sm text-neutral-darkGray/70">Safe river crossings</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiWrenchBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Utilities</div>
                  <div className="text-sm text-neutral-darkGray/70">Water & power systems</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                <PiShieldCheckBold className="text-primary text-2xl" />
                <div>
                  <div className="font-semibold">Safety First</div>
                  <div className="text-sm text-neutral-darkGray/70">Rigorous standards</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1581092921461-eab62e97a261?q=80&w=800&auto=format&fit=crop" alt="Road construction" />
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop" alt="Bridge construction" />
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" alt="Utility installation" />
            <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" alt="Completed infrastructure" />
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">Our Infrastructure Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <PiRoadHorizonBold className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Road Construction</h4>
              <p className="text-neutral-darkGray/80">High-quality road networks including highways, rural roads, and urban streets with proper drainage systems.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <PiBridgeBold className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Bridge Engineering</h4>
              <p className="text-neutral-darkGray/80">Safe and durable bridges designed to withstand Nepal's challenging terrain and weather conditions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <PiWrenchBold className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Utility Infrastructure</h4>
              <p className="text-neutral-darkGray/80">Water supply systems, sewage treatment, and electrical infrastructure for sustainable development.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}


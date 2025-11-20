import CountUp from 'react-countup';
import { PiBlueprintBold, PiSmileyBold, PiCheckCircleBold, PiHammerBold } from 'react-icons/pi';

const stats = [
  { icon: PiBlueprintBold, value: 25, suffix: '+', label: 'Project Designs' },
  { icon: PiSmileyBold, value: 20, suffix: '+', label: 'Happy Clients' },
  { icon: PiCheckCircleBold, value: 20, suffix: '+', label: 'Completed Projects' },
  { icon: PiHammerBold, value: 6, suffix: '+', label: 'Running Projects' },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <p className="text-lightBlue tracking-wide uppercase text-sm">Know More About Our Success</p>
          <h2 className="text-3xl font-bold">Numbers That Speak For Themselves</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-white/10 p-6 text-center border border-white/15">
              <s.icon className="mx-auto text-3xl mb-2" />
              <div className="text-3xl font-extrabold">
                <CountUp end={s.value} duration={2} />{s.suffix}
              </div>
              <div className="mt-1 text-white/90">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { useMemo, useState } from 'react';
import PageHero from '../components/shared/PageHero';
import SEO from '../components/shared/SEO';
import { projects } from '../data/projects';

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('Latest');
  const filtered = useMemo(() => {
    let list = projects.filter((p) => (category === 'All' ? true : p.category === category));
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === 'A-Z') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'Z-A') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [category, q, sort]);

  return (
    <>
      <SEO title="Projects" description="Browse our residential, commercial, and infrastructure portfolio." />
      <PageHero title="Projects" subtitle="Our Portfolio" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-wrap gap-3 items-center">
          {['All', 'Completed', 'Running'].map((c) => (
            <button key={c} className={`px-4 py-2 rounded-full border ${category === c ? 'bg-primary text-white border-primary' : 'border-neutral-lightGray'}`} onClick={() => setCategory(c)}>{c}</button>
          ))}
          <input className="ml-auto border rounded px-3 py-2" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="border rounded px-3 py-2" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>Latest</option>
            <option>A-Z</option>
            <option>Z-A</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <a key={p.id} href={`/projects/${p.id}`} className="group rounded-xl overflow-hidden bg-white border border-blue-100 shadow-sm hover:shadow-lg">
              <div className="h-44 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition" src={p.image} alt={p.name} />
              </div>
              <div className="p-5">
                <div className="text-xs inline-block px-2 py-1 rounded bg-blue-100 text-primary">{p.category}</div>
                <h3 className="text-lg font-semibold text-neutral-almostBlack mt-2">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-darkGray/80">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}


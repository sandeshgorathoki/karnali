import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import { projects } from '../data/projects';
import Lightbox from '../components/ui/Lightbox';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useMemo(() => projects.find((p) => p.id === id), [id]);
  const gallery = useMemo(() =>
    project?.images?.length ? project.images : (project ? [project.image] : []),
  [project]);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  if (!project) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }
  return (
    <>
      <PageHero title={project.name} subtitle={project.category} image={project.image} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-almostBlack mb-4">Project Overview</h2>
            <p className="text-lg text-neutral-darkGray/80 mb-6">{project.description}</p>
            
            <h3 className="text-xl font-semibold text-neutral-almostBlack mb-4">Project Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-white">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-darkGray/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gallery.slice(0,4).map((img, i) => (
                <img key={i} className="w-full h-64 object-cover rounded-xl" src={img} alt={project.name + ' image ' + (i+1)} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-almostBlack mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-darkGray/70">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-darkGray/70">Location:</span>
                  <span className="font-medium">{project.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-darkGray/70">Duration:</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                {project.completionDate && (
                  <div className="flex justify-between">
                    <span className="text-neutral-darkGray/70">Completed:</span>
                    <span className="font-medium">{project.completionDate}</span>
                  </div>
                )}
                {project.startDate && (
                  <div className="flex justify-between">
                    <span className="text-neutral-darkGray/70">Started:</span>
                    <span className="font-medium">{project.startDate}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white border border-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-almostBlack mb-4">Project Status</h3>
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${project.category === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="font-medium">{project.category}</span>
              </div>
              <p className="text-sm text-neutral-darkGray/80 mt-2">
                {project.category === 'Completed' 
                  ? 'This project has been successfully completed and delivered to the client.'
                  : 'This project is currently in progress and on track for timely completion.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Lightbox
          images={gallery}
          index={idx}
          onClose={() => setOpen(false)}
          onPrev={() => setIdx((i) => (i - 1 + gallery.length) % gallery.length)}
          onNext={() => setIdx((i) => (i + 1) % gallery.length)}
        />
      )}
    </>
  );
}


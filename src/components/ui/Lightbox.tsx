import { useEffect } from 'react';

type Props = {
	images: string[];
	index: number;
	onClose: () => void;
	onPrev: () => void;
	onNext: () => void;
};

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const src = images[index];
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <button aria-label="Close" onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">×</button>
      <button aria-label="Prev" onClick={onPrev} className="absolute left-4 md:left-8 text-white text-2xl">‹</button>
      <img src={src} alt="Gallery" className="max-h-[80vh] max-w-[90vw] object-contain rounded" />
      <button aria-label="Next" onClick={onNext} className="absolute right-4 md:right-8 text-white text-2xl">›</button>
    </div>
  );
}








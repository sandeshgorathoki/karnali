type Props = { title: string; subtitle?: string; image?: string };

export default function PageHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative h-56 md:h-64 grid place-items-center overflow-hidden">
      {image ? (
        <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={title} />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600" />
      )}
      <div className="absolute inset-0 bg-blue-900/50" />
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-lightBlue tracking-wide uppercase text-xs md:text-sm">{subtitle}</p>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
    </section>
  );
}






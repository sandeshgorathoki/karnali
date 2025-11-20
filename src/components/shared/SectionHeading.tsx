type Props = {
	subtitle?: string;
	title: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ subtitle, title, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`space-y-2 ${alignment}`}>
      {subtitle && <p className="text-secondary tracking-wide uppercase text-sm">{subtitle}</p>}
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-almostBlack">{title}</h2>
    </div>
  );
}



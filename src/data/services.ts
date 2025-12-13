export type Service = {
	id: string;
	slug: string;
	title: string;
	description: string;
	icon: string; // react-icons name hint
	image: string; // url
};

export const services: Service[] = [
	{
		id: 'residential-commercial-construction',
		slug: 'residential-commercial-construction',
		title: 'Residential & Commercial Building Construction',
		description: 'Complete construction services for residential homes, apartments, offices, and commercial buildings with modern design and quality materials.',
		icon: 'PiBuildingBold',
		image: '/services/1.jpg'
	},
	{
		id: 'renovation-remodeling',
		slug: 'renovation-remodeling',
		title: 'Renovation & Remodeling Services',
		description: 'Transform existing spaces with our comprehensive renovation services including structural improvements, modern upgrades, and interior redesign.',
		icon: 'PiHammerBold',
		image: '/services/2.jpg',
	},
	{
		id: 'business-consulting-urban-planning',
		slug: 'business-consulting-urban-planning',
		title: 'Business Consulting & Urban Planning',
		description: 'Strategic planning and consulting services for sustainable urban development, community planning, and business infrastructure solutions.',
		icon: 'PiMapTrifoldBold',
		image: '/services/4.jpg',
	},
	{
		id: 'roads-infrastructure-development',
		slug: 'roads-infrastructure-development',
		title: 'Roads & Infrastructure Development',
		description: 'Comprehensive infrastructure projects including road construction, bridges, utilities, and public works that connect and serve communities.',
		icon: 'PiRoadHorizonBold',
		image: '/services/3.jpg',
	},
	{
		id: 'structural-design-civil-engineering',
		slug: 'structural-design-civil-engineering',
		title: 'Structural Design & Civil Engineering',
		description: 'Professional structural engineering services ensuring safe, durable, and compliant construction with advanced design and analysis.',
		icon: 'PiBlueprintBold',
		image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 'architectural-design-project-management',
		slug: 'architectural-design-project-management',
		title: 'Architectural Design & Project Management',
		description: 'Complete architectural design services with professional project management ensuring timely delivery and quality execution from concept to completion.',
		icon: 'PiClipboardBold',
		image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
	},
];



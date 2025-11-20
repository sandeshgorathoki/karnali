export type Project = {
	id: string;
	name: string;
	category: 'Completed' | 'Running';
	description: string;
	image: string;
	images?: string[];
	location: string;
	client: string;
	duration: string;
	completionDate?: string;
	startDate?: string;
	features: string[];
};

export const projects: Project[] = [
	// Completed Projects
	{
		id: 'chaina-khola-trail-bridge',
		name: 'Chaina Khola Trail Bridge',
		category: 'Completed',
		description: 'A vital trail bridge infrastructure project connecting remote communities across Chaina Khola, providing essential access for local residents and improving regional connectivity in the mountainous terrain of Mugu.',
		image: '/project/1.1.jpg',
		images: ['/project/1.2.jpg', '/project/1.3.jpg'],
		location: 'Chayanath Rara Municipality, Mugu, Nepal',
		client: 'Local Government',
		duration: '12 months',
		completionDate: '2023',
		features: ['Trail Bridge Construction', 'Mountain Engineering', 'Community Access', 'Durable Design']
	},
	{
		id: 'goa-bridge-of-dreams',
		name: 'Goa Bridge of Dreams',
		category: 'Completed',
		description: 'An international infrastructure project showcasing our expertise beyond Nepal borders. This bridge project in Goa demonstrates our capability to deliver quality construction in diverse geographical and cultural contexts.',
		image: '/project/2.1.jpg',
		images: ['/project/2.2.jpeg', '/project/2.3.jpeg'],
		location: 'Goa, India',
		client: 'International Client',
		duration: '18 months',
		completionDate: '2022',
		features: ['International Project', 'Modern Bridge Design', 'Quality Construction', 'Cultural Integration']
	},
	{
		id: 'khor-sipchour-jholengu-pul',
		name: 'Khor Sipchour Jholengu Pul',
		category: 'Completed',
		description: 'A suspension bridge project in Jajarkot providing critical infrastructure for local transportation and community development. This project improved accessibility and economic opportunities for the surrounding regions.',
		image: '/project/3.1.jpeg',
		images: ['/project/3.2.jpeg', '/project/3.3.jpeg'],
		location: 'Chhedagad Municipality, Jajarkot, Nepal',
		client: 'Municipality Government',
		duration: '15 months',
		completionDate: '2023',
		features: ['Suspension Bridge', 'Community Development', 'Transportation Access', 'Engineering Excellence']
	},
	{
		id: 'saraswoti-secondary-school',
		name: 'Saraswoti Secondary School',
		category: 'Completed',
		description: 'A comprehensive educational facility construction project providing modern classrooms, laboratories, and facilities for quality education. This project supports the educational development of the Tulsipur-09 Katkuiya community.',
		image: '/project/4.1.jpg',
		images: ['/project/4.2.jpg', '/project/4.3.jpg'],
		location: 'Tulsipur-09 Katkuiya, Dang, Nepal',
		client: 'Education Department',
		duration: '20 months',
		completionDate: '2023',
		features: ['Modern Classrooms', 'Science Laboratories', 'Educational Infrastructure', 'Student Facilities']
	},
	{
		id: 'ward-7-office-building',
		name: 'Ward No. 7 Office Building',
		category: 'Completed',
		description: 'A municipal office building project providing modern administrative facilities for local governance. This building serves as a hub for community services and governmental operations in Tulsipur Sub-Metropolitan City.',
		image: '/project/5.1.jpg',
		images: ['/project/5.2.jpeg', '/project/5.3.jpg'],
		location: 'Tulsipur Sub-Metropolitan City, Nepal',
		client: 'Sub-Metropolitan City',
		duration: '14 months',
		completionDate: '2024',
		features: ['Administrative Building', 'Modern Office Spaces', 'Public Service Areas', 'Government Facility']
	},
	{
		id: 'water-supply-project',
		name: 'Water Supply Project',
		category: 'Completed',
		description: 'A comprehensive water supply infrastructure project providing clean and reliable water access to the community. This vital project includes pipeline installation, water treatment facilities, and distribution systems.',
		image: '/project/6.1.jpg',
		images: ['/project/6.2.jpg', '/project/6.3.jpg'],
		location: 'Dungeshwor Municipality, Dailekh, Nepal',
		client: 'Municipality Government',
		duration: '16 months',
		completionDate: '2023',
		features: ['Water Pipeline System', 'Treatment Facilities', 'Distribution Network', 'Community Infrastructure']
	},
	
	// Running Projects
	{
		id: 'chhatebage-jholunge-pul',
		name: 'Chhatebage Jholunge Pul',
		category: 'Running',
		description: 'An ongoing suspension bridge project that will provide essential connectivity for remote communities. This project demonstrates our commitment to improving infrastructure in challenging terrains across Nepal.',
		image: 'https://unsplash.com/photos/brown-wooden-bridge-in-the-forest-during-daytime-o2SVFy4FZ7U',
		location: 'Mugu, Nepal',
		client: 'Local Government',
		duration: '18 months',
		startDate: '2024',
		features: ['Suspension Bridge', 'Remote Access', 'Engineering Challenges', 'Community Connectivity']
	},
	{
		id: 'bajhyatari-takure-trail-bridge',
		name: 'Bajhyatari Takure Trail Bridge',
		category: 'Running',
		description: 'A trail bridge construction project currently underway in Gulmi, designed to enhance local transportation and connectivity. This project will serve as a critical link for communities in the hilly terrain.',
		image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1600&auto=format&fit=crop',
		location: 'Gulmi, Nepal',
		client: 'District Government',
		duration: '14 months',
		startDate: '2024',
		features: ['Trail Bridge Construction', 'Hill Engineering', 'Local Transportation', 'Accessibility Improvement']
	}
];



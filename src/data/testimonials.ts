export type Testimonial = {
	name: string;
	role: string;
	quote: string;
	rating: number;
	avatar?: string;
};

export const testimonials: Testimonial[] = [
	{
		name: 'Aarav Sharma',
		role: 'Residential Client',
		quote: 'Professional team, transparent process, and superb quality. Highly recommended!',
		rating: 5,
		avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=256&h=256&fit=crop',
	},
	{
		name: 'Maya Gurung',
		role: 'Commercial Client',
		quote: 'Delivered on time and within budget. The results exceeded our expectations.',
		rating: 5,
		avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=256&h=256&fit=crop',
	},
	{
		name: 'Sujan Khadka',
		role: 'Infrastructure Partner',
		quote: 'Reliable, safety-first approach with excellent project management.',
		rating: 5,
	},
];




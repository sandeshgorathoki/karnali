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
	
	},
	{
		name: 'Maya Gurung',
		role: 'Commercial Client',
		quote: 'Delivered on time and within budget. The results exceeded our expectations.',
		rating: 5,
	
	},
	{
		name: 'Sujan Khadka',
		role: 'Infrastructure Partner',
		quote: 'Reliable, safety-first approach with excellent project management.',
		rating: 5,
	},
];




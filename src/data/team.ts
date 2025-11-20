export type TeamMember = {
	id: string;
	name: string;
	position: string;
	image: string;
	bio?: string;
};

export const teamMembers: TeamMember[] = [
	{
		id: 'indra-bahadur-dc',
		name: 'Indra Bahadur DC',
		position: 'Managing Director',
		image: '/team/indra-bahadur-dc.jpg',
		bio: 'Leading Karnali Construction with strategic vision and over 25 years of experience in construction and infrastructure development.'
	},
	{
		id: 'numa-dc',
		name: 'Numa DC',
		position: 'Chairman/Director of Finance',
		image: '/team/numa-dc.jpg',
		bio: 'Overseeing financial operations and strategic planning to ensure sustainable growth and successful project delivery.'
	},
	{
		id: 'phauda-bahadur-dangi',
		name: 'Phauda Bahadur Dangi',
		position: 'Transportation Manager',
		image: '/team/phauda-bahadur-dangi.jpg',
		bio: 'Managing transportation logistics and fleet operations to ensure efficient project delivery and optimal resource management.'
	},
	{
		id: 'bishal-rawal',
		name: 'Bishal Rawal',
		position: 'Site Manager',
		image: '/team/bishal-rawal.jpg',
		bio: 'Overseeing on-site operations and ensuring quality construction standards with timely project completion and safety compliance.'
	}
];

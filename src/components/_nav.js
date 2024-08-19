import {
	cilSpeedometer,
	cilChartPie,
	cilCalendar,
	cilUser,
} from '@coreui/icons';

const _nav = [
	{
		type: 'item',
		name: 'Dashboard',
		href: '/',
		icon: cilChartPie,
	},
	{
		type: 'group',
		name: 'User Management',
		href: '/',
		icon: cilUser,
		items: [
			{
				type: 'item',
				name: 'Users',
				href: '/user-management/users',
			},
			{
				type: 'item',
				name: 'Roles',
				href: '/user-management/roles',
			},
		],
	},
	{
		type: 'group',
		name: 'Event Management',
		href: '/',
		icon: cilCalendar,
		items: [
			{
				type: 'item',
				name: 'Events',
				href: '/event-management/events',
			},
			{
				type: 'item',
				name: 'Event Categories',
				href: '/event-management/event-categories',
			},
		],
	},
];

export default _nav;

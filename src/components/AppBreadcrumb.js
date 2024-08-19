import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import routes from '../routes';

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react';

const AppBreadcrumb = () => {
	const router = useRouter();
	const currentLocation = router.asPath;

	const getRouteName = (pathname) => {
		const currentRoute = routes.find((route) => route.path === pathname);
		console.log({ routes });
		console.log({ currentRoute });
		return currentRoute ? currentRoute.name : 'Dashboard';
	};

	const getPathName = (pathname) => {
		const currentRoute = routes.find((route) => route.path === pathname);
		if (currentRoute) {
			return currentRoute.redirect ? currentRoute.redirect : currentRoute.path;
		}

		return '/';
	};

	const getBreadcrumbs = (location) => {
		const breadcrumbs = [];
		location.split('/').reduce((prev, curr, index, array) => {
			const currentPathname = `${prev}/${curr}`;
			console.log({ currentPathname });
			breadcrumbs.push({
				pathname: getPathName(currentPathname),
				name: getRouteName(currentPathname),
				active: index + 1 === array.length ? true : false,
			});
			return currentPathname;
		});

		return breadcrumbs;
	};

	const breadcrumbs = getBreadcrumbs(currentLocation);

	return (
		<CBreadcrumb className="m-0 ms-2">
			<Link href="/">
				<CBreadcrumbItem href="#">Home</CBreadcrumbItem>
			</Link>
			{breadcrumbs.map((breadcrumb, index) => {
				return (
					<Link href={breadcrumb.pathname} key={index}>
						<CBreadcrumbItem
							{...(breadcrumb.active ? { active: true } : { href: '#' })}
							key={index}
						>
							{breadcrumb.name}
						</CBreadcrumbItem>
					</Link>
				);
			})}
		</CBreadcrumb>
	);
};

export default React.memo(AppBreadcrumb);

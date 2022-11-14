import React from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, demoPagesMenu, pageLayoutTypesPagesMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers: RouteProps[] = [
	{ path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlySubheader.path, element: null },
	{ path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyContent.path, element: null },
	{ path: pageLayoutTypesPagesMenu.blank.path, element: null },
	{ path: demoPagesMenu.login.path, element: null },
	{ path: demoPagesMenu.signUp.path, element: null },
	{ path: demoPagesMenu.page404.path, element: null },
	{ path: dashboardPagesMenu.dashboard.path, element: <DashboardHeader /> },
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;

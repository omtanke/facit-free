import React from 'react';
import { Route, Routes } from 'react-router-dom';
import asides from '../../routes/asideRoutes';

const AsideRoutes = () => {
	return (
		<Routes>
			{asides.map((page) => (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Route key={page.path} {...page} />
			))}
		</Routes>
	);
};

export default AsideRoutes;

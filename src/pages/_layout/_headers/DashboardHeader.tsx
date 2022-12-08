import React from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Popovers from '../../../components/bootstrap/Popovers';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';

const DashboardHeader = () => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	return (
		<Header>
			<HeaderLeft>
				<Popovers
					title='DashboardHeader.tsx'
					desc={<code>src/pages/_layout/_headers/DashboardHeader.tsx</code>}>
					HeaderLeft
				</Popovers>
				<code>DashboardHeader.tsx</code>
			</HeaderLeft>

			<HeaderRight>
				<div className='row g-3 align-items-center'>
					<div className='col-auto'>
						<Popovers
							title='DashboardHeader.tsx'
							desc={<code>src/pages/_layout/_headers/DashboardHeader.tsx</code>}>
							HeaderRight
						</Popovers>
						<code className='ps-3'>DashboardHeader.tsx</code>
					</div>
					{/* Dark Mode */}
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Dark / Light mode'>
							<Button
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...styledBtn}
								icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
								onClick={() => setDarkModeStatus(!darkModeStatus)}
								aria-label='Toggle fullscreen'
								data-tour='dark-mode'
							/>
						</Popovers>
					</div>
				</div>
			</HeaderRight>
		</Header>
	);
};

export default DashboardHeader;

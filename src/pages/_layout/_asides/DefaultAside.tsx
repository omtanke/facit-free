import React, { ReactNode, useContext, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { dashboardPagesMenu, demoPagesMenu, pageLayoutTypesPagesMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import Icon from '../../../components/icon/Icon';
import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';
import Popovers from '../../../components/bootstrap/Popovers';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	const [doc, setDoc] = useState(
		localStorage.getItem('facit_asideDocStatus') === 'true' || false,
	);

	const { t } = useTranslation(['translation', 'menu']);

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={dashboardPagesMenu} id='aside-dashboard' />
				<NavigationLine />
				{!doc && (
					<>
						<Navigation menu={demoPagesMenu} id='aside-demo-pages' />
						<NavigationLine />
						<Navigation menu={pageLayoutTypesPagesMenu} id='aside-menu' />
						<NavigationLine />
						<nav>
							<div className='navigation'>
								<div className='navigation-item'>
									<span className='navigation-link navigation-link-pill'>
										<span className='navigation-link-info'>
											<span className='navigation-text'>
												<Popovers
													title='Aside.tsx'
													desc={
														<code>
															src/pages/_layout/_asides/DefaultAside.tsx
														</code>
													}>
													Aside
												</Popovers>
												<code className='ps-3'>DefaultAside.tsx</code>
											</span>
										</span>
									</span>
								</div>
							</div>
						</nav>
					</>
				)}
				{asideStatus && doc && <div className='p-4'>Documentation</div>}
			</AsideBody>
			<AsideFoot>
				<nav aria-label='aside-bottom-menu'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								localStorage.setItem('facit_asideDocStatus', String(!doc));
								setDoc(!doc);
							}}
							data-tour='documentation'>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon
										icon={doc ? 'ToggleOn' : 'ToggleOff'}
										color={doc ? 'success' : undefined}
										className='navigation-icon'
									/>
									<span className='navigation-text'>
										{t('menu:Documentation') as ReactNode}
									</span>
								</span>
								<span className='navigation-link-extra'>
									<Icon
										icon='Circle'
										className={classNames(
											'navigation-notification',
											'text-success',
											'animate__animated animate__heartBeat animate__infinite animate__slower',
										)}
									/>
								</span>
							</span>
						</div>
					</div>
				</nav>
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default DefaultAside;

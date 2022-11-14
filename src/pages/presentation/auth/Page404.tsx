import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Humans from '../../../assets/img/scene4.png';
import HumansWebp from '../../../assets/img/scene4.webp';
import Button from '../../../components/bootstrap/Button';
import { demoPagesMenu } from '../../../menu';

const Page404 = () => {
	return (
		<PageWrapper title={demoPagesMenu.page404.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<div
							className='text-primary fw-bold'
							style={{ fontSize: 'calc(3rem + 3vw)' }}>
							404
						</div>
						<div
							className='text-dark fw-bold'
							style={{ fontSize: 'calc(1.5rem + 1.5vw)' }}>
							Page not found
						</div>
					</div>
					<div className='col-12 d-flex align-items-baseline justify-content-center'>
						<img
							srcSet={HumansWebp}
							src={Humans}
							alt='Humans'
							style={{ height: '50vh' }}
						/>
					</div>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<Button
							className='px-5 py-3'
							color='primary'
							isLight
							icon='HolidayVillage'
							tag='a'
							href='/'>
							Homepage
						</Button>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Page404;

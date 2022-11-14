import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { pageLayoutTypesPagesMenu } from '../../../menu';
import Popovers from '../../../components/bootstrap/Popovers';

const Blank = () => {
	return (
		<PageWrapper title={pageLayoutTypesPagesMenu.blank.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center align-items-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<Popovers
							title='Blank.tsx'
							desc={<code>src/pages/presentation/page-layouts/Blank.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>Blank.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Blank;

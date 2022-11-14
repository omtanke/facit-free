import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import { pageLayoutTypesPagesMenu } from '../../../menu';
import Popovers from '../../../components/bootstrap/Popovers';

const OnlySubheader = () => {
	return (
		<PageWrapper title={pageLayoutTypesPagesMenu.pageLayout.subMenu.onlySubheader.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Page Layout', to: '/page-layouts' },
							{
								title: 'Only Subheader',
								to: '/page-layouts/only-subheader',
							},
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Popovers
						title='OnlySubheader.tsx'
						desc={<code>src/pages/presentation/page-layouts/OnlySubheader.tsx</code>}>
						SubHeaderRight
					</Popovers>
					<code>OnlySubheader.tsx</code>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center align-items-center'
						style={{ fontSize: 'calc(1rem + 1vw)' }}>
						<Popovers
							title='OnlySubheader.tsx'
							desc={
								<code>src/pages/presentation/page-layouts/OnlySubheader.tsx</code>
							}>
							Page
						</Popovers>
						<code className='ps-3'>OnlySubheader.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default OnlySubheader;

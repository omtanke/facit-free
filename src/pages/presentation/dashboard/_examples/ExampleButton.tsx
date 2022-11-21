import React from 'react';

import Button from '../../../../components/bootstrap/Button';

const ExampleButton = () => {
	return (
		<div className='row g-3'>
			<div className='col-12'>
				<p className='lead'>Example Button</p>
			</div>
			<div className='col-auto'>
				<Button color='success' icon='Article'>
					Default Success Button
				</Button>
			</div>
			<div className='col-auto'>
				<Button color='info' isLight icon='Lightbulb'>
					Light Info Button
				</Button>
			</div>
			<div className='col-auto'>
				<Button color='danger' isOutline icon='LineStyle'>
					Danger Outline Button
				</Button>
			</div>
			<div className='col-auto'>
				<Button color='primary' icon='DisabledVisible' isDisable>
					Primary Disable Button
				</Button>
			</div>
		</div>
	);
};

export default ExampleButton;

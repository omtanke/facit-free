import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Render Light Info Button', () => {
	render(
		<Button color='info' isLight>
			Click
		</Button>,
	);
	const buttonElement = screen.getByText(/click/i);
	expect(buttonElement).toHaveClass('btn-light-info');
	expect(buttonElement).toBeInTheDocument();
});

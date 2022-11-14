import { Store } from 'react-notifications-component';

const SETTINGS = {
	insert: 'top',
	container: 'top-right',
	animationIn: ['animate__animated', 'animate__fadeIn'],
	animationOut: ['animate__animated', 'animate__fadeOut'],
	dismiss: {
		duration: 5000,
		pauseOnHover: true,
		onScreen: true,
		showIcon: true,
		waitForAnimation: true,
	},
};

const showNotification = (
	title: string | JSX.Element,
	message: string | JSX.Element,
	type = 'default',
) => {
	Store.addNotification({
		title,
		message,
		// @ts-ignore
		type,
		...SETTINGS,
	});
};

export default showNotification;

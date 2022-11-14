import { useEffect, useState } from 'react';
import { hasNotch } from '../helpers/helpers';

export default function useDeviceScreen() {
	const isClient = typeof window === 'object';

	function getProperties() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
			screenWidth: isClient ? window.screen.width : undefined,
			screenHeight: isClient ? window.screen.height : undefined,
			portrait: isClient ? window.matchMedia('(orientation: portrait)').matches : undefined,
			landscape: isClient ? window.matchMedia('(orientation: landscape)').matches : undefined,
			notch: hasNotch(),
		};
	}

	const [deviceScreen, setDeviceScreen] = useState(getProperties);

	// @ts-ignore
	useEffect(() => {
		if (!isClient) {
			return false;
		}

		function handleResize() {
			setDeviceScreen(getProperties());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, []);

	return deviceScreen;
}

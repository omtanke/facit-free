import React, { useContext } from 'react';
import { useWindowSize } from 'react-use';
import ThemeContext from '../../contexts/themeContext';

const WrapperOverlay = () => {
	const { width } = useWindowSize();
	const { asideStatus, setAsideStatus, setLeftMenuStatus, setRightMenuStatus } =
		useContext(ThemeContext);

	if (asideStatus && width < Number(process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE))
		return (
			<div
				role='presentation'
				onClick={() => {
					setAsideStatus(false);
					setLeftMenuStatus(false);
					setRightMenuStatus(false);
				}}
				className='wrapper-overlay'
			/>
		);
	return null;
};

export default WrapperOverlay;

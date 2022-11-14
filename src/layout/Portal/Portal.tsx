import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { FC, ReactNode, useContext } from 'react';
import ThemeContext from '../../contexts/themeContext';

interface IPortalProps {
	children: ReactNode;
	id?: string;
}
// @ts-ignore
const Portal: FC<IPortalProps> = ({ id, children }) => {
	const { fullScreenStatus } = useContext(ThemeContext);

	// @ts-ignore
	const mount = document.getElementById(id);
	if (fullScreenStatus) return children;
	if (mount) return ReactDOM.createPortal(children, mount);
	return null;
};
Portal.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
};
Portal.defaultProps = {
	id: 'portal-root',
};

export default Portal;
